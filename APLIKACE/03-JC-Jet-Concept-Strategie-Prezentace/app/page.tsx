"use client";

import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { translations, type Lang } from "./translations";

export default function Page() {
  const [lang, setLang] = useState<Lang>("cs");
  const t = translations[lang];

  return (
    <>
      {/* ─── STICKY NAV ───────────────────────────────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: 52,
          background: "var(--color-at-blue-v1)",
          borderBottom: "1px solid var(--color-at-blue-v2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1rem, 4vw, 3rem)",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div
            style={{
              width: 4,
              height: 20,
              borderRadius: 2,
              background: "var(--color-at-red)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-at-blue-a5)",
            }}
          >
            AIR TEAM
          </span>
          <span style={{ color: "var(--color-at-blue-v3)", fontSize: 11 }}>·</span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-at-blue-v4)",
            }}
          >
            Jet Concept 2026
          </span>
        </div>

        {/* Anchor links – hidden on mobile via .nav-links class */}
        <nav
          className="scrollbar-none nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            overflowX: "auto",
          }}
        >
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "var(--color-at-blue-v5)",
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: 5,
                whiteSpace: "nowrap",
                transition: "background 150ms, color 150ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-at-blue-v2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-at-white)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-at-blue-v5)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
          {(["cs", "en"] as Lang[]).map((l, i) => (
            <span key={l} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {i > 0 && (
                <span style={{ color: "var(--color-at-blue-v3)", fontSize: 10 }}>|</span>
              )}
              <button
                onClick={() => setLang(l)}
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: lang === l ? "var(--color-at-white)" : "var(--color-at-blue-v4)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 6px",
                  borderRadius: 4,
                  transition: "color 150ms",
                }}
              >
                {l.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(1rem, 4vw, 3rem) 6rem" }}>

        {/* ═══════════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            paddingTop: "clamp(3.5rem, 8vw, 6rem)",
            paddingBottom: "clamp(3rem, 7vw, 5rem)",
            overflow: "hidden",
          }}
        >
          {/* Grid background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.05,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 39px, var(--color-at-white-40) 39px, var(--color-at-white-40) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, var(--color-at-white-40) 39px, var(--color-at-white-40) 40px)",
              pointerEvents: "none",
            }}
          />
          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              bottom: -80,
              right: -80,
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: "radial-gradient(circle, var(--color-at-blue-v3) 0%, transparent 65%)",
              opacity: 0.2,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Pre-label */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
              <div style={{ width: 3, height: 18, borderRadius: 2, background: "var(--color-at-red)" }} />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--color-at-blue-a5)",
                }}
              >
                AIR TEAM Group
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(3.5rem, 9vw, 7rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "var(--color-at-white)",
                margin: 0,
                marginBottom: "0.6rem",
              }}
            >
              Jet Concept
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                fontWeight: 300,
                color: "var(--color-at-blue-a5)",
                letterSpacing: "0.04em",
                marginBottom: "2rem",
              }}
            >
              {t.hero.tagline}
            </p>

            {/* Divider line */}
            <div
              style={{
                width: "clamp(3rem, 8vw, 5rem)",
                height: 3,
                background: "var(--color-at-red)",
                borderRadius: 2,
                marginBottom: "2rem",
              }}
            />

            {/* Lead text */}
            <p
              style={{
                maxWidth: 680,
                fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
                lineHeight: 1.7,
                color: "var(--color-at-blue-v5)",
                marginBottom: "2.5rem",
              }}
            >
              {t.hero.lead}
            </p>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "1.75rem" }}>
              {t.hero.badges.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 6,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    background: "var(--color-at-blue-v2-60)",
                    border: "1px solid var(--color-at-blue-v3)",
                    color: "var(--color-at-blue-a5)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Slogan */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 3, height: 18, borderRadius: 2, background: "var(--color-at-red)", flexShrink: 0 }} />
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--color-at-blue-a5)",
                }}
              >
                {t.hero.slogan}
              </span>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            CO JSME / ABOUT
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="co-jsme" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-at-white)",
              marginBottom: "0.75rem",
            }}
          >
            {t.sections.s01.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s01.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            {t.about.p1}
          </p>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            {t.about.p2}
          </p>

          {/* H3 grid: Identita + Vize/Mise/Poslání */}
          <div className="grid-auto">
            {/* Identita */}
            <div className="card" style={{ gridColumn: "span 1" }}>
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-at-white)",
                  marginBottom: "0.75rem",
                }}
              >
                {t.about.identityTitle}
              </h3>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-at-white)", lineHeight: 1.5, marginBottom: "1rem" }}>
                {t.about.identityDesc}
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7 }}>
                {t.about.identityBody}
              </p>
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--color-at-blue-v3)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                {t.about.identityTags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 4,
                      background: "var(--color-at-blue-v3-40)",
                      border: "1px solid var(--color-at-blue-v3)",
                      color: "var(--color-at-blue-a5)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Vize / Vision */}
            <div className="card">
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-at-white)",
                  marginBottom: "0.75rem",
                }}
              >
                {t.about.visionTitle}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7 }}>
                {t.about.visionDesc}
              </p>
            </div>

            {/* Mise / Mission */}
            <div className="card">
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-at-white)",
                  marginBottom: "0.75rem",
                }}
              >
                {t.about.missionTitle}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7 }}>
                {t.about.missionDesc}
              </p>
            </div>

            {/* Poslání / Purpose */}
            <div className="card">
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-at-white)",
                  marginBottom: "0.75rem",
                }}
              >
                {t.about.purposeTitle}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7 }}>
                {t.about.purposeDesc}
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            PORTFOLIO
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="portfolio" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-at-white)",
              marginBottom: "0.75rem",
            }}
          >
            {t.sections.s02.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s02.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            {t.portfolio.perex}
          </p>

          <div className="grid-auto grid-auto-md">
            {t.portfolio.items.map((item) => (
              <div
                key={item.number}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "monospace",
                      color: "var(--color-at-blue-v4)",
                      flexShrink: 0,
                      paddingTop: 3,
                    }}
                  >
                    {item.number}
                  </span>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--color-at-white)",
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Situace / Situation */}
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", margin: "0 0 0.25rem 0" }}>
                    {t.ui.situationLabel}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6, margin: 0 }}>
                    {item.situation}
                  </p>
                </div>

                {/* Co uděláme / What We Do */}
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", margin: "0 0 0.25rem 0" }}>
                    {t.ui.actionLabel}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6, margin: 0 }}>
                    {item.action}
                  </p>
                </div>

                {/* Výsledek / Outcome */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--color-at-blue-v3)",
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 3,
                      height: 14,
                      borderRadius: 2,
                      background: "var(--color-at-red)",
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                  />
                  <p style={{ fontSize: "0.8rem", color: "var(--color-at-blue-a5)", lineHeight: 1.5, margin: 0 }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            SEGMENTY / SEGMENTS
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="segmenty" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-at-white)",
              marginBottom: "0.75rem",
            }}
          >
            {t.sections.s03.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s03.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            {t.segments.perex}
          </p>

          <div className="grid-auto grid-auto-lg">
            {/* Business */}
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "var(--color-at-red-15)",
                    border: "1px solid var(--color-at-red-30)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>✈</span>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-at-white)", margin: 0 }}>
                  {t.segments.businessTitle}
                </h3>
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65, marginBottom: "1rem" }}>
                {t.segments.businessDesc}
              </p>

              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-at-white)",
                  marginBottom: "0.5rem",
                }}
              >
                {t.segments.businessHelp}
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 1rem" }}>
                {t.segments.businessItems.map((item) => (
                  <li
                    key={item}
                    style={{ fontSize: "0.85rem", color: "var(--color-at-blue-v5)", lineHeight: 1.7, marginBottom: "0.3rem" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial */}
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "var(--color-at-blue-v4-20)",
                    border: "1px solid var(--color-at-blue-v4-40)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>⚙</span>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-at-white)", margin: 0 }}>
                  {t.segments.commercialTitle}
                </h3>
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65, marginBottom: "1rem" }}>
                {t.segments.commercialDesc}
              </p>

              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-at-white)",
                  marginBottom: "0.5rem",
                }}
              >
                {t.segments.commercialHelp}
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 1rem" }}>
                {t.segments.commercialItems.map((item) => (
                  <li
                    key={item}
                    style={{ fontSize: "0.85rem", color: "var(--color-at-blue-v5)", lineHeight: 1.7, marginBottom: "0.3rem" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Klíčoví zákazníci / Key Customers */}
            <div
              className="card"
              style={{
                gridColumn: "1 / -1",
                background: "var(--color-at-blue-v1-60)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-at-white)",
                  marginBottom: "1rem",
                }}
              >
                {t.segments.customersTitle}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {t.segments.customers.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      padding: "6px 14px",
                      borderRadius: 6,
                      background: "var(--color-at-blue-v2)",
                      border: "1px solid var(--color-at-blue-v3)",
                      color: "var(--color-at-blue-a5)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            PROČ JET CONCEPT / WHY JET CONCEPT
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="proc-Jet Concept" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-at-white)",
              marginBottom: "0.75rem",
            }}
          >
            {t.sections.s04.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s04.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            {t.why.perex}
          </p>

          {/* H3: Value Pillars */}
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-at-white)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            {t.why.pillarsTitle}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "3rem" }}>
            {t.why.valuePillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  borderRadius: 8,
                  background: "var(--color-at-blue-v2)",
                  border: "1px solid var(--color-at-blue-v3)",
                }}
              >
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    fontFamily: "monospace",
                    color: "var(--color-at-blue-v5)",
                    flexShrink: 0,
                    lineHeight: 1.4,
                    paddingTop: 2,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{ margin: "0 0 0.25rem 0", fontSize: "0.9rem", fontWeight: 700, color: "var(--color-at-white)", lineHeight: 1.4 }}>
                    {pillar.title}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* H3: Situations */}
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-at-white)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            {t.why.situationsTitle}
          </h3>
          <div className="grid-auto grid-auto-lg" style={{ gap: "1rem" }}>
            {t.why.situations.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "monospace",
                      color: "var(--color-at-blue-v4)",
                      flexShrink: 0,
                      paddingTop: 2,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {t.why.situationLabel}
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    color: "var(--color-at-blue-v5)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.situation}
                </p>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start", paddingTop: "0.25rem", borderTop: "1px solid var(--color-at-blue-v3)" }}>
                  <div
                    style={{
                      width: 3,
                      height: 14,
                      borderRadius: 2,
                      background: "var(--color-at-red)",
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                  />
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--color-at-blue-a5)", lineHeight: 1.6 }}>
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            JAK PRACUJEME / HOW WE WORK
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="jak-pracujeme" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-at-white)",
              marginBottom: "0.75rem",
            }}
          >
            {t.sections.s05.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s05.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            {t.howWeWork.perex}
          </p>

          {/* H3: Principles */}
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-at-white)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            {t.howWeWork.principlesTitle}
          </h3>
          <div className="grid-auto grid-auto-sm" style={{ gap: "1rem", marginBottom: "3rem" }}>
            {t.howWeWork.principles.map((p) => (
              <div
                key={p.n}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    fontFamily: "monospace",
                    color: "var(--color-at-blue-v3)",
                    lineHeight: 1,
                  }}
                >
                  {p.n}
                </span>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-at-white)", margin: 0, lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65, margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* H3: Hooks & Formulations */}
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-at-white)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            {t.howWeWork.hooksTitle}
          </h3>
          <p style={{ color: "var(--color-at-blue-v4)", fontSize: "0.8rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
            {t.howWeWork.hooksNote}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {t.howWeWork.formulations.map((f, i) => (
              <div
                key={i}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: 8,
                  background: "var(--color-at-blue-v1-70)",
                  border: "1px solid var(--color-at-blue-v3)",
                  borderLeftColor: "var(--color-at-red)",
                  borderLeftWidth: 3,
                  borderLeftStyle: "solid",
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.5rem 0",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--color-at-white)",
                    lineHeight: 1.4,
                  }}
                >
                  &ldquo;{f.quote}&rdquo;
                </p>
                <p
                  style={{
                    margin: "0 0 0.75rem 0",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-at-blue-v4)",
                  }}
                >
                  {f.context}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    color: "var(--color-at-blue-v5)",
                    lineHeight: 1.65,
                  }}
                >
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            JAK TO FUNGUJE / HOW IT WORKS
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="jak-to-funguje" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-at-white)",
              marginBottom: "0.75rem",
            }}
          >
            {t.sections.s06.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s06.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            {t.process.perex}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {t.process.steps.map((step, i) => (
              <div
                key={step.n}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  borderRadius: 8,
                  background: "var(--color-at-blue-v2)",
                  border: "1px solid var(--color-at-blue-v3)",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 900,
                      fontFamily: "monospace",
                      color: "var(--color-at-blue-v4)",
                      lineHeight: 1,
                    }}
                  >
                    {step.n}
                  </span>
                  {i < t.process.steps.length - 1 && (
                    <div style={{ width: 1, height: 20, background: "var(--color-at-blue-v3)" }} />
                  )}
                </div>
                <div>
                  <p style={{ margin: "0 0 0.25rem 0", fontSize: "0.95rem", fontWeight: 700, color: "var(--color-at-white)", lineHeight: 1.3 }}>
                    {step.title}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            KONTAKT / CONTACT
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="kontakt" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-at-white)",
              marginBottom: "0.75rem",
            }}
          >
            {t.sections.s07.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.contact.title}
          </h2>
          <p
            style={{
              color: "var(--color-at-blue-a5)",
              maxWidth: 600,
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              fontSize: "0.95rem",
            }}
          >
            {t.contact.perex}
          </p>

          <div
            style={{
              padding: "2.5rem",
              borderRadius: 12,
              background: "var(--color-at-blue-v2)",
              border: "1px solid var(--color-at-blue-v3)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              maxWidth: 700,
            }}
          >
            {/* Key messages */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {t.contact.messages.map((msg) => (
                <div key={msg} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--color-at-red)",
                      flexShrink: 0,
                      marginTop: 6,
                    }}
                  />
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-at-blue-a5)", lineHeight: 1.6 }}>
                    {msg}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="mailto:info@Jet Concept.aero"
                className="btn-primary"
              >
                {t.contact.cta}
              </a>
              <span style={{ fontSize: "0.8rem", color: "var(--color-at-blue-v4)" }}>
                info@Jet Concept.aero
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* ─── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid var(--color-at-blue-v2)",
          padding: "1.5rem clamp(1rem, 4vw, 3rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 3, height: 14, borderRadius: 2, background: "var(--color-at-red)" }} />
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-at-blue-a5)" }}>
            AIR TEAM
          </span>
          <span style={{ color: "var(--color-at-blue-v3)", fontSize: "0.7rem" }}>·</span>
          <span style={{ fontSize: "0.7rem", color: "var(--color-at-blue-v4)", letterSpacing: "0.1em" }}>
            {t.footer.label}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-at-blue-v4)" }}>
            YOUR MISSION. OUR TECHNOLOGY.
          </span>
          <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--color-at-blue-v4)", letterSpacing: "0.08em" }}>
            {t.footer.confidential}
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
