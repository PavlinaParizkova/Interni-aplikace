"use client";

import { useCallback, useEffect, useState } from "react";
import { MARKETING_GALLERY_ITEMS, type MarketingGalleryItem } from "../../data/marketing-assets";

function btnLightbox(): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontSize: 13,
    fontWeight: 700,
    padding: "10px 18px",
    borderRadius: 8,
    textDecoration: "none",
    letterSpacing: "0.03em",
    border: "none",
    cursor: "pointer",
  };
}

export default function SlideMarketingKit() {
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const active = lightboxId
    ? MARKETING_GALLERY_ITEMS.find((x) => x.id === lightboxId) ?? null
    : null;

  const copyOrShare = useCallback(async (id: string, url: string, title: string) => {
    setCopiedId(null);
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (e) {
        const err = e as { name?: string };
        if (err.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 2500);
    } catch {
      setCopiedId(null);
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (lightboxId) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [lightboxId]);

  return (
    <div className="flex flex-col flex-1 px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8">
      <div className="mb-4 sm:mb-5">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "var(--color-at-white)" }}
        >
          05 Marketingové materiály
        </p>
        <h2 className="text-lg sm:text-2xl font-black" style={{ color: "var(--color-at-white)" }}>
          Co budete mít k dispozici
        </h2>
        <p className="mt-1 text-xs sm:text-sm max-w-2xl" style={{ color: "var(--color-at-blue-v5)" }}>
          Klikněte na dlaždici – zvětšený náhled a odkazy v lightboxu
        </p>
      </div>

      {/* Kompaktní mřížka dlaždic */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-2.5">
        {MARKETING_GALLERY_ITEMS.map((item) => (
          <Tile key={item.id} item={item} onOpen={() => setLightboxId(item.id)} />
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
          style={{ background: "rgba(5, 12, 28, 0.88)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mkt-lightbox-title"
          onClick={() => setLightboxId(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-xl overflow-hidden shadow-2xl"
            style={{
              background: "var(--color-at-blue-v1)",
              border: "1px solid var(--color-at-blue-v4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-2 right-2 z-10 w-9 h-9 rounded-lg flex items-center justify-center text-lg font-bold"
              style={{
                background: "rgba(0,0,0,0.45)",
                color: "var(--color-at-white)",
                border: "1px solid var(--color-at-blue-v4)",
              }}
              aria-label="Zavřít"
              onClick={() => setLightboxId(null)}
            >
              ×
            </button>

            <div
              className="flex-1 min-h-0 flex items-center justify-center overflow-auto p-4 pt-12"
              style={{ background: "var(--color-at-blue-v1)" }}
            >
              <LightboxVisual item={active} />
            </div>

            <div
              className="p-4 sm:p-5 shrink-0"
              style={{
                background: "var(--color-at-blue-a5)",
                borderTop: "1px solid var(--color-at-blue-v4)",
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--color-at-red)" }}>
                {active.kind === "email" ? "E-mailový podpis" : active.kind === "linkedin" ? "LinkedIn" : "Leták PDF"}
              </p>
              <h3
                id="mkt-lightbox-title"
                className="text-sm sm:text-base font-bold leading-snug pr-8"
                style={{ color: "var(--color-at-blue)" }}
              >
                {active.title}
              </h3>
              <p className="text-xs mt-1" style={{ color: "var(--color-at-blue-v3)" }}>
                {active.meta}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <a
                  href={active.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...btnLightbox(), background: "var(--color-at-red)", color: "var(--color-at-white)", flex: 1 }}
                >
                  {active.primaryLabel}
                </a>
                <button
                  type="button"
                  onClick={() => copyOrShare(active.id, active.fileUrl, active.title)}
                  style={{
                    ...btnLightbox(),
                    background: "var(--color-at-blue-v2)",
                    color: "var(--color-at-white)",
                    border: "1px solid var(--color-at-blue-v3)",
                    flex: 1,
                  }}
                >
                  {copiedId === active.id ? "Odkaz v schránce" : "Sdílet / zkopírovat odkaz"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Tile({ item, onOpen }: { item: MarketingGalleryItem; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Otevřít náhled: ${item.title}`}
      className="group relative w-full aspect-square rounded-lg overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-at-red)]"
      style={{
        background: "var(--color-at-blue-a5)",
        border: "1px solid var(--color-at-blue-v5)",
        padding: 0,
      }}
    >
      <div className="absolute inset-0">
        {item.kind === "linkedin" ? (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: "linear-gradient(145deg, #0a66c2 0%, #004182 55%, var(--color-at-blue) 100%)",
            }}
          >
            <span className="text-3xl sm:text-4xl font-black text-white/95" style={{ fontFamily: "system-ui" }} aria-hidden>
              in
            </span>
          </div>
        ) : (
          <img
            src={item.thumbSrc!}
            alt=""
            className="w-full h-full object-cover object-top transition duration-200 group-hover:brightness-110 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        )}
        <div
          className="absolute inset-x-0 bottom-0 px-1.5 py-1 border-t"
          style={{
            background: "var(--color-at-blue-a5)",
            borderColor: "var(--color-at-blue-v4)",
          }}
        >
          <p
            className="text-[9px] sm:text-[10px] font-bold leading-tight line-clamp-2"
            style={{ color: "var(--color-at-blue)" }}
          >
            {item.title}
          </p>
        </div>
      </div>
    </button>
  );
}

function LightboxVisual({ item }: { item: MarketingGalleryItem }) {
  if (item.kind === "linkedin") {
    return (
      <div
        className="w-full max-w-md aspect-[4/3] rounded-lg flex items-center justify-center"
        style={{
          background: "linear-gradient(145deg, #0a66c2 0%, #004182 55%, var(--color-at-blue) 100%)",
        }}
      >
        <span className="text-8xl font-black text-white/95 select-none" style={{ fontFamily: "system-ui" }} aria-hidden>
          in
        </span>
      </div>
    );
  }

  if (item.kind === "email") {
    return (
      <img
        src={item.thumbSrc!}
        alt={item.title}
        className="max-w-full max-h-[min(55vh,520px)] w-auto h-auto object-contain rounded-md"
      />
    );
  }

  return (
    <img
      src={item.thumbSrc!}
      alt={item.title}
      className="max-w-full max-h-[min(60vh,560px)] w-auto h-auto object-contain rounded-md"
    />
  );
}
