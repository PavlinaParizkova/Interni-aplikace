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
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)",
          pointerEvents: "none",
        }}
      />
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--color-at-blue-v3) 0%, transparent 65%)",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      />

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
        {/* Logo SVG */}
        <JetConceptLogo />

        {/* Lock form */}
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
          <div style={{ position: "relative" }}>
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(false); }}
              placeholder="Heslo / Password"
              autoComplete="off"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "0.875rem 1.25rem",
                borderRadius: 8,
                border: `1px solid ${error ? "var(--color-at-red)" : "var(--color-at-blue-v3)"}`,
                background: "var(--color-at-blue-v2)",
                color: "var(--color-at-white)",
                fontSize: "0.95rem",
                fontFamily: "inherit",
                letterSpacing: value ? "0.2em" : "normal",
                outline: "none",
                transition: "border-color 200ms",
              }}
              onFocus={(e) => {
                if (!error) e.currentTarget.style.borderColor = "var(--color-at-blue-v4)";
              }}
              onBlur={(e) => {
                if (!error) e.currentTarget.style.borderColor = "var(--color-at-blue-v3)";
              }}
            />
          </div>

          {error && (
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                color: "var(--color-at-red)",
                textAlign: "center",
                letterSpacing: "0.04em",
              }}
            >
              Nesprávné heslo. Zkuste to znovu.
            </p>
          )}

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Odemknout prezentaci
          </button>
        </form>

        {/* Footer label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.45 }}>
          <div style={{ width: 2, height: 12, borderRadius: 1, background: "var(--color-at-red)" }} />
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-at-blue-v5)" }}>
            Interní dokument · Důvěrné
          </span>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%   { transform: translateX(0); }
          15%  { transform: translateX(-8px); }
          30%  { transform: translateX(8px); }
          45%  { transform: translateX(-6px); }
          60%  { transform: translateX(6px); }
          75%  { transform: translateX(-3px); }
          90%  { transform: translateX(3px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function JetConceptLogo() {
  return (
    <img
      src="/ATM_logo_Jet_Concept_red_white.svg"
      alt="AIR TEAM Jet Concept"
      style={{ width: 320, height: "auto", display: "block" }}
    />
  );
}
