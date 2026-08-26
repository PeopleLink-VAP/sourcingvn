import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronRight, Image, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { useCaseCategories, allCases, type UseCase } from "@/data/useCases";

const filters = [
  { label: "All stories", value: "All" },
  ...useCaseCategories.map((c) => ({ label: c.category, value: c.category })),
];

const accent: Record<string, string> = {
  "Product Sourcing": "bg-teal/10 text-teal border-teal/30",
  "Talent Sourcing": "bg-coral/10 text-coral border-coral/30",
  "Digital & Systems": "bg-navy/10 text-navy border-navy/30",
};

const UseCases = () => {
  const location = useLocation();
  const [selectedCase, setSelectedCase] = useState<UseCase | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const visibleCases = useMemo(
    () => (filter === "All" ? allCases : allCases.filter((c) => c.category === filter)),
    [filter]
  );

  // Open the matching case study when arriving via /use-cases#<case-id> from any page
  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;
    const match = allCases.find((c) => c.id === id);
    if (!match) return;
    setFilter("All");
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
      setSelectedCase(match);
    }, 250);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  // Lock body scroll while a modal is open
  useEffect(() => {
    const open = Boolean(selectedCase || selectedImage);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCase, selectedImage]);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-sunshine/20 via-cream to-teal/10 overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-40" />

        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-4">
              Real Results
            </p>
            <h1 className="headline-xl text-navy mb-6">
              Stories of <span className="text-sunshine">success</span> from our clients
            </h1>
            <p className="body-lg text-cool-gray max-w-2xl">
              Every project we run across sourcing, talent and digital systems lives here.
              Filter by service, then open any story for the full case study.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-6 mt-10">
            {useCaseCategories.map((c) => (
              <div key={c.category} className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${c.color}`}>
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm">{c.category}</p>
                  <Link
                    to={c.link}
                    className="text-xs text-cool-gray hover:text-teal inline-flex items-center gap-1"
                  >
                    {c.cases.length} stories
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar + unified grid */}
      <section className="section-padding bg-white">
        <div className="container-editorial">
          <div className="sticky top-20 z-20 -mx-4 px-4 py-3 mb-10 bg-white/85 backdrop-blur-md flex flex-wrap gap-2 border-b border-border">
            {filters.map((f) => {
              const count =
                f.value === "All"
                  ? allCases.length
                  : allCases.filter((c) => c.category === f.value).length;
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFilter(f.value)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    filter === f.value
                      ? "bg-navy text-cream border-navy shadow-sm"
                      : "bg-white text-cool-gray border-border hover:text-navy hover:border-navy/40"
                  }`}
                >
                  {f.label}
                  <span className="text-xs opacity-70">{count}</span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleCases.map((useCase, index) => (
                <motion.article
                  layout
                  key={useCase.id}
                  id={useCase.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, delay: Math.min(index, 6) * 0.05 }}
                  onClick={() => setSelectedCase(useCase)}
                  className="scroll-mt-40 flex flex-col bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                >
                  {useCase.gallery.length > 0 ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={useCase.gallery[0]}
                        alt={useCase.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                        <Image className="w-3 h-3 text-navy" />
                        <span className="text-xs font-medium text-navy">{useCase.gallery.length}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-2 bg-gradient-to-r from-teal/40 via-sunshine/40 to-coral/40" />
                  )}

                  <div className="p-5 flex items-start gap-3">
                    {useCase.logo && (
                      <img
                        src={useCase.logo}
                        alt={`${useCase.title} logo`}
                        className="h-8 w-auto max-w-[80px] object-contain shrink-0 mt-1"
                      />
                    )}
                    <div>
                      <span
                        className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2 ${
                          accent[useCase.category]
                        }`}
                      >
                        {useCase.category}
                      </span>
                      <h3 className="text-navy font-display font-semibold text-lg leading-snug">
                        {useCase.title}
                      </h3>
                      <p className="text-cool-gray text-sm">{useCase.client}</p>
                    </div>
                  </div>

                  <p className="px-5 text-sm text-cool-gray line-clamp-2">{useCase.result}</p>

                  <div className="p-5 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-teal font-medium group-hover:text-navy transition-colors">
                      <span>View full case study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-navy" />
                </button>

                {selectedCase.gallery.length > 0 && (
                  <div
                    className={`grid gap-1 [&>*]:aspect-[4/3] ${
                      selectedCase.gallery.length === 1 ? "grid-cols-1" : "grid-cols-2"
                    }`}
                  >
                    {selectedCase.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative overflow-hidden cursor-pointer"
                        onClick={() => {
                          if (!img.endsWith(".mp4")) setSelectedImage(img);
                        }}
                      >
                        {img.endsWith(".mp4") ? (
                          <>
                            <video
                              src={img}
                              controls
                              muted
                              playsInline
                              className="w-full h-full object-cover bg-navy"
                            />
                            <span className="absolute top-3 left-3 pointer-events-none inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider bg-white/85 text-navy rounded-full px-2 py-1">
                              <Play className="w-3 h-3" />
                              Video
                            </span>
                          </>
                        ) : (
                          <img
                            src={img}
                            alt={`${selectedCase.title} project photo ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                      {selectedCase.industry}
                    </span>
                    <h2 className="headline-lg text-navy">{selectedCase.title}</h2>
                    <p className="text-cool-gray">{selectedCase.client}</p>
                  </div>
                  {selectedCase.logo && (
                    <img
                      src={selectedCase.logo}
                      alt={`${selectedCase.title} logo`}
                      className="h-12 w-auto max-w-[160px] object-contain shrink-0"
                    />
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {selectedCase.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-4 bg-cream rounded-xl">
                      <div className="text-2xl font-display font-bold text-navy">{metric.value}</div>
                      <div className="text-xs text-cool-gray">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-coral mb-2">
                      The Challenge
                    </h3>
                    <p className="text-cool-gray">{selectedCase.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-teal mb-2">
                      Our Solution
                    </h3>
                    <p className="text-cool-gray">{selectedCase.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-sunshine mb-2">
                      The Result
                    </h3>
                    <p className="text-navy font-medium">{selectedCase.result}</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-cream">
                    <Link to="/start-project" className="inline-flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-sunshine/20 via-cream to-teal/20">
        <div className="container-editorial text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline-lg text-navy mb-6">Ready to write your success story?</h2>
            <p className="body-lg text-cool-gray max-w-xl mx-auto mb-8">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Button asChild size="xl" className="bg-navy hover:bg-navy-light text-cream">
              <Link to="/start-project" className="inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;
