/**
 * Dictionnaire français : source de vérité du type `Dictionary`.
 * Les textes anglais (en.ts) doivent respecter la même structure.
 * Aucune image ici : les mockups restent dans src/lib/content.ts.
 */
export const fr = {
  metadata: {
    title: "Farm'sToMarket : du champ au marché, sans intermédiaire",
    description:
      "Producteurs, acheteurs et transporteurs réunis dans une seule application. Vendez au juste prix, achetez à la source, livrez en toute traçabilité. Paiement sous séquestre, zéro frais, suivi GPS.",
  },

  nav: {
    versionPro: "Version Pro",
    download: "Télécharger",
    brandAria: "Farm'sToMarket",
  },

  hero: {
    eyebrow: "L'infrastructure de confiance de l'agriculture africaine",
    title: ["Du champ", "au marché,", "sans intermédiaire."],
    subtitle:
      "Producteurs, acheteurs et transporteurs réunis dans une seule application. Vendez au juste prix, achetez à la source, livrez en toute traçabilité.",
    args: ["Paiement sous séquestre", "Zéro frais de transaction", "Suivi GPS en direct"],
    qrScan: "Scannez pour installer",
    qrAria: "QR code pour installer l'application Farm'sToMarket",
  },

  heroVisual: {
    marketAlt: "Catalogue et carte des produits dans Farm'sToMarket",
    homeAlt: "Accueil de l'application",
    paidTitle: "Paiement libéré",
    paidSub: "Livraison confirmée par QR",
    stockLabel: "Tomates · Bourse agricole",
    stockTrend: "Cours en hausse",
  },

  marquee: {
    title: "Une application, toute la chaîne de valeur.",
    subtitle: "Marketplace · Paiements · Livraison · Bourse · Messagerie",
  },

  stat: {
    lead: "des récoltes africaines sont perdues entre le champ et le consommateur.",
    body: "Pas par manque de production, mais par manque de connexion. Farm'sToMarket relie chaque maillon pour que la récolte arrive fraîche, et payée au juste prix.",
  },

  features: {
    eyebrow: "Ce qui change pour vous",
    heading: "Plus de revenus, moins de pertes, zéro zone grise.",
    items: [
      {
        title: "Vendez en direct",
        body: "Publiez cultures, bétail et produits en quelques minutes et fixez vos prix. Meilleurs prix pour le producteur, produits plus frais pour l'acheteur.",
      },
      {
        title: "Soyez payé, à coup sûr",
        body: "Avec AgroBank, l'acheteur paie à la commande. Les fonds restent sous séquestre et sont libérés au vendeur dès la livraison confirmée. Zéro frais.",
      },
      {
        title: "Suivez chaque livraison",
        body: "Suivi GPS en temps réel, remise par QR code et statut étape par étape, de la ferme jusqu'à la porte.",
      },
      {
        title: "Vendez au bon moment",
        body: "La Bourse agricole affiche les cours et tendances en direct pour fixer vos prix et acheter au meilleur moment.",
      },
    ],
  },

  roles: {
    eyebrow: "Une app, trois métiers",
    heading: "Vous êtes…",
    tablistLabel: "Choisissez votre profil",
    items: {
      producer: {
        label: "Producteur",
        title: "Producteur, éleveur ou coopérative",
        body: "Publiez vos récoltes et fixez vos prix grâce aux cours du marché en direct. Gérez commandes et ventes depuis votre téléphone.",
        points: [
          "Paiement garanti par séquestre AgroBank",
          "Messagerie directe avec les acheteurs",
          "Historique des ventes et revenus",
        ],
      },
      buyer: {
        label: "Acheteur",
        title: "Détaillant, restaurant ou transformateur",
        body: "Achetez des produits frais et locaux directement à la ferme. Comparez les prix, consultez les profils des producteurs et commandez en confiance.",
        points: [
          "Disponibilité et qualité visibles avant commande",
          "Fonds libérés uniquement à la livraison",
          "Suivi de la commande en temps réel",
        ],
      },
      driver: {
        label: "Transporteur",
        title: "Transporteur ou livreur",
        body: "Acceptez des demandes de livraison, planifiez des itinéraires efficaces et réalisez vos missions avec un suivi GPS complet.",
        points: [
          "Missions régulières près de chez vous",
          "Confirmation de remise par QR code",
          "Messagerie intégrée avec vendeurs et acheteurs",
        ],
      },
    },
  },

  pro: {
    badgeTitle: "Farm'sToMarket Pro",
    badgeSub: "Pour les professionnels de la filière",
    headingLead: "Pilotez toute votre chaîne",
    headingAccent: "d'approvisionnement.",
    body: "Coopératives, distributeurs, transporteurs et contrôleurs qualité : producteurs, commandes, livraisons et finances réunis dans une seule application.",
    iconAlt: "Farm'sToMarket Pro",
    dashAlt: "Tableau de bord Farm'sToMarket Pro",
    features: [
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
    ],
  },

  proof: {
    heading: "Ils cultivent déjà avec nous.",
    starsAria: "5 étoiles sur 5",
    stats: [
      { value: "4,8", suffix: "/5", label: "Note Google Play" },
      { value: "10 000+", suffix: "", label: "Téléchargements" },
      { value: "120", suffix: "", label: "Coopératives partenaires" },
    ],
    testimonials: [
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
    ],
  },

  faq: {
    eyebrow: "Questions fréquentes",
    heading: "Avant de vous lancer.",
    items: [
      {
        q: "L'application est-elle gratuite ?",
        a: "Oui, le téléchargement est gratuit et aucun frais de transaction n'est prélevé sur vos ventes ou vos achats.",
      },
      {
        q: "Comment fonctionne le paiement sécurisé ?",
        a: "L'acheteur paie à la commande via AgroBank. L'argent est conservé sous séquestre et n'est versé au vendeur qu'une fois la livraison confirmée par QR code.",
      },
      {
        q: "Quelle différence avec Farm'sToMarket Pro ?",
        a: "Farm'sToMarket est la place de marché pour acheter, vendre et livrer. Farm'sToMarket Pro sert aux coopératives, distributeurs et contrôleurs qui gèrent un réseau de producteurs, des commandes et des tableaux de bord.",
      },
      {
        q: "Dans quelles langues est-elle disponible ?",
        a: "En français et en anglais.",
      },
      {
        q: "Je ne suis pas à l'aise avec les applications. Est-ce compliqué ?",
        a: "L'application est pensée pour être simple : publier un produit ou accepter une mission se fait en quelques étapes, et un centre d'aide est intégré.",
      },
    ],
  },

  finalCta: {
    heading: "Prêt à cultiver demain ?",
    body: "Ensemble, faisons de chaque récolte une opportunité prospère.",
    imgAlt: "Inscription sur Farm'sToMarket",
  },

  footer: {
    slogan: "Échangez mieux. Livrez plus vite. Grandissons ensemble.",
    appsTitle: "Applications",
    contactTitle: "Contact",
    legalTitle: "Légal",
    supportLabel: "Support",
    appMain: "Farm'sToMarket",
    appPro: "Farm'sToMarket Pro",
    appDownload: "Télécharger",
    legalMentions: "Mentions légales",
    legalPrivacy: "Politique de confidentialité",
    legalTerms: "Conditions d'utilisation",
    copyright: "© 2026 Farm'sToMarket",
    poweredBy: "Propulsé par Synthi AI",
  },

  store: {
    apple: { top: "Télécharger dans", bottom: "l'App Store" },
    google: { top: "Disponible sur", bottom: "Google Play" },
  },
};

export type Dictionary = typeof fr;
