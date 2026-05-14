"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { SlideData, LabeledText, HoverCard, LocationItem, SlideType } from "../../../slides";
import { SLIDE_SECTIONS, SLIDE_TYPES } from "../../../slides";

const TYPE_LABELS: Record<SlideType, string> = {
  cover: "Titulní (cover)",
  intro: "Intro",
  divider: "Oddělovač (divider)",
  pillars: "Pilíře (pillars)",
  holding: "Holding",
  figures: "Klíčová čísla (figures)",
  locations: "Lokace",
  areas: "Oblasti (areas)",
  services: "Služby (services)",
  detail: "Detail",
  strategy: "Strategie",
  whyProof: "Proč my (whyProof)",
  why: "Hodnoty (why)",
  mission: "Mise",
  thanks: "Poděkování",
  photo: "Fotka (photo)",
  "quad-detail": "2×2 grid (quad-detail)",
  "intro-photo": "Intro + fotka dole (intro-photo)",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="admin-field">
      <label>{label}</label>
      {children}
    </div>
  );
}

function CardArrayEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: LabeledText[];
  onChange: (items: LabeledText[]) => void;
}) {
  function update(index: number, key: keyof LabeledText, value: string) {
    const next = items.map((item, i) => (i === index ? { ...item, [key]: value } : item));
    onChange(next);
  }

  function add() {
    onChange([...items, { title: "", body: "" }]);
  }

  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div className="admin-array">
      <div className="admin-array__header">
        <strong>{label}</strong>
        <button type="button" className="admin-btn admin-btn--sm" onClick={add}>+ Přidat</button>
      </div>
      {items.map((item, i) => (
        <div key={i} className="admin-array__item">
          <div className="admin-array__row">
            <input
              type="text"
              value={item.title}
              onChange={(e) => update(i, "title", e.target.value)}
              placeholder="Nadpis / číslo"
            />
            <input
              type="text"
              value={item.meta ?? ""}
              onChange={(e) => update(i, "meta", e.target.value)}
              placeholder="Meta (volitelné)"
              style={{ maxWidth: 160 }}
            />
            <button type="button" className="admin-icon-btn admin-icon-btn--danger" onClick={() => remove(i)}>×</button>
          </div>
          <textarea
            value={item.body}
            onChange={(e) => update(i, "body", e.target.value)}
            placeholder="Popis"
            rows={2}
          />
        </div>
      ))}
      {items.length === 0 && <p className="admin-empty">Žádné položky. Klikni + Přidat.</p>}
    </div>
  );
}

function HoverCardArrayEditor({
  label,
  items,
  onChange,
  showImage = false,
}: {
  label: string;
  items: HoverCard[];
  onChange: (items: HoverCard[]) => void;
  showImage?: boolean;
}) {
  function update(index: number, key: keyof HoverCard, value: string) {
    const next = items.map((item, i) => (i === index ? { ...item, [key]: value } : item));
    onChange(next);
  }

  function add() {
    onChange([...items, { label: "", hoverTitle: "", body: "" }]);
  }

  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div className="admin-array">
      <div className="admin-array__header">
        <strong>{label}</strong>
        <button type="button" className="admin-btn admin-btn--sm" onClick={add}>+ Přidat</button>
      </div>
      {items.map((item, i) => (
        <div key={i} className="admin-array__item">
          <div className="admin-array__row">
            <input
              type="text"
              value={item.label}
              onChange={(e) => update(i, "label", e.target.value)}
              placeholder="Štítek (label)"
            />
            <input
              type="text"
              value={item.hoverTitle}
              onChange={(e) => update(i, "hoverTitle", e.target.value)}
              placeholder="Hover nadpis"
            />
            <button type="button" className="admin-icon-btn admin-icon-btn--danger" onClick={() => remove(i)}>×</button>
          </div>
          <textarea
            value={item.body}
            onChange={(e) => update(i, "body", e.target.value)}
            placeholder="Popis"
            rows={2}
          />
          {showImage && (
            <div className="admin-array__row">
              <input
                type="text"
                value={item.image ?? ""}
                onChange={(e) => update(i, "image", e.target.value)}
                placeholder="Soubor obrázku (např. service-mro.jpg)"
              />
              <select
                value={item.size ?? ""}
                onChange={(e) => update(i, "size", e.target.value)}
                style={{ maxWidth: 120 }}
              >
                <option value="">Normální</option>
                <option value="tall">Vysoká</option>
                <option value="wide">Široká</option>
                <option value="large">Velká</option>
              </select>
            </div>
          )}
        </div>
      ))}
      {items.length === 0 && <p className="admin-empty">Žádné položky. Klikni + Přidat.</p>}
    </div>
  );
}

function BulletArrayEditor({
  items,
  onChange,
}: {
  items: string[];
  onChange: (items: string[]) => void;
}) {
  function update(index: number, value: string) {
    const next = items.map((item, i) => (i === index ? value : item));
    onChange(next);
  }

  function add() {
    onChange([...items, ""]);
  }

  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div className="admin-array">
      <div className="admin-array__header">
        <strong>Odrážky (bullets)</strong>
        <button type="button" className="admin-btn admin-btn--sm" onClick={add}>+ Přidat</button>
      </div>
      {items.map((item, i) => (
        <div key={i} className="admin-array__row">
          <textarea
            value={item}
            onChange={(e) => update(i, e.target.value)}
            placeholder="Text odrážky"
            rows={2}
          />
          <button type="button" className="admin-icon-btn admin-icon-btn--danger" onClick={() => remove(i)}>×</button>
        </div>
      ))}
      {items.length === 0 && <p className="admin-empty">Žádné odrážky.</p>}
    </div>
  );
}

function LocationArrayEditor({
  items,
  onChange,
}: {
  items: LocationItem[];
  onChange: (items: LocationItem[]) => void;
}) {
  function update(index: number, key: keyof LocationItem, value: string) {
    const next = items.map((item, i) => (i === index ? { ...item, [key]: value } : item));
    onChange(next);
  }

  function add() {
    onChange([...items, { place: "", body: "" }]);
  }

  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div className="admin-array">
      <div className="admin-array__header">
        <strong>Lokace</strong>
        <button type="button" className="admin-btn admin-btn--sm" onClick={add}>+ Přidat</button>
      </div>
      {items.map((item, i) => (
        <div key={i} className="admin-array__item">
          <div className="admin-array__row">
            <input
              type="text"
              value={item.place}
              onChange={(e) => update(i, "place", e.target.value)}
              placeholder="Název místa"
            />
            <input
              type="text"
              value={item.note ?? ""}
              onChange={(e) => update(i, "note", e.target.value)}
              placeholder="Poznámka (volitelné)"
            />
            <button type="button" className="admin-icon-btn admin-icon-btn--danger" onClick={() => remove(i)}>×</button>
          </div>
          <textarea
            value={item.body}
            onChange={(e) => update(i, "body", e.target.value)}
            placeholder="Popis lokace"
            rows={2}
          />
        </div>
      ))}
      {items.length === 0 && <p className="admin-empty">Žádné lokace.</p>}
    </div>
  );
}

export default function SlideEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const isNew = id === "new";

  const [allSlides, setAllSlides] = useState<SlideData[]>([]);
  const [slide, setSlide] = useState<SlideData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/slides")
      .then((r) => r.json())
      .then((data: SlideData[]) => {
        setAllSlides(data);
        if (isNew) {
          setSlide({
            id: `slide-${Date.now()}`,
            type: "intro",
            section: "AIR\u00a0TEAM",
            headline: "",
          });
        } else {
          const found = data.find((s) => s.id === id);
          if (found) setSlide(found);
        }
        setLoading(false);
      });
  }, [id, isNew]);

  function update(key: keyof SlideData, value: unknown) {
    if (!slide) return;
    setSlide({ ...slide, [key]: value });
  }

  async function handleSave() {
    if (!slide) return;
    setSaving(true);
    setMessage("");

    let newSlides: SlideData[];
    if (isNew) {
      newSlides = [...allSlides, slide];
    } else {
      newSlides = allSlides.map((s) => (s.id === slide.id ? slide : s));
    }

    const res = await fetch("/api/slides", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSlides),
    });

    setSaving(false);

    if (res.ok) {
      setMessage("Uloženo. Prezentace se aktualizuje za ~1 min.");
      setAllSlides(newSlides);
      if (isNew) router.push("/admin/editor");
    } else {
      setMessage("Chyba při ukládání.");
    }
  }

  if (loading) {
    return <div className="admin-page"><div className="admin-loading">Načítám...</div></div>;
  }

  if (!slide) {
    return (
      <div className="admin-page">
        <div className="admin-content">
          <p>Slide nenalezen.</p>
          <Link href="/admin/editor" className="admin-btn admin-btn--ghost">← Zpět</Link>
        </div>
      </div>
    );
  }

  const showCards = ["divider", "holding", "areas", "whyProof", "why", "figures"].includes(slide.type);
  const showHoverCards = ["pillars", "services", "why"].includes(slide.type);
  const showBullets = ["detail", "strategy", "figures", "intro"].includes(slide.type);
  const showLocations = slide.type === "locations";
  const showImage = slide.type === "services";
  const showSubheadline = ["cover", "divider"].includes(slide.type);
  const showBody = ["intro", "detail", "strategy", "why", "mission", "thanks"].includes(slide.type);
  const showCta = ["cover", "mission", "thanks"].includes(slide.type);

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header__brand">
          <Link href="/admin/editor" className="admin-back">← Zpět na přehled</Link>
        </div>
        <div className="admin-header__actions">
          <button className="admin-btn admin-btn--primary" onClick={handleSave} disabled={saving}>
            {saving ? "Ukládám..." : "Uložit změny"}
          </button>
        </div>
      </header>

      <div className="admin-content">
        <h2 className="admin-slide-title">
          {isNew ? "Nový slide" : `Editace: ${slide.headline || slide.id}`}
        </h2>

        {message && (
          <div className={`admin-message ${message.includes("Chyba") ? "admin-message--error" : "admin-message--ok"}`}>
            {message}
          </div>
        )}

        <div className="admin-form">
          <div className="admin-form__row admin-form__row--3">
            <Field label="ID (identifikátor)">
              <input
                type="text"
                value={slide.id}
                onChange={(e) => update("id", e.target.value)}
                placeholder="napr. slide-uvod"
              />
            </Field>

            <Field label="Typ slidu">
              <select value={slide.type} onChange={(e) => update("type", e.target.value as SlideType)}>
                {SLIDE_TYPES.map((t) => (
                  <option key={t} value={t}>{TYPE_LABELS[t]}</option>
                ))}
              </select>
            </Field>

            <Field label="Sekce">
              <select value={slide.section} onChange={(e) => update("section", e.target.value as SlideData["section"])}>
                {SLIDE_SECTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Eyebrow (malý text nad nadpisem)">
            <input
              type="text"
              value={slide.eyebrow ?? ""}
              onChange={(e) => update("eyebrow", e.target.value)}
              placeholder="napr. Who We Are"
            />
          </Field>

          <Field label="Nadpis (headline)">
            <input
              type="text"
              value={slide.headline}
              onChange={(e) => update("headline", e.target.value)}
              placeholder="Hlavní nadpis slidu"
            />
          </Field>

          {showSubheadline && (
            <Field label="Podnadpis (subheadline)">
              <input
                type="text"
                value={slide.subheadline ?? ""}
                onChange={(e) => update("subheadline", e.target.value)}
                placeholder="Podnadpis"
              />
            </Field>
          )}

          {showBody && (
            <Field label="Text (body)">
              <textarea
                value={slide.body ?? ""}
                onChange={(e) => update("body", e.target.value)}
                placeholder="Delší text slidu"
                rows={5}
              />
            </Field>
          )}

          {showCta && (
            <Field label="CTA text">
              <input
                type="text"
                value={slide.cta ?? ""}
                onChange={(e) => update("cta", e.target.value)}
                placeholder="napr. AIR TEAM – YOUR MISSION. OUR TECHNOLOGY."
              />
            </Field>
          )}

          {showCards && (
            <CardArrayEditor
              label="Karty (cards)"
              items={slide.cards ?? []}
              onChange={(items) => update("cards", items)}
            />
          )}

          {showHoverCards && (
            <HoverCardArrayEditor
              label="Hover karty (hoverCards)"
              items={slide.hoverCards ?? []}
              onChange={(items) => update("hoverCards", items)}
              showImage={showImage}
            />
          )}

          {showBullets && (
            <BulletArrayEditor
              items={slide.bullets ?? []}
              onChange={(items) => update("bullets", items)}
            />
          )}

          {showLocations && (
            <LocationArrayEditor
              items={slide.locations ?? []}
              onChange={(items) => update("locations", items)}
            />
          )}
        </div>

        <div className="admin-form__footer">
          <button className="admin-btn admin-btn--primary" onClick={handleSave} disabled={saving}>
            {saving ? "Ukládám..." : "Uložit změny"}
          </button>
          <Link href="/admin/editor" className="admin-btn admin-btn--ghost">Zrušit</Link>
        </div>
      </div>
    </div>
  );
}
