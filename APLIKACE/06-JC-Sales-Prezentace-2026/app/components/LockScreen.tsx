"use client";

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--color-at-blue-v1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Dot grid background */}
      <div className="bg-dots" style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none" }} />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(35,81,124,0.35) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Red accent line – top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--color-at-red)" }} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
          width: "100%",
          maxWidth: 440,
        }}
      >
        {/* Logo */}
        <JetConceptLogo />

        {/* Enter button */}
        <button
          onClick={onUnlock}
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center" }}
        >
          Presentation
        </button>

        {/* Footer note */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.4 }}>
          <div style={{ width: 2, height: 12, borderRadius: 1, background: "var(--color-at-red)" }} />
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-blue-v5)" }}>
            AIR TEAM | YOUR MISSION. OUR TECHNOLOGY.
          </span>
        </div>
      </div>
    </div>
  );
}

function JetConceptLogo() {
  return (
    <img
      src="/logos/ATM_logo_Jet_Concept_red_white.svg"
      alt="AIR TEAM Jet Concept"
      style={{ width: 320, height: "auto", display: "block" }}
    />
  );
}
