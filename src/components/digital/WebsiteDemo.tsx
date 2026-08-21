import { Globe, MousePointerClick, Smartphone, Star } from "lucide-react";

export const WebsiteDemo = () => (
  <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden animate-scale-in">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
      <span className="flex gap-1.5">
        {["bg-destructive/40", "bg-primary/30", "bg-muted-foreground/30"].map((c) => (
          <span key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
        ))}
      </span>
      <span className="ml-2 flex-1 truncate rounded-md bg-background px-3 py-1 text-[11px] text-muted-foreground">
        yourbusiness.com
      </span>
      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
    </div>

    <div className="p-5 lg:p-6 space-y-5">
      <div className="space-y-3">
        <div className="h-2.5 w-24 rounded-full bg-primary/30 animate-fade-in" style={{ animationDelay: "0ms" }} />
        <div className="h-5 w-3/4 rounded bg-foreground/80 animate-fade-in" style={{ animationDelay: "120ms" }} />
        <div className="h-5 w-1/2 rounded bg-foreground/40 animate-fade-in" style={{ animationDelay: "220ms" }} />
        <div className="flex gap-3 pt-1 animate-fade-in" style={{ animationDelay: "320ms" }}>
          <span className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground hover-scale">
            Get a quote
            <MousePointerClick className="w-3.5 h-3.5" />
          </span>
          <span className="rounded-md border border-border px-3.5 py-2 text-xs text-muted-foreground">
            See our work
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Load time", value: "0.9s" },
          { label: "Mobile ready", value: "100%" },
          { label: "Enquiries", value: "+38%" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border p-3 animate-fade-in hover-scale"
            style={{ animationDelay: `${420 + i * 100}ms` }}
          >
            <p className="text-sm font-display font-semibold text-foreground">{stat.value}</p>
            <p className="text-[11px] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-lg bg-secondary/60 px-4 py-3 animate-fade-in" style={{ animationDelay: "740ms" }}>
        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Smartphone className="w-3.5 h-3.5" />
          Landing pages built for one action
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-primary">
          <Star className="w-3.5 h-3.5 fill-current" />
          Converts
        </span>
      </div>
    </div>
  </div>
);
