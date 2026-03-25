"use client";

import { useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        setError(data.error ?? "Nesprávné heslo.");
        setPassword("");
        inputRef.current?.focus();
      }
    } catch {
      setError("Chyba připojení. Zkuste to znovu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-at-blue-v1)",
        padding: "24px",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        {/* AIR TEAM wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 3,
              height: 22,
              borderRadius: 2,
              background: "var(--color-at-red)",
            }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-at-blue-a5)",
            }}
          >
            AIR TEAM
          </span>
        </div>

        {/* Card */}
        <div
          style={{
            background: "var(--color-at-blue)",
            border: "1px solid var(--color-at-blue-v2)",
            borderRadius: 12,
            padding: "36px 32px",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: "var(--color-at-white)",
              margin: "0 0 4px",
              letterSpacing: "-0.02em",
            }}
          >
            AIR TEAM × AERO EXPO 2026
          </h1>
          <p
            style={{
              fontSize: 13,
              color: "var(--color-at-blue-v5)",
              margin: "0 0 28px",
            }}
          >
            Přístup chráněn heslem.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Zadejte heslo"
              autoFocus
              autoComplete="current-password"
              disabled={loading}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "var(--color-at-blue-v1)",
                border: `1px solid ${error ? "var(--color-at-red)" : "var(--color-at-blue-v3)"}`,
                borderRadius: 6,
                color: "var(--color-at-white)",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 200ms",
                marginBottom: error ? 8 : 16,
              }}
            />

            {error && (
              <p
                style={{
                  fontSize: 12,
                  color: "var(--color-at-red)",
                  margin: "0 0 16px",
                  textAlign: "left",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password.trim()}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "12px 16px",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.04em",
                borderRadius: 6,
                ...(loading && {
                  background: "var(--color-at-blue-v2)",
                  borderColor: "var(--color-at-blue-v2)",
                }),
              }}
            >
              {loading ? "Ověřuji…" : "Otevřít prezentaci"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p
          style={{
            marginTop: 24,
            fontSize: 11,
            color: "var(--color-at-blue-v4)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Friedrichshafen · 22.–25. 4. 2026
        </p>
      </div>
    </div>
  );
}
