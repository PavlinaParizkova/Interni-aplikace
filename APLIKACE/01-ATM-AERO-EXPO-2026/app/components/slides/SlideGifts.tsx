import Image from "next/image";

type GiftCategory = {
  label: string;
  target: string;
  price?: string;
  items: {
    name: string;
    note?: string;
    image?: string;
    status?: "done" | "todo" | "missing";
  }[];
};

const CATEGORIES: GiftCategory[] = [
  {
    label: "Rozdávačky",
    target: "Všichni návštěvníci",
    items: [
      {
        name: "Energetický nápoj",
        note: "PilotStyle + ATM · 100 ks každý · zajišťuje Simča",
        image: "/darky-energy-drink.png",
        status: "done",
      },
      {
        name: "Karamelky · Tužky",
        note: "Objednáno",
        status: "done",
      },
      {
        name: "Bloky A5",
        note: "Objednat",
        status: "todo",
      },
      {
        name: "Tašky",
        note: "NUTNO ZAJISTIT",
        status: "missing",
      },
    ],
  },
  {
    label: "Balíček 1",
    target: "Kvalitnější kontakt / schůzka",
    price: "~389 Kč / sada",
    items: [
      {
        name: "Hrnek + podšálek",
        note: "Gravírovaný · 108 Kč / ks",
        image: "/darky-hrnek.png",
        status: "todo",
      },
      {
        name: "Káva Barahona",
        note: "Dom. republika · černý doypack · 173 Kč",
        image: "/darky-kava.png",
        status: "todo",
      },
    ],
  },
  {
    label: "Balíček 2 – VIP",
    target: "Klíčoví partneři · rozhodovatelé",
    price: "~629 Kč / sada",
    items: [
      {
        name: "Kravata",
        note: "Tmavě modrá · výšivka CZ vlajka · 30 ks",
        image: "/darky-kravata.png",
        status: "todo",
      },
      {
        name: "Spona na kravatu",
        note: "Letadlo · stříbrná · 30 ks",
        image: "/darky-spona.png",
        status: "todo",
      },
    ],
  },
];

const STATUS_CONFIG = {
  done: { label: "Zajištěno", color: "var(--color-at-blue-v3)", bg: "rgba(35,81,124,0.25)" },
  todo: { label: "Objednat", color: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
  missing: { label: "CHYBÍ", color: "var(--color-at-red)", bg: "rgba(213,28,23,0.12)" },
};

export default function SlideGifts() {
  return (
    <div className="flex flex-col h-full px-10 py-8">
      {/* Header */}
      <div className="mb-6">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "var(--color-at-red)" }}
        >
          Příprava veletrhu
        </p>
        <h2 className="text-3xl font-black" style={{ color: "var(--color-at-white)" }}>
          Dárkové balíčky pro zákazníky
        </h2>
        <p className="mt-1 text-sm" style={{ color: "var(--color-at-blue-v5)" }}>
          Přehled dárků pro AERO EXPO 2026 · celkový potvrzený náklad 26 070 Kč
        </p>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.label}
            className="rounded-xl flex flex-col overflow-hidden"
            style={{
              background: "var(--color-at-blue-a5)",
              border: "1px solid var(--color-at-blue-v5)",
            }}
          >
            {/* Category header */}
            <div
              className="px-5 py-3 flex items-start justify-between gap-2"
              style={{ borderBottom: "1px solid var(--color-at-blue-v5)" }}
            >
              <div>
                <p className="text-sm font-black" style={{ color: "var(--color-at-white)" }}>
                  {cat.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-at-blue-v5)" }}>
                  {cat.target}
                </p>
              </div>
              {cat.price && (
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    background: "rgba(213,28,23,0.15)",
                    color: "var(--color-at-red)",
                    border: "1px solid var(--color-at-red)",
                  }}
                >
                  {cat.price}
                </span>
              )}
            </div>

            {/* Items */}
            <div className="flex flex-col gap-3 p-4 flex-1 overflow-y-auto">
              {cat.items.map((item) => {
                const sc = item.status ? STATUS_CONFIG[item.status] : null;
                return (
                  <div
                    key={item.name}
                    className="rounded-lg overflow-hidden"
                    style={{
                      background: "var(--color-at-blue-v1)",
                      border: "1px solid var(--color-at-blue-v2)",
                    }}
                  >
                    {/* Photo */}
                    {item.image && (
                      <div
                        className="relative w-full"
                        style={{ height: 120, background: "#fff" }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: "contain" }}
                          sizes="(max-width: 1200px) 33vw, 400px"
                        />
                      </div>
                    )}

                    {/* Text */}
                    <div className="px-3 py-2 flex items-start justify-between gap-2">
                      <div>
                        <p
                          className="text-xs font-bold leading-tight"
                          style={{ color: "var(--color-at-white)" }}
                        >
                          {item.name}
                        </p>
                        {item.note && (
                          <p
                            className="text-xs mt-0.5 leading-snug"
                            style={{ color: "var(--color-at-blue-v5)" }}
                          >
                            {item.note}
                          </p>
                        )}
                      </div>
                      {sc && (
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded flex-shrink-0"
                          style={{ background: sc.bg, color: sc.color }}
                        >
                          {sc.label}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
