"use client";

import { type SlideData } from "../slides";
import SlideShell from "./SlideShell";

interface Props {
  slide: SlideData;
}

export default function SlideService({ slide }: Props) {
  const svc = slide.service;
  if (!svc) return null;

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

        {/* Situation / Action / Result */}
        <div className="service-grid">
          {/* Situation */}
          <div className="fade-up fade-up-3">
            <div className="service-block-label">Situation</div>
            <p className="service-block-text">{svc.situation}</p>
          </div>

          {/* What we do */}
          <div className="fade-up fade-up-3">
            <div className="service-block-label">What we do</div>
            <p className="service-block-text">{svc.action}</p>
          </div>

          {/* Result – full width, highlighted */}
          <div className="service-result fade-up fade-up-4" style={{ gridColumn: "1 / -1" }}>
            <div className="service-block-label" style={{ color: "var(--color-at-red)", marginBottom: "0.5rem" }}>
              ✓ Result
            </div>
            <p className="service-block-text" style={{ color: "var(--color-at-white)", fontWeight: 500 }}>
              {svc.result}
            </p>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
