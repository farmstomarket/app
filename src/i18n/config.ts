/** Locales supportées. L'anglais est la langue par défaut (fallback). */
export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Nom natif de chaque langue (sélecteur éventuel, hreflang…). */
export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

/** Code `lang`/`hreflang` complet par locale. */
export const localeHrefLang: Record<Locale, string> = {
  en: "en",
  fr: "fr",
};

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}
