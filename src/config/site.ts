/**
 * Réglages globaux de la landing page.
 * Les drapeaux reprennent les props du design (showPro, showProof, showQR).
 */
export const siteConfig = {
  name: "Farm'sToMarket",
  url: "https://app.farmstomarket.io",
  domain: "app.farmstomarket.io",

  /** Affiche la section « App Pro » (#pro). */
  showPro: true,
  /** Affiche la section « Avis » — chiffres et témoignages FICTIFS à remplacer. */
  showProof: true,
  /** Affiche le QR code à côté des boutons stores (desktop ≥ 900px uniquement). */
  showQR: true,

  /**
   * Liens stores.
   * - Un lien App Store ne se déduit pas d'un identifiant Android : Apple attribue un
   *   identifiant numérique propre (https://apps.apple.com/app/id0000000000).
   *   Tant que `appStore` vaut null, le badge App Store est masqué et le QR code
   *   pointe directement vers Google Play.
   * - Dès qu'il est renseigné, le badge apparaît et le QR code pointe vers le smart link
   *   `/app`, qui redirige vers le bon store selon l'OS du téléphone.
   */
  stores: {
    appStore: null as string | null,
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2market_mobile",
    proAppStore: null as string | null,
    proGooglePlay:
      "https://play.google.com/store/apps/details?id=com.i4u.synthi_ai.farms2markets_agents",
  },

  contact: {
    email: "contact@farmstomarket.io",
    support: "support@farmstomarket.io",
  },

  legal: {
    mentions: "#",
    privacy: "#",
    terms: "#",
  },
} as const;
