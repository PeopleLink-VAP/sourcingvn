import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Package, Users, Cpu, Star } from "lucide-react";
import qualityInspectorImage from "@/assets/images/quality-inspector.jpg";
import supportTeamImage from "@/assets/images/support-team.jpg";
import happyTeamImage from "@/assets/images/happy-team.jpg";

const paths = [
  {
    icon: Package,
    title: "Product Sourcing",
    description: "Factories, suppliers, quality control — we handle it on the ground.",
    href: "/product-sourcing",
    image: qualityInspectorImage,
    color: "teal",
    stats: "200+ products sourced"
  },
  {
    icon: Users,
    title: "Talent Sourcing",
    description: "Reliable support without full-time overhead. Founders started as VAs.",
    href: "/talent-sourcing",
    image: supportTeamImage,
    color: "coral",
    stats: "50+ team members placed"
  },
  {
    icon: Cpu,
    title: "Digital & Systems",
    description: "Websites, AI chatbots, CRM, internal tools. Built to work.",
    href: "/digital-systems",
    image: happyTeamImage,
    color: "navy",
    stats: "100+ systems built"
  },
];

export const ChoosePath = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-navy via-navy-deep to-navy-light relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pattern-dots opacity-15" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-64 h-64 bg-sunshine/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-teal/5 rounded-full blur-3xl"
      />
      
      <div className="container-editorial relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sunshine mb-4">
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
                className="group block bg-cream/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-cream/10 hover:border-sunshine/50 transition-all duration-500 hover:bg-cream/10"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
                  
                  {/* Stats badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-sunshine/90 text-navy text-xs font-semibold rounded-full">
                    <Star className="w-3 h-3" />
                    {path.stats}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <path.icon 
                      className="w-8 h-8 text-sunshine" 
                      strokeWidth={1.5}
                    />
                    <h3 className="headline-md text-cream group-hover:text-sunshine transition-colors">{path.title}</h3>
                  </div>
                  <p className="body-md text-cream/70 mb-6">
                    {path.description}
                  </p>
                  <div className="flex items-center gap-2 text-sunshine font-medium">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See all use cases link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            to="/use-cases" 
            className="inline-flex items-center gap-2 text-cream/80 hover:text-sunshine transition-colors font-medium"
          >
            See all success stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
