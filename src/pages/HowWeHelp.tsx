import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Users, Monitor, CheckCircle2, Search, ClipboardList, Cog, MessageCircle } from "lucide-react";

import factoryAsset from "@/assets/home/factory_floor.jpg.asset.json";
import talentAsset from "@/assets/talent/va_pro_class.jpg.asset.json";
import developerAsset from "@/assets/home/pos_customer_journey.png.asset.json";
import teamAsset from "@/assets/home/client_meeting.jpg.asset.json";
const factoryImage = factoryAsset.url, talentImage = talentAsset.url, developerImage = developerAsset.url, teamImage = teamAsset.url;

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

const workingPhases = [
  {
    icon: Search,
    number: "01",
    title: "Listen",
    text: "We learn what you need, what is stuck, and what a good outcome looks like.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Plan",
    text: "You get a clear scope, practical next steps, and honest advice before work begins.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Do the work",
    text: "Our team coordinates people, suppliers, and details on the ground in Vietnam.",
  },
  {
    icon: MessageCircle,
    number: "04",
    title: "Stay close",
    text: "You receive clear updates and a real person to speak to when something changes.",
  },
];

const HowWeHelp = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero: the same team photo, with a lighter editorial frame */}
      <section className="border-b border-border bg-secondary/40 pt-32 pb-16 overflow-hidden">
        <div className="container-editorial grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
              How We Help
            </p>
            <h1 className="headline-xl text-foreground mb-6">
              We believe sourcing is broken.
              <br />
              <span className="text-muted-foreground">Here's how we fix it.</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl">
              Three core services. One approach: be on the ground, be transparent, be accountable.
            </p>
          </motion.div>
          <motion.figure
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <img
              src={teamImage}
              alt="Sourcing Vietnam team meeting with clients"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-sm"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">Real conversations with clients, not a hand-off to a faceless team.</figcaption>
          </motion.figure>
        </div>
      </section>

      {/* A concise view of the working relationship */}
      <section className="border-b border-border bg-background py-12">
        <div className="container-editorial">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal mb-3">How We Work</p>
              <h2 className="headline-md text-foreground">Four phases. One accountable team.</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">Enough structure to keep things clear, without turning your project into a long process document.</p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workingPhases.map((phase) => (
              <li key={phase.number} className="relative rounded-2xl border border-border bg-card p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <phase.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="font-display text-xs font-semibold text-muted-foreground">{phase.number}</span>
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{phase.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service Use Cases with Images */}
      <section className="section-padding bg-background pattern-grain">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">
              What You Can Get
            </p>
            <h2 className="headline-lg text-foreground max-w-2xl">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    
                    {/* Floating label */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-6 left-6 bg-gold text-foreground px-4 py-2 font-display font-semibold"
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
                        <span className="text-foreground">{example}</span>
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
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">
              Our Philosophy
            </p>
            <h2 className="headline-lg text-foreground">
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
                className="grid lg:grid-cols-5 gap-8 py-12 border-b border-foreground/10 last:border-b-0 group"
              >
                <div className="lg:col-span-2 relative">
                  <motion.span 
                    className="absolute -left-8 top-0 text-6xl font-display font-bold text-gold/10 hidden lg:block"
                    whileInView={{ opacity: [0, 1] }}
                    viewport={{ once: true }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  <blockquote className="headline-md text-foreground group-hover:text-gold transition-colors duration-300">
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
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-8"
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
      <section className="section-padding border-t border-border bg-secondary/40">
        <div className="container-editorial text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="headline-lg text-foreground mb-6">
              Think we might be a good fit?
            </h2>
            <p className="body-lg text-muted-foreground mb-10 max-w-xl mx-auto">
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