"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TEAM } from "../../data/slides-data";

type ChatMessage = { author: string; text: string; timestamp: string };

const AUTHOR_KEY = "aero-expo-chat-author";

function formatTs(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" });
}

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("cs-CZ", { day: "2-digit", month: "2-digit" });
}

function exportToMarkdown(messages: ChatMessage[]) {
  const lines = [
    "# AERO EXPO 2026 – Týmový chat",
    `Exportováno: ${new Date().toLocaleString("cs-CZ")}`,
    "",
    "---",
    "",
  ];
  let lastDate = "";
  for (const msg of messages) {
    const date = formatDate(msg.timestamp);
    if (date !== lastDate) {
      lines.push(`## ${date}`, "");
      lastDate = date;
    }
    lines.push(`**${msg.author}** · ${formatTs(msg.timestamp)}`);
    lines.push(msg.text);
    lines.push("");
  }
  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `aero-expo-2026-chat-${new Date().toISOString().slice(0, 10)}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function OpsChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/chat");
      const data: ChatMessage[] = await res.json();
      setMessages(data);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(AUTHOR_KEY);
    if (saved) setAuthor(saved);
    load();
    const interval = setInterval(load, 8000);
    return () => clearInterval(interval);
  }, [load]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAuthorChange = (name: string) => {
    setAuthor(name);
    localStorage.setItem(AUTHOR_KEY, name);
  };

  const send = async () => {
    if (!author || !text.trim()) return;
    setSending(true);
    const optimistic: ChatMessage = {
      author,
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimistic]);
    setText("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, text: optimistic.text }),
      });
      const updated: ChatMessage[] = await res.json();
      setMessages(updated);
    } catch {
      // ignore
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  };

  const clearAll = async () => {
    setShowClear(false);
    await fetch("/api/chat", { method: "DELETE" });
    setMessages([]);
  };

  return (
    <div className="flex flex-col gap-3" style={{ height: "100%" }}>
      {/* Author selector */}
      <div className="flex items-center gap-3 flex-wrap">
        <p className="text-xs font-bold" style={{ color: "var(--color-at-blue-v5)" }}>
          Píšeš jako:
        </p>
        <div className="flex flex-wrap gap-1">
          {TEAM.map((m) => (
            <button
              key={m.name}
              onClick={() => handleAuthorChange(m.name)}
              className="text-xs font-bold px-2.5 py-1 rounded transition-all"
              style={{
                background: author === m.name ? "var(--color-at-red)" : "var(--color-at-blue-v2)",
                color: "var(--color-at-white)",
                border: `1px solid ${author === m.name ? "var(--color-at-red)" : "var(--color-at-blue-v3)"}`,
                transform: author === m.name ? "scale(1.05)" : "scale(1)",
              }}
            >
              {m.initials}
            </button>
          ))}
        </div>
        {author && (
          <span className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>
            {author}
          </span>
        )}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => exportToMarkdown(messages)}
            disabled={messages.length === 0}
            className="text-xs font-bold px-3 py-1 rounded transition-all"
            style={{
              background: "var(--color-at-blue-v2)",
              color: "var(--color-at-blue-v5)",
              border: "1px solid var(--color-at-blue-v3)",
              opacity: messages.length === 0 ? 0.4 : 1,
            }}
          >
            Exportovat .md
          </button>
          <button
            onClick={() => setShowClear(true)}
            disabled={messages.length === 0}
            className="text-xs px-3 py-1 rounded"
            style={{
              color: "var(--color-at-blue-v4)",
              opacity: messages.length === 0 ? 0.4 : 1,
            }}
          >
            Smazat
          </button>
        </div>
      </div>

      {/* Confirm clear */}
      {showClear && (
        <div
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm"
          style={{ background: "rgba(213,28,23,0.12)", border: "1px solid rgba(213,28,23,0.3)" }}
        >
          <span style={{ color: "var(--color-at-white)" }}>Smazat celý chat? Akce je nevratná.</span>
          <button onClick={clearAll} className="font-bold text-xs px-3 py-1 rounded" style={{ background: "var(--color-at-red)", color: "var(--color-at-white)" }}>
            Smazat
          </button>
          <button onClick={() => setShowClear(false)} className="text-xs" style={{ color: "var(--color-at-blue-v5)" }}>
            Zrušit
          </button>
        </div>
      )}

      {/* Messages */}
      <div
        className="flex-1 flex flex-col gap-2 overflow-y-auto rounded-xl px-4 py-3"
        style={{
          background: "var(--color-at-blue-v1)",
          border: "1px solid var(--color-at-blue-v2)",
          minHeight: 240,
          maxHeight: 360,
        }}
      >
        {messages.length === 0 && (
          <p className="text-sm text-center my-auto" style={{ color: "var(--color-at-blue-v3)" }}>
            Chat je zatím prázdný. Začni psát první zprávu.
          </p>
        )}
        {messages.map((msg, i) => {
          const isMe = msg.author === author;
          return (
            <div key={i} className={`flex flex-col gap-0.5 ${isMe ? "items-end" : "items-start"}`}>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black" style={{ color: isMe ? "var(--color-at-red)" : "var(--color-at-blue-v5)" }}>
                  {msg.author}
                </span>
                <span className="text-xs" style={{ color: "var(--color-at-blue-v3)" }}>
                  {formatTs(msg.timestamp)}
                </span>
              </div>
              <div
                className="text-sm px-3 py-2 rounded-lg max-w-xs sm:max-w-sm"
                style={{
                  background: isMe ? "var(--color-at-blue-v3)" : "var(--color-at-blue-v2)",
                  color: "var(--color-at-white)",
                  wordBreak: "break-word",
                }}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 items-end">
        <textarea
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder={author ? "Napiš zprávu… (Enter = odeslat, Shift+Enter = nový řádek)" : "Nejprve vyber své jméno výše"}
          disabled={!author}
          rows={2}
          className="flex-1 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none"
          style={{
            background: "var(--color-at-blue-v1)",
            border: "1px solid var(--color-at-blue-v2)",
            color: "var(--color-at-white)",
            opacity: !author ? 0.5 : 1,
          }}
        />
        <button
          onClick={send}
          disabled={!author || !text.trim() || sending}
          className="rounded-xl px-4 py-2.5 text-sm font-black flex-shrink-0 transition-all"
          style={{
            background: "var(--color-at-red)",
            color: "var(--color-at-white)",
            opacity: (!author || !text.trim()) ? 0.4 : 1,
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}
