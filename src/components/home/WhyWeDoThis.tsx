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

            <p className="body-md text-cool-gray mb-6">
              Its manufacturing base, outsourcing capacity and young, driven workforce make it a
              genuine advantage for companies that know how to work with it. We built Sourcing
              Vietnam to be that bridge: a local partner who understands the language, culture and
              working styles on both sides.
            </p>

            <Link
              to="/our-people"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-teal transition-colors group"
            >
              Read more about our people and stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
