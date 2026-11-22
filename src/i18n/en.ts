import type { Dictionary } from "./fr";

/** English dictionary (default locale). Must mirror the structure of `fr`. */
export const en: Dictionary = {
  metadata: {
    title: "Farm'sToMarket: from field to market, no middleman",
    description:
      "Farmers, buyers and carriers in a single app. Sell at a fair price, buy at the source, deliver with full traceability. Escrow payments, zero fees, live GPS tracking.",
  },

  nav: {
    versionPro: "Pro version",
    download: "Download",
    brandAria: "Farm'sToMarket",
  },

  hero: {
    eyebrow: "The trust infrastructure of African agriculture",
    title: ["From field", "to market,", "no middleman."],
    subtitle:
      "Farmers, buyers and carriers in a single app. Sell at a fair price, buy at the source, deliver with full traceability.",
    args: ["Escrow payment", "Zero transaction fees", "Live GPS tracking"],
    qrScan: "Scan to install",
    qrAria: "QR code to install the Farm'sToMarket app",
  },

  heroVisual: {
    marketAlt: "Product catalogue and map in Farm'sToMarket",
    homeAlt: "App home screen",
    paidTitle: "Payment released",
    paidSub: "Delivery confirmed by QR",
    stockLabel: "Tomatoes · Commodity exchange",
    stockTrend: "Price rising",
  },

  marquee: {
    title: "One app, the entire value chain.",
    subtitle: "Marketplace · Payments · Delivery · Exchange · Messaging",
  },

  stat: {
    lead: "of African harvests are lost between the field and the consumer.",
    body: "Not for lack of production, but for lack of connection. Farm'sToMarket links every step so the harvest arrives fresh, and paid at a fair price.",
  },

  features: {
    eyebrow: "What changes for you",
    heading: "More revenue, fewer losses, zero grey areas.",
    items: [
      {
        title: "Sell direct",
        body: "List crops, livestock and produce in minutes and set your prices. Better prices for the farmer, fresher produce for the buyer.",
      },
      {
        title: "Get paid, for sure",
        body: "With AgroBank, the buyer pays at checkout. Funds stay in escrow and are released to the seller as soon as delivery is confirmed. Zero fees.",
      },
      {
        title: "Track every delivery",
        body: "Real-time GPS tracking, QR-code handover and step-by-step status, from the farm to the door.",
      },
      {
        title: "Sell at the right time",
        body: "The commodity exchange shows live prices and trends so you can set your prices and buy at the best moment.",
      },
    ],
  },

  roles: {
    eyebrow: "One app, three roles",
    heading: "You are…",
    tablistLabel: "Choose your profile",
    items: {
      producer: {
        label: "Farmer",
        title: "Farmer, breeder or cooperative",
        body: "List your harvests and set your prices with live market rates. Manage orders and sales from your phone.",
        points: [
          "Payment guaranteed by AgroBank escrow",
          "Direct messaging with buyers",
          "Sales and revenue history",
        ],
      },
      buyer: {
        label: "Buyer",
        title: "Retailer, restaurant or processor",
        body: "Buy fresh, local produce directly from the farm. Compare prices, check farmer profiles and order with confidence.",
        points: [
          "Availability and quality visible before ordering",
          "Funds released only on delivery",
          "Real-time order tracking",
        ],
      },
      driver: {
        label: "Carrier",
        title: "Carrier or driver",
        body: "Accept delivery requests, plan efficient routes and complete your jobs with full GPS tracking.",
        points: [
          "Regular jobs near you",
          "Handover confirmation by QR code",
          "Built-in messaging with sellers and buyers",
        ],
      },
    },
  },

  pro: {
    badgeTitle: "Farm'sToMarket Pro",
    badgeSub: "For supply-chain professionals",
    headingLead: "Run your entire",
    headingAccent: "supply chain.",
    body: "Cooperatives, distributors, carriers and quality controllers: farmers, orders, deliveries and finances in a single app.",
    iconAlt: "Farm'sToMarket Pro",
    dashAlt: "Farm'sToMarket Pro dashboard",
    features: [
      {
        title: "Your farmers",
        body: "Farmers and breeders, crops and herds all in one place.",
      },
      {
        title: "Verified orders",
        body: "Photos and geolocation at every step.",
      },
      {
        title: "Revenue and performance",
        body: "Turnover, activity and growth at a glance.",
      },
      {
        title: "In the field",
        body: "Full mobile access with maps, in French and English.",
      },
    ],
  },

  proof: {
    heading: "They already grow with us.",
    starsAria: "5 stars out of 5",
    stats: [
      { value: "4.8", suffix: "/5", label: "Google Play rating" },
      { value: "10,000+", suffix: "", label: "Downloads" },
      { value: "120", suffix: "", label: "Partner cooperatives" },
    ],
    testimonials: [
      {
        quote:
          "“I sell my tomatoes straight to restaurants in town. Payment arrives as soon as the delivery is confirmed.”",
        name: "Full Name",
        role: "Market gardener, region",
      },
      {
        quote:
          "“I compare farmers, I see their profile and I order with no middleman. The quality is consistent.”",
        name: "Full Name",
        role: "Market manager, city",
      },
      {
        quote:
          "“Jobs land on my phone, the route is ready and the handover is validated by QR code.”",
        name: "Full Name",
        role: "Carrier, city",
      },
    ],
  },

  faq: {
    eyebrow: "Frequently asked questions",
    heading: "Before you get started.",
    items: [
      {
        q: "Is the app free?",
        a: "Yes, downloading is free and no transaction fee is charged on your sales or purchases.",
      },
      {
        q: "How does secure payment work?",
        a: "The buyer pays at checkout via AgroBank. The money is held in escrow and is only released to the seller once delivery is confirmed by QR code.",
      },
      {
        q: "What's the difference with Farm'sToMarket Pro?",
        a: "Farm'sToMarket is the marketplace to buy, sell and deliver. Farm'sToMarket Pro is for cooperatives, distributors and controllers managing a network of farmers, orders and dashboards.",
      },
      {
        q: "Which languages is it available in?",
        a: "In French and English.",
      },
      {
        q: "I'm not comfortable with apps. Is it complicated?",
        a: "The app is designed to be simple: listing a product or accepting a job takes a few steps, and a help centre is built in.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to grow tomorrow?",
    body: "Together, let's make every harvest a thriving opportunity.",
    imgAlt: "Signing up on Farm'sToMarket",
  },

  footer: {
    slogan: "Trade better. Deliver faster. Let's grow together.",
    appsTitle: "Apps",
    contactTitle: "Contact",
    legalTitle: "Legal",
    supportLabel: "Support",
    appMain: "Farm'sToMarket",
    appPro: "Farm'sToMarket Pro",
    appDownload: "Download",
    legalMentions: "Legal notice",
    legalPrivacy: "Privacy policy",
    legalTerms: "Terms of use",
    copyright: "© 2026 Farm'sToMarket",
    poweredBy: "Powered by Synthi AI",
  },

  store: {
    apple: { top: "Download on the", bottom: "App Store" },
    google: { top: "GET IT ON", bottom: "Google Play" },
  },
};
