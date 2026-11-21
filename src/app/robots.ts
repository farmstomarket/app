import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * robots.txt généré au build.
 * `/app` est une redirection smart-link vers les stores selon l'OS : aucune valeur SEO,
 * on l'exclut de l'exploration.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/app",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
