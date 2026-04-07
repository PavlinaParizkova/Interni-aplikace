"use client";

import { type SlideData } from "../slides";

interface Props {
  slide: SlideData;
}

export default function SlideBeforeAfter({ slide }: Props) {
  return (
    <div
      className="slide"
      style={{
        background: "var(--color-at-blue-v1)",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {/* LEFT — Old Design */}
      <div style={{ flex: 1, position: "relative", minWidth: 0 }}>
        {slide.photoBefore && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(/photos/${encodeURIComponent(slide.photoBefore)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        {/* Label — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(2rem, 5vh, 4rem)",
            left: "clamp(2rem, 5vw, 4rem)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-at-white)",
              textShadow: "0 1px 6px rgba(0,0,0,0.7)",
              marginBottom: "0.6rem",
            }}
          >
            Old Design
          </div>
          <div
            style={{
              width: 40,
              height: 2,
              background: "var(--color-at-blue-v3)",
            }}
          />
        </div>
      </div>

      {/* Divider */}
      <div
        aria-hidden="true"
        style={{
          width: 2,
          background: "var(--color-at-blue-v2)",
          flexShrink: 0,
          zIndex: 10,
          position: "relative",
        }}
      >
        {/* Center pill */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "var(--color-at-blue-v1)",
            border: "2px solid var(--color-at-blue-v3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.5rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--color-at-blue-v4)",
          }}
        >
          VS
        </div>
      </div>

      {/* RIGHT — New Design */}
      <div style={{ flex: 1, position: "relative", minWidth: 0 }}>
        {slide.photoAfter && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(/photos/${encodeURIComponent(slide.photoAfter)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        {/* Label — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "clamp(2rem, 5vh, 4rem)",
            right: "clamp(2rem, 5vw, 4rem)",
            zIndex: 10,
            textAlign: "right",
          }}
        >
          <div
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-at-red)",
              textShadow: "0 1px 6px rgba(0,0,0,0.7)",
              marginBottom: "0.6rem",
            }}
          >
            New Design
          </div>
          <div
            style={{
              width: 40,
              height: 2,
              background: "var(--color-at-red)",
              marginLeft: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
