import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Package, Users, Cpu } from "lucide-react";

const paths = [
  {
    icon: Package,
    title: "Product Sourcing",
    description: "Factories, suppliers, quality control — we handle it on the ground.",
    href: "/product-sourcing",
    accent: "hover:border-gold",
  },
  {
    icon: Users,
    title: "Talent Sourcing",
    description: "Reliable support without full-time overhead. Founders started as VAs.",
    href: "/talent-sourcing",
    accent: "hover:border-gold",
  },
  {
    icon: Cpu,
    title: "Digital & Systems",
    description: "Websites, AI chatbots, CRM, internal tools. Built to work.",
    href: "/digital-systems",
    accent: "hover:border-gold",
  },
];

export const ChoosePath = () => {
  return (
    <section className="section-padding surface-dark pattern-lines">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
            Choose Your Path
          </p>
          <h2 className="headline-lg text-cream max-w-2xl mx-auto">
            What are you looking to source?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={path.href}
                className={`group block p-8 lg:p-10 bg-navy-deep/50 border border-cream/10 ${path.accent} transition-all duration-300 hover:bg-navy-deep/80`}
              >
                <path.icon 
                  className="w-12 h-12 text-cream/60 group-hover:text-gold transition-colors duration-300 mb-6" 
                  strokeWidth={1}
                />
                <h3 className="headline-md text-cream mb-4">{path.title}</h3>
                <p className="body-md text-cream/60 mb-8">
                  {path.description}
                </p>
                <div className="flex items-center gap-2 text-gold font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
