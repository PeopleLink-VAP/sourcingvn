import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import edgepointShot from "@/assets/cases/Edpoint_safety.jpg";
import edgepointLogo from "@/assets/cases/edpoint_logo.png";
import radiusShot from "@/assets/cases/radius_excavation.jpg";
import soraShot from "@/assets/cases/sora_studio.jpg";
import soraLogo from "@/assets/cases/sora_logo.png";
import gloryShot from "@/assets/cases/glorynest.jpg";
import gloryLogo from "@/assets/cases/glorynest_logo.png";
import portalShot from "@/assets/cases/teaching_portal.jpg";
import sourcingPlatformShot from "@/assets/cases/sourcing_supplier.jpg";

type Project = {
  name: string;
  country: string;
  description: string;
  image: string;
  logo?: string;
  href: string;
};

const projects: Project[] = [
  {
    name: "Edgepoint Safety",
    country: "Canada",
    description: "Modernizing an established safety business.",
    image: edgepointShot,
    logo: edgepointLogo,
    href: "/use-cases#edgepoint-safety",
  },
  {
    name: "Radius Ecosystem",
    country: "Canada",
    description: "One digital ecosystem for four businesses.",
    image: radiusShot,
    href: "/use-cases#radius-ecosystem",
  },
  {
    name: "Sora Nail",
    country: "USA",
    description: "A website designed to turn interest into bookings.",
    image: soraShot,
    logo: soraLogo,
    href: "/use-cases#sora-nail",
  },
  {
    name: "Glory Nest",
    country: "Vietnam",
    description: "A digital experience built around the story of a homestay.",
    image: gloryShot,
    logo: gloryLogo,
    href: "/use-cases#glory-nest",
  },
  {
    name: "Virtual Assistant Training Portal",
    country: "Vietnam",
    description: "One system for 200+ students, trainers and learning operations.",
    image: portalShot,
    href: "/use-cases#va-training-portal",
  },
  {
    name: "Sourcing Platform",
    country: "Vietnam / International",
    description: "Connecting buyers, suppliers and sourcing operations.",
    image: sourcingPlatformShot,
    href: "/use-cases#sourcing-platform",
  },
];

export const SelectedProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
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
    <section className="section-padding bg-secondary/40 overflow-hidden">
      <div className="container-editorial">
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">Use Cases</p>
            <h2 className="headline-lg text-foreground mb-3">What we've built for our customers.</h2>
            <p className="body-md text-muted-foreground">
              Real websites, portals and systems we designed and built for real businesses. Every
              business needed something different.
            </p>
          </div>


          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => emblaApi?.scrollPrev()}
              className="w-11 h-11 rounded-full border border-border bg-card text-muted-foreground flex items-center justify-center hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => emblaApi?.scrollNext()}
              className="w-11 h-11 rounded-full border border-border bg-card text-muted-foreground flex items-center justify-center hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[48%] lg:basis-[32%] animate-fade-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <Link
                  to={project.href}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
                >

                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={project.image}
                      alt={`${project.name} project preview`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.logo && (
                      <div className="absolute top-3 left-3 bg-card/95 rounded-md px-2.5 py-1.5">
                        <img
                          src={project.logo}
                          alt={`${project.name} logo`}
                          className="h-5 w-auto max-w-[100px] object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-display font-semibold text-foreground">{project.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1 mb-3">
                      {project.country}
                    </p>
                    <p className="body-md text-muted-foreground flex-1">{project.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      View case
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 mt-8">
          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                aria-label={`Go to ${project.name}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>

          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            Explore all use cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
