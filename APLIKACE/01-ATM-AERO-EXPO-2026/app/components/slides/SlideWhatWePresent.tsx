import { EXHIBITOR_BADGE_DRIVE_URL, EXHIBITOR_BADGE_DRIVE_URL_2 } from "../../lib/site";

const PILLARS = [
  {
    number: "01",
    title: "Komplexní upgrade avioniky",
    subtitle: "Engineering · Instalace · Certifikace",
    bullets: [
      "Návrh a engineering modernizace přístrojové desky",
      "Fyzická instalace avioniky ve vlastním hangáru LKKU",
      "Certifikační podpora – EASA Part 145 & DOA (Part 21J)",
      "Kompletní service+ balíčky od návrhu po předání letadla",
    ],
  },
  {
    number: "02",
    title: "AEROSPEC & PilotStyle",
    subtitle: "Technická avionika · Pilotní lifestyle",
    bullets: [
      "Aerospec – antény, letové přístroje, kompasy, osvětlení, pneumatiky a ventily pro GA trh",
      "PilotStyle – funkční pilotní vybavení, příslušenství a produkty s příběhem",
      "Přímá prezentace obou značek na stánku pro GA komunitu",
      "Aerospec claim: 'Our tech, your flight'",
    ],
  },
  {
    number: "03",
    title: "G3X pro experimentální letadla",
    subtitle: "Demo scénáře · Panel na míru · Self-install",
    bullets: [
      "Panelová řešení na míru pro kit-buildery a experimentální typy",
      "Praktická demo scénáře G3X Touch v reálném prostředí",
      "Konzultace self-install varianty pro EMEA trh",
      "AIR TEAM jako EMEA centrum pro G3X homebuilders",
    ],
  },
];

type ContactPerson = {
  name: string;
  detail: string | null;
  phone: string | null;
  /** Jedna položka (ostatní kontakty) */
  linkHref?: string;
  linkLabel?: string;
  /** Více odkazů (např. vystavovatelské průkazy) – má přednost před linkHref */
  links?: { href: string; label: string }[];
};

const CONTACTS: { role: string; emphasize?: boolean; people: ContactPerson[] }[] = [
  {
    role: "Organizátor eventu",
    people: [
      { name: "Julia Albrecht", detail: "Projectmanager exhibitors, AERO Friedrichshafen", phone: "+49 7541 95995-12" },
    ],
  },
  {
    role: "Realizátor stánku – MLT",
    people: [
      { name: "Michal Weiss", detail: "jednatel", phone: "777 074 800" },
      { name: "Leoš Netušil", detail: "technické věci", phone: "+420 732 138 307" },
      { name: "Bartůněk", detail: "stánek", phone: "+420 777 074 808" },
    ],
  },
  {
    role: "Interní eskalace",
    people: [
      { name: "Pavlína Pařízková", detail: "Marketing", phone: "+420 773 902 290" },
      { name: "Petr Polák", detail: "Sales", phone: null },
    ],
  },
  {
    role: "Logistika",
    people: [
      { name: "Jan Zerák", detail: null, phone: null },
    ],
  },
  {
    role: "Vystavovatelské průkazy",
    emphasize: true,
    people: [
      {
        name: "",
        detail: null,
        phone: null,
        links: [
          { href: EXHIBITOR_BADGE_DRIVE_URL, label: "Stáhnout badge" },
          { href: EXHIBITOR_BADGE_DRIVE_URL_2, label: "Stáhnout druhý podklad" },
        ],
      },
    ],
  },
];

export default function SlideWhatWePresent() {
  return (
    <div className="flex flex-col flex-1 px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 overflow-y-auto">
      {/* Slide header */}
      <div className="mb-4 sm:mb-5">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-1"
          style={{ color: "var(--color-at-white)" }}
        >
          Co prezentujeme
        </p>
        <h2
          className="text-xl sm:text-2xl font-black"
          style={{ color: "var(--color-at-white)" }}
        >
          3 hlavní pilíře prezentace
        </h2>
        <p className="mt-0.5 text-xs" style={{ color: "var(--color-at-blue-v5)" }}>
          Zaměření stánku a obchodní priority AERO EXPO 2026
        </p>
      </div>

      {/* Compact pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {PILLARS.map((p) => (
          <div
            key={p.number}
            className="rounded-lg p-4 flex flex-col"
            style={{ background: "var(--color-at-blue-a5)", border: "1px solid var(--color-at-blue-v5)" }}
          >
            <div className="flex items-baseline gap-2 mb-1.5">
              <span
                className="text-2xl font-black leading-none"
                style={{ color: "var(--color-at-blue-v2)" }}
              >
                {p.number}
              </span>
              <h3
                className="text-sm font-bold leading-tight"
                style={{ color: "var(--color-at-blue)" }}
              >
                {p.title}
              </h3>
            </div>
            <p
              className="text-xs font-medium mb-2.5 pb-2.5"
              style={{
                color: "var(--color-at-blue-v2)",
                borderBottom: "1px solid var(--color-at-blue-v4)",
              }}
            >
              {p.subtitle}
            </p>
            <ul className="space-y-1 flex-1">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-at-red)" }}
                  />
                  <span className="text-xs leading-snug" style={{ color: "var(--color-at-blue)" }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contacts */}
      <div>
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
          style={{ color: "var(--color-at-white)" }}
        >
          Klíčové kontakty
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {CONTACTS.map((group) => (
            <div
              key={group.role}
              className={`rounded-xl min-w-0 ${group.emphasize ? "p-4" : "p-3"}`}
              style={{
                background: group.emphasize ? "var(--color-at-white)" : "var(--color-at-blue-a5)",
                border: group.emphasize
                  ? "2px solid var(--color-at-red)"
                  : "1px solid var(--color-at-blue-v4)",
                boxShadow: group.emphasize
                  ? "0 6px 20px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(220, 38, 38, 0.15)"
                  : undefined,
              }}
            >
              {group.emphasize ? (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg leading-none" aria-hidden>
                    🪪
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded"
                    style={{
                      background: "var(--color-at-red)",
                      color: "var(--color-at-white)",
                    }}
                  >
                    Důležité
                  </span>
                </div>
              ) : null}
              <p
                className={`font-bold uppercase tracking-wide mb-2 ${group.emphasize ? "text-sm" : "text-xs"}`}
                style={{ color: group.emphasize ? "var(--color-at-blue)" : "var(--color-at-blue-v3)" }}
              >
                {group.role}
              </p>
              <div className="space-y-2">
                {group.people.map((person, idx) => {
                  const linkItems =
                    person.links?.length ?
                      person.links
                    : person.linkHref ?
                      [{ href: person.linkHref, label: person.linkLabel ?? "Odkaz" }]
                    : [];

                  return (
                    <div key={`${group.role}-${idx}`}>
                      {person.name ? (
                        <p className="text-sm font-semibold" style={{ color: "var(--color-at-blue)" }}>
                          {person.name}
                        </p>
                      ) : null}
                      {person.detail && (
                        <p
                          className={
                            person.name ? "text-xs" : group.emphasize ? "text-sm leading-relaxed font-medium" : "text-sm leading-snug"
                          }
                          style={{ color: "var(--color-at-blue)" }}
                        >
                          {person.detail}
                        </p>
                      )}
                      {person.phone && (
                        <p className="text-xs font-medium" style={{ color: "var(--color-at-blue-v3)" }}>
                          {person.phone}
                        </p>
                      )}
                      {linkItems.length > 0 ? (
                        <div className={`flex flex-col ${group.emphasize ? "gap-2.5 mt-3" : "gap-2 mt-2"}`}>
                          {linkItems.map((link, li) => (
                            <a
                              key={`${link.href}-${li}`}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full text-center rounded-lg py-2.5 px-3 text-xs font-bold no-underline transition-opacity hover:opacity-92 active:opacity-85"
                              style={
                                li === 0 ?
                                  {
                                    background: "var(--color-at-red)",
                                    color: "var(--color-at-white)",
                                  }
                                : {
                                    background: "transparent",
                                    color: "var(--color-at-red)",
                                    border: "2px solid var(--color-at-red)",
                                  }
                              }
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
