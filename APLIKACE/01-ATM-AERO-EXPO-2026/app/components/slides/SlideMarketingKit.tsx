const ITEMS = [
  {
    icon: "✉",
    title: "E-mailový banner",
    subtitle: "Podpis e-mailu",
    note: "Nastaví Pavlína Pařízková",
    highlight: true,
  },
  {
    icon: "👤",
    title: "LinkedIn profil",
    subtitle: "Osobní profil",
    note: "Aktualizace před veletrhem",
  },
  {
    icon: "📲",
    title: "Příspěvky na sítích",
    subtitle: "Social media",
    note: "Připravené posty k publikaci",
  },
  {
    icon: "📧",
    title: "HubSpot sekvence",
    subtitle: "E-mail marketing",
    note: "Pozvánka pro kontakty",
  },
  {
    icon: "📁",
    title: "Marketingové materiály",
    subtitle: "Tiskové podklady",
    note: "Brožury, letáky, produktové listy",
  },
  {
    icon: "📱",
    title: "Tapety na telefon",
    subtitle: "Brand assets",
    note: "Brandované pozadí displeje",
  },
  {
    icon: "🪪",
    title: "Vizitky",
    subtitle: "Fyzické materiály",
    note: "Osobní vizitky s kontaktem",
  },
  {
    icon: "📅",
    title: "HubSpot kalendář",
    subtitle: "Booking link",
    note: "Přímý odkaz pro rezervaci schůzky",
  },
];

export default function SlideMarketingKit() {
  return (
    <div className="flex flex-col flex-1 px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8">
      {/* Slide header */}
      <div className="mb-4 sm:mb-7">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "var(--color-at-red)" }}
        >
          Příprava týmu
        </p>
        <h2 className="text-xl sm:text-3xl font-black" style={{ color: "var(--color-at-white)" }}>
          Co budete mít k dispozici
        </h2>
        <p className="mt-1 text-sm" style={{ color: "var(--color-at-blue-v5)" }}>
          Marketingové podklady a nástroje připravené pro AERO EXPO 2026
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 flex-1">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="rounded-lg p-5 flex flex-col gap-3"
            style={{
              background: item.highlight ? "var(--color-at-blue)" : "var(--color-at-blue-a5)",
              border: item.highlight
                ? "1px solid var(--color-at-red)"
                : "1px solid var(--color-at-blue-v5)",
            }}
          >
            {/* Icon */}
            <span className="text-3xl">{item.icon}</span>

            {/* Title */}
            <div>
              <h3
                className="text-base font-bold leading-tight"
                style={{ color: item.highlight ? "var(--color-at-white)" : "var(--color-at-blue)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs mt-0.5"
                style={{ color: item.highlight ? "var(--color-at-blue-v5)" : "var(--color-at-blue-v3)" }}
              >
                {item.subtitle}
              </p>
            </div>

            {/* Note */}
            <div
              className="mt-auto pt-3"
              style={{ borderTop: "1px solid var(--color-at-blue-v4)" }}
            >
              <p
                className="text-xs leading-snug"
                style={{ color: item.highlight ? "var(--color-at-blue-v5)" : "var(--color-at-blue-v3)" }}
              >
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
