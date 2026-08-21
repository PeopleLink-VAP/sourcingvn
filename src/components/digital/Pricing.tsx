import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Websites",
    price: "$400",
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
    price: "$959",
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
    price: "$1,250",
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
    price: "$1,800",
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
    price: "Custom",
    priceLabel: "Price depends on your needs",
    description:
      "For larger or more complex digital products.",
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
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Pricing
          </p>
          <h2 className="headline-lg text-foreground mb-5">
            Digital Solutions — Starting From
          </h2>
          <p className="body-md text-muted-foreground">
            Choose the type of solution you need. Final pricing depends on scope,
            functionality and complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-5">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  {plan.name !== "Custom Platforms" && (
                    <span className="text-sm text-muted-foreground">From</span>
                  )}
                  <span className="text-3xl font-bold text-primary tracking-tight">
                    {plan.price}
                  </span>
                </div>
                {plan.priceLabel && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.priceLabel}
                  </p>
                )}
              </div>

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
                      className="text-sm text-muted-foreground leading-snug pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[0.4rem] before:w-1 before:h-1 before:rounded-full before:bg-primary/60"
                    >
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

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <p className="text-sm text-foreground font-medium max-w-2xl">
            Starting prices are estimates. Final pricing depends on scope, features,
            integrations and technical complexity.
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
