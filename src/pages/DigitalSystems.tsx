import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SelectedProjects } from "@/components/digital/SelectedProjects";
import { SystemExamples } from "@/components/digital/SystemExamples";
import { DashboardPreview } from "@/components/digital/DashboardPreview";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Understand",
    description:
      "We map how your business currently works: people, customers, tools and processes.",
  },
  {
    number: "2",
    title: "Design",
    description: "We turn the messy parts into a clear digital experience and workflow.",
  },
  {
    number: "3",
    title: "Build",
    description:
      "We build the website, portal, dashboard, LMS or system around what your business actually needs.",
  },
];

const DigitalSystems = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 bg-background border-b border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <p className="text-xs font-medium uppercase tracking-widest text-primary mb-5">
                Digital &amp; Systems
              </p>
              <h1 className="headline-xl text-foreground mb-6">
                Your business doesn't need more tools. It needs a better system.
              </h1>
              <p className="body-lg text-muted-foreground max-w-xl mb-9">
                We design and build websites, landing pages, portals, dashboards, LMS platforms and
                business systems around the way your team actually works.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="hover-scale">
                  <Link to="/start-project">
                    Talk to us about your project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-scale">
                  <a href="#examples">
                    See what we've built
                    <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="animate-scale-in">
              <DashboardPreview />
            </div>
          </div>

        </div>
      </section>

      {/* What a system can do */}
      <div id="examples">
        <SystemExamples />
      </div>




      {/* Use cases */}
      <SelectedProjects />

      {/* How we think */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
              How We Think
            </p>
            <h2 className="headline-lg text-foreground">Three steps, no mystery.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-xl border border-border bg-card p-7 animate-fade-in transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full border border-primary/30 text-primary font-display font-semibold mb-5">
                  {step.number}
                </span>

                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="body-md text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
              How We Price
            </p>
            <h2 className="headline-lg text-foreground mb-6">
              No fixed packages. No surprise costs.
            </h2>
            <p className="body-lg text-muted-foreground">
              Every project is quoted based on your requirements, scope, and level of customization.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-secondary/40 border-t border-border">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <h2 className="headline-lg text-foreground mb-5">Not sure what you need yet?</h2>
            <p className="body-lg text-muted-foreground mb-8">
              That's okay. Tell us what's currently messy, manual or difficult in your business.
              We'll help you figure out what should be improved, and what actually needs to be
              built.
            </p>
            <Button asChild size="lg">
              <Link to="/start-project">
                Let's talk about your business
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalSystems;
