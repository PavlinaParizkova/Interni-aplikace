"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type NotesState = { content: string; updatedAt: string };

function formatTs(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString("cs-CZ", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
}

export default function OpsNotes() {
  const [content, setContent] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [saving, setSaving] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/notes");
      const data: NotesState = await res.json();
      if (!loaded) {
        setContent(data.content);
        setLoaded(true);
      }
      setUpdatedAt(data.updatedAt);
    } catch {
      // ignore
    }
  }, [loaded]);

  useEffect(() => {
    load();
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/notes");
        const data: NotesState = await res.json();
        setUpdatedAt(data.updatedAt);
      } catch {
        // ignore
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [load]);

  const handleChange = (value: string) => {
    setContent(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setSaving(true);
      try {
        await fetch("/api/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: value }),
        });
        setUpdatedAt(new Date().toISOString());
      } catch {
        // ignore
      } finally {
        setSaving(false);
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Header row */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <p className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: "var(--color-at-blue-v5)" }}>
            Sdílené poznámky
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-at-blue-v4)" }}>
            Viditelné pro celý tým · auto-save za 1 s
          </p>
        </div>
        <div className="flex items-center gap-2">
          {saving && (
            <span className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>
              Ukládám…
            </span>
          )}
          {!saving && updatedAt && (
            <span className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>
              Uloženo {formatTs(updatedAt)}
            </span>
          )}
        </div>
      </div>

      {/* Textarea */}
      <textarea
        value={content}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Sem pište poznámky ze schůzky, rozhodnutí, úkoly… Všichni v týmu to vidí v reálném čase."
        className="flex-1 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none"
        style={{
          background: "var(--color-at-blue-v1)",
          border: "1px solid var(--color-at-blue-v2)",
          color: "var(--color-at-white)",
          minHeight: 320,
          lineHeight: 1.7,
        }}
        spellCheck={false}
      />

      {/* Tip */}
      <p className="text-xs" style={{ color: "var(--color-at-blue-v3)" }}>
        Tip: Používejte ### pro nadpisy, - pro odrážky. Poznámky nejsou formátované, slouží pro rychlý záznam.
      </p>
    </div>
  );
}
