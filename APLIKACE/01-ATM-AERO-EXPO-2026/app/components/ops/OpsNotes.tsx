"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TEAM } from "../../data/slides-data";

type NotesState = { content: string; updatedAt: string; updatedBy: string };

const AUTHOR_KEY = "aero-expo-notes-author";

function formatTs(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString("cs-CZ", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
}

type FormatAction = {
  label: string;
  title: string;
  wrap?: [string, string];
  prefix?: string;
  insert?: string;
};

const FORMAT_ACTIONS: FormatAction[] = [
  { label: "H2",  title: "Nadpis sekce",   prefix: "## " },
  { label: "H3",  title: "Podnadpis",       prefix: "### " },
  { label: "B",   title: "Tučné",           wrap: ["**", "**"] },
  { label: "I",   title: "Kurzíva",         wrap: ["*", "*"] },
  { label: "—",   title: "Odrážka",         prefix: "- " },
  { label: "1.",  title: "Číslovaný bod",   prefix: "1. " },
  { label: "[ ]", title: "Úkol",           prefix: "- [ ] " },
  { label: "───", title: "Oddělovač",       insert: "\n\n---\n\n" },
];

function applyFormat(
  textarea: HTMLTextAreaElement,
  action: FormatAction,
): string {
  const { value, selectionStart, selectionEnd } = textarea;
  const selected = value.slice(selectionStart, selectionEnd);
  let before = value.slice(0, selectionStart);
  let after = value.slice(selectionEnd);
  let inserted = "";

  if (action.insert) {
    inserted = action.insert;
    return before + inserted + after;
  }

  if (action.wrap) {
    const [open, close] = action.wrap;
    if (selected) {
      inserted = open + selected + close;
    } else {
      inserted = open + "text" + close;
    }
    return before + inserted + after;
  }

  if (action.prefix) {
    // Apply prefix at start of line
    const lineStart = before.lastIndexOf("\n") + 1;
    const linePrefix = before.slice(lineStart);
    if (linePrefix.startsWith(action.prefix)) {
      // Toggle off
      before = before.slice(0, lineStart) + linePrefix.slice(action.prefix.length);
    } else {
      before = before.slice(0, lineStart) + action.prefix + linePrefix;
    }
    return before + selected + after;
  }

  return value;
}

export default function OpsNotes() {
  const [content, setContent] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [updatedBy, setUpdatedBy] = useState("");
  const [saving, setSaving] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [author, setAuthor] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(AUTHOR_KEY) ?? "";
    setAuthor(saved);
  }, []);

  const handleAuthorChange = (name: string) => {
    setAuthor(name);
    localStorage.setItem(AUTHOR_KEY, name);
  };

  const save = useCallback(
    (value: string, by: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(async () => {
        setSaving(true);
        try {
          const res = await fetch("/api/notes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: value, updatedBy: by }),
          });
          const data: NotesState = await res.json();
          setUpdatedAt(data.updatedAt);
          setUpdatedBy(data.updatedBy);
        } catch {
          // ignore
        } finally {
          setSaving(false);
        }
      }, 1000);
    },
    [],
  );

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/notes");
      const data: NotesState = await res.json();
      if (!loaded) {
        setContent(data.content);
        setLoaded(true);
      }
      setUpdatedAt(data.updatedAt);
      setUpdatedBy(data.updatedBy ?? "");
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
        setUpdatedBy(data.updatedBy ?? "");
      } catch {
        // ignore
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [load]);

  const handleChange = (value: string) => {
    setContent(value);
    save(value, author);
  };

  const handleFormat = (action: FormatAction) => {
    const el = textareaRef.current;
    if (!el) return;
    const newValue = applyFormat(el, action);
    setContent(newValue);
    save(newValue, author);
    // Restore focus
    setTimeout(() => el.focus(), 0);
  };

  const insertTimestamp = () => {
    const el = textareaRef.current;
    if (!el) return;
    const now = new Date().toLocaleString("cs-CZ", {
      day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit",
    });
    const stamp = `\n\n**${author || "?"}** · ${now}\n`;
    const { value, selectionStart } = el;
    const newValue = value.slice(0, selectionStart) + stamp + value.slice(selectionStart);
    setContent(newValue);
    save(newValue, author);
    setTimeout(() => el.focus(), 0);
  };

  return (
    <div className="flex flex-col gap-3 h-full">

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: "var(--color-at-white)" }}>
            Sdílené poznámky
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-at-blue-v5)" }}>
            Viditelné pro celý tým · auto-save za 1 s
          </p>
        </div>

        {/* Save status + author */}
        <div className="flex flex-col items-end gap-1">
          {saving && (
            <span className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>Ukládám…</span>
          )}
          {!saving && updatedAt && (
            <span className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>
              Uloženo {formatTs(updatedAt)}{updatedBy ? ` · ${updatedBy.split(" ")[0]}` : ""}
            </span>
          )}

          {/* Author selector */}
          <select
            value={author}
            onChange={(e) => handleAuthorChange(e.target.value)}
            className="text-xs rounded-lg px-2 py-1 focus:outline-none"
            style={{
              background: "var(--color-at-blue-v2)",
              color: author ? "var(--color-at-white)" : "var(--color-at-blue-v4)",
              border: "1px solid var(--color-at-blue-v3)",
            }}
          >
            <option value="">— Kdo zapisuje? —</option>
            {TEAM.map((m) => (
              <option key={m.name} value={m.name}>{m.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Formatting toolbar */}
      <div
        className="flex flex-wrap gap-1 rounded-xl px-3 py-2"
        style={{ background: "var(--color-at-blue-v2)", border: "1px solid var(--color-at-blue-v3)" }}
      >
        {FORMAT_ACTIONS.map((action) => (
          <button
            key={action.label}
            title={action.title}
            onClick={() => handleFormat(action)}
            className="rounded px-2 py-0.5 text-xs font-mono transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "var(--color-at-blue-v3)",
              color: "var(--color-at-white)",
              border: "1px solid var(--color-at-blue-v3)",
              minWidth: 30,
            }}
          >
            {action.label}
          </button>
        ))}

        <div style={{ width: 1, background: "var(--color-at-blue-v3)", margin: "0 4px" }} />

        <button
          title="Vložit podpis a čas"
          onClick={insertTimestamp}
          className="rounded px-2 py-0.5 text-xs transition-all hover:opacity-90 active:scale-95"
          style={{
            background: "var(--color-at-blue-v3)",
            color: "var(--color-at-white)",
            border: "1px solid var(--color-at-blue-v3)",
          }}
        >
          ✍ Podpis
        </button>
      </div>

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={content}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Sem pište poznámky ze schůzky, rozhodnutí, úkoly… Všichni v týmu to vidí v reálném čase."
        className="flex-1 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none font-mono"
        style={{
          background: "var(--color-at-blue-v1)",
          border: "1px solid var(--color-at-blue-v2)",
          color: "var(--color-at-white)",
          minHeight: 280,
          lineHeight: 1.8,
        }}
        spellCheck={false}
      />

      {/* Tip */}
      <p className="text-xs" style={{ color: "var(--color-at-blue-v3)" }}>
        Tip: ## Nadpis · ### Podnadpis · **tučné** · *kurzíva* · - odrážka · - [ ] úkol · tlačítko ✍ vloží váš podpis s časem
      </p>
    </div>
  );
}
