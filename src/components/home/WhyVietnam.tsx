import { motion } from "framer-motion";
import apparelImg from "@/assets/images/placeholder-product-apparel.jpg";
import handicraftImg from "@/assets/images/placeholder-product-handicraft.jpg";
import industrialImg from "@/assets/images/placeholder-product-industrial.jpg";
import agricultureImg from "@/assets/images/placeholder-product-agriculture.jpg";

const productImages = [
  { src: apparelImg, alt: "placeholder-product-apparel", label: "Apparel & textiles" },
  { src: handicraftImg, alt: "placeholder-product-handicraft", label: "Handicraft" },
  { src: industrialImg, alt: "placeholder-product-industrial", label: "Industrial parts" },
  { src: agricultureImg, alt: "placeholder-product-agriculture", label: "Agriculture" },
];

// Founder locations + strategic hubs
const cities = [
  { name: "Hanoi", x: 175, y: 100, kind: "hub" },
  { name: "Da Nang", x: 245, y: 290, kind: "founder", note: "Founder base" },
  { name: "Ho Chi Minh City", x: 170, y: 450, kind: "founder", note: "Founder base" },
];

// Stylized Vietnam silhouette (approximate, illustrative)
const VIETNAM_PATH =
  "M 130 25 L 180 40 L 205 80 L 225 125 L 220 170 L 235 210 L 250 255 L 262 295 L 258 335 L 235 365 L 215 395 L 205 430 L 175 470 L 140 482 L 108 470 L 92 442 L 118 405 L 148 365 L 172 320 L 182 275 L 170 235 L 158 195 L 152 155 L 138 115 L 118 75 Z";

const VietnamMap = () => {
  return (
    <div className="relative bg-cream rounded-2xl p-6 border border-navy/5">
      <p className="text-xs font-semibold uppercase tracking-widest text-cool-gray mb-1">
        On the ground in Vietnam
      </p>
      <p className="text-sm text-cool-gray mb-4">
        Our founder splits time between Ho Chi Minh City and Da Nang, with active
        supplier and talent networks nationwide.
      </p>

      <div className="relative flex justify-center">
        <svg
          viewBox="0 0 360 520"
          className="w-full max-w-[280px] h-auto"
          role="img"
          aria-label="Map of Vietnam with founder locations in Ho Chi Minh City and Da Nang"
        >
          <defs>
            <linearGradient id="vn-fill" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--teal))" stopOpacity="0.18" />
              <stop offset="100%" stopColor="hsl(var(--sunshine))" stopOpacity="0.28" />
            </linearGradient>
          </defs>

          {/* Country shape */}
          <motion.path
            d={VIETNAM_PATH}
            fill="url(#vn-fill)"
            stroke="hsl(var(--navy))"
            strokeWidth="1.5"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          {/* City pins */}
          {cities.map((c, i) => {
            const isFounder = c.kind === "founder";
            return (
              <motion.g
                key={c.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + i * 0.2, duration: 0.4, ease: "backOut" }}
                style={{ transformOrigin: `${c.x}px ${c.y}px` }}
              >
                {isFounder && (
                  <>
                    <motion.circle
                      cx={c.x}
                      cy={c.y}
                      r="4"
                      fill="hsl(var(--coral))"
                      opacity="0.4"
                      animate={{ r: [4, 18, 4], opacity: [0.5, 0, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2.4, ease: "easeOut", delay: i * 0.6 }}
                    />
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="6"
                      fill="hsl(var(--coral))"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </>
                )}
                {!isFounder && (
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r="3.5"
                    fill="hsl(var(--navy))"
                    opacity="0.5"
                  />
                )}
                <text
                  x={c.x + 12}
                  y={c.y + 4}
                  fontSize="12"
                  fontWeight={isFounder ? 700 : 500}
                  fill="hsl(var(--navy))"
                  className="font-display"
                >
                  {c.name}
                </text>
                {isFounder && c.note && (
                  <text
                    x={c.x + 12}
                    y={c.y + 18}
                    fontSize="9"
                    fill="hsl(var(--coral))"
                    fontWeight={600}
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {c.note.toUpperCase()}
                  </text>
                )}
              </motion.g>
            );
          })}
        </svg>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4 text-xs text-cool-gray">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-coral" />
          Founder base
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-navy/50" />
          Strategic hub
        </div>
      </div>
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
            One of the hottest sourcing markets right now, and bigger than the
            categories people expect. Apparel and handicraft, yes. Also heavy
            industry, agriculture, and a fast-growing tech and talent scene that
            now sits on every serious outsourcing shortlist.
          </p>
        </motion.div>

        {/* Map + product grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <VietnamMap />
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
                  className={`group relative rounded-2xl overflow-hidden shadow-sm ${
                    i % 2 === 0 ? "mt-0" : "mt-6"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-3">
                    <p className="text-xs font-medium text-cream">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
