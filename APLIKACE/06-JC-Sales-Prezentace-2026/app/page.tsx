"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import LockScreen from "./components/LockScreen";
import SlideTitle from "./components/SlideTitle";
import SlideSection from "./components/SlideSection";
import SlideIdentity from "./components/SlideIdentity";
import SlideGrid from "./components/SlideGrid";
import SlideService from "./components/SlideService";
import SlideSegment from "./components/SlideSegment";
import SlideProcess from "./components/SlideProcess";
import SlideClients from "./components/SlideClients";
import SlideBeforeAfter from "./components/SlideBeforeAfter";
import SlideContact from "./components/SlideContact";
import { translations, type Lang } from "./slides";

/* ─── Slide renderer ──────────────────────────────────────────────────────── */

function renderSlide(lang: Lang, index: number) {
  const s = translations[lang].slides[index];
  switch (s.type) {
    case "title":       return <SlideTitle key={s.id} slide={s} />;
    case "section":     return <SlideSection key={s.id} slide={s} />;
    case "identity":    return <SlideIdentity key={s.id} slide={s} />;
    case "grid":        return <SlideGrid key={s.id} slide={s} />;
    case "service":     return <SlideService key={s.id} slide={s} />;
    case "segment":     return <SlideSegment key={s.id} slide={s} />;
    case "process":     return <SlideProcess key={s.id} slide={s} />;
    case "clients":     return <SlideClients key={s.id} slide={s} />;
    case "beforeafter": return <SlideBeforeAfter key={s.id} slide={s} />;
    case "contact":     return <SlideContact key={s.id} slide={s} />;
    default:            return null;
  }
}

/* ─── Icons ───────────────────────────────────────────────────────────────── */

function IconArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconFullscreen() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function IconExitFullscreen() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 14 10 14 10 20" />
      <polyline points="20 10 14 10 14 4" />
      <line x1="10" y1="14" x2="3" y2="21" />
      <line x1="21" y1="3" x2="14" y2="10" />
    </svg>
  );
}

/* ─── Logo ────────────────────────────────────────────────────────────────── */

function NavLogo() {
  return (
    <img
      src="/logos/ATM_logo_Jet_Concept_red_white.svg"
      alt="AIR TEAM Jet Concept"
      style={{
        height: 68,
        width: "auto",
        display: "block",
      }}
    />
  );
}

/* ─── Section Progress Bar ───────────────────────────────────────────────── */

const SECTIONS = [
  { label: "AIR\u00a0TEAM", from: 0,  to: 5  },   // slides 01–06
  { label: "Portfolio",     from: 6,  to: 20 },   // slides 07–21
  { label: "Why\u00a0Us",   from: 21, to: 24 },   // slides 22–25
];

function SectionProgress({
  current,
  total,
  goTo,
}: {
  current: number;
  total: number;
  goTo: (index: number, dir: "fwd" | "bwd") => void;
}) {
  return (
    <nav
      aria-label="Presentation sections"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 52,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        paddingInline: "clamp(1rem, 3vw, 2.5rem)",
        gap: 0,
        background: "var(--color-at-blue-v1-92)",
        borderTop: "1px solid var(--color-at-blue-v2)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {SECTIONS.map((section, i) => {
        const sectionTotal = section.to - section.from + 1;
        const isCompleted = current > section.to;
        const isActive    = current >= section.from && current <= section.to;

        let fillPct = 0;
        if (isCompleted)   fillPct = 100;
        else if (isActive) fillPct = ((current - section.from + 1) / sectionTotal) * 100;

        return (
          <div
            key={i}
            style={{
              flex: sectionTotal,
              paddingRight: i < SECTIONS.length - 1 ? 20 : 0,
              paddingLeft:  i > 0 ? 20 : 0,
              cursor: "pointer",
            }}
            onClick={() => goTo(section.from, section.from > current ? "fwd" : "bwd")}
            title={`Jump to: ${section.label}`}
          >
            {/* Section label */}
            <div
              style={{
                fontSize: "0.56rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 5,
                whiteSpace: "nowrap",
                color: isActive
                  ? "var(--color-at-white)"
                  : isCompleted
                  ? "var(--color-at-blue-v4)"
                  : "var(--color-at-blue-v3)",
                transition: "color 300ms",
              }}
            >
              {section.label}
            </div>

            {/* Track */}
            <div
              style={{
                height: 2,
                background: "var(--color-at-blue-v2)",
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${fillPct}%`,
                  background: isActive ? "var(--color-at-red)" : "var(--color-at-blue-v4)",
                  borderRadius: 1,
                  transition: "width 300ms ease",
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Slide counter */}
      <div
        style={{
          marginLeft: 24,
          flexShrink: 0,
          fontSize: "0.68rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          color: "var(--color-at-blue-v4)",
          whiteSpace: "nowrap",
        }}
      >
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </nav>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */

export default function Page() {
  const [unlocked, setUnlocked] = useState(false);
  const lang: Lang = "en";
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState<"fwd" | "bwd">("fwd");
  const [animKey, setAnimKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slides = translations[lang].slides;
  const total = slides.length;

  /* ── Navigation ─────────────────────────────────────────────────────────── */

  const goTo = useCallback((index: number, dir: "fwd" | "bwd") => {
    if (index < 0 || index >= total) return;
    setDirection(dir);
    setAnimKey((k) => k + 1);
    setCurrent(index);
  }, [total]);

  const next = useCallback(() => goTo(current + 1, "fwd"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "bwd"), [current, goTo]);

  /* ── Keyboard ────────────────────────────────────────────────────────────── */

  useEffect(() => {
    if (!unlocked) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft"  || e.key === "PageUp")   { e.preventDefault(); prev(); }
      if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      }
      if (e.key === "Home") goTo(0, "bwd");
      if (e.key === "End")  goTo(total - 1, "fwd");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [unlocked, next, prev, goTo, total]);

  /* ── Touch / swipe ───────────────────────────────────────────────────────── */

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) next();
    if (delta < -50) prev();
    touchStartX.current = null;
  }

  /* ── Fullscreen ──────────────────────────────────────────────────────────── */

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  /* ── Lock screen ─────────────────────────────────────────────────────────── */

  if (!unlocked) {
    return <LockScreen onUnlock={() => setUnlocked(true)} />;
  }

  /* ── Slide animation styles ──────────────────────────────────────────────── */

  const enterStyle: React.CSSProperties = {
    animation: `${direction === "fwd" ? "slideInRight" : "slideInLeft"} 360ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both`,
  };

  const inlineKeyframes = `
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(48px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-48px); }
      to   { opacity: 1; transform: translateX(0); }
    }
  `;

  return (
    <>
      <style>{inlineKeyframes}</style>

      <div
        style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* ─── STICKY NAV ────────────────────────────────────────────────────── */}
        <header className="slide-nav">
          {/* Logo + tagline */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <NavLogo />
            <span
              className="nav-tagline"
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.07em",
                color: "var(--color-at-white)",
                whiteSpace: "nowrap",
                opacity: 0.85,
              }}
            >
              Premium Cabin & Aircraft Modernization Solutions by AIR&nbsp;TEAM Jet&nbsp;Concept
            </span>
          </div>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Brand label */}
            <div className="nav-brand-label" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 3, height: 18, borderRadius: 2, background: "var(--color-at-red)" }} />
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--color-at-blue-v5)",
                  whiteSpace: "nowrap",
                }}
              >
                AIR&nbsp;TEAM · Jet&nbsp;Concept · 2026
              </span>
            </div>
            {/* Fullscreen toggle */}
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
              style={{
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid var(--color-at-blue-v3)",
                borderRadius: 4,
                color: "var(--color-at-blue-v5)",
                cursor: "pointer",
                transition: "all 150ms",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-at-blue-v2)";
                e.currentTarget.style.color = "var(--color-at-white)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--color-at-blue-v5)";
              }}
            >
              {isFullscreen ? <IconExitFullscreen /> : <IconFullscreen />}
            </button>
          </div>
        </header>

        {/* ─── SLIDE AREA ────────────────────────────────────────────────────── */}
        <main
          key={`${animKey}-${lang}`}
          style={{ width: "100%", height: "100%", ...enterStyle }}
        >
          {renderSlide(lang, current)}
        </main>

        {/* ─── PREV / NEXT ARROWS ─────────────────────────────────────────────── */}
        <button
          className="arrow-btn prev"
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
        >
          <IconArrowLeft />
        </button>
        <button
          className="arrow-btn next"
          onClick={next}
          disabled={current === total - 1}
          aria-label="Next slide"
        >
          <IconArrowRight />
        </button>

        {/* ─── SECTION PROGRESS BAR ───────────────────────────────────────────── */}
        <SectionProgress current={current} total={total} goTo={goTo} />
      </div>
    </>
  );
}
