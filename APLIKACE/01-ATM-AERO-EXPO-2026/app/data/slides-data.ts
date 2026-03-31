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
    role: "Part 145 Accountable Manager",
    dates: "22.4.–25.4.",
    days: 4,
    responsibility:
      "Schůzky a networking, vedení tématu AIR TEAM Service+ upgrade, spolugarant kompletního upgrade avioniky.",
    initials: "JP",
  },
  {
    name: "Magdaléna Ševčíková",
    role: "MRO & Avionics Upgrades Director",
    dates: "22.4.–25.4.",
    days: 4,
    responsibility:
      "Odborné schůzky, obsah z veletrhu, networking, spolugarant kompletního upgrade avioniky.",
    initials: "MŠ",
  },
  {
    name: "Vratko Kapuš",
    role: "Sales Account Manager",
    dates: "22.4.",
    days: 1,
    responsibility:
      "Obchodní schůzky a produktová dema zaměřená na experimentální letadla a G3X. PilotStyle a Aerospec – networking.",
    initials: "VK",
  },
  {
    name: "Jakub Dryska",
    role: "Key Account Director",
    dates: "23.4.–25.4.",
    days: 3,
    responsibility:
      "Key account schůzky, follow-up pipeline, koordinace meeting slotů s prioritními zákazníky. G3X, PilotStyle, Aerospec.",
    initials: "JD",
  },
  {
    name: "Lucie Kysučanová",
    role: "HR Business Partner",
    dates: "23.4.–24.4.",
    days: 2,
    responsibility:
      "Podpora týmu na stánku, networking s potenciálními kandidáty, reprezentace AIR TEAM kultury a employer brandingu.",
    initials: "LK",
  },
  {
    name: "Alex Mudrych",
    role: "Business Development",
    dates: "23.4.–24.4.",
    days: 2,
    responsibility:
      "Produkty PilotStyle, Aerospec a Upgrade – podpora lead capture, předání obchodních kontaktů do follow-upu.",
    initials: "AM",
  },
  {
    name: "Jiří Franz",
    role: "Purchasing Manager",
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
  note?: string;
};

export const TRANSPORT: TransportRow[] = [
  {
    name: "Petr Polák",
    route: "Kunovice → Friedrichshafen",
    type: "Firemní letadlo",
    departure: "21. 4. 2026",
    returnDate: "26. 4. 2026",
  },
  {
    name: "Jan Polák",
    route: "Kunovice → Friedrichshafen",
    type: "Firemní letadlo",
    departure: "21. 4. 2026",
    returnDate: "26. 4. 2026",
  },
  {
    name: "Magdaléna Ševčíková",
    route: "Kunovice → Friedrichshafen",
    type: "Firemní letadlo",
    departure: "21. 4. 2026",
    returnDate: "26. 4. 2026",
  },
  {
    name: "Vratko Kapuš",
    route: "Kunovice → Friedrichshafen",
    type: "Firemní letadlo",
    departure: "21. 4. 2026",
    returnDate: "22. 4. 2026",
    note: "Odlétá po 1. dni – dovolená.",
  },
  {
    name: "Jakub Dryska",
    route: "Veverská Bítýška → Friedrichshafen",
    type: "Auto + zpět letadlem",
    departure: "22. 4. 2026",
    returnDate: "26. 4. 2026",
    note: "Odjezd autem, návrat firemním letadlem 26.4.",
  },
  {
    name: "Lucie Kysučanová",
    route: "Veverská Bítýška → Friedrichshafen",
    type: "Auto",
    departure: "22. 4. 2026",
    returnDate: "24. 4. 2026",
  },
  {
    name: "Alex Mudrych",
    route: "Veverská Bítýška → Friedrichshafen",
    type: "Auto",
    departure: "22. 4. 2026",
    returnDate: "24. 4. 2026",
  },
  {
    name: "Jiří Franz",
    route: "Veverská Bítýška → Friedrichshafen",
    type: "Auto",
    departure: "22. 4. 2026",
    returnDate: "24. 4. 2026",
  },
];

export type ChecklistItem = {
  id: string;
  label: string;
};

export const CHECKLIST_TRANSPORT: ChecklistItem[] = [
  {
    id: "flight-kunovice-group",
    label: "Let firemním letadlem – skupina Kunovice (Petr Polák, Jan Polák, Magdaléna Ševčíková, Vratko Kapuš) potvrzen (21.4. i 26.4.)",
  },
  {
    id: "flight-dryska-return",
    label: "Zpáteční let firemním letadlem pro Jakuba Drysku (26.4.) potvrzen",
  },
  {
    id: "transfer-kunovice",
    label: "Transfer z/na letiště Kunovice pro leteckou skupinu zajištěn",
  },
  {
    id: "car-bitiska-1",
    label: "Doprava potvrzena – Jakub Dryska (odjezd autem 21.4., návrat letadlem 26.4.)",
  },
  {
    id: "car-bitiska-2",
    label: "Sdílení auta potvrzeno – Alex Mudrych + Jirka Franz (odjezd 23.4.)",
  },
  {
    id: "parking-aero",
    label: "Parkování na AERO EXPO ověřeno pro příjezd autem",
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
    id: "vratko-airport-transfer",
    label: "Odvoz Vratka na letiště – Memmingen, 23. 4., let FR 4947 odlet 12:15 (booking YQPE2L)",
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
