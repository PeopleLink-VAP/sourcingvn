import { Package, Users, Cpu } from "lucide-react";

export interface UseCase {
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
  featured?: boolean;
}

export interface UseCaseCategory {
  category: string;
  icon: typeof Package;
  color: string;
  link: string;
  description: string;
  cases: UseCase[];
}

// Real client project photos only (no stock or AI imagery)

// Client project screenshots and logos
import edgepointShot from "@/assets/cases/Edpoint_safety.jpg";
import edgepointSite from "@/assets/cases/edgepoint_site.jpg";
import edgepointLogo from "@/assets/cases/edpoint_logo.png";
import radiusShot from "@/assets/cases/radius_excavation.jpg";
import radiusLogo from "@/assets/cases/radius_logo.png";
import soraShot from "@/assets/cases/sora_nail.jpg";
import soraStudio from "@/assets/cases/sora_studio.jpg";
import soraLogo from "@/assets/cases/sora_logo.png";
import gloryShot from "@/assets/cases/glorynest.jpg";
import gloryVilla from "@/assets/cases/glorynest_villa.jpg";
import gloryLogo from "@/assets/cases/glorynest_logo.png";
import portalShot from "@/assets/cases/teaching_portal.jpg";
import vaEvent from "@/assets/cases/va_event.jpg";
import sourcingPlatformShot from "@/assets/cases/sourcing_supplier.jpg";
import factorySourcing from "@/assets/cases/factory_sourcing.jpg";
import bambooPackaging from "@/assets/cases/bamboo/bamboo_packaging.jpg";
import bambooStrawDrink from "@/assets/cases/bamboo/bamboo_straw_drink.jpg";
import bambooStrawSet from "@/assets/cases/bamboo/bamboo_straw_set.jpg";
import bambooStrawsJar from "@/assets/cases/bamboo/bamboo_straws_jar.jpg";
import bambooHairbrush from "@/assets/cases/bamboo/bamboo_hairbrush.jpg";
import bambooEcoheartSet from "@/assets/cases/bamboo/bamboo_ecoheart_set.jpg";
import bambooRetailBox from "@/assets/cases/bamboo/bamboo_retail_box.jpg";
import wetTissue from "@/assets/cases/sprayers/wet_tissue.jpg";
import sprayer1 from "@/assets/cases/sprayers/sprayer_1.jpg";
import sprayer2 from "@/assets/cases/sprayers/sprayer_2.jpg";
import sprayer3 from "@/assets/cases/sprayers/sprayer_3.jpg";
import sprayer4 from "@/assets/cases/sprayers/sprayer_4.jpg";
import scrubsNavy from "@/assets/cases/scrubs/scrubs_navy.jpg";
import scrubsStudio from "@/assets/cases/scrubs/scrubs_studio.jpg";
import scrubsVideo1 from "@/assets/cases/scrubs/scrubs_video_1.mp4.asset.json";
import scrubsVideo2 from "@/assets/cases/scrubs/scrubs_video_2.mp4.asset.json";
import apparelHoodie from "@/assets/cases/apparel/apparel_hoodie.jpg";
import apparelCarpenter from "@/assets/cases/apparel/apparel_carpenter.jpg";
import apparelKnit from "@/assets/cases/apparel/apparel_knit.jpg";
import apparelCap from "@/assets/cases/apparel/apparel_cap.jpg";


export const useCaseCategories: UseCaseCategory[] = [
  {
    category: "Product Sourcing",
    icon: Package,
    color: "from-teal to-teal-muted",
    link: "/product-sourcing",
    description: "Find reliable factories, negotiate better deals, and manage production from Vietnam.",
    cases: [
      {
        id: "bamboo-homeware",
        title: "Bamboo Straws & Eco Homeware",
        client: "Eco brands in the US, EU and Australia",
        industry: "Eco Homeware & Tableware",
        challenge: "Buyers wanted genuinely handmade Vietnamese bamboo goods (drinking straws, cutlery, hair brushes, flasks) with their own branding and retail-ready packaging, but most trading companies quoted generic stock with no control over engraving, moisture treatment or box design.",
        solution: "We worked directly with artisan workshops in the Mekong Delta and central Vietnam: sample rounds for straw diameter and finish, laser engraving tests for each logo, moisture and mould treatment checks, plus a packaging partner for the printed boxes and jute pouches.",
        result: "Retail-ready branded sets shipped from Vietnam: engraved straws, cleaning brushes, cutlery kits and bamboo flasks, packed exactly as the brand designed them.",
        metrics: [
          { label: "Product Lines", value: "6" },
          { label: "Branding", value: "Engraved" },
          { label: "Packaging", value: "Retail-ready" },
          { label: "Origin", value: "Handmade VN" }
        ],
        gallery: [bambooStrawsJar, bambooRetailBox, bambooPackaging, bambooStrawSet, bambooStrawDrink, bambooEcoheartSet, bambooHairbrush]
      },
      {
        id: "bamboo-carbon",
        title: "Bamboo & Coconut Activated Carbon",
        client: "A veterinary products manufacturer, USA",
        industry: "Veterinary & Raw Materials",
        challenge: "Moving sourcing from China to Vietnam amid US-China trade tension, the client needed bamboo coal in an exact size and spec that would pass US lab testing. Few Vietnamese suppliers qualified for lab or medical-grade testing, client specs differed from standard local production, and hazardous-material logistics needed a special shipping route.",
        solution: "Phase 1 supplier vetting followed by Phase 2 sample delivery: collecting samples, running quality checks and shipping them to the client's lab in the US.",
        result: "Found a qualified supplier and connected the client directly for ongoing production.",
        metrics: [
          { label: "Phases Used", value: "2" },
          { label: "Lab Testing", value: "Passed" },
          { label: "Shipping", value: "Hazmat route" },
          { label: "Outcome", value: "Direct link" }
        ],
        gallery: []
      },
      {
        id: "cleaning-sprayers",
        title: "Cleaning Sprayers & Wet Tissues",
        client: "A large US e-commerce seller",
        industry: "Consumer Goods & E-commerce",
        challenge: "The client had under 24 hours to vet suppliers and book factory visits during a short Vietnam stopover after the Canton Fair. Locations were spread out and some suppliers were unavailable on short notice.",
        solution: "Rapid supplier vetting plus a planned route of 8 factory visits across 2 days in different provinces, with us on the ground translating and negotiating.",
        result: "The client found factories matching target pricing and rebooked us for ongoing supplier communication.",
        metrics: [
          { label: "Factories Visited", value: "8" },
          { label: "Days", value: "2" },
          { label: "Notice", value: "<24 hrs" },
          { label: "Volume", value: "100Ks/yr" }
        ],
        gallery: [sprayer1, wetTissue, sprayer2, sprayer3, sprayer4]
      },
      {
        id: "medical-scrubs",
        title: "Medical Scrubs, A to Z",
        client: "International hospital and clinic suppliers",
        industry: "Medical Apparel",
        challenge: "The client never visited Vietnam in person. We managed imported fabric components from China, ensured 'Made in Vietnam' compliance, resolved a post-wash sizing issue and held the factory accountable for the cost, all while rebuilding trust after a bad sourcing experience in Turkey and navigating COVID-era logistics.",
        solution: "Full service from supplier vetting through door-to-door shipping, with virtual factory visits and inspection reports standing in for the client on the ground.",
        result: "All clients satisfied, with several referring us to additional hospitals and clinics.",
        metrics: [
          { label: "Scope", value: "A to Z" },
          { label: "Client Visits", value: "Remote" },
          { label: "Compliance", value: "Made in VN" },
          { label: "Referrals", value: "Multiple" }
        ],
        gallery: [scrubsStudio, scrubsNavy, scrubsVideo1.url, scrubsVideo2.url]
      },
      {
        id: "custom-clothing",
        title: "Custom Apparel, Low MOQ",
        client: "Early-stage apparel brands",
        industry: "Apparel & Fashion",
        challenge: "Small brands needing hoodies, shirts, dresses and sportswear kept running into big-factory hidden fees and minimum order quantities they could not meet.",
        solution: "A direct network of local tailors and small factories, led by founder Duyen, who grew up in a tailoring family in Hoi An, Vietnam's custom clothing hub.",
        result: "Brands launch small, test the market and scale into larger factories when the numbers justify it.",
        metrics: [
          { label: "MOQ", value: "Low" },
          { label: "Hidden Fees", value: "None" },
          { label: "Network", value: "Local tailors" },
          { label: "Base", value: "Hoi An" }
        ],
        gallery: [apparelHoodie, apparelCarpenter, apparelKnit, apparelCap]
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
        gallery: []
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
        gallery: []
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
        gallery: []
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
        logo: edgepointLogo,
        challenge: "An established safety and access company had outgrown its website. The site no longer reflected the depth of its training programs, field expertise or the scale of the business.",
        solution: "We rebuilt the site around how customers actually buy: clear service and training paths, a structured content system for courses and certifications, plus quote and booking entry points on every page.",
        result: "A modern digital foundation that finally matches the business, with clearer paths to quotes and training bookings.",
        metrics: [
          { label: "Service Lines", value: "4" },
          { label: "Content Rebuilt", value: "100%" },
          { label: "Booking Paths", value: "2" },
          { label: "Market", value: "Canada" }
        ],
        gallery: [edgepointShot, edgepointSite]
      },
      {
        id: "radius-ecosystem",
        title: "Radius Ecosystem",
        client: "Radius Group, Canada",
        industry: "Construction & Industrial Services",
        logo: radiusLogo,
        challenge: "Four connected companies across excavation, construction, disposal and mechanical services were competing with each other online instead of working as one group.",
        solution: "We designed a shared digital ecosystem: one network model with an interactive hub linking every discipline, while each company keeps its own identity, content and audience.",
        result: "One accountable brand story across six disciplines, with cross-referrals now built into the navigation.",
        metrics: [
          { label: "Companies", value: "4" },
          { label: "Disciplines", value: "6" },
          { label: "Shared System", value: "1" },
          { label: "Market", value: "Canada" }
        ],
        gallery: [radiusShot]
      },
      {
        id: "sora-nail",
        title: "Sora Nail",
        client: "Sora Nail Studio, USA",
        industry: "Beauty & Wellness",
        logo: soraLogo,
        challenge: "A beautiful studio with no digital presence to match. Visitors liked the look but had no obvious way to move from browsing to booking.",
        solution: "An editorial, image-led site built around the customer journey, with the Square booking flow connected directly into every section instead of buried in a contact page.",
        result: "From \"I like it\" to \"I'll book it\": booking is now one tap away from anywhere on the site.",
        metrics: [
          { label: "Booking Taps", value: "1" },
          { label: "Pages", value: "Single flow" },
          { label: "Integration", value: "Square" },
          { label: "Market", value: "USA" }
        ],
        gallery: [soraStudio, soraShot]
      },
      {
        id: "glory-nest",
        title: "Glory Nest",
        client: "Glorynest Villa, Hoi An, Vietnam",
        industry: "Hospitality",
        logo: gloryLogo,
        challenge: "A two-bedroom villa in Hoi An competing on an OTA listing page, where the experience and the social impact story got flattened into a price and a photo grid.",
        solution: "A storytelling-led site that sells the stay, not just the room, with two clear booking routes: direct bank transfer for domestic guests and Airbnb for international guests.",
        result: "Direct bookings without service fees, plus the Airbnb safety net for international travellers.",
        metrics: [
          { label: "Booking Routes", value: "2" },
          { label: "Service Fees", value: "Zero (direct)" },
          { label: "Location", value: "Hoi An" },
          { label: "Guest Types", value: "Local + Intl" }
        ],
        gallery: [gloryShot, gloryVilla]
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
        gallery: [portalShot, vaEvent]
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
        gallery: [sourcingPlatformShot, factorySourcing]
      }
    ]

  }
];

export const allCases: (UseCase & { category: string })[] = useCaseCategories.flatMap((c) =>
  c.cases.map((useCase) => ({ ...useCase, category: c.category }))
);

const featuredIds = [
  "bamboo-homeware",
  "edgepoint-safety",
  "medical-scrubs",
];

export const featuredCases = featuredIds
  .map((id) => allCases.find((c) => c.id === id))
  .filter((c): c is (typeof allCases)[number] => Boolean(c));
