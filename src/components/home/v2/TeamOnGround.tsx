import duo from "@/assets/home/rnd_clients.jpg.asset.json";
import team from "@/assets/home/trade_fair_team.jpg.asset.json";
import factory from "@/assets/home/factory_meeting.jpg.asset.json";
import client from "@/assets/home/client_meeting.jpg.asset.json";

const shots = [
  { img: team.url, t: "Trade fairs", d: "Meeting suppliers face to face with our clients", span: "lg:col-span-2" },
  { img: duo.url, t: "With clients", d: "Visiting a product R&D centre together", span: "lg:row-span-2", tall: true },
  { img: factory.url, t: "Factory meetings", d: "Specs, samples and timelines, in person" },
  { img: client.url, t: "Supplier reviews", d: "Briefing clients before they commit" },
];

export const TeamOnGround = () => (
  <section className="bg-background py-20">
    <div className="container-editorial">
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">The team on the ground</h2>
      <p className="mt-2 max-w-xl text-muted-foreground">Real visits, real meetings. This is what working with us looks like.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {shots.map((s) => (
          <figure key={s.t} className={s.span}>
            <img src={s.img} alt={s.t} loading="lazy"
              className={`w-full rounded-3xl object-cover ${s.tall ? "h-72 lg:h-[calc(100%-3.5rem)]" : "h-72"}`} />
            <figcaption className="mt-3 text-sm"><span className="font-semibold text-foreground">{s.t}</span> <span className="text-muted-foreground">· {s.d}</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
