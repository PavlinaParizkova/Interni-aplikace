import { auth } from "../auth";
import { redirect } from "next/navigation";
import { events2026, events2027, events2028, budgetOptak, milestones, type VeletrhEvent } from "./data/op-tak-data";

// ── Badge ────────────────────────────────────────────────────────────────────
function Badge({ status }: { status: VeletrhEvent["status"] }) {
  if (status === "optak")      return <span className="badge badge-green">OP TAK</span>;
  if (status === "optak-cond") return <span className="badge badge-orange">OP TAK (podmíněně)</span>;
  return <span className="badge badge-muted">mimo OP TAK</span>;
}

// ── Event card ───────────────────────────────────────────────────────────────
function EventCard({ e }: { e: VeletrhEvent }) {
  return (
    <div className={`event-card ${e.status}`}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.3 }}>{e.name}</span>
        <Badge status={e.status} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px" }}>
        <span style={{ fontSize: "0.75rem", color: "var(--color-at-blue-v5)" }}>{e.date}</span>
        <span style={{ fontSize: "0.75rem", color: "var(--color-at-blue-v4)" }}>·</span>
        <span style={{ fontSize: "0.75rem", color: "var(--color-at-blue-v5)" }}>{e.size}</span>
        <span style={{ fontSize: "0.75rem", color: "var(--color-at-blue-v4)" }}>·</span>
        <span style={{ fontSize: "0.75rem", color: "var(--color-at-blue-v5)" }}>{e.location}</span>
      </div>
      {e.note && (
        <div style={{ marginTop: 6, fontSize: "0.72rem", color: "var(--color-at-blue-v4)", fontStyle: "italic" }}>{e.note}</div>
      )}
    </div>
  );
}

// ── Year column ──────────────────────────────────────────────────────────────
function YearColumn({ year, events }: { year: string; events: VeletrhEvent[] }) {
  const optak = events.filter(e => e.status !== "mimo").length;
  const mimo  = events.filter(e => e.status === "mimo").length;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 800 }}>{year}</h3>
        <span style={{ fontSize: "0.75rem", color: "var(--color-at-blue-v5)" }}>{events.length} akce</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          {optak > 0 && <span className="badge badge-green">{optak}× OP TAK</span>}
          {mimo  > 0 && <span className="badge badge-muted">{mimo}× mimo</span>}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {events.map((e, i) => <EventCard key={i} e={e} />)}
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function Page() {
  const session = await auth();
  if (!session) redirect("/login");

  const totalCelkem = 3130;
  const dotace = 1565;
  const prostor = 4900 - totalCelkem;

  return (
    <>
      {/* ── Sticky nav ── */}
      <nav className="sticky-nav">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 3, height: 18, borderRadius: 2, background: "var(--color-at-red)" }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-at-blue-a5)" }}>
              AIR TEAM
            </span>
          </div>
          <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.15)" }} />
          <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-at-white)" }}>OP TAK — Plán veletrhů 2026–2028</span>
          <div style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--color-at-blue-v5)" }}>
            {session.user?.name}
          </div>
        </div>
      </nav>

      {/* ── Main content ── */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* Hero */}
        <section style={{ marginBottom: 48 }}>
          <div className="section-label">Dotace OP TAK · Marketing</div>
          <h1 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, marginBottom: 8, lineHeight: 1.2 }}>
            Plán zahraničních veletrhů 2026–2028
          </h1>
          <p style={{ fontSize: "0.95rem", color: "var(--color-at-blue-v5)", maxWidth: 640, marginBottom: 32 }}>
            13 zahraničních akcí · max. 5 v grantu OP TAK · 50 % způsobilých výdajů · realizace do 31. 12. 2028
          </p>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
            <div className="stat-card">
              <div className="stat-value">13</div>
              <div className="stat-label">Akcí celkem 2026–2028</div>
            </div>
            <div className="stat-card accent">
              <div className="stat-value">5</div>
              <div className="stat-label">Veletrhů v OP TAK grantu</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{totalCelkem.toLocaleString("cs")} tis.</div>
              <div className="stat-label">Projekt OP TAK (Kč)</div>
            </div>
            <div className="stat-card accent">
              <div className="stat-value">{dotace.toLocaleString("cs")} tis.</div>
              <div className="stat-label">Dotace 50 % (Kč)</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{prostor.toLocaleString("cs")} tis.</div>
              <div className="stat-label">Prostor do stropu 4 900 tis.</div>
            </div>
          </div>
        </section>

        <hr className="section-divider" style={{ marginBottom: 40 }} />

        {/* Warning */}
        <section style={{ marginBottom: 40 }}>
          <div className="warning-box">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(251,146,60,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: "#fb923c" }}>!</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#fb923c" }}>Kritický deadline: 18. 6. 2026</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--color-at-blue-a5)", margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: "var(--color-at-white)" }}>FIA 2026 (Farnborough, 19.–25. 7. 2026)</strong> je způsobilá jako záloha za EATS jen pokud žádost podáme ihned v den otevření výzvy — <strong style={{ color: "#fb923c" }}>18. 6. 2026</strong>. EATS 2026 (5. veletrh shortlistu) závisí na potvrzení eligibility Profigrantem. Ověřit do 15. 6. 2026.
            </p>
          </div>
        </section>

        {/* 3-year plan */}
        <section style={{ marginBottom: 56 }}>
          <div className="section-label">Kompletní přehled</div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: 24 }}>Plán veletrhů po letech</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
            <YearColumn year="2026" events={events2026} />
            <YearColumn year="2027" events={events2027} />
            <YearColumn year="2028" events={events2028} />
          </div>
        </section>

        <hr className="section-divider" style={{ marginBottom: 40 }} />

        {/* OP TAK budget */}
        <section style={{ marginBottom: 56 }}>
          <div className="section-label">Grant OP TAK</div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: 8 }}>Shortlist 5 veletrhů — orientační rozpočet</h2>
          <p style={{ fontSize: "0.8rem", color: "var(--color-at-blue-v5)", marginBottom: 20 }}>
            Čísla jsou předběžná. Cenové nabídky max. 90 dnů staré při podání žádosti. Položky v tis. Kč.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="at-table">
              <thead>
                <tr>
                  <th>Veletrh</th>
                  <th>Rok</th>
                  <th>Plocha</th>
                  <th className="hide-mobile">Pronájem</th>
                  <th className="hide-mobile">Stavba</th>
                  <th className="hide-mobile">Doprava</th>
                  <th className="hide-mobile">Propagace</th>
                  <th style={{ textAlign: "right" }}>Celkem</th>
                </tr>
              </thead>
              <tbody>
                {budgetOptak.map((row, i) => (
                  <tr key={i} className={row.cond ? "cond-row" : undefined}>
                    <td>
                      {row.name}
                      {row.cond && <span className="badge badge-orange" style={{ marginLeft: 8 }}>podmíněně</span>}
                    </td>
                    <td>{row.year}</td>
                    <td>{row.size}</td>
                    <td className="hide-mobile">{row.pronajem}</td>
                    <td className="hide-mobile">{row.stavba}</td>
                    <td className="hide-mobile">{row.doprava}</td>
                    <td className="hide-mobile">{row.propagace}</td>
                    <td style={{ textAlign: "right", fontWeight: 600 }}>{row.celkem} tis.</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan={3}>Celkem projekt</td>
                  <td className="hide-mobile">1 260</td>
                  <td className="hide-mobile">1 480</td>
                  <td className="hide-mobile">190</td>
                  <td className="hide-mobile">200</td>
                  <td style={{ textAlign: "right" }}>3 130 tis.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginTop: 20 }}>
            <div className="stat-card">
              <div className="stat-value" style={{ fontSize: "1.3rem" }}>3 130 tis.</div>
              <div className="stat-label">Celkem projekt (Kč)</div>
            </div>
            <div className="stat-card accent">
              <div className="stat-value" style={{ fontSize: "1.3rem" }}>1 565 tis.</div>
              <div className="stat-label">Dotace 50 %</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ fontSize: "1.3rem" }}>2 450 tis.</div>
              <div className="stat-label">Limit dotace</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{ fontSize: "1.3rem" }}>1 770 tis.</div>
              <div className="stat-label">Prostor do stropu 4 900 tis.</div>
            </div>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--color-at-blue-v4)", marginTop: 12 }}>
            * EATS 2026: podmíněně — závisí na odpovědi Profigrantu (konference vs. veletrh). Záloha: FIA 2026 (6 m², ~170 tis. Kč) při podání žádosti 18. 6. 2026.<br />
            Benchmark dopravy: Dubai Airshow — cca 60 tis. Kč (reálná zkušenost AIR TEAM). DE/PT: 35–50 tis. Kč.
          </p>
        </section>

        <hr className="section-divider" style={{ marginBottom: 40 }} />

        {/* Mimo OP TAK */}
        <section style={{ marginBottom: 56 }}>
          <div className="section-label">Marketingový rozpočet</div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: 8 }}>Veletrhy mimo OP TAK</h2>
          <p style={{ fontSize: "0.8rem", color: "var(--color-at-blue-v5)", marginBottom: 20 }}>
            Financováno z marketingového rozpočtu AIR TEAM. Způsobilé výdaje bez dotace.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="at-table">
              <thead>
                <tr>
                  <th>Veletrh</th>
                  <th>Rok</th>
                  <th>Plocha</th>
                  <th>Typ</th>
                  <th style={{ textAlign: "right" }}>Odhadovaný náklad</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Paris Air Show / Le Bourget (FR)", year: "2027", size: "6 m²", type: "český stánek", cost: "~120 tis. Kč" },
                  { name: "Dubai Airshow (UAE)", year: "2027", size: "6 m²", type: "český stánek", cost: "~130 tis. Kč" },
                  { name: "Pilot Expo (BE)", year: "2027", size: "6 m²", type: "vlastní stánek", cost: "~110 tis. Kč" },
                  { name: "Rotax Fly In (AT)", year: "2027", size: "6–12 m²", type: "vlastní stánek", cost: "~150–250 tis. Kč" },
                  { name: "FIA 2028 — Farnborough (UK)", year: "2028", size: "6 m²", type: "český stánek", cost: "~120 tis. Kč" },
                  { name: "Pilot Expo (BE)", year: "2028", size: "6 m²", type: "vlastní stánek", cost: "~110 tis. Kč" },
                  { name: "Rotax Fly In (AT)", year: "2028", size: "6–12 m²", type: "vlastní stánek", cost: "~150–250 tis. Kč" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td>{row.name}</td>
                    <td>{row.year}</td>
                    <td>{row.size}</td>
                    <td>{row.type}</td>
                    <td style={{ textAlign: "right" }}>{row.cost}</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan={4}>Celkem způsobilé výdaje mimo OP TAK</td>
                  <td style={{ textAlign: "right" }}>~980–1 160 tis. Kč</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="section-divider" style={{ marginBottom: 40 }} />

        {/* Milestones */}
        <section style={{ marginBottom: 56 }}>
          <div className="section-label">Časový plán</div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: 20 }}>Klíčové milníky</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="at-table">
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Milník</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {milestones.map((m, i) => (
                  <tr key={i} className={m.urgent ? "milestone-urgent" : undefined}>
                    <td style={{ whiteSpace: "nowrap", fontWeight: m.urgent ? 700 : 400 }}>{m.date}</td>
                    <td>{m.milestone}</td>
                    <td style={{ color: "var(--color-at-blue-v5)", whiteSpace: "nowrap" }}>{m.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="section-divider" style={{ marginBottom: 40 }} />

        {/* Open questions */}
        <section style={{ marginBottom: 56 }}>
          <div className="section-label">Otevřené otázky</div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: 16 }}>Pro Tomáše Musila (Profigrant)</h2>
          <ol style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "EATS 2026 (4.–5. 11. 2026, Cascais) — konference s výstavní plochou. Způsobilá jako veletrh v rámci výzvy?",
              "FIA 2026 (Farnborough, 19. 7.) — žádost otevírá 18. 6. Pokud podáme ihned, je FIA 2026 způsobilá? Co nejpozději podat?",
              "Dva ročníky stejného veletrhu (AERO 2027 + 2028, AIX 2027 + 2028) — přípustné v jednom projektu?",
              "Český pavilon (FIA 2026, Paris 2027, Dubai 2027, FIA 2028) — je faktura CzechTrade způsobilým výdajem?",
              "AIX Hamburg — Aircraft Interiors Expo, specializovaná výstava. Potvrzení způsobilosti jako zahraniční veletrh.",
              "Odměna Profigrantu — fixní paušál nebo success fee?",
              "Pokyny pro výběrová řízení — limity, dokumentace.",
              "Indikátory dopadu — co musí být v žádosti (počet leadů, smlouvy, návštěvníci na stánku)?",
            ].map((q, i) => (
              <li key={i} style={{ fontSize: "0.875rem", color: "var(--color-at-blue-a5)", lineHeight: 1.6 }}>
                {q}
              </li>
            ))}
          </ol>
        </section>

      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 24px",
        textAlign: "center",
        fontSize: "0.75rem",
        color: "var(--color-at-blue-v4)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}>
        AIR TEAM – YOUR MISSION. OUR TECHNOLOGY. &nbsp;·&nbsp; Interní dokument &nbsp;·&nbsp; Owner: Pavlína Pařízková
      </footer>
    </>
  );
}
