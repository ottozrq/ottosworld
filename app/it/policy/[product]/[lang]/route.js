import { readFile } from "node:fs/promises";
import path from "node:path";

const policyFiles = {
  "snoji:en": "snoji_en.html",
  "snoji:zh": "snoji_zh.html",
  "snoji:fr": "snoji_fr.html",
  "cacaou:en": "cacaou_en.html",
  "cacaou:zh": "cacaou_zh.html",
  "cacaou:fr": "cacaou_fr.html",
  "artiou:en": "artiou_en.html",
  "artiou:zh": "artiou_zh.html",
  "artiou:fr": "artiou_fr.html"
};

export function generateStaticParams() {
  return Object.keys(policyFiles).map((key) => {
    const [product, lang] = key.split(":");
    return { product, lang };
  });
}

export const dynamic = "force-static";

export async function GET(_request, context) {
  const { product, lang } = await context.params;
  const fileName = policyFiles[`${product}:${lang}`];

  if (!fileName) {
    return new Response("Policy not found", { status: 404 });
  }

  const filePath = path.join(process.cwd(), "templates", "policy", fileName);
  const html = await readFile(filePath, "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex"
    }
  });
}
