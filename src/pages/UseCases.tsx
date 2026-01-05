import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Users, Cpu, Star, Quote, ChevronRight, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import happyTeamImage from "@/assets/images/happy-team.jpg";
import qualityInspectorImage from "@/assets/images/quality-inspector.jpg";
import entrepreneurImage from "@/assets/images/entrepreneur-woman.jpg";
import supportTeamImage from "@/assets/images/support-team.jpg";
import happyClientImage from "@/assets/images/happy-client.jpg";
import factoryImage from "@/assets/images/factory-workers.jpg";
import talentImage from "@/assets/images/talent-working.jpg";
import developerImage from "@/assets/images/developer-working.jpg";
import warehouseImage from "@/assets/images/warehouse.jpg";
import teamMeetingImage from "@/assets/images/team-meeting.jpg";
import qualityCheckImage from "@/assets/images/quality-check.jpg";

interface UseCase {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  gallery: string[];
  testimonial: string;
}

const useCases = [
  {
    category: "Product Sourcing",
    icon: Package,
    color: "from-teal to-teal-muted",
    link: "/product-sourcing",
    description: "Find reliable factories, negotiate better deals, and manage production from Vietnam.",
    cases: [
      {
        id: "fashion-launch",
        title: "Fashion Brand Launch",
        client: "Sarah K., US Entrepreneur",
        industry: "Apparel & Fashion",
        challenge: "Needed to source 5,000 units of sustainable bamboo clothing for new eco-fashion line. Previous suppliers had quality issues and high MOQs.",
        solution: "We visited 12 factories in Ho Chi Minh City and Binh Duong, found 3 certified sustainable factories, negotiated 30% below initial quotes, and established a rigorous QC process with photo documentation at each production stage.",
        result: "Launched on time with 98% quality pass rate, saved $45,000 on first order. Now scaling to 20,000 units/quarter.",
        metrics: [
          { label: "Units Delivered", value: "5,000" },
          { label: "Cost Savings", value: "$45K" },
          { label: "Quality Pass Rate", value: "98%" },
          { label: "Time to Market", value: "12 weeks" }
        ],
        gallery: [factoryImage, qualityCheckImage, warehouseImage, happyClientImage],
        testimonial: "Sourcing.vn didn't just find us a factory — they found us a partner. The quality exceeded our expectations."
      },
      {
        id: "home-goods",
        title: "Home Goods Expansion",
        client: "Michael T., Australian Retailer",
        industry: "Furniture & Home",
        challenge: "Existing supplier couldn't scale for holiday demand. Needed backup production without sacrificing quality.",
        solution: "Identified and vetted 5 backup factories specializing in rattan and wooden furniture. Managed split production across 3 facilities, coordinated shipping consolidation.",
        result: "Fulfilled 200% of previous year's orders, zero stockouts during peak season. Ongoing relationship with 2 new suppliers.",
        metrics: [
          { label: "Order Increase", value: "200%" },
          { label: "Stockouts", value: "Zero" },
          { label: "New Suppliers", value: "2" },
          { label: "Shipping Savings", value: "18%" }
        ],
        gallery: [warehouseImage, factoryImage, happyTeamImage, qualityInspectorImage],
        testimonial: "They saved our holiday season. Now we have supply chain redundancy we never had before."
      },
      {
        id: "electronics-pcb",
        title: "Electronics Component Sourcing",
        client: "James L., Hardware Startup",
        industry: "Electronics",
        challenge: "Needed reliable PCB assembly for IoT device prototype and small batch production. Previous Chinese supplier had 6-week lead times.",
        solution: "Found Vietnamese electronics manufacturer with faster turnaround. Managed sampling process, coordinated technical specs, and oversaw first production run.",
        result: "Reduced lead time to 2 weeks, 99.5% first-pass yield. Now ramping to 10K units/month.",
        metrics: [
          { label: "Lead Time", value: "2 weeks" },
          { label: "First-Pass Yield", value: "99.5%" },
          { label: "Cost Reduction", value: "22%" },
          { label: "Current Scale", value: "10K/mo" }
        ],
        gallery: [developerImage, qualityCheckImage, factoryImage, warehouseImage],
        testimonial: "The technical expertise was unexpected. They understood our specs and caught issues before they became problems."
      }
    ]
  },
  {
    category: "Talent Sourcing",
    icon: Users,
    color: "from-coral to-coral-muted",
    link: "/talent-sourcing",
    description: "Find reliable remote support — VAs, customer service, and specialized roles from Vietnam.",
    cases: [
      {
        id: "customer-support",
        title: "24/7 Customer Support Team",
        client: "David L., SaaS Founder",
        industry: "Technology",
        challenge: "Needed 24/7 customer support without hiring full-time employees. Previous freelancers were unreliable and response times were killing conversions.",
        solution: "Built a 5-person support team across time zones with custom training on their product. Created SOPs, established escalation procedures, and integrated with their helpdesk.",
        result: "Response time dropped from 4 hours to 15 minutes. Customer satisfaction went from 3.2 to 4.9 stars. Team has been stable for 18 months.",
        metrics: [
          { label: "Response Time", value: "15 min" },
          { label: "CSAT Score", value: "4.9★" },
          { label: "Team Size", value: "5 people" },
          { label: "Retention", value: "18 months" }
        ],
        gallery: [supportTeamImage, teamMeetingImage, happyTeamImage, talentImage],
        testimonial: "Our support team in Vietnam is now our competitive advantage. They're better than in-house teams I've managed."
      },
      {
        id: "executive-assistant",
        title: "Executive Assistant Match",
        client: "Jennifer M., Agency Owner",
        industry: "Marketing Agency",
        challenge: "Overwhelmed with admin tasks, couldn't find reliable remote help. Previous VAs didn't last more than 2 months.",
        solution: "Matched with experienced VA who had agency background. Provided custom training on her specific workflows, tools, and communication style. 2-week trial with daily check-ins.",
        result: "Saved 20+ hours/week, relationship scaled to 3 VAs within 6 months managing different departments.",
        metrics: [
          { label: "Hours Saved", value: "20+/week" },
          { label: "Team Growth", value: "1 → 3 VAs" },
          { label: "Time to Productivity", value: "2 weeks" },
          { label: "Cost vs US Hire", value: "65% less" }
        ],
        gallery: [entrepreneurImage, talentImage, teamMeetingImage, supportTeamImage],
        testimonial: "Lan isn't just an assistant — she runs half my business. I couldn't operate without her now."
      },
      {
        id: "content-team",
        title: "Content Production Team",
        client: "Alex P., E-commerce Brand",
        industry: "E-commerce",
        challenge: "Needed consistent content production for 500+ product listings. Freelance writers were inconsistent and expensive.",
        solution: "Assembled 3-person content team: 1 writer, 1 editor, 1 SEO specialist. Created brand voice guidelines and approval workflow.",
        result: "Publishing 50+ optimized listings/week. Organic traffic up 340% in 6 months.",
        metrics: [
          { label: "Content Output", value: "50+/week" },
          { label: "Organic Traffic", value: "+340%" },
          { label: "Team Size", value: "3 people" },
          { label: "Cost Savings", value: "70%" }
        ],
        gallery: [talentImage, happyTeamImage, developerImage, entrepreneurImage],
        testimonial: "The quality and consistency is incredible. They understand our brand voice better than agencies we paid 10x more."
      }
    ]
  },
  {
    category: "Digital & Systems",
    icon: Cpu,
    color: "from-navy to-navy-light",
    link: "/digital-systems",
    description: "Build websites, chatbots, CRM systems, and internal tools that actually work.",
    cases: [
      {
        id: "ecommerce-automation",
        title: "E-commerce Automation",
        client: "Robert C., Multi-brand Owner",
        industry: "E-commerce",
        challenge: "Manual order processing causing delays and errors across 4 Shopify stores. Staff spending 20+ hours/week on data entry.",
        solution: "Built custom automation connecting Shopify, inventory system, shipping platforms, and accounting software. Real-time sync with error handling and alerts.",
        result: "Processing time reduced by 85%, zero manual errors. Staff now focuses on customer service and growth.",
        metrics: [
          { label: "Time Saved", value: "85%" },
          { label: "Manual Errors", value: "Zero" },
          { label: "Platforms Connected", value: "4" },
          { label: "ROI", value: "3 weeks" }
        ],
        gallery: [developerImage, happyTeamImage, qualityInspectorImage, supportTeamImage],
        testimonial: "The automation paid for itself in 3 weeks. We went from drowning in spreadsheets to running on autopilot."
      },
      {
        id: "ai-chatbot",
        title: "AI Chatbot Implementation",
        client: "Lisa H., Hotel Chain Manager",
        industry: "Hospitality",
        challenge: "High volume of repetitive guest inquiries overwhelming staff. 60% of calls were basic questions about check-in times and amenities.",
        solution: "Implemented AI chatbot with multilingual support (English, Vietnamese, Chinese, Korean) and booking integration. Human handoff for complex issues.",
        result: "Handled 70% of inquiries automatically. Staff freed for VIP guests and complex requests.",
        metrics: [
          { label: "Inquiries Automated", value: "70%" },
          { label: "Languages", value: "4" },
          { label: "Response Time", value: "< 5 sec" },
          { label: "Guest Satisfaction", value: "+25%" }
        ],
        gallery: [supportTeamImage, developerImage, teamMeetingImage, happyClientImage],
        testimonial: "Our guests love the instant responses. Staff love that they can focus on what matters. Win-win."
      },
      {
        id: "custom-crm",
        title: "Custom CRM Build",
        client: "Mark S., B2B Services",
        industry: "Professional Services",
        challenge: "Outgrew spreadsheet-based client tracking. Off-the-shelf CRMs were too complex or didn't fit their sales process.",
        solution: "Built lean CRM tailored to their exact workflow: lead intake, proposal tracking, project management, and invoicing all in one place.",
        result: "Sales cycle shortened by 30%. Team adoption was 100% (vs 40% with previous CRM).",
        metrics: [
          { label: "Sales Cycle", value: "-30%" },
          { label: "Team Adoption", value: "100%" },
          { label: "Features", value: "Exactly what needed" },
          { label: "Monthly Cost", value: "$0 (self-hosted)" }
        ],
        gallery: [developerImage, teamMeetingImage, happyTeamImage, entrepreneurImage],
        testimonial: "Finally a CRM my team actually uses. No more 'I forgot to update the spreadsheet' excuses."
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
  const [selectedCase, setSelectedCase] = useState<UseCase | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="headline-md text-navy">{category.category}</h2>
                  <p className="text-cool-gray text-sm">{category.description}</p>
                </div>
              </div>
              <Link 
                to={category.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal transition-colors"
              >
                Learn more about this service
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Case Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {category.cases.map((useCase, index) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCase(useCase)}
                  className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Image with gallery indicator */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={useCase.gallery[0]} 
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    
                    {/* Gallery indicator */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Image className="w-3 h-3 text-navy" />
                      <span className="text-xs font-medium text-navy">{useCase.gallery.length}</span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/70">{useCase.industry}</span>
                      <h3 className="text-white font-display font-semibold text-lg">{useCase.title}</h3>
                      <p className="text-white/80 text-sm">{useCase.client}</p>
                    </div>
                  </div>
                  
                  {/* Quick stats */}
                  <div className="p-4 grid grid-cols-2 gap-2">
                    {useCase.metrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="text-center p-2 bg-cream/50 rounded-lg">
                        <div className="text-lg font-display font-bold text-navy">{metric.value}</div>
                        <div className="text-xs text-cool-gray">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Click to expand */}
                  <div className="px-4 pb-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-teal font-medium group-hover:text-navy transition-colors">
                      <span>View full case study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-navy" />
                </button>
                
                {/* Gallery */}
                <div className="grid grid-cols-4 gap-1 h-64">
                  {selectedCase.gallery.map((img, i) => (
                    <div 
                      key={i} 
                      className={`relative overflow-hidden cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      {i === 0 && (
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal">{selectedCase.industry}</span>
                    <h2 className="headline-lg text-navy">{selectedCase.title}</h2>
                    <p className="text-cool-gray">{selectedCase.client}</p>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {selectedCase.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-4 bg-cream rounded-xl">
                      <div className="text-2xl font-display font-bold text-navy">{metric.value}</div>
                      <div className="text-xs text-cool-gray">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Story */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-coral mb-2">The Challenge</h3>
                    <p className="text-cool-gray">{selectedCase.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-teal mb-2">Our Solution</h3>
                    <p className="text-cool-gray">{selectedCase.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-sunshine mb-2">The Result</h3>
                    <p className="text-navy font-medium">{selectedCase.result}</p>
                  </div>
                </div>
                
                {/* Testimonial */}
                <div className="mt-8 p-6 bg-navy-deep rounded-xl">
                  <Quote className="w-8 h-8 text-gold/30 mb-3" />
                  <p className="text-cream italic mb-4">"{selectedCase.testimonial}"</p>
                  <p className="text-cream/60 text-sm">— {selectedCase.client}</p>
                </div>
                
                {/* CTA */}
                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-cream">
                    <Link to="/start-project" className="inline-flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

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