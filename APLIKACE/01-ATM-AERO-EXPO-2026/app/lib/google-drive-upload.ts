import { Readable } from "node:stream";
import { google } from "googleapis";

function trimEnv(s: string | undefined): string {
  return (s ?? "").trim();
}

/** Normalizace klíče z Vercelu (uvozovky, \n, mezery). */
export function normalizePrivateKey(raw: string): string {
  let k = trimEnv(raw);
  if (
    (k.startsWith('"') && k.endsWith('"')) ||
    (k.startsWith("'") && k.endsWith("'"))
  ) {
    k = k.slice(1, -1);
  }
  return k.replace(/\\n/g, "\n").replace(/\r\n/g, "\n");
}

export function isGoogleDriveUploadConfigured(): boolean {
  const folderId = trimEnv(process.env.GOOGLE_DRIVE_FOLDER_ID);
  const email = trimEnv(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  const keyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  const key = keyRaw ? normalizePrivateKey(keyRaw) : "";
  return Boolean(
    folderId && email && key.length >= 80 && key.includes("BEGIN PRIVATE KEY"),
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
  const privateKey = normalizePrivateKey(
    process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!,
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
