import { List, ShieldCheck, Search, Factory, ClipboardCheck, Truck, BarChart3, MapPin, Star, Check } from "lucide-react";

const services = [
  [List, "Supplier list", "Shortlisted factories that match your product, budget and MOQ."],
  [ShieldCheck, "Company verification", "We confirm a supplier is real, licensed and capable before you pay."],
  [Search, "Sample checking", "In-person review with photos, video and honest notes."],
  [Factory, "Mass production follow-up", "We track your order and flag problems before they become delays."],
  [ClipboardCheck, "Quality control", "Pre-shipment inspections through trusted inspection partners."],
  [Truck, "Logistics support", "Shipping quotes and paperwork coordinated with freight partners."],
  [BarChart3, "Market research", "Pricing, materials and supplier insight before you commit."],
  [MapPin, "Assistant on the go", "Factory visits, translation and meetings when you're in Vietnam."],
] as const;

export const ServicesPricing = () => (
  <section id="services" className="bg-background py-20">
    <div className="container-editorial">
      <div className="grid items-end gap-6 md:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Services</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">One service or all of them</h2>
        </div>
        <p className="text-muted-foreground">Start with a single factory check or hand us the whole order. Whichever you need, it's available.</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(([Icon, t, d]) => (
          <div key={t} className="rounded-3xl bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <Icon className="h-6 w-6 text-primary" />
            <p className="mt-5 font-semibold text-foreground">{t}</p>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>

      <div id="pricing" className="surface-dark mt-20 grid gap-10 rounded-[2rem] p-8 md:p-14 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold"><Star className="h-3.5 w-3.5 fill-current" /> How we charge</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">Service fee only. No factory commission.</h2>
          <p className="mt-6 text-lg opacity-80">Our job is to get you the best deal, not to mark it up. Inspections and shipping run through trusted third-party vendors, and we pass their quotes straight to you.</p>
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-2xl border border-current/20 p-6">
            <p className="text-sm opacity-70">Every project is quoted on</p>
            <p className="mt-2 font-display text-3xl font-bold">Your scope, not a package.</p>
          </div>
          <ul className="mt-6 space-y-3">
            {["You see every vendor quote", "No hidden margin on factory prices", "Pay only for the services you use"].map((x) => (
              <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> {x}</li>
            ))}
          </ul>
          <a href="mailto:hello@sourcing.vn?subject=Free%20quote" className="mt-8 w-fit rounded-full bg-cream px-6 py-3 font-semibold text-navy-deep">Get a free quote</a>
        </div>
      </div>
    </div>
  </section>
);
