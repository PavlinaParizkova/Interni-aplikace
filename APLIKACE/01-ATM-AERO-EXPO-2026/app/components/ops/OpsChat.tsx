"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TEAM } from "../../data/slides-data";
import { TEAM_PINS } from "../../data/team-pins";

type ChatMessage = { author: string; text: string; timestamp: string };

const AUTHOR_KEY = "aero-expo-chat-author";
const AUTHOR_VERIFIED_KEY = "aero-expo-chat-author-verified";

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

  // PIN auth state
  const [pinTarget, setPinTarget] = useState<string | null>(null);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);
  const pinRef = useRef<HTMLInputElement>(null);

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
    const savedAuthor = localStorage.getItem(AUTHOR_KEY) ?? "";
    const savedVerified = localStorage.getItem(AUTHOR_VERIFIED_KEY) ?? "";
    // Restore only if both match (prevents stale author after logout)
    if (savedAuthor && savedVerified === savedAuthor) {
      setAuthor(savedAuthor);
    }
    load();
    const interval = setInterval(load, 8000);
    return () => clearInterval(interval);
  }, [load]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus PIN input when dialog opens
  useEffect(() => {
    if (pinTarget) {
      setPinInput("");
      setPinError(false);
      setTimeout(() => pinRef.current?.focus(), 50);
    }
  }, [pinTarget]);

  const handleSelectName = (name: string) => {
    if (author === name) return; // already verified as this person
    setPinTarget(name);
  };

  const confirmPin = () => {
    if (!pinTarget) return;
    const correct = TEAM_PINS[pinTarget];
    if (pinInput === correct) {
      setAuthor(pinTarget);
      localStorage.setItem(AUTHOR_KEY, pinTarget);
      localStorage.setItem(AUTHOR_VERIFIED_KEY, pinTarget);
      setPinTarget(null);
      setPinInput("");
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput("");
      setTimeout(() => pinRef.current?.focus(), 10);
    }
  };

  const logout = () => {
    setAuthor("");
    localStorage.removeItem(AUTHOR_KEY);
    localStorage.removeItem(AUTHOR_VERIFIED_KEY);
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

      {/* Identity row */}
      <div className="flex items-center gap-3 flex-wrap">
        <p className="text-xs font-bold" style={{ color: "var(--color-at-white)" }}>
          {author ? "Přihlášen/a jako:" : "Vyber svou identitu:"}
        </p>

        {author ? (
          /* Logged-in state */
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-black px-3 py-1 rounded"
              style={{ background: "var(--color-at-red)", color: "var(--color-at-white)" }}
            >
              {TEAM.find((m) => m.name === author)?.initials ?? author}
            </span>
            <span className="text-sm font-semibold" style={{ color: "var(--color-at-blue-v5)" }}>
              {author}
            </span>
            <button
              onClick={logout}
              className="text-xs px-2 py-0.5 rounded"
              style={{
                color: "var(--color-at-blue-v4)",
                border: "1px solid var(--color-at-blue-v3)",
              }}
            >
              Odhlásit
            </button>
          </div>
        ) : (
          /* Name buttons – not logged in */
          <div className="flex flex-wrap gap-1">
            {TEAM.map((m) => (
              <button
                key={m.name}
                onClick={() => handleSelectName(m.name)}
                title={m.name}
                className="text-xs font-bold px-2.5 py-1 rounded transition-all hover:opacity-90"
                style={{
                  background: "var(--color-at-blue-v2)",
                  color: "var(--color-at-white)",
                  border: "1px solid var(--color-at-blue-v3)",
                }}
              >
                {m.initials}
              </button>
            ))}
          </div>
        )}

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => exportToMarkdown(messages)}
            disabled={messages.length === 0}
            className="text-xs font-bold px-3 py-1 rounded transition-all"
            style={{
              background: "var(--color-at-blue-v2)",
              color: "var(--color-at-white)",
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

      {/* PIN dialog */}
      {pinTarget && (
        <div
          className="flex flex-col gap-3 px-4 py-3 rounded-xl"
          style={{
            background: "var(--color-at-blue-v2)",
            border: "1px solid var(--color-at-blue-v3)",
          }}
        >
          <p className="text-sm font-bold" style={{ color: "var(--color-at-white)" }}>
            Zadej PIN pro <span style={{ color: "var(--color-at-blue-v5)" }}>{pinTarget}</span>
          </p>
          <div className="flex items-center gap-3">
            <input
              ref={pinRef}
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={pinInput}
              onChange={(e) => {
                setPinInput(e.target.value.replace(/\D/g, ""));
                setPinError(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") confirmPin();
                if (e.key === "Escape") { setPinTarget(null); setPinInput(""); }
              }}
              placeholder="• • • •"
              className="w-24 rounded-lg px-3 py-1.5 text-sm text-center font-mono tracking-widest focus:outline-none"
              style={{
                background: "var(--color-at-blue-v1)",
                border: `1px solid ${pinError ? "var(--color-at-red)" : "var(--color-at-blue-v3)"}`,
                color: "var(--color-at-white)",
              }}
            />
            <button
              onClick={confirmPin}
              className="text-sm font-bold px-4 py-1.5 rounded-lg"
              style={{ background: "var(--color-at-red)", color: "var(--color-at-white)" }}
            >
              Potvrdit
            </button>
            <button
              onClick={() => { setPinTarget(null); setPinInput(""); setPinError(false); }}
              className="text-xs"
              style={{ color: "var(--color-at-blue-v4)", textDecoration: "underline" }}
            >
              Zrušit
            </button>
          </div>
          {pinError && (
            <p className="text-xs" style={{ color: "var(--color-at-red)" }}>
              Nesprávný PIN. Zkus to znovu nebo požádej organizátora.
            </p>
          )}
          <p className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>
            PIN jsi obdržel/a předem od organizátora. Je 4místný.
          </p>
        </div>
      )}

      {/* Confirm clear */}
      {showClear && (
        <div
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm"
          style={{ background: "rgba(213,28,23,0.12)", border: "1px solid rgba(213,28,23,0.3)" }}
        >
          <span style={{ color: "var(--color-at-white)" }}>Smazat celý chat? Akce je nevratná.</span>
          <button
            onClick={clearAll}
            className="font-bold text-xs px-3 py-1 rounded"
            style={{ background: "var(--color-at-red)", color: "var(--color-at-white)" }}
          >
            Smazat
          </button>
          <button
            onClick={() => setShowClear(false)}
            className="text-xs"
            style={{ color: "var(--color-at-blue-v5)", textDecoration: "underline" }}
          >
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
          <p className="text-sm text-center my-auto" style={{ color: "var(--color-at-blue-v4)" }}>
            Chat je zatím prázdný. Začni psát první zprávu.
          </p>
        )}
        {messages.map((msg, i) => {
          const isMe = msg.author === author;
          return (
            <div key={i} className={`flex flex-col gap-0.5 ${isMe ? "items-end" : "items-start"}`}>
              <div className="flex items-center gap-1.5">
                <span
                  className="text-xs font-black"
                  style={{ color: isMe ? "var(--color-at-red)" : "var(--color-at-blue-v5)" }}
                >
                  {msg.author}
                </span>
                <span className="text-xs" style={{ color: "var(--color-at-blue-v4)" }}>
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
          placeholder={
            author
              ? "Napiš zprávu… (Enter = odeslat, Shift+Enter = nový řádek)"
              : "Nejprve se přihlaš výběrem jména výše"
          }
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
            opacity: !author || !text.trim() ? 0.4 : 1,
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}
