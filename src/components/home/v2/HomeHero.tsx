import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import factory from "@/assets/home/carpenter.jpg.asset.json";

const tabs = ["Find suppliers", "Verify a factory", "Inspect my order"] as const;
const fields = [
  { key: "product", label: "Product", ph: "e.g. Embroidered baseball caps" },
  { key: "quantity", label: "Quantity", ph: "e.g. 500 pcs" },
  { key: "price", label: "Target price", ph: "e.g. $3.50 / unit" },
  { key: "ship", label: "Ship to", ph: "e.g. Los Angeles, US" },
];

export const HomeHero = () => {
  const [tab, setTab] = useState<(typeof tabs)[number]>(tabs[0]);
  const [v, setV] = useState<Record<string, string>>({});

  const mailto = () => {
    const body = fields.map((f) => `${f.label}: ${v[f.key] || ""}`).join("\n");
    return `mailto:hello@sourcing.vn?subject=${encodeURIComponent(`Free quote: ${tab}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bg-background pt-32 pb-16">
      <div className="container-editorial text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          Ready to make it in Vietnam?
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Good factories<span className="text-primary">.</span><br />Great products<span className="text-primary">.</span>
        </motion.h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Supplier search, sample checks, QC and shipping for small and growing brands, handled on the ground by a team that has sat on the buyer's side of the table.
        </p>
      </div>

      <div className="container-editorial mt-12">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img src={factory.url} alt="Carpenter working wood in a Vietnamese workshop" className="h-[320px] w-full object-cover md:h-[460px]" />
          </div>
          <div className="relative mx-4 -mt-24 rounded-3xl bg-card p-5 shadow-xl md:mx-10 md:p-6">
            <div className="inline-flex flex-wrap gap-1 rounded-full bg-muted p-1">
              {tabs.map((t) => (
                <button key={t} onClick={() => setTab(t)}
                  className={`rounded-full px-4 py-2 text-sm transition ${tab === t ? "bg-card font-semibold text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>
                  {t}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-background/60">
              <div className="grid md:grid-cols-4">
                {fields.map((f, i) => (
                  <label key={f.key} className={`block px-5 py-3 text-left ${i ? "border-t md:border-l md:border-t-0" : ""} border-border`}>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{f.label}</span>
                    <input value={v[f.key] || ""} onChange={(e) => setV({ ...v, [f.key]: e.target.value })} placeholder={f.ph}
                      className="mt-1 w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground/70" />
                  </label>
                ))}
              </div>
              <div className="p-3 text-left">
                <a href={mailto()} className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-semibold text-background hover:opacity-90">
                  Get a free quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <p className="mt-3 text-left text-sm text-muted-foreground">
              Reply within 24 hours · Service fee only, no factory commission · No order too small to ask about
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium text-foreground/80">
          <span>100+ SMEs helped on Fiverr</span>
          <span>Team in HCMC · Da Nang · Hanoi</span>
          <span>Former Amazon FBA & Etsy seller</span>
        </div>
      </div>
    </section>
  );
};
