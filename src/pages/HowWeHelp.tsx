import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const truths = [
  {
    statement: "Alibaba is not sourcing.",
    explanation: "It's a marketplace. Real sourcing means verifying factories, understanding capabilities, and building relationships that last beyond one order.",
  },
  {
    statement: "Samples don't guarantee production.",
    explanation: "Any factory can make a good sample. The question is: can they maintain that quality at scale, under deadline pressure?",
  },
  {
    statement: "Commission models break trust.",
    explanation: "When your agent makes more money if you pay more, their incentives don't align with yours. We charge for our work, not your spending.",
  },
  {
    statement: "Responsibility doesn't end at delivery.",
    explanation: "We stay accountable after the goods arrive. Issues happen. It's how you handle them that matters.",
  },
  {
    statement: "Cheap usually costs more.",
    explanation: "The lowest quote often comes with hidden costs: delays, quality issues, rework. We help you find the best value, not just the lowest price.",
  },
];

const HowWeHelp = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy-deep">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              How We Help
            </p>
            <h1 className="headline-xl text-cream mb-6">
              We believe sourcing is broken.
              <br />
              <span className="text-gold">Here's how we fix it.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Truths */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="space-y-0">
            {truths.map((truth, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-5 gap-8 py-12 border-b border-navy/10 last:border-b-0"
              >
                <div className="lg:col-span-2">
                  <blockquote className="headline-md text-navy">
                    "{truth.statement}"
                  </blockquote>
                </div>
                <div className="lg:col-span-3">
                  <p className="body-lg text-cool-gray">
                    {truth.explanation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Statement */}
      <section className="section-padding surface-cream">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy leading-tight mb-8">
              We're not trying to be the biggest.
              <br />
              <span className="text-gold">We're trying to be the most trusted.</span>
            </h2>
            <p className="body-lg text-cool-gray max-w-2xl mx-auto">
              We're a small team on the ground in Vietnam. We work with a 
              handful of clients at a time because we believe in doing 
              things right, not fast.
            </p>
          </motion.div>
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
              Think we might be a good fit?
            </h2>
            <p className="body-lg text-cream/60 mb-10 max-w-xl mx-auto">
              Let's have a conversation. No pitch, no pressure. 
              Just an honest discussion about what you need.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/start-project">
                Start a Conversation
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

export default HowWeHelp;
