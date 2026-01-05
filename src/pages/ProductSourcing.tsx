import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle, Package, Shirt, Cpu, Gift, Home } from "lucide-react";
import { useRef } from "react";

import factoryImage from "@/assets/images/factory-workers.jpg";
import qualityImage from "@/assets/images/quality-check.jpg";
import warehouseImage from "@/assets/images/warehouse.jpg";

const processSteps = [
  { number: "01", title: "Discovery", description: "We understand your product, quantities, timeline, and quality requirements.", icon: "📋" },
  { number: "02", title: "Factory Search", description: "We identify and vet factories — visiting in person, not just emailing.", icon: "🔍" },
  { number: "03", title: "Negotiation", description: "We negotiate on your behalf with full transparency. No hidden markups.", icon: "🤝" },
  { number: "04", title: "Sample & Approve", description: "We manage sampling and work through revisions until you approve.", icon: "✅" },
  { number: "05", title: "Production", description: "We oversee production with regular check-ins and quality inspections.", icon: "🏭" },
  { number: "06", title: "Delivery", description: "We coordinate logistics and ensure your products arrive as expected.", icon: "📦" },
];

const comparison = [
  { wrong: "Rely on Alibaba listings", right: "Visit factories in person" },
  { wrong: "Pay commission on orders", right: "Pay flat fees for work done" },
  { wrong: "Trust factory photos", right: "Verify production capabilities" },
  { wrong: "Hope samples match production", right: "Monitor production quality" },
];

const useCases = [
  {
    icon: Shirt,
    title: "Apparel & Textiles",
    description: "Custom clothing, uniforms, bags, and fabric goods. Vietnam's textile industry is world-class.",
    examples: ["T-shirts & polo shirts", "Work uniforms", "Bags & accessories", "Home textiles"],
  },
  {
    icon: Home,
    title: "Furniture & Home",
    description: "Wooden furniture, rattan products, ceramics, and home decor items.",
    examples: ["Wooden furniture", "Rattan & bamboo products", "Ceramics & pottery", "Decorative items"],
  },
  {
    icon: Cpu,
    title: "Electronics & Hardware",
    description: "Circuit boards, cables, plastic components, and electronic accessories.",
    examples: ["PCB assembly", "Cables & connectors", "Plastic injection parts", "Electronic housings"],
  },
  {
    icon: Gift,
    title: "Promotional & Packaging",
    description: "Custom packaging, promotional items, and branded merchandise.",
    examples: ["Custom packaging", "Promotional gifts", "Printed materials", "Display items"],
  },
];

const ProductSourcing = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero with parallax */}
      <section ref={heroRef} className="relative pt-32 pb-24 bg-navy-deep overflow-hidden min-h-[80vh] flex items-center">
        <motion.div 
          className="absolute inset-0"
          style={{ y: imageY }}
        >
          <img 
            src={factoryImage} 
            alt="Factory workers" 
            className="w-full h-[120%] object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/70" />
        </motion.div>
        
        <div className="absolute inset-0 pattern-lines" />
        
        <motion.div 
          className="container-editorial relative z-10"
          style={{ y: textY }}
        >
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
              className="text-gold text-sm font-medium uppercase tracking-widest mb-4"
            >
              Product Sourcing
            </motion.p>
            <h1 className="headline-xl text-cream mb-6">
              Find the right factory.
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-cream/60"
              >
                Not just any factory.
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="body-lg text-cream/70 max-w-2xl mb-8"
            >
              We go beyond Alibaba. We walk into factories, verify capabilities, 
              negotiate transparently, and manage production so you don't have to.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/start-project">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Use Cases with Images */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              What We Source
            </p>
            <h2 className="headline-lg text-navy max-w-2xl">
              Industries we work with.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-navy/10 p-8 hover:border-gold/40 transition-all duration-500 bg-background hover:shadow-xl"
              >
                <useCase.icon 
                  className="w-12 h-12 text-navy-light group-hover:text-gold transition-colors duration-300 mb-6" 
                  strokeWidth={1.5}
                />
                <h3 className="headline-md text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="body-md text-cool-gray mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.examples.map((example) => (
                    <div key={example} className="flex items-center gap-2 text-sm text-navy/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section with Image */}
      <section className="section-padding surface-cream">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={qualityImage} 
                alt="Quality inspection" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-navy/10 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
                The Reality
              </p>
              <h2 className="headline-lg text-navy mb-6">
                What usually goes wrong in sourcing.
              </h2>
              <p className="body-md text-cool-gray mb-8">
                Most sourcing problems start with shortcuts: trusting listings, 
                skipping verification, accepting the first quote. Commissions 
                incentivize agents to spend more of your money, not save it.
              </p>

              <div className="space-y-4">
                {comparison.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/10">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy">{item.wrong}</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gold/10 border border-gold/20">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy font-medium">{item.right}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline with Animation */}
      <section className="section-padding bg-background pattern-dots">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Our Process
            </p>
            <h2 className="headline-lg text-navy max-w-2xl">
              From idea to delivery — how we work.
            </h2>
          </motion.div>

          <div className="relative">
            {/* Animated timeline line */}
            <motion.div 
              className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-navy/10"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ originY: 0 }}
            />
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="relative z-10 w-[120px] flex-shrink-0 hidden lg:flex items-center gap-4">
                    <span className="text-4xl font-display font-bold text-navy/20 group-hover:text-gold transition-colors duration-300">
                      {step.number}
                    </span>
                    <motion.div
                      className="w-3 h-3 rounded-full bg-navy/20 group-hover:bg-gold group-hover:scale-150 transition-all duration-300"
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    />
                  </div>
                  <div className="flex-1 pb-8 border-b border-navy/10 group-hover:border-gold/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="lg:hidden text-sm font-bold text-gold">
                        Step {step.number}
                      </span>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <h3 className="headline-md text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="body-md text-cool-gray">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Image Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.img 
          src={warehouseImage} 
          alt="Warehouse operations" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <h2 className="headline-lg text-cream mb-4">
                End-to-end support.
              </h2>
              <p className="body-lg text-cream/70">
                From factory selection to final delivery, we manage every step. 
                You get updates, not surprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding surface-dark pattern-grid">
        <div className="container-editorial text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-lg text-cream mb-6">
              Ready to source with confidence?
            </h2>
            <p className="body-lg text-cream/60 mb-10 max-w-xl mx-auto">
              Tell us about your product. We'll tell you honestly if we can help.
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

export default ProductSourcing;