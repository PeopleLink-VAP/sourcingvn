import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Package, Users, Cpu, Send, Loader2, Check, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const serviceOptions = [
  {
    id: "product",
    label: "Product Sourcing",
    icon: Package,
    blurb: "Find factories, check quality, manage production.",
    needs: ["Find a supplier", "Factory visit / audit", "Samples & specs", "Production & shipping"],
  },
  {
    id: "talent",
    label: "Talent Sourcing",
    icon: Users,
    blurb: "Hire Vietnamese talent without the guesswork.",
    needs: ["Virtual assistant", "Developer / designer", "Full local team", "Payroll & admin"],
  },
  {
    id: "digital",
    label: "Digital & Systems",
    icon: Cpu,
    blurb: "Websites, portals and internal systems that work.",
    needs: ["Website", "Internal portal", "Automation / AI", "Not sure yet"],
  },
];

const StartProject = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleNeed = (need: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const activeNeeds = serviceOptions.filter((s) => selectedServices.includes(s.id));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      toast.error("Pick at least one service so we know who should reply.");
      return;
    }
    setIsSubmitting(true);
    try {
      const detail = selectedNeeds.length
        ? `What they need: ${selectedNeeds.join(", ")}\n\n`
        : "";
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: `${detail}${formData.message}`,
          services: selectedServices,
        },
      });
      if (error) throw error;
      toast.success("Thanks! Your message is on its way to hello@sourcing.vn.");
      setFormData({ name: "", email: "", company: "", message: "" });
      setSelectedServices([]);
      setSelectedNeeds([]);
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong. Please email us directly at hello@sourcing.vn.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-14 bg-navy-deep">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Start a Project
            </p>
            <h1 className="headline-xl text-cream mb-6">Tell us what you need.</h1>
            <p className="body-lg text-cream/70">
              Three questions, one message. It lands straight in our inbox at
              hello@sourcing.vn and a real person replies within 2 business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-[1.6fr,1fr] gap-16">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              onSubmit={handleSubmit}
              className="space-y-12"
            >
              {/* Step 1 */}
              <div>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-xs font-medium tracking-widest text-gold">01</span>
                  <h2 className="font-display text-xl font-semibold text-navy">
                    Which service are you after?
                  </h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {serviceOptions.map((service) => {
                    const active = selectedServices.includes(service.id);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`relative p-5 border text-left transition-all duration-200 ${
                          active
                            ? "border-gold bg-gold/10 shadow-sm"
                            : "border-navy/10 hover:border-navy/30 bg-card"
                        }`}
                      >
                        {active && (
                          <span className="absolute top-3 right-3 w-5 h-5 bg-gold flex items-center justify-center">
                            <Check className="w-3 h-3 text-navy-deep" strokeWidth={3} />
                          </span>
                        )}
                        <service.icon
                          className={`w-6 h-6 mb-4 ${active ? "text-gold" : "text-navy/40"}`}
                          strokeWidth={1.5}
                        />
                        <span
                          className={`block text-sm font-semibold mb-1 ${
                            active ? "text-navy" : "text-navy/80"
                          }`}
                        >
                          {service.label}
                        </span>
                        <span className="block text-xs leading-relaxed text-muted-foreground">
                          {service.blurb}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              {activeNeeds.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-xs font-medium tracking-widest text-gold">02</span>
                    <h2 className="font-display text-xl font-semibold text-navy">
                      What kind of help? <span className="text-muted-foreground font-normal text-sm">(optional)</span>
                    </h2>
                  </div>
                  <div className="space-y-5">
                    {activeNeeds.map((service) => (
                      <div key={service.id}>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                          {service.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.needs.map((need) => {
                            const active = selectedNeeds.includes(need);
                            return (
                              <button
                                key={need}
                                type="button"
                                onClick={() => toggleNeed(need)}
                                className={`px-4 py-2 text-sm border transition-colors ${
                                  active
                                    ? "border-navy bg-navy text-cream"
                                    : "border-navy/15 text-navy/70 hover:border-navy/40"
                                }`}
                              >
                                {need}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              <div>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-xs font-medium tracking-widest text-gold">03</span>
                  <h2 className="font-display text-xl font-semibold text-navy">
                    Where do we send the reply?
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 rounded-none border-navy/20 focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        maxLength={255}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 rounded-none border-navy/20 focus:border-gold focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                      Company (optional)
                    </label>
                    <Input
                      id="company"
                      type="text"
                      maxLength={120}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-12 rounded-none border-navy/20 focus:border-gold focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      A few lines about your project *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      maxLength={2000}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What are you trying to accomplish? Any timeline or volumes we should know?"
                      className="rounded-none border-navy/20 focus:border-gold focus:ring-gold resize-none"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send to hello@sourcing.vn
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </motion.form>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="lg:pl-8 lg:border-l border-navy/10 h-fit lg:sticky lg:top-32"
            >
              <h3 className="font-display text-lg font-semibold text-navy mb-4">
                What happens next
              </h3>
              <ol className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-10">
                <li className="flex gap-3">
                  <span className="text-gold font-medium">1.</span>
                  Your message goes straight to our inbox. No forms, no CRM, no bots.
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-medium">2.</span>
                  The specialist for your service reads it and replies within 2 business days.
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-medium">3.</span>
                  If it is a fit, we scope it together. If not, we say so honestly.
                </li>
              </ol>

              <div className="pt-8 border-t border-navy/10">
                <p className="text-sm text-muted-foreground mb-3">Prefer plain email?</p>
                <a
                  href="mailto:hello@sourcing.vn"
                  className="inline-flex items-center gap-2 text-lg font-display font-semibold text-gold hover:text-gold-muted transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@sourcing.vn
                </a>
                <p className="text-xs text-muted-foreground mt-4">
                  Ho Chi Minh City &amp; Da Nang, Vietnam
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartProject;
