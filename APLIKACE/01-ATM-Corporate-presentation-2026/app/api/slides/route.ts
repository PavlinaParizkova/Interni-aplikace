import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";
import { auth } from "@/auth";

const SLIDES_PATH = path.join(process.cwd(), "data", "slides.json");
const AUDIT_PATH = path.join(process.cwd(), "data", "audit-log.json");
const GITHUB_API = "https://api.github.com";
const REPO = process.env.GITHUB_REPO ?? "";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";
const TOKEN = () => process.env.GITHUB_TOKEN ?? "";

export async function GET() {
  try {
    const data = readFileSync(SLIDES_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({ error: "Could not read slides" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!REPO || !TOKEN()) {
    return NextResponse.json({ error: "GitHub not configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const slidesContent = JSON.stringify(body, null, 2);

  // Read current audit log
  let auditLog: AuditEntry[] = [];
  try {
    auditLog = JSON.parse(readFileSync(AUDIT_PATH, "utf-8"));
  } catch {
    auditLog = [];
  }

  const newEntry: AuditEntry = {
    timestamp: new Date().toISOString(),
    user: session.user.email,
    action: "update_slides",
  };
  const updatedAuditLog = [newEntry, ...auditLog].slice(0, 200);
  const auditContent = JSON.stringify(updatedAuditLog, null, 2);

  // Commit both files to GitHub
  const slidesResult = await commitFile(
    "APLIKACE/01-ATM-Corporate-presentation-2026/data/slides.json",
    slidesContent,
    `Update slides via admin panel [${session.user.email}]`
  );

  if (!slidesResult.ok) {
    return NextResponse.json({ error: "GitHub commit failed", detail: slidesResult.error }, { status: 502 });
  }

  await commitFile(
    "APLIKACE/01-ATM-Corporate-presentation-2026/data/audit-log.json",
    auditContent,
    `Update audit log [${session.user.email}]`
  );

  return NextResponse.json({ ok: true, message: "Slides saved. Deployment starts in ~1 min." });
}

interface AuditEntry {
  timestamp: string;
  user: string;
  action: string;
}

async function commitFile(filePath: string, content: string, message: string): Promise<{ ok: boolean; error?: string }> {
  const getRes = await fetch(
    `${GITHUB_API}/repos/${REPO}/contents/${filePath}?ref=${BRANCH}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN()}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!getRes.ok) {
    return { ok: false, error: `Could not fetch ${filePath} from GitHub` };
  }

  const fileData = (await getRes.json()) as { sha: string };

  const putRes = await fetch(
    `${GITHUB_API}/repos/${REPO}/contents/${filePath}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN()}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content).toString("base64"),
        sha: fileData.sha,
        branch: BRANCH,
      }),
    }
  );

  if (!putRes.ok) {
    const err = await putRes.text();
    return { ok: false, error: err };
  }

  return { ok: true };
}
