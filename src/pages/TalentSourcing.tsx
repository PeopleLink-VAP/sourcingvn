import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Clock, Users, Mail, FileText, Calculator, Search, Headphones } from "lucide-react";
import { useRef } from "react";

import talentImage from "@/assets/images/talent-working.jpg";
import teamImage from "@/assets/images/team-meeting.jpg";

const benefits = [
  {
    icon: Clock,
    title: "No full-time overhead",
    description: "Pay for what you need. Scale up or down as your business changes.",
  },
  {
    icon: Heart,
    title: "Reliability over resumes",
    description: "We prioritize people who show up, communicate, and solve problems.",
  },
  {
    icon: Users,
    title: "Founders started as VAs",
    description: "We know this work from the inside. We hire people we'd want to work with.",
  },
];

const talentTypes = [
  {
    icon: Mail,
    title: "Virtual Assistants",
    description: "General admin support, scheduling, email management, research, and day-to-day tasks.",
    tasks: ["Email & calendar management", "Travel booking", "Data organization", "Research & reporting"],
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description: "Professional support representatives for your customers across channels.",
    tasks: ["Live chat support", "Email response", "Phone handling", "Ticket management"],
  },
  {
    icon: FileText,
    title: "Content & Creative",
    description: "Writers, editors, and creators for your content needs.",
    tasks: ["Blog writing", "Social media", "Copywriting", "Basic design"],
  },
  {
    icon: Calculator,
    title: "Bookkeeping & Finance",
    description: "Financial support for growing businesses.",
    tasks: ["Invoice processing", "Expense tracking", "Basic accounting", "Financial reporting"],
  },
  {
    icon: Search,
    title: "Research & Data",
    description: "Deep research and data management for business intelligence.",
    tasks: ["Market research", "Lead generation", "Data entry", "CRM management"],
  },
];

const packages = [
  {
    title: "Part-Time Support",
    hours: "20 hrs/week",
    description: "Dedicated support for ongoing tasks and daily operations.",
    ideal: "Founders & small teams",
    features: ["Dedicated team member", "Daily check-ins", "Flexible scheduling", "Quick response time"],
  },
  {
    title: "Full-Time Support",
    hours: "40 hrs/week",
    description: "A full team member integrated into your operations.",
    ideal: "Growing businesses",
    features: ["Full integration", "Project ownership", "Multiple skill sets", "Priority support"],
    highlighted: true,
  },
  {
    title: "Project-Based",
    hours: "As needed",
    description: "Short-term help for specific projects or one-time tasks.",
    ideal: "Defined scope work",
    features: ["Clear deliverables", "Fixed timeline", "Specialized skills", "No commitment"],
  },
];

const TalentSourcing = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-24 bg-navy-deep overflow-hidden min-h-[70vh] flex items-center">
        <motion.div 
          className="absolute inset-0"
          style={{ y: imageY }}
        >
          <img 
            src={talentImage} 
            alt="Professional at work" 
            className="w-full h-[120%] object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/80" />
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
              Talent Sourcing
            </motion.p>
            <h1 className="headline-xl text-cream mb-6">
              This is not hiring.
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gold"
              >
                This is support.
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="body-lg text-cream/70 max-w-2xl"
            >
              You don't need to build a team. You need someone reliable 
              who gets things done. We find those people in Vietnam.
            </motion.p>
          </motion.div>
        </div>

        {/* Floating stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-12 right-12 hidden lg:flex gap-12"
        >
          {[
            { number: "10+", label: "Years experience" },
            { number: "50+", label: "Active placements" },
            { number: "95%", label: "Retention rate" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-right"
            >
              <div className="text-3xl font-display font-bold text-gold">{stat.number}</div>
              <div className="text-sm text-cream/50">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <benefit.icon 
                    className="w-14 h-14 text-navy-light mx-auto mb-6 group-hover:text-gold transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h3 className="headline-md text-navy mb-4">{benefit.title}</h3>
                <p className="body-md text-cool-gray">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Types */}
      <section className="section-padding surface-cream pattern-diagonal">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Types of Support
            </p>
            <h2 className="headline-lg text-navy max-w-xl">
              The talent you need, ready to work.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border border-navy/10 p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-500 group"
              >
                <type.icon 
                  className="w-10 h-10 text-navy-light mb-6 group-hover:text-gold transition-colors duration-300" 
                  strokeWidth={1.5}
                />
                <h3 className="headline-md text-navy mb-3 text-xl">{type.title}</h3>
                <p className="body-md text-cool-gray mb-4 text-sm">{type.description}</p>
                <div className="space-y-2">
                  {type.tasks.map((task) => (
                    <div key={task} className="flex items-center gap-2 text-sm text-navy/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                      {task}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy with Image */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
                Our Philosophy
              </p>
              <h2 className="headline-lg text-navy mb-6">
                You don't need full-time.
                <br />
                You need reliability.
              </h2>
              <p className="body-lg text-cool-gray mb-6">
                Hiring is expensive and risky. Managing remote teams is hard. 
                What if you could just get support — trained, reliable, 
                Vietnamese talent — without the overhead?
              </p>
              <p className="body-md text-navy">
                We've been building remote teams for over a decade. We know 
                what works and what doesn't. We match you with people who 
                fit your needs and working style.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={teamImage} 
                alt="Team collaboration" 
                className="w-full aspect-[4/3] object-cover"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 bg-navy-deep p-8 max-w-sm"
              >
                <blockquote className="text-lg font-display text-cream leading-relaxed mb-4">
                  "The best talent doesn't just complete tasks. 
                  They anticipate needs and become essential."
                </blockquote>
                <p className="text-cream/50 text-sm uppercase tracking-wider">
                  — How we think about hiring
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding surface-cream">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              How We Help
            </p>
            <h2 className="headline-lg text-navy">
              Support that fits your needs.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative border p-8 transition-all duration-500 ${
                  pkg.highlighted 
                    ? "border-gold bg-background shadow-xl scale-105" 
                    : "border-navy/10 bg-background hover:border-gold/40"
                }`}
              >
                {pkg.highlighted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy-deep px-4 py-1 text-xs font-semibold uppercase tracking-wider"
                  >
                    Most Popular
                  </motion.div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="headline-md text-navy mb-2">{pkg.title}</h3>
                  <p className="text-2xl font-display font-bold text-gold">{pkg.hours}</p>
                </div>
                
                <p className="body-md text-cool-gray mb-6 text-center">{pkg.description}</p>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-navy">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <p className="text-sm text-center text-navy/60 border-t border-navy/10 pt-4">
                  <span className="font-semibold">Ideal for:</span> {pkg.ideal}
                </p>
              </motion.div>
            ))}
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
              Let's find your support.
            </h2>
            <p className="body-lg text-cream/60 mb-10 max-w-xl mx-auto">
              Tell us what you need. We'll match you with the right person.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/start-project">
                  Get Started
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

export default TalentSourcing;