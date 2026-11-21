import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Urbanist } from "next/font/google";

import { siteConfig } from "@/config/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Farm'sToMarket : du champ au marché, sans intermédiaire";
const description =
  "Producteurs, acheteurs et transporteurs réunis dans une seule application. Vendez au juste prix, achetez à la source, livrez en toute traçabilité. Paiement sous séquestre, zéro frais, suivi GPS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  applicationName: siteConfig.name,
  keywords: [
    "Farm'sToMarket",
    "marketplace agricole",
    "agriculture africaine",
    "vendre produits agricoles",
    "producteurs",
    "acheteurs",
    "transporteurs",
    "paiement sous séquestre",
    "AgroBank",
    "bourse agricole",
    "suivi GPS livraison",
    "circuit court agricole",
    "application agriculture",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#00E834",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${urbanist.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Active les animations « reveal » uniquement si le JS s'exécute. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
