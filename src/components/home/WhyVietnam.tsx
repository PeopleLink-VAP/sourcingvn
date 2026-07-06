import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import apparelImg from "@/assets/images/placeholder-product-apparel.jpg";
import handicraftImg from "@/assets/images/placeholder-product-handicraft.jpg";
import industrialImg from "@/assets/images/placeholder-product-industrial.jpg";
import agricultureImg from "@/assets/images/placeholder-product-agriculture.jpg";

const stats = [
  { to: 560000, suffix: "+", label: "Tech talent pool in Vietnam", color: "teal" },
  { to: 20000, suffix: "+", label: "Professionals in our VA community", color: "coral" },
  { to: 20, suffix: " yrs", label: "Leading our tech practice", color: "sunshine" },
];

// Vietnam vs regional peers, tech talent pool (approx, in thousands)
const talentBars = [
  { country: "India", value: 5800, highlight: false },
  { country: "Philippines", value: 1300, highlight: false },
  { country: "Vietnam", value: 560, highlight: true },
];

const productImages = [
  { src: apparelImg, alt: "placeholder-product-apparel" },
  { src: handicraftImg, alt: "placeholder-product-handicraft" },
  { src: industrialImg, alt: "placeholder-product-industrial" },
  { src: agricultureImg, alt: "placeholder-product-agriculture" },
];

const BarChart = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const max = Math.max(...talentBars.map((b) => b.value));

  return (
    <div ref={ref} className="bg-cream rounded-2xl p-6 border border-navy/5">
      <p className="text-xs font-semibold uppercase tracking-widest text-cool-gray mb-1">
        Tech talent pool
      </p>
      <p className="text-sm text-cool-gray mb-5">
        Vietnam sits on the same shortlist as India and the Philippines.
      </p>
      <div className="space-y-4">
        {talentBars.map((bar, i) => (
          <div key={bar.country}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className={`font-medium ${bar.highlight ? "text-navy" : "text-cool-gray"}`}>
                {bar.country}
              </span>
              <span className={`font-display font-bold ${bar.highlight ? "text-navy" : "text-cool-gray"}`}>
                {bar.value >= 1000 ? `${(bar.value / 1000).toFixed(1)}M` : `${bar.value}K`}
              </span>
            </div>
            <div className="h-3 bg-navy/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${(bar.value / max) * 100}%` } : {}}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                className={`h-full rounded-full ${
                  bar.highlight
                    ? "bg-gradient-to-r from-teal to-sunshine"
                    : "bg-navy/25"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-cool-gray/80 mt-5 italic">
        Developer headcount, rounded. Sources: NASSCOM, IBPAP, TopDev.
      </p>
    </div>
  );
};

export const WhyVietnam = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-coral mb-4">
            Why Vietnam, Why Now
          </p>
          <h2 className="headline-lg text-navy mb-6">
            Vietnam isn't a backup option anymore. It's the first call.
          </h2>
          <p className="body-lg text-cool-gray">
            One of the hottest sourcing markets right now, and it's bigger than
            apparel and handicrafts. Heavy industry, agriculture, and a tech
            talent pool that now sits alongside India and the Philippines on
            every serious outsourcing shortlist.
          </p>
        </motion.div>

        {/* Big stat counters strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-cream rounded-2xl p-6 border border-navy/5 overflow-hidden group"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-${s.color}`}
              />
              <AnimatedCounter
                to={s.to}
                suffix={s.suffix}
                className="block text-4xl md:text-5xl font-display font-bold text-navy"
              />
              <p className="text-sm text-cool-gray mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bar chart + product grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <BarChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-cool-gray mb-3">
              What we source
            </p>
            <div className="grid grid-cols-2 gap-3">
              {productImages.map((img, i) => (
                <div
                  key={img.alt}
                  className={`relative rounded-2xl overflow-hidden shadow-sm ${
                    i % 2 === 0 ? "mt-0" : "mt-6"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
