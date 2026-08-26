import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, ShieldCheck, Users, Compass } from "lucide-react";

import garmentFactoryImage from "@/assets/images/vietnam-factory.jpg";
import qualityCheckImage from "@/assets/images/quality-check.jpg";
import warehouseImage from "@/assets/images/vietnam-warehouse.jpg";
import factoryWorkersImage from "@/assets/images/factory-workers.jpg";
import furnitureImage from "@/assets/images/furniture-production.jpg";
import marketImage from "@/assets/images/vietnam-market.jpg";
import duyenImage from "@/assets/images/duyen-pham.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const caseStudies = [
  {
    title: "Bamboo & Coconut Activated Carbon",
    client: "A veterinary products manufacturer moving sourcing from China to Vietnam amid US–China trade tension.",
    goal: "Find bamboo coal meeting exact size and spec requirements to pass US lab testing.",
    services: "Phase 1 (Supplier Vetting) + Phase 2 (Sample Delivery: collecting samples, quality checks, shipping to the client's US lab).",
    challenges: "A limited pool of Vietnamese coal suppliers qualified for lab and medical-grade testing; client specs differed from standard local production; hazardous-material logistics required a special shipping route.",
    result: "Found a qualified supplier and connected the client directly for ongoing production.",
    photos: [garmentFactoryImage, qualityCheckImage],
  },
  {
    title: "Cleaning Sprayers & Wet Tissues",
    client: "A large US e-commerce seller moving hundreds of thousands of units per year.",
    goal: "Source screen-cleaning sprayers and wet tissues during a short Vietnam stopover after the Canton Fair.",
    services: "Supplier Vetting + Factory Visits.",
    challenges: "Under 24 hours to vet suppliers and book visits; 8 factories visited across 2 days in different locations; some suppliers unavailable on short notice.",
    result: "The client found factories matching target pricing and rebooked us for ongoing supplier communication.",
    photos: [factoryWorkersImage, warehouseImage],
  },
  {
    title: "Medical Scrubs",
    client: "International hospital and clinic suppliers, sourcing from Vietnam, a hub thanks to brands like FIGS.",
    goal: "Full A-to-Z sourcing, since the client never visited Vietnam in person.",
    services: "Supplier Vetting through Door-to-Door Shipping.",
    challenges: "Managing imported fabric components from China; ensuring 'Made in Vietnam' compliance; resolving a post-wash sizing issue with a factory and holding them accountable for the cost; rebuilding trust after the client's prior bad experience sourcing in Turkey; navigating COVID-era logistics.",
    result: "All clients satisfied; several referred us to additional hospitals and clinics.",
    photos: [qualityCheckImage, factoryWorkersImage],
  },
  {
    title: "Custom Clothing, Low MOQ",
    client: "Early-stage brands needing low-MOQ clothing: hoodies, shirts, dresses, sportswear.",
    goal: "Avoid big-factory hidden fees and high minimum order quantities.",
    approach: "A direct network of local tailors and small factories in Vietnam, led by founder Duyen, who grew up in a tailoring family in Hoi An, Vietnam's custom clothing hub.",
    photos: [duyenImage, furnitureImage],
  },
];

const phases = [
  {
    number: "01",
    title: "Discovery",
    price: "Free",
    description: "A free 20-minute consulting call to understand your needs and give you a quick intro to how we can help.",
  },
  {
    number: "02",
    title: "Factory Vetting",
    price: "from $150 USD / product",
    description: "We vet 7 to 30 factories depending on your product niche, then narrow it down to the best 2 or 3, complete with contact info, pricing range, and our honest insight on each.",
  },
  {
    number: "03",
    title: "Sample Making",
    price: "from $175 USD / product",
    description: "We manage the first prototype process with the factory on your behalf. One call to brief your requirements is all it takes; we handle the rest on the ground, where miscommunication can otherwise get expensive. We only charge our service fee: sample and shipping costs are quoted separately and paid directly to vendors, with no markup from us.",
  },
  {
    number: "04",
    title: "Communication & Negotiation",
    price: "Customized based on workload",
    description: "This phase often takes longer than expected as sample feedback on pricing, sizing and adjustments goes back and forth. If the factory communicates well in English and you have time to manage it, we are happy to connect you directly. If you'd rather we handle it, we stay involved as needed.",
  },
  {
    number: "05",
    title: "Mass Production",
    price: "from $450 USD",
    description: "We act as your project manager, coordinating between factory and client, resolving issues as they come up, and keeping production on schedule.",
  },
  {
    number: "06",
    title: "Inspection",
    price: "Quoted per project",
    description: "We inspect clothing ourselves. For specialized or unique products, we bring in trusted third-party inspectors to make sure standards are met.",
  },
  {
    number: "07",
    title: "Shipping",
    price: "Support, not full logistics",
    description: "We don't provide logistics services ourselves, but we connect you directly with logistics partners. This is often free if arranged from the start of the project; more complex shipping needs may carry a small service fee.",
  },
];

const principles = [
  {
    icon: Compass,
    title: "We meet you where you are",
    text: "Not everyone needs full production sourcing from scratch. Whether you're exploring Vietnam for the first time or fixing a stuck production, we guide you from wherever your journey is.",
  },
  {
    icon: Users,
    title: "Specialists, not generalists",
    text: "Our team includes experienced merchandisers specialized by product category. Your project is handled by someone who knows your product, not one person doing everything.",
  },
  {
    icon: ShieldCheck,
    title: "Honest insight, no commissions",
    text: "We never take commissions from factories, so recommendations stay unbiased. Beyond production capacity, we share observations and a wider market view so you can make informed calls.",
  },
  {
    icon: Video,
    title: "Factory visits, virtual or in person",
    text: "Every shortlist is 2 to 3 vetted suppliers drawn from a pool of 7 to 30, never just one name. Visits can happen over live video meetings, so you don't need to travel.",
  },
];

const ProductSourcing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero: quiet, editorial */}
      <section className="relative pt-32 pb-20 bg-navy-deep overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={marketImage}
            alt="Sourcing work in Vietnam"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/80" />
        </div>

        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Product Sourcing
            </p>
            <h1 className="headline-xl text-cream mb-6">
              A small team on the ground in Vietnam.
              <br />
              <span className="text-cream/60">Working closely with every client.</span>
            </h1>
            <p className="body-lg text-cream/70 mb-8">
              We are a boutique sourcing team, not a volume operation. That means
              fewer projects at a time, senior people on yours, and honest answers
              even when they are not the ones you hoped for.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/start-project">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-14 max-w-2xl">
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              How We Work With You
            </p>
            <h2 className="headline-lg text-navy">
              Guidance first. Volume never.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ delay: i * 0.08 }}
                className="border border-navy/10 p-8 hover:border-gold/40 transition-colors duration-500"
              >
                <p.icon className="w-8 h-8 text-gold mb-5" strokeWidth={1.5} />
                <h3 className="headline-md text-navy mb-3">{p.title}</h3>
                <p className="body-md text-cool-gray">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding surface-cream">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-14 max-w-2xl">
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Our Work
            </p>
            <h2 className="headline-lg text-navy">
              Case studies, told plainly.
            </h2>
            <p className="body-md text-cool-gray mt-4">
              Real projects, real constraints. This is what working with us
              actually looks like.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <motion.article
                key={cs.title}
                {...fadeUp}
                className="grid lg:grid-cols-5 gap-10 items-start border-t border-navy/10 pt-12"
              >
                <div className={`lg:col-span-2 grid gap-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  {cs.photos.map((photo, i) => (
                    <img
                      key={i}
                      src={photo}
                      alt={`${cs.title} project photo`}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>

                <div className={`lg:col-span-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-gold text-xs font-medium uppercase tracking-widest mb-3">
                    Case {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="headline-md text-navy mb-6">{cs.title}</h3>

                  <dl className="space-y-5">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-1">Client</dt>
                      <dd className="body-md text-navy">{cs.client}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-1">Goal</dt>
                      <dd className="body-md text-navy">{cs.goal}</dd>
                    </div>
                    {cs.services && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-1">Services Used</dt>
                        <dd className="body-md text-navy">{cs.services}</dd>
                      </div>
                    )}
                    {cs.approach && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-1">Approach</dt>
                        <dd className="body-md text-navy">{cs.approach}</dd>
                      </div>
                    )}
                    {cs.challenges && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-1">Challenges</dt>
                        <dd className="body-md text-cool-gray">{cs.challenges}</dd>
                      </div>
                    )}
                    {cs.result && (
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-widest text-navy/50 mb-1">Result</dt>
                        <dd className="body-md text-navy font-medium">{cs.result}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="mb-14 max-w-2xl">
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              How We Work & What It Costs
            </p>
            <h2 className="headline-lg text-navy">
              Seven phases. Take what you need.
            </h2>
            <p className="body-md text-cool-gray mt-4">
              You can engage us for a single phase or the full journey. Pricing is
              transparent and scoped to the work, not the size of your order.
            </p>
          </motion.div>

          <div className="max-w-3xl">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                {...fadeUp}
                transition={{ delay: index * 0.05 }}
                className="group flex gap-6 md:gap-10 items-start py-8 border-b border-navy/10 last:border-b-0"
              >
                <span className="text-sm font-display font-semibold text-navy/30 group-hover:text-gold transition-colors pt-1 w-8 flex-shrink-0">
                  {phase.number}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                    <h3 className="headline-md text-navy">{phase.title}</h3>
                    <span className="text-sm text-gold font-medium">{phase.price}</span>
                  </div>
                  <p className="body-md text-cool-gray">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethos + CTA */}
      <section className="section-padding surface-dark">
        <div className="container-editorial">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="body-lg text-cream/80 mb-10 border-l-2 border-gold pl-6">
              Our goal isn't just a finished product. It's a satisfied client and
              a fair, respected partnership with the local factories who make it
              happen.
            </p>
            <h2 className="headline-lg text-cream mb-6">
              Tell us where you are in your sourcing journey.
            </h2>
            <p className="body-lg text-cream/60 mb-10 max-w-xl">
              We'll tell you honestly which phase makes sense for you, and which
              ones you can skip.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/start-project">
                Start Your Project
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

export default ProductSourcing;
