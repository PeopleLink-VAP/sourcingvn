import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import duyenPhoto from "@/assets/images/duyen-pham.jpg";

export const WhyWeDoThis = () => {
  return (
    <section className="section-padding bg-cream pattern-grain relative overflow-hidden">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative lg:max-w-md"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={duyenPhoto}
                alt="Duyen Pham, Founder of Sourcing.vn, on-site with clients in Ho Chi Minh City and Danang"
                className="w-full h-[280px] lg:h-[320px] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-sunshine/25 rounded-2xl -z-10" />
            <p className="mt-3 text-sm text-cool-gray italic">
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
            <h2 className="headline-lg text-navy mb-5">
              Vietnam is one of the most valued resources in the region right now.
            </h2>

            <div className="space-y-4 body-md text-cool-gray">
              <p>
                Not just for its manufacturing base and outsourcing capacity, but for its young,
                driven and increasingly skilled workforce. Along with a group of like-minded
                partners, I co-founded Sourcing Vietnam to make that resource accessible and easy
                to work with. We operate across three core areas:
              </p>

              <ul className="space-y-3">
                {[
                  {
                    label: "Product sourcing",
                    text: "vetted factories and suppliers across FMCG, manufacturing and export, so you get quality and pricing without guesswork.",
                  },
                  {
                    label: "Talent sourcing",
                    text: "skilled Vietnamese professionals, from operations roles to remote digital talent, matched to how your business actually works.",
                  },
                  {
                    label: "Digital solutions",
                    text: "the tech, tools and infrastructure that let distributed teams and cross-border operations run smoothly.",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sunshine shrink-0" />
                    <span>
                      <span className="font-semibold text-navy">{item.label}</span> {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p>
                What ties all three together is something you can't outsource to a spreadsheet:{" "}
                <span className="font-medium text-navy">
                  someone on the ground who understands the language, the culture and the working
                  styles on both sides.
                </span>{" "}
                That local fluency is the difference between a vendor relationship and a real
                partner.
              </p>

              <p>
                We built Sourcing Vietnam because we've been the foreign client trying to figure out
                who to trust, and we've been the local partner trying to prove reliability. Now we
                sit in between, so you don't have to figure it out alone.
              </p>
            </div>

            <Link
              to="/our-people"
              className="inline-flex items-center gap-2 mt-6 text-navy font-semibold hover:text-teal transition-colors group"
            >
              Read our people and stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
