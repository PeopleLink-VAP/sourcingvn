import { Link, useLocation } from "react-router-dom";
import logoMain from "@/assets/logo_main.png";

export const Footer = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const headingTone = isHome ? "text-cream" : "text-foreground";
  const mutedTone = isHome ? "text-cream/60" : "text-muted-foreground";
  const subtleTone = isHome ? "text-cream/40" : "text-muted-foreground/70";

  return (
    <footer className={isHome ? "bg-navy-deep text-cream/80" : "border-t border-border bg-secondary/40 text-muted-foreground"}>
      <div className="container-editorial section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoMain}
              alt="Sourcing.vn"
              className={`h-8 w-auto mb-6 ${isHome ? "brightness-0 invert" : ""}`}
            />
            <p className={`text-sm leading-relaxed ${mutedTone} max-w-xs`}>
              Your on-the-ground partner for sourcing products, talent, and systems in Vietnam.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className={`${headingTone} font-display font-semibold text-sm uppercase tracking-wider mb-6`}>
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/product-sourcing" className="text-sm hover:text-gold transition-colors">
                  Product Sourcing
                </Link>
              </li>
              <li>
                <Link to="/talent-sourcing" className="text-sm hover:text-gold transition-colors">
                  Talent Sourcing
                </Link>
              </li>
              <li>
                <Link to="/digital-systems" className="text-sm hover:text-gold transition-colors">
                  Digital & Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`${headingTone} font-display font-semibold text-sm uppercase tracking-wider mb-6`}>
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/how-we-help" className="text-sm hover:text-gold transition-colors">
                  How We Help
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-sm hover:text-gold transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/our-people" className="text-sm hover:text-gold transition-colors">
                  Our people and stories
                </Link>
              </li>
              <li>
                <Link to="/start-project" className="text-sm hover:text-gold transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`${headingTone} font-display font-semibold text-sm uppercase tracking-wider mb-6`}>
              Get in Touch
            </h4>
            <p className={`text-sm ${mutedTone} mb-4`}>
              Ho Chi Minh City, Vietnam
            </p>
            <a
              href="mailto:hello@sourcing.vn"
              className="text-gold hover:text-gold-muted transition-colors text-sm font-medium"
            >
              hello@sourcing.vn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${isHome ? "border-cream/10" : "border-border"}`}>
          <p className={`text-xs ${subtleTone}`}>
            © {new Date().getFullYear()} Sourcing.vn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className={`text-xs ${subtleTone} hover:text-gold transition-colors`}>
              Privacy Policy
            </a>
            <a href="#" className={`text-xs ${subtleTone} hover:text-gold transition-colors`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
