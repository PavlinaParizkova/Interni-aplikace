export type EventStatus = "optak" | "optak-cond" | "mimo";

export type VeletrhEvent = {
  name: string;
  location: string;
  date: string;
  size: string;
  type: string;
  status: EventStatus;
  note?: string;
};

export const events2026: VeletrhEvent[] = [
  {
    name: "FIA 2026 — Farnborough International Airshow",
    location: "UK",
    date: "19.–25. 7. 2026",
    size: "6 m²",
    type: "český stánek (CzechTrade)",
    status: "optak-cond",
    note: "Způsobilý jen pokud žádost podána 18. 6. 2026",
  },
  {
    name: "EATS 2026",
    location: "Cascais, Portugal",
    date: "4.–5. 11. 2026",
    size: "10 m²",
    type: "vlastní stánek",
    status: "optak-cond",
    note: "Eligibilita závisí na Profigrantu — konference vs. výstava",
  },
];

export const events2027: VeletrhEvent[] = [
  {
    name: "AERO Friedrichshafen",
    location: "DE",
    date: "14.–17. 4. 2027",
    size: "60 m²",
    type: "vlastní stánek",
    status: "optak",
  },
  {
    name: "AIX Hamburg",
    location: "DE",
    date: "duben 2027",
    size: "12 m²",
    type: "vlastní stánek",
    status: "optak",
  },
  {
    name: "Paris Air Show / Le Bourget",
    location: "FR",
    date: "14.–20. 6. 2027",
    size: "6 m²",
    type: "český stánek (CzechTrade)",
    status: "mimo",
  },
  {
    name: "Dubai Airshow",
    location: "UAE",
    date: "17.–21. 11. 2027",
    size: "6 m²",
    type: "český stánek (CzechTrade)",
    status: "mimo",
  },
  {
    name: "Pilot Expo",
    location: "BE",
    date: "2027",
    size: "6 m²",
    type: "vlastní stánek",
    status: "mimo",
  },
  {
    name: "Rotax Fly In",
    location: "AT",
    date: "srpen 2027",
    size: "6–12 m²",
    type: "vlastní stánek",
    status: "mimo",
  },
];

export const events2028: VeletrhEvent[] = [
  {
    name: "AERO Friedrichshafen",
    location: "DE",
    date: "jaro 2028",
    size: "60 m²",
    type: "vlastní stánek",
    status: "optak",
  },
  {
    name: "AIX Hamburg",
    location: "DE",
    date: "jaro 2028",
    size: "12 m²",
    type: "vlastní stánek",
    status: "optak",
  },
  {
    name: "FIA 2028 — Farnborough International Airshow",
    location: "UK",
    date: "červenec 2028",
    size: "6 m²",
    type: "český stánek (CzechTrade)",
    status: "mimo",
  },
  {
    name: "Pilot Expo",
    location: "BE",
    date: "2028",
    size: "6 m²",
    type: "vlastní stánek",
    status: "mimo",
  },
  {
    name: "Rotax Fly In",
    location: "AT",
    date: "srpen 2028",
    size: "6–12 m²",
    type: "vlastní stánek",
    status: "mimo",
  },
];

export type BudgetRow = {
  name: string;
  year: string;
  size: string;
  pronajem: string;
  stavba: string;
  doprava: string;
  propagace: string;
  celkem: string;
  cond?: boolean;
};

export const budgetOptak: BudgetRow[] = [
  { name: "AERO Friedrichshafen (DE)", year: "2027", size: "60 m²", pronajem: "450", stavba: "600", doprava: "35", propagace: "50", celkem: "1 135" },
  { name: "AERO Friedrichshafen (DE)", year: "2028", size: "60 m²", pronajem: "450", stavba: "600", doprava: "35", propagace: "50", celkem: "1 135" },
  { name: "AIX Hamburg (DE)", year: "2027", size: "12 m²", pronajem: "120", stavba: "200", doprava: "35", propagace: "30", celkem: "385" },
  { name: "AIX Hamburg (DE)", year: "2028", size: "12 m²", pronajem: "120", stavba: "200", doprava: "35", propagace: "30", celkem: "385" },
  { name: "EATS 2026 — Cascais (PT)", year: "2026", size: "10 m²", pronajem: "100", stavba: "80", doprava: "50", propagace: "40", celkem: "270", cond: true },
];

export type MilestoneRow = {
  date: string;
  milestone: string;
  owner: string;
  urgent?: boolean;
};

export const milestones: MilestoneRow[] = [
  { date: "7. 5. 2026", milestone: "Odeslání podkladu Profigrantu (Tomáš Musil)", owner: "Pavlína" },
  { date: "do 14. 5. 2026", milestone: "Schválení shortlistu CEO (Petr Polák) + CFO (David Kratochvíl)", owner: "Pavlína" },
  { date: "15. 5. 2026", milestone: "Vyhlášení výzvy Marketing (MPO)", owner: "sledovat optak.gov.cz" },
  { date: "do 31. 5. 2026", milestone: "Potvrdit rezervaci AERO 2027 + zahájit AERO 2028", owner: "Pavlína" },
  { date: "do 15. 6. 2026", milestone: "Cenové nabídky od pořadatelů a stavitele stánku", owner: "Pavlína" },
  { date: "do 15. 6. 2026", milestone: "CzechTrade — podmínky FIA 2026, Paris 2027, Dubai 2027, FIA 2028", owner: "Pavlína" },
  { date: "do 15. 6. 2026", milestone: "Potvrdit eligibilitu EATS 2026 u Profigrant", owner: "Profigrant" },
  { date: "18. 6. 2026", milestone: "PODAT ŽÁDOST — nutné ihned v den otevření výzvy (FIA 2026 = 19. 7.)", owner: "Profigrant + Pavlína", urgent: true },
  { date: "do 31. 7. 2026", milestone: "Finalizace a podání žádosti", owner: "Profigrant + Pavlína" },
  { date: "Q4 2026 / Q1 2027", milestone: "Schválení žádosti, podpis smlouvy", owner: "—" },
  { date: "do 31. 12. 2028", milestone: "Konec realizace projektu, závěrečné vyúčtování", owner: "Pavlína + David Kratochvíl" },
];
