export const EVENT = {
  name: "AIR TEAM × AERO EXPO 2026",
  subtitle: "Kompletní informace o veletrhu",
  dates: "22.–25. 4. 2026",
  location: "Friedrichshafen, Německo",
  owner: "Pavlína Pařízková",
  created: "2026-03-24",
};

export type TeamMember = {
  name: string;
  role: string;
  dates: string;
  days: number;
  responsibility: string;
  initials: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Petr Polák",
    role: "Chief Executive Officer",
    dates: "22.4.–25.4.",
    days: 4,
    responsibility:
      "Strategické schůzky s klíčovými partnery, executive networking, eskalace obchodních příležitostí.",
    initials: "PP",
  },
  {
    name: "Jan Polák",
    role: "Sales Manager & MRO Accountable Manager",
    dates: "22.4.–25.4.",
    days: 4,
    responsibility:
      "Schůzky a networking, vedení tématu AIR TEAM Service+ upgrade + G3X, spolugarant kompletního upgrade avioniky.",
    initials: "JP",
  },
  {
    name: "Magdaléna Ševčíková",
    role: "Sales Manager, MRO",
    dates: "22.4.–25.4.",
    days: 4,
    responsibility:
      "Odborné schůzky, obsah z veletrhu, networking, spolugarant kompletního upgrade avioniky.",
    initials: "MŠ",
  },
  {
    name: "Vratko Kapuš",
    role: "Sales Manager, OEMs & Avionics",
    dates: "22.4.",
    days: 1,
    responsibility:
      "Obchodní schůzky a produktová dema zaměřená na experimentální letadla a G3X (panelová řešení na míru, self-install varianta), PilotStyle a Aerospec – networking a nabídka produktů.",
    initials: "VK",
  },
  {
    name: "Jakub Dryska",
    role: "Key Account Manager, Aircraft Parts",
    dates: "23.4.–25.4.",
    days: 3,
    responsibility:
      "Key account schůzky, follow-up pipeline, koordinace meeting slotů s prioritními zákazníky. G3X, PilotStyle, Aerospec.",
    initials: "JD",
  },
  {
    name: "Lucie Kysučanová",
    role: "People & Culture Partner",
    dates: "23.4.–24.4.",
    days: 2,
    responsibility:
      "Podpora týmu na stánku, networking s potenciálními kandidáty, reprezentace AIR TEAM kultury a employer brandingu.",
    initials: "LK",
  },
  {
    name: "Alex Mudrych",
    role: "Sales Manager, DOA & Interior",
    dates: "23.4.–24.4.",
    days: 2,
    responsibility:
      "Produkty PilotStyle, Aerospec a Upgrade – podpora lead capture během ukázek, předání obchodních kontaktů do follow-upu.",
    initials: "AM",
  },
  {
    name: "Jiří Franz",
    role: "Procurement Manager",
    dates: "23.4.–24.4.",
    days: 2,
    responsibility:
      "Navázání kontaktů s dodavateli avioniky a leteckého vybavení, zmapování nabídky klíčových technologických partnerů.",
    initials: "JF",
  },
];

export type DayEntry = {
  label: string;
  date: string;
  people: string[];
};

export const DAYS: DayEntry[] = [
  {
    label: "Den 1",
    date: "22. 4. 2026",
    people: ["Petr Polák", "Jan Polák", "Magdaléna Ševčíková", "Vratko Kapuš"],
  },
  {
    label: "Den 2",
    date: "23. 4. 2026",
    people: [
      "Petr Polák",
      "Jan Polák",
      "Magdaléna Ševčíková",
      "Jakub Dryska",
      "Lucie Kysučanová",
      "Alex Mudrych",
      "Jiří Franz",
    ],
  },
  {
    label: "Den 3",
    date: "24. 4. 2026",
    people: [
      "Petr Polák",
      "Jan Polák",
      "Magdaléna Ševčíková",
      "Jakub Dryska",
      "Lucie Kysučanová",
      "Alex Mudrych",
      "Jiří Franz",
    ],
  },
  {
    label: "Den 4",
    date: "25. 4. 2026",
    people: [
      "Petr Polák",
      "Jan Polák",
      "Magdaléna Ševčíková",
      "Jakub Dryska",
    ],
  },
];

export type TransportRow = {
  name: string;
  route: string;
  type: string;
  departure: string;
  returnDate: string;
  status: string;
};

export const TRANSPORT: TransportRow[] = [
  {
    name: "Vratko Kapuš, Magdaléna Ševčíková, Jan Polák",
    route: "Kunovice/Brno → Friedrichshafen",
    type: "Auto",
    departure: "21. 4. 2026, 8:00",
    returnDate: "–",
    status: "potvrdit",
  },
  {
    name: "Vratko Kapuš (zpět)",
    route: "Friedrichshafen → Kunovice/Brno",
    type: "Auto",
    departure: "22. 4. 2026 (po skončení Dne 1)",
    returnDate: "22. 4. 2026",
    status: "Kdo ho vezme na vlak?",
  },
  {
    name: "Petr Polák",
    route: "řeší si sám",
    type: "řeší si sám",
    departure: "řeší si sám",
    returnDate: "řeší si sám",
    status: "potvrzeno",
  },
  {
    name: "Jakub Dryska, Lucie Kysučanová, Jirka Franz, Alex Mudrych",
    route: "Veverská Bítýška → Friedrichshafen",
    type: "Auto",
    departure: "22. 4. 2026",
    returnDate: "24. 4. 2026",
    status: "potvrdit",
  },
];

export type ChecklistItem = {
  id: string;
  label: string;
};

export const CHECKLIST_TRANSPORT: ChecklistItem[] = [
  {
    id: "car-kunovice-group",
    label: "Auto – skupina Kunovice/Brno (Vratko Kapuš, Magdaléna Ševčíková, Jan Polák) potvrzeno (odjezd 21. 4., 8:00)",
  },
  {
    id: "car-vratko-return",
    label: "Vratko Kapuš – zpáteční cesta 22. 4. po Dni 1 potvrzena (kdo ho vezme na vlak?)",
  },
  {
    id: "car-petr-own",
    label: "Petr Polák – doprava potvrzena (řeší si sám)",
  },
  {
    id: "car-bitiska-group",
    label: "Auto – skupina Veverská Bítýška (Jakub Dryska, Lucie Kysučanová, Jirka Franz, Alex Mudrych) potvrzeno (odjezd 22. 4., návrat 24. 4.)",
  },
  {
    id: "parking-aero",
    label: "Parkování na AERO EXPO ověřeno pro obě auta",
  },
];

export const CHECKLIST_ATTENDANCE: ChecklistItem[] = [
  {
    id: "registration-all",
    label: "Všichni účastníci mají vyřešenou registraci / vstup / badge",
  },
  {
    id: "accommodation-all",
    label: "Všichni účastníci mají potvrzené ubytování",
  },
  {
    id: "dates-match",
    label: "U všech osob sedí datum přítomnosti s rezervacemi a harmonogramem",
  },
  {
    id: "meetings-booked",
    label: "Každý obchodník má min. 4 schůzky domluvené před odjezdem (dle SOP)",
  },
  {
    id: "vratko-return",
    label: "Vratko Kapuš – zpáteční odvoz 22. 4. po skončení Dne 1 zajištěn",
  },
];

export const CHECKLIST_DRESSCODE: ChecklistItem[] = [
  {
    id: "dc-sizes-all",
    label: "Všichni členové týmu potvrdili velikosti polokošile i mikiny (viz slide Dress Code → Výběr velikostí)",
  },
  {
    id: "dc-counts-confirmed",
    label: "Celkový počet kusů per velikost zkontrolován a připraven pro objednávku",
  },
  {
    id: "dc-print-approved",
    label: "Grafické podklady pro potisk / výšivku schváleny a předány dodavateli (logo AIR TEAM přední, text záda)",
  },
  {
    id: "dc-order-polo-men",
    label: "Objednáno u Malfini Premium – Collar Up 256 (pánská polokošile, bílá #00) v potvrzených velikostech",
  },
  {
    id: "dc-order-bomber-men",
    label: "Objednáno u Malfini Premium – Bomber 453 (pánská mikina na zip, námořní modrá #02) v potvrzených velikostech",
  },
  {
    id: "dc-order-polo-women",
    label: "Objednáno u Malfini Premium – Collar Up 257 (dámská polokošile, bílá #00) v potvrzených velikostech",
  },
  {
    id: "dc-order-bomber-women",
    label: "Objednáno u Malfini Premium – Bomber 454 (dámská mikina na zip, námořní modrá #02) v potvrzených velikostech",
  },
  {
    id: "dc-order-lucie-polo",
    label: "Objednáno pro Lucii Kysučanovou – Malfini Action 152 (námořní modrá #02) v potvrzené velikosti",
  },
  {
    id: "dc-order-lucie-hoodie",
    label: "Objednáno pro Lucii Kysučanovou – mikina s nabíranými rukávy BP3869 (Bezpotisku.cz, černá, 697 Kč/ks) v potvrzené velikosti",
  },
  {
    id: "dc-delivery-deadline",
    label: "Termín výroby a dodání potvrzen – oblečení dorazí nejpozději 4 týdny před veletrhem (25. 3. 2026)",
  },
  {
    id: "dc-delivery-check",
    label: "Dodávka zkontrolována – správné velikosti, správný potisk, správný počet kusů",
  },
  {
    id: "dc-distribution",
    label: "Oblečení distribuováno všem členům týmu před odjezdem na veletrh",
  },
];

export const LINKS = [
  {
    label: "SOP – Eventy 2026",
    href: "AIR-TEAM/03-procesy-sop/10-eventy/10-eventy-SOP-2026.md",
    description: "Standardní operační postup pro veletrhy",
  },
  {
    label: "ClickUp šablona – Eventy",
    href: "TEMPLATE/ClickUp/clickup-template-eventy-2026.md",
    description: "Šablona tasků a milníků pro eventy",
  },
  {
    label: "Šablona vyhodnocení veletrhu",
    href: "TEMPLATE/vyhodnoceni-veletrhu.md",
    description: "Template pro post-event reporting",
  },
  {
    label: "Google Drive – Eventy",
    href: "https://drive.google.com/drive/folders/1wUnD4hTjbzkhQKIIA9x6ybgdEvyIa-RR",
    description: "Sdílená složka s materiály na veletrh",
    external: true,
  },
  {
    label: "Google Kalendář – AERO EXPO 2026",
    href: "https://calendar.google.com/calendar/u/0?cid=Y184OTkxNWJlMTQ4ZWJkMmQzYTczYWU3OGQyZWFlMzY5MDcxMzU0OTM1ODU5Y2MzMjhjYzI0OTY3MWRmOWQ4MDJhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
    description: "Sdílený kalendář schůzek a programu – přidat do Google Kalendáře",
    external: true,
  },
];
