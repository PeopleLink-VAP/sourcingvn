import { motion } from "framer-motion";
import { Package, Users, Cpu } from "lucide-react";
import factoryImg from "@/assets/images/factory-workers.jpg";
import talentImg from "@/assets/images/asian-woman-laptop.jpg";
import devImg from "@/assets/images/developer-working.jpg";

const specialists = [
  {
    icon: Package,
    title: "Product Sourcing",
    description:
      "Someone who's spent their career in apparel, industrial goods, or agriculture. Not a generalist reading a spec sheet.",
    image: factoryImg,
    color: "teal",
  },
  {
    icon: Users,
    title: "Talent Sourcing",
    description:
      "Drawing from a community of 20,000+ vetted VAs and specialists. A pool most single-service agencies can't match.",
    image: talentImg,
    color: "coral",
  },
  {
    icon: Cpu,
    title: "Digital & Systems",
    description:
      "Led by an expert with 20 years in software, AI, and data transformation.",
    image: devImg,
    color: "navy",
  },
];

export const ThreeSpecialists = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="container-editorial relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-4">
            One Partner, Three Specialists
          </p>
          <h2 className="headline-lg text-navy mb-6">
            We don't do everything a little. We do three things well.
          </h2>
          <p className="body-lg text-cool-gray">
            Sourcing.vn isn't one generalist wearing three hats. It's three
            specialized teams under one roof. One point of contact. Three teams
            that actually know their lane.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {specialists.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-${s.color}/80 to-transparent opacity-60`}
                />
                <div className="absolute bottom-4 left-4">
                  <s.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="headline-md text-navy mb-3">{s.title}</h3>
                <p className="body-md text-cool-gray leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
