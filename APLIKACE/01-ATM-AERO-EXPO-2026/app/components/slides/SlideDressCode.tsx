"use client";

import { useState } from "react";

type DressItem = {
  image: string;
  title: string;
  subtitle: string;
  tag: string;
  count: number;
  price: number;
};

const ITEMS: DressItem[] = [
  {
    image: "/dresscode-collar-up257-muzi.png",
    title: "Collar Up 257",
    subtitle: "Malfini · Navy · Pánské polo",
    tag: "Muži",
    count: 6,
    price: 434,
  },
  {
    image: "/dresscode-bomber454-muzi.png",
    title: "Bomber 454",
    subtitle: "Malfini · Black · Pánská mikina",
    tag: "Muži",
    count: 6,
    price: 650,
  },
  {
    image: "/dresscode-collar-up257-zeny.png",
    title: "Collar Up 257",
    subtitle: "Malfini · Navy · Dámské polo",
    tag: "Ženy",
    count: 2,
    price: 434,
  },
  {
    image: "/dresscode-bomber454-zeny.png",
    title: "Bomber 454",
    subtitle: "Malfini · Black · Dámská mikina",
    tag: "Ženy",
    count: 2,
    price: 650,
  },
];

export default function SlideDressCode() {
  const [lightbox, setLightbox] = useState<DressItem | null>(null);

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
          Dress Code – oblečení na veletrh
        </h2>
        <p className="mt-1 text-sm" style={{ color: "var(--color-at-blue-v5)" }}>
          Firemní oblečení AIR TEAM pro AERO EXPO 2026 · Kliknutím zobrazíš detail
        </p>
      </div>

      {/* Photo grid 2×2 */}
      <div className="grid grid-cols-4 gap-5 flex-1 min-h-0">
        {ITEMS.map((item) => (
          <button
            key={item.image}
            onClick={() => setLightbox(item)}
            className="btn-card group rounded-xl overflow-hidden flex flex-col cursor-zoom-in focus:outline-none"
          >
            {/* Square photo */}
            <div
              className="w-full relative overflow-hidden"
              style={{ aspectRatio: "1 / 1", backgroundColor: "#ffffff" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* Zoom hint overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(16,37,62,0.45)" }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>

            {/* Label */}
            <div className="px-4 py-3 flex flex-col gap-1">
              <div className="flex items-start justify-between gap-2">
                <div className="text-left">
                  <p
                    className="text-sm font-black leading-tight"
                    style={{ color: "var(--color-at-white)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs mt-0.5 leading-snug"
                    style={{ color: "var(--color-at-blue-v5)" }}
                  >
                    {item.subtitle}
                  </p>
                </div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(213,28,23,0.15)",
                    color: "var(--color-at-red)",
                    border: "1px solid var(--color-at-red)",
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tabular-nums" style={{ color: "var(--color-at-white)" }}>
                  {item.price} Kč / ks
                </span>
                {item.count > 0 && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ background: "var(--color-at-blue-v3)", color: "var(--color-at-white)" }}
                  >
                    {item.count}× ks
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(16,37,62,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          {/* Panel */}
          <div
            className="relative flex flex-col items-center rounded-2xl overflow-hidden"
            style={{
              maxWidth: "min(480px, 90vw)",
              maxHeight: "90vh",
              background: "var(--color-at-blue-v2)",
              border: "1px solid var(--color-at-blue-v3)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Zavřít"
              className="btn-transparent absolute top-3 right-3 z-10 rounded-full"
              style={{ width: 32, height: 32 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image */}
            <div style={{ width: "100%", background: "#ffffff" }}>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full object-contain"
                style={{ maxHeight: "65vh" }}
              />
            </div>

            {/* Info */}
            <div className="px-6 py-4 w-full flex items-center justify-between gap-3">
              <div>
                <p className="text-base font-black" style={{ color: "var(--color-at-white)" }}>
                  {lightbox.title}
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--color-at-blue-v5)" }}>
                  {lightbox.subtitle}
                </p>
                <p className="text-sm font-black mt-1" style={{ color: "var(--color-at-white)" }}>
                  {lightbox.price} Kč / ks
                  {lightbox.count > 0 && (
                    <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded"
                      style={{ background: "var(--color-at-blue-v3)", color: "var(--color-at-white)" }}>
                      {lightbox.count}× ks · {lightbox.count * lightbox.price} Kč celkem
                    </span>
                  )}
                </p>
              </div>
              <span
                className="text-sm font-bold px-3 py-1 rounded-full flex-shrink-0"
                style={{
                  background: "rgba(213,28,23,0.15)",
                  color: "var(--color-at-red)",
                  border: "1px solid var(--color-at-red)",
                }}
              >
                {lightbox.tag}
              </span>
            </div>
          </div>

          {/* Hint */}
          <p
            className="absolute bottom-6 text-xs"
            style={{ color: "var(--color-at-blue-v5)" }}
          >
            Klikni kdekoli mimo obrázek pro zavření
          </p>
        </div>
      )}
    </div>
  );
}
