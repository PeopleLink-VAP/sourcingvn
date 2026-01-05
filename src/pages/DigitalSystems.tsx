import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Bot, Database, Cog } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description: "Fast, modern websites that work. Built lean, designed to convert.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Customer support automation. Answer questions 24/7 without hiring.",
  },
  {
    icon: Database,
    title: "CRM & Operations",
    description: "Organize your leads, customers, and processes in one place.",
  },
  {
    icon: Cog,
    title: "Internal Tools",
    description: "Custom dashboards, automations, and integrations for your team.",
  },
];

const DigitalSystems = () => {
  return (
    <div className="min-h-screen bg-navy-deep">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Digital & Systems
            </p>
            <h1 className="headline-xl text-cream mb-6">
              Tools that work.
              <br />
              <span className="text-cream/60">No buzzwords required.</span>
            </h1>
            <p className="body-lg text-cream/70 max-w-2xl">
              We build websites, chatbots, CRM systems, and internal tools. 
              Clean, functional, built to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-navy/50 border border-cream/10 p-8 lg:p-10 hover:border-gold/30 transition-all duration-300 group"
              >
                <service.icon 
                  className="w-10 h-10 text-cream/40 group-hover:text-gold transition-colors duration-300 mb-6" 
                  strokeWidth={1.5}
                />
                <h3 className="headline-md text-cream mb-4">{service.title}</h3>
                <p className="body-md text-cream/60">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
                Our Approach
              </p>
              <h2 className="headline-lg text-navy mb-6">
                Built lean.
                <br />
                Built to work.
              </h2>
              <p className="body-lg text-cool-gray mb-6">
                We don't build complex systems to impress. We build what you 
                actually need — clean interfaces, smart automation, reliable 
                infrastructure.
              </p>
              <p className="body-md text-navy">
                Every tool we create is designed to save time, reduce errors, 
                and scale with your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="border-l-2 border-gold pl-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
                  No bloat
                </p>
                <p className="body-md text-navy">
                  We build only what you need. No unnecessary features, 
                  no over-engineering.
                </p>
              </div>
              <div className="border-l-2 border-navy/20 hover:border-gold pl-6 transition-colors">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Maintainable
                </p>
                <p className="body-md text-navy">
                  Clean code, clear documentation. You can understand and 
                  modify what we build.
                </p>
              </div>
              <div className="border-l-2 border-navy/20 hover:border-gold pl-6 transition-colors">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Scalable
                </p>
                <p className="body-md text-navy">
                  Start small, grow big. Our systems are designed to handle 
                  10x your current load.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding surface-dark">
        <div className="container-editorial text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-lg text-cream mb-6">
              Ready to build something?
            </h2>
            <p className="body-lg text-cream/60 mb-10 max-w-xl mx-auto">
              Tell us what you need. We'll scope it out and give you a clear plan.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/start-project">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalSystems;
