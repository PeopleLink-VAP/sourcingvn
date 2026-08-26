import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import edgepointLogo from "@/assets/cases/edpoint_logo.png";
import radiusLogo from "@/assets/cases/radius_logo.png";
import soraLogo from "@/assets/cases/sora_logo.png";
import gloryLogo from "@/assets/cases/glorynest_logo.png";
import portalShot from "@/assets/cases/teaching_portal.jpg";
import sourcingPlatformShot from "@/assets/cases/sourcing_supplier.jpg";

import edge1 from "@/assets/cases/highlights/EdgePoint_1_Hero.jpg";
import edge2 from "@/assets/cases/highlights/EdgePoint_2_CoreServices.jpg";
import edge3 from "@/assets/cases/highlights/EdgePoint_3_Training.jpg";
import edge4 from "@/assets/cases/highlights/EdgePoint_4_ProjectHighlights.jpg";
import rex1 from "@/assets/cases/highlights/RadiusExcavation_1_Hero.jpg";
import rex2 from "@/assets/cases/highlights/RadiusExcavation_2_Network.jpg";
import rdi1 from "@/assets/cases/highlights/RadiusDisposal_1_Hero.jpg";
import rdi2 from "@/assets/cases/highlights/RadiusDisposal_2_Services.jpg";
import sora1 from "@/assets/cases/highlights/SoraNail_1_Hero.jpg";
import sora2 from "@/assets/cases/highlights/SoraNail_2_Services.jpg";
import sora3 from "@/assets/cases/highlights/SoraNail_3_Interior.jpg";
import sora4 from "@/assets/cases/highlights/SoraNail_4_Testimonials.jpg";
import glory1 from "@/assets/cases/highlights/Glorynest_1_Hero.jpg";
import glory2 from "@/assets/cases/highlights/Glorynest_2_Gallery.jpg";
import glory3 from "@/assets/cases/highlights/Glorynest_3_Features.jpg";
import glory4 from "@/assets/cases/highlights/Glorynest_4_Stories.jpg";

type Project = {
  name: string;
  country: string;
  description: string;
  logo?: string;
  shots: { src: string; label: string }[];
  href: string;
};

const projects: Project[] = [
  {
    name: "Edgepoint Safety",
    country: "Canada",
    description: "Modernizing an established safety business.",
    logo: edgepointLogo,
    shots: [
      { src: edge1, label: "Homepage" },
      { src: edge2, label: "Core services" },
      { src: edge3, label: "Training" },
      { src: edge4, label: "Project highlights" },
    ],
    href: "/use-cases#edgepoint-safety",
  },
  {
    name: "Radius Ecosystem",
    country: "Canada",
    description: "One digital ecosystem for four businesses.",
    logo: radiusLogo,
    shots: [
      { src: rex1, label: "Excavation homepage" },
      { src: rex2, label: "Radius network" },
      { src: rdi1, label: "Disposal homepage" },
      { src: rdi2, label: "Disposal services" },
    ],
    href: "/use-cases#radius-ecosystem",
  },
  {
    name: "Sora Nail",
    country: "USA",
    description: "A website designed to turn interest into bookings.",
    logo: soraLogo,
    shots: [
      { src: sora1, label: "Homepage" },
      { src: sora2, label: "Look book" },
      { src: sora3, label: "The studio" },
      { src: sora4, label: "Client reviews" },
    ],
    href: "/use-cases#sora-nail",
  },
  {
    name: "Glory Nest",
    country: "Vietnam",
    description: "A digital experience built around the story of a homestay.",
    logo: gloryLogo,
    shots: [
      { src: glory1, label: "Homepage" },
      { src: glory2, label: "Gallery" },
      { src: glory3, label: "Why Glory Nest" },
      { src: glory4, label: "Stories" },
    ],
    href: "/use-cases#glory-nest",
  },
  {
    name: "Virtual Assistant Training Portal",
    country: "Vietnam",
    description: "One system for 200+ students, trainers and learning operations.",
    shots: [{ src: portalShot, label: "Learning portal" }],
    href: "/use-cases#va-training-portal",
  },
  {
    name: "Sourcing Platform",
    country: "Vietnam / International",
    description: "Connecting buyers, suppliers and sourcing operations.",
    shots: [{ src: sourcingPlatformShot, label: "Supplier workspace" }],
    href: "/use-cases#sourcing-platform",
  },
];

export const SelectedProjects = () => {
  return (
    <section className="section-padding bg-secondary/40 overflow-hidden">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14 animate-fade-in">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">Use Cases</p>
          <h2 className="headline-lg text-foreground mb-3">What we've built for our customers.</h2>
          <p className="body-md text-muted-foreground">
            Real websites, portals and systems we designed and built for real businesses. Every
            business needed something different.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="grid lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] gap-8 rounded-2xl border border-border bg-card p-6 md:p-8 animate-fade-in transition-colors hover:border-primary/30"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex flex-col">
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="h-8 w-auto max-w-[140px] object-contain object-left mb-5"
                  />
                )}
                <h3 className="text-xl font-display font-semibold text-foreground">{project.name}</h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1 mb-3">
                  {project.country}
                </p>
                <p className="body-md text-muted-foreground flex-1">{project.description}</p>
                <Link
                  to={project.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary self-start"
                >
                  View case
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div
                className={`grid gap-3 ${
                  project.shots.length > 1 ? "sm:grid-cols-2" : "grid-cols-1 sm:max-w-[calc(50%-0.375rem)]"
                }`}
              >
                {project.shots.map((shot) => (
                  <figure
                    key={shot.src}
                    className="group relative overflow-hidden rounded-lg border border-border/70 bg-secondary"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={shot.src}
                        alt={`${project.name} ${shot.label}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-background opacity-0 group-hover:opacity-100 transition-opacity">
                      {shot.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
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
