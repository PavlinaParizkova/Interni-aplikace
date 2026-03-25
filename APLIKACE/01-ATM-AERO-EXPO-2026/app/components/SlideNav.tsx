"use client";

type SlideNavProps = {
  current: number;
  total: number;
  sections: { label: string; slideIndex: number }[];
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
};

function getActiveSection(
  current: number,
  sections: { label: string; slideIndex: number }[]
): number {
  let active = 0;
  for (let i = 0; i < sections.length; i++) {
    if (current >= sections[i].slideIndex) active = i;
  }
  return active;
}

export default function SlideNav({
  current,
  total,
  sections,
  onPrev,
  onNext,
  onGoTo,
}: SlideNavProps) {
  const activeSection = getActiveSection(current, sections);

  return (
    <nav
      className="flex items-center justify-between px-8 py-0 flex-shrink-0"
      style={{
        background: "var(--color-at-blue-v1)",
        borderBottom: "1px solid var(--color-at-blue-v2)",
        height: 52,
      }}
    >
      {/* Left: AIR TEAM wordmark */}
      <div className="flex items-center gap-2.5 flex-shrink-0">
        <div
          className="w-1 h-5 rounded-sm"
          style={{ background: "var(--color-at-red)" }}
        />
        <span
          className="text-xs font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--color-at-blue-a5)" }}
        >
          AIR TEAM
        </span>
        <span style={{ color: "var(--color-at-blue-v2)" }}>·</span>
        <span
          className="text-xs font-bold tracking-wider uppercase"
          style={{ color: "var(--color-at-blue-v4)" }}
        >
          AERO EXPO 2026
        </span>
      </div>

      {/* Center: Section tabs */}
      <div className="flex items-center gap-1">
        {sections.map((section, i) => {
          const isActive = i === activeSection;
          return (
            <button
              key={section.label}
              onClick={() => onGoTo(section.slideIndex)}
              className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wide ${
                isActive ? "btn-secondary" : "btn-nav-ghost"
              }`}
            >
              {String(i + 1).padStart(2, "0")} {section.label}
            </button>
          );
        })}
      </div>

      {/* Right: counter + arrows */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span
          className="text-xs font-mono"
          style={{ color: "var(--color-at-blue-v4)" }}
        >
          {String(current + 1).padStart(2, "0")}{" "}
          <span style={{ color: "var(--color-at-blue-v2)" }}>/</span>{" "}
          {String(total).padStart(2, "0")}
        </span>

        <button
          onClick={onPrev}
          disabled={current === 0}
          className="btn-secondary w-8 h-8 rounded flex items-center justify-center"
          aria-label="Předchozí slide"
        >
          ←
        </button>
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="btn-secondary w-8 h-8 rounded flex items-center justify-center"
          aria-label="Další slide"
        >
          →
        </button>
      </div>
    </nav>
  );
}
