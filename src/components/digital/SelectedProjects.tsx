import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import edgepointShot from "@/assets/cases/Edpoint_safety.jpg";
import edgepointLogo from "@/assets/cases/edpoint_logo.png";
import radiusShot from "@/assets/cases/radius_excavation.jpg";
import soraShot from "@/assets/cases/sora_nail.jpg";
import soraLogo from "@/assets/cases/sora_logo.png";
import gloryShot from "@/assets/cases/glorynest.jpg";
import portalShot from "@/assets/cases/teaching_portal.jpg";
import sourcingPlatformShot from "@/assets/cases/sourcing_supplier.jpg";

type Project = {
  name: string;
  country: string;
  headline: string;
  description: string;
  image: string;
  logo?: string;
  href: string;
};

const projects: Project[] = [
  {
    name: "Edgepoint Safety",
    country: "Canada",
    headline: "When your website no longer represents your business.",
    description:
      "Modernized an established safety company's website and content, creating a stronger digital foundation for its next stage of growth.",
    image: edgepointShot,
    logo: edgepointLogo,
    href: "/use-cases#edgepoint-safety",
  },
  {
    name: "Radius Ecosystem",
    country: "Canada",
    headline: "Four companies. One digital ecosystem.",
    description:
      "Connected the digital presence of multiple businesses across construction, disposal and mechanical services while keeping each company distinct.",
    image: radiusShot,
    href: "/use-cases#radius-ecosystem",
  },
  {
    name: "Sora Nail",
    country: "USA",
    headline: "From “I like it” to “I'll book it.”",
    description:
      "A distinctive beauty website designed around the customer journey and connected directly to the booking experience.",
    image: soraShot,
    logo: soraLogo,
    href: "/use-cases#sora-nail",
  },
  {
    name: "Glory Nest",
    country: "Vietnam",
    headline: "Selling the feeling, not just the room.",
    description:
      "A storytelling-led website combining the homestay experience, direct booking and Airbnb.",
    image: gloryShot,
    href: "/use-cases#glory-nest",
  },
  {
    name: "Virtual Assistant Training Portal",
    country: "Vietnam",
    headline: "When 200+ students become too much for spreadsheets.",
    description:
      "A learning and operations portal connecting students, trainers, courses, schedules, content and support.",
    image: portalShot,
    href: "/use-cases#va-training-portal",
  },
  {
    name: "Sourcing Platform",
    country: "Vietnam / International",
    headline: "What if sourcing didn't live in 20 different spreadsheets?",
    description:
      "A platform connecting international buyers, Vietnamese suppliers and the sourcing team in one structured workflow.",
    image: sourcingPlatformShot,
    href: "/use-cases#sourcing-platform",
  },
];

export const SelectedProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding bg-navy overflow-hidden">
      <div className="container-editorial">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Selected Projects
            </p>
            <h2 className="headline-lg text-cream mb-4">Built for real business needs.</h2>
            <p className="body-lg text-cream/60">
              Websites, platforms and digital systems built around how businesses actually work.
            </p>
          </motion.div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-full border border-cream/20 text-cream/70 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-full border border-cream/20 text-cream/70 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="container-editorial">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[70%] lg:basis-[78%]"
              >
                <Link
                  to={project.href}
                  className="group block bg-navy-deep border border-cream/10 hover:border-gold/40 transition-colors duration-500 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.name} project preview`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                      {project.logo && (
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                          <img
                            src={project.logo}
                            alt={`${project.name} logo`}
                            className="h-6 w-auto max-w-[120px] object-contain"
                          />
                        </div>
                      )}
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6 text-xs uppercase tracking-widest">
                        <span className="text-gold">{project.name}</span>
                        <span className="w-6 h-px bg-cream/20" />
                        <span className="text-cream/40">{project.country}</span>
                      </div>
                      <h3 className="headline-md text-cream mb-5 group-hover:text-gold transition-colors duration-300">
                        {project.headline}
                      </h3>
                      <p className="body-md text-cream/60 mb-8">{project.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-gold">
                        View Case Study
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-editorial">
        <div className="flex items-center justify-between mt-10 gap-6">
          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                aria-label={`Go to ${project.name}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "w-10 bg-gold" : "w-4 bg-cream/20 hover:bg-cream/40"
                }`}
              />
            ))}
          </div>

          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 text-sm font-medium text-cream/70 hover:text-gold transition-colors"
          >
            Explore all use cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
