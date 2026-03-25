type ClothingRow = {
  item: string;
  model: string;
  gender: "Muži" | "Ženy";
  qty: number;
  unitPrice: number;
};

const ROWS: ClothingRow[] = [
  { item: "Polo tričko",  model: "Collar Up 257", gender: "Muži",  qty: 6, unitPrice: 434 },
  { item: "Mikina",       model: "Bomber 454",    gender: "Muži",  qty: 6, unitPrice: 650 },
  { item: "Polo tričko",  model: "Collar Up 257", gender: "Ženy",  qty: 2, unitPrice: 434 },
  { item: "Mikina",       model: "Bomber 454",    gender: "Ženy",  qty: 2, unitPrice: 650 },
];

const GENDER_BADGE: Record<string, { bg: string; color: string }> = {
  Muži:  { bg: "var(--color-at-blue-v3)", color: "var(--color-at-white)" },
  Ženy:  { bg: "var(--color-at-blue-v5)", color: "var(--color-at-blue-v1)" },
};

export default function SlideDressCodeBudget() {
  const totalMuzi  = ROWS.filter((r) => r.gender === "Muži").reduce((s, r) => s + r.qty * r.unitPrice, 0);
  const totalZeny  = ROWS.filter((r) => r.gender === "Ženy").reduce((s, r) => s + r.qty * r.unitPrice, 0);
  const totalAll   = totalMuzi + totalZeny;

  const totalPolo   = ROWS.filter((r) => r.item === "Polo tričko").reduce((s, r) => s + r.qty * r.unitPrice, 0);
  const totalMikina = ROWS.filter((r) => r.item === "Mikina").reduce((s, r) => s + r.qty * r.unitPrice, 0);

  return (
    <div className="flex flex-col h-full px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8">
      {/* Header */}
      <div className="mb-4 sm:mb-5">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "var(--color-at-red)" }}
        >
          Dress Code · Rozpočet
        </p>
        <h2 className="text-xl sm:text-3xl font-black" style={{ color: "var(--color-at-white)" }}>
          Náklady na firemní oblečení
        </h2>
        <p className="mt-1 text-sm" style={{ color: "var(--color-at-blue-v5)" }}>
          AERO EXPO 2026 · Malfini · Collar Up 257 + Bomber 454 Black
        </p>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-5 flex-1 min-h-0">
        {/* Table */}
        <div
          className="flex-1 flex flex-col min-h-0 rounded-xl overflow-x-auto"
          style={{ border: "1px solid var(--color-at-blue-v4)" }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr] px-4 py-2.5 text-xs font-bold uppercase tracking-widest sticky top-0 min-w-[560px]"
            style={{
              background: "var(--color-at-blue)",
              color: "var(--color-at-white)",
              borderBottom: "2px solid var(--color-at-blue-v4)",
            }}
          >
            <span>Produkt</span>
            <span>Model</span>
            <span className="text-center">Pohlaví</span>
            <span className="text-right">Počet</span>
            <span className="text-right">Cena / ks</span>
            <span className="text-right">Celkem</span>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => {
            const badge = GENDER_BADGE[row.gender];
            return (
              <div
                key={`${row.model}-${row.gender}`}
                className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr] px-4 py-3 text-sm items-center min-w-[560px]"
                style={{
                  background: i % 2 === 0 ? "var(--color-at-blue-v1)" : "var(--color-at-blue-v2)",
                  borderBottom: "1px solid var(--color-at-blue-v3)",
                }}
              >
                <span className="font-semibold" style={{ color: "var(--color-at-white)" }}>
                  {row.item}
                </span>
                <span style={{ color: "var(--color-at-blue-v5)" }}>{row.model}</span>
                <span className="flex justify-center">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ background: badge.bg, color: badge.color }}
                  >
                    {row.gender}
                  </span>
                </span>
                <span className="text-right font-bold tabular-nums" style={{ color: "var(--color-at-white)" }}>
                  {row.qty} ks
                </span>
                <span className="text-right tabular-nums" style={{ color: "var(--color-at-blue-v5)" }}>
                  {row.unitPrice.toLocaleString("cs-CZ")} Kč
                </span>
                <span className="text-right font-black tabular-nums" style={{ color: "var(--color-at-white)" }}>
                  {(row.qty * row.unitPrice).toLocaleString("cs-CZ")} Kč
                </span>
              </div>
            );
          })}

          {/* Total row */}
          <div
            className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr] px-4 py-3 text-sm min-w-[560px]"
            style={{
              background: "var(--color-at-blue)",
              borderTop: "2px solid var(--color-at-blue-v4)",
            }}
          >
            <span className="font-black" style={{ color: "var(--color-at-white)" }}>CELKEM</span>
            <span />
            <span />
            <span className="text-right font-black tabular-nums" style={{ color: "var(--color-at-white)" }}>
              {ROWS.reduce((s, r) => s + r.qty, 0)} ks
            </span>
            <span />
            <span className="text-right font-black tabular-nums" style={{ color: "var(--color-at-white)" }}>
              {totalAll.toLocaleString("cs-CZ")} Kč
            </span>
          </div>
        </div>

        {/* Right summary panel */}
        <div className="flex flex-col gap-4 w-full lg:w-56 flex-shrink-0">
          {/* Total */}
          <div
            className="rounded-xl p-5 flex flex-col gap-1"
            style={{ background: "var(--color-at-blue-v1)", border: "2px solid var(--color-at-red)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-at-blue-v5)" }}>
              Celkové náklady
            </p>
            <p className="text-3xl font-black mt-1" style={{ color: "var(--color-at-white)" }}>
              {totalAll.toLocaleString("cs-CZ")} Kč
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-at-blue-v5)" }}>
              {ROWS.reduce((s, r) => s + r.qty, 0)} kusů celkem · Malfini
            </p>
          </div>

          {/* Breakdown by gender */}
          <div
            className="rounded-lg px-4 py-3 flex flex-col gap-2"
            style={{ background: "var(--color-at-blue-a5)", border: "1px solid var(--color-at-blue-v4)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-at-blue-v3)" }}>
              Dle pohlaví
            </p>
            <div className="flex justify-between">
              <span className="text-sm" style={{ color: "var(--color-at-blue-v2)" }}>Muži (6 os.)</span>
              <span className="text-sm font-black tabular-nums" style={{ color: "var(--color-at-blue-v1)" }}>
                {totalMuzi.toLocaleString("cs-CZ")} Kč
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm" style={{ color: "var(--color-at-blue-v2)" }}>Ženy (2 os.)</span>
              <span className="text-sm font-black tabular-nums" style={{ color: "var(--color-at-blue-v1)" }}>
                {totalZeny.toLocaleString("cs-CZ")} Kč
              </span>
            </div>
          </div>

          {/* Breakdown by type */}
          <div
            className="rounded-lg px-4 py-3 flex flex-col gap-2"
            style={{ background: "var(--color-at-blue-a5)", border: "1px solid var(--color-at-blue-v4)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-at-blue-v3)" }}>
              Dle produktu
            </p>
            <div className="flex justify-between">
              <span className="text-sm" style={{ color: "var(--color-at-blue-v2)" }}>Collar Up 257</span>
              <span className="text-sm font-black tabular-nums" style={{ color: "var(--color-at-blue-v1)" }}>
                {totalPolo.toLocaleString("cs-CZ")} Kč
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm" style={{ color: "var(--color-at-blue-v2)" }}>Bomber 454</span>
              <span className="text-sm font-black tabular-nums" style={{ color: "var(--color-at-blue-v1)" }}>
                {totalMikina.toLocaleString("cs-CZ")} Kč
              </span>
            </div>
          </div>

          {/* Note */}
          <div
            className="rounded-lg px-4 py-3 flex flex-col gap-1 mt-auto"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid #f59e0b" }}
          >
            <p className="text-sm font-bold" style={{ color: "#f59e0b" }}>⚠ Otevřené body</p>
            <ul className="text-xs flex flex-col gap-1 mt-1" style={{ color: "#f59e0b" }}>
              <li>· Potvrdit velikosti u mužů</li>
              <li>· Objednat u dodavatele</li>
              <li>· Potvrdit termín dodání před veletrhem</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
