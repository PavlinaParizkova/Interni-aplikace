"use client";

import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import LockScreen from "./components/LockScreen";
import { translations, type Lang } from "./translations";

export default function Page() {
  const [unlocked, setUnlocked] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
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
            src="/ATM_logo_Jet_Concept_red_white.svg"
            alt="AIR TEAM Jet Concept"
            style={{ height: 56, width: "auto" }}
          />
        </a>

        {/* Anchor links – hidden on mobile via .nav-links class */}
        <nav
          className="scrollbar-none nav-links"
          style={{ display: "flex", alignItems: "center", gap: 4, overflowX: "auto" }}
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

        {/* Language switcher + hamburger */}
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

          {/* Hamburger — mobile only */}
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
            {[
              menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              undefined,
              menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            ].map((transform, i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 20,
                  height: 2,
                  borderRadius: 1,
                  background: "var(--color-at-blue-a5)",
                  transition: i === 1 ? "opacity 200ms" : "transform 200ms, opacity 200ms",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                  ...(transform ? { transform } : {}),
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ─── MOBILE DROPDOWN ──────────────────────────────────────────────── */}
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
            <img
              src="/ATM_logo_Jet_Concept_red_white.svg"
              alt="AIR TEAM Jet Concept"
              style={{ height: "clamp(80px, 10vw, 130px)", width: "auto", marginBottom: "2rem", display: "block" }}
            />

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

            <p
              style={{
                fontSize: "clamp(1.05rem, 2.5vw, 1.5rem)",
                fontWeight: 600,
                color: "var(--color-at-white)",
                width: "100%",
                maxWidth: "min(42rem, 100%)",
                marginBottom: "1.25rem",
                lineHeight: 1.3,
              }}
            >
              {t.hero.tagline}
            </p>

            <div
              style={{
                width: "clamp(3rem, 8vw, 5rem)",
                height: 3,
                background: "var(--color-at-red)",
                borderRadius: 2,
                marginBottom: "1.5rem",
              }}
            />

            <p
              style={{
                width: "100%",
                maxWidth: "min(680px, 100%)",
                fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
                lineHeight: 1.7,
                color: "var(--color-at-blue-v5)",
                marginBottom: "2rem",
              }}
            >
              {t.hero.lead}
            </p>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.75rem", width: "100%", maxWidth: "min(680px, 100%)" }}>
              {t.hero.badges.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 999,
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
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
                  fontSize: "0.72rem",
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
            KONTEXT – WHERE WE ARE NOW (2 cards only)
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="kontext" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.75rem" }}>
            {t.sections.s00.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s00.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}>
            {t.origin.nowText}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {/* For Jet Concept */}
            <div className="card">
              <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-at-red)", marginBottom: "1rem" }}>
                {t.origin.forJCTitle}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {t.origin.forJCItems.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-at-red)", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* For AIR TEAM */}
            <div className="card">
              <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", marginBottom: "1rem" }}>
                {t.origin.forATTitle}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {t.origin.forATItems.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-at-blue-v4)", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            ABOUT – PROSE LAYOUT
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="co-jsme" style={{ paddingTop: "4rem", paddingBottom: "4rem", maxWidth: 920 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.75rem" }}>
            {t.sections.s01.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "2rem" }}>
            {t.sections.s01.title}
          </h2>

          {/* What is Jet Concept */}
          <h3 style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "var(--color-at-white)", marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
            {t.about.whatTitle}
          </h3>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, marginBottom: "1rem", fontSize: "0.95rem" }}>
            {t.about.p1}
          </p>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, marginBottom: "2.25rem", fontSize: "0.95rem" }}>
            {t.about.p2}
          </p>

          {/* Entity identity */}
          <h3 style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "var(--color-at-white)", marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
            {t.about.entityTitle}
          </h3>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, marginBottom: "0.85rem", fontSize: "0.95rem" }}>
            <strong style={{ color: "var(--color-at-white)", fontWeight: 600 }}>{t.about.entityDesc}</strong>
          </p>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, marginBottom: "0.85rem", fontSize: "0.95rem" }}>
            {t.about.entityBody}
          </p>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, marginBottom: "0.6rem", fontSize: "0.95rem" }}>
            {t.about.entityBodySub}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "2.25rem" }}>
            {t.about.doaItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-at-red)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--color-at-blue-v5)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Vision */}
          <h3 style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "var(--color-at-white)", marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
            {t.about.visionTitle}
          </h3>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, marginBottom: "2.25rem", fontSize: "0.95rem" }}>
            {t.about.visionDesc}
          </p>

          {/* Mission */}
          <h3 style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "var(--color-at-white)", marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
            {t.about.missionTitle}
          </h3>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, marginBottom: "2.25rem", fontSize: "0.95rem" }}>
            {t.about.missionDesc}
          </p>

          {/* Purpose */}
          <h3 style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "var(--color-at-white)", marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
            {t.about.purposeTitle}
          </h3>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, fontSize: "0.95rem" }}>
            {t.about.purposeDesc}
          </p>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            WHAT WE DO – SERVICE STACK
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="portfolio" style={{ paddingTop: "4rem", paddingBottom: "4rem", maxWidth: 920 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.75rem" }}>
            {t.sections.s02.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "2rem" }}>
            {t.sections.s02.title}
          </h2>

          {/* We specifically address */}
          <h3 style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "var(--color-at-white)", marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
            {t.portfolio.whatWeAddressTitle}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "2.5rem" }}>
            {t.portfolio.whatWeAddressItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-at-red)", flexShrink: 0, marginTop: 7 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--color-at-blue-v5)", lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Service portfolio heading + prose */}
          <h3 style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "var(--color-at-white)", marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
            {t.portfolio.servicePortfolioTitle}
          </h3>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, marginBottom: "2rem", fontSize: "0.95rem" }}>
            {t.portfolio.servicePortfolioDesc}
          </p>

          {/* Key service lines label */}
          <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "1rem" }}>
            {t.portfolio.serviceLines}
          </p>

          {/* Service stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {t.portfolio.items.map((item) => (
              <div
                key={item.number}
                className="tile-hover"
                style={{
                  background: "var(--color-at-blue-v2)",
                  border: "1px solid var(--color-at-blue-v3)",
                  borderRadius: 14,
                  padding: "clamp(1.1rem, 2.8vw, 1.45rem)",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.45rem 0.65rem", marginBottom: "0.6rem" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", color: "var(--color-at-red)", flexShrink: 0 }}>
                    {item.number}
                  </span>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-at-white)", margin: 0, lineHeight: 1.3, flex: 1, minWidth: "10rem" }}>
                    {item.title}
                  </h4>
                </div>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Further modification bubble pills */}
          <div
            style={{
              marginBottom: "2rem",
              padding: "clamp(1.25rem, 3vw, 1.85rem)",
              background: "var(--color-at-blue-v1)",
              border: "1px solid var(--color-at-blue-v3)",
              borderRadius: 14,
            }}
          >
            <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "1rem" }}>
              {t.portfolio.furtherModTitle}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {t.portfolio.furtherModItems.map((item) => (
                <span
                  key={item}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-at-white)",
                    padding: "0.55rem 1.15rem",
                    background: "transparent",
                    border: "1px solid var(--color-at-blue-v4)",
                    borderRadius: 999,
                    lineHeight: 1.2,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Product catalogue */}
          <h3 style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", fontWeight: 700, color: "var(--color-at-white)", marginBottom: "0.85rem", letterSpacing: "-0.01em" }}>
            {t.portfolio.catalogueTitle}
          </h3>
          <p style={{ color: "var(--color-at-blue-a5)", lineHeight: 1.65, marginBottom: "1rem", fontSize: "0.95rem" }}>
            <strong style={{ color: "var(--color-at-white)", fontWeight: 600 }}>{t.portfolio.catalogueDesc}</strong>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {t.portfolio.catalogueItems.map((item, i) => {
              const isLast = i === t.portfolio.catalogueItems.length - 1;
              return (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  {!isLast && (
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-at-red)", flexShrink: 0, marginTop: 7 }} />
                  )}
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: isLast ? "var(--color-at-blue-v4)" : "var(--color-at-blue-v5)",
                      lineHeight: 1.5,
                      fontStyle: isLast ? "italic" : "normal",
                      paddingLeft: isLast ? 14 : 0,
                    }}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            SEGMENTS
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="segmenty" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.75rem" }}>
            {t.sections.s03.label}
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            {t.sections.s03.title}
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem" }}>
            {t.segments.perex}
          </p>

          <div className="grid-auto grid-auto-lg">
            {/* Business */}
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "var(--color-at-blue-a3)",
                    border: "1px solid var(--color-at-blue-v4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-at-white)" }}>
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-at-white)", margin: 0 }}>
                  {t.segments.businessTitle}
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65, marginBottom: "1rem" }}>
                {t.segments.businessDesc}
              </p>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.65rem" }}>
                {t.segments.businessHelp}
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {t.segments.businessItems.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-at-red)", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial */}
            <div className="card">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "var(--color-at-blue-a3)",
                    border: "1px solid var(--color-at-blue-v4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-at-white)" }}>
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-at-white)", margin: 0 }}>
                  {t.segments.commercialTitle}
                </h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65, marginBottom: "1rem" }}>
                {t.segments.commercialDesc}
              </p>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "0.65rem" }}>
                {t.segments.commercialHelp}
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {t.segments.commercialItems.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-at-red)", flexShrink: 0, marginTop: 7 }} />
                    <span style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key customers */}
            <div className="card" style={{ gridColumn: "1 / -1" }}>
              <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-at-white)", marginBottom: "1rem" }}>
                {t.segments.customersTitle}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
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
            GTM + MILESTONES (embedded)
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

          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "3rem" }}>
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

          {/* ── MILESTONES embedded in GTM ─────────────────────────────── */}
          <h3 id="milniky" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", fontWeight: 700, color: "var(--color-at-white)", letterSpacing: "-0.01em", marginBottom: "0.65rem", scrollMarginTop: "5.5rem" }}>
            {t.milestones.title}
          </h3>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
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
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
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
                  <tr key={ri} style={{ background: ri % 2 === 0 ? "var(--color-at-blue-v1)" : "transparent" }}>
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
