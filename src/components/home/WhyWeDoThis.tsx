import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
              Everyone needs an assistant once in a while.
            </h2>

            <div className="space-y-5 body-lg text-cool-gray">
              <p>
                That belief stayed with Duyen through years of building startups across FMCG, import/export and hospitality. Today, Sourcing.vn sits between international clients and Vietnamese talent so neither side has to figure it out alone.
              </p>

              <p className="font-medium text-navy">
                Product sourcing, talent sourcing and digital solutions, all backed by people who understand both languages, cultures and working styles.
              </p>
            </div>

            <Link
              to="/our-people"
              className="inline-flex items-center gap-2 mt-8 text-navy font-semibold hover:text-teal transition-colors group"
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
