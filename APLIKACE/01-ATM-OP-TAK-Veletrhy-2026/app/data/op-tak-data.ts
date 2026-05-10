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
  { name: "AERO Friedrichshafen (DE)", year: "2027", size: "60 m²", pronajem: "300", stavba: "500", doprava: "35", propagace: "50", celkem: "885" },
  { name: "AERO Friedrichshafen (DE)", year: "2028", size: "60 m²", pronajem: "300", stavba: "500", doprava: "35", propagace: "50", celkem: "885" },
  { name: "AIX Hamburg (DE)", year: "2027", size: "12 m²", pronajem: "280", stavba: "200", doprava: "35", propagace: "30", celkem: "545" },
  { name: "AIX Hamburg (DE)", year: "2028", size: "12 m²", pronajem: "280", stavba: "200", doprava: "35", propagace: "30", celkem: "545" },
  { name: "EATS 2026 — Cascais (PT)", year: "2026", size: "10 m²", pronajem: "100", stavba: "80", doprava: "50", propagace: "40", celkem: "270", cond: true },
];

export type EligibleExpenseCategory = {
  letter: string;
  name: string;
  items: string[];
  notItems?: string[];
  limit: string;
  note?: string;
  share?: string;
};

export const eligibleExpenses: EligibleExpenseCategory[] = [
  {
    letter: "A",
    name: "Pronájem výstavní plochy",
    items: [
      "Plocha podle m², registrační poplatek pořadateli",
      "Vystavovatelský průkaz, přihlašovací poplatky",
      "Povinné pojištění výstavní plochy",
    ],
    limit: "bez limitu",
    share: "40–50 % způsobilých výdajů",
    note: "Faktura pořadatele nebo CzechTrade + smlouva",
  },
  {
    letter: "B",
    name: "Stavba a vybavení stánku",
    items: [
      "Grafický návrh a výkresová dokumentace",
      "Výroba / pronájem stánkové konstrukce",
      "Nábytek, AV technika (monitory, plátna, tablety)",
      "Připojení k sítím (elektřina, voda, internet od pořadatele)",
      "Montáž, demontáž, úklid — práce dodavatelské firmy",
    ],
    notItems: [
      "Interní grafická práce zaměstnance",
      "Vlastní vybavení firmy přivezené na stánek",
      "Práce vlastních zaměstnanců",
    ],
    limit: "bez limitu",
    share: "30–45 % způsobilých výdajů",
  },
  {
    letter: "C",
    name: "Doprava exponátů (externím dopravcem)",
    items: [
      "Přeprava exponátů a stánkových prvků tam i zpět",
      "Celní poplatky (UK po Brexitu, UAE)",
      "Balné a manipulace — součást faktury dopravce",
    ],
    notItems: [
      "Vlastní doprava firemním vozidlem — způsobilá NENÍ",
      "Cestovné osob (letenky, vlak, taxi)",
    ],
    limit: "bez limitu",
    note: "Nutná faktura od externího přepravce",
  },
  {
    letter: "D",
    name: "Propagační materiály + překlady",
    items: [
      "Letáky, brožury, katalogy, plakáty, bannery, rollup",
      "Digitální prezentace (tvorba dodavatelem)",
      "Překlady tiskových materiálů do cizích jazyků",
      "Reklamní předměty s logem pro návštěvníky",
    ],
    notItems: ["Česká média a inzerce v ČR nejsou způsobilá"],
    limit: "bez limitu",
    note: "Materiály musí prokazatelně sloužit propagaci na způsobilém veletrhu",
  },
  {
    letter: "E",
    name: "Videoprezentace",
    items: [
      "Produkce videa pro prezentaci na veletrhu",
      "Postprodukce: střih, grafika, titulky, lokalizace",
    ],
    limit: "max. 300 tis. Kč / projekt",
    note: "Video může být sdíleno na více veletrzích — způsobilé jednou",
  },
  {
    letter: "F",
    name: "Inzerce v zahraničním tisku",
    items: [
      "Placená inzerce v zahraničních mediálních titulech",
      "PR placement v zahraničních médiích",
      "Katalogová inzerce ve veletržním průvodci pořadatele",
    ],
    notItems: ["Česká média nejsou způsobilá"],
    limit: "max. 500 tis. Kč / projekt",
  },
];

export type MimoRow = {
  name: string;
  year: string;
  size: string;
  type: string;
  cost: string;
  reasons: string[];
};

export const mimoOptak: MimoRow[] = [
  {
    name: "Paris Air Show / Le Bourget (FR)",
    year: "2027",
    size: "6 m²",
    type: "český stánek",
    cost: "~120 tis. Kč",
    reasons: [
      "Limit 5 akcí vyčerpán (AERO ×2, AIX ×2, EATS 2026)",
      "Faktura CzechTrade — způsobilost nepotvrzena (otázka č. 5)",
    ],
  },
  {
    name: "Dubai Airshow (UAE)",
    year: "2027",
    size: "6 m²",
    type: "český stánek",
    cost: "~130 tis. Kč",
    reasons: [
      "Limit 5 akcí vyčerpán",
      "Faktura CzechTrade — způsobilost nepotvrzena",
      "Mimo EU/EHP — vyšší cestovné (neoprávněný výdaj), nižší efektivita dotace",
    ],
  },
  {
    name: "Pilot Expo (BE)",
    year: "2027",
    size: "6 m²",
    type: "vlastní stánek",
    cost: "~110 tis. Kč",
    reasons: [
      "Limit 5 akcí vyčerpán",
      "Nízké způsobilé výdaje (~110 tis.) → dotace ~55 tis. Kč — neúměrné administrativní zátěži",
    ],
  },
  {
    name: "Rotax Fly In (AT)",
    year: "2027",
    size: "6–12 m²",
    type: "vlastní stánek",
    cost: "~150–250 tis. Kč",
    reasons: [
      "Limit 5 akcí vyčerpán",
      "Charakter akce: fly-in shromáždění, nikoli obchodní veletrh — eligibilita nejistá",
      "Variabilní plocha komplikuje cenové nabídky pro žádost",
    ],
  },
  {
    name: "FIA 2028 — Farnborough (UK)",
    year: "2028",
    size: "6 m²",
    type: "český stánek",
    cost: "~120 tis. Kč",
    reasons: [
      "Limit 5 akcí vyčerpán",
      "Faktura CzechTrade — způsobilost nepotvrzena",
      "UK mimo EU po Brexitu — celní odbavení + vyšší logistická náročnost",
    ],
  },
  {
    name: "Pilot Expo (BE)",
    year: "2028",
    size: "6 m²",
    type: "vlastní stánek",
    cost: "~110 tis. Kč",
    reasons: [
      "Limit 5 akcí vyčerpán",
      "Nízké způsobilé výdaje — slot v grantu vyhrazen pro AERO 60 m²",
    ],
  },
  {
    name: "Rotax Fly In (AT)",
    year: "2028",
    size: "6–12 m²",
    type: "vlastní stánek",
    cost: "~150–250 tis. Kč",
    reasons: [
      "Limit 5 akcí vyčerpán",
      "Charakter akce: fly-in, nikoli formální obchodní veletrh — eligibilita nejistá",
    ],
  },
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
