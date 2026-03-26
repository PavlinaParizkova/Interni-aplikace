"use client";

import ScrollToTop from "./components/ScrollToTop";

const NAV_LINKS = [
  { label: "Kdo jsme", href: "#co-jsme" },
  { label: "Co děláme", href: "#portfolio" },
  { label: "Pro koho", href: "#segmenty" },
  { label: "Proč Jet Concept", href: "#proc-Jet Concept" },
  { label: "Jak to funguje", href: "#jak-to-funguje" },
  { label: "Kontakt", href: "#kontakt" },
];

const PORTFOLIO = [
  {
    number: "01",
    title: "DOA a design engineering",
    situation: "Stojíte před větší změnou letadla a chcete mít jasno o technickém postupu od prvního dne. Správný koncept a ověřený technický základ jsou klíčem k hladkému průběhu celého programu.",
    action: "Zpracujeme koncept modifikace nebo přestavby. Navrhneme strukturální, systémové a kabinové změny, provedeme výpočty a analýzy, připravíme technickou dokumentaci. Průběžně rozhodujeme technické otázky, aby program udržel tempo.",
    value: "Přesně víte, do čeho jdete. Program stojí na ověřeném technickém základě a každý navazující krok je správně připravený.",
  },
  {
    number: "02",
    title: "POA a výroba",
    situation: "Návrh je hotový a schválený. Potřebujete partnera, který ho převede do výroby přesně tak, jak byl navržen – s čistou výrobní dokumentací a díly připravenými pro instalaci.",
    action: "Vyrobíme schválené díly, podsestavy a interiérové prvky. Zajistíme výrobní dokumentaci a kontrolované procesy. Zkoordinujeme dodavatele. Připravíme díly a celky přesně tak, aby instalace proběhla hladce.",
    value: "Výroba přesně navazuje na schválený návrh. Na instalaci přichází díly připravené k montáži.",
  },
  {
    number: "03",
    title: "Certifikace a airworthiness",
    situation: "Program vyžaduje regulační schválení. Chcete partnera, který přebere schvalovací proces, připraví compliance dokumentaci a koordinuje postup s regulátorem – aby certifikace probíhala souběžně s projektem, ne za ním.",
    action: "Klasifikujeme změny a opravy (major/minor change). Vedeme schvalovací proces včetně přípravy podkladů pro STC nebo schválení pod DOA. Tvoříme a spravujeme compliance dokumentaci. Koordinujeme testy, validace a vše potřebné k získání schválení.",
    value: "STC nebo schválená data jsou součástí výstupu programu – připravená k předání. Certifikační část projektu postupuje souběžně s návrhem a výrobou.",
  },
  {
    number: "04",
    title: "Completions – VIP a prémiové interiéry",
    situation: "Chystáte kabinový program s vysokými nároky na kvalitu, estetiku i certifikaci. Potřebujete partnera, který zvládne obojí – prémiový výsledek i správný certifikační základ.",
    action: "Zpracujeme VIP a VVIP cabin completions, business jet interiéry a prémiové úpravy kabiny. Navrhneme kabinové konfigurace podle účelu provozu, integrujeme prvky, systémy a materiály. Řídíme celý program dokončení interiéru od konceptu po výrobní a dokumentační připravenost.",
    value: "Interiér, který dobře vypadá, funkčně funguje a má za sebou správnou certifikační základnu.",
  },
  {
    number: "05",
    title: "Aircraft conversions",
    situation: "Letadlo má dostat novou roli nebo odlišnou konfiguraci. Chcete program, který drží strukturální, systémové i interiérové změny pohromadě a dodá certifikovaný výstup v jednom řízeném celku.",
    action: "Realizujeme role change programy, medevac, head of state nebo mission cabin konfigurace. Zpracujeme úpravy kabiny, systémů a rozhraní. Zajistíme AD compliance a certifikační rámec pro celý rozsah změn.",
    value: "Letadlo odpovídá nové provozní roli – s čistou dokumentací a schváleným výstupem.",
  },
  {
    number: "06",
    title: "Program management a koordinace",
    situation: "Program zahrnuje více technických oblastí a více dodavatelů. Potřebujete silné programové řízení, které drží celý celek pod kontrolou a dává vám průběžný přehled.",
    action: "Řídíme celý program. Koordinujeme interní i externí odbornosti, dodavatele a partnery. Hlídáme harmonogram, rozpočet a rizika. Koordinujeme s vámi, vaším Part 145 nebo instalačním partnerem.",
    value: "Máte jednoho partnera s přehledem o celém programu. Víte, kde stojí, co přijde dál a co dostanete na konci.",
  },
];

const VALUE_PILLARS = [
  {
    title: "Jeden partner pro celý program.",
    desc: "Návrh, STC proces, výroba a předání podkladů – vše v jednom řízeném programu. Máte jednoho partnera s jasnou odpovědností za celek.",
  },
  {
    title: "Certifikace jako součást plánu.",
    desc: "Schvalovací proces zapojujeme od prvního dne. Klasifikace změny, compliance dokumentace, koordinace s regulátorem – vše probíhá souběžně s návrhem. Program postupuje podle plánu.",
  },
  {
    title: "Dodavatelská síť v jedněch rukách.",
    desc: "Koordinujeme interní týmy, specializované partnery i dodavatele dílů. Zákazník dostává jeden bod kontaktu a průběžný přehled o celém programu.",
  },
  {
    title: "Harmonogram, který drží.",
    desc: "Každý program řídíme s jasnými milníky, přehledným plánem a průběžnou komunikací. V každém momentu víte, kde program stojí a co přijde dál.",
  },
  {
    title: "Technický výsledek, který sedí na provoz.",
    desc: "Pracujeme pro to, aby letadlo po změně lépe plnilo roli, pro kterou ho potřebujete. Technický výstup musí dávat smysl i provozně.",
  },
];

const SITUATIONS = [
  {
    situation: "Zákazník potřebuje jednoho partnera, který drží celý postup pohromadě – od návrhu po přípravu podkladů pro instalaci.",
    action: "Jet Concept přebírá koordinaci celého procesu. Zákazník ví, kdo za co odpovídá a jaký bude další krok.",
  },
  {
    situation: "Technická, výrobní a certifikační část projektu musí fungovat jako jeden celek, ne jako tři oddělené úkoly.",
    action: "Propojujeme DOA, POA, engineering a airworthiness do jednoho řízeného programu s jasným harmonogramem.",
  },
  {
    situation: "Rozsah změny letadla přesahuje standardní servisní rámec a vyžaduje řízený program s jasnou odpovědností.",
    action: "Specializujeme se přesně na takové projekty – přebíráme návrh, certifikaci i výrobu do jednoho programu.",
  },
  {
    situation: "Certifikační a výrobní postup musí být navržený správně od začátku, aby projekt postupoval bez zbytečných zdržení.",
    action: "Jasně definujeme postup, odpovědnost a další krok v každé fázi – od zadání po schválené podklady pro instalaci.",
  },
  {
    situation: "Technická změna musí dávat smysl i provozně a obchodně – nejen technicky.",
    action: "Mluvíme jazykem výsledné schopnosti letadla, ne pouze jazykem technických úkonů.",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Zákazník je hrdina programu",
    desc: "Popisujeme výzvu zákazníka, jeho situaci a jeho výsledek. Jet Concept je průvodce, který pomáhá situaci zvládnout.",
  },
  {
    n: "02",
    title: "Jeden rámec pro celý program",
    desc: "Propojujeme DOA, POA, engineering, realizaci a airworthiness do jednoho řízeného celku.",
  },
  {
    n: "03",
    title: "Strukturovaná odpovědnost",
    desc: "Vedeme projekt s jasnou odpovědností, důvěryhodně a s disciplínou v dokumentaci i komunikaci.",
  },
  {
    n: "04",
    title: "Výsledek, který obstojí",
    desc: "Dodáváme výstupy, které jsou technicky správné, regulačně schválené a mají reálný přínos pro provoz letadla.",
  },
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Zadání a technický brief",
    desc: "Sdílíte s námi záměr, rozsah a provozní kontext. Společně definujeme přístup a první kroky. Odcházíte s jasnou představou o postupu.",
  },
  {
    n: "02",
    title: "Návrh a engineering",
    desc: "Zpracujeme technický koncept, provedeme výpočty a analýzy a připravíme základ pro schvalovací proces. Průběžně sdílíme postup a klíčová rozhodnutí.",
  },
  {
    n: "03",
    title: "Certifikace a schválení",
    desc: "Vedeme schvalovací postup, připravujeme compliance dokumentaci a koordinujeme testy a validace. Certifikační část programu postupuje souběžně.",
  },
  {
    n: "04",
    title: "Výroba",
    desc: "Vyrábíme schválené díly a celky, koordinujeme dodavatele a připravujeme výstupy pro instalaci. Výroba přesně navazuje na schválený návrh.",
  },
  {
    n: "05",
    title: "Předání a podklady pro instalaci",
    desc: "Předáme kompletní dokumentaci a výrobní výstupy. Vám nebo vašemu Part 145. Program je uzavřený. Podklady jsou čisté. Instalace může jít.",
  },
];

const FORMULATIONS = [
  {
    quote: "Modifikace je schválená. Projekt může letět.",
    context: "Hook · Business jet completion",
    detail: "Rozsah změny byl jasně zadán. Přebírám návrh, certifikaci i výrobu do jednoho programu. Zákazník ví, co se děje, a letadlo je připravené v termínu.",
  },
  {
    quote: "Tři strany, jeden program. Takhle to fungovat nemá.",
    context: "Hook · Jet Concept jako jeden partner",
    detail: "Certifikační a výrobní postup musí být navržený správně od začátku. Jet Concept drží pohromadě návrh, certifikaci a výrobu – zákazník se nemusí ztrácet mezi více stranami.",
  },
  {
    quote: "Certifikace přichází dříve, než si myslíte – pokud víte, co připravit.",
    context: "Hook · Airworthiness & certifikace",
    detail: "Klasifikujeme změny, vedeme schvalovací proces a připravujeme compliance dokumentaci tak, aby projekt nezasekl na nesprávně zvoleném postupu.",
  },
  {
    quote: "Kabina je hotová. Dokumentace souhlasí. Letadlo čeká na zákazníka.",
    context: "Hook · Redelivery & conversion",
    detail: "Completion nebo conversion program vedeme od konceptu po výrobní a dokumentační připravenost. Zákazník dostane výsledek, který dobře vypadá, funguje a obstojí technicky.",
  },
];

export default function Page() {
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
          {NAV_LINKS.map((link) => (
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
              Jeden program.&nbsp;&nbsp;Jeden partner.&nbsp;&nbsp;Výsledek na letadle.
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
              Jet Concept přebírá návrh, certifikaci i výrobu do jednoho řízeného celku –
              od prvního zadání po schválený výstup připravený k instalaci.
              Máte jednoho partnera s jasnou odpovědností za každý krok programu.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "1.75rem" }}>
              {["DOA", "POA", "Design Engineering", "Certifikace", "Completions", "Conversions"].map((tag) => (
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
                YOUR MISSION. OUR TECHNOLOGY.
              </span>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ═══════════════════════════════════════════════════════════════════
            CO JSME
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
            01 · O nás
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            Co je Jet Concept
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            Větší změna letadla vyžaduje partnera, který spojuje technický návrh, schvalovací
            proces i výrobu v jeden celek. Jet Concept je od toho – přebíráme zodpovědnost za celý program tak,
            aby každý krok navazoval na ten předchozí a zákazník měl v každém momentu jasný přehled
            o průběhu.
          </p>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            Pracujeme s majiteli a operátory business jetů, aeroliniemi, lessory a completion centry.
            Výsledkem každého programu je letadlo schopné plnit roli, pro kterou ho zákazník potřebuje –
            s čistou dokumentací a ověřeným certifikačním základem.
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
                Identita entity
              </h3>
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-at-white)", lineHeight: 1.5, marginBottom: "1rem" }}>
                Integrační a certifikační vrstva AIR TEAM pro komplexní technické změny letadel.
              </p>
              <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7 }}>
                Když zákazník řeší větší změnu letadla, nestačí mu běžný servis ani jeden dodavatel jedné
                části. Potřebuje partnera, který se vyzná v návrhu, certifikaci i výrobě a dokáže celý
                postup udržet pod kontrolou. Právě to je role Jet Conceptu.
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
                {["Rozhodný", "Strukturovaný", "Technicky silný", "Diskrétní", "Odpovědný"].map((t) => (
                  <span
                    key={t}
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
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Vize */}
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
                Vize
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7 }}>
                Být partner, na kterého se zákazník obrátí ve chvíli, kdy potřebuje změnu letadla
                udělat správně, bezpečně a bez chaosu mezi více dodavateli.
              </p>
            </div>

            {/* Mise */}
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
                Mise
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7 }}>
                Navrhujeme, certifikujeme a vyrábíme technicky náročné změny letadel tak, aby zákazník
                věděl, co se děje, co je v sázce a jaký bude další krok.
              </p>
            </div>

            {/* Poslání */}
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
                Poslání
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-at-blue-a5)", lineHeight: 1.7 }}>
                Pomáháme zákazníkům změnit letadlo nebo jeho konfiguraci bez zbytečné nejistoty.
                Přinášíme technickou jistotu, pořádek v procesu a odpovědnost za to, co navrhujeme
                a vyrábíme.
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
            02 · Portfolio
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            Portfolio služeb
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            Jet Concept řídí projekty, kde se mění konfigurace, schopnosti nebo hodnota letadla.
            Přebíráme odpovědnost za jasný postup od zadání až po schválený návrh, výrobu a podklady
            pro instalaci.
          </p>

          <div className="grid-auto grid-auto-md">
            {PORTFOLIO.map((item) => (
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

                {/* Situace */}
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", margin: "0 0 0.25rem 0" }}>
                    Situace
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6, margin: 0 }}>
                    {item.situation}
                  </p>
                </div>

                {/* Co uděláme */}
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-at-blue-v4)", margin: "0 0 0.25rem 0" }}>
                    Co uděláme
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.6, margin: 0 }}>
                    {item.action}
                  </p>
                </div>

                {/* Výsledek */}
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
            SEGMENTY
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
            03 · Segmenty
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            Tržní segmenty
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            Jet Concept pracuje s klienty v segmentech Business a Commercial. Oblast Defense zůstává
            dlouhodobým rozvojovým směrem.
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
                  Business
                </h3>
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65, marginBottom: "1rem" }}>
                Připravujete kabinový program, modernizaci nebo specifickou úpravu business jetu?
                Pracujeme s klienty, kteří kladou důraz na kvalitu provedení, diskrétní vedení
                programu a prémiový výsledek.
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
                Pomáháme s:
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 1rem" }}>
                {[
                  "VIP a VVIP cabin completions – od konceptu po certifikovaný výstup",
                  "Cabin refresh a cabin upgrade – renovace s přesahem do certifikace",
                  "Konektivita, komfort a personalizace kabiny – integrované, ne jen přidané",
                  "Specifické úpravy podle majitele nebo operátora – diskrétně vedené programy",
                ].map((item) => (
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
                  Commercial
                </h3>
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--color-at-blue-v5)", lineHeight: 1.65, marginBottom: "1rem" }}>
                Plánujete compliance upgrade, retrofit nebo redelivery projekt? Pracujeme s provozovateli
                flotil a lessory, kteří potřebují program doručit v termínu, v kontrolovaném rozpočtu
                a s kompletní certifikační dokumentací.
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
                Pomáháme s:
              </p>
              <ul style={{ margin: 0, padding: "0 0 0 1rem" }}>
                {[
                  "Compliance a mandated upgrades včetně AD compliance",
                  "Retrofit programy – realizace v kontrolovaném rámci",
                  "Redelivery a transition projekty – letadlo předané správně a načas",
                  "Systémová a kabinová modernizace – zvyšující provozní i tržní hodnotu",
                  "Engineering, certifikace a realizace v jednom – s jasnou odpovědností",
                ].map((item) => (
                  <li
                    key={item}
                    style={{ fontSize: "0.85rem", color: "var(--color-at-blue-v5)", lineHeight: 1.7, marginBottom: "0.3rem" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Klíčoví zákazníci */}
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
                Klíčové typy zákazníků
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {[
                  "Majitelé a operátoři business jetů",
                  "Completion centra",
                  "Technické partnerské organizace",
                  "Aerolinky a provozovatelé flotil",
                  "Lessoři a asset manažeři",
                  "Systémoví integrátoři",
                  "OEM partneři",
                ].map((c) => (
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
            PROČ JET CONCEPT
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
            04 · Proč my
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            Proč Jet Concept
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            Jet Concept dává zákazníkovi jistotu, že se větší změna letadla nerozpadne mezi více stran.
            Nestačí říkat, že to umíme – stavíme důvěru na konkrétních schváleních, referencích
            a schopnosti prezentovat proces, ne jen výsledek.
          </p>

          {/* H3: Nabídka hodnoty */}
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
            Nabídka hodnoty – 5 pilířů
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "3rem" }}>
            {VALUE_PILLARS.map((pillar, i) => (
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

          {/* H3: Situace */}
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
            Situace, které Jet Concept pomáhá zvládnout
          </h3>
          <div className="grid-auto grid-auto-lg" style={{ gap: "1rem" }}>
            {SITUATIONS.map((item, i) => (
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
                    SITUACE
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
            JAK PRACUJEME
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
            05 · Principy
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            Jak pracujeme
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            Zákazník je hrdina programu. Jet Concept je průvodce, který pomáhá zvládnout výzvu
            a dojít k výsledku. Pracujeme s klidem, přesností a odpovědností za celek.
          </p>

          {/* H3: 4 principy */}
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
            4 principy práce
          </h3>
          <div className="grid-auto grid-auto-sm" style={{ gap: "1rem", marginBottom: "3rem" }}>
            {PRINCIPLES.map((p) => (
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

          {/* H3: Vzorové formulace / hooky */}
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
            Vzorové hooky a formulace
          </h3>
          <p style={{ color: "var(--color-at-blue-v4)", fontSize: "0.8rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
            První věta každého externího výstupu musí zastavit adresáta. Níže jsou příklady hooků
            dle komunikačního vzorce Napětí → Průlom → Výsledek.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FORMULATIONS.map((f, i) => (
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
            JAK TO FUNGUJE
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
            06 · Proces
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            Jak to funguje
          </h2>
          <p style={{ color: "var(--color-at-blue-a5)", maxWidth: 680, lineHeight: 1.7, marginBottom: "3rem", fontSize: "0.95rem" }}>
            Každý program Jet Conceptu prochází pěti řízenými kroky. Zákazník má v každém momentu
            jasný přehled – ví, kde program stojí a co přijde dál.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {PROCESS_STEPS.map((step, i) => (
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
                  {i < PROCESS_STEPS.length - 1 && (
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
            KONTAKT / CTA
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
            07 · Kontakt
          </p>
          <h2 className="section-h2" style={{ marginBottom: "0.75rem" }}>
            Připraveni převzít váš program
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
            Sdílejte s námi rozsah a záměr. Ukážeme vám, jak Jet Concept program uchopí – co přebírá,
            jak bude probíhat a co dostanete na konci. Konkrétní postup pro vaši situaci.
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
              {[
                "Jeden partner. Jasná odpovědnost. Výsledek, na který se můžete spolehnout.",
                "Certifikace od prvního dne – souběžně s návrhem, ne za ním.",
                "Víte, kde program stojí a co přijde dál. V každém kroku.",
              ].map((msg) => (
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
                Kontaktujte nás
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
            Jet Concept · Strategie 2026
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-at-blue-v4)" }}>
            YOUR MISSION. OUR TECHNOLOGY.
          </span>
          <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--color-at-blue-v4)", letterSpacing: "0.08em" }}>
            Interní dokument · Důvěrné
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
