import { CalendarClock, FileText, LifeBuoy, PlayCircle, Users } from "lucide-react";

export const LmsStudentView = () => (
  <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
    <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/50">
      <div>
        <p className="text-sm font-medium text-foreground">Hi, Ngoc Anh</p>
        <p className="text-[11px] text-muted-foreground">Virtual Assistant Pro</p>
      </div>
      <span className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground">Student</span>
    </div>

    <div className="p-5 space-y-5">
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-foreground">Course progress</p>
          <p className="text-sm font-semibold text-foreground">68%</p>
        </div>
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <div className="h-full rounded-full bg-primary" style={{ width: "68%" }} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-lg border border-border p-4">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Current module</p>
          <p className="text-sm font-medium text-foreground">Client Communication</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">Upcoming</p>
          <p className="text-sm font-medium text-foreground">Live Class · Tuesday, 7:30 PM</p>
        </div>
      </div>

      <ul className="space-y-2">
        {[
          { icon: PlayCircle, label: "Recorded lessons", meta: "12 available" },
          { icon: FileText, label: "Assignments", meta: "2 due this week" },
          { icon: LifeBuoy, label: "Support tickets", meta: "1 open" },
        ].map((row) => (
          <li key={row.label} className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
            <row.icon className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground flex-1">{row.label}</span>
            <span className="text-xs text-muted-foreground">{row.meta}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3">
        <span className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Continue Learning
        </span>
        <span className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground">
          View Schedule
        </span>
      </div>
    </div>
  </div>
);

export const LmsTrainerView = () => (
  <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
    <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/50">
      <p className="text-sm font-medium text-foreground">Trainer Dashboard</p>
      <span className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground">Admin</span>
    </div>
    <div className="p-5 grid grid-cols-2 gap-3">
      {[
        { icon: Users, value: "7", label: "Students needing support" },
        { icon: FileText, value: "18", label: "New submissions" },
        { icon: CalendarClock, value: "3", label: "Upcoming classes" },
        { icon: LifeBuoy, value: "2", label: "Urgent tickets", accent: true },
      ].map((tile) => (
        <div
          key={tile.label}
          className={`rounded-lg border p-4 ${
            tile.accent ? "border-primary/25 bg-primary/5" : "border-border"
          }`}
        >
          <tile.icon className={`w-4 h-4 mb-2 ${tile.accent ? "text-primary" : "text-muted-foreground"}`} />
          <p className="text-xl font-display font-semibold text-foreground">{tile.value}</p>
          <p className="text-xs text-muted-foreground">{tile.label}</p>
        </div>
      ))}
    </div>
  </div>
);
