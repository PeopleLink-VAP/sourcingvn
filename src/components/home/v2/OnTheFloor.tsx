import line from "@/assets/home/tea_processing_line.mp4.asset.json";
import samples from "@/assets/home/tea_samples.mp4.asset.json";
import tasting from "@/assets/home/tea_tasting.jpg.asset.json";
import carpenter from "@/assets/home/factory_floor.jpg.asset.json";

export const OnTheFloor = () => (
  <section className="surface-dark py-20">
    <div className="container-editorial">
      <div className="grid items-end gap-6 md:grid-cols-[3fr_2fr]">
        <h2 className="font-display text-4xl font-bold leading-[0.95] tracking-tight md:text-6xl">
          On the factory floor<span className="text-gold">,</span><br />not behind a screen<span className="text-gold">.</span>
        </h2>
        <p className="text-lg opacity-80">We taste the samples, walk the production line and talk to the workshop before you spend a dollar.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <div className="relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2">
          <video src={line.url} autoPlay muted loop playsInline className="h-80 w-full object-cover md:h-full" />
          <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">Live: tea processing line</span>
        </div>
        <img src={tasting.url} alt="Duyen checking tea samples with a supplier" loading="lazy" className="h-64 w-full rounded-3xl object-cover md:col-span-2 md:h-full" />
        <video src={samples.url} autoPlay muted loop playsInline className="h-64 w-full rounded-3xl object-cover md:h-full" />
        <img src={carpenter.url} alt="Garment factory floor in Vietnam" loading="lazy" className="h-64 w-full rounded-3xl object-cover md:h-full" />
      </div>
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm opacity-80">
        <span>Sample tasting & checks</span><span>Production line visits</span><span>Factory floor checks</span>
      </div>
    </div>
  </section>
);
