import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Users, Cpu, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

import happyTeamImage from "@/assets/images/happy-team.jpg";
import qualityInspectorImage from "@/assets/images/quality-inspector.jpg";
import entrepreneurImage from "@/assets/images/entrepreneur-woman.jpg";
import supportTeamImage from "@/assets/images/support-team.jpg";
import happyClientImage from "@/assets/images/happy-client.jpg";

const useCases = [
  {
    category: "Product Sourcing",
    icon: Package,
    color: "from-teal to-teal-muted",
    cases: [
      {
        title: "Fashion Brand Launch",
        client: "Sarah K., US Entrepreneur",
        challenge: "Needed to source 5,000 units of sustainable bamboo clothing for new eco-fashion line",
        solution: "Found 3 certified factories, negotiated 30% below initial quotes, handled all QC",
        result: "Launched on time with 98% quality pass rate, saved $45,000",
        image: happyClientImage
      },
      {
        title: "Home Goods Expansion",
        client: "Michael T., Australian Retailer",
        challenge: "Existing supplier couldn't scale for holiday demand",
        solution: "Identified backup factories, managed split production, coordinated shipping",
        result: "Fulfilled 200% of previous year's orders, zero stockouts",
        image: qualityInspectorImage
      }
    ]
  },
  {
    category: "Talent Sourcing",
    icon: Users,
    color: "from-coral to-coral-muted",
    cases: [
      {
        title: "Customer Support Team",
        client: "David L., SaaS Founder",
        challenge: "Needed 24/7 customer support without hiring full-time employees",
        solution: "Built a 5-person support team across time zones with custom training",
        result: "Response time dropped from 4 hours to 15 minutes, 4.9★ rating",
        image: supportTeamImage
      },
      {
        title: "Executive Assistant Match",
        client: "Jennifer M., Agency Owner",
        challenge: "Overwhelmed with admin tasks, couldn't find reliable remote help",
        solution: "Matched with experienced VA, trained on specific workflows",
        result: "Saved 20+ hours/week, scaled to 3 VAs within 6 months",
        image: entrepreneurImage
      }
    ]
  },
  {
    category: "Digital & Systems",
    icon: Cpu,
    color: "from-navy to-navy-light",
    cases: [
      {
        title: "E-commerce Automation",
        client: "Robert C., Multi-brand Owner",
        challenge: "Manual order processing causing delays and errors",
        solution: "Built custom automation connecting 4 platforms with real-time sync",
        result: "Processing time reduced by 85%, zero manual errors",
        image: happyTeamImage
      },
      {
        title: "AI Chatbot Implementation",
        client: "Lisa H., Hotel Chain Manager",
        challenge: "High volume of repetitive guest inquiries overwhelming staff",
        solution: "Implemented AI chatbot with multilingual support and booking integration",
        result: "Handled 70% of inquiries automatically, staff freed for VIP guests",
        image: supportTeamImage
      }
    ]
  }
];

const testimonials = [
  {
    quote: "Working with Sourcing.vn felt like having an insider on the ground. They didn't just find suppliers — they understood our brand and protected our margins.",
    author: "Amanda Chen",
    role: "Founder, Bloom Naturals",
    rating: 5,
    image: entrepreneurImage
  },
  {
    quote: "Our VA has become indispensable. What started as inbox management evolved into full operations support. Sourcing.vn made the transition seamless.",
    author: "Marcus Johnson",
    role: "CEO, Digital First Agency",
    rating: 5,
    image: qualityInspectorImage
  },
  {
    quote: "The automation they built paid for itself in 3 weeks. We went from drowning in spreadsheets to having real-time visibility across all operations.",
    author: "Sophie Williams",
    role: "Operations Director, TrendCo",
    rating: 5,
    image: happyClientImage
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-sunshine/20 via-cream to-teal/10 overflow-hidden">
        <div className="absolute inset-0 pattern-waves opacity-40" />
        
        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-4">
              Real Results
            </p>
            <h1 className="headline-xl text-navy mb-6">
              Stories of 
              <span className="text-sunshine"> success</span> from 
              our clients
            </h1>
            <p className="body-lg text-cool-gray max-w-2xl">
              See how businesses like yours have transformed their sourcing, 
              scaled their teams, and streamlined their operations with our help.
            </p>
          </motion.div>
        </div>
        
        {/* Floating images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <img 
              src={happyTeamImage} 
              alt="Happy team" 
              className="w-80 h-48 object-cover rounded-2xl shadow-xl"
            />
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              src={happyClientImage} 
              alt="Happy client" 
              className="absolute -bottom-16 -left-20 w-48 h-36 object-cover rounded-xl shadow-lg border-4 border-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Use Cases by Category */}
      {useCases.map((category, catIndex) => (
        <section 
          key={category.category}
          className={`section-padding ${catIndex % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="headline-md text-navy">{category.category}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.cases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-display font-semibold text-lg">{useCase.title}</h3>
                      <p className="text-white/80 text-sm">{useCase.client}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-coral mb-1">Challenge</p>
                      <p className="text-sm text-cool-gray">{useCase.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-1">Solution</p>
                      <p className="text-sm text-cool-gray">{useCase.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs font-semibold uppercase tracking-wider text-sunshine mb-1">Result</p>
                      <p className="text-sm font-medium text-navy">{useCase.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-br from-navy to-navy-deep relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        
        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-sunshine mb-4">
              Testimonials
            </p>
            <h2 className="headline-lg text-cream max-w-2xl mx-auto">
              What our clients say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-light/30 backdrop-blur-sm rounded-2xl p-8 border border-cream/10"
              >
                <Quote className="w-10 h-10 text-sunshine/30 mb-4" />
                
                <p className="text-cream/90 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-cream font-medium">{testimonial.author}</p>
                    <p className="text-cream/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-sunshine text-sunshine" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-sunshine/20 via-cream to-teal/20">
        <div className="container-editorial text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline-lg text-navy mb-6">
              Ready to write your success story?
            </h2>
            <p className="body-lg text-cool-gray max-w-xl mx-auto mb-8">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Button asChild size="xl" className="bg-navy hover:bg-navy-light text-cream">
              <Link to="/start-project" className="inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;
