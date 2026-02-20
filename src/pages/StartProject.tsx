import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Package, Users, Cpu, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const serviceOptions = [
  { id: "product", label: "Product Sourcing", icon: Package },
  { id: "talent", label: "Talent Sourcing", icon: Users },
  { id: "digital", label: "Digital & Systems", icon: Cpu },
];

const StartProject = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id)
        ? prev.filter((s) => s !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          services: selectedServices,
        },
      });
      if (error) throw error;
      toast.success("Thanks! We'll be in touch within 24 hours.");
      setFormData({ name: "", email: "", company: "", message: "" });
      setSelectedServices([]);
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-navy-deep">
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
            <h1 className="headline-xl text-cream mb-6">
              Let's talk.
            </h1>
            <p className="body-lg text-cream/70">
              Tell us what you're looking for. We'll get back to you 
              within 24 hours — usually much faster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-navy mb-4">
                  What are you looking for? (Select all that apply)
                </label>
                <div className="grid sm:grid-cols-3 gap-4">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`p-4 border text-left transition-all duration-200 ${
                        selectedServices.includes(service.id)
                          ? "border-gold bg-gold/10"
                          : "border-navy/10 hover:border-navy/30"
                      }`}
                    >
                      <service.icon 
                        className={`w-6 h-6 mb-3 ${
                          selectedServices.includes(service.id)
                            ? "text-gold"
                            : "text-navy/40"
                        }`}
                        strokeWidth={1.5}
                      />
                      <span className={`block text-sm font-medium ${
                        selectedServices.includes(service.id)
                          ? "text-navy"
                          : "text-navy/70"
                      }`}>
                        {service.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 rounded-none border-navy/20 focus:border-gold focus:ring-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-none border-navy/20 focus:border-gold focus:ring-gold"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                  Company (optional)
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 rounded-none border-navy/20 focus:border-gold focus:ring-gold"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Tell us about your project *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What are you trying to accomplish? What's your timeline? Any specific requirements?"
                  className="rounded-none border-navy/20 focus:border-gold focus:ring-gold resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-12 border-t border-navy/10"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Prefer email? Reach us directly at:
              </p>
              <a 
                href="mailto:hello@sourcing.vn"
                className="text-lg font-display font-semibold text-gold hover:text-gold-muted transition-colors"
              >
                hello@sourcing.vn
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartProject;
