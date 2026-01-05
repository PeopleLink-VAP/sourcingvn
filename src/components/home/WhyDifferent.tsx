import { motion } from "framer-motion";
import { Check, MapPin, DollarSign, Eye } from "lucide-react";
import happyClientImage from "@/assets/images/happy-client.jpg";

const truths = [
  {
    icon: MapPin,
    label: "On the ground",
    text: "We're not brokers in a distant office. We walk into factories, sit across from suppliers, and verify what others can't see.",
    color: "teal"
  },
  {
    icon: DollarSign,
    label: "No commission",
    text: "We charge for our work, not a percentage of your order. Your savings are yours to keep.",
    color: "sunshine"
  },
  {
    icon: Eye,
    label: "Full transparency",
    text: "You know exactly who makes your products, at what cost, and under what conditions. No middleman markups.",
    color: "coral"
  },
];

export const WhyDifferent = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-cream to-teal/5 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute top-20 right-20 w-40 h-40 border-2 border-dashed border-sunshine/20 rounded-full"
      />
      
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Header + Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-coral mb-4">
              Why We're Different
            </p>
            <h2 className="headline-lg text-navy mb-6">
              Sourcing without the usual games.
            </h2>
            <p className="body-lg text-cool-gray mb-8">
              Most sourcing agents make money when you spend more. 
              We make money when you succeed. That changes everything.
            </p>

            {/* Image with overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={happyClientImage}
                alt="Happy client receiving products"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-cream font-medium text-lg">
                  "They saved us $45,000 on our first order alone."
                </p>
                <p className="text-cream/70 text-sm mt-2">— Sarah K., Bloom Naturals</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Truths */}
          <div className="space-y-6">
            {truths.map((truth, index) => (
              <motion.div
                key={truth.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className={`p-3 rounded-xl bg-${truth.color}/10 group-hover:bg-${truth.color}/20 transition-colors`}>
                    <truth.icon className={`w-6 h-6 text-${truth.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-navy text-lg mb-2">
                      {truth.label}
                    </h3>
                    <p className="text-cool-gray leading-relaxed">
                      {truth.text}
                    </p>
                  </div>
                </div>
                
                {/* Hover accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-${truth.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
