import { Package, Users, Cpu, Headphones, GraduationCap, Video, ShoppingBag } from "lucide-react";

export interface UseCase {
  id: string;
  title: string;
  client: string;
  industry: string;
  logo?: string;
  icon?: typeof Package;
  brief?: string;
  services?: string[];
  challengesLabel?: string;
  challengeList?: string[];
  note?: string;
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
import vapCalendar from "@/assets/cases/highlights/VAP_1_Calendar.jpg";
import vapTrainer from "@/assets/cases/highlights/VAP_2_TrainerCenter.jpg";
import vapMessages from "@/assets/cases/highlights/VAP_3_Messages.jpg";
import coconutCarbon from "@/assets/cases/carbon/coconut_carbon.jpg";
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
        title: "Coconut & Bamboo Activated Carbon",
        client: "A veterinary products manufacturer, USA",
        industry: "Veterinary & Raw Materials",
        brief: "A client operating a veterinary products manufacturing chain wanted to shift sourcing of bamboo and coconut activated carbon from China to Vietnam, driven partly by ongoing U.S.-China trade tension. The carbon needed to meet precise size and specification requirements so it could pass U.S. lab testing and be approved for manufacturing in the U.S.",
        services: [
          "Phase 1: Supplier vetting",
          "Phase 2: Sample delivery. We collected samples, checked quality, and shipped them to the client's lab for testing"
        ],
        challengeList: [
          "Vietnam has a limited pool of activated carbon suppliers capable of meeting medical-grade lab testing standards, making qualified suppliers hard to find",
          "The client's specifications differed significantly from standard lots produced by Vietnamese suppliers",
          "Activated carbon is highly flammable, which complicates logistics. We worked directly with vendors to establish a dedicated, compliant shipping route"
        ],
        note: "Due to confidentiality, some images shown are stock photos used for illustration, not the actual products.",
        challenge: "Qualified suppliers were scarce, specs differed from standard local lots, and flammable cargo needed a dedicated compliant shipping route.",
        solution: "Supplier vetting, then sample collection, quality checks and delivery to the client's U.S. lab for testing.",
        result: "We identified suppliers that met the client's specifications and connected them directly with a factory fully capable of meeting their production needs, enabling the client to move forward with manufacturing.",
        metrics: [
          { label: "Phases Used", value: "2" },
          { label: "Lab Testing", value: "Passed" },
          { label: "Shipping", value: "Compliant route" },
          { label: "Outcome", value: "Direct link" }
        ],
        gallery: [coconutCarbon]
      },
      {
        id: "cleaning-sprayers",
        title: "Cleaning Sprayers & Wet Tissues for Tech Accessories",
        client: "A U.S.-based ecommerce seller",
        industry: "Consumer Goods & E-commerce",
        brief: "A U.S.-based ecommerce seller moving hundreds of thousands of units annually across categories, from tech accessories to products for aging populations, needed sourcing support for screen-cleaning sprayers and wet tissues.",
        services: ["Supplier vetting and factory visits"],
        challengeList: [
          "The client was attending the Canton Fair in China and flying to Vietnam the very next day, leaving us less than 24 hours to vet their supplier shortlist, identify new leads and schedule factory visits",
          "Sourced suppliers across three distinct product categories on a tight timeline",
          "Some suppliers couldn't accommodate the client's limited availability",
          "Visited factories spread across long distances within just two days",
          "We handled the full logistics: transportation, meals and appointment scheduling with each factory, so the client could focus solely on evaluating suppliers"
        ],
        challenge: "Under 24 hours' notice to vet suppliers, find new leads and route factory visits across long distances.",
        solution: "Rapid supplier vetting plus a planned route of 8 factory visits across 2 days, with full logistics handled on the ground.",
        result: "We visited 8 suppliers across 2 days and identified key manufacturers able to meet the client's target pricing. The client left satisfied and later re-engaged us to manage ongoing supplier follow-up and communication.",
        metrics: [
          { label: "Factories Visited", value: "8" },
          { label: "Days", value: "2" },
          { label: "Notice", value: "<24 hrs" },
          { label: "Categories", value: "3" }
        ],
        gallery: [sprayer1, wetTissue, sprayer2, sprayer3, sprayer4]
      },
      {
        id: "medical-scrubs",
        title: "Medical Scrubs",
        client: "International hospital and clinic suppliers",
        industry: "Medical Apparel",
        brief: "Medical scrubs are among our most frequently requested products, largely because FIGS, the category's best-known brand, manufactures in Vietnam, which has earned the country a strong reputation in this space. We source from factories experienced in supplying hospitals and clinics worldwide, across a range of factory sizes.",
        services: ["Full-service support from supplier vetting through door-to-door shipping. These engagements typically run long, and we manage any issues that arise with factories throughout the process."],
        challengeList: [
          "Most clients had never set foot in Vietnam, so we represented them on the ground from A to Z",
          "Some raw materials are imported from China, extending project timelines",
          "Ensuring products qualified for 'Made in Vietnam' certification was a top priority",
          "One client had a prior negative experience with a factory in Turkey and needed ongoing reassurance about quality and reliability in Vietnam",
          "One factory skipped pre-production fabric testing, causing shrinkage after washing. We worked with them to cover the cost and accelerate the timeline to meet the original deadline",
          "One order was placed during COVID, when logistics were especially difficult"
        ],
        challenge: "Remote clients, imported raw materials, 'Made in Vietnam' compliance, a fabric shrinkage issue and COVID-era logistics.",
        solution: "Full service from supplier vetting through door-to-door shipping, representing clients on the ground from A to Z.",
        result: "Every client received their products successfully and was satisfied with the outcome, and several went on to refer us to other hospitals and clinics for new product lines. Because factories are based in either Ho Chi Minh City or Hanoi depending on client needs, our team built the resources and processes to support production reliably across both regions.",
        metrics: [
          { label: "Scope", value: "A to Z" },
          { label: "Client Visits", value: "Remote" },
          { label: "Compliance", value: "Made in VN" },
          { label: "Regions", value: "North + South" }
        ],
        gallery: [scrubsStudio, scrubsNavy, scrubsVideo1.url, scrubsVideo2.url]
      },
      {
        id: "custom-clothing",
        title: "Custom Clothing",
        client: "Early-stage apparel brands",
        industry: "Apparel & Fashion",
        brief: "Low minimum order quantities (MOQs) are the most common request from clothing clients, whether for hoodies, shirts, dresses or sportswear, which makes sense, since most are launching new businesses or testing new product lines.",
        services: [
          "Our network across Vietnam lets us cut out unnecessary commissions, avoid large factories with excessive hidden fees, and bypass high-overhead production systems, connecting clients with reliable, professional tailors and local clothing factories matched to their specific needs.",
          "Support across everyday apparel, business uniforms and specialty garments, with an experienced team of merchandisers and sourcing agents."
        ],
        challenge: "Small brands kept running into big-factory hidden fees and minimum order quantities they could not meet.",
        solution: "A direct network of professional tailors and small factories matched to each brand's specific needs.",
        result: "Our founder, Duyen, grew up around clothing and design (her father is a tailor and designer), giving her an intuitive understanding of client needs without lengthy explanations. She's also from Hoi An, one of Southeast Asia's most renowned cities for custom clothing.",
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
    description: "Remote Vietnamese professionals: client-facing roles, assistants, editors and support teams.",
    cases: [
      {
        id: "clo-cso-placements",
        title: "CLO & CSO Placements",
        client: "Immigration support company, Australia",
        industry: "Immigration Services",
        icon: Headphones,
        brief: "Our client, an immigration support company based in Australia, needed to fill Client Liaison Officer (CLO) and Customer Support Officer (CSO) positions remotely, on a part-time basis. Given the client-facing nature of these roles, they were specific about candidate quality: strong, accent-neutral English communication, and the flexibility to visit the office in person once a week.",
        services: ["Full-cycle recruitment support: we screened all incoming applications, ran first-round interviews to vet candidates, and shortlisted the top 3 for the client to interview directly."],
        challengeList: [
          "Neutral, accent-free spoken English",
          "Willingness and ability to visit the client's office once a week",
          "Strong written and verbal communication for client-facing work"
        ],
        challengesLabel: "Requirements",
        challenge: "Client-facing roles needing accent-neutral English, weekly in-office presence and strong communication skills.",
        solution: "Full-cycle recruitment: application screening, first-round interviews and a top-3 shortlist per round.",
        result: "Qualified shortlists delivered inside the client's timeline every round, across 4 separate hiring cycles for different roles.",
        metrics: [
          { label: "Hiring Cycles", value: "4" },
          { label: "Shortlist", value: "Top 3" },
          { label: "Engagement", value: "Part-time" },
          { label: "Market", value: "Australia" }
        ],
        gallery: []
      },
      {
        id: "academic-support-team",
        title: "Academic Support Team",
        client: "Dr. Bari Courts, University Professor",
        industry: "Education",
        icon: GraduationCap,
        brief: "Dr. Bari Courts, a university professor, wanted to build out a remote support team based in Vietnam. Given the academic context, candidates needed excellent written and verbal English, along with hands-on experience using Learning Management Systems (LMS) and prior exposure to international teaching environments.",
        services: ["CV Collection: a lighter-touch package where we source and compile qualified candidate profiles, and the client handles screening and interviewing independently. This suits clients who prefer to evaluate candidates themselves but want a curated, pre-filtered pool to start from."],
        challengesLabel: "Requirements",
        challengeList: [
          "Strong written and spoken English",
          "Experience with LMS platforms",
          "Background in international or cross-cultural teaching settings"
        ],
        challenge: "Academic remote support roles requiring strong English, LMS experience and international teaching exposure.",
        solution: "CV Collection package: sourcing and compiling a curated, pre-filtered pool of candidate profiles.",
        result: "A curated shortlist matching the academic and technical requirements, so interviews could start immediately without applicant screening.",
        metrics: [
          { label: "Package", value: "CV Collection" },
          { label: "Screening", value: "Client-led" },
          { label: "Focus", value: "LMS + teaching" },
          { label: "Pool", value: "Pre-filtered" }
        ],
        gallery: []
      },
      {
        id: "video-editor-pa",
        title: "Video Editor & Personal Assistant",
        client: "Vu Kohler, Business Owner, Vietnam",
        industry: "Creative Agency",
        icon: Video,
        brief: "Vu is a Vietnamese-American business owner running an agency in Vietnam. He came to us first for a video editor, and later returned for a personal assistant. Because both roles supported his day-to-day operations directly, he needed candidates capable of working independently, without close supervision.",
        services: ["CV Collection: we sourced and compiled a pool of qualified candidates for Vu to review and interview on his own timeline."],
        challengesLabel: "Requirements",
        challengeList: [
          "Ability to work independently with minimal oversight",
          "Relevant skill sets for video editing and executive or personal assistant work"
        ],
        challenge: "Two operational roles that had to run with minimal supervision.",
        solution: "CV Collection for both searches, timed around the client's own review process.",
        result: "Nearly 2 years of working together. One of the earliest candidates we sourced has grown into a key member of his core team.",
        metrics: [
          { label: "Tenure", value: "~2 yrs" },
          { label: "Roles Filled", value: "2" },
          { label: "Package", value: "CV Collection" },
          { label: "Outcome", value: "Core team" }
        ],
        gallery: []
      },
      {
        id: "shopify-customer-service",
        title: "Customer Service Reps",
        client: "Shopify store owner, Canada",
        industry: "E-commerce",
        icon: ShoppingBag,
        brief: "A Shopify store owner based in Canada needed to build out a part-time customer service team: 2 representatives covering different time slots to provide coverage outside standard Vietnam business hours.",
        services: ["Sourcing and shortlisting part-time customer service representatives for timezone-split coverage."],
        challengesLabel: "Requirements",
        challengeList: [
          "Prior customer service experience",
          "Familiarity with ecommerce workflows and platforms (Shopify a plus)",
          "Comfort working early mornings or late nights locally to align with Canadian business hours"
        ],
        challenge: "Timezone-flexible ecommerce support coverage without hiring locally in Canada.",
        solution: "Two part-time representatives sourced for split shifts aligned to Canadian business hours.",
        result: "A recurring need we solve for: reliable, timezone-flexible coverage without the overhead of local hiring.",
        metrics: [
          { label: "Reps", value: "2" },
          { label: "Shifts", value: "Split" },
          { label: "Engagement", value: "Part-time" },
          { label: "Market", value: "Canada" }
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
        gallery: [portalShot, vapCalendar, vapTrainer, vapMessages, vaEvent]
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
