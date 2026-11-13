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
import proClass from "@/assets/talent/va_pro_class.jpg.asset.json";
import meetup from "@/assets/talent/va_community_meetup.jpg.asset.json";
import dinner from "@/assets/talent/va_community_dinner.jpg.asset.json";

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
      <section className="pt-32 pb-16 bg-background">
        <div className="container-editorial grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">Talent Sourcing</p>
            <h1 className="headline-xl text-navy mb-6">
              "Everyone needs an assistant once in a while."
            </h1>
            <p className="body-lg text-cool-gray mb-4">
              Duyen, our founder, also runs one of the top 3 virtual assistant communities in Vietnam.
              Over 19,000 members, many of whom we've met in person at classes and meetups in Ho Chi
              Minh City and Da Nang.
            </p>
            <p className="body-md text-cool-gray mb-8">
              So when you ask us for an editor, an assistant or a customer service rep, we aren't
              searching a database. We're asking people we know.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/start-project">
                Tell us what you need
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <img
              src={proClass.url}
              alt="Virtual Assistant Pro class graduates in Ho Chi Minh City"
              className="w-full aspect-[4/3] object-cover"
            />
            <figcaption className="mt-3 text-sm text-cool-gray">
              Graduates of our Virtual Assistant Pro class, Ho Chi Minh City.
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* Community photos */}
      <section className="pb-20 bg-background">
        <div className="container-editorial grid md:grid-cols-12 gap-6">
          <figure className="md:col-span-7">
            <img src={meetup.url} alt="VA community meetup" loading="lazy" className="w-full aspect-[3/2] object-cover" />
            <figcaption className="mt-3 text-sm text-cool-gray">Community meetup. Most of these faces have worked with our clients.</figcaption>
          </figure>
          <figure className="md:col-span-5 md:mt-16">
            <img src={dinner.url} alt="VA community dinner" loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <figcaption className="mt-3 text-sm text-cool-gray">Monthly dinner with members of the network.</figcaption>
          </figure>
        </div>
      </section>

      {/* Roles + how we work */}
      <section className="section-padding surface-cream">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="headline-lg text-navy mb-6">Roles we fill most often</h2>
            <ul className="columns-2 gap-8 text-navy">
              {categories.map((c) => (
                <li key={c.label} className="py-2 border-b border-navy/10 break-inside-avoid">{c.label}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-cool-gray">Don't see the role? Ask us. The network is wider than this list.</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="headline-lg text-navy mb-6">How you can work with them</h2>
            <dl className="divide-y divide-navy/10">
              {engagements.map((e) => (
                <div key={e.title} className="py-4 grid grid-cols-3 gap-4">
                  <dt className="font-display text-navy">{e.title}</dt>
                  <dd className="col-span-2 text-cool-gray">{e.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 body-md text-cool-gray border-l-2 border-gold pl-5">
              One thing we won't bend on: every job we source for has to be safe, legal, professional
              and fair for the person doing it. In return, Vietnamese freelancers tend to go well
              beyond what's asked.
            </p>
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
            <h2 className="headline-lg text-navy">A few people we placed</h2>
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
      <section className="section-padding surface-dark">
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
