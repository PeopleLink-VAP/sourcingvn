import { Link } from "react-router-dom";
import logoMain from "@/assets/logo_main.png";

export const Footer = () => {
  return (
    <footer className="bg-navy-deep text-cream/80">
      <div className="container-editorial section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={logoMain} 
              alt="Sourcing.vn" 
              className="h-8 w-auto brightness-0 invert mb-6"
            />
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Your on-the-ground partner for sourcing products, talent, and systems in Vietnam.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream font-display font-semibold text-sm uppercase tracking-wider mb-6">
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
            <h4 className="text-cream font-display font-semibold text-sm uppercase tracking-wider mb-6">
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
                  Our People
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
            <h4 className="text-cream font-display font-semibold text-sm uppercase tracking-wider mb-6">
              Get in Touch
            </h4>
            <p className="text-sm text-cream/60 mb-4">
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
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Sourcing.vn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
