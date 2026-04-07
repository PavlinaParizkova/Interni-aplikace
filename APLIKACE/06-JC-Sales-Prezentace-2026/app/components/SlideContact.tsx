"use client";

import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideContact({ slide }: Props) {
  return (
    <SlideShell
      slide={slide}
      className="slide-contact"
    >
      <div className="slide-content centered" style={{ gap: "1.5rem" }}>

        {/* AIR TEAM logo */}
        <img
          src="/logos/ATM_logo_inverzni_white_red.svg"
          alt="AIR TEAM"
          className="fade-up fade-up-1"
          style={{ width: "clamp(220px, 28vw, 360px)", height: "auto", display: "block" }}
        />

        {/* Headline */}
        <h2
          className="fade-up fade-up-2"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.28,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "var(--color-at-white)",
            maxWidth: "18ch",
            textAlign: "center",
          }}
        >
          {slide.headline.split("\n").map((line, i, arr) => (
            <span key={i} style={{ display: "block", color: i === arr.length - 1 ? "var(--color-at-red)" : "var(--color-at-white)" }}>
              {line}
            </span>
          ))}
        </h2>

        {/* Thank you */}
        {slide.body && (
          <p
            className="fade-up fade-up-3"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
              lineHeight: 1.6,
              color: "var(--color-at-blue-v5)",
              textAlign: "center",
              maxWidth: "48ch",
              marginTop: "0.5rem",
            }}
          >
            {slide.body}
          </p>
        )}

      </div>
    </SlideShell>
  );
}
