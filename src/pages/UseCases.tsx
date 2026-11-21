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
  "Digital & Systems": "bg-foreground/10 text-foreground border-foreground/30",
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
            <h1 className="headline-xl text-foreground mb-6">
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
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{c.category}</p>
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
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="sticky top-20 z-20 -mx-4 px-4 py-3 mb-10 bg-card/85 backdrop-blur-md flex flex-wrap gap-2 border-b border-border">
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
                      ? "bg-foreground text-cream border-foreground shadow-sm"
                      : "bg-card text-cool-gray border-border hover:text-foreground hover:border-foreground/40"
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
                  className="scroll-mt-40 flex flex-col bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                >
                  {useCase.gallery.length > 0 ? (
                    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-secondary/60 p-3">
                      <img
                        src={useCase.gallery[0]}
                        alt={useCase.title}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
                        <Image className="w-3 h-3 text-foreground" />
                        <span className="text-xs font-medium text-foreground">{useCase.gallery.length}</span>
                      </div>
                    </div>
                  ) : useCase.portrait ? (
                    <div className="flex h-56 items-center justify-center bg-secondary/60 p-5">
                      <img
                        src={useCase.portrait}
                        alt={useCase.client}
                        loading="lazy"
                        className="h-44 w-44 rounded-full border-4 border-card object-cover shadow-sm"
                      />
                    </div>
                  ) : (
                    <div className="relative h-32 bg-secondary/50 flex items-center justify-center border-b border-border">
                      {useCase.icon ? (
                        <div className="w-14 h-14 rounded-2xl bg-foreground flex items-center justify-center shadow-sm">
                          <useCase.icon className="w-7 h-7 text-cream" strokeWidth={1.5} />
                        </div>
                      ) : (
                        <div className="h-2 w-24 rounded-full bg-gradient-to-r from-teal/40 via-sunshine/40 to-coral/40" />
                      )}
                    </div>
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
                      <h3 className="text-foreground font-display font-semibold text-lg leading-snug">
                        {useCase.title}
                      </h3>
                      <p className="text-cool-gray text-sm">{useCase.client}</p>
                    </div>
                  </div>

                  <p className="px-5 text-sm text-cool-gray line-clamp-2">{useCase.result}</p>

                  <div className="p-5 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-teal font-medium group-hover:text-foreground transition-colors">
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
            className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header: text only, no photos */}
              <div className="relative border-b border-border bg-cream/60 rounded-t-2xl px-8 py-8">
                <button
                  type="button"
                  aria-label="Close case study"
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                <div className="flex items-start justify-between gap-6 pr-12">
                  <div className="flex items-start gap-4">
                    {selectedCase.portrait ? (
                      <img
                        src={selectedCase.portrait}
                        alt={selectedCase.client}
                        className="h-14 w-14 rounded-full border border-border object-cover shrink-0"
                      />
                    ) : selectedCase.icon ? (
                      <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center shrink-0">
                        <selectedCase.icon className="w-6 h-6 text-background" strokeWidth={1.5} />
                      </div>
                    ) : null}
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                        {selectedCase.industry}
                      </span>
                      <h2 className="headline-md text-foreground">{selectedCase.title}</h2>
                      <p className="text-cool-gray">{selectedCase.client}</p>
                    </div>
                  </div>
                  {selectedCase.logo && (
                    <img
                      src={selectedCase.logo}
                      alt={`${selectedCase.title} logo`}
                      className="h-12 w-auto max-w-[160px] object-contain shrink-0"
                    />
                  )}
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {selectedCase.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-4 bg-cream rounded-xl">
                      <div className="text-2xl font-display font-bold text-foreground">{metric.value}</div>
                      <div className="text-xs text-cool-gray">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-coral mb-2">
                      {selectedCase.brief ? "The Brief" : "The Challenge"}
                    </h3>
                    <p className="text-cool-gray">{selectedCase.brief ?? selectedCase.challenge}</p>
                  </div>

                  {/* Photos live inside the body of the story */}
                  {selectedCase.gallery.length > 0 && (
                    <div>
                      <div
                        className={`grid items-start gap-3 ${
                          selectedCase.gallery.length === 1 ? "grid-cols-1" : "sm:grid-cols-2"
                        }`}
                      >
                        {selectedCase.gallery.map((img, i) => (
                          <div
                            key={i}
                            className="relative flex items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary/40 p-2 cursor-pointer"
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
                                  className="aspect-video w-full object-contain bg-foreground"
                                />
                                <span className="absolute top-3 left-3 pointer-events-none inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider bg-card/85 text-foreground rounded-full px-2 py-1">
                                  <Play className="w-3 h-3" />
                                  Video
                                </span>
                              </>
                            ) : (
                              <img
                                src={img}
                                alt={`${selectedCase.title} project photo ${i + 1}`}
                                className="h-auto max-h-[32rem] w-full rounded-lg object-contain transition-transform duration-300 hover:scale-[1.01]"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      {selectedCase.note && (
                        <p className="mt-3 text-xs italic text-cool-gray">Note: {selectedCase.note}</p>
                      )}
                    </div>
                  )}

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-teal mb-2">
                      {selectedCase.services ? "Services Used" : "Our Solution"}
                    </h3>
                    {selectedCase.services ? (
                      <ul className="space-y-2">
                        {selectedCase.services.map((s) => (
                          <li key={s} className="flex gap-3 text-cool-gray">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-cool-gray">{selectedCase.solution}</p>
                    )}
                  </div>

                  {selectedCase.challengeList && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-coral mb-2">
                        {selectedCase.challengesLabel ?? "Challenges"}
                      </h3>
                      <ul className="space-y-2">
                        {selectedCase.challengeList.map((c) => (
                          <li key={c} className="flex gap-3 text-cool-gray">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="border-l-2 border-sunshine pl-5">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-sunshine mb-2">
                      The Result
                    </h3>
                    <p className="text-foreground font-medium">{selectedCase.result}</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-cream">
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
            className="fixed inset-0 bg-foreground/95 z-[60] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-card/10 rounded-full flex items-center justify-center hover:bg-card/20 transition-colors"
            >
              <X className="w-6 h-6 text-primary-foreground" />
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
            <h2 className="headline-lg text-foreground mb-6">Ready to write your success story?</h2>
            <p className="body-lg text-cool-gray max-w-xl mx-auto mb-8">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Button asChild size="xl" className="bg-foreground hover:bg-foreground/90 text-cream">
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
