import fs from "node:fs/promises";
import path from "node:path";

function stripTrailingSlash(value) {
  return value.replace(/\/$/, "");
}

function joinUrl(base, suffix) {
  const b = stripTrailingSlash(base);
  const s = suffix.startsWith("/") ? suffix : `/${suffix}`;
  return `${b}${s}`;
}

async function write(filePath, content) {
  const abs = path.resolve(filePath);
  await fs.mkdir(path.dirname(abs), { recursive: true });
  await fs.writeFile(abs, content, "utf8");
}

async function main() {
  const siteUrl = stripTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const base = basePath ? `${siteUrl}${basePath}` : siteUrl;

  const routes = ["/", "/about", "/skills", "/projects", "/experience", "/certifications", "/achievements", "/resume", "/contact", "/blog"];

  const sitemapXml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes
      .map((r) => {
        const url = joinUrl(base, r);
        return `  <url><loc>${url}</loc></url>\n`;
      })
      .join("") +
    `</urlset>\n`;

  const robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${joinUrl(base, "/sitemap.xml")}\n`;

  await write("public/sitemap.xml", sitemapXml);
  await write("public/robots.txt", robotsTxt);
}

main().catch((err) => {
  console.error(err?.stack || String(err));
  process.exit(1);
});

