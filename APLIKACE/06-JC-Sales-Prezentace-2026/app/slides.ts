export type Lang = "cs" | "en";

export type SlideType =
  | "title"
  | "section"
  | "identity"
  | "grid"
  | "service"
  | "process"
  | "segment"
  | "clients"
  | "beforeafter"
  | "contact";

export interface GridCard {
  num: string;
  title: string;
  body: string;
}

export interface ServiceBlock {
  situation: string;
  action: string;
  result: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  text: string;
}

export interface ClientItem {
  title: string;
  desc: string;
}

export interface SlideData {
  id: string;
  type: SlideType;
  photo?: string;           // filename in /photos/
  photos?: string[];        // multiple photos — auto-rotating carousel
  photoBefore?: string;     // for beforeafter type — left (old design)
  photoAfter?: string;      // for beforeafter type — right (new design)
  photoOverlay?: string;    // CSS gradient override
  label?: string;
  headline: string;
  subheadline?: string;
  body?: string;
  cta?: string;
  cards?: GridCard[];
  service?: ServiceBlock;
  steps?: ProcessStep[];
  items?: ClientItem[];
  bullets?: string[];
}

export interface Translations {
  slides: SlideData[];
}

const enSlides: SlideData[] = [

  /* ── 01 COVER ─────────────────────────────────────────────────────────── */
  {
    id: "cover",
    type: "title",
    photo: "slide-01.jpg",
    photoOverlay: "linear-gradient(135deg, rgba(16,37,62,0.88) 0%, rgba(16,37,62,0.65) 100%)",
    label: "AIR\u00a0TEAM · Jet\u00a0Concept",
    headline: "Jet Concept.",
    subheadline: "European Aerospace Excellence.",
    cta: "Premium Cabin & Aircraft Modernization Solutions by AIR\u00a0TEAM Jet\u00a0Concept",
  },

  /* ── 02 WHO WE ARE ─────────────────────────────────────────────────────── */
  {
    id: "whoweare",
    type: "segment",
    photo: "Slide_02.jpg",
    label: "Who We Are",
    headline: "We are AIR\u00a0TEAM.",
    bullets: [
      "European Leadership – A leading specialist in avionics, ISR, and mission systems integration with over 15 years of industry experience.",
      "Integrated Ecosystem – EASA Part 145, Part 21J (DOA), Part 21G (POA), and FAA repair station status.",
      "Proven Growth – Turnover growing from 342M CZK in 2022 to 541M CZK in 2024.",
      "Global Reach – 90% of orders delivered within 48 hours, with a clear strategic focus on expansion into Asian regions.",
      "Middle East & GCC – Strategic commitment with dedicated support.",
    ],
  },

  /* ── 03 MEET US (section) ──────────────────────────────────────────────── */
  {
    id: "meetus",
    type: "section",
    photo: "Slide_03.jpg",
    photoOverlay: "linear-gradient(135deg, rgba(16,37,62,0.80) 0%, rgba(16,37,62,0.55) 100%)",
    headline: "Meet us",
  },

  /* ── 04 FOUR PILLARS ───────────────────────────────────────────────────── */
  {
    id: "pillars",
    type: "grid",
    label: "Four Pillars",
    headline: "Our Pillars.",
    body: "We build on four strategic pillars – Advanced System Integration, Full-Service Care, Smart Supply and Maintenance, which leverage the synergies of the whole holding and connect volume business with long-term partnerships and technological innovation.",
    cards: [
      {
        num: "01",
        title: "Advanced System Integration",
        body: "Turn-key avionics modernization and ISR integration. Specialist in STC development for Middle East fleet requirements.",
      },
      {
        num: "02",
        title: "Full-Service Care / Key Accounts",
        body: "Comprehensive support for OEMs, government clients, and defense primes through long-term partnerships.",
      },
      {
        num: "03",
        title: "Smart Supply",
        body: "AOG Support & Global Logistics Hub. A fast and reliable B2B and B2C aviation supply chain.",
      },
      {
        num: "04",
        title: "Maintenance",
        body: "Expert maintenance and repair of aircraft and precision components.",
      },
    ],
  },

  /* ── 05 ADVANCED INTEGRATION ───────────────────────────────────────────── */
  {
    id: "advancedint",
    type: "segment",
    photo: "Slide_05.jpg",
    label: "Advanced Integration",
    headline: "Avionics & Smart Systems.",
    bullets: [
      "Core Pillar – Our Advanced System Integration division is the technological heart of the holding, focusing on avionics modernization.",
      "Tier-1 Partnerships – Garmin, Collins Aerospace, Honeywell, L3Harris, and Genesys Aerosystems.",
      "Full Lifecycle Support – Architecture design and electrical rewiring to structural modifications and final STC development.",
      "Mission-Ready – Fixed-wing aircraft and helicopters with the latest tactical communication and mission architectures.",
    ],
  },

  /* ── 06 KEY FIGURES ────────────────────────────────────────────────────── */
  {
    id: "keyfigures",
    type: "grid",
    label: "About Us",
    headline: "Key Figures.",
    body: "AIR\u00a0TEAM unites engineering excellence, certified quality, and strong logistics into one integrated aerospace holding.",
    cards: [
      {
        num: "50+",
        title: "Skilled Professionals",
        body: "Employees",
      },
      {
        num: "≈750",
        title: "Mil. of CZK",
        body: "Annual Turnover",
      },
      {
        num: "15+",
        title: "Years",
        body: "In Aerospace Industry",
      },
      {
        num: "EASA",
        title: "Part-145 / 21J / 21G",
        body: "Full certified framework",
      },
    ],
  },

  /* ── 07 JET CONCEPT PORTFOLIO (section) ────────────────────────────────── */
  {
    id: "portfoliosection",
    type: "section",
    photo: "VIP interior_01.jpg",
    photoOverlay: "linear-gradient(135deg, rgba(16,37,62,0.75) 0%, rgba(16,37,62,0.50) 100%)",
    headline: "Jet\u00a0Concept\nPortfolio",
  },

  /* ── 08 UPGRADE HERO ────────────────────────────────────────────────────── */
  {
    id: "upgradehero",
    type: "title",
    photo: "Interior.jpg",
    photoOverlay: "linear-gradient(135deg, rgba(16,37,62,0.82) 0%, rgba(16,37,62,0.60) 100%)",
    headline: "Upgrade Your\nAircraft.\nElevate the\nExperience.",
    subheadline: "Premium Cabin & Aircraft Modernization Solutions by AIR\u00a0TEAM Jet\u00a0Concept",
  },

  /* ── 09 JET CONCEPT IDENTITY ────────────────────────────────────────────── */
  {
    id: "jetconceptid",
    type: "identity",
    photos: ["VIP interior_02.jpg", "VIP interior_03.jpg", "VIP interior_04.jpg", "VIP interior_05.jpg"],
    label: "Jet Concept",
    headline: "See More Value.\nFeel More Comfort.\nFly Better.",
    subheadline: "Transform your aircraft into a next-level experience passengers actively choose.",
    body: "The Manufacturing department produces precision-engineered aircraft interior and exterior components, from auxiliary parts to avionics installation kits.\n\nThe Design department creates innovative concepts and bespoke solutions for aircraft equipment, offering comprehensive services including design, engineering, installation, refurbishment, and overhaul.",
  },

  /* ── 10 WHY UPGRADE ─────────────────────────────────────────────────────── */
  {
    id: "whyupgrade",
    type: "segment",
    photo: "Slide_10.jpg",
    label: "Why Upgrade",
    headline: "Why Upgrade Your Aircraft?",
    body: "Your passengers will feel the difference and return because of it.",
    bullets: [
      "Increase customer satisfaction",
      "Create a modern, premium passenger experience",
      "Strengthen your brand and market position",
      "Extend the life and value of your aircraft",
      "Make your aircraft the preferred choice, not just an option",
    ],
  },

  /* ── 11 CAPABILITIES ────────────────────────────────────────────────────── */
  {
    id: "capabilities",
    type: "grid",
    label: "Capabilities",
    headline: "Integrated Design, Engineering & Manufacturing.",
    cards: [
      {
        num: "01",
        title: "Precision manufacturing",
        body: "Components engineered to exact tolerances.",
      },
      {
        num: "02",
        title: "End-to-end project execution",
        body: "One partner from concept to certified output.",
      },
      {
        num: "03",
        title: "EASA-certified engineering",
        body: "Part 21J (DOA) and Part 21G (POA) approvals.",
      },
      {
        num: "04",
        title: "Fully customized cabin upgrades",
        body: "Bespoke solutions for any aircraft type.",
      },
      {
        num: "05",
        title: "Complete certification support",
        body: "STC development managed in-house, start to finish.",
      },
    ],
  },

  /* ── 12 AVIONICS & SMART SYSTEMS ────────────────────────────────────────── */
  {
    id: "avionics",
    type: "segment",
    photos: [
      "Avionics_componnents_03.jpg",
      "Avionics_componnents.png",
      "Avionics_componnents_02.jpg",
    ],
    label: "Avionics & Smart Systems",
    headline: "Upgrade to Smarter, Safer, More Capable Operations.",
    body: "Smart aircraft. Smart decisions.",
    bullets: [
      "Avionics installation kits",
      "FMS integration",
      "IPSS & ADS-B",
      "Camera systems",
      "IFE concepts",
      "STC development – fast-track tailored for regional regulatory requirements.",
    ],
  },

  /* ── 13 INTERIOR DESIGN ─────────────────────────────────────────────────── */
  {
    id: "interior",
    type: "segment",
    photo: "Slide_13.jpg",
    label: "Interior Design",
    headline: "Cabin Interior Transformation.",
    body: "A cabin that elevates every moment of the journey.",
    bullets: [
      "Full interior redesign",
      "Cabin reconfiguration (LOPA changes)",
      "Refurbishment & modernization",
      "New livery concepts",
      "Custom interior & exterior placards",
    ],
  },

  /* ── 14 PRECISION MANUFACTURING ─────────────────────────────────────────── */
  {
    id: "manufacturing",
    type: "segment",
    photos: [
      "Ancillary parts.jpg",
      "Ancillary parts_02.png",
      "Ancillary parts_03.png.jpg",
      "Ancillary parts_04.jpg",
      "Ancillary parts_05.jpg",
    ],
    label: "Precision Manufacturing",
    headline: "Precision Components for Maximum Quality.",
    body: "Every detail engineered to perfection.",
    bullets: [
      "Engine & antenna covers",
      "Ownership & warning plates",
      "Stowage & installation kits",
      "Ancillary components",
    ],
  },

  /* ── 15 SEAT REFURBISHMENT ───────────────────────────────────────────────── */
  {
    id: "seats",
    type: "segment",
    photo: "Seat rebufbishment.png",
    label: "Seat Refurbishment",
    headline: "Premium Seating, Reinvented.",
    body: "A premium seat creates a premium flight.",
    bullets: [
      "Re-upholstery",
      "Mechanism repairs",
      "Cushion replacement",
      "Frame restoration",
    ],
  },

  /* ── 16 PARTITIONS & CABIN DIVIDERS ─────────────────────────────────────── */
  {
    id: "partitions",
    type: "segment",
    photo: "Windscreens.jpg",
    label: "Partitions & Cabin Dividers",
    headline: "Define the Space, Enhance the Atmosphere.",
    body: "Elegant layout. Maximum passenger comfort. Bespoke cultural adaptation including prayer areas and privacy enhancements.",
    bullets: [
      "Windscreens",
      "Movable class dividers",
      "Custom partitions",
    ],
  },

  /* ── 17 CUSTOM MONUMENTS & GALLEYS ──────────────────────────────────────── */
  {
    id: "monuments",
    type: "segment",
    photos: ["Toaleta_vizu_01.png", "Toaleta_vizu_02.png", "Toaleta_vizu_03.png"],
    label: "Custom Monuments & Galleys",
    headline: "Cabin Structures Designed Around You.",
    body: "Optimize space. Enhance the experience.",
    bullets: [
      "Custom stowage units",
      "Bulkheads & wardrobes",
      "Lavatory upgrades",
      "Crew-rest modules",
      "Custom galleys",
    ],
  },

  /* ── 18 BEFORE / AFTER ───────────────────────────────────────────────────── */
  {
    id: "beforeafter",
    type: "beforeafter",
    headline: "Before & After",
    photoBefore: "Toaleta pred.jpg",
    photoAfter: "Toaleta po.jpg",
  },

  /* ── 19 SOFT MATERIALS & VIP FINISHES ───────────────────────────────────── */
  {
    id: "softmaterials",
    type: "segment",
    photos: ["Curtains_commercial.jpg", "Curtains.jpg", "Baby creadles.jpg", "Literature pockets.png"],
    label: "Soft Materials & VIP Finishes",
    headline: "Finishing Touches That Change Everything.",
    body: "Small details. Big impression. Ultra-lightweight materials to enhance aircraft range.",
    bullets: [
      "Curtains",
      "Seat & CAS materials",
      "Literature pockets",
      "VIP or commercial finish levels",
    ],
  },

  /* ── 20 VIP TURN-KEY SOLUTIONS ───────────────────────────────────────────── */
  {
    id: "vip",
    type: "segment",
    photo: "VIP interior_05.jpg",
    label: "VIP Turn-Key Solutions",
    headline: "Full Aircraft Modernization.",
    body: "You choose the vision. We deliver the aircraft. We deliver complete aircraft transformation from concept to certification.",
    bullets: [
      "Full cabin design",
      "Material & finish selection",
      "LED mood lighting",
      "Camera & IFE systems",
      "Complete refurbishment",
      "Installation & certification",
    ],
  },

  /* ── 21 VALUE PROPOSITION ───────────────────────────────────────────────── */
  {
    id: "value",
    type: "segment",
    photo: "Slide_21.jpg",
    label: "Value Proposition",
    headline: "Your Aircraft Upgraded Beyond Expectations.",
    body: "Your aircraft becomes an experience, not just transportation.",
    bullets: [
      "Minimized Turnaround Time (TAT) – getting your aircraft back in the air faster.",
      "Premium passenger experience",
      "Stronger customer loyalty",
      "Higher operational value",
      "Unique competitive advantage",
      "Modern cabin identity",
    ],
  },

  /* ── 22 TRANSFORM HERO ───────────────────────────────────────────────────── */
  {
    id: "transformhero",
    type: "title",
    photo: "VIP interior_04.jpg",
    photoOverlay: "linear-gradient(135deg, rgba(16,37,62,0.82) 0%, rgba(16,37,62,0.60) 100%)",
    headline: "Transform Your\nAircraft.\nDelight Your\nPassengers.",
    subheadline: "Lead Your Market. Let's create an aircraft people choose because they love flying with you.",
    cta: "Contact us to start the conversation →",
  },

  /* ── 23 WHY US (section) ─────────────────────────────────────────────────── */
  {
    id: "whyussection",
    type: "section",
    photo: "Slide_23.jpg",
    photoOverlay: "linear-gradient(135deg, rgba(16,37,62,0.75) 0%, rgba(16,37,62,0.55) 100%)",
    headline: "Why Us",
  },

  /* ── 24 WHY AIR TEAM ─────────────────────────────────────────────────────── */
  {
    id: "whyairteam",
    type: "grid",
    label: "Why Us",
    headline: "Why AIR\u00a0TEAM.",
    cards: [
      {
        num: "01",
        title: "European Engineering Excellence",
        body: "Full EASA Part 145, 21J, and 21G certifications, ensuring the highest global standards of safety and quality for every project.",
      },
      {
        num: "02",
        title: "Agility & Flexibility",
        body: "Faster response times and more flexible project management than large-scale corporate providers, tailored to individual operator needs.",
      },
      {
        num: "03",
        title: "One-Stop-Shop Solutions",
        body: "A complete ecosystem covering everything from initial interior concepts to final avionics certification — all delivered under one roof.",
      },
      {
        num: "04",
        title: "AOG Ready",
        body: "A robust logistics network ensuring that 90% of critical parts and orders are delivered within 48 hours to minimize aircraft downtime.",
      },
    ],
  },

  /* ── 25 THANK YOU ────────────────────────────────────────────────────────── */
  {
    id: "contact",
    type: "contact",
    headline: "Your Mission.\nOur Technology.",
    body: "Thank you for your time. We look forward to being part of your next upgrade.",
  },
];

export const translations: Record<Lang, Translations> = {
  en: { slides: enSlides },
  cs: { slides: enSlides },
};
