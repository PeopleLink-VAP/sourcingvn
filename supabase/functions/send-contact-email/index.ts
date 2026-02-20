import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  services: string[];
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(RESEND_API_KEY);
    const { name, email, company, message, services } =
      (await req.json()) as ContactFormData;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const serviceLabels: Record<string, string> = {
      product: "Product Sourcing",
      talent: "Talent Sourcing",
      digital: "Digital & Systems",
    };

    const selectedServices =
      services?.map((s) => serviceLabels[s] || s).join(", ") || "None selected";

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f1ec;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f1ec;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:2px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:22px;font-weight:400;letter-spacing:2px;color:#ffffff;font-family:Georgia,'Times New Roman',serif;">SOURCING.VN</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#333333;">Dear ${name},</p>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#333333;">Thank you for reaching out to us. We've received your inquiry and appreciate your interest in working with Sourcing.vn.</p>
              <p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#333333;">Our team will review your message and <strong>follow up via email within the next 2 business days</strong>.</p>
              
              <!-- Inquiry Summary -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9f7f4;border-left:3px solid #1a1a1a;padding:0;margin:24px 0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#888888;font-family:Arial,sans-serif;">Your Inquiry Summary</p>
                    <p style="margin:0 0 4px;font-size:14px;color:#555555;"><strong>Services:</strong> ${selectedServices}</p>
                    ${company ? `<p style="margin:0 0 4px;font-size:14px;color:#555555;"><strong>Company:</strong> ${company}</p>` : ""}
                    <p style="margin:8px 0 0;font-size:14px;color:#555555;"><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:24px 0 0;font-size:16px;line-height:1.7;color:#333333;">In the meantime, feel free to reply to this email if you have any additional details to share.</p>
              <p style="margin:24px 0 0;font-size:16px;line-height:1.7;color:#333333;">Warm regards,<br/><strong>The Sourcing.vn Team</strong></p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f9f7f4;padding:24px 40px;border-top:1px solid #e8e4de;">
              <p style="margin:0;font-size:12px;color:#999999;text-align:center;font-family:Arial,sans-serif;">
                Sourcing.vn · Your bridge to Vietnamese talent &amp; capability<br/>
                <a href="https://sourcing.vn" style="color:#666666;text-decoration:none;">sourcing.vn</a> · <a href="mailto:hello@sourcing.vn" style="color:#666666;text-decoration:none;">hello@sourcing.vn</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Sourcing.vn <hello@sourcing.vn>",
      to: [email],
      cc: ["hello@sourcing.vn"],
      replyTo: "hello@sourcing.vn",
      subject: `Thank you for reaching out, ${name} — Sourcing.vn`,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
