import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks, Check, Globe, GraduationCap, LayoutDashboard, ShoppingBag } from "lucide-react";

const plans = [
  {
    name: "Websites",
    icon: Globe,
    description:
      "Professional websites for businesses that need a strong, modern online presence.",
    features: [
      "Business websites",
      "Landing pages",
      "Company/service websites",
      "Mobile-responsive design",
      "CMS",
      "Contact forms",
      "Basic integrations",
    ],
    bestFor: "Businesses building or refreshing their online presence.",
  },
  {
    name: "E-commerce",
    icon: ShoppingBag,
    description:
      "Online stores designed to help businesses sell products and manage orders.",
    features: [
      "Shopify / WooCommerce",
      "Product catalog",
      "Shopping cart & checkout",
      "Payment integration",
      "Shipping setup",
      "Customer accounts",
      "Basic automation",
    ],
    bestFor: "Businesses ready to sell online.",
  },
  {
    name: "Portals & LMS",
    icon: GraduationCap,
    description:
      "Custom portals for students, customers, members or teams.",
    features: [
      "Login & user accounts",
      "Personal dashboards",
      "Course/content management",
      "Progress tracking",
      "Scheduling",
      "File/document access",
      "Notifications",
      "Support/ticket systems",
    ],
    bestFor: "Training businesses, communities and customer portals.",
  },
  {
    name: "Business Systems",
    icon: LayoutDashboard,
    description:
      "Digital systems that replace scattered spreadsheets, manual processes and disconnected tools.",
    features: [
      "Custom dashboards",
      "Workflow management",
      "Customer/team management",
      "Task tracking",
      "Reports & KPIs",
      "Notifications",
      "Role-based access",
      "Third-party integrations",
    ],
    bestFor: "Businesses ready to make their operations more systematic.",
  },
  {
    name: "Custom Platforms",
    icon: Blocks,
    description: "For larger or more complex digital products.",
    features: [
      "Marketplaces",
      "Supplier platforms",
      "Multi-sided platforms",
      "Booking platforms",
      "Sourcing platforms",
      "AI-powered platforms",
      "Custom SaaS",
      "Complex business ecosystems",
    ],
    bestFor: "Businesses building something unique.",
  },
];

export const Pricing = () => {
  return (
    <section className="section-padding bg-background border-t border-border" id="pricing">
      <div className="container-editorial">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-teal mb-4">
            What We Build
          </p>
          <h2 className="headline-lg text-foreground mb-5">
            No fixed packages. No surprise costs.
          </h2>
          <p className="body-md text-muted-foreground">
            Every project is quoted based on your requirements, scope, and level of customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 mb-10">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal/40 animate-fade-in ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <plan.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <span className="font-display text-xs font-semibold text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {plan.name}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {plan.description}
              </p>

              <div className="mb-5 flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground mb-3">
                  Includes options such as
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground leading-snug flex gap-2"
                    >
                      <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-border mt-auto">
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">Best for:</span>{" "}
                  {plan.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 rounded-2xl border border-teal/20 bg-teal/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Tell us what is slowing your team down. We will recommend only what is useful, then quote the scope clearly before work begins.
          </p>
          <Button asChild size="lg" className="shrink-0">
            <Link to="/start-project">
              Talk to us about your project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
