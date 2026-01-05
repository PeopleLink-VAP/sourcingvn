import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Clock, Users, Mail, FileText, Calculator, Search, Headphones } from "lucide-react";
import { useRef } from "react";

import asianCollaborationImage from "@/assets/images/asian-collaboration.jpg";
import diverseTeamMeeting from "@/assets/images/diverse-team-meeting.jpg";

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
            src={asianCollaborationImage} 
            alt="Team collaboration in Vietnam" 
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

      {/* What You Get - Team Collaboration Preview - MOVED UP */}
      <section className="py-16 bg-navy pattern-diagonal overflow-hidden">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              What You Get
            </p>
            <h2 className="headline-lg text-cream">
              Your extended team. Always on.
            </h2>
          </motion.div>

          {/* Team Collaboration Interface */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-navy-deep border border-cream/10 rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-navy-light/30 border-b border-cream/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center text-navy-deep font-bold">
                      T
                    </div>
                    <motion.div
                      className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-navy"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <p className="text-cream text-sm font-medium">Your Support Team</p>
                    <p className="text-cream/50 text-xs">3 members online</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {["📞", "📹", "⚙️"].map((icon, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="w-8 h-8 rounded-full bg-cream/5 flex items-center justify-center text-sm hover:bg-cream/10 transition-colors"
                    >
                      {icon}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 min-h-[250px]">
                {[
                  { sender: "Linh", message: "Just finished the competitor research report! Sending it over now 📊", time: "9:42 AM", avatar: "L" },
                  { sender: "You", message: "Perfect timing! Can you also schedule the client calls for next week?", time: "9:45 AM", isUser: true },
                  { sender: "Mai", message: "Already on it! I've drafted the calendar invites. Sending for your approval now.", time: "9:47 AM", avatar: "M" },
                ].map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, x: msg.isUser ? 20 : -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.2 }}
                    className={`flex gap-3 ${msg.isUser ? "flex-row-reverse" : ""}`}
                  >
                    {!msg.isUser && (
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-medium flex-shrink-0">
                        {msg.avatar}
                      </div>
                    )}
                    <div className={`max-w-[70%] ${msg.isUser ? "text-right" : ""}`}>
                      {!msg.isUser && (
                        <p className="text-gold text-xs mb-1">{msg.sender}</p>
                      )}
                      <div className={`rounded-lg p-3 ${
                        msg.isUser 
                          ? "bg-gold text-navy-deep" 
                          : "bg-cream/10 text-cream/80"
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                      <p className="text-cream/40 text-xs mt-1">{msg.time}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-medium">
                    M
                  </div>
                  <div className="bg-cream/10 rounded-lg p-3">
                    <motion.div
                      className="flex gap-1"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span className="w-2 h-2 bg-cream/60 rounded-full" />
                      <span className="w-2 h-2 bg-cream/60 rounded-full" />
                      <span className="w-2 h-2 bg-cream/60 rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Task Progress Bar */}
              <div className="px-6 py-4 border-t border-cream/10 bg-navy-light/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cream/60 text-sm">Weekly tasks completed</span>
                  <span className="text-gold text-sm font-medium">18/20</span>
                </div>
                <div className="relative h-2 bg-cream/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold to-green-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Team Member Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex justify-center mt-8 gap-4"
            >
              {[
                { name: "Linh", role: "VA Lead", status: "online" },
                { name: "Mai", role: "Admin Support", status: "online" },
                { name: "Hung", role: "Research", status: "online" },
              ].map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/80 to-gold/40 flex items-center justify-center text-navy-deep font-bold text-lg">
                      {member.name[0]}
                    </div>
                    <motion.div
                      className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-navy-deep"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </div>
                  <p className="text-cream text-sm font-medium">{member.name}</p>
                  <p className="text-cream/50 text-xs">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
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
                src={diverseTeamMeeting} 
                alt="Team collaboration in Vietnam" 
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

      {/* Removed duplicate - now shown after hero */}

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