import { useState } from "react";
import {
  Bot,
  Check,
  FileText,
  Globe,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Receipt,
  Users,
} from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";
import { ChatDemo } from "./ChatDemo";
import { LmsStudentView } from "./LmsDemo";
import { WebsiteDemo } from "./WebsiteDemo";

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
      ].map((row, i) => (
        <div
          key={row.label}
          className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 animate-fade-in"
          style={{ animationDelay: `${i * 80}ms` }}
        >
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

type Tab = {
  id: string;
  label: string;
  icon: typeof Users;
  title: string;
  copy: string;
  points: string[];
  visual: JSX.Element;
};

const tabs: Tab[] = [
  {
    id: "website",
    label: "Website & Landing Page",
    icon: Globe,
    title: "A site that sells while you sleep.",
    copy: "A fast, mobile-first website or a single focused landing page built around one action.",
    points: ["Loads in under a second", "Built for enquiries, not decoration", "Editable by your team"],
    visual: <WebsiteDemo />,
  },
  {
    id: "portal",
    label: "Customer Portal",
    icon: Users,
    title: "Your customers stop emailing for updates.",
    copy: "Customers log in, track orders, see invoices and talk to your team in one place.",
    points: ["Live order tracking", "Invoices and payments", "Messages with context"],
    visual: <PortalDemo />,
  },
  {
    id: "lms",
    label: "Learning Platform",
    icon: GraduationCap,
    title: "One home for every lesson.",
    copy: "Courses, live classes, recordings, assignments and student support, with the trainer system behind it.",
    points: ["Student progress tracking", "Live class + recordings", "Trainer admin view"],
    visual: <LmsStudentView />,
  },
  {
    id: "dashboard",
    label: "Business Dashboard",
    icon: LayoutDashboard,
    title: "One screen for what matters.",
    copy: "Revenue, active projects, tasks and alerts pulled together from the tools you already use.",
    points: ["Updated automatically", "Alerts before problems grow", "Built around your numbers"],
    visual: <DashboardPreview compact />,
  },
  {
    id: "ai",
    label: "AI Assistant",
    icon: Bot,
    title: "Not every question needs a human.",
    copy: "An assistant trained on your business answers repeat questions and hands real leads to your team.",
    points: ["Answers 24/7", "Qualifies the lead", "Hands over with context"],
    visual: <ChatDemo />,
  },
];

export const SystemExamples = () => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="max-w-2xl mb-8 animate-fade-in">
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-3">Interactive Examples</p>
          <h2 className="headline-lg text-foreground">What can a digital system actually do?</h2>
          <p className="body-md text-muted-foreground mt-3">
            Websites, landing pages, portals, learning platforms, dashboards and AI assistants. Click
            through the live examples.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-[270px_minmax(0,1fr)]">
            <div className="flex overflow-x-auto border-b border-border bg-secondary/40 p-2 lg:flex-col lg:border-b-0 lg:border-r lg:p-3" role="tablist" aria-label="Digital system examples">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active === tab.id}
                  onClick={() => setActive(tab.id)}
                  style={{ animationDelay: `${i * 60}ms` }}
                  className={`flex min-w-[215px] items-center gap-3 rounded-xl px-4 py-4 text-left text-sm font-medium transition-colors lg:min-w-0 ${
                    active === tab.id
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:bg-card hover:text-foreground"
                  }`}
                >
                  <tab.icon className={`h-4 w-4 shrink-0 ${active === tab.id ? "text-gold" : "text-teal"}`} />
                  <span className="flex-1">{tab.label}</span>
                  <span className="font-display text-[10px] opacity-50">0{i + 1}</span>
                </button>
              ))}
            </div>

            <div key={current.id} className="grid gap-8 p-6 animate-fade-in lg:p-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-center">
              <div>
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <current.icon className="h-5 w-5" />
                </span>
                <h3 className="mb-3 font-display text-2xl font-semibold text-foreground">{current.title}</h3>
                <p className="body-md mb-5 text-muted-foreground">{current.copy}</p>
                <ul className="space-y-2.5">
                  {current.points.map((point, i) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-foreground animate-fade-in"
                      style={{ animationDelay: `${i * 90}ms` }}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0 animate-scale-in">{current.visual}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
