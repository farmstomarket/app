import type { StaticImageData } from "next/image";

import m01 from "@/assets/m-01.png";
import m03 from "@/assets/m-03.png";
import m12 from "@/assets/m-12.png";
import m17 from "@/assets/m-17.png";
import m23 from "@/assets/m-23.png";
import mBourse from "@/assets/m-bourse.png";
import mBuyer from "@/assets/m-buyer.png";
import mDriver from "@/assets/m-driver.png";
import mMarket from "@/assets/m-market.png";
import mOnboard from "@/assets/m-onboard.png";
import mPay from "@/assets/m-pay.png";
import mProducer from "@/assets/m-producer.png";
import mTrack from "@/assets/m-track.png";

/**
 * Visuels (indépendants de la langue). Les textes sont dans src/i18n/*.
 * L'ordre des images suit l'ordre des entrées du dictionnaire correspondant.
 */

/** Images des 4 bénéfices (section Features), dans l'ordre du dictionnaire. */
export const FEATURE_IMAGES: StaticImageData[] = [mMarket, mPay, mTrack, mBourse];

export type RoleKey = "producer" | "buyer" | "driver";
export const ROLE_KEYS: RoleKey[] = ["producer", "buyer", "driver"];

/** Image par profil (section Roles). */
export const ROLE_IMAGES: Record<RoleKey, StaticImageData> = {
  producer: mProducer,
  buyer: mBuyer,
  driver: mDriver,
};

/** Bande défilante du carrousel (images décoratives, alt vide). */
export const MARQUEE: StaticImageData[] = [mOnboard, mMarket, m03, mPay, m01, m12, m17, m23];
