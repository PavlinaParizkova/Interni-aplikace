"use client";

import { useState, useEffect } from "react";
import { type SlideData } from "../slides";

interface SlideShellProps {
  slide: SlideData;
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared shell for every slide.
 * - Title / section slides: fullscreen photo background with overlay.
 * - All other slides: split layout — content left, photo(s) right.
 *   If slide.photos[] is provided, the right panel auto-rotates through them.
 */
export default function SlideShell({ slide, children, className = "" }: SlideShellProps) {
  const photoList = slide.photos ?? (slide.photo ? [slide.photo] : []);
  const hasPhoto   = photoList.length > 0;
  const isFullscreen = slide.type === "title" || slide.type === "section";

  /* ── Auto-carousel state (only active when multiple photos) ──────────── */
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (photoList.length <= 1) return;
    setActiveIdx(0);
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % photoList.length);
    }, 3000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide.id, photoList.length]);

  /* ── FULLSCREEN (title / section) ─────────────────────────────────────── */
  if (isFullscreen) {
    const overlay = slide.photoOverlay ?? "linear-gradient(135deg, rgba(16,37,62,0.82) 0%, rgba(16,37,62,0.70) 100%)";
    return (
      <div className={`slide ${className}`} style={{ background: "var(--color-at-blue-v1)" }}>
        {hasPhoto && (
          <div className="slide-bg" style={{ backgroundImage: `url(/photos/${encodeURIComponent(photoList[activeIdx])})` }} />
        )}
        <div className="slide-overlay" style={{ background: overlay }} />
        <div className="bg-dots slide-overlay" style={{ opacity: 0.35 }} />
        {children}
      </div>
    );
  }

  /* ── SPLIT LAYOUT (all other slides) ─────────────────────────────────── */
  return (
    <div
      className={`slide ${className}`}
      style={{
        background: "var(--color-at-blue-v1)",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {/* Dot texture — full background */}
      <div
        className="bg-dots"
        style={{ position: "absolute", inset: 0, opacity: 0.2, zIndex: 0, pointerEvents: "none" }}
      />

      {/* Left: content — 50% with photo, full width without */}
      <div className={hasPhoto ? "slide-split-content" : "slide-split-content slide-split-content--full"}>
        {children}

        {/* Slideshow indicator dots — visible on content side for presenter */}
        {photoList.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "4.5rem",
              left: "clamp(1.25rem, 5vw, 6rem)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              zIndex: 20,
              background: "rgba(16,37,62,0.55)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              borderRadius: 20,
              padding: "5px 10px",
              border: "1px solid rgba(80,116,153,0.25)",
            }}
          >
            {photoList.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIdx ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === activeIdx ? "var(--color-at-red)" : "rgba(147,179,207,0.55)",
                  transition: "width 300ms ease, background 300ms",
                }}
              />
            ))}
            <span style={{
              marginLeft: 4,
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--color-at-blue-v5)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              {activeIdx + 1} / {photoList.length}
            </span>
          </div>
        )}
      </div>

      {/* Right: photo panel */}
      {hasPhoto && (
        <div
          aria-hidden="true"
          className="slide-split-photo"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {photoList.map((src, i) => (
            <div
              key={src}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(/photos/${encodeURIComponent(src)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: i === activeIdx ? 1 : 0,
                transition: photoList.length > 1 ? "opacity 800ms ease-in-out" : "none",
              }}
            />
          ))}

          {/* Carousel dots — only when multiple photos */}
          {photoList.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                zIndex: 10,
                background: "rgba(16,37,62,0.60)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                borderRadius: 20,
                padding: "5px 10px",
                border: "1px solid rgba(80,116,153,0.20)",
                whiteSpace: "nowrap",
              }}
            >
              {photoList.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === activeIdx ? 18 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: i === activeIdx ? "var(--color-at-red)" : "rgba(255,255,255,0.55)",
                    transition: "width 300ms ease, background 300ms",
                  }}
                />
              ))}
              <span style={{
                marginLeft: 4,
                fontSize: "0.58rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.75)",
                textTransform: "uppercase",
              }}>
                {activeIdx + 1} / {photoList.length}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
