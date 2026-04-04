"use client";

import { useEffect, useState } from "react";
import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideGrid({ slide }: Props) {
  const cards = slide.cards ?? [];
  const isStatSlide = slide.id === "keyfigures";

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    if (cards.length === 0) return;
    // Start auto-cycling after a short delay so the slide-in animation finishes
    const start = setTimeout(() => {
      setActiveIdx(0);
      const interval = setInterval(() => {
        setActiveIdx((prev) => {
          if (prev === null) return 0;
          return (prev + 1) % cards.length;
        });
      }, 1800);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(start);
  }, [cards.length]);

  return (
    <SlideShell slide={slide}>
      <div className="slide-content">
        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          {slide.label && (
            <div className="section-label fade-up fade-up-1">{slide.label}</div>
          )}
          <h2 className="section-h2 fade-up fade-up-2">{slide.headline}</h2>
        </div>

        {/* Cards grid */}
        <div
          className="cards-grid fade-up fade-up-3"
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(min(${cards.length === 5 ? "200px" : "240px"}, 100%), 1fr))`,
          }}
        >
          {cards.map((card, i) => {
            const isActive = hoveredIdx === null && activeIdx === i;
            const isHovered = hoveredIdx === i;
            return (
              <div
                key={i}
                className="card"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  animationDelay: `${(i + 3) * 60}ms`,
                  borderColor: isActive || isHovered ? "var(--color-at-red)" : undefined,
                  transform: isActive || isHovered ? "translateY(-4px)" : undefined,
                  boxShadow: isActive || isHovered
                    ? "0 10px 28px rgba(0,0,0,0.35), 0 0 0 1px var(--color-at-red-15)"
                    : undefined,
                  background: isActive || isHovered
                    ? "rgba(16,37,62,0.98)"
                    : undefined,
                  transition: "border-color 300ms, transform 300ms, box-shadow 300ms, background 300ms",
                }}
              >
                {isStatSlide ? (
                  <>
                    <div style={{
                      fontSize: "clamp(2rem, 4vw, 3.5rem)",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "var(--color-at-red)",
                      marginBottom: "0.5rem",
                      letterSpacing: "-0.02em",
                    }}>
                      {card.num}
                    </div>
                    <div style={{
                      fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
                      fontWeight: 700,
                      color: "var(--color-at-white)",
                      lineHeight: 1.3,
                      marginBottom: "0.4rem",
                    }}>
                      {card.title}
                    </div>
                    <div style={{
                      fontSize: "clamp(0.78rem, 0.9vw, 0.875rem)",
                      lineHeight: 1.55,
                      color: "var(--color-at-blue-a5)",
                    }}>
                      {card.body}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-number">{card.num}</div>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.body}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}
