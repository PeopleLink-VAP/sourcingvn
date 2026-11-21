import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const StartProject = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="min-h-[70vh] border-b border-border bg-secondary/40 pt-32 pb-20 flex items-center">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold mb-4">
              Start a Project
            </p>
            <h1 className="headline-xl text-foreground mb-6">Tell us what you need.</h1>
            <p className="body-lg text-muted-foreground mb-10">
              Send us a brief note and a real person will reply within 2 business days.
            </p>

            <a
              href="mailto:hello@sourcing.vn"
              className="inline-flex items-center gap-3 text-xl sm:text-2xl font-display font-semibold text-primary hover:text-primary/80 transition-colors border-b border-primary/30 pb-1"
            >
              <Mail className="w-6 h-6" />
              hello@sourcing.vn
            </a>

            <div className="mt-10 flex items-start gap-3 text-muted-foreground text-sm">
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
