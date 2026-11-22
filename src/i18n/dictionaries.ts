import { locale } from "next/root-params";

import { defaultLocale, isLocale, type Locale } from "./config";
import { en } from "./en";
import { fr, type Dictionary } from "./fr";

const dictionaries: Record<Locale, Dictionary> = { en, fr };

/** Dictionnaire d'une locale précise (utile côté composants client via props). */
export function dictionaryFor(l: Locale): Dictionary {
  return dictionaries[l];
}

/** Locale courante résolue depuis le segment racine `[locale]` (fallback défaut). */
export async function getLocale(): Promise<Locale> {
  const l = await locale();
  return isLocale(l) ? l : defaultLocale;
}

/** Dictionnaire de la locale courante (Server Components / utilitaires serveur). */
export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()];
}

export type { Dictionary };
