import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SelectedProjects } from "@/components/digital/SelectedProjects";
import { SystemExamples } from "@/components/digital/SystemExamples";
import { DashboardPreview } from "@/components/digital/DashboardPreview";
import { ChatDemo } from "@/components/digital/ChatDemo";
import { LmsStudentView, LmsTrainerView } from "@/components/digital/LmsDemo";
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
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-primary mb-5">
                Digital &amp; Systems
              </p>
              <h1 className="headline-xl text-foreground mb-6">
                Your business doesn't need more tools. It needs a better system.
              </h1>
              <p className="body-lg text-muted-foreground max-w-xl mb-9">
                We design and build websites, portals, dashboards, LMS platforms and business
                systems around the way your team actually works.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/start-project">
                    Talk to us about your project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#examples">
                    See what we've built
                    <ArrowDown className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* What a system can do */}
      <div id="examples">
        <SystemExamples />
      </div>

      {/* Chatbot */}
      <section className="section-padding bg-secondary/40 border-y border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            <div className="max-w-lg">
              <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
                AI Assistant
              </p>
              <h2 className="headline-lg text-foreground mb-5">
                Not every customer question needs a human.
              </h2>
              <p className="body-lg text-muted-foreground">
                An assistant trained on your business answers the repeat questions, qualifies the
                lead, and passes real opportunities to your team with the context already gathered.
              </p>
            </div>
            <ChatDemo />
          </div>
        </div>
      </section>

      {/* LMS */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
              Learning Systems
            </p>
            <h2 className="headline-lg text-foreground mb-4">
              From "Where's that lesson?" to one learning system.
            </h2>
            <p className="body-md text-muted-foreground">
              Students get one place to learn. Trainers get the operational system behind it.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 items-start">
            <LmsStudentView />
            <LmsTrainerView />
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="section-padding bg-secondary/40 border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
              Business Dashboard
            </p>
            <h2 className="headline-lg text-foreground mb-4">One place to see what matters.</h2>
            <p className="body-md text-muted-foreground">
              Revenue, active projects, tasks, customers, team activity and alerts, pulled together
              from the tools you already use.
            </p>
          </div>
          <DashboardPreview />
        </div>
      </section>

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
            {steps.map((step) => (
              <div key={step.title} className="rounded-xl border border-border bg-card p-7">
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
