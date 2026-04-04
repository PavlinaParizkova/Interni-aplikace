"use client";

import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideClients({ slide }: Props) {
  const cards = slide.cards ?? [];

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

        {/* Client cards */}
        <div className="cards-grid fade-up fade-up-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="card"
              style={{ borderLeft: "3px solid var(--color-at-blue-v3)", borderRadius: "6px" }}
            >
              <div className="card-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--color-at-red)" }}>{card.num}</span>
                {card.title}
              </div>
              <div className="card-body" style={{ marginTop: "0.4rem" }}>{card.body}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
