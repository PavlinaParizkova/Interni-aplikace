"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSession } from "next-auth/react";
import type { MeetingNote } from "@/app/api/meetingnotes/route";
import { useIsOffline } from "../../hooks/useIsOffline";

function formatTs(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function exportToMd(notes: MeetingNote[], filterLabel?: string) {
  const titleSuffix = filterLabel ? ` – ${filterLabel}` : "";
  const lines = [
    `# AERO EXPO 2026 – Zápisy z jednání${titleSuffix}`,
    `Exportováno: ${new Date().toLocaleString("cs-CZ")}`,
    "",
    "---",
    "",
  ];
  for (const note of [...notes].reverse()) {
    const heading = note.title
      ? `## ${note.title} · ${note.author} · ${formatTs(note.createdAt)}`
      : `## ${note.author} · ${formatTs(note.createdAt)}`;
    lines.push(heading, "");
    lines.push(note.body);
    if (note.photos && note.photos.length > 0) {
      lines.push("");
      for (const photo of note.photos) {
        const url = typeof photo === "string" ? photo : photo.full;
        lines.push(`![Příloha](${url})`);
      }
    }
    if (note.editedAt) {
      lines.push("", `*Upraveno: ${formatTs(note.editedAt)}*`);
    }
    lines.push("", "---", "");
  }
  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const slug = filterLabel
    ? `-${filterLabel.toLowerCase().replace(/\s+/g, "-")}`
    : "";
  a.download = `aero-expo-2026-zapisy${slug}-${new Date().toISOString().slice(0, 10)}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

function resizeImage(file: File, maxWidth: number, quality: number): Promise<File> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      if (img.width <= maxWidth && quality >= 0.9) {
        resolve(file);
        return;
      }
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          resolve(new File([blob!], file.name, { type: "image/jpeg" }));
        },
        "image/jpeg",
        quality,
      );
    };
    img.src = url;
  });
}

type PhotoPair = { full: string; thumb: string };

async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: formData });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Upload selhal");
  return data.url;
}

async function uploadPhoto(file: File): Promise<PhotoPair> {
  const [full, thumb] = await Promise.all([
    resizeImage(file, 1000, 0.82).then(uploadFile),
    resizeImage(file, 300, 0.7).then(uploadFile),
  ]);
  return { full, thumb };
}

export default function OpsNotes() {
  const isOffline = useIsOffline();
  const { data: session } = useSession();
  const author = session?.user?.name ?? "";

  const [notes, setNotes] = useState<MeetingNote[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [saving, setSaving] = useState(false);

  const [photos, setPhotos] = useState<PhotoPair[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [filterAuthor, setFilterAuthor] = useState<string>("all");

  const authors = Array.from(new Set(notes.map((n) => n.author)));
  const filteredNotes =
    filterAuthor === "all" ? notes : notes.filter((n) => n.author === filterAuthor);
  const filterLabel =
    filterAuthor === "all" ? undefined : filterAuthor;

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/meetingnotes");
      const data: MeetingNote[] = await res.json();
      setNotes(data);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    load();
    const interval = setInterval(load, 10000);
    return () => clearInterval(interval);
  }, [load]);

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    setUploadError(null);
    try {
      const pairs: PhotoPair[] = [];
      for (const file of Array.from(files)) {
        const pair = await uploadPhoto(file);
        pairs.push(pair);
      }
      setPhotos((prev) => [...prev, ...pairs]);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Nahrávání selhalo");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const removePhoto = (thumb: string) => {
    setPhotos((prev) => prev.filter((p) => p.thumb !== thumb));
  };

  const handleSubmit = async () => {
    if (!author || !body.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/meetingnotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, author, photos: photos.length > 0 ? photos : undefined }),
      });
      const data: MeetingNote[] = await res.json();
      setNotes(data);
      setTitle("");
      setBody("");
      setPhotos([]);
    } catch {
      // ignore
    } finally {
      setSubmitting(false);
    }
  };

  const startEdit = (note: MeetingNote) => {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditBody(note.body);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditBody("");
  };

  const saveEdit = async (id: string) => {
    if (!editBody.trim()) return;
    setSaving(true);
    try {
      const res = await fetch("/api/meetingnotes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title: editTitle, body: editBody }),
      });
      const data: MeetingNote[] = await res.json();
      setNotes(data);
      setEditingId(null);
    } catch {
      // ignore
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full">

      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="min-w-0">
          <p
            className="text-xs font-bold tracking-[0.15em] uppercase"
            style={{ color: "var(--color-at-white)" }}
          >
            Zápisy z jednání
          </p>
          <p className="text-xs mt-0.5" style={{ color: isOffline ? "#f97316" : "var(--color-at-blue-v5)" }}>
            {isOffline ? "⚡ offline – zobrazuji poslední záznamy" : "Viditelné pro celý tým · obnova každých 10 s"}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
          <select
            value={filterAuthor}
            onChange={(e) => setFilterAuthor(e.target.value)}
            className="text-xs px-2 py-1 rounded focus:outline-none"
            style={{
              background: "var(--color-at-blue-v2)",
              border: "1px solid var(--color-at-blue-v3)",
              color: "var(--color-at-white)",
            }}
          >
            <option value="all">Všechny zápisy</option>
            {author && <option value={author}>Moje zápisy</option>}
            {authors
              .filter((a) => a !== author)
              .map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
          </select>
          <button
            onClick={() => exportToMd(filteredNotes, filterLabel)}
            disabled={filteredNotes.length === 0}
            className="text-xs font-bold px-3 py-1 rounded"
            style={{
              background: "var(--color-at-blue-v3)",
              color: "var(--color-at-white)",
              border: "1px solid var(--color-at-blue-v3)",
              opacity: filteredNotes.length === 0 ? 0.4 : 1,
            }}
          >
            Exportovat .md
          </button>
        </div>
      </div>

      {/* New note form */}
      <div
        className="flex flex-col gap-2 rounded-xl px-4 py-3"
        style={{
          background: "var(--color-at-blue-v2)",
          border: "1px solid var(--color-at-blue-v3)",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "var(--color-at-blue-v5)" }}>
          Nový zápis
        </p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Název jednání (volitelné)"
          className="rounded-lg px-3 py-2 text-sm focus:outline-none"
          style={{
            background: "var(--color-at-blue-v1)",
            border: "1px solid var(--color-at-blue-v3)",
            color: "var(--color-at-white)",
          }}
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.ctrlKey) { e.preventDefault(); handleSubmit(); }
          }}
          placeholder="Obsah zápisu… (Ctrl+Enter = odeslat)"
          rows={4}
          className="rounded-lg px-3 py-2 text-sm resize-none focus:outline-none font-mono"
          style={{
            background: "var(--color-at-blue-v1)",
            border: "1px solid var(--color-at-blue-v3)",
            color: "var(--color-at-white)",
            lineHeight: 1.7,
          }}
        />
        {/* Photo previews */}
        {photos.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {photos.map((p) => (
              <div key={p.thumb} className="relative group">
                <img
                  src={p.thumb}
                  alt="Příloha"
                  className="w-16 h-16 object-cover rounded-lg"
                  style={{ border: "1px solid var(--color-at-blue-v3)" }}
                />
                <button
                  onClick={() => removePhoto(p.thumb)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "var(--color-at-red)",
                    color: "var(--color-at-white)",
                    lineHeight: 1,
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {uploading && (
          <p className="text-xs" style={{ color: "var(--color-at-blue-v5)" }}>
            Nahrávám fotky…
          </p>
        )}

        {uploadError && (
          <p className="text-xs font-bold px-3 py-1.5 rounded-lg" style={{ background: "rgba(213,28,23,0.12)", color: "var(--color-at-red)" }}>
            {uploadError}
          </p>
        )}

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFiles}
        />

        <div className="flex items-center justify-between gap-2">
          <span className="text-xs" style={{ color: isOffline ? "#f97316" : "var(--color-at-blue-v4)" }}>
            {isOffline ? "Offline – zápisy se neukládají" : (author || "Nepřihlášen/a")}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fileRef.current?.click()}
              disabled={uploading || isOffline}
              title="Přidat fotku (vizitka, poznámky…)"
              className="text-sm font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
              style={{
                background: "var(--color-at-blue-v3)",
                color: "var(--color-at-white)",
                border: "1px solid var(--color-at-blue-v3)",
                opacity: uploading || isOffline ? 0.4 : 1,
                cursor: isOffline ? "not-allowed" : "pointer",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              {uploading ? "Nahrávám…" : "Foto"}
              {photos.length > 0 && (
                <span
                  className="text-xs font-black px-1.5 py-0.5 rounded-full"
                  style={{ background: "var(--color-at-red)", color: "var(--color-at-white)", fontSize: 10 }}
                >
                  {photos.length}
                </span>
              )}
            </button>
            <button
              onClick={handleSubmit}
              disabled={!body.trim() || submitting || !author || isOffline}
              title={isOffline ? "Offline – zápisy se neukládají" : undefined}
              className="text-sm font-black px-4 py-1.5 rounded-lg transition-all"
              style={{
                background: "var(--color-at-red)",
                color: "var(--color-at-white)",
                opacity: !body.trim() || !author || isOffline ? 0.4 : 1,
                cursor: isOffline ? "not-allowed" : "pointer",
              }}
            >
              {submitting ? "Odesílám…" : "Přidat zápis"}
            </button>
          </div>
        </div>
      </div>

      {/* Notes wall */}
      <div className="flex flex-col gap-3 overflow-y-auto" style={{ minHeight: 0, flex: 1 }}>
        {filteredNotes.length === 0 && (
          <p
            className="text-sm text-center py-8"
            style={{ color: "var(--color-at-blue-v4)" }}
          >
            {notes.length === 0
              ? "Zatím žádné zápisy. Přidej první zápis z jednání."
              : "Žádné zápisy od tohoto autora."}
          </p>
        )}

        {filteredNotes.map((note) => {
          const isEditing = editingId === note.id;
          const isMe = note.author === author;

          return (
            <div
              key={note.id}
              className="rounded-xl px-4 py-3 flex flex-col gap-2"
              style={{
                background: "var(--color-at-blue-v1)",
                border: `1px solid ${isMe ? "var(--color-at-blue-v3)" : "var(--color-at-blue-v2)"}`,
              }}
            >
              {/* Note header */}
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-xs font-black"
                      style={{ color: isMe ? "var(--color-at-red)" : "var(--color-at-blue-v5)" }}
                    >
                      {note.author}
                    </span>
                    <span className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>
                      {formatTs(note.createdAt)}
                    </span>
                    {note.editedAt && (
                      <span className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>
                        · upraveno {formatTs(note.editedAt)}
                      </span>
                    )}
                  </div>
                  {note.title && !isEditing && (
                    <p className="text-sm font-bold" style={{ color: "var(--color-at-white)" }}>
                      {note.title}
                    </p>
                  )}
                </div>
                {isMe && !isEditing && (
                  <button
                    onClick={() => startEdit(note)}
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      color: "var(--color-at-blue-v5)",
                      border: "1px solid var(--color-at-blue-v3)",
                    }}
                  >
                    Upravit
                  </button>
                )}
              </div>

              {/* View mode */}
              {!isEditing && (
                <>
                  <p
                    className="text-sm whitespace-pre-wrap"
                    style={{ color: "var(--color-at-white)", lineHeight: 1.7 }}
                  >
                    {note.body}
                  </p>
                  {note.photos && note.photos.length > 0 && (
                    <div className="flex gap-2 flex-wrap mt-1">
                      {note.photos.map((photo) => {
                        const thumbUrl = typeof photo === "string" ? photo : photo.thumb;
                        const fullUrl = typeof photo === "string" ? photo : photo.full;
                        return (
                          <a
                            key={thumbUrl}
                            href={fullUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={thumbUrl}
                              alt="Příloha"
                              loading="lazy"
                              className="w-24 h-24 object-cover rounded-lg hover:opacity-80 transition-opacity"
                              style={{ border: "1px solid var(--color-at-blue-v3)" }}
                            />
                          </a>
                        );
                      })}
                    </div>
                  )}
                </>
              )}

              {/* Edit mode */}
              {isEditing && (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Název jednání (volitelné)"
                    className="rounded-lg px-3 py-2 text-sm focus:outline-none"
                    style={{
                      background: "var(--color-at-blue-v2)",
                      border: "1px solid var(--color-at-blue-v3)",
                      color: "var(--color-at-white)",
                    }}
                  />
                  <textarea
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    rows={5}
                    className="rounded-lg px-3 py-2 text-sm resize-none focus:outline-none font-mono"
                    style={{
                      background: "var(--color-at-blue-v2)",
                      border: "1px solid var(--color-at-blue-v3)",
                      color: "var(--color-at-white)",
                      lineHeight: 1.7,
                    }}
                  />
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={cancelEdit}
                      className="text-xs px-3 py-1 rounded"
                      style={{ color: "var(--color-at-blue-v5)", textDecoration: "underline" }}
                    >
                      Zrušit
                    </button>
                    <button
                      onClick={() => saveEdit(note.id)}
                      disabled={!editBody.trim() || saving || isOffline}
                      title={isOffline ? "Offline – změny se neukládají" : undefined}
                      className="text-xs font-bold px-4 py-1 rounded-lg"
                      style={{
                        background: "var(--color-at-red)",
                        color: "var(--color-at-white)",
                        opacity: !editBody.trim() || isOffline ? 0.4 : 1,
                        cursor: isOffline ? "not-allowed" : "pointer",
                      }}
                    >
                      {saving ? "Ukládám…" : "Uložit"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
