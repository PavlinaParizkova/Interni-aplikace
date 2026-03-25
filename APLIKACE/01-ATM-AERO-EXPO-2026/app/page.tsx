"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import SlideNav from "./components/SlideNav";
import SlideDrawer from "./components/SlideDrawer";
import ScrollToTop from "./components/ScrollToTop";
import SlideCover from "./components/slides/SlideCover";
import SlideWhatWePresent from "./components/slides/SlideWhatWePresent";
import SlideTeam from "./components/slides/SlideTeam";
import SlideDays from "./components/slides/SlideDays";
import SlideTransport from "./components/slides/SlideTransport";
import SlideChecklistTransport from "./components/slides/SlideChecklistTransport";
import SlideChecklistAttendance from "./components/slides/SlideChecklistAttendance";
import SlideMarketingKit from "./components/slides/SlideMarketingKit";
import SlideGifts from "./components/slides/SlideGifts";
import SlideGiftsBudget from "./components/slides/SlideGiftsBudget";
import SlideDressCode from "./components/slides/SlideDressCode";
import SlideBoothBudget from "./components/slides/SlideBoothBudget";
import SlideBoothComparison from "./components/slides/SlideBoothComparison";
import SlideExponexOffer from "./components/slides/SlideExponexOffer";
import SlideAccommodation from "./components/slides/SlideAccommodation";
import SlideDressCodeBudget from "./components/slides/SlideDressCodeBudget";
import SlideTotalCosts from "./components/slides/SlideTotalCosts";
import SlideCalendar from "./components/slides/SlideCalendar";

export const SLIDES = [
  { component: <SlideCover />,                  label: "Úvod",              section: "Úvod" },
  { component: <SlideWhatWePresent />,           label: "Prezentace",        section: "Obsah" },
  { component: <SlideTeam />,                    label: "Tým",               section: "Tým" },
  { component: <SlideDays />,                    label: "Harmonogram",       section: "Tým" },
  { component: <SlideTransport />,               label: "Doprava",           section: "Logistika" },
  { component: <SlideChecklistTransport />,      label: "✓ Doprava",         section: "Logistika" },
  { component: <SlideChecklistAttendance />,     label: "✓ Účast",           section: "Logistika" },
  { component: <SlideAccommodation />,           label: "Ubytování",         section: "Logistika" },
  { component: <SlideCalendar />,                label: "Schůzky GCal",      section: "Logistika" },
  { component: <SlideMarketingKit />,            label: "MKT materiály",     section: "MKT materiály" },
  { component: <SlideDressCode />,               label: "Dress Code",        section: "Dress Code" },
  { component: <SlideDressCodeBudget />,         label: "Rozpočet oblečení", section: "Dress Code" },
  { component: <SlideGifts />,                   label: "Dárky",             section: "Dárky" },
  { component: <SlideGiftsBudget />,             label: "Rozpočet dárků",    section: "Dárky" },
  { component: <SlideBoothBudget />,             label: "Stánek MLT",        section: "Stánek" },
  { component: <SlideExponexOffer />,            label: "Exponex nabídka",   section: "Stánek" },
  { component: <SlideBoothComparison />,         label: "Porovnání",         section: "Stánek" },
  { component: <SlideTotalCosts />,              label: "Celkové náklady",   section: "Souhrn" },
];

export const SECTIONS = [
  { label: "Úvod",          slideIndex: 0 },
  { label: "Obsah",         slideIndex: 1 },
  { label: "Tým",           slideIndex: 2 },
  { label: "Logistika",     slideIndex: 4 },
  { label: "MKT materiály", slideIndex: 9 },
  { label: "Dress Code",    slideIndex: 10 },
  { label: "Dárky",         slideIndex: 12 },
  { label: "Stánek",        slideIndex: 14 },
  { label: "Souhrn",        slideIndex: 17 },
];

type Direction = "forward" | "backward" | null;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<Direction>(null);
  const [animating, setAnimating] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const goTo = useCallback(
    (index: number) => {
      if (index === current || animating) return;
      const dir: Direction = index > current ? "forward" : "backward";
      setDirection(dir);
      setAnimating(true);

      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
        setDirection(null);
        // Scroll to top when changing slides
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 260);
    },
    [current, animating]
  );

  const next = useCallback(() => goTo(Math.min(current + 1, SLIDES.length - 1)), [current, goTo]);
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (drawerOpen) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(SLIDES.length - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, goTo, drawerOpen]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) next();
        else prev();
      }
    },
    [next, prev]
  );

  const exitStyle: React.CSSProperties = animating
    ? {
        opacity: 0,
        transform: direction === "forward" ? "translateX(-24px)" : "translateX(24px)",
        transition: "opacity 260ms ease, transform 260ms ease",
        pointerEvents: "none",
      }
    : {};

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "var(--color-at-blue-v1)" }}>
      {/* Sticky nav */}
      <SlideNav
        current={current}
        total={SLIDES.length}
        sections={SECTIONS}
        onPrev={prev}
        onNext={next}
        onGoTo={goTo}
        onOpenDrawer={() => setDrawerOpen(true)}
      />

      {/* Slide content – scrollable */}
      <main
        style={{ flex: 1 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div style={{ minHeight: "calc(100vh - 52px)", display: "flex", flexDirection: "column", paddingBottom: 48, ...exitStyle }}>
          {SLIDES[current].component}
        </div>

        {/* Slide counter strip at bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            paddingBottom: 16,
          }}
        >
          {/* Dots – visible on sm+ */}
          <div className="hidden sm:flex" style={{ gap: 6 }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Přejít na slide ${i + 1}`}
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === current ? "var(--color-at-red)" : "var(--color-at-blue-v2)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 250ms ease, background 200ms",
                }}
              />
            ))}
          </div>

          {/* Text counter – visible on mobile */}
          <span className="sm:hidden text-xs font-mono" style={{ color: "var(--color-at-blue-v4)" }}>
            {String(current + 1).padStart(2, "0")}
            {" "}<span style={{ color: "var(--color-at-blue-v2)" }}>/</span>{" "}
            {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </main>

      {/* Scroll to top */}
      <ScrollToTop />

      {/* Slide drawer */}
      <SlideDrawer
        open={drawerOpen}
        current={current}
        slides={SLIDES}
        sections={SECTIONS}
        onGoTo={(i) => { goTo(i); setDrawerOpen(false); }}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
