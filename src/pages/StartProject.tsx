import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const StartProject = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-navy-deep min-h-[70vh] flex items-center">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
              Start a Project
            </p>
            <h1 className="headline-xl text-cream mb-6">Tell us what you need.</h1>
            <p className="body-lg text-cream/70 mb-10">
              Send us a brief note and a real person will reply within 2 business days.
            </p>

            <a
              href="mailto:hello@sourcing.vn"
              className="inline-flex items-center gap-3 text-xl sm:text-2xl font-display font-semibold text-gold hover:text-gold-muted transition-colors border-b border-gold/30 pb-1"
            >
              <Mail className="w-6 h-6" />
              hello@sourcing.vn
            </a>

            <div className="mt-10 flex items-start gap-3 text-cream/60 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Ho Chi Minh City &amp; Da Nang, Vietnam</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartProject;
