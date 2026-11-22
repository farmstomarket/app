import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/i18n/config";

/**
 * Détection de langue + routage i18n (Next 16 : ex-`middleware`, renommé `proxy`).
 * Toute URL sans préfixe de locale est redirigée vers /en (défaut) ou /fr
 * selon l'en-tête `Accept-Language` du navigateur.
 */

/** Choisit la meilleure locale supportée d'après `Accept-Language`. */
function pickLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;
  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      const quality = q ? parseFloat(q.split("=")[1]) : 1;
      return { lang: tag.trim().toLowerCase(), quality: Number.isNaN(quality) ? 1 : quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { lang } of ranked) {
    const base = lang.split("-")[0];
    const hit = locales.find((l) => l === lang || l === base);
    if (hit) return hit;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = pickLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Ignore _next, le smart link /app, et tous les fichiers (robots.txt, sitemap.xml,
  // manifest.webmanifest, *.png…) reconnaissables à leur point.
  matcher: ["/((?!_next|app|.*\\..*).*)"],
};
