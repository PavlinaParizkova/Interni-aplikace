"use client";

import { useState } from "react";

const PHOTOS: string[] = [];

const BOOKING_URL =
  "https://secure.booking.com/confirmation.cs.html?aid=304142&label=gen173nr-10CCsoggI46AdIBVgEaDqIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4ApuDgs8GwAIB0gIkYTBmMmEwNGItZDI4NC00YWRiLWI1NzgtNDVjMjljNjViMTk42AIB4AIB&sid=f4da4245ef7ec34e28d30f4535b92567&source=confirmation_error_validation&bn=6385143502";

const HIGHLIGHTS = [
  { icon: "🏨", label: "Typ", value: "Hotel – Booking.com" },
  { icon: "📍", label: "Místo", value: "Friedrichshafen, Německo" },
  { icon: "👥", label: "Hosté", value: "4 osoby" },
  { icon: "🛏️", label: "Pokoje", value: "Upřesnit" },
  { icon: "📅", label: "Check-in", value: "22. 4. 2026" },
  { icon: "📅", label: "Check-out", value: "24. 4. 2026" },
];

const GUESTS = [
  "Jakub Dryska",
  "Lucie Kysučanová",
  "Jirka Franz",
  "Alex Mudrych",
];

const CHECK_IN = "22. 4. 2026";
const CHECK_OUT = "24. 4. 2026";
const NIGHTS = 2;

export default function SlideAccommodation2() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prevPhoto = () => setLightboxIdx((i) => (i !== null && i > 0 ? i - 1 : i));
  const nextPhoto = () => setLightboxIdx((i) => (i !== null && i < PHOTOS.length - 1 ? i + 1 : i));

  return (
    <div className="flex flex-col flex-1 px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8">
      {/* Header */}
      <div className="mb-4">
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "var(--color-at-white)" }}>
          Logistika · Ubytování – skupina 2
        </p>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
          <div>
            <h2 className="text-xl sm:text-3xl font-black" style={{ color: "var(--color-at-white)" }}>
              Ubytování – Booking.com
            </h2>
            <p className="mt-1 text-sm" style={{ color: "var(--color-at-blue-v5)" }}>
              Friedrichshafen, Německo · {CHECK_IN} – {CHECK_OUT} · {NIGHTS} noci
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-bold"
              style={{ background: "var(--color-at-red)", color: "var(--color-at-white)" }}
            >
              Booking.com ↗
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left – highlights + gallery */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Highlights grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="rounded-xl px-4 py-3 flex flex-col gap-0.5"
                style={{ background: "var(--color-at-blue-v2)", border: "1px solid var(--color-at-blue-v3)" }}
              >
                <span className="text-lg">{h.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--color-at-blue-v5)" }}>
                  {h.label}
                </span>
                <span className="text-sm font-black" style={{ color: "var(--color-at-white)" }}>
                  {h.value}
                </span>
              </div>
            ))}
          </div>

          {/* Photo gallery or placeholder */}
          {PHOTOS.length > 0 ? (
            <div className="grid grid-cols-3 gap-2 min-h-0 overflow-hidden">
              {PHOTOS.slice(0, 6).map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightboxIdx(i)}
                  className="relative rounded-xl overflow-hidden group cursor-zoom-in focus:outline-none"
                  style={{ background: "var(--color-at-blue-v2)" }}
                >
                  <img src={src} alt={`Foto ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "rgba(16,37,62,0.5)" }}
                  >
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div
              className="flex flex-col items-center justify-center rounded-xl gap-2 py-10"
              style={{ border: "2px dashed var(--color-at-blue-v3)" }}
            >
              <span className="text-3xl">📸</span>
              <p className="text-sm font-bold" style={{ color: "var(--color-at-blue-v4)" }}>Fotky z Booking.com</p>
              <p className="text-xs text-center px-6" style={{ color: "var(--color-at-blue-v3)" }}>
                Uložte do <code className="px-1 rounded" style={{ background: "var(--color-at-blue-v2)" }}>/public/ubytovani2-XX.jpg</code> a doplňte pole PHOTOS
              </p>
            </div>
          )}
        </div>

        {/* Right – guests + info */}
        <div className="flex flex-col gap-4 w-full lg:w-64 flex-shrink-0">
          {/* Guests */}
          <div
            className="rounded-xl px-4 py-3 flex flex-col gap-2"
            style={{ background: "var(--color-at-blue-v1)", border: "1px solid var(--color-at-blue-v3)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-at-blue-v5)" }}>
              Ubytovaní
            </p>
            {GUESTS.map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 pb-2"
                style={{ borderBottom: "1px solid var(--color-at-blue-v3)" }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: "var(--color-at-blue-v3)", color: "var(--color-at-white)" }}
                >
                  {name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span className="text-sm font-semibold" style={{ color: "var(--color-at-white)" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Booking details */}
          <div
            className="rounded-xl px-4 py-3 flex flex-col gap-2"
            style={{ background: "var(--color-at-blue-v1)", border: "1px solid var(--color-at-blue-v3)" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-at-blue-v5)" }}>
              Rezervace
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: "var(--color-at-blue-v5)" }}>Check-in</span>
              <span className="text-sm font-black" style={{ color: "var(--color-at-white)" }}>{CHECK_IN}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: "var(--color-at-blue-v5)" }}>Check-out</span>
              <span className="text-sm font-black" style={{ color: "var(--color-at-white)" }}>{CHECK_OUT}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: "var(--color-at-blue-v5)" }}>Noci</span>
              <span className="text-sm font-black" style={{ color: "var(--color-at-white)" }}>{NIGHTS}</span>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs font-bold px-3 py-2 rounded-lg text-center"
              style={{ background: "var(--color-at-red)", color: "var(--color-at-white)" }}
            >
              Otevřít rezervaci na Booking.com ↗
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && PHOTOS.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(16,37,62,0.95)" }}
          onClick={() => setLightboxIdx(null)}
        >
          <div
            className="relative rounded-2xl overflow-hidden flex flex-col"
            style={{
              maxWidth: "min(860px, 90vw)",
              maxHeight: "90vh",
              background: "var(--color-at-blue-v2)",
              border: "1px solid var(--color-at-blue-v3)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIdx(null)}
              aria-label="Zavřít"
              className="btn-transparent absolute top-3 right-3 z-10 rounded-full"
              style={{ width: 32, height: 32 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={PHOTOS[lightboxIdx]}
              alt={`Foto ${lightboxIdx + 1}`}
              className="w-full object-contain"
              style={{ maxHeight: "75vh", background: "#000" }}
            />

            <div className="px-6 py-3 flex items-center justify-between gap-3">
              <button
                onClick={prevPhoto}
                disabled={lightboxIdx === 0}
                className="px-4 py-1.5 rounded-lg text-sm font-bold disabled:opacity-30"
                style={{ background: "var(--color-at-blue-v3)", color: "var(--color-at-white)" }}
              >
                ← Předchozí
              </button>
              <span className="text-sm" style={{ color: "var(--color-at-blue-v5)" }}>
                {lightboxIdx + 1} / {PHOTOS.length}
              </span>
              <button
                onClick={nextPhoto}
                disabled={lightboxIdx === PHOTOS.length - 1}
                className="px-4 py-1.5 rounded-lg text-sm font-bold disabled:opacity-30"
                style={{ background: "var(--color-at-blue-v3)", color: "var(--color-at-white)" }}
              >
                Další →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
