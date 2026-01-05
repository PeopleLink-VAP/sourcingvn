import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoSquare from "@/assets/logo_square.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-navy-deep overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Animated background element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4"
      >
        <img 
          src={logoSquare} 
          alt="" 
          className="w-[500px] md:w-[700px] lg:w-[900px] h-auto opacity-50"
          aria-hidden="true"
        />
      </motion.div>

      {/* Floating lines decoration */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <motion.line
          x1="10%"
          y1="20%"
          x2="10%"
          y2="80%"
          stroke="hsl(48, 92%, 52%)"
          strokeWidth="1"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="90%"
          y1="30%"
          x2="90%"
          y2="70%"
          stroke="hsl(48, 92%, 52%)"
          strokeWidth="1"
          strokeOpacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 container-editorial min-h-screen flex items-center pt-24">
        <div className="grid-asymmetric w-full items-center">
          {/* Left content */}
          <div className="py-12 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="headline-xl text-cream mb-6">
                Source smarter in Vietnam.
                <br />
                <span className="text-gold">Without middlemen.</span>
                <br />
                Without guesswork.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="body-lg text-cream/70 max-w-xl mb-10"
            >
              Your on-the-ground partner for sourcing products, talent, and systems in Vietnam.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/start-project">Start a Project</Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/how-we-help">How We Help</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right stats/trust indicators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden md:block"
          >
            <div className="space-y-8">
              <div className="border-l-2 border-gold/30 pl-6">
                <p className="text-5xl font-display font-bold text-cream mb-2">10+</p>
                <p className="text-cream/60 text-sm uppercase tracking-wider">Years in Vietnam</p>
              </div>
              <div className="border-l-2 border-gold/30 pl-6">
                <p className="text-5xl font-display font-bold text-cream mb-2">200+</p>
                <p className="text-cream/60 text-sm uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div className="border-l-2 border-gold/30 pl-6">
                <p className="text-5xl font-display font-bold text-cream mb-2">Zero</p>
                <p className="text-cream/60 text-sm uppercase tracking-wider">Commission Fees</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
