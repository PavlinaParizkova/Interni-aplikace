"use client";

import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideTitle({ slide }: Props) {
  const lines = slide.headline.split("\n");
  const lineCount = lines.length;

  const fontSize =
    lineCount >= 4
      ? "clamp(2.5rem, min(5.5vw, 11dvh), 5.5rem)"
      : lineCount === 3
      ? "clamp(3rem, min(7vw, 14dvh), 7rem)"
      : "clamp(4rem, min(10vw, 18dvh), 10rem)";

  return (
    <SlideShell
      slide={slide}
      className="slide-title"
    >
      {/* Hero content – left-aligned, vertically centered */}
      <div
        className="slide-content fade-up"
        style={{ justifyContent: "safe center" }}
      >
        {/* Jet Concept logo */}
        <div className="fade-up fade-up-1" style={{ marginBottom: "2rem", width: "100%" }}>
          <img
            src="/logos/ATM_logo_Jet_Concept_red_white.svg"
            alt="AIR TEAM Jet Concept"
            style={{
              height: "clamp(60px, 8vw, 110px)",
              width: "auto",
              display: "block",
            }}
          />
        </div>

        {/* Section label */}
        {slide.label && (
          <p
            className="fade-up fade-up-1 section-label"
            style={{ marginBottom: "1rem", width: "100%" }}
          >
            {slide.label}
          </p>
        )}

        {/* Main headline */}
        <h1
          className="fade-up fade-up-2"
          style={{
            fontSize,
            fontWeight: 700,
            lineHeight: 1.22,
            letterSpacing: "-0.03em",
            color: "var(--color-at-white)",
            marginBottom: "1.75rem",
            width: "100%",
            maxWidth: "min(14ch, 100%)",
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
              fontSize: "clamp(1.1rem, 2vw, 1.8rem)",
              fontWeight: 600,
              lineHeight: 1.35,
              color: "var(--color-at-blue-v5)",
              width: "100%",
              maxWidth: "min(42ch, 100%)",
              marginBottom: "2rem",
              letterSpacing: "-0.01em",
            }}
          >
            {slide.subheadline}
          </p>
        )}

        {/* CTA */}
        {slide.cta && (
          <div
            className="fade-up fade-up-4"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              width: "100%",
              maxWidth: "min(52ch, 100%)",
            }}
          >
            <img
              src="/icons/ATM_odrazka_Red.svg"
              alt=""
              aria-hidden="true"
              style={{ width: 16, height: "auto", flexShrink: 0, marginTop: "0.25em" }}
            />
            <span
              style={{
                fontSize: "clamp(0.9rem, 1.5vw, 1.3rem)",
                fontWeight: 600,
                color: "var(--color-at-blue-v5)",
                letterSpacing: "0.01em",
                lineHeight: 1.5,
              }}
            >
              {slide.cta}
            </span>
          </div>
        )}
      </div>

    </SlideShell>
  );
}
