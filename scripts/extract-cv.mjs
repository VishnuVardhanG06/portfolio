import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

function usage() {
  // Keep it simple so it works in CI and local shells.
  console.log("Usage: node scripts/extract-cv.mjs <path-to-pdf> [output-txt]");
  console.log("Example: node scripts/extract-cv.mjs C:\\\\path\\\\cv.pdf content\\\\cv.raw.txt");
}

async function main() {
  const pdfPath = process.argv[2];
  const outPath = process.argv[3];

  if (!pdfPath) {
    usage();
    process.exit(1);
  }

  const absPdfPath = path.resolve(pdfPath);
  const dataBuffer = await fs.readFile(absPdfPath);

  const { PDFParse } = await import("pdf-parse");
  const parser = new PDFParse(new Uint8Array(dataBuffer));
  await parser.load();
  const parsed = await parser.getText();

  const text = (parsed?.text || "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (outPath) {
    const absOutPath = path.resolve(outPath);
    await fs.mkdir(path.dirname(absOutPath), { recursive: true });
    await fs.writeFile(absOutPath, text + "\n", "utf8");
  } else {
    process.stdout.write(text + "\n");
  }
}

main().catch((err) => {
  console.error(err?.stack || String(err));
  process.exit(1);
});
