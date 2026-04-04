"use client";

import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideSection({ slide }: Props) {
  const lines = slide.headline.split("\n");

  return (
    <SlideShell slide={slide} className="slide-section">
      <div
        className="slide-content"
        style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}
      >
        {/* Optional label */}
        {slide.label && (
          <div className="section-label fade-up fade-up-1" style={{ marginBottom: "1.5rem" }}>
            {slide.label}
          </div>
        )}

        {/* Large centered headline */}
        <h2
          className="fade-up fade-up-2"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: 700,
            lineHeight: 1.22,
            letterSpacing: "-0.02em",
            color: "var(--color-at-white)",
            maxWidth: "16ch",
          }}
        >
          {lines.map((line, i) => (
            <span key={i} style={{ display: "block" }}>
              {i === lines.length - 1
                ? <span style={{ color: "var(--color-at-red)" }}>{line}</span>
                : line}
            </span>
          ))}
        </h2>

        {/* Optional subheadline */}
        {slide.subheadline && (
          <p
            className="fade-up fade-up-3"
            style={{
              marginTop: "2rem",
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--color-at-blue-v5)",
              maxWidth: "48ch",
            }}
          >
            {slide.subheadline}
          </p>
        )}

      </div>
    </SlideShell>
  );
}
