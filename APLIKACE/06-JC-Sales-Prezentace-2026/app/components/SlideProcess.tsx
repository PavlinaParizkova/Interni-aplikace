"use client";

import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideProcess({ slide }: Props) {
  const steps = slide.steps ?? [];

  return (
    <SlideShell slide={slide}>
      <div className="slide-content slide-content-top">
        {/* Header */}
        <div style={{ marginBottom: "1.75rem" }}>
          {slide.label && (
            <div className="section-label fade-up fade-up-1">{slide.label}</div>
          )}
          <h2 className="section-h2 fade-up fade-up-2">{slide.headline}</h2>
        </div>

        {/* Steps */}
        <div className="process-steps fade-up fade-up-3">
          {steps.map((step, i) => (
            <div key={i} className="process-step">
              {/* Connector line between steps (decorative, desktop only) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "-0.75rem",
                    width: "1.5rem",
                    height: 1,
                    background: "var(--color-at-blue-v3)",
                    zIndex: 1,
                  }}
                />
              )}
              <div className="process-step-num">{step.num}</div>
              <div className="process-step-title">{step.title}</div>
              <div className="process-step-text">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
