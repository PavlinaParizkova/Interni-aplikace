export type SlideType =
  | "cover"
  | "intro"
  | "divider"
  | "pillars"
  | "holding"
  | "figures"
  | "locations"
  | "areas"
  | "services"
  | "detail"
  | "strategy"
  | "whyProof"
  | "why"
  | "mission"
  | "thanks"
  | "photo"
  | "quad-detail"
  | "intro-photo";

export interface LabeledText {
  title: string;
  body: string;
  meta?: string;
}

export interface QuadCard {
  eyebrow: string;
  headline: string;
  bullets: string[];
}

export interface HoverCard {
  label: string;
  hoverTitle: string;
  body: string;
  image?: string;
  size?: "tall" | "wide" | "large";
}

export interface LocationItem {
  place: string;
  body: string;
  note?: string;
}

export interface SlideData {
  id: string;
  type: SlideType;
  section: "AIR\u00a0TEAM" | "Portfolio" | "Certification" | "Why Us";
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  body?: string;
  cta?: string;
  image?: string;
  cards?: LabeledText[];
  hoverCards?: HoverCard[];
  locations?: LocationItem[];
  bullets?: string[];
  quadCards?: QuadCard[];
}

export const SLIDE_SECTIONS = ["AIR\u00a0TEAM", "Portfolio", "Certification", "Why Us"] as const;
export type SlideSection = typeof SLIDE_SECTIONS[number];

export const SLIDE_TYPES: SlideType[] = [
  "cover", "intro", "divider", "pillars", "holding", "figures",
  "locations", "areas", "services", "detail", "strategy",
  "whyProof", "why", "mission", "thanks", "photo", "quad-detail", "intro-photo",
];
