const COLORS = [
  {
    dot: "#D50000",
    gcal: "Tomato",
    prefix: "[CEO]",
    label: "CEO – Petr Polák",
    desc: "Vyžaduje přítomnost CEO. Nelze přesunout bez jeho souhlasu. Petr Polák přítomen 22.–24. 4.",
    labelEn: "Requires CEO presence. Cannot be moved without approval. On-site 22–24 Apr.",
  },
  {
    dot: "#1565C0",
    gcal: "Blueberry",
    prefix: "[STÁNEK]",
    label: "Na stánku",
    desc: "Zákazník nebo partner přichází k nám na stánek AIR TEAM.",
    labelEn: "Customer/partner comes to the AIR TEAM booth.",
  },
  {
    dot: "#0097A7",
    gcal: "Peacock",
    prefix: "[ZÁKAZNÍK]",
    label: "U zákazníka (areál)",
    desc: "Náš tým jde za zákazníkem do jeho stánku v areálu veletrhu.",
    labelEn: "Our team visits the customer's booth within the fair grounds.",
  },
  {
    dot: "#EF6C00",
    gcal: "Tangerine",
    prefix: "[OFF-SITE]",
    label: "Mimo veletrh",
    desc: "Schůzka mimo areál Messe – restaurace, hotel, jiné místo.",
    labelEn: "Meeting outside Messe – restaurant, hotel, other location.",
  },
  {
    dot: "#2E7D32",
    gcal: "Sage",
    prefix: "[INTERNÍ]",
    label: "Interní tým",
    desc: "Briefing, debriefing, koordinace, interní rozhodnutí.",
    labelEn: "Briefing, debriefing, coordination, internal decisions.",
  },
  {
    dot: "#616161",
    gcal: "Graphite",
    prefix: "[SETUP]",
    label: "Setup & logistika",
    desc: "Příprava stánku, transport, příjezd, technická příprava.",
    labelEn: "Booth setup, transport, arrival, technical preparation.",
  },
  {
    dot: "#F9A825",
    gcal: "Banana",
    prefix: "[BUFFER]",
    label: "Volný slot / rezerva",
    desc: "Nepotvrzená schůzka, buffer pro příchozí zájem, holding slot.",
    labelEn: "Unconfirmed meeting, buffer for walk-in interest.",
  },
];

const CHECKLIST = [
  "Přiřazena správná barva dle typu schůzky?",
  "Název obsahuje správný prefix v [ ] závorkách?",
  "V názvu je stručný účel (za druhou pomlčkou)?",
  "Pole Účel schůzky vyplněno v popisu (1–2 věty)?",
  "Vyplněna všechna povinná pole v popisu (zákazník, kontakt, účastníci, místo)?",
  "Pole Dárek vyplněno (Ano / Ne)?",
  "CEO schůzka → potvrdil Jakub Dryska?",
  "Off-site → adresa + kdo zůstává na stánku?",
  "Pozváni všichni relevantní účastníci?",
  "Schůzka v rámci doby přítomnosti všech účastníků?",
];

export default function SlideCalendar() {
  return (
    <div className="flex flex-col flex-1 px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8">
      {/* Header */}
      <div className="mb-4 sm:mb-5">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "var(--color-at-red)" }}
        >
          Logistika · Google Kalendář
        </p>
        <h2 className="text-xl sm:text-3xl font-black" style={{ color: "var(--color-at-white)" }}>
          Metodika schůzek na veletrhu
        </h2>
        <p className="mt-1 text-sm" style={{ color: "var(--color-at-blue-v5)" }}>
          Závazná pravidla pro Google Kalendář · Owner: Jakub Dryska (Kuba) · AERO EXPO 2026, Friedrichshafen 22.–25. 4. 2026
        </p>
      </div>

      {/* Main layout: 3 columns on lg */}
      <div className="flex flex-col lg:flex-row gap-5">

        {/* Color coding table */}
        <div
          className="flex flex-col rounded-xl overflow-x-auto"
          style={{ border: "1px solid var(--color-at-blue-v4)", flex: "1 1 0" }}
        >
          {/* Table head */}
          <div
            className="grid px-4 py-2.5 text-xs font-bold uppercase tracking-widest sticky top-0 min-w-[540px]"
            style={{
              gridTemplateColumns: "24px 110px 120px 1fr",
              gap: "12px",
              background: "var(--color-at-blue)",
              color: "var(--color-at-white)",
              borderBottom: "2px solid var(--color-at-blue-v4)",
            }}
          >
            <span />
            <span>GCal barva</span>
            <span>Prefix</span>
            <span>Popis · Description</span>
          </div>

          {COLORS.map((c, i) => (
            <div
              key={c.gcal}
              className="grid px-4 py-3 text-sm items-start min-w-[540px]"
              style={{
                gridTemplateColumns: "24px 110px 120px 1fr",
                gap: "12px",
                background: i % 2 === 0 ? "var(--color-at-blue-v1)" : "var(--color-at-blue-v2)",
                borderBottom: "1px solid var(--color-at-blue-v3)",
              }}
            >
              {/* Color dot */}
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: c.dot,
                  display: "inline-block",
                  marginTop: 2,
                  flexShrink: 0,
                  boxShadow: `0 0 6px ${c.dot}80`,
                }}
              />
              {/* GCal name */}
              <span className="font-semibold text-xs" style={{ color: "var(--color-at-white)" }}>
                {c.gcal}
              </span>
              {/* Prefix */}
              <span
                className="text-xs font-mono font-bold px-1.5 py-0.5 rounded self-start"
                style={{
                  background: "var(--color-at-blue-v3)",
                  color: "var(--color-at-blue-a5)",
                  whiteSpace: "nowrap",
                }}
              >
                {c.prefix}
              </span>
              {/* Description */}
              <div>
                <span className="font-semibold text-xs" style={{ color: "var(--color-at-white)" }}>
                  {c.label}
                </span>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-at-blue-v5)", lineHeight: 1.4 }}>
                  {c.desc}
                </p>
                <p className="text-xs mt-0.5 italic" style={{ color: "var(--color-at-blue-v4)", lineHeight: 1.4 }}>
                  {c.labelEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right column: naming + fields + CEO + checklist */}
        <div className="flex flex-col gap-4 w-full lg:w-80 flex-shrink-0">

          {/* Naming convention */}
          <div
            className="rounded-xl p-4"
            style={{ background: "var(--color-at-blue-v2)", border: "1px solid var(--color-at-blue-v4)" }}
          >
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
              style={{ color: "var(--color-at-red)" }}
            >
              Formát názvu události
            </p>
            <code
              className="block text-xs rounded px-3 py-2 mb-3 leading-relaxed"
              style={{ background: "var(--color-at-blue-v3)", color: "var(--color-at-blue-a5)" }}
            >
              [PREFIX] Firma – Účel – Zodpovídá
            </code>
            <p className="text-xs mb-1" style={{ color: "var(--color-at-blue-v5)" }}>
              Příklady · Examples:
            </p>
            <div className="flex flex-col gap-1">
              {[
                { color: "#D50000", text: "[CEO] Lufthansa Technik – Avionika – Petr P. + Kuba" },
                { color: "#1565C0", text: "[STÁNEK] AviaTech GmbH – Panely – Vratko" },
                { color: "#0097A7", text: "[ZÁKAZNÍK] Garmin EMEA – Partner update – Magdaléna" },
                { color: "#EF6C00", text: "[OFF-SITE] Dinner Zeppelin – Networking – Jan" },
                { color: "#2E7D32", text: "[INTERNÍ] Ranní debriefing – Koordinace tým 08:00" },
              ].map((ex) => (
                <div key={ex.text} className="flex items-start gap-2">
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: ex.color,
                      flexShrink: 0,
                      marginTop: 4,
                    }}
                  />
                  <span className="text-xs font-mono" style={{ color: "var(--color-at-blue-v5)", lineHeight: 1.5 }}>
                    {ex.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Required description fields */}
          <div
            className="rounded-xl p-4"
            style={{ background: "var(--color-at-blue-v2)", border: "1px solid var(--color-at-blue-v4)" }}
          >
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
              style={{ color: "var(--color-at-red)" }}
            >
              Povinná pole v popisu
            </p>
            <div className="flex flex-col gap-1">
              {[
                { field: "Zákazník / firma", required: true },
                { field: "Kontaktní osoba", required: true },
                { field: "Účel schůzky", required: true },
                { field: "Tým AIR TEAM (účastníci)", required: true },
                { field: "Místo (stánek č. / restaurace)", required: true },
                { field: "Podklady / demo", required: false },
                { field: "Dárek: Ano / Ne + kdo zajišťuje", required: false },
                { field: "Poznámky", required: false },
              ].map((f) => (
                <div key={f.field} className="flex items-center gap-2">
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: f.required ? "var(--color-at-red)" : "var(--color-at-blue-v4)",
                      flexShrink: 0,
                      minWidth: 12,
                    }}
                  >
                    {f.required ? "✱" : "○"}
                  </span>
                  <span className="text-xs" style={{ color: f.required ? "var(--color-at-white)" : "var(--color-at-blue-v5)" }}>
                    {f.field}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CEO rules */}
          <div
            className="rounded-xl p-4"
            style={{ background: "rgba(213,0,0,0.08)", border: "1px solid rgba(213,0,0,0.3)" }}
          >
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
              style={{ color: "#D50000" }}
            >
              CEO schůzky – Petr Polák
            </p>
            <div className="flex flex-col gap-1.5 text-xs" style={{ color: "var(--color-at-blue-v5)" }}>
              <span>📅 Přítomnost: <strong style={{ color: "var(--color-at-white)" }}>22. 4. – 24. 4.</strong></span>
              <span>⏱ Slot min.: <strong style={{ color: "var(--color-at-white)" }}>30 min + 15 min buffer</strong></span>
              <span>📊 Max: <strong style={{ color: "var(--color-at-white)" }}>2 dop. + 2 odp. = 4/den</strong></span>
              <span>✅ Schválení: <strong style={{ color: "var(--color-at-white)" }}>vždy Jakub Dryska</strong></span>
              <span>⚡ Priorita: <strong style={{ color: "var(--color-at-white)" }}>nejvyšší – nikdy nepřesouvat</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist strip */}
      <div
        className="mt-4 rounded-xl p-4"
        style={{ background: "var(--color-at-blue-v2)", border: "1px solid var(--color-at-blue-v4)" }}
      >
        <p
          className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
          style={{ color: "var(--color-at-red)" }}
        >
          Checklist před přidáním schůzky do kalendáře
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {CHECKLIST.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span
                className="text-xs font-mono font-bold flex-shrink-0"
                style={{ color: "var(--color-at-blue-v4)", marginTop: 1 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-xs" style={{ color: "var(--color-at-blue-v5)", lineHeight: 1.4 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* HubSpot footer note */}
      <div className="mt-3 flex items-center gap-3">
        <div
          className="flex-shrink-0 rounded px-2 py-1 text-xs font-bold tracking-wide uppercase"
          style={{ background: "rgba(255,122,0,0.15)", color: "#FF7A00" }}
        >
          HubSpot
        </div>
        <p className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>
          Každá schůzka z GCal → HubSpot záznam do 48 h · Tentýž den do 20:00 zalogovat výsledek a A / B / C lead · Jakub kontroluje záznamy každý večer.
          <span className="italic ml-1" style={{ color: "var(--color-at-blue-v3)" }}>
            Every GCal meeting → HubSpot record within 48 h.
          </span>
        </p>
      </div>
    </div>
  );
}
