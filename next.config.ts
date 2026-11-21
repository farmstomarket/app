import type { NextConfig } from "next";

/** En-têtes de sécurité appliqués à toutes les routes en production. */
const securityHeaders = [
  // Force HTTPS pendant 2 ans (sous-domaines inclus).
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  // Empêche le MIME-sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Pas d'intégration de la page dans une iframe tierce (anti-clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Ne transmet l'URL complète qu'en same-origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Désactive les API navigateur sensibles (landing statique).
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Les mockups PNG (1500×1125) sont servis en AVIF / WebP redimensionnés.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
