import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoMain from "@/assets/logo_main.png";

const navLinks = [
  { href: "/product-sourcing", label: "Product Sourcing" },
  { href: "/talent-sourcing", label: "Talent Sourcing" },
  { href: "/digital-systems", label: "Digital & Systems" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/how-we-help", label: "How We Help" },
  { href: "/our-people", label: "Our people and stories" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-navy/5 transition-all duration-300 ${
      isHome ? 'bg-cream/80 backdrop-blur-md' : 'bg-cream/95 backdrop-blur-sm'
    }`}>
      <div className="container-editorial">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img 
              src={logoMain} 
              alt="Sourcing.vn" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium tracking-wide text-navy/80 transition-colors duration-200 editorial-link hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/start-project"
              className="ml-4 bg-sunshine text-navy px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide hover:bg-sunshine-muted transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 p-2 text-navy"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 right-0 top-full z-40 h-[calc(100vh-5rem)] overflow-y-auto lg:hidden ${isHome ? "bg-navy-deep" : "border-b border-border bg-cream shadow-lg"}`}
          >
            <div className="container-editorial py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-display font-medium tracking-tight hover:text-sunshine transition-colors ${isHome ? "text-cream" : "text-navy"}`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    to="/start-project"
                    onClick={() => setIsOpen(false)}
                    className="inline-block bg-sunshine text-navy px-8 py-3 rounded-lg text-lg font-semibold tracking-wide"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
