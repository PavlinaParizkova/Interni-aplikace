"use client";

import { useState, useEffect, useCallback } from "react";

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
    price: "~291 Kč / sada",
    items: [
      {
        name: "Keramický pohárek 330 ml Qeram",
        note: "Keramický · 118 Kč / ks · 30 ks",
        image: "/darky-hrnek.png",
        status: "todo",
      },
      {
        name: "Káva Barahona",
        note: "Dom. republika · černý doypack · 173 Kč · 30 ks",
        image: "/darky-kava.png",
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
  const [lightbox, setLightbox] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox]);

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
          Přehled dárků pro AERO EXPO 2026 · celkový potvrzený náklad 15 930 Kč
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
              style={{ borderBottom: "1px solid var(--color-at-blue-v4)" }}
            >
              <div>
                <p className="text-sm font-black" style={{ color: "var(--color-at-blue-v1)" }}>
                  {cat.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-at-blue-v3)" }}>
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
                        className="w-full"
                        role="button"
                        tabIndex={0}
                        aria-label={`Zobrazit foto: ${item.name}`}
                        onClick={() => setLightbox(item.image!)}
                        onKeyDown={(e) => e.key === "Enter" && setLightbox(item.image!)}
                        style={{
                          aspectRatio: "1 / 1",
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundColor: "#fff",
                          cursor: "zoom-in",
                          transition: "opacity 150ms ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                      />
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

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Náhled fotografie"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(16,37,62,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
            animation: "lb-fade-in 180ms ease",
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Zavřít náhled"
            className="btn-transparent"
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              borderRadius: "50%",
              width: 40,
              height: 40,
              fontSize: 20,
              lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* Image */}
          <img
            src={lightbox}
            alt="Náhled dárku"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(90vw, 700px)",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: 12,
              boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
              animation: "lb-scale-in 200ms cubic-bezier(0.34,1.56,0.64,1)",
            }}
          />

          {/* Hint */}
          <p
            style={{
              position: "absolute",
              bottom: 20,
              color: "rgba(147,179,207,0.7)",
              fontSize: 12,
              letterSpacing: "0.05em",
            }}
          >
            Kliknutím mimo nebo klávesou Esc zavřeš náhled
          </p>

          <style>{`
            @keyframes lb-fade-in { from { opacity: 0 } to { opacity: 1 } }
            @keyframes lb-scale-in { from { transform: scale(0.88); opacity: 0 } to { transform: scale(1); opacity: 1 } }
          `}</style>
        </div>
      )}
    </div>
  );
}
