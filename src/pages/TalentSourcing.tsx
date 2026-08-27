import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Video,
  Headphones,
  Briefcase,
  GraduationCap,
  Users,
  ShieldCheck,
  Scale,
  HeartHandshake,
  Mail,
  Calculator,
  Search,
  Palette,
  Camera,
  TrendingUp,
  FileText,
  Clock,
  Globe,
  Cpu,
} from "lucide-react";
import { useCaseCategories } from "@/data/useCases";

const heroSkills = [
  { icon: Video, label: "Video editing" },
  { icon: Headphones, label: "Customer service" },
  { icon: Briefcase, label: "Executive assistance" },
  { icon: GraduationCap, label: "Teaching support" },
  { icon: Users, label: "Client-facing roles" },
];

const nonNegotiables = [
  { icon: ShieldCheck, label: "Safe" },
  { icon: Scale, label: "Legal & fair" },
  { icon: HeartHandshake, label: "Professional" },
];

const categories = [
  { icon: Mail, label: "Virtual assistants" },
  { icon: Headphones, label: "Customer service" },
  { icon: Briefcase, label: "Executive assistants" },
  { icon: Video, label: "Video editing" },
  { icon: Camera, label: "Photography" },
  { icon: Palette, label: "Graphic design" },
  { icon: FileText, label: "Content & copywriting" },
  { icon: Calculator, label: "Bookkeeping" },
  { icon: Search, label: "Research & data" },
  { icon: TrendingUp, label: "Digital marketing" },
  { icon: GraduationCap, label: "Teaching support" },
  { icon: Cpu, label: "Tech & operations" },
];

const engagements = [
  { icon: Clock, title: "Full-time", text: "A dedicated team member fully integrated into your operations." },
  { icon: Users, title: "Part-time", text: "Ongoing support without full-time overhead." },
  { icon: Briefcase, title: "Project-based", text: "Defined scope, clear deliverables, fixed timeline." },
  { icon: Globe, title: "Task-based", text: "Short bursts of help when the workload spikes." },
];

const talentCases = useCaseCategories.find((c) => c.category === "Talent Sourcing")?.cases ?? [];

const TalentSourcing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero / intro */}
      <section className="relative pt-32 pb-20 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-70" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />

        <div className="container-editorial relative z-10">
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
              "Everyone needs an assistant
              <br />
              <span className="text-gold">once in a while."</span>
            </h1>
            <p className="body-lg text-cream/75 mb-6">
              That's the belief driving everything we do. Our founder, Duyen, is also the founder of
              one of the top 3 virtual assistant communities in Vietnam, with a network of over
              19,000 members. That gives us access to a deep, diverse talent pool across nearly
              every skill set our clients need.
            </p>
          </motion.div>

          {/* Skill icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10"
          >
            {heroSkills.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-start gap-3 border border-cream/15 bg-cream/5 backdrop-blur-sm p-5 hover:border-gold/50 transition-colors duration-500"
              >
                <s.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                <span className="text-sm text-cream/85">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 mt-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-cream/70 body-md mb-5">
                The one non-negotiable: every opportunity we source for must offer a safe, legal,
                professional and fair working environment for candidates. In return, we've
                consistently found that Vietnamese freelancers and remote professionals go above and
                beyond for the clients they work with.
              </p>
              <div className="flex flex-wrap gap-3">
                {nonNegotiables.map((n) => (
                  <span
                    key={n.label}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/40 text-gold text-sm px-4 py-2"
                  >
                    <n.icon className="w-4 h-4" strokeWidth={1.5} />
                    {n.label}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-l-2 border-gold pl-6"
            >
              <p className="body-lg text-cream/85">
                We're proud to be the bridge connecting international clients with Vietnam's
                high-quality remote talent pool, whether the need is full-time, part-time,
                project-based or task-based. There's almost always someone in our network ready to
                step in.
              </p>
              <div className="mt-6">
                <Button asChild variant="hero" size="lg">
                  <Link to="/start-project">
                    Tell us what you need
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work categories: compact */}
      <section className="section-padding bg-background pattern-dots">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
              What They Do
            </p>
            <h2 className="headline-lg text-navy">Roles we fill most often.</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {categories.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i, 8) * 0.04 }}
                className="flex items-center gap-3 bg-white/70 border border-navy/10 rounded-xl px-4 py-3 hover:border-gold/50 hover:bg-white transition-colors"
              >
                <c.icon className="w-5 h-5 text-navy-light shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-navy">{c.label}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-sm text-cool-gray">
            Don't see the role? Ask us. The network is wider than this list.
          </p>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section-padding surface-cream pattern-diagonal">
        <div className="container-editorial">
          <div className="grid md:grid-cols-4 gap-6">
            {engagements.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background border border-navy/10 p-6 hover:border-gold/40 transition-colors duration-500"
              >
                <e.icon className="w-7 h-7 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-navy mb-2">{e.title}</h3>
                <p className="text-sm text-cool-gray">{e.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies: icons, no photos */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
              Case Studies
            </p>
            <h2 className="headline-lg text-navy">Placements, told plainly.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {talentCases.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/use-cases#${cs.id}`}
                  className="group flex h-full flex-col border border-navy/10 p-8 hover:border-gold/50 hover:shadow-lg transition-all duration-500 bg-background"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-navy-deep flex items-center justify-center shrink-0">
                      {cs.icon ? (
                        <cs.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                      ) : (
                        <Users className="w-6 h-6 text-gold" strokeWidth={1.5} />
                      )}
                    </div>
                    <div>
                      <h3 className="headline-md text-navy text-xl leading-snug">{cs.title}</h3>
                      <p className="text-sm text-cool-gray">{cs.client}</p>
                    </div>
                  </div>

                  <p className="body-md text-cool-gray text-sm mb-5 line-clamp-4">{cs.brief}</p>

                  <div className="mt-auto">
                    <p className="text-sm text-navy font-medium mb-4">{cs.result}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-gold transition-colors">
                      Read the full case study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
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
            <h2 className="headline-lg text-cream mb-6">Let's find your person.</h2>
            <p className="body-lg text-cream/60 mb-10 max-w-xl mx-auto">
              Tell us the role, the hours and how you like to work. We'll bring you a shortlist worth
              your time.
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
