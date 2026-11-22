import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Urbanist } from "next/font/google";
import { notFound } from "next/navigation";

import { defaultLocale, isLocale, localeHrefLang, locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { siteConfig } from "@/config/site";
import "../globals.css";

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

/** Génère les routes statiques /en et /fr (requis avec cacheComponents). */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const loc = await getLocale();
  const dict = await getDictionary();
  const languages = Object.fromEntries(
    locales.map((l) => [localeHrefLang[l], `/${l}`]),
  );
  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.metadata.title,
    description: dict.metadata.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "business",
    formatDetection: { telephone: false, email: false, address: false },
    alternates: {
      canonical: `/${loc}`,
      languages: { ...languages, "x-default": `/${defaultLocale}` },
    },
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
      locale: loc === "fr" ? "fr_FR" : "en_US",
      alternateLocale: loc === "fr" ? "en_US" : "fr_FR",
      url: `/${loc}`,
      siteName: siteConfig.name,
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
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
