import { createPrivateKey } from "node:crypto";
import { Readable } from "node:stream";
import { google } from "googleapis";

function trimEnv(s: string | undefined): string {
  return (s ?? "").trim();
}

/** Normalizace řetězce klíče z Vercelu (uvozovky, \\n, BOM, typografické uvozovky). */
export function normalizePrivateKey(raw: string): string {
  let k = trimEnv(raw);
  if (k.charCodeAt(0) === 0xfeff) k = k.slice(1);
  k = k.replace(/\uFEFF/g, "");
  k = k.replace(/[\u201c\u201d]/g, '"').replace(/[\u2018\u2019]/g, "'");
  if (
    (k.startsWith('"') && k.endsWith('"')) ||
    (k.startsWith("'") && k.endsWith("'"))
  ) {
    k = k.slice(1, -1);
  }
  return k.replace(/\\n/g, "\n").replace(/\r\n/g, "\n").trim();
}

/**
 * Hodnota z Vercelu: buď jen private_key, nebo omylem celý JSON soubor od Google.
 */
export function resolvePrivateKeyFromEnv(raw: string): string {
  const trimmed = trimEnv(raw);
  if (trimmed.startsWith("{")) {
    try {
      const j = JSON.parse(trimmed) as { private_key?: string };
      if (j.private_key && typeof j.private_key === "string") {
        return normalizePrivateKey(j.private_key);
      }
    } catch {
      // neplatný JSON – zkusíme dál jako PEM
    }
  }
  return normalizePrivateKey(trimmed);
}

/** PEM v jednotném PKCS#8 tvaru – vyřeší část chyb OpenSSL 3 „DECODER routines::unsupported“. */
function coercePrivateKeyPem(pem: string): string {
  try {
    const key = createPrivateKey({ key: pem, format: "pem" });
    return key.export({ format: "pem", type: "pkcs8" }) as string;
  } catch (e) {
    const detail = e instanceof Error ? e.message : String(e);
    throw new Error(
      `Neplatný soukromý klíč (GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY). V Vercelu musí být celý blok od -----BEGIN … do -----END …, nebo celý JSON soubor od Google. ${detail}`,
    );
  }
}

function looksLikePemKey(k: string): boolean {
  return (
    k.includes("BEGIN PRIVATE KEY") ||
    k.includes("BEGIN RSA PRIVATE KEY") ||
    k.includes("BEGIN EC PRIVATE KEY")
  );
}

export function isGoogleDriveUploadConfigured(): boolean {
  const folderId = trimEnv(process.env.GOOGLE_DRIVE_FOLDER_ID);
  const email = trimEnv(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  const keyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const key = keyRaw ? resolvePrivateKeyFromEnv(keyRaw) : "";
  return Boolean(
    folderId && email && key.length >= 80 && looksLikePemKey(key),
  );
}

/**
 * Nahraje soubor do sdílené složky na Disku a nastaví přístup „kdokoli s odkazem“.
 * Obrázek pak jde vložit do Markdownu jako veřejný odkaz (funguje mimo interní aplikaci).
 */
export async function uploadImageToGoogleDrive(
  fileName: string,
  buffer: Buffer,
  mimeType: string,
): Promise<{ url: string; fileId: string }> {
  const privateKey = coercePrivateKeyPem(
    resolvePrivateKeyFromEnv(process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!),
  );
  const clientEmail = trimEnv(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  const folderId = trimEnv(process.env.GOOGLE_DRIVE_FOLDER_ID);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    // drive.file někdy nestačí na permissions + sdílenou složku; drive je vhodné pro SA s přístupem jen ke sdílené složce
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  const drive = google.drive({ version: "v3", auth });

  const created = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [folderId],
    },
    media: {
      mimeType: mimeType || "image/jpeg",
      body: Readable.from(buffer),
    },
    fields: "id",
    supportsAllDrives: true,
  });

  const fileId = created.data.id!;
  await drive.permissions.create({
    fileId,
    requestBody: {
      type: "anyone",
      role: "reader",
    },
    supportsAllDrives: true,
  });

  const url = `https://drive.google.com/uc?export=view&id=${fileId}`;
  return { url, fileId };
}
