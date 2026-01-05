import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const processSteps = [
  { number: "01", title: "Discovery", description: "We understand your product, quantities, timeline, and quality requirements." },
  { number: "02", title: "Factory Search", description: "We identify and vet factories — visiting in person, not just emailing." },
  { number: "03", title: "Negotiation", description: "We negotiate on your behalf with full transparency. No hidden markups." },
  { number: "04", title: "Sample & Approve", description: "We manage sampling and work through revisions until you approve." },
  { number: "05", title: "Production", description: "We oversee production with regular check-ins and quality inspections." },
  { number: "06", title: "Delivery", description: "We coordinate logistics and ensure your products arrive as expected." },
];

const comparison = [
  { wrong: "Rely on Alibaba listings", right: "Visit factories in person" },
  { wrong: "Pay commission on orders", right: "Pay flat fees for work done" },
  { wrong: "Trust factory photos", right: "Verify production capabilities" },
  { wrong: "Hope samples match production", right: "Monitor production quality" },
];

const ProductSourcing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy-deep pattern-lines">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Product Sourcing
            </p>
            <h1 className="headline-xl text-cream mb-6">
              Find the right factory.
              <br />
              <span className="text-cream/60">Not just any factory.</span>
            </h1>
            <p className="body-lg text-cream/70 max-w-2xl">
              We go beyond Alibaba. We walk into factories, verify capabilities, 
              negotiate transparently, and manage production so you don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Usually Goes Wrong */}
      <section className="section-padding surface-cream">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div>
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
                The Reality
              </p>
              <h2 className="headline-lg text-navy mb-6">
                What usually goes wrong in sourcing.
              </h2>
              <p className="body-md text-cool-gray">
                Most sourcing problems start with shortcuts: trusting listings, 
                skipping verification, accepting the first quote. Commissions 
                incentivize agents to spend more of your money, not save it.
              </p>
            </div>

            <div className="space-y-6">
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
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-background">
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
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-navy/10" />
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="relative z-10 w-[120px] flex-shrink-0 hidden lg:block">
                    <span className="text-4xl font-display font-bold text-navy/20 group-hover:text-gold transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 pb-8 border-b border-navy/10 group-hover:border-gold/30 transition-colors">
                    <span className="lg:hidden text-sm font-bold text-gold mb-2 block">
                      Step {step.number}
                    </span>
                    <h3 className="headline-md text-navy mb-2">{step.title}</h3>
                    <p className="body-md text-cool-gray">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Ready to source with confidence?
            </h2>
            <p className="body-lg text-cream/60 mb-10 max-w-xl mx-auto">
              Tell us about your product. We'll tell you honestly if we can help.
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

export default ProductSourcing;
