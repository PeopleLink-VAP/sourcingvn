import { motion } from "framer-motion";
import duyenPhoto from "@/assets/images/duyen-pham.jpg";

export const WhyWeDoThis = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={duyenPhoto}
                alt="Duyen Pham, Founder of Sourcing.vn, on-site with clients in Ho Chi Minh City and Danang"
                className="w-full h-[480px] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-sunshine/25 rounded-2xl -z-10" />
            <p className="mt-4 text-sm text-cool-gray italic">
              Duyen Pham, Founder · on-site with clients in Ho Chi Minh City and Danang city, Vietnam
            </p>
          </motion.div>

          {/* Text right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-4">
              From the Founder
            </p>
            <h2 className="headline-lg text-navy mb-6">
              We didn't set out to build an agency.
            </h2>

            <div className="space-y-6 body-lg text-cool-gray">
              <p className="text-navy font-display text-xl leading-relaxed">
                <span className="text-gold">"</span>
                Everyone needs an assistant once in a while.
                <span className="text-gold">"</span>
                {" "}That belief has stayed with me through years of building startups across FMCG, import/export, and hospitality - industries that gave me a front-row seat to what it actually takes to work across borders, and the privilege of partnering with both international clients and Vietnamese talent along the way.
              </p>

              <p>
                Vietnam is{" "}
                <span className="font-semibold text-navy">
                  one of the most underrated resources in the region right now
                </span>{" "}
                - not just for its manufacturing base and outsourcing capacity, but for its{" "}
                <span className="font-semibold text-navy">
                  young, driven, and increasingly skilled workforce
                </span>
                . Along with a group of like-minded partners, I co-founded Sourcing Vietnam to make that resource accessible and easy to work with. We operate across three core areas:
              </p>

              <ul className="space-y-3 pl-1">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-navy">Product sourcing</span>{" "}
                    - connecting you with vetted factories and suppliers across FMCG, manufacturing, and export categories, so you get quality and pricing without the guesswork of navigating the market alone.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-navy">Talent sourcing</span>{" "}
                    - helping you find and onboard skilled Vietnamese professionals, from operations and manufacturing roles to remote digital talent, matched to how your business actually works.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-navy">Digital solutions</span>{" "}
                    - building and supporting the tech, tools, and digital infrastructure that let distributed teams and cross-border operations run smoothly.
                  </span>
                </li>
              </ul>

              <p>
                What ties all three together is something you can't outsource to a spreadsheet:{" "}
                <span className="font-semibold text-navy">
                  someone on the ground who understands the language, the culture, and the working styles on both sides
                </span>
                . That{" "}
                <span className="font-semibold text-navy">local fluency</span>{" "}
                is what prevents the miscommunications, delays, and wasted budget that so often come with working across markets - and it's the difference between a vendor relationship and a{" "}
                <span className="font-semibold text-navy">real partner</span>.
              </p>

              <p className="font-medium text-navy bg-gold/10 border-l-2 border-gold pl-4 py-3">
                We built Sourcing Vietnam because we've been the foreign client trying to figure out who to trust, and we've been the local partner trying to prove reliability. Now we sit in between - so you don't have to figure it out alone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
