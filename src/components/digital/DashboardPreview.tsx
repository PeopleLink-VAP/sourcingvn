import { AlertTriangle, ArrowUpRight, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Revenue this month", value: "$48,200", delta: "+12%" },
  { label: "Active projects", value: "24", delta: "+3" },
  { label: "Open tasks", value: "37", delta: "-8" },
  { label: "Customers", value: "612", delta: "+19" },
];

const activity = [
  { who: "Linh", what: "closed the Edgepoint retainer", when: "2m ago" },
  { who: "Minh", what: "submitted 3 supplier quotes", when: "26m ago" },
  { who: "Automation", what: "synced 148 CRM records", when: "1h ago" },
];

export const DashboardPreview = ({ compact = false }: { compact?: boolean }) => {
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">dashboard.yourcompany.com</span>
      </div>

      <div className="p-5 lg:p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border p-3">
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-xl font-display font-semibold text-foreground">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground mt-1">{stat.delta} vs last month</p>
            </div>
          ))}
        </div>

        <div className={`grid gap-4 ${compact ? "" : "lg:grid-cols-[1.4fr_1fr]"}`}>
          <div className="rounded-lg border border-border p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-foreground">Sales over time</p>
              <span className="text-xs text-muted-foreground">Last 8 weeks</span>
            </div>
            <div className="flex items-end gap-2 h-24">
              {[38, 52, 44, 61, 57, 72, 66, 84].map((height, i) => (
                <div key={i} className="flex-1 rounded-t bg-primary/15 relative overflow-hidden">
                  <div
                    className="w-full rounded-t bg-primary/70 absolute bottom-0"
                    style={{ height: `${height}%` }}
                  />
                  <div style={{ height: "6rem" }} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border border-border p-4">
              <p className="text-sm font-medium text-foreground mb-3">Team activity</p>
              <ul className="space-y-2">
                {activity.map((item) => (
                  <li key={item.who + item.when} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-muted-foreground/60" />
                    <span>
                      <span className="text-foreground font-medium">{item.who}</span> {item.what}
                      <span className="block text-[11px] text-muted-foreground/70">{item.when}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-primary/25 bg-primary/5 p-4">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="w-4 h-4 text-primary" />
                <p className="text-sm font-medium text-foreground">2 alerts</p>
              </div>
              <p className="text-xs text-muted-foreground">
                One invoice overdue, one supplier reply pending.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                Review <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
