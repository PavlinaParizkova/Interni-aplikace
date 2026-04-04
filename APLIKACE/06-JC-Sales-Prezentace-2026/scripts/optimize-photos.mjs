import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const PHOTOS_DIR = new URL("../public/photos/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const MAX_WIDTH = 1920;
const JPG_QUALITY = 80;
const PNG_QUALITY = 85;

async function getSize(filePath) {
  const s = await stat(filePath);
  return s.size;
}

function formatKB(bytes) {
  return (bytes / 1024).toFixed(0) + " KB";
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const sizeBefore = await getSize(filePath);

  const image = sharp(filePath).withMetadata().resize({ width: MAX_WIDTH, withoutEnlargement: true });

  let buffer;
  if (ext === ".jpg" || ext === ".jpeg") {
    buffer = await image.jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toBuffer();
  } else if (ext === ".png") {
    buffer = await image.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer();
  } else {
    return null;
  }

  const sizeAfter = buffer.length;

  if (sizeAfter < sizeBefore) {
    const tmpPath = filePath + ".tmp";
    await sharp(buffer).toFile(tmpPath);
    await rename(tmpPath, filePath);
  }

  return { sizeBefore, sizeAfter: Math.min(sizeAfter, sizeBefore) };
}

async function main() {
  const files = await readdir(PHOTOS_DIR);
  const imageFiles = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`\nOptimalizace ${imageFiles.length} souborů v ${PHOTOS_DIR}\n`);
  console.log("Soubor".padEnd(40) + "Před".padStart(10) + "Po".padStart(10) + "Úspora".padStart(10));
  console.log("─".repeat(70));

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of imageFiles) {
    const filePath = join(PHOTOS_DIR, file);
    const result = await optimizeImage(filePath);
    if (!result) continue;

    const { sizeBefore, sizeAfter } = result;
    const saved = sizeBefore - sizeAfter;
    const savedPct = ((saved / sizeBefore) * 100).toFixed(0);

    totalBefore += sizeBefore;
    totalAfter += sizeAfter;

    const label = basename(file).length > 38 ? basename(file).slice(0, 35) + "..." : basename(file);
    console.log(
      label.padEnd(40) +
        formatKB(sizeBefore).padStart(10) +
        formatKB(sizeAfter).padStart(10) +
        `${savedPct} %`.padStart(10)
    );
  }

  console.log("─".repeat(70));
  const totalSavedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
  console.log(
    "CELKEM".padEnd(40) +
      formatKB(totalBefore).padStart(10) +
      formatKB(totalAfter).padStart(10) +
      `${totalSavedMB} MB`.padStart(10)
  );
  console.log("\nHotovo.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
