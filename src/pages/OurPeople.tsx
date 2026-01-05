import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Minh Nguyen",
    role: "Founder & CEO",
    bio: "Started as a VA 12 years ago. Built teams for companies across 15 countries. Still answers emails personally.",
    initials: "MN",
  },
  {
    name: "Linh Tran",
    role: "Operations Director",
    bio: "Manages factory relationships and production. Visited 200+ factories. Speaks three languages fluently.",
    initials: "LT",
  },
  {
    name: "David Chen",
    role: "Digital Lead",
    bio: "Engineer turned consultant. Builds systems that actually work. Allergic to unnecessary complexity.",
    initials: "DC",
  },
  {
    name: "Hoa Le",
    role: "Talent Manager",
    bio: "Matches people with opportunities. Former recruiter. Believes in potential over credentials.",
    initials: "HL",
  },
];

const OurPeople = () => {
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
              Our People
            </p>
            <h1 className="headline-xl text-cream mb-6">
              Small team.
              <br />
              <span className="text-cream/60">Big commitment.</span>
            </h1>
            <p className="body-lg text-cream/70 max-w-2xl">
              We're not a faceless agency. We're a group of people who've 
              been in the trenches — sourcing, hiring, building — and now 
              we do it for others.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                {/* Avatar placeholder */}
                <div className="w-24 h-24 flex-shrink-0 bg-navy-deep flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-cream">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h3 className="headline-md text-navy mb-1">{member.name}</h3>
                  <p className="text-sm text-gold font-medium uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="body-md text-cool-gray">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding surface-cream">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
                How We Work
              </p>
              <h2 className="headline-lg text-navy mb-6">
                We hire slow.
                <br />
                We trust fast.
              </h2>
              <p className="body-lg text-cool-gray">
                Everyone on our team went through multiple projects before 
                joining full-time. We don't hire resumes — we hire people 
                who've proven they can deliver.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="border-l-2 border-gold pl-6">
                <p className="body-md text-navy font-medium">
                  "We answer within 24 hours. Always."
                </p>
              </div>
              <div className="border-l-2 border-navy/20 pl-6">
                <p className="body-md text-navy">
                  "If we can't help, we'll tell you. And we'll recommend someone who can."
                </p>
              </div>
              <div className="border-l-2 border-navy/20 pl-6">
                <p className="body-md text-navy">
                  "We don't disappear after delivery. Problems happen. We handle them."
                </p>
              </div>
            </motion.div>
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
              Ready to work with us?
            </h2>
            <Button asChild variant="hero" size="xl">
              <Link to="/start-project">
                Start a Project
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

export default OurPeople;
