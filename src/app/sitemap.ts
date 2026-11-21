import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/** Sitemap généré au build. Landing page mono-URL (sections ancrées sur `/`). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
