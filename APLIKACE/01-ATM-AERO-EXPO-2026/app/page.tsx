"use client";

import { useState, useEffect, useCallback } from "react";
import SlideNav from "./components/SlideNav";
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

const SLIDES = [
  { component: <SlideCover />,                  label: "Úvod",           section: "Úvod" },
  { component: <SlideWhatWePresent />,           label: "Prezentace",     section: "Obsah" },
  { component: <SlideTeam />,                    label: "Tým",            section: "Tým" },
  { component: <SlideDays />,                    label: "Harmonogram",    section: "Tým" },
  { component: <SlideTransport />,               label: "Doprava",        section: "Logistika" },
  { component: <SlideChecklistTransport />,      label: "✓ Doprava",      section: "Logistika" },
  { component: <SlideChecklistAttendance />,     label: "✓ Účast",        section: "Logistika" },
  { component: <SlideMarketingKit />,            label: "MKT materiály",  section: "MKT materiály" },
  { component: <SlideDressCode />,               label: "Dress Code",     section: "Dress Code" },
  { component: <SlideGifts />,                   label: "Dárky",          section: "Dárky" },
  { component: <SlideGiftsBudget />,             label: "Rozpočet dárků", section: "Dárky" },
  { component: <SlideBoothBudget />,             label: "Stánek MLT",     section: "Stánek" },
  { component: <SlideBoothComparison />,         label: "Porovnání",      section: "Stánek" },
];

const SECTIONS = [
  { label: "Úvod",          slideIndex: 0 },
  { label: "Obsah",         slideIndex: 1 },
  { label: "Tým",           slideIndex: 2 },
  { label: "Logistika",     slideIndex: 4 },
  { label: "MKT materiály", slideIndex: 7 },
  { label: "Dress Code",    slideIndex: 8 },
  { label: "Dárky",         slideIndex: 9 },
  { label: "Stánek",        slideIndex: 11 },
];

type Direction = "forward" | "backward" | null;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<Direction>(null);
  const [animating, setAnimating] = useState(false);

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
      }, 260);
    },
    [current, animating]
  );

  const next = useCallback(() => goTo(Math.min(current + 1, SLIDES.length - 1)), [current, goTo]);
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
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
  }, [next, prev, goTo]);

  const exitStyle: React.CSSProperties = animating
    ? {
        opacity: 0,
        transform: direction === "forward" ? "translateX(-24px)" : "translateX(24px)",
        transition: "opacity 260ms ease, transform 260ms ease",
        pointerEvents: "none",
      }
    : {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "var(--color-at-blue-v1)",
        overflow: "hidden",
      }}
    >
      <SlideNav
        current={current}
        total={SLIDES.length}
        sections={SECTIONS}
        onPrev={prev}
        onNext={next}
        onGoTo={goTo}
      />

      {/* Slide area */}
      <main
        style={{
          flex: 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Slide counter dot rail at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 6,
            zIndex: 10,
          }}
        >
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

        {/* Slide content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            paddingBottom: 40,
            ...exitStyle,
          }}
        >
          {SLIDES[current].component}
        </div>
      </main>
    </div>
  );
}
