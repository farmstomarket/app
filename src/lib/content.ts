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

export type Feature = {
  title: string;
  body: string;
  img: StaticImageData;
};

export const FEATURES: Feature[] = [
  {
    title: "Vendez en direct",
    body: "Publiez cultures, bétail et produits en quelques minutes et fixez vos prix. Meilleurs prix pour le producteur, produits plus frais pour l'acheteur.",
    img: mMarket,
  },
  {
    title: "Soyez payé, à coup sûr",
    body: "Avec AgroBank, l'acheteur paie à la commande. Les fonds restent sous séquestre et sont libérés au vendeur dès la livraison confirmée. Zéro frais.",
    img: mPay,
  },
  {
    title: "Suivez chaque livraison",
    body: "Suivi GPS en temps réel, remise par QR code et statut étape par étape, de la ferme jusqu'à la porte.",
    img: mTrack,
  },
  {
    title: "Vendez au bon moment",
    body: "La Bourse agricole affiche les cours et tendances en direct pour fixer vos prix et acheter au meilleur moment.",
    img: mBourse,
  },
];

export type RoleKey = "producer" | "buyer" | "driver";

export type Role = {
  key: RoleKey;
  label: string;
  img: StaticImageData;
  title: string;
  body: string;
  points: string[];
};

export const ROLES: Role[] = [
  {
    key: "producer",
    label: "Producteur",
    img: mProducer,
    title: "Producteur, éleveur ou coopérative",
    body: "Publiez vos récoltes et fixez vos prix grâce aux cours du marché en direct. Gérez commandes et ventes depuis votre téléphone.",
    points: [
      "Paiement garanti par séquestre AgroBank",
      "Messagerie directe avec les acheteurs",
      "Historique des ventes et revenus",
    ],
  },
  {
    key: "buyer",
    label: "Acheteur",
    img: mBuyer,
    title: "Détaillant, restaurant ou transformateur",
    body: "Achetez des produits frais et locaux directement à la ferme. Comparez les prix, consultez les profils des producteurs et commandez en confiance.",
    points: [
      "Disponibilité et qualité visibles avant commande",
      "Fonds libérés uniquement à la livraison",
      "Suivi de la commande en temps réel",
    ],
  },
  {
    key: "driver",
    label: "Transporteur",
    img: mDriver,
    title: "Transporteur ou livreur",
    body: "Acceptez des demandes de livraison, planifiez des itinéraires efficaces et réalisez vos missions avec un suivi GPS complet.",
    points: [
      "Missions régulières près de chez vous",
      "Confirmation de remise par QR code",
      "Messagerie intégrée avec vendeurs et acheteurs",
    ],
  },
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: "L'application est-elle gratuite ?",
    a: "Oui, le téléchargement est gratuit et aucun frais de transaction n'est prélevé sur vos ventes ou vos achats.",
  },
  {
    q: "Comment fonctionne le paiement sécurisé ?",
    a: "L'acheteur paie à la commande via AgroBank. L'argent est conservé sous séquestre et n'est versé au vendeur qu'une fois la livraison confirmée par QR code.",
  },
  {
    q: "Quelle différence avec Farm’sToMarket Pro ?",
    a: "Farm'sToMarket est la place de marché pour acheter, vendre et livrer. Farm'sToMarket Pro sert aux coopératives, distributeurs et contrôleurs qui gèrent un réseau de producteurs, des commandes et des tableaux de bord.",
  },
  {
    q: "Dans quelles langues est-elle disponible ?",
    a: "En français et en anglais.",
  },
  {
    q: "Je ne suis pas à l’aise avec les applications. Est-ce compliqué ?",
    a: "L'application est pensée pour être simple : publier un produit ou accepter une mission se fait en quelques étapes, et un centre d'aide est intégré.",
  },
];

export const MARQUEE: StaticImageData[] = [
  mOnboard,
  mMarket,
  m03,
  mPay,
  m01,
  m12,
  m17,
  m23,
];

export const PRO_FEATURES: { title: string; body: string }[] = [
  {
    title: "Vos producteurs",
    body: "Agriculteurs et éleveurs, cultures et cheptels au même endroit.",
  },
  {
    title: "Commandes vérifiées",
    body: "Photos et géolocalisation à chaque étape.",
  },
  {
    title: "Revenus et performance",
    body: "Chiffre d'affaires, activité et croissance en un coup d'œil.",
  },
  {
    title: "Sur le terrain",
    body: "Accès mobile complet avec cartes, en français et en anglais.",
  },
];

/** ⚠️ Chiffres et témoignages FICTIFS — à remplacer avant mise en production. */
export const PROOF_STATS: { value: string; suffix?: string; label: string }[] = [
  { value: "4,8", suffix: "/5", label: "Note Google Play" },
  { value: "10 000+", label: "Téléchargements" },
  { value: "120", label: "Coopératives partenaires" },
];

export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "« Je vends mes tomates directement aux restaurants de la ville. Le paiement arrive dès que la livraison est confirmée. »",
    name: "Nom Prénom",
    role: "Maraîchère, région",
  },
  {
    quote:
      "« Je compare les producteurs, je vois leur profil et je commande sans intermédiaire. La qualité est régulière. »",
    name: "Nom Prénom",
    role: "Gérant de marché, ville",
  },
  {
    quote:
      "« Les missions arrivent sur mon téléphone, l'itinéraire est prêt et la remise se valide par QR code. »",
    name: "Nom Prénom",
    role: "Transporteur, ville",
  },
];
