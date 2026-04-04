"use client";

import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideTitle({ slide }: Props) {
  const lines = slide.headline.split("\n");

  return (
    <SlideShell
      slide={slide}
      className="slide-title"
    >
      {/* Hero content – left-aligned, vertically centered */}
      <div
        className="slide-content fade-up"
        style={{ justifyContent: "center" }}
      >
        {/* Main headline */}
        <h1
          className="fade-up fade-up-2"
          style={{
            fontSize: "clamp(4rem, 10vw, 10rem)",
            fontWeight: 700,
            lineHeight: 1.22,
            letterSpacing: "-0.03em",
            color: "var(--color-at-white)",
            marginBottom: "1.75rem",
            maxWidth: "14ch",
          }}
        >
          {lines.map((line, i) => (
            <span key={i} style={{ display: "block" }}>
              {i === lines.length - 1
                ? <span style={{ color: "var(--color-at-red)" }}>{line}</span>
                : line}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        {slide.subheadline && (
          <p
            className="fade-up fade-up-3"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
              fontWeight: 600,
              lineHeight: 1.3,
              color: "var(--color-at-blue-v5)",
              maxWidth: "40ch",
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            {slide.subheadline}
          </p>
        )}

        {/* CTA */}
        {slide.cta && (
          <div className="fade-up fade-up-4" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img
              src="/icons/ATM_odrazka_Red.svg"
              alt=""
              aria-hidden="true"
              style={{ width: 16, height: "auto", flexShrink: 0 }}
            />
            <span
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
                fontWeight: 600,
                color: "var(--color-at-blue-v5)",
                letterSpacing: "0.01em",
                lineHeight: 1.4,
              }}
            >
              {slide.cta}
            </span>
          </div>
        )}
      </div>

      {/* Top-right: Jet Concept logo */}
      <div
        className="slide-title-logo"
        style={{
          position: "absolute",
          top: "clamp(5rem, 9vw, 7rem)",
          right: "clamp(1.5rem, 4vw, 3.5rem)",
          zIndex: 20,
          opacity: 0.75,
          pointerEvents: "none",
          maxWidth: "28%",
        }}
      >
        <img
          src="/logos/ATM_logo_Jet_Concept_red_white.svg"
          alt="AIR TEAM Jet Concept"
          style={{
            width: "clamp(100px, 14vw, 200px)",
            height: "auto",
            display: "block",
          }}
        />
      </div>
    </SlideShell>
  );
}
