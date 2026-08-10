import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, DollarSign, Eye, Check, X } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import asianBusinessImage from "@/assets/images/asian-business.jpg";

// Donut ring showing "0% commission"
const CommissionRing = () => {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const R = 42;
  const C = 2 * Math.PI * R;
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg ref={ref} viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={R} className="stroke-navy/10" strokeWidth="8" fill="none" />
        <motion.circle
          cx="50" cy="50" r={R}
          className="stroke-sunshine"
          strokeWidth="8" fill="none" strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          animate={inView ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-display font-bold text-navy">0%</span>
        <span className="text-[10px] uppercase tracking-widest text-cool-gray mt-0.5">
          Commission
        </span>
      </div>
    </div>
  );
};

// Clients supported counter
const ClientsSupported = () => (
  <div className="w-32 h-32 mx-auto flex flex-col items-center justify-center">
    <AnimatedCounter
      to={100}
      suffix="+"
      className="text-4xl font-display font-bold text-navy"
    />
    <span className="text-[10px] uppercase tracking-widest text-cool-gray mt-1 text-center">
      Clients supported<br />with product sourcing
    </span>
  </div>
);

// Transparency checklist visual
const TransparencyList = () => {
  const rows = [
    { label: "Supplier name", ok: true },
    { label: "Unit cost", ok: true },
    { label: "Factory audit", ok: true },
    { label: "Hidden markup", ok: false },
  ];
  return (
    <div className="w-full space-y-1.5">
      {rows.map((r, i) => (
        <motion.div
          key={r.label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-2 text-xs"
        >
          {r.ok ? (
            <Check className="w-3.5 h-3.5 text-teal flex-shrink-0" />
          ) : (
            <X className="w-3.5 h-3.5 text-coral flex-shrink-0" />
          )}
          <span className={r.ok ? "text-navy" : "text-cool-gray line-through"}>
            {r.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const truths = [
  {
    icon: MapPin,
    label: "On-site / off-site",
    text: "Not every owner wants a finished product. We join at whatever stage your sourcing is at.",
    visual: <ClientsSupported />,
    color: "teal",
  },
  {
    icon: DollarSign,
    label: "No commission",
    text: "We charge for work, not a cut of your order.",
    visual: <CommissionRing />,
    color: "sunshine",
  },
  {
    icon: Eye,
    label: "Full transparency",
    text: "You see the supplier, the cost, the audit.",
    visual: (
      <div className="w-32 h-32 mx-auto flex items-center justify-center">
        <TransparencyList />
      </div>
    ),
    color: "coral",
  },
];

export const WhyDifferent = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-cream to-teal/5 relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute top-20 right-20 w-40 h-40 border-2 border-dashed border-sunshine/20 rounded-full"
      />

      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: header + image + quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-coral mb-4">
              Why We're Different
            </p>
            <h2 className="headline-lg text-navy mb-6">
              Sourcing without the usual games.
            </h2>
            <p className="body-lg text-cool-gray mb-8">
              Most sourcing agents make money when you spend more.
              We make money when you succeed. That changes everything.
            </p>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={asianBusinessImage}
                alt="Business partnership in Vietnam"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-cream font-medium text-lg">
                  "They saved us $45,000 on our first order alone."
                </p>
                <p className="text-cream/70 text-sm mt-2">– Sarah K., Bloom Naturals</p>
              </div>
            </div>
          </motion.div>

          {/* Right: 3 visual proof tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {truths.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b bg-${t.color}`} />
                <div className="mt-3 mb-3 h-32 flex items-center justify-center w-full">
                  {t.visual}
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <t.icon className={`w-4 h-4 text-${t.color}`} />
                  <h3 className="font-display font-semibold text-navy text-sm">
                    {t.label}
                  </h3>
                </div>
                <p className="text-xs text-cool-gray leading-relaxed">
                  {t.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
