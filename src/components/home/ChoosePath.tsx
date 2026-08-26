import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredCases } from "@/data/useCases";

const categoryAccent: Record<string, string> = {
  "Product Sourcing": "text-teal border-teal/40 bg-teal/10",
  "Talent Sourcing": "text-coral border-coral/40 bg-coral/10",
  "Digital & Systems": "text-sunshine border-sunshine/40 bg-sunshine/10",
};

export const ChoosePath = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-navy via-navy-deep to-navy-light relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-15" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-64 h-64 bg-sunshine/5 rounded-full blur-3xl"
      />

      <div className="container-editorial relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-sunshine mb-4">
            Success Stories
          </p>
          <h2 className="headline-lg text-cream mb-5">
            Real projects, run by the team behind each pillar.
          </h2>
          <p className="body-md text-cream/70">
            Product sourcing, talent and digital systems, each with its own specialist team.
            Open any story to see the full case study.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCases.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={`/use-cases#${story.id}`}
                className="group flex flex-col h-full bg-cream/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-cream/10 hover:border-sunshine/50 transition-all duration-500 hover:bg-cream/10"
              >
                {story.gallery.length > 0 && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={story.gallery[0]}
                      alt={story.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
                    <span
                      className={`absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-sm ${
                        categoryAccent[story.category] ?? "text-cream border-cream/30 bg-cream/10"
                      }`}
                    >
                      {story.category}
                    </span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="headline-md text-cream group-hover:text-sunshine transition-colors mb-2">
                    {story.title}
                  </h3>
                  <p className="text-sm text-cream/60 mb-4">{story.client}</p>
                  <p className="body-md text-cream/80 mb-5 line-clamp-3">{story.result}</p>

                  <div className="flex items-center gap-2 text-sunshine font-medium mt-auto">
                    <span>Read the case study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 text-cream/80 hover:text-sunshine transition-colors font-medium"
          >
            See all success stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
