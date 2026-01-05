import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Users, Monitor, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

import factoryImage from "@/assets/images/factory-workers.jpg";
import talentImage from "@/assets/images/talent-working.jpg";
import developerImage from "@/assets/images/developer-working.jpg";
import teamImage from "@/assets/images/team-meeting.jpg";

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

const serviceUseCases = [
  {
    icon: Factory,
    title: "Product Sourcing",
    image: factoryImage,
    examples: [
      "Custom furniture manufacturing",
      "Apparel & textile production",
      "Electronics & hardware components",
      "Packaging & promotional items",
      "Home goods & decor",
    ],
    description: "From prototype to container-load production. We find, vet, and manage factories so you don't have to fly to Vietnam.",
    link: "/product-sourcing",
  },
  {
    icon: Users,
    title: "Talent Sourcing",
    image: talentImage,
    examples: [
      "Virtual assistants & admin support",
      "Customer service representatives",
      "Content creators & copywriters",
      "Data entry & research specialists",
      "Bookkeeping & finance support",
    ],
    description: "Reliable, trained Vietnamese talent for your business. Part-time or project-based, without the hiring headaches.",
    link: "/talent-sourcing",
  },
  {
    icon: Monitor,
    title: "Digital & Systems",
    image: developerImage,
    examples: [
      "Business websites & landing pages",
      "AI chatbots & automation",
      "CRM setup & integration",
      "Internal dashboards & tools",
      "E-commerce platforms",
    ],
    description: "Modern digital tools built lean. Websites, chatbots, CRM systems, and custom automation that actually works.",
    link: "/digital-systems",
  },
];

const HowWeHelp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero with parallax image */}
      <section className="relative pt-32 pb-24 bg-navy-deep overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 pattern-diagonal opacity-50" />
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/95 to-navy-deep" />
          <img 
            src={teamImage} 
            alt="Team collaboration" 
            className="w-full h-[120%] object-cover opacity-20"
          />
        </motion.div>
        
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
              className="text-gold text-sm font-medium uppercase tracking-widest mb-4"
            >
              How We Help
            </motion.p>
            <h1 className="headline-xl text-cream mb-6">
              We believe sourcing is broken.
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gold"
              >
                Here's how we fix it.
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="body-lg text-cream/70 max-w-2xl"
            >
              Three core services. One approach: be on the ground, be transparent, be accountable.
            </motion.p>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Service Use Cases with Images */}
      <section ref={containerRef} className="section-padding bg-background">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              What You Can Get
            </p>
            <h2 className="headline-lg text-navy max-w-2xl">
              Real services for real businesses.
            </h2>
          </motion.div>

          <div className="space-y-24">
            {serviceUseCases.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image Side */}
                <motion.div 
                  className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                    
                    {/* Floating label */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-6 left-6 bg-gold text-navy-deep px-4 py-2 font-display font-semibold"
                    >
                      {service.title}
                    </motion.div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 -z-10" />
                </motion.div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <service.icon className="w-10 h-10 text-gold mb-6" strokeWidth={1.5} />
                  <p className="body-lg text-cool-gray mb-8">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.examples.map((example, i) => (
                      <motion.div
                        key={example}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-navy">{example}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button asChild variant="editorial" size="lg">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Truths Section with enhanced animations */}
      <section className="section-padding surface-cream pattern-dots">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Our Philosophy
            </p>
            <h2 className="headline-lg text-navy">
              Things we believe to be true.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {truths.map((truth, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-5 gap-8 py-12 border-b border-navy/10 last:border-b-0 group"
              >
                <div className="lg:col-span-2 relative">
                  <motion.span 
                    className="absolute -left-8 top-0 text-6xl font-display font-bold text-gold/10 hidden lg:block"
                    whileInView={{ opacity: [0, 1] }}
                    viewport={{ once: true }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  <blockquote className="headline-md text-navy group-hover:text-gold transition-colors duration-300">
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
      <section className="section-padding bg-background pattern-waves">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy leading-tight mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              We're not trying to be the biggest.
              <br />
              <span className="text-gold">We're trying to be the most trusted.</span>
            </motion.h2>
            <p className="body-lg text-cool-gray max-w-2xl mx-auto">
              We're a small team on the ground in Vietnam. We work with a 
              handful of clients at a time because we believe in doing 
              things right, not fast.
            </p>
          </motion.div>
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
              Think we might be a good fit?
            </h2>
            <p className="body-lg text-cream/60 mb-10 max-w-xl mx-auto">
              Let's have a conversation. No pitch, no pressure. 
              Just an honest discussion about what you need.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/start-project">
                  Start a Conversation
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

export default HowWeHelp;