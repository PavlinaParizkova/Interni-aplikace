import { readFileSync } from "fs";
import path from "path";
import Link from "next/link";

interface AuditEntry {
  timestamp: string;
  user: string;
  action: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function LogsPage() {
  let log: AuditEntry[] = [];
  try {
    log = JSON.parse(readFileSync(path.join(process.cwd(), "data", "audit-log.json"), "utf-8"));
  } catch {
    log = [];
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header__brand">
          <span className="admin-header__dot" />
          <strong>AIR TEAM Admin</strong>
        </div>
        <div className="admin-header__actions">
          <Link href="/admin/editor" className="admin-btn admin-btn--ghost">← Zpět na editor</Link>
        </div>
      </header>

      <div className="admin-content">
        <div className="admin-toolbar">
          <h2>Historie úprav <span className="admin-count">({log.length})</span></h2>
        </div>

        {log.length === 0 ? (
          <p style={{ color: "#93b3cf" }}>Zatím žádné úpravy.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Čas</th>
                  <th>Uživatel</th>
                  <th>Akce</th>
                </tr>
              </thead>
              <tbody>
                {log.map((entry, i) => (
                  <tr key={i}>
                    <td style={{ whiteSpace: "nowrap", color: "#93b3cf", fontSize: "0.8rem" }}>
                      {formatDate(entry.timestamp)}
                    </td>
                    <td>{entry.user}</td>
                    <td>
                      <span className="admin-tag">Uložení slidů</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
