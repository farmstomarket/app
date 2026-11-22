import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { localeHrefLang, locales } from "@/i18n/config";

/** Sitemap : une URL par locale (/en, /fr) avec alternates hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [localeHrefLang[l], `${siteConfig.url}/${l}`]),
  );

  return locales.map((l) => ({
    url: `${siteConfig.url}/${l}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
