"use client";

import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import LockScreen from "./components/LockScreen";
import { translations, type Lang } from "./translations";

export default function Page() {
  const [unlocked, setUnlocked] = useState(false);
  const [lang, setLang] = useState<Lang>("cs");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!unlocked) {
    return <LockScreen onUnlock={() => setUnlocked(true)} />;
  }
  const t = translations[lang];

  return (
    <>
      {/* ─── STICKY NAV ───────────────────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 50,
          height: 72,
          background: "var(--color-at-blue-v1)",
          borderBottom: "1px solid var(--color-at-blue-v2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1rem, 4vw, 3rem)",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", flexShrink: 0, lineHeight: 0 }}>
          <img
            src="/jet-concept-logo.svg"
            alt="Jet Concept"
            style={{ height: 46, width: "auto" }}
          />
        </a>

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
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
          {(["cs", "en"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: lang === l ? "var(--color-at-white)" : "var(--color-at-blue-a5)",
                background: lang === l ? "var(--color-at-red)" : "var(--color-at-blue-v3)",
                border: `1px solid ${lang === l ? "var(--color-at-red)" : "var(--color-at-blue-v3)"}`,
                cursor: "pointer",
                padding: "4px 10px",
                borderRadius: 4,
                transition: "background 150ms, color 150ms",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}

          {/* Hamburger — pouze mobil */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              width: 32,
              height: 32,
            }}
          >
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                borderRadius: 1,
                background: "var(--color-at-blue-a5)",
                transition: "transform 200ms, opacity 200ms",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                borderRadius: 1,
                background: "var(--color-at-blue-a5)",
                transition: "opacity 200ms",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                borderRadius: 1,
                background: "var(--color-at-blue-a5)",
                transition: "transform 200ms, opacity 200ms",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* ─── MOBILNÍ DROPDOWN MENU ────────────────────────────────────────── */}
      {menuOpen && (
        <nav
          style={{
            position: "fixed",
            top: 72,
            left: 0,
            right: 0,
            zIndex: 49,
            background: "var(--color-at-blue-v1)",
            borderBottom: "1px solid var(--color-at-blue-v2)",
            padding: "1rem clamp(1rem, 4vw, 3rem) 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "var(--color-at-blue-v5)",
                textDecoration: "none",
                padding: "10px 12px",
                borderRadius: 6,
                display: "block",
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

          {/* CS/EN v dropdown */}
          <div
            style={{
              display: "flex",
              gap: 8,
              paddingTop: "0.75rem",
              marginTop: "0.25rem",
              borderTop: "1px solid var(--color-at-blue-v2)",
            }}
          >
            {(["cs", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMenuOpen(false); }}
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: lang === l ? "var(--color-at-white)" : "var(--color-at-blue-a5)",
                  background: lang === l ? "var(--color-at-red)" : "var(--color-at-blue-v3)",
                  border: `1px solid ${lang === l ? "var(--color-at-red)" : "var(--color-at-blue-v3)"}`,
                  cursor: "pointer",
                  padding: "6px 14px",
                  borderRadius: 4,
                  transition: "background 150ms, color 150ms",
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      )}

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "72px clamp(1rem, 4vw, 3rem) 6rem" }}>

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
            {/* Logo */}
            <img
              src="/jet-concept-logo.svg"
              alt="Jet Concept"
              style={{ height: 80, width: "auto", marginBottom: "2rem", display: "block" }}
            />

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
                AIR TEAM holding
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontSize: "clamp(3.5rem, 9vw, 7rem)",
                fontWeight: 700,
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
            KONTEXT / CONTEXT – ORIGIN STORY
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="kontext" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.75rem" }}>
            {t.sections.s00.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "2.5rem" }}>
            {t.sections.s00.title}
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {/* Odkud přicházíme */}
            <div className="card">
              <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", marginBottom: "0.75rem" }}>
                {t.origin.fromTitle}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-at-blue-v5)", lineHeight: 1.7, margin: 0 }}>
                {t.origin.fromText}
              </p>
            </div>

            {/* Proč jsme odešli */}
            <div className="card">
              <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", marginBottom: "0.75rem" }}>
                {t.origin.whyTitle}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-at-blue-v5)", lineHeight: 1.7, margin: 0 }}>
                {t.origin.whyText}
              </p>
            </div>
          </div>

          {/* Kde jsme nyní */}
          <div className="card" style={{ background: "var(--color-at-blue-v2)", borderColor: "var(--color-at-blue-v3)" }}>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "1rem" }}>
              {t.origin.nowTitle}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: 680 }}>
              {t.origin.nowText}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {/* Pro Jet Concept */}
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-at-red)", marginBottom: "0.75rem" }}>
                  {t.origin.forJCTitle}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {t.origin.forJCItems.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-at-red)", flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Pro AIR TEAM */}
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", marginBottom: "0.75rem" }}>
                  {t.origin.forATTitle}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {t.origin.forATItems.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-at-blue-v4)", flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
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

            {/* Strategická role entity / Strategic Role */}
            <div
              className="card"
              style={{ gridColumn: "1 / -1" }}
            >
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
                {t.about.roleTitle}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: 760 }}>
                {t.about.roleIntro}
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-at-white)",
                  marginBottom: "0.75rem",
                }}
              >
                {t.about.roleItemsLabel}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 2rem" }}>
                {t.about.roleItems.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "var(--color-at-red)",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
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
            POSITIONING & ODLIŠENÍ / POSITIONING & DIFFERENTIATION
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="positioning" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.75rem" }}>
            {t.sections.s08.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s08.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "2.5rem", fontSize: "0.95rem" }}>
            {t.positioning.perex}
          </p>

          {/* Srovnávací tabulka */}
          <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr>
                  {t.positioning.tableHeaders.map((h, i) => (
                    <th
                      key={i}
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: i === 0 ? "var(--color-at-blue-v4)" : i === 1 ? "var(--color-at-blue-v4)" : "var(--color-at-white)",
                        background: i === 2 ? "var(--color-at-blue-v2)" : "var(--color-at-blue-v1)",
                        borderBottom: "2px solid var(--color-at-blue-v3)",
                        borderRight: i < 2 ? "1px solid var(--color-at-blue-v3)" : "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.positioning.tableRows.map((row, ri) => (
                  <tr key={ri} style={{ background: ri % 2 === 0 ? "var(--color-at-blue-v1)" : "transparent" }}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        style={{
                          padding: "0.75rem 1rem",
                          color: ci === 0 ? "var(--color-at-blue-v4)" : ci === 1 ? "var(--color-at-blue-v5)" : "var(--color-at-blue-a5)",
                          fontWeight: ci === 0 ? 700 : 400,
                          fontSize: ci === 0 ? "0.75rem" : "0.875rem",
                          letterSpacing: ci === 0 ? "0.08em" : "normal",
                          textTransform: ci === 0 ? "uppercase" : "none",
                          borderBottom: "1px solid var(--color-at-blue-v2)",
                          borderRight: ci < 2 ? "1px solid var(--color-at-blue-v2)" : "none",
                          background: ci === 2 ? "var(--color-at-blue-v2-20)" : "transparent",
                          lineHeight: 1.5,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Positioning statement */}
          <div
            style={{
              padding: "1.75rem 2rem",
              borderRadius: 10,
              background: "var(--color-at-blue-v2)",
              border: "1px solid var(--color-at-blue-v3)",
              borderLeftColor: "var(--color-at-red)",
              borderLeftWidth: 4,
              borderLeftStyle: "solid",
              maxWidth: 780,
            }}
          >
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", marginBottom: "0.75rem" }}>
              {t.positioning.positioningLabel}
            </p>
            <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--color-at-white)", lineHeight: 1.6, margin: "0 0 1.25rem 0" }}>
              {t.positioning.positioningStatement}
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", paddingTop: "1rem", borderTop: "1px solid var(--color-at-blue-v3)" }}>
              <div>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", marginBottom: "0.25rem" }}>
                  {t.positioning.headlineLabel} (EN)
                </p>
                <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-at-blue-a5)", margin: 0 }}>
                  {t.positioning.headlinePrimary}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", marginBottom: "0.25rem" }}>
                  {t.positioning.headlineLabel} (CZ)
                </p>
                <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-at-blue-a5)", margin: 0 }}>
                  {t.positioning.headlineCzech}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            GO-TO-MARKET 2026
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="gtm" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.75rem" }}>
            {t.sections.s09.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s09.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
            {t.gtm.perex}
          </p>

          {/* Key message */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              borderRadius: 8,
              background: "var(--color-at-blue-v1)",
              border: "1px solid var(--color-at-blue-v3)",
              borderLeftColor: "var(--color-at-red)",
              borderLeftWidth: 3,
              borderLeftStyle: "solid",
              marginBottom: "2.5rem",
              maxWidth: 780,
            }}
          >
            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", marginBottom: "0.5rem" }}>
              {t.gtm.keyMessageLabel}
            </p>
            <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "var(--color-at-blue-a5)", lineHeight: 1.65, margin: 0 }}>
              &ldquo;{t.gtm.keyMessage}&rdquo;
            </p>
          </div>

          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-at-white)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            {t.gtm.channelsTitle}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {t.gtm.channels.map((ch) => (
              <div
                key={ch.n}
                className="tile-hover"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  borderRadius: 8,
                  background: "var(--color-at-blue-v2)",
                  border: "1px solid var(--color-at-blue-v3)",
                }}
              >
                <span style={{ fontSize: "1.1rem", fontWeight: 900, fontFamily: "monospace", color: "var(--color-at-blue-v4)", flexShrink: 0, lineHeight: 1.4, paddingTop: 2 }}>
                  {ch.n}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                    <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700, color: "var(--color-at-white)", lineHeight: 1.3 }}>
                      {ch.title}
                    </p>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "2px 8px",
                        borderRadius: 4,
                        background: "var(--color-at-blue-v3)",
                        color: "var(--color-at-blue-a5)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {ch.tag}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65 }}>
                    {ch.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            MILNÍKY 2026 / MILESTONES 2026
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="milniky" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.75rem" }}>
            {t.sections.s10.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s10.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "2.5rem", fontSize: "0.95rem" }}>
            {t.milestones.perex}
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr>
                  {t.milestones.headers.map((h, i) => (
                    <th
                      key={i}
                      style={{
                        padding: "0.75rem 1rem",
                        textAlign: "left",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--color-at-white)",
                        background: "var(--color-at-blue-v2)",
                        borderBottom: "2px solid var(--color-at-blue-v3)",
                        borderRight: i < 2 ? "1px solid var(--color-at-blue-v3)" : "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.milestones.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    style={{ background: ri % 2 === 0 ? "var(--color-at-blue-v1)" : "transparent" }}
                  >
                    <td style={{ padding: "0.875rem 1rem", color: "var(--color-at-blue-a5)", lineHeight: 1.5, borderBottom: "1px solid var(--color-at-blue-v2)", borderRight: "1px solid var(--color-at-blue-v2)" }}>
                      {row[0]}
                    </td>
                    <td style={{ padding: "0.875rem 1rem", whiteSpace: "nowrap", borderBottom: "1px solid var(--color-at-blue-v2)", borderRight: "1px solid var(--color-at-blue-v2)" }}>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: 4,
                          background: "var(--color-at-blue-v3)",
                          color: "var(--color-at-blue-a5)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {row[1]}
                      </span>
                    </td>
                    <td style={{ padding: "0.875rem 1rem", color: "var(--color-at-blue-v5)", fontSize: "0.8rem", lineHeight: 1.5, borderBottom: "1px solid var(--color-at-blue-v2)" }}>
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
