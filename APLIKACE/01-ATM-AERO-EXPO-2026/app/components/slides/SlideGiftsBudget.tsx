type BudgetLine = {
  category: string;
  item: string;
  qty: string;
  unitPrice?: string;
  total?: number;
  status: "confirmed" | "tbd" | "missing";
};

const LINES: BudgetLine[] = [
  {
    category: "Rozdávačky",
    item: "Energetický nápoj PilotStyle",
    qty: "100 ks",
    unitPrice: "36 Kč",
    total: 3600,
    status: "confirmed",
  },
  {
    category: "Rozdávačky",
    item: "Energetický nápoj ATM",
    qty: "100 ks",
    unitPrice: "36 Kč",
    total: 3600,
    status: "confirmed",
  },
  {
    category: "Rozdávačky",
    item: "Karamelky",
    qty: "–",
    status: "tbd",
  },
  {
    category: "Rozdávačky",
    item: "Tužky",
    qty: "–",
    status: "tbd",
  },
  {
    category: "Rozdávačky",
    item: "Bloky A5",
    qty: "–",
    status: "tbd",
  },
  {
    category: "Rozdávačky",
    item: "Tašky",
    qty: "–",
    status: "missing",
  },
  {
    category: "Balíček 1",
    item: "Hrnek + podšálek + káva Barahona",
    qty: "30 sad",
    unitPrice: "389 Kč",
    total: 11790,
    status: "confirmed",
  },
  {
    category: "Balíček 2 – VIP",
    item: "Kravata (tmavě modrá, výšivka křídla AIR TEAM)",
    qty: "30 ks",
    unitPrice: "565 Kč",
    total: 16950,
    status: "confirmed",
  },
  {
    category: "Balíček 2 – VIP",
    item: "Spona na kravatu (letadlo, stříbrná)",
    qty: "30 ks",
    unitPrice: "64 Kč",
    total: 1920,
    status: "confirmed",
  },
];

const CONFIRMED_TOTAL = 37860;

const STATUS_CONFIG = {
  confirmed: {
    label: "Potvrzeno",
    color: "var(--color-at-blue-v3)",
    bg: "rgba(35,81,124,0.25)",
  },
  tbd: {
    label: "TBD",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
  },
  missing: {
    label: "CHYBÍ",
    color: "var(--color-at-red)",
    bg: "rgba(213,28,23,0.12)",
  },
};

const CATEGORY_ORDER = ["Rozdávačky", "Balíček 1", "Balíček 2 – VIP"];

export default function SlideGiftsBudget() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    cat,
    lines: LINES.filter((l) => l.category === cat),
    subtotal: LINES.filter((l) => l.category === cat).reduce(
      (s, l) => s + (l.total ?? 0),
      0
    ),
  }));

  return (
    <div className="flex flex-col h-full px-10 py-8">
      {/* Header */}
      <div className="mb-5">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "var(--color-at-red)" }}
        >
          Dárky · Rozpočet
        </p>
        <h2 className="text-3xl font-black" style={{ color: "var(--color-at-white)" }}>
          Sumarizace nákladů na dárky
        </h2>
        <p className="mt-1 text-sm" style={{ color: "var(--color-at-blue-v5)" }}>
          AERO EXPO 2026, Friedrichshafen · 22.–25. 4. 2026
        </p>
      </div>

      {/* Main layout: table + summary side panel */}
      <div className="flex gap-5 flex-1 min-h-0">
        {/* Table */}
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto rounded-xl" style={{ border: "1px solid var(--color-at-blue-v5)" }}>
          {/* Table header */}
          <div
            className="grid grid-cols-[2fr_1fr_3fr_1fr_1fr_1fr] px-4 py-2 text-xs font-bold uppercase tracking-widest sticky top-0"
            style={{
              background: "var(--color-at-blue-v2)",
              color: "var(--color-at-blue-v5)",
              borderBottom: "1px solid var(--color-at-blue-v4)",
            }}
          >
            <span>Kategorie</span>
            <span>Množství</span>
            <span>Položka</span>
            <span className="text-right">Cena / ks</span>
            <span className="text-right">Celkem</span>
            <span className="text-center">Stav</span>
          </div>

          {/* Rows */}
          {grouped.map(({ cat, lines, subtotal }) => (
            <div key={cat}>
              {lines.map((line, i) => {
                const sc = STATUS_CONFIG[line.status];
                return (
                  <div
                    key={line.item}
                    className="grid grid-cols-[2fr_1fr_3fr_1fr_1fr_1fr] px-4 py-2.5 text-xs items-center"
                    style={{
                      background:
                        i % 2 === 0 ? "var(--color-at-blue-v1)" : "var(--color-at-blue-v2)",
                      borderBottom: "1px solid var(--color-at-blue-v4)",
                    }}
                  >
                    <span
                      className="font-semibold"
                      style={{ color: "var(--color-at-blue-v3)" }}
                    >
                      {i === 0 ? cat : ""}
                    </span>
                    <span style={{ color: "var(--color-at-blue-v5)" }}>{line.qty}</span>
                    <span style={{ color: "var(--color-at-white)" }}>{line.item}</span>
                    <span className="text-right" style={{ color: "var(--color-at-blue-v5)" }}>
                      {line.unitPrice ?? "–"}
                    </span>
                    <span
                      className="text-right font-bold"
                      style={{
                        color: line.total ? "var(--color-at-white)" : "var(--color-at-blue-v4)",
                      }}
                    >
                      {line.total ? `${line.total.toLocaleString("cs-CZ")} Kč` : "–"}
                    </span>
                    <span className="flex justify-center">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{ background: sc.bg, color: sc.color }}
                      >
                        {sc.label}
                      </span>
                    </span>
                  </div>
                );
              })}

              {/* Category subtotal */}
              {subtotal > 0 && (
                <div
                  className="grid grid-cols-[2fr_1fr_3fr_1fr_1fr_1fr] px-4 py-1.5 text-xs"
                  style={{
                    background: "var(--color-at-blue-v1)",
                    borderBottom: "2px solid var(--color-at-blue-v3)",
                  }}
                >
                  <span />
                  <span />
                  <span
                    className="text-right col-span-2 font-semibold"
                    style={{ color: "var(--color-at-blue-v4)" }}
                  >
                    Mezisoučet {cat}
                  </span>
                  <span
                    className="text-right font-black"
                    style={{ color: "var(--color-at-blue-v5)" }}
                  >
                    {subtotal.toLocaleString("cs-CZ")} Kč
                  </span>
                  <span />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right summary panel */}
        <div className="flex flex-col gap-4 w-56">
          {/* Confirmed total */}
          <div
            className="rounded-xl p-5 flex flex-col gap-1"
            style={{
              background: "var(--color-at-blue)",
              border: "2px solid var(--color-at-red)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--color-at-red)" }}
            >
              Potvrzené náklady
            </p>
            <p className="text-3xl font-black mt-1" style={{ color: "var(--color-at-white)" }}>
              {CONFIRMED_TOTAL.toLocaleString("cs-CZ")} Kč
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-at-blue-v5)" }}>
              Bez TBD položek (tašky, bloky A5, karamelky, tužky)
            </p>
          </div>

          {/* Breakdown by category */}
          {grouped.map(({ cat, subtotal }) => (
            <div
              key={cat}
              className="rounded-lg px-4 py-3 flex flex-col gap-0.5"
              style={{
                background: "var(--color-at-blue-a5)",
                border: "1px solid var(--color-at-blue-v5)",
              }}
            >
              <p className="text-xs font-bold" style={{ color: "var(--color-at-blue-v3)" }}>
                {cat}
              </p>
              <p className="text-base font-black" style={{ color: "var(--color-at-white)" }}>
                {subtotal > 0 ? `${subtotal.toLocaleString("cs-CZ")} Kč` : "TBD"}
              </p>
            </div>
          ))}

          {/* TBD warning */}
          <div
            className="rounded-lg px-4 py-3 flex flex-col gap-1 mt-auto"
            style={{
              background: "rgba(213,28,23,0.08)",
              border: "1px solid var(--color-at-red)",
            }}
          >
            <p className="text-xs font-bold" style={{ color: "var(--color-at-red)" }}>
              ⚠ Otevřené body
            </p>
            <ul className="text-xs flex flex-col gap-0.5 mt-0.5" style={{ color: "var(--color-at-blue-v5)" }}>
              <li>Tašky – zajistit dodavatele</li>
              <li>Bloky A5 – objednat</li>
              <li>Karamelky, tužky – ceny TBD</li>
              <li>Potvrdit rozpočet s vedením</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
