import { motion } from "framer-motion";
import { Package, Users, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import qualityInspectorImage from "@/assets/images/quality-inspector.jpg";
import supportTeamImage from "@/assets/images/support-team.jpg";
import happyTeamImage from "@/assets/images/happy-team.jpg";

const services = [
  {
    icon: Package,
    title: "Product Sourcing",
    description: "Find and verify factories. Negotiate without commission. Control quality on the ground.",
    image: qualityInspectorImage,
    color: "teal",
    href: "/product-sourcing"
  },
  {
    icon: Users,
    title: "Talent Sourcing",
    description: "Hire reliable support without the overhead. From VAs to specialized roles.",
    image: supportTeamImage,
    color: "coral",
    href: "/talent-sourcing"
  },
  {
    icon: Cpu,
    title: "Digital & Systems",
    description: "Websites, automation, AI tools. Built lean, built to scale.",
    image: happyTeamImage,
    color: "navy",
    href: "/digital-systems"
  },
];

export const WhatWeDo = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sunshine/5 to-transparent" />
      
      <div className="container-editorial relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-4">
            What We Do
          </p>
          <h2 className="headline-lg text-navy max-w-2xl">
            Three ways to source smarter in Vietnam.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link 
                to={service.href}
                className="group block bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${service.color}/80 to-transparent opacity-60`} />
                  <div className="absolute bottom-4 left-4">
                    <service.icon 
                      className="w-10 h-10 text-white" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="headline-md text-navy mb-3 group-hover:text-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="body-md text-cool-gray leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-teal font-medium">
                    <span>Learn more</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
