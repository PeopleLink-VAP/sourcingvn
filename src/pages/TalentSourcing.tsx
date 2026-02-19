import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Clock, Users, Mail, FileText, Calculator, Search, Headphones, Video, Camera, Palette, Globe, Cpu, ShoppingBag, TrendingUp, Briefcase, Star } from "lucide-react";
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

const dailySupportTypes = [
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
    title: "Content & Copywriting",
    description: "Writers and editors for your everyday content needs.",
    tasks: ["Blog writing", "Social media posts", "Copywriting", "Email newsletters"],
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

const highLevelCreative = [
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video makers for product demos, brand stories, social content, and corporate videos.",
    tasks: ["Product videos", "Social media reels", "Brand storytelling", "Corporate videos"],
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Product photography, lifestyle shoots, and visual content creation.",
    tasks: ["Product photography", "Lifestyle shoots", "E-commerce imagery", "Brand visuals"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Brand identity, packaging design, marketing materials, and digital assets.",
    tasks: ["Brand identity", "Packaging design", "Marketing collateral", "UI/UX design"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Performance marketing, SEO, paid advertising, and growth strategy execution.",
    tasks: ["Paid ads management", "SEO optimization", "Campaign strategy", "Analytics & reporting"],
  },
];

const consultingServices = [
  {
    icon: Globe,
    title: "Vietnam Market Entry",
    description: "Navigate regulations, find local partners, understand consumer behavior, and establish your presence in Vietnam.",
    details: ["Market landscape analysis", "Legal & compliance guidance", "Local partner identification", "Cultural business advisory", "Go-to-market roadmap"],
  },
  {
    icon: Cpu,
    title: "Tech Consulting",
    description: "System architecture, digital transformation, AI integration, and technology roadmap for your operations.",
    details: ["Tech stack assessment", "AI & automation strategy", "System integration planning", "Data infrastructure", "Digital transformation roadmap"],
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce Consulting",
    description: "Market positioning, channel strategy, pricing optimization, and retail operations in Southeast Asia.",
    details: ["Channel strategy", "Pricing & positioning", "Supply chain optimization", "E-commerce platform setup", "Omnichannel strategy"],
  },
  {
    icon: Briefcase,
    title: "Operations & Hiring Strategy",
    description: "Build your Vietnam-based team with the right structure, comp benchmarks, and operational playbook.",
    details: ["Team structure design", "Compensation benchmarking", "Recruitment process setup", "HR compliance in Vietnam", "Remote team management"],
  },
  {
    icon: TrendingUp,
    title: "Growth & Expansion Advisory",
    description: "Scale into Vietnam or Southeast Asia with a structured growth plan backed by on-ground insights.",
    details: ["Regional expansion planning", "Partnership development", "Brand localization", "Distribution network", "Performance benchmarking"],
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
              From daily support
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gold"
              >
                to strategic consulting.
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="body-lg text-cream/70 max-w-2xl"
            >
              Whether you need a virtual assistant or a market entry consultant, 
              we connect you with reliable Vietnamese talent at every level.
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

      {/* ==================== DAILY SUPPORT SECTION ==================== */}
      <section className="section-padding surface-cream pattern-diagonal">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold/20 text-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
                Essential
              </div>
            </div>
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Daily Support
            </p>
            <h2 className="headline-lg text-navy max-w-xl">
              Reliable talent for your everyday operations.
            </h2>
            <p className="body-lg text-cool-gray mt-4 max-w-2xl">
              Trained, vetted Vietnamese professionals who integrate into your workflow. 
              Part-time, full-time, or project-based.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailySupportTypes.map((type, index) => (
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

      {/* ==================== HIGH-LEVEL CREATIVE SECTION ==================== */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-navy-deep text-cream px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
                High Level
              </div>
            </div>
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Creative & Specialist Talent
            </p>
            <h2 className="headline-lg text-navy max-w-xl">
              Video makers, designers, and digital specialists.
            </h2>
            <p className="body-lg text-cool-gray mt-4 max-w-2xl">
              Skilled professionals for projects that require creative vision, 
              technical expertise, and a higher level of execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {highLevelCreative.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-navy/10 p-8 hover:border-gold/40 hover:shadow-xl transition-all duration-500 group bg-background"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-navy-deep flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="headline-md text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                      {type.title}
                    </h3>
                    <p className="body-md text-cool-gray mb-4 text-sm">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.tasks.map((task) => (
                        <span key={task} className="text-xs bg-gold/10 text-navy px-3 py-1 rounded-full">
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PREMIUM CONSULTING SECTION ==================== */}
      <section className="section-padding bg-navy-deep pattern-grid">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold text-navy-deep px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" />
                Premium
              </div>
            </div>
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Consulting
            </p>
            <h2 className="headline-lg text-cream max-w-2xl">
              Strategic consulting with specialists in Vietnam & Southeast Asia.
            </h2>
            <p className="body-lg text-cream/60 mt-4 max-w-2xl">
              For businesses that need more than execution — they need insight, 
              strategy, and on-ground expertise to enter or scale in this market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-navy-light/20 border border-cream/10 p-8 hover:border-gold/40 transition-all duration-500 group"
              >
                <service.icon 
                  className="w-10 h-10 text-gold mb-6" 
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-display font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-cream/60 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-sm text-cream/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/start-project">
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
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
              Tell us what you need. We'll match you with the right person — or the right strategy.
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
