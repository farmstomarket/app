import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/** Web App Manifest généré au build. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farm'sToMarket : du champ au marché",
    short_name: siteConfig.name,
    description:
      "Producteurs, acheteurs et transporteurs réunis dans une seule application : vendez au juste prix, achetez à la source, livrez en toute traçabilité.",
    start_url: "/",
    display: "browser",
    lang: "fr",
    theme_color: "#00E834",
    background_color: "#FFFFFF",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
