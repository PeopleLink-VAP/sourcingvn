import { motion } from "framer-motion";
import { Package, Users, Cpu } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Product Sourcing",
    description: "Find and verify factories. Negotiate without commission. Control quality on the ground.",
  },
  {
    icon: Users,
    title: "Talent Sourcing",
    description: "Hire reliable support without the overhead. From VAs to specialized roles.",
  },
  {
    icon: Cpu,
    title: "Digital & Systems",
    description: "Websites, automation, AI tools. Built lean, built to scale.",
  },
];

export const WhatWeDo = () => {
  return (
    <section className="section-padding surface-cream">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
            What We Do
          </p>
          <h2 className="headline-lg text-navy max-w-2xl">
            Three ways to source smarter in Vietnam.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6">
                <service.icon 
                  className="w-10 h-10 text-navy-light group-hover:text-gold transition-colors duration-300" 
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="headline-md text-navy mb-4">{service.title}</h3>
              <p className="body-md text-cool-gray leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
