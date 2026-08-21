import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Users, Cpu, Star, Quote, ChevronRight, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Import Vietnam/Asian-themed images
import vietnamTeamImage from "@/assets/images/vietnam-team.jpg";
import garmentFactoryImage from "@/assets/images/garment-factory-asia.jpg";
import asianWomanProfessional from "@/assets/images/asian-woman-professional.jpg";
import asianOfficeTeam from "@/assets/images/asian-office-team.jpg";
import asianBusinessImage from "@/assets/images/asian-business.jpg";
import vietnamWarehouseImage from "@/assets/images/vietnam-warehouse.jpg";
import asianTeamWork from "@/assets/images/asian-team-work.jpg";
import asianCodingImage from "@/assets/images/asian-coding.jpg";
import asianCollaborationImage from "@/assets/images/asian-collaboration.jpg";
import diverseTeamMeeting from "@/assets/images/diverse-team-meeting.jpg";
import asianWomanLaptop from "@/assets/images/asian-woman-laptop.jpg";
import hoiAnLanterns from "@/assets/images/vn-hoi-an-lanterns.jpg";

// Client project screenshots and logos
import edgepointShot from "@/assets/cases/Edpoint_safety.png.asset.json";
import edgepointLogo from "@/assets/cases/edpoint_logo.png.asset.json";
import radiusShot from "@/assets/cases/radius_excavation.png.asset.json";
import soraShot from "@/assets/cases/sora_nail.png.asset.json";
import soraLogo from "@/assets/cases/sora_logo.png.asset.json";
import gloryShot from "@/assets/cases/glorynest.png.asset.json";
import portalShot from "@/assets/cases/teaching_portal.png.asset.json";
import sourcingPlatformShot from "@/assets/cases/sourcing_supplier.png.asset.json";

interface UseCase {
  id: string;
  title: string;
  client: string;
  industry: string;
  logo?: string;
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
        gallery: [garmentFactoryImage, vietnamWarehouseImage, asianTeamWork, asianBusinessImage],
        testimonial: "Sourcing.vn didn't just find us a factory. They found us a partner. The quality exceeded our expectations."
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
        gallery: [vietnamWarehouseImage, garmentFactoryImage, vietnamTeamImage, asianOfficeTeam],
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
        gallery: [asianCodingImage, asianTeamWork, garmentFactoryImage, vietnamWarehouseImage],
        testimonial: "The technical expertise was unexpected. They understood our specs and caught issues before they became problems."
      }
    ]
  },
  {
    category: "Talent Sourcing",
    icon: Users,
    color: "from-coral to-coral-muted",
    link: "/talent-sourcing",
    description: "Find reliable remote support: VAs, customer service, and specialized roles from Vietnam.",
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
        gallery: [asianOfficeTeam, diverseTeamMeeting, vietnamTeamImage, asianCollaborationImage],
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
        gallery: [asianWomanProfessional, asianWomanLaptop, diverseTeamMeeting, asianOfficeTeam],
        testimonial: "Lan isn't just an assistant. She runs half my business. I couldn't operate without her now."
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
        gallery: [asianCollaborationImage, vietnamTeamImage, asianCodingImage, asianWomanProfessional],
        testimonial: "The quality and consistency is incredible. They understand our brand voice better than agencies we paid 10x more."
      }
    ]
  },
  {
    category: "Digital & Systems",
    icon: Cpu,
    color: "from-navy to-navy-light",
    link: "/digital-systems",
    description: "Websites, platforms and internal systems built around how businesses actually work.",
    cases: [
      {
        id: "edgepoint-safety",
        title: "Edgepoint Safety",
        client: "Edgepoint Safety & Access, Canada",
        industry: "Safety & Access",
        logo: edgepointLogo.url,
        challenge: "An established safety and access company had outgrown its website. The site no longer reflected the depth of its training programs, field expertise or the scale of the business.",
        solution: "We rebuilt the site around how customers actually buy: clear service and training paths, a structured content system for courses and certifications, plus quote and booking entry points on every page.",
        result: "A modern digital foundation that finally matches the business, with clearer paths to quotes and training bookings.",
        metrics: [
          { label: "Service Lines", value: "4" },
          { label: "Content Rebuilt", value: "100%" },
          { label: "Booking Paths", value: "2" },
          { label: "Market", value: "Canada" }
        ],
        gallery: [edgepointShot.url, asianCodingImage, diverseTeamMeeting, asianOfficeTeam],
        testimonial: "The new site finally represents the company we've become, not the one we were ten years ago."
      },
      {
        id: "radius-ecosystem",
        title: "Radius Ecosystem",
        client: "Radius Group, Canada",
        industry: "Construction & Industrial Services",
        challenge: "Four connected companies across excavation, construction, disposal and mechanical services were competing with each other online instead of working as one group.",
        solution: "We designed a shared digital ecosystem: one network model with an interactive hub linking every discipline, while each company keeps its own identity, content and audience.",
        result: "One accountable brand story across six disciplines, with cross-referrals now built into the navigation.",
        metrics: [
          { label: "Companies", value: "4" },
          { label: "Disciplines", value: "6" },
          { label: "Shared System", value: "1" },
          { label: "Market", value: "Canada" }
        ],
        gallery: [radiusShot.url, vietnamWarehouseImage, asianTeamWork, asianCollaborationImage],
        testimonial: "Clients used to see four separate contractors. Now they see one crew that can handle the whole site."
      },
      {
        id: "sora-nail",
        title: "Sora Nail",
        client: "Sora Nail Studio, USA",
        industry: "Beauty & Wellness",
        logo: soraLogo.url,
        challenge: "A beautiful studio with no digital presence to match. Visitors liked the look but had no obvious way to move from browsing to booking.",
        solution: "An editorial, image-led site built around the customer journey, with the Square booking flow connected directly into every section instead of buried in a contact page.",
        result: "From \"I like it\" to \"I'll book it\": booking is now one tap away from anywhere on the site.",
        metrics: [
          { label: "Booking Taps", value: "1" },
          { label: "Pages", value: "Single flow" },
          { label: "Integration", value: "Square" },
          { label: "Market", value: "USA" }
        ],
        gallery: [soraShot.url, asianWomanProfessional, asianWomanLaptop, asianBusinessImage],
        testimonial: "People book before they even call us now. The site does the selling."
      },
      {
        id: "glory-nest",
        title: "Glory Nest",
        client: "Glorynest Villa, Hoi An, Vietnam",
        industry: "Hospitality",
        challenge: "A two-bedroom villa in Hoi An competing on an OTA listing page, where the experience and the social impact story got flattened into a price and a photo grid.",
        solution: "A storytelling-led site that sells the stay, not just the room, with two clear booking routes: direct bank transfer for domestic guests and Airbnb for international guests.",
        result: "Direct bookings without service fees, plus the Airbnb safety net for international travellers.",
        metrics: [
          { label: "Booking Routes", value: "2" },
          { label: "Service Fees", value: "Zero (direct)" },
          { label: "Location", value: "Hoi An" },
          { label: "Guest Types", value: "Local + Intl" }
        ],
        gallery: [gloryShot.url, hoiAnLanterns, vietnamTeamImage, asianBusinessImage],
        testimonial: "Guests tell us they booked because of the story, not the price."
      },
      {
        id: "va-training-portal",
        title: "Virtual Assistant Training Portal",
        client: "Internal · VA Academy, Vietnam",
        industry: "Education & Operations",
        challenge: "More than 200 students, trainers, courses, schedules and support tickets were being run out of spreadsheets and chat groups. Nothing was traceable.",
        solution: "A learning and operations portal with a trainer center: ticket triage by urgency, course and cohort filters, assignment feedback tracking and clear ownership for every issue.",
        result: "Every request now has an owner and a status. Escalations surface before students complain.",
        metrics: [
          { label: "Students", value: "200+" },
          { label: "Roles", value: "4" },
          { label: "Spreadsheets", value: "Retired" },
          { label: "Ticket Triage", value: "Live" }
        ],
        gallery: [portalShot.url, asianWomanLaptop, diverseTeamMeeting, asianOfficeTeam],
        testimonial: "We stopped losing student issues in group chats. That alone changed how the team works."
      },
      {
        id: "sourcing-platform",
        title: "Sourcing Platform",
        client: "Sourcing.vn · Vietnam & International",
        industry: "Sourcing & Supply Chain",
        challenge: "Sourcing work lived across twenty different spreadsheets: supplier lists, industry coverage, quotes and buyer requests all disconnected from each other.",
        solution: "A platform connecting international buyers, Vietnamese suppliers and our sourcing team in one workflow, with a live suppliers map showing coverage by province and industry.",
        result: "Supplier coverage is now visible at a glance across 20 industries and every province we work in.",
        metrics: [
          { label: "Industries", value: "20" },
          { label: "Coverage", value: "Nationwide" },
          { label: "Spreadsheets", value: "1 platform" },
          { label: "Users", value: "Buyers + Suppliers" }
        ],
        gallery: [sourcingPlatformShot.url, garmentFactoryImage, vietnamWarehouseImage, asianCodingImage],
        testimonial: "We can answer 'who can make this, and where?' in minutes instead of days."
      }
    ]

  }
];

const testimonials = [
  {
    quote: "Working with Sourcing.vn felt like having an insider on the ground. They didn't just find suppliers. They understood our brand and protected our margins.",
    author: "Amanda Chen",
    role: "Founder, Bloom Naturals",
    rating: 5,
    image: asianWomanProfessional
  },
  {
    quote: "Our VA has become indispensable. What started as inbox management evolved into full operations support. Sourcing.vn made the transition seamless.",
    author: "Marcus Johnson",
    role: "CEO, Digital First Agency",
    rating: 5,
    image: asianTeamWork
  },
  {
    quote: "The automation they built paid for itself in 3 weeks. We went from drowning in spreadsheets to having real-time visibility across all operations.",
    author: "Sophie Williams",
    role: "Operations Director, TrendCo",
    rating: 5,
    image: asianBusinessImage
  }
];

const UseCases = () => {
  const [selectedCase, setSelectedCase] = useState<UseCase | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Open the matching case study when arriving via /use-cases#<case-id>
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const match = useCases.flatMap((c) => c.cases).find((c) => c.id === id);
    if (!match) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
    const timer = window.setTimeout(() => setSelectedCase(match), 400);
    return () => window.clearTimeout(timer);
  }, []);



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
              src={vietnamTeamImage} 
              alt="Vietnam team" 
              className="w-80 h-48 object-cover rounded-2xl shadow-xl"
            />
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              src={asianBusinessImage} 
              alt="Business partnership" 
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
                  id={useCase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCase(useCase)}
                  className="scroll-mt-32 bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
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

                    {useCase.logo && (
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                        <img src={useCase.logo} alt={`${useCase.title} logo`} className="h-6 w-auto max-w-[110px] object-contain" />
                      </div>
                    )}
                    
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
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal">{selectedCase.industry}</span>
                    <h2 className="headline-lg text-navy">{selectedCase.title}</h2>
                    <p className="text-cool-gray">{selectedCase.client}</p>
                  </div>
                  {selectedCase.logo && (
                    <img
                      src={selectedCase.logo}
                      alt={`${selectedCase.title} logo`}
                      className="h-12 w-auto max-w-[160px] object-contain shrink-0"
                    />
                  )}
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
                  <p className="text-cream/60 text-sm">– {selectedCase.client}</p>
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