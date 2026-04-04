"use client";

import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideIdentity({ slide }: Props) {
  const paragraphs = (slide.body ?? "").split("\n\n").filter(Boolean);

  return (
    <SlideShell slide={slide}>
      <div className="slide-content">
        {/* Label */}
        {slide.label && (
          <div className="section-label fade-up fade-up-1">{slide.label}</div>
        )}

        {/* Headline – taglines without bullets */}
        <div
          className="fade-up fade-up-2"
          style={{ margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}
        >
          {slide.headline.split("\n").map((line, i) => (
            <span key={i} style={{
              fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
              fontWeight: 700,
              lineHeight: 1.38,
              letterSpacing: "-0.02em",
              color: "var(--color-at-white)",
              display: "block",
            }}>
              {line}
            </span>
          ))}
        </div>

        {/* Subheadline – sentence below taglines */}
        {slide.subheadline && (
          <p
            className="fade-up fade-up-3"
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--color-at-blue-v5)",
              maxWidth: "60ch",
              marginBottom: "1.75rem",
            }}
          >
            {slide.subheadline}
          </p>
        )}

        {/* Body text – two-column on wide screens */}
        <div
          className="fade-up fade-up-4"
          style={{
            display: "grid",
            gridTemplateColumns: paragraphs.length > 1 ? "repeat(auto-fit, minmax(min(360px, 100%), 1fr))" : "1fr",
            gap: "1.5rem 3rem",
            maxWidth: "90ch",
          }}
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: i === 0 ? "var(--color-at-blue-v5)" : "var(--color-at-blue-a5)",
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
