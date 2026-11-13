import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/home/duyen_portrait.jpg.asset.json";
import laptop from "@/assets/home/duyen_laptop.jpg.asset.json";

const roles = [
  ["Grew up around clothing", "My dad is a tailor. I learned stitching and fabric before anything else."],
  ["Amazon FBA & Etsy seller", "MOQs, packaging rules, restock deadlines. I've lived them."],
  ["BD Manager, Australian skincare importer", "Cross-border trade from both ends."],
  ["Ops Manager, fast-growing DTC brand", "Production, suppliers and fulfilment at scale."],
  ["Sourcing agent for 100+ SMEs on Fiverr", "Small brands, real orders, real deadlines."],
];
const sides = [
  ["As a buyer", "Sourcing production in Vietnam for the first or fiftieth time."],
  ["As a business owner", "Watching cash flow, margins and launch dates."],
  ["As a merchandiser", "Juggling specs, samples and factory follow-ups."],
  ["As a platform seller", "Meeting Amazon, Etsy or Shopify rules on time."],
];

export const FounderStory = () => (
  <section id="story" className="bg-background py-20">
    <div className="container-editorial">
      <div className="flex justify-between text-sm text-muted-foreground"><span>Buyer</span><span>Seller</span><span>Founder</span></div>
      <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-2 py-1 pr-4 text-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-background">DP</span>
            Duyen Pham, Founder
          </span>
          <p className="mt-6 font-display text-4xl leading-tight text-foreground md:text-5xl">
            I spent years on <strong>the buyer's side</strong> of the table,
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm rounded-t-[3rem] border border-b-0 border-foreground/80 p-4">
          <img src={portrait.url} alt="Duyen Pham, Founder of Sourcing Vietnam" className="aspect-[3/4] w-full rounded-t-[2.5rem] object-cover" />
        </div>
        <div>
          <p className="font-display text-4xl leading-tight text-foreground md:text-5xl">
            so I built <strong>the team</strong> I wished I'd had.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/start-project" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/our-people" className="rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground">Read my story</Link>
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Why I founded Sourcing Vietnam</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">Every role I've had taught me what buyers are missing.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I grew up in my dad's tailor shop, then spent years placing orders, chasing factories and answering to marketplaces. Again and again I saw the same gap: brands abroad needed someone in Vietnam who thought like a buyer, not like a middleman.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            So I founded Sourcing Vietnam with a team in Ho Chi Minh City, Da Nang and Hanoi. We check, push and report on every order as if it were our own.
          </p>
          <img src={laptop.url} alt="Duyen working with a client" loading="lazy" className="mt-8 hidden h-64 w-full rounded-3xl object-cover object-[50%_30%] lg:block" />
        </div>
        <ol className="border-t border-border">
          {roles.map(([t, d], i) => (
            <li key={t} className="flex gap-6 border-b border-border py-5">
              <span className="font-display font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
              <div><p className="font-semibold text-foreground">{t}</p><p className="text-muted-foreground">{d}</p></div>
            </li>
          ))}
        </ol>
      </div>

      <h3 className="mt-20 font-display text-2xl font-bold text-foreground">So we understand you from four sides</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sides.map(([t, d]) => (
          <div key={t} className="rounded-3xl bg-card p-6"><p className="font-semibold text-foreground">{t}</p><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
        ))}
      </div>
    </div>
  </section>
);
