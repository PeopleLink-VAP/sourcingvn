import { Link } from "react-router-dom";
import { Box, Armchair, Sprout } from "lucide-react";
import caps from "@/assets/home/cat_caps.jpg.asset.json";
import sneakers from "@/assets/home/cat_sneakers.jpg.asset.json";
import clothing from "@/assets/home/cat_clothing.jpg.asset.json";
import bags from "@/assets/home/cat_bags.jpg.asset.json";
import silicone from "@/assets/home/cat_silicone.jpg.asset.json";

const core = [
  { t: "Hats & caps", d: "Baseball caps, bucket hats, sun hats, custom embroidery and labels.", img: caps.url },
  { t: "Shoes & sneakers", d: "Sneakers, casual and sport shoes, from first sample to full production run.", img: sneakers.url },
  { t: "Clothing & uniforms", d: "Sportswear, workwear and uniforms, scarves and cut-and-sew basics.", img: clothing.url },
  { t: "Bags & handicraft", d: "Handbags, totes, bamboo and woven goods made by Vietnamese craft workshops.", img: bags.url, contain: true },
];
const also = [
  { t: "Packaging", d: "Boxes, mailers, bags, labels", icon: Box },
  { t: "Plastic & silicone", d: "Moulded parts, household goods", img: silicone.url },
  { t: "Wood furniture", d: "Indoor, outdoor, home décor", icon: Armchair },
  { t: "Agricultural products", d: "Coffee, spices, dried goods", icon: Sprout },
];

export const Categories = () => (
  <section id="products" className="bg-background py-20">
    <div className="container-editorial">
      <div className="grid items-end gap-6 md:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">What we source</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">Products we know inside out</h2>
        </div>
        <p className="text-muted-foreground">Our core categories come with real projects behind them. If it's made in Vietnam, we'll find out who makes it best.</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {core.map((c) => (
          <div key={c.t} className="group rounded-3xl bg-card p-3">
            <div className="aspect-square overflow-hidden rounded-2xl bg-background">
              <img src={c.img} alt={c.t} loading="lazy"
                className={`h-full w-full transition duration-500 group-hover:scale-105 ${c.contain ? "object-contain p-6" : "object-cover"}`} />
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-foreground">{c.t}</h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">Core</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-14 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">We also source</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {also.map((a) => (
          <div key={a.t} className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-muted">
              {a.img ? <img src={a.img} alt={a.t} className="h-full w-full object-cover" /> : a.icon && <a.icon className="h-5 w-5 text-foreground/70" />}
            </div>
            <div>
              <p className="font-semibold text-foreground">{a.t}</p>
              <p className="text-sm text-muted-foreground">{a.d}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-muted-foreground">
        Don't see your product? <a href="mailto:hello@sourcing.vn" className="font-semibold text-foreground underline">Tell us what you need</a> and we'll check who makes it.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Need people or systems instead? See <Link to="/talent-sourcing" className="underline">Talent Sourcing</Link> and <Link to="/digital-systems" className="underline">Digital & Systems</Link>.
      </p>
    </div>
  </section>
);
