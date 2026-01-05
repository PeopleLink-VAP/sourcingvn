import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Bot, Database, Cog, Zap, Shield, Code, Smartphone } from "lucide-react";
import { useRef } from "react";

import asianCodingImage from "@/assets/images/asian-coding.jpg";

const services = [
  {
    icon: Globe,
    title: "Websites & Landing Pages",
    description: "Fast, modern websites that work. Built lean, designed to convert.",
    features: ["Responsive design", "SEO optimized", "Fast loading", "Easy to update"],
    useCases: ["Company websites", "Product landing pages", "Portfolio sites", "E-commerce stores"],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Customer support automation. Answer questions 24/7 without hiring.",
    features: ["24/7 availability", "Multi-language", "Lead capture", "Human handoff"],
    useCases: ["Customer support", "Lead qualification", "FAQ automation", "Appointment booking"],
  },
  {
    icon: Database,
    title: "CRM & Operations",
    description: "Organize your leads, customers, and processes in one place.",
    features: ["Custom fields", "Automation", "Reporting", "Integrations"],
    useCases: ["Sales pipeline", "Customer tracking", "Order management", "Team workflows"],
  },
  {
    icon: Cog,
    title: "Internal Tools",
    description: "Custom dashboards, automations, and integrations for your team.",
    features: ["Custom logic", "API integrations", "Real-time data", "Role-based access"],
    useCases: ["Admin dashboards", "Inventory systems", "Reporting tools", "Process automation"],
  },
];

const techPrinciples = [
  {
    icon: Zap,
    title: "No Bloat",
    description: "We build only what you need. No unnecessary features, no over-engineering.",
  },
  {
    icon: Code,
    title: "Maintainable",
    description: "Clean code, clear documentation. You can understand and modify what we build.",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Security best practices baked in. Your data and your customers' data protected.",
  },
  {
    icon: Smartphone,
    title: "Scalable",
    description: "Start small, grow big. Our systems handle 10x your current load without breaking.",
  },
];

const DigitalSystems = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const codeY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen bg-navy-deep">
      <Navigation />
      
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-center">
        <motion.div 
          className="absolute inset-0"
          style={{ y: codeY }}
        >
          <img 
            src={asianCodingImage} 
            alt="Developer working in Vietnam" 
            className="w-full h-[120%] object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/80" />
        </motion.div>
        
        <div className="absolute inset-0 pattern-grid" />
        
        {/* Floating code elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cream/5 font-mono text-sm whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.1, 0],
                y: ["100%", "-100%"],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 2,
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: "100%",
              }}
            >
              {`const ${['buildSystem', 'deployApp', 'createBot', 'initCRM', 'runAutomation', 'connectAPI'][i]} = async () => {...}`}
            </motion.div>
          ))}
        </div>
        
        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold text-sm font-medium uppercase tracking-widest mb-4 font-mono"
            >
              {"// Digital & Systems"}
            </motion.p>
            <h1 className="headline-xl text-cream mb-6">
              Tools that work.
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-cream/60"
              >
                No buzzwords required.
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="body-lg text-cream/70 max-w-2xl"
            >
              We build websites, chatbots, CRM systems, and internal tools. 
              Clean, functional, built to scale.
            </motion.p>
          </motion.div>
        </div>

        {/* Terminal window decoration */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 right-12 hidden xl:block"
        >
          <div className="bg-navy/80 border border-cream/10 rounded-lg p-4 w-80 backdrop-blur-sm">
            <div className="flex gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-gold/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="font-mono text-xs text-cream/70 space-y-1">
              <p><span className="text-gold">$</span> npm run build</p>
              <p className="text-green-400">✓ Compiled successfully</p>
              <p className="text-cream/40">Ready for deployment</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Animated Dashboard Preview Section - MOVED UP */}
      <section className="py-16 bg-navy pattern-lines overflow-hidden">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
                What You Get
              </p>
              <h2 className="headline-lg text-cream">
                Systems that just work.
              </h2>
            </div>
            
            {/* Animated Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 border border-gold/20 rounded-lg hidden lg:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gold/10 rounded-full hidden lg:block"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="bg-navy-deep border border-cream/10 rounded-lg overflow-hidden shadow-2xl relative">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-navy-light/50 border-b border-cream/10">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-destructive/60"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-gold/60"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500/60"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                  <motion.span 
                    className="ml-4 text-xs text-cream/40 font-mono"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    dashboard.sourcing.vn
                  </motion.span>
                </div>
                
                <div className="p-6">
                  {/* Stats Grid with counting animation */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: "Active Projects", value: 24, color: "text-gold" },
                      { label: "Automations", value: 48, color: "text-cream" },
                      { label: "API Calls/day", value: "12K", color: "text-cream" },
                      { label: "Uptime", value: "99.9%", color: "text-green-400" },
                    ].map((stat, i) => (
                      <motion.div 
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-navy-light/30 p-4 rounded border border-cream/5 hover:border-gold/30 transition-colors cursor-pointer"
                      >
                        <motion.div 
                          className={`text-2xl lg:text-3xl font-display font-bold ${stat.color}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs text-cream/50">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Animated list items */}
                  <div className="space-y-2">
                    {[
                      { title: "Chatbot - 847 conversations today", progress: 85, status: "Active" },
                      { title: "CRM Sync - Last run 2 min ago", progress: 100, status: "Healthy" },
                      { title: "Order Processing - 23 in queue", progress: 65, status: "Running" },
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.15 }}
                        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                        className="flex items-center gap-4 bg-navy-light/20 p-4 rounded cursor-pointer transition-colors"
                      >
                        <motion.div 
                          className="w-10 h-10 rounded bg-gold/20 flex items-center justify-center"
                          whileHover={{ rotate: 10 }}
                          animate={{ 
                            boxShadow: ["0 0 0 0 rgba(234,179,8,0)", "0 0 0 8px rgba(234,179,8,0.1)", "0 0 0 0 rgba(234,179,8,0)"]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          <span className="text-lg">{["🤖", "🔄", "📦"][i]}</span>
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-sm text-cream/80 mb-1">{item.title}</div>
                          <div className="relative h-1.5 bg-cream/10 rounded-full overflow-hidden">
                            <motion.div
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold to-gold/60 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 1 + i * 0.2, duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                        <motion.div 
                          className={`text-xs px-2 py-1 rounded ${
                            item.status === "Healthy" 
                              ? "bg-green-500/20 text-green-400" 
                              : "bg-gold/20 text-gold"
                          }`}
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {item.status}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Animated typing indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                    className="mt-6 flex items-center gap-2 text-xs text-cream/40"
                  >
                    <motion.div
                      className="flex gap-1"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    </motion.div>
                    <span>All systems operational • Auto-scaling enabled</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-navy-deep relative">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Our Services
            </p>
            <h2 className="headline-lg text-cream max-w-2xl">
              Tools that make your business run smoother.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-navy/50 border border-cream/10 p-8 lg:p-10 hover:border-gold/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon 
                      className="w-12 h-12 text-cream/40 group-hover:text-gold transition-colors duration-300 mb-6" 
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <h3 className="headline-md text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="body-md text-cream/60 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gold mb-2">Features</p>
                      <div className="space-y-1">
                        {service.features.map((feature) => (
                          <div key={feature} className="text-sm text-cream/50 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-gold/60" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gold mb-2">Use Cases</p>
                      <div className="space-y-1">
                        {service.useCases.map((useCase) => (
                          <div key={useCase} className="text-sm text-cream/50 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-cream/30" />
                            {useCase}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
              className="grid grid-cols-2 gap-6"
            >
              {techPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="border-l-2 border-navy/20 hover:border-gold pl-6 transition-colors duration-300">
                    <principle.icon className="w-8 h-8 text-navy-light group-hover:text-gold transition-colors duration-300 mb-3" strokeWidth={1.5} />
                    <p className="text-sm font-semibold uppercase tracking-widest text-navy mb-2">
                      {principle.title}
                    </p>
                    <p className="text-sm text-cool-gray">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Removed duplicate section - now shown after hero */}

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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/start-project">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalSystems;