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
  /** tailwind classes for the accent of this tab */
  active: string;
  soft: string;
  text: string;
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
    active: "bg-teal text-white border-teal",
    soft: "bg-teal/10 border-teal/25",
    text: "text-teal",
    visual: <WebsiteDemo />,
  },
  {
    id: "portal",
    label: "Customer Portal",
    icon: Users,
    title: "Your customers stop emailing for updates.",
    copy: "Customers log in, track orders, see invoices and talk to your team in one place.",
    points: ["Live order tracking", "Invoices and payments", "Messages with context"],
    active: "bg-primary text-primary-foreground border-primary",
    soft: "bg-primary/10 border-primary/25",
    text: "text-primary",
    visual: <PortalDemo />,
  },
  {
    id: "lms",
    label: "Learning Platform",
    icon: GraduationCap,
    title: "One home for every lesson.",
    copy: "Courses, live classes, recordings, assignments and student support, with the trainer system behind it.",
    points: ["Student progress tracking", "Live class + recordings", "Trainer admin view"],
    active: "bg-coral text-white border-coral",
    soft: "bg-coral/10 border-coral/25",
    text: "text-coral",
    visual: <LmsStudentView />,
  },
  {
    id: "dashboard",
    label: "Business Dashboard",
    icon: LayoutDashboard,
    title: "One screen for what matters.",
    copy: "Revenue, active projects, tasks and alerts pulled together from the tools you already use.",
    points: ["Updated automatically", "Alerts before problems grow", "Built around your numbers"],
    active: "bg-gold text-navy-deep border-gold",
    soft: "bg-gold/15 border-gold/30",
    text: "text-gold",
    visual: <DashboardPreview compact />,
  },
  {
    id: "ai",
    label: "AI Assistant",
    icon: Bot,
    title: "Not every question needs a human.",
    copy: "An assistant trained on your business answers repeat questions and hands real leads to your team.",
    points: ["Answers 24/7", "Qualifies the lead", "Hands over with context"],
    active: "bg-navy-deep text-cream border-navy-deep",
    soft: "bg-navy-deep/10 border-navy-deep/25",
    text: "text-navy-deep",
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
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">Examples</p>
          <h2 className="headline-lg text-foreground">What can a digital system actually do?</h2>
          <p className="body-md text-muted-foreground mt-3">
            Websites, landing pages, portals, learning platforms, dashboards and AI assistants. Click
            through the live examples.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              style={{ animationDelay: `${i * 60}ms` }}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 animate-fade-in hover:-translate-y-0.5 ${
                active === tab.id
                  ? `${tab.active} shadow-md scale-105`
                  : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div
          key={current.id}
          className={`grid lg:grid-cols-[0.85fr_1.4fr] gap-8 items-center rounded-2xl border p-6 lg:p-8 animate-fade-in ${current.soft}`}
        >
          <div>
            <span
              className={`inline-flex w-10 h-10 items-center justify-center rounded-xl bg-card shadow-sm mb-4 ${current.text}`}
            >
              <current.icon className="w-5 h-5" />
            </span>
            <h3 className="text-2xl font-display font-semibold text-foreground mb-3">{current.title}</h3>
            <p className="body-md text-muted-foreground mb-5">{current.copy}</p>
            <ul className="space-y-2.5">
              {current.points.map((point, i) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm text-foreground animate-fade-in"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 ${current.text}`} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-scale-in">{current.visual}</div>
        </div>
      </div>
    </section>
  );
};
