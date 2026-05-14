"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { SlideData } from "../../slides";

const TYPE_LABELS: Record<string, string> = {
  cover: "Titulní",
  intro: "Intro",
  divider: "Oddělovač",
  pillars: "Pilíře",
  holding: "Holding",
  figures: "Čísla",
  locations: "Lokace",
  areas: "Oblasti",
  services: "Služby",
  detail: "Detail",
  strategy: "Strategie",
  whyProof: "Proč my",
  why: "Hodnoty",
  mission: "Mise",
  thanks: "Poděkování",
};

export default function EditorPage() {
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/slides")
      .then((r) => r.json())
      .then((data) => {
        setSlides(data);
        setLoading(false);
      });
  }, []);

  async function save(newSlides: SlideData[]) {
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/slides", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSlides),
    });
    setSaving(false);
    if (res.ok) {
      setMessage("Uloženo. Prezentace se aktualizuje za ~1 min.");
      setSlides(newSlides);
    } else {
      setMessage("Chyba při ukládání. Zkus to znovu.");
    }
  }

  function moveUp(index: number) {
    if (index === 0) return;
    const next = [...slides];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    save(next);
  }

  function moveDown(index: number) {
    if (index === slides.length - 1) return;
    const next = [...slides];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    save(next);
  }

  function deleteSlide(index: number) {
    if (!confirm(`Smazat slide "${slides[index].headline}"?`)) return;
    const next = slides.filter((_, i) => i !== index);
    save(next);
  }

  async function logout() {
    await fetch("/api/auth", { method: "DELETE" });
    window.location.href = "/admin/login";
  }

  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-loading">Načítám slidy...</div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header__brand">
          <span className="admin-header__dot" />
          <strong>AIR TEAM Admin</strong>
        </div>
        <div className="admin-header__actions">
          <Link href="/" className="admin-btn admin-btn--ghost" target="_blank">
            Zobrazit prezentaci ↗
          </Link>
          <button className="admin-btn admin-btn--ghost" onClick={logout}>
            Odhlásit
          </button>
        </div>
      </header>

      <div className="admin-content">
        <div className="admin-toolbar">
          <h2>Slidy <span className="admin-count">({slides.length})</span></h2>
          <Link href="/admin/editor/new" className="admin-btn admin-btn--primary">
            + Nový slide
          </Link>
        </div>

        {message && (
          <div className={`admin-message ${message.includes("Chyba") ? "admin-message--error" : "admin-message--ok"}`}>
            {message}
          </div>
        )}

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Typ</th>
                <th>Sekce</th>
                <th>Nadpis</th>
                <th>Pořadí</th>
                <th>Akce</th>
              </tr>
            </thead>
            <tbody>
              {slides.map((slide, index) => (
                <tr key={slide.id}>
                  <td className="admin-table__num">{String(index + 1).padStart(2, "0")}</td>
                  <td className="admin-table__id">
                    <code>{slide.id}</code>
                  </td>
                  <td>
                    <span className="admin-tag">{TYPE_LABELS[slide.type] ?? slide.type}</span>
                  </td>
                  <td className="admin-table__section">{slide.section}</td>
                  <td className="admin-table__headline">{slide.headline}</td>
                  <td className="admin-table__order">
                    <button
                      className="admin-icon-btn"
                      onClick={() => moveUp(index)}
                      disabled={index === 0 || saving}
                      title="Přesunout nahoru"
                    >
                      ↑
                    </button>
                    <button
                      className="admin-icon-btn"
                      onClick={() => moveDown(index)}
                      disabled={index === slides.length - 1 || saving}
                      title="Přesunout dolů"
                    >
                      ↓
                    </button>
                  </td>
                  <td className="admin-table__actions">
                    <Link href={`/admin/editor/${slide.id}`} className="admin-btn admin-btn--sm">
                      Upravit
                    </Link>
                    <button
                      className="admin-btn admin-btn--sm admin-btn--danger"
                      onClick={() => deleteSlide(index)}
                      disabled={saving}
                    >
                      Smazat
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
