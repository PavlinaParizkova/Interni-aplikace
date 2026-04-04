"use client";

import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideSegment({ slide }: Props) {
  const bullets = slide.bullets ?? [];

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

        {/* Intro text */}
        {slide.body && (
          <p
            className="body-text fade-up fade-up-3"
            style={{ marginBottom: "1.75rem", maxWidth: "72ch" }}
          >
            {slide.body}
          </p>
        )}

        {/* Bullet list */}
        <ul
          className="fade-up fade-up-4"
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.7rem",
            maxWidth: "72ch",
          }}
        >
          {bullets.map((item, i) => {
            const [bold, ...rest] = item.split(" – ");
            const tail = rest.join(" – ");
            return (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "var(--color-at-blue-a5)",
                }}
              >
                <img
                  src="/icons/ATM_odrazka_Red.svg"
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: 14,
                    height: "auto",
                    flexShrink: 0,
                    marginTop: 6,
                  }}
                />
                <span>
                  <strong style={{ color: "var(--color-at-white)", fontWeight: 600 }}>{bold}</strong>
                  {tail && <span style={{ color: "var(--color-at-blue-a5)" }}> – {tail}</span>}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </SlideShell>
  );
}
