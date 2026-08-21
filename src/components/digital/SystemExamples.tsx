import { useState } from "react";
import { Bot, FileText, GraduationCap, LayoutDashboard, MessageSquare, Receipt, Users } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";
import { ChatDemo } from "./ChatDemo";
import { LmsStudentView } from "./LmsDemo";

const PortalDemo = () => (
  <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
    <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/50">
      <div>
        <p className="text-sm font-medium text-foreground">Client Portal</p>
        <p className="text-[11px] text-muted-foreground">Nam Phat Trading · Account #1042</p>
      </div>
      <span className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground">Customer</span>
    </div>
    <div className="p-5 space-y-3">
      {[
        { icon: FileText, label: "Order #SV-2291", meta: "In production · 60%" },
        { icon: Receipt, label: "Invoices", meta: "1 unpaid · $2,480" },
        { icon: MessageSquare, label: "Messages with your team", meta: "2 new" },
        { icon: Users, label: "Team access", meta: "3 users" },
      ].map((row) => (
        <div key={row.label} className="flex items-center gap-3 rounded-lg border border-border px-4 py-3">
          <row.icon className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground flex-1">{row.label}</span>
          <span className="text-xs text-muted-foreground">{row.meta}</span>
        </div>
      ))}
      <div className="rounded-lg border border-border p-4">
        <p className="text-xs text-muted-foreground mb-2">Order progress</p>
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <div className="h-full rounded-full bg-primary" style={{ width: "60%" }} />
        </div>
      </div>
    </div>
  </div>
);

const tabs = [
  {
    id: "portal",
    label: "Customer Portal",
    icon: Users,
    copy: "Customers log in, track orders, see invoices and talk to your team without email chaos.",
    visual: <PortalDemo />,
  },
  {
    id: "lms",
    label: "Learning Platform",
    icon: GraduationCap,
    copy: "Courses, live classes, recordings, assignments and student support in one place.",
    visual: <LmsStudentView />,
  },
  {
    id: "dashboard",
    label: "Business Dashboard",
    icon: LayoutDashboard,
    copy: "Revenue, projects, tasks and alerts on one screen, updated automatically.",
    visual: <DashboardPreview compact />,
  },
  {
    id: "ai",
    label: "AI / Chatbot",
    icon: Bot,
    copy: "An assistant that answers the repetitive questions and hands over when it matters.",
    visual: <ChatDemo />,
  },
];

export const SystemExamples = () => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">Examples</p>
          <h2 className="headline-lg text-foreground">What can a digital system actually do?</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === tab.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          <p className="body-lg text-muted-foreground max-w-md">{current.copy}</p>
          <div key={current.id}>{current.visual}</div>
        </div>
      </div>
    </section>
  );
};
