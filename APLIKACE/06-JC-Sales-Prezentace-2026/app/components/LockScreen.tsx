"use client";

import { useState, useRef, useEffect } from "react";

const PASSWORD = "JetConcepT2026";

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setValue("");
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2500);
      inputRef.current?.focus();
    }
  }

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

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            animation: shake ? "shake 0.45s ease" : "none",
          }}
        >
          <input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="Password"
            autoComplete="off"
            style={{
              width: "100%",
              padding: "0.875rem 1.25rem",
              borderRadius: 8,
              border: `1px solid ${error ? "var(--color-at-red)" : "var(--color-at-blue-v3)"}`,
              background: "rgba(27,63,103,0.5)",
              color: "var(--color-at-white)",
              fontSize: "0.95rem",
              fontFamily: "inherit",
              letterSpacing: value ? "0.2em" : "normal",
              outline: "none",
              transition: "border-color 200ms",
              backdropFilter: "blur(8px)",
            }}
            onFocus={(e) => {
              if (!error) e.currentTarget.style.borderColor = "var(--color-at-blue-v4)";
            }}
            onBlur={(e) => {
              if (!error) e.currentTarget.style.borderColor = "var(--color-at-blue-v3)";
            }}
          />

          {error && (
            <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--color-at-red)", textAlign: "center", letterSpacing: "0.04em" }}>
              Incorrect password. Please try again.
            </p>
          )}

          <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            Unlock presentation
          </button>
        </form>

        {/* Footer note */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.4 }}>
          <div style={{ width: 2, height: 12, borderRadius: 1, background: "var(--color-at-red)" }} />
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-blue-v5)" }}>
            Internal document · Confidential
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
