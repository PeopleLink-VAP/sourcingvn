import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  ["Tell us what you need", "Product, quantity, target price and timeline."],
  ["Get a plan and quote", "Within 24 to 48 hours."],
  ["Suppliers, verified", "A checked shortlist, not a cold list."],
  ["Samples, production, QC", "Updates with photos at every step."],
  ["Shipped to you", "Coordinated with trusted freight partners."],
];
const faqs = [
  ["What's the minimum order?", "It depends on the factory and product. Many of our suppliers work with small first runs, so send us your numbers and we'll tell you honestly what's realistic."],
  ["What if something goes wrong in production?", "We're on the ground, so we catch issues at the factory and flag them early with photos. Then we push the supplier to fix it before anything ships."],
  ["Do you work with first-time sellers?", "Yes. A lot of our clients are launching their first product. We'll walk you through samples, MOQs and costs step by step."],
];

export const ProcessFaqCta = () => (
  <>
    <section className="bg-background py-20">
      <div className="container-editorial">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">How it works</p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">From idea to shipment in five steps</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([t, d], i) => (
            <div key={t} className="border-t-2 border-foreground pt-5">
              <p className="font-display text-4xl font-bold text-primary">{i + 1}</p>
              <p className="mt-3 font-semibold text-foreground">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="faq" className="bg-background py-20">
      <div className="container-editorial max-w-4xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">Common questions</h2>
        <Accordion type="single" collapsible defaultValue="0" className="mt-8 border-t border-border">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={String(i)}>
              <AccordionTrigger className="text-left text-lg font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="bg-background py-24 text-center">
      <div className="container-editorial">
        <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-foreground md:text-7xl">
          Tell us what<br />you want to make<span className="text-primary">.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">A free 20-minute call, or a written quote. Whichever is easier for you.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:hello@sourcing.vn?subject=Book%20a%20free%20call" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background">
            Book a free call <ArrowRight className="h-4 w-4" />
          </a>
          <a href="mailto:hello@sourcing.vn?subject=Get%20a%20quote" className="rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground">Get a quote</a>
        </div>
        <a href="mailto:hello@sourcing.vn" className="mt-6 inline-block text-muted-foreground underline">hello@sourcing.vn</a>
      </div>
    </section>
  </>
);
