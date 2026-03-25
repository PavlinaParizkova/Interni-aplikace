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
    icon: "✈",
  },
  {
    number: "02",
    title: "AEROSPEC & PilotStyle",
    subtitle: "Technická avionika · Pilotní lifestyle",
    bullets: [
      "Aerospec – technická značka AIR TEAM: antény, letové přístroje, kompasy, osvětlení, pneumatiky a ventily pro GA trh",
      "PilotStyle – heroická lifestyle značka: funkční pilotní vybavení, příslušenství a produkty s příběhem pro moderní piloty",
      "Přímá prezentace obou značek na stánku pro GA komunitu",
      "Aerospec claim: 'Our tech, your flight' – chytrá a spolehlivá technika do kokpitu",
    ],
    icon: "◈",
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
    icon: "⊞",
  },
];

export default function SlideWhatWePresent() {
  return (
    <div className="flex flex-col flex-1 px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8">
      {/* Slide header */}
      <div className="mb-5 sm:mb-8">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "var(--color-at-red)" }}
        >
          Co prezentujeme
        </p>
        <h2
          className="text-xl sm:text-3xl font-black"
          style={{ color: "var(--color-at-white)" }}
        >
          3 hlavní pilíře prezentace
        </h2>
        <p className="mt-1 text-sm" style={{ color: "var(--color-at-blue-v5)" }}>
          Zaměření stánku a obchodní priority AERO EXPO 2026
        </p>
      </div>

      {/* Pillars grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 flex-1">
        {PILLARS.map((p) => (
          <div
            key={p.number}
            className="rounded-lg p-6 flex flex-col"
            style={{ background: "var(--color-at-blue-a5)", border: "1px solid var(--color-at-blue-v5)" }}
          >
            {/* Number + icon */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-4xl font-black"
                style={{ color: "var(--color-at-blue-v2)" }}
              >
                {p.number}
              </span>
              <span className="text-2xl" style={{ color: "var(--color-at-red)" }}>
                {p.icon}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-lg font-bold leading-tight mb-1"
              style={{ color: "var(--color-at-blue)" }}
            >
              {p.title}
            </h3>
            <p
              className="text-xs font-medium mb-4 pb-4"
              style={{
                color: "var(--color-at-blue-v2)",
                borderBottom: "1px solid var(--color-at-blue-v4)",
              }}
            >
              {p.subtitle}
            </p>

            {/* Bullets */}
            <ul className="space-y-2 flex-1">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-at-red)" }}
                  />
                  <span className="text-sm leading-snug" style={{ color: "var(--color-at-blue)" }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
