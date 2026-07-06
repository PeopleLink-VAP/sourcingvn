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
                alt="Duyen, Founder of Sourcing.vn, on-site with clients in Ho Chi Minh City"
                className="w-full h-[480px] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-sunshine/25 rounded-2xl -z-10" />
            <p className="mt-4 text-sm text-cool-gray italic">
              Duyen, Founder — on-site with clients in Ho Chi Minh City
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
              Why We Do This
            </p>
            <h2 className="headline-lg text-navy mb-6">
              We didn't set out to build an agency.
            </h2>
            <div className="space-y-5 body-lg text-cool-gray">
              <p>
                We set out to be the bridge — between Vietnamese vendors, freelancers,
                and suppliers, and the clients who need them. Working with founders and
                teams from every corner of the world, we kept seeing the same thing:
                how much untapped potential this country holds, and how much difference
                one good partner on the ground makes.
              </p>
              <p>
                That's the job now. Help Vietnam's markets grow. Help our clients build
                something real here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
