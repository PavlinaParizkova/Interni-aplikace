import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

const SLIDES_PATH = path.join(process.cwd(), "data", "slides.json");
const GITHUB_API = "https://api.github.com";

export async function GET() {
  try {
    const data = readFileSync(SLIDES_PATH, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({ error: "Could not read slides" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || token !== adminPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const githubToken = process.env.GITHUB_TOKEN;
  const githubRepo = process.env.GITHUB_REPO;
  const githubBranch = process.env.GITHUB_BRANCH ?? "main";

  if (!githubToken || !githubRepo) {
    return NextResponse.json({ error: "GitHub not configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const content = JSON.stringify(body, null, 2);
  const filePath = "APLIKACE/01-ATM-Corporate-presentation-2026/data/slides.json";

  const getRes = await fetch(
    `${GITHUB_API}/repos/${githubRepo}/contents/${filePath}?ref=${githubBranch}`,
    {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!getRes.ok) {
    return NextResponse.json({ error: "Could not fetch file from GitHub" }, { status: 502 });
  }

  const fileData = (await getRes.json()) as { sha: string };

  const putRes = await fetch(
    `${GITHUB_API}/repos/${githubRepo}/contents/${filePath}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Update slides via admin panel",
        content: Buffer.from(content).toString("base64"),
        sha: fileData.sha,
        branch: githubBranch,
      }),
    }
  );

  if (!putRes.ok) {
    const err = await putRes.text();
    return NextResponse.json({ error: "GitHub commit failed", detail: err }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: "Slides saved. Deployment starts in ~1 min." });
}
