import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import vietnamTeamImage from "@/assets/images/vietnam-team.jpg";
import asianMeetingImage from "@/assets/images/asian-meeting.jpg";
import vietnamFactoryImage from "@/assets/images/vietnam-factory.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-sunshine/10 to-teal/10 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 pattern-confetti" />
      <div className="absolute inset-0 pattern-waves opacity-60" />
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-32 right-20 w-20 h-20 bg-sunshine/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-20 w-32 h-32 bg-teal/15 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-coral/20 rounded-full blur-xl"
      />

      {/* Content */}
      <div className="relative z-10 container-editorial min-h-screen flex items-center pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left content */}
          <div className="py-8 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block px-4 py-2 bg-sunshine/20 text-navy rounded-full text-sm font-medium mb-6"
              >
                👋 Your Vietnam Partner
              </motion.span>
              
              <h1 className="headline-xl text-navy mb-6">
                Source smarter in Vietnam.
                <br />
                <span className="gradient-text">Without middlemen.</span>
                <br />
                Without guesswork.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="body-lg text-cool-gray max-w-xl mb-10"
            >
              Your on-the-ground partner for sourcing products, talent, and systems in Vietnam. 
              Real people, real results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="xl" className="bg-navy hover:bg-navy-light text-cream shadow-lg hover:shadow-xl transition-all">
                <Link to="/start-project">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-navy text-navy hover:bg-navy hover:text-cream">
                <Link to="/how-we-help">How We Help</Link>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-navy/10"
            >
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-navy">10+</p>
                <p className="text-sm text-cool-gray">Years in Vietnam</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-navy">200+</p>
                <p className="text-sm text-cool-gray">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-teal">Zero</p>
                <p className="text-sm text-cool-gray">Commission Fees</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Photo collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src={vietnamTeamImage} 
                  alt="Our team in Vietnam" 
                  className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-sunshine/30 rounded-3xl -z-10" />
              </motion.div>

              {/* Floating secondary images */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -left-12 top-20 z-20"
              >
                <motion.img 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  src={asianMeetingImage}
                  alt="Business meeting in Vietnam"
                  className="w-32 h-40 object-cover rounded-2xl shadow-xl border-4 border-white"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-8 -bottom-16 z-20"
              >
                <motion.img 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                  src={vietnamFactoryImage}
                  alt="Vietnam factory"
                  className="w-36 h-44 object-cover rounded-2xl shadow-xl border-4 border-white"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-8 -right-8 w-24 h-24 border-4 border-dashed border-teal/30 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute bottom-1/3 -left-6 w-12 h-12 bg-coral/40 rounded-full"
              />
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
          className="w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-sunshine rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
