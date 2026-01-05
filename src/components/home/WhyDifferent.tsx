import { motion } from "framer-motion";

const truths = [
  {
    label: "On the ground",
    text: "We're not brokers in a distant office. We walk into factories, sit across from suppliers, and verify what others can't see.",
  },
  {
    label: "No commission",
    text: "We charge for our work, not a percentage of your order. Your savings are yours to keep.",
  },
  {
    label: "Full transparency",
    text: "You know exactly who makes your products, at what cost, and under what conditions. No middleman markups.",
  },
];

export const WhyDifferent = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-gold mb-4">
              Why We're Different
            </p>
            <h2 className="headline-lg text-navy mb-6">
              Sourcing without the usual games.
            </h2>
            <p className="body-lg text-cool-gray">
              Most sourcing agents make money when you spend more. 
              We make money when you succeed. That changes everything.
            </p>
          </motion.div>

          {/* Right - Truths */}
          <div className="space-y-8">
            {truths.map((truth, index) => (
              <motion.div
                key={truth.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-navy/10 hover:border-gold transition-colors duration-300"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {truth.label}
                </span>
                <p className="body-md text-navy">
                  {truth.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
