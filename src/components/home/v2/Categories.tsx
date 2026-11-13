import { Link } from "react-router-dom";
import caps from "@/assets/home/cat_caps.jpg.asset.json";
import sneakers from "@/assets/home/cat_sneakers.jpg.asset.json";
import clothing from "@/assets/home/cat_clothing.jpg.asset.json";
import bags from "@/assets/home/cat_backpack.jpg.asset.json";
import ceramics from "@/assets/home/ceramics_factory.jpg.asset.json";
import silicone from "@/assets/home/cat_silicone.jpg.asset.json";
import wood from "@/assets/home/wood_chair.jpg.asset.json";
import pack from "@/assets/home/packaging_dieline.jpg.asset.json";
import tea from "@/assets/home/tea_factory.jpg.asset.json";

const core = [
  { t: "Hats & caps", d: "Baseball caps, bucket hats, sun hats, custom embroidery and labels.", img: caps.url },
  { t: "Shoes & sneakers", d: "Sneakers, casual and sport shoes, from first sample to full production run.", img: sneakers.url },
  { t: "Clothing & uniforms", d: "Sportswear, workwear and uniforms, scarves and cut-and-sew basics.", img: clothing.url },
  { t: "Bags & handicraft", d: "Handbags, totes, bamboo and woven goods made by Vietnamese craft workshops.", img: bags.url },
];
const also: { t: string; d: string; img: string; contain?: boolean }[] = [
  { t: "Ceramics & homeware", d: "Cups, vases, tableware", img: ceramics.url },
  { t: "Packaging", d: "Boxes, mailers, bags, labels", img: pack.url, contain: true },
  { t: "Plastic & silicone", d: "Moulded parts, household goods", img: silicone.url },
  { t: "Wood furniture", d: "Indoor, outdoor, home décor", img: wood.url },
  { t: "Agricultural products", d: "Coffee, spices, dried goods", img: tea.url },
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
                className={`h-full w-full transition duration-500 group-hover:scale-105 object-cover`} />
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
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {also.map((a) => (
          <div key={a.t} className="group overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[4/3] overflow-hidden bg-card">
              <img src={a.img} alt={a.t} loading="lazy" className={`h-full w-full transition duration-500 group-hover:scale-105 ${a.contain ? "object-contain p-2" : "object-cover"}`} />
            </div>
            <div className="p-4">
              <p className="font-display text-lg font-bold text-foreground">{a.t}</p>
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
