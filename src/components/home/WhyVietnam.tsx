import { motion } from "framer-motion";
import apparelImg from "@/assets/images/placeholder-product-apparel.jpg";
import handicraftImg from "@/assets/images/placeholder-product-handicraft.jpg";
import industrialImg from "@/assets/images/placeholder-product-industrial.jpg";
import agricultureImg from "@/assets/images/placeholder-product-agriculture.jpg";

const stats = [
  { value: "560,000+", label: "Tech talent pool in Vietnam" },
  { value: "20,000+", label: "Professionals in our VA community" },
  { value: "20 yrs", label: "Experience leading our tech practice" },
];

const productImages = [
  { src: apparelImg, alt: "placeholder-product-apparel" },
  { src: handicraftImg, alt: "placeholder-product-handicraft" },
  { src: industrialImg, alt: "placeholder-product-industrial" },
  { src: agricultureImg, alt: "placeholder-product-agriculture" },
];

export const WhyVietnam = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: text + stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-coral mb-4">
              Why Vietnam, Why Now
            </p>
            <h2 className="headline-lg text-navy mb-6">
              Vietnam isn't a backup option anymore. It's the first call.
            </h2>
            <div className="space-y-5 body-md text-cool-gray">
              <p>
                Vietnam is one of the hottest sourcing markets right now — and it's
                bigger than apparel and handicrafts. We regularly source heavy
                industry components and agricultural products alongside the
                categories people expect.
              </p>
              <p>
                On the talent side, the shift is just as real. Vietnam used to sit in
                software outsourcing's shadow, behind India and the Philippines. Not
                anymore. Alongside those two, Vietnam is now a default name on
                outsourcing shortlists — a roughly 560,000-strong tech talent pool,
                double-digit market growth, and rates that make SMEs take notice.
                We've felt that shift directly: most of our talent requests today
                come from SMEs who need a reliable hand, fast, without hiring
                full-time.
              </p>
            </div>

            {/* Stat chips */}
            <div className="mt-10 flex flex-wrap gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 min-w-[180px] bg-cream rounded-2xl px-5 py-4 border border-navy/5"
                >
                  <p className="text-2xl font-display font-bold text-navy">
                    {stat.value}
                  </p>
                  <p className="text-sm text-cool-gray mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: 2x2 product grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {productImages.map((img, i) => (
              <div
                key={img.alt}
                className={`relative rounded-2xl overflow-hidden shadow-sm ${
                  i % 2 === 0 ? "mt-0" : "mt-8"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
