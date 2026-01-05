import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Clock, Users } from "lucide-react";

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

const packages = [
  {
    title: "Virtual Assistant",
    description: "General support for admin, research, scheduling, and communication.",
    ideal: "Founders, small teams, solopreneurs",
  },
  {
    title: "Specialized Support",
    description: "Customer service, content creation, bookkeeping, data entry.",
    ideal: "Growing businesses with specific needs",
  },
  {
    title: "Project-Based",
    description: "Short-term help for launches, migrations, or one-time projects.",
    ideal: "Companies with defined scope and timeline",
  },
];

const TalentSourcing = () => {
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
              Talent Sourcing
            </p>
            <h1 className="headline-xl text-cream mb-6">
              This is not hiring.
              <br />
              <span className="text-gold">This is support.</span>
            </h1>
            <p className="body-lg text-cream/70 max-w-2xl">
              You don't need to build a team. You need someone reliable 
              who gets things done. We find those people in Vietnam.
            </p>
          </motion.div>
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
                className="text-center"
              >
                <benefit.icon 
                  className="w-12 h-12 text-navy-light mx-auto mb-6" 
                  strokeWidth={1.5}
                />
                <h3 className="headline-md text-navy mb-4">{benefit.title}</h3>
                <p className="body-md text-cool-gray">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding surface-cream">
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
              className="bg-navy-deep p-10 text-cream"
            >
              <blockquote className="text-2xl font-display font-medium leading-relaxed mb-6">
                "The best talent doesn't just complete tasks. 
                They anticipate needs, communicate proactively, 
                and become essential."
              </blockquote>
              <p className="text-cream/60 text-sm uppercase tracking-wider">
                — How we think about hiring
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              How We Help
            </p>
            <h2 className="headline-lg text-navy max-w-xl">
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
                className="border border-navy/10 p-8 hover:border-gold/40 transition-colors duration-300"
              >
                <h3 className="headline-md text-navy mb-4">{pkg.title}</h3>
                <p className="body-md text-cool-gray mb-6">{pkg.description}</p>
                <p className="text-sm text-navy/60">
                  <span className="font-semibold">Ideal for:</span> {pkg.ideal}
                </p>
              </motion.div>
            ))}
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
              Let's find your support.
            </h2>
            <p className="body-lg text-cream/60 mb-10 max-w-xl mx-auto">
              Tell us what you need. We'll match you with the right person.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/start-project">
                Get Started
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

export default TalentSourcing;
