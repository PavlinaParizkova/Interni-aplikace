"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { HoverCard, LabeledText, OemLogo, QuadCard, SlideData } from "./slides";

type Direction = "fwd" | "bwd";

const SECTION_ORDER = ["AIR\u00a0TEAM", "Portfolio", "Certification", "Why Us"] as const;

const PDF_URL = "https://live.airteam.eu/hubfs/MKT-Leaflet/AIR%20TEAM%20Company%20Presentation%202026.pdf";

function IconArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function IconFullscreen({ active }: { active: boolean }) {
  if (active) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 14 10 14 10 20" />
        <polyline points="20 10 14 10 14 4" />
        <line x1="10" y1="14" x2="3" y2="21" />
        <line x1="21" y1="3" x2="14" y2="10" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function groupSections(slides: SlideData[]) {
  return SECTION_ORDER.map((label) => {
    const indexes = slides.map((slide, index) => (slide.section === label ? index : -1)).filter((index) => index >= 0);
    return {
      label,
      from: indexes[0] ?? 0,
      to: indexes[indexes.length - 1] ?? 0,
      count: indexes.length,
    };
  }).filter((section) => section.count > 0);
}

function SectionProgress({
  slides,
  current,
  goTo,
}: {
  slides: SlideData[];
  current: number;
  goTo: (index: number, direction: Direction) => void;
}) {
  const sections = useMemo(() => groupSections(slides), [slides]);

  return (
    <nav className="section-progress" aria-label="Presentation sections">
      {sections.map((section) => {
        const total = section.to - section.from + 1;
        const isActive = current >= section.from && current <= section.to;
        const isDone = current > section.to;
        const fillPct = isDone ? 100 : isActive ? ((current - section.from + 1) / total) * 100 : 0;

        return (
          <button
            key={section.label}
            className={`section-progress__item ${isActive ? "is-active" : ""}`}
            onClick={() => {
              if (!isActive) goTo(section.from, section.from > current ? "fwd" : "bwd");
            }}
            type="button"
            aria-current={isActive ? "step" : undefined}
          >
            <span>{section.label}</span>
            <i>
              <b style={{ width: `${fillPct}%` }} />
            </i>
          </button>
        );
      })}
      <span className="slide-count">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </span>
    </nav>
  );
}

function SlideFrame({ slide, children, tone = "dark" }: { slide: SlideData; children: React.ReactNode; tone?: "dark" | "light" }) {
  const style = slide.image ? { backgroundImage: `url(/photos/${encodeURIComponent(slide.image)})` } : undefined;
  const isPhoto = slide.type === "photo";
  return (
    <section className={`slide slide--${tone}${isPhoto ? " slide--photo" : ""}`}>
      <div className="slide__photo" style={style} />
      <div className="slide__overlay" />
      <div className="slide__content">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="eyebrow">{children}</p>;
}

function TextList({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return (
    <ul className="text-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CardGrid({ cards, compact = false }: { cards?: LabeledText[]; compact?: boolean }) {
  if (!cards?.length) return null;
  return (
    <div className={`card-grid ${compact ? "card-grid--compact" : ""}`}>
      {cards.map((card, index) => (
        <article className="info-card" key={card.title} style={{ animationDelay: `${index * 120}ms` }}>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
          {card.meta && <span className="info-card__meta">{card.meta}</span>}
        </article>
      ))}
    </div>
  );
}

function HoverGrid({ cards, variant = "cards" }: { cards?: HoverCard[]; variant?: "cards" | "mosaic" | "values" }) {
  if (!cards?.length) return null;
  return (
    <div className={`hover-grid hover-grid--${variant}`}>
      {cards.map((card, index) => (
        <article
          className={`hover-card ${card.size ? `hover-card--${card.size}` : ""}`}
          key={`${card.label}-${index}`}
          style={{
            backgroundImage: card.image
              ? `linear-gradient(180deg, rgba(16,37,62,0.06) 0%, rgba(16,37,62,0.74) 100%), url(/photos/${encodeURIComponent(card.image)})`
              : undefined,
          }}
          tabIndex={0}
        >
          <span className="hover-card__index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{card.label}</h3>
          <div className="hover-card__reveal">
            <strong>{card.hoverTitle}</strong>
            <p>{card.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function PillarGrid({ cards }: { cards?: HoverCard[] }) {
  if (!cards?.length) return null;
  return (
    <div className="pillar-grid">
      {cards.map((card, index) => (
        <article className="pillar-card" key={card.label} style={{ animationDelay: `${index * 120}ms` }}>
          <span className="pillar-card__number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{card.label}</h3>
          <strong>{card.hoverTitle}</strong>
          <p>{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function ValueGrid({ cards }: { cards?: HoverCard[] }) {
  if (!cards?.length) return null;
  return (
    <div className="value-grid">
      {cards.map((card, index) => (
        <article className="value-card" key={card.label} style={{ animationDelay: `${index * 120}ms` }}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{card.label}</h3>
          <strong>{card.hoverTitle}</strong>
          <p>{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function OemLogoGrid({ logos }: { logos: OemLogo[] }) {
  return (
    <div className="oem-logo-grid">
      {logos.map((logo, i) => (
        <div
          key={logo.file}
          className={`oem-logo-item${logo.theme === "dark" ? " oem-logo-item--dark" : ""}`}
          style={{ animationDelay: `${i * 40}ms` }}
          title={logo.name}
        >
          <Image
            src={`/logos/oem/${logo.file}`}
            alt={logo.name}
            width={120}
            height={38}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
      ))}
    </div>
  );
}

function DivisionGrid({ cards }: { cards?: LabeledText[] }) {
  if (!cards?.length) return null;
  return (
    <div className="pillar-grid pillar-grid--holding">
      {cards.map((card, index) => (
        <article className="pillar-card" key={card.title} style={{ animationDelay: `${index * 120}ms` }}>
          <span className="pillar-card__number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
          {card.meta && <strong>{card.meta}</strong>}
        </article>
      ))}
    </div>
  );
}

function renderSlide(slide: SlideData, onStart?: () => void) {
  switch (slide.type) {
    case "cover":
      return (
        <SlideFrame slide={slide}>
          <div className="start-screen">
            <Image
              className="start-screen__logo"
              src="/logos/ATM_logo_inverzni_white_red_without_bc.svg?v=20260507"
              alt="AIR TEAM"
              width={340}
              height={167}
              priority
            />
            <button className="start-screen__button" type="button" onClick={onStart} data-hover="Open">
              <span>Presentation</span>
            </button>
            <strong>{slide.cta}</strong>
          </div>
        </SlideFrame>
      );

    case "intro":
      return (
        <SlideFrame slide={slide}>
          <div className="intro-block">
            <div className="intro-block__copy">
              <Eyebrow>{slide.eyebrow}</Eyebrow>
              <h2>{slide.headline}</h2>
              <p className="lead">{slide.body}</p>
            </div>
            <TextList items={slide.bullets} />
          </div>
        </SlideFrame>
      );

    case "intro-photo":
      return (
        <SlideFrame slide={slide}>
          <div className="intro-block">
            <div className="intro-block__copy">
              <Eyebrow>{slide.eyebrow}</Eyebrow>
              <h2>{slide.headline}</h2>
              <p className="lead">{slide.body}</p>
            </div>
          </div>
        </SlideFrame>
      );

    case "divider":
      if (slide.logos?.length) {
        return (
          <SlideFrame slide={slide}>
            <div className="oem-slide">
              <div className="oem-slide__header">
                <div>
                  <Eyebrow>{slide.eyebrow}</Eyebrow>
                  <h2>{slide.headline}</h2>
                </div>
                {slide.subheadline && (
                  <p className="oem-slide__sub">{slide.subheadline}</p>
                )}
              </div>
              <OemLogoGrid logos={slide.logos} />
            </div>
          </SlideFrame>
        );
      }
      return (
        <SlideFrame slide={slide}>
          <div className="meet-slide">
            <div>
              <Eyebrow>{slide.eyebrow}</Eyebrow>
              <h2>{slide.headline}</h2>
              <p>{slide.subheadline}</p>
            </div>
            <CardGrid cards={slide.cards} compact />
          </div>
        </SlideFrame>
      );

    case "pillars":
      return (
        <SlideFrame slide={slide}>
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <h2>Our Pillars.</h2>
          <PillarGrid cards={slide.hoverCards} />
          {slide.body && <p className="pillar-footnote">{slide.body}</p>}
        </SlideFrame>
      );

    case "holding":
      return (
        <SlideFrame slide={slide}>
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <h2>{slide.headline}</h2>
          <DivisionGrid cards={slide.cards} />
          {slide.locations && slide.locations.length > 0 && (
            <div className="location-pins">
              {slide.locations.map((loc) => (
                <span key={loc.place} className="location-pin">
                  <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 1 1 5 3.25a1.75 1.75 0 0 1 0 3.5z" fill="currentColor"/>
                  </svg>
                  {loc.place}
                </span>
              ))}
            </div>
          )}
        </SlideFrame>
      );

    case "figures":
      return (
        <SlideFrame slide={slide}>
          <div className="certification-slide">
            <div>
              <Eyebrow>{slide.eyebrow}</Eyebrow>
              <h2>{slide.headline}</h2>
              <div className="metric-strip">
                <CardGrid cards={slide.cards} compact />
              </div>
            </div>
            <div>
              <div className="cert-badge-grid">
                {slide.bullets?.map((item) => (
                  <span key={item} className="cert-badge">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </SlideFrame>
      );

    case "locations":
      return (
        <SlideFrame slide={slide} tone="light">
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <h2>{slide.headline}</h2>
          <div className="location-grid">
            {slide.locations?.map((location, index) => (
              <article className="location-card" key={location.place} style={{ animationDelay: `${index * 120}ms` }}>
                <span />
                <h3>{location.place}</h3>
                <p>{location.body}</p>
                {location.note && <small>{location.note}</small>}
              </article>
            ))}
          </div>
        </SlideFrame>
      );

    case "areas":
      return (
        <SlideFrame slide={slide}>
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <h2>{slide.headline}</h2>
          <div className="pill-strip" aria-label="Areas AIR TEAM serves">
            {slide.cards?.map((card) => <span key={card.title}>{card.title}</span>)}
          </div>
          <CardGrid cards={slide.cards} compact />
        </SlideFrame>
      );

    case "services":
      return (
        <SlideFrame slide={slide} tone="light">
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <h2>{slide.headline}</h2>
          <HoverGrid cards={slide.hoverCards} variant="mosaic" />
        </SlideFrame>
      );

    case "detail":
    case "strategy":
      return (
        <SlideFrame slide={slide}>
          <div className="split-layout">
            <div>
              <Eyebrow>{slide.eyebrow}</Eyebrow>
              <h2>{slide.headline}</h2>
              {slide.body && <p className="lead">{slide.body}</p>}
            </div>
            <TextList items={slide.bullets} />
          </div>
        </SlideFrame>
      );

    case "whyProof":
      return (
        <SlideFrame slide={slide}>
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <h2>{slide.headline}</h2>
          <CardGrid cards={slide.cards} compact={(slide.cards?.length ?? 0) >= 5} />
        </SlideFrame>
      );

    case "why":
      return (
        <SlideFrame slide={slide}>
          <Eyebrow>{slide.eyebrow}</Eyebrow>
          <h2>{slide.headline}</h2>
          {slide.body && <p className="values-intro">{slide.body}</p>}
          <ValueGrid cards={slide.hoverCards} />
        </SlideFrame>
      );

    case "photo":
      return <SlideFrame slide={slide}><div /></SlideFrame>;

    case "quad-detail":
      return (
        <SlideFrame slide={slide}>
          <div className="quad-layout">
            <div className="quad-layout__header">
              <Eyebrow>{slide.eyebrow}</Eyebrow>
              <h2>{slide.headline}</h2>
            </div>
            <div className="quad-grid">
              {slide.quadCards?.map((card: QuadCard, i: number) => (
                <div key={i} className="quad-card">
                  <p className="quad-card__eyebrow">{card.eyebrow}</p>
                  <h3 className="quad-card__headline">{card.headline}</h3>
                  <ul className="quad-card__bullets">
                    {card.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SlideFrame>
      );

    case "mission":
    case "thanks":
      return (
        <SlideFrame slide={slide}>
          <div className="hero hero--center">
            <Eyebrow>{slide.eyebrow}</Eyebrow>
            <h2>{slide.headline}</h2>
            <p>{slide.body}</p>
            {slide.cta && <strong>{slide.cta}</strong>}
            {slide.subheadline && (
              <a
                href={`https://${slide.subheadline}`}
                target="_blank"
                rel="noopener noreferrer"
                className="closing-url"
              >
                {slide.subheadline}
              </a>
            )}
          </div>
        </SlideFrame>
      );
  }
}

export default function Presentation({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<Direction>("fwd");
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [shareStatus, setShareStatus] = useState<"idle" | "copied">("idle");

  const goTo = useCallback((index: number, nextDirection: Direction) => {
    const bounded = Math.max(0, Math.min(slides.length - 1, index));
    setDirection(nextDirection);
    setCurrent(bounded);
  }, [slides.length]);

  const next = useCallback(() => goTo(current + 1, "fwd"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "bwd"), [current, goTo]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (isPrintMode) return;
      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        next();
      }
      if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        prev();
      }
      if (event.key === "Home") goTo(0, "bwd");
      if (event.key === "End") goTo(slides.length - 1, "fwd");
      if (event.key.toLowerCase() === "f") toggleFullscreen();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, isPrintMode, next, prev, slides.length]);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isPrintMode) return;
    const timer = window.setTimeout(() => {
      window.print();
      window.setTimeout(() => setIsPrintMode(false), 700);
    }, 300);
    return () => window.clearTimeout(timer);
  }, [isPrintMode]);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      return;
    }
    document.exitFullscreen?.().catch(() => {});
  }

  async function shareLink() {
    const shareData = {
      title: "AIR\u00a0TEAM \u2013 Company Presentation 2026",
      text: "AIR\u00a0TEAM Corporate Presentation 2026",
      url: PDF_URL,
    };
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user cancelled or share failed — fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(PDF_URL);
      setShareStatus("copied");
      window.setTimeout(() => setShareStatus("idle"), 2000);
    } catch {
      // clipboard not available — nothing we can do silently
    }
  }

  function onTouchEnd(value: number) {
    if (touchStart === null) return;
    const delta = touchStart - value;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
    setTouchStart(null);
  }

  return (
    <>
      {current > 0 && (
        <header className="top-nav">
          <div className="brand-mark">
            <Image
              className="brand-mark__logo"
              src="/logos/ATM_logo_inverzni_white_red_without_bc.svg?v=20260507"
              alt="AIR TEAM"
              width={92}
              height={45}
            />
            <small>Corporate Presentation 2026</small>
          </div>
          <div className="nav-actions">
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Download PDF"
              aria-label="Download PDF"
            >
              <IconDownload />
            </a>
            <button
              type="button"
              onClick={shareLink}
              title={shareStatus === "copied" ? "Link copied" : "Share presentation"}
              aria-label="Share presentation"
            >
              <IconShare />
            </button>
            <button type="button" onClick={toggleFullscreen} title="Fullscreen">
              <IconFullscreen active={isFullscreen} />
            </button>
          </div>
        </header>
      )}

      <main
        className="presentation"
        onTouchStart={(event) => setTouchStart(event.changedTouches[0]?.screenX ?? null)}
        onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.screenX ?? 0)}
      >
        <div key={slides[current].id} className={`slide-motion slide-motion--${direction}`}>
          {renderSlide(slides[current], current === 0 ? next : undefined)}
        </div>

        {current > 0 && (
          <>
            <button className="arrow-btn arrow-btn--prev" type="button" onClick={prev} aria-label="Previous slide">
              <IconArrowLeft />
            </button>
            <button className="arrow-btn arrow-btn--next" type="button" onClick={next} disabled={current === slides.length - 1} aria-label="Next slide">
              <IconArrowRight />
            </button>
          </>
        )}
      </main>

      {current > 0 && <SectionProgress slides={slides} current={current} goTo={goTo} />}

      {isPrintMode && (
        <div className="print-deck">
          {slides.map((slide) => (
            <div className="print-slide" key={slide.id}>
              {renderSlide(slide)}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
