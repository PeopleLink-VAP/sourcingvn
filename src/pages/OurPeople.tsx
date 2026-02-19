import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const teamMembers = [
  {
    name: "Duyen Pham",
    role: "Founder",
    initials: "DP",
    intro: "If you work with Sourcing.vn, you will feel Duyen's influence immediately: structured, direct, and execution-driven.",
    highlights: [
      "Founder of one of the top three largest Virtual Assistant communities in Vietnam with nearly 17,000 members",
      "Supported over 200 startups, SMEs, and global founders in operations and sourcing",
      "Helped scale an ecommerce brand to over $1M/month with a single SKU",
      "Airbnb Superhost with 450+ five-star reviews",
    ],
    quote: "Vietnam has world-class talent and capability. It simply needs the right bridge to the global market.",
    closing: "Sourcing.vn exists not only to protect international clients entering Vietnam, but also to create better global opportunities for Vietnamese professionals.",
  },
  {
    name: "Kent Nguyen",
    role: "Technology Consultant",
    initials: "KN",
    intro: '"In data we trust."',
    highlights: [
      "Ensures every system we build stands on solid foundations",
      "Focuses on clean data, correct input, and clear structure",
      "Guides technology decisions in an era of AI, automation, and rapid tech shifts",
    ],
    quote: "No matter how advanced the tools are, wrong input leads to wrong output.",
    closing: null,
  },
  {
    name: "Mai Anh",
    role: "Client Success Lead",
    initials: "MA",
    intro: "Mai Anh is the bridge between your expectations and our execution.",
    highlights: [
      "Strong analytical mindset with deep understanding of cross-cultural communication",
      "Identifies bottlenecks fast and aligns the right solution",
      "Understands your real objective and balances supply and demand",
      "Ensures timelines, quality, and communication stay aligned",
    ],
    quote: null,
    closing: 'Clients often say they feel "understood" when working with her.',
  },
  {
    name: "Thuy",
    role: "Growth Specialist",
    initials: "TH",
    intro: "If your goal is scale, Thuy focuses on momentum.",
    highlights: [
      "Supported brands such as Kingfood Mart and Crown Jewelry in expanding reach and performance",
      "Specializes in paid advertising, brand positioning, and go-to-market execution",
      "Identifies market gaps and turns strategy into measurable campaigns",
      "Positions brands clearly for growth",
    ],
    quote: null,
    closing: "For founders who want more than operations — who want structured growth — Thuy becomes the extension of their internal marketing brain.",
  },
];

const clientExpectations = [
  "Clear communication",
  "Transparent process",
  "On-ground verification",
  "Data-backed decisions",
  "Cultural understanding",
  "Accountability",
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
              Behind The Scenes
            </p>
            <h1 className="headline-xl text-cream mb-6">
              The people behind
              <br />
              <span className="text-cream/60">Sourcing.vn</span>
            </h1>
            <p className="body-lg text-cream/70 max-w-2xl">
              We're not a faceless agency. We're a coordinated team built to 
              represent you in Vietnam with integrity and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-5 gap-12 items-start ${
                  index > 0 ? "pt-12 border-t border-navy/10" : ""
                }`}
              >
                {/* Left: Name card */}
                <div className="lg:col-span-2">
                  <div className="sticky top-32">
                    <div className="w-20 h-20 bg-navy-deep flex items-center justify-center mb-6">
                      <span className="text-2xl font-display font-bold text-cream">
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="headline-lg text-navy mb-2">{member.name}</h3>
                    <p className="text-gold text-sm font-medium uppercase tracking-wider mb-4">
                      {member.role}
                    </p>
                    {member.quote && (
                      <div className="border-l-2 border-gold pl-4 mt-6">
                        <p className="body-md text-navy italic">
                          "{member.quote}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:col-span-3">
                  <p className="body-lg text-navy mb-6 font-medium">
                    {member.intro}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {member.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="body-md text-cool-gray">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  {member.closing && (
                    <p className="body-md text-navy/80 bg-gold/5 border-l-2 border-gold/30 pl-4 py-3">
                      {member.closing}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="section-padding surface-cream">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
                Our Promise
              </p>
              <h2 className="headline-lg text-navy mb-6">
                What you can expect from us.
              </h2>
              <p className="body-lg text-cool-gray mb-8">
                As a client, you deserve clarity, accountability, and a team 
                that treats your business as their own.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {clientExpectations.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-navy font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="border-l-2 border-gold pl-6">
                <p className="body-md text-navy font-medium">
                  "We are not freelancers working independently."
                </p>
              </div>
              <div className="border-l-2 border-navy/20 pl-6">
                <p className="body-md text-navy">
                  "We are a coordinated team built to represent you in Vietnam 
                  with integrity and precision."
                </p>
              </div>
              <div className="bg-navy-deep p-8 mt-8">
                <p className="text-2xl font-display font-bold text-cream mb-2">
                  Sourcing.vn
                </p>
                <p className="text-gold text-lg font-display">
                  is your local advantage.
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
