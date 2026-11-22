import { RevealObserver } from "@/components/motion/RevealObserver";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Pro } from "@/components/sections/Pro";
import { Proof } from "@/components/sections/Proof";
import { Roles } from "@/components/sections/Roles";
import { Stat } from "@/components/sections/Stat";
import { siteConfig } from "@/config/site";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

const { stores } = siteConfig;
const app = (name: string, description: string, links: (string | null)[]) => {
  const urls = links.filter((l): l is string => Boolean(l));
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name,
    description,
    operatingSystem: urls.map((u) => (u.includes("apple.com") ? "iOS" : "Android")).join(", "),
    applicationCategory: "BusinessApplication",
    inLanguage: ["fr", "en"],
    offers: { "@type": "Offer", price: "0", priceCurrency: "XOF" },
    installUrl: urls,
    sameAs: urls,
    url: siteConfig.url,
  };
};

export default async function Home() {
  const dict = await getDictionary();
  const loc = await getLocale();

  const jsonLd = [
    app(
      "Farm'sToMarket",
      "Marketplace agricole qui relie producteurs, acheteurs et transporteurs.",
      [stores.googlePlay, stores.appStore],
    ),
    app(
      "Farm'sToMarket Pro",
      "Gestion de filière pour coopératives, distributeurs, transporteurs et contrôleurs qualité.",
      [stores.proGooglePlay, stores.proAppStore],
    ),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: loc,
      mainEntity: dict.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.png`,
      sameAs: [
        stores.googlePlay,
        stores.appStore,
        stores.proGooglePlay,
        stores.proAppStore,
      ].filter((l): l is string => Boolean(l)),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contact.support,
        availableLanguage: ["fr", "en"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: ["fr", "en"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header dict={dict.nav} showPro={siteConfig.showPro} />
      <main>
        <Hero dict={dict} />
        <Marquee dict={dict.marquee} />
        <Stat dict={dict.stat} />
        <Features dict={dict.features} />
        <Roles dict={dict.roles} />
        {siteConfig.showPro && <Pro dict={dict.pro} store={dict.store} />}
        {siteConfig.showProof && <Proof dict={dict.proof} />}
        <Faq dict={dict.faq} />
        <FinalCta dict={dict.finalCta} store={dict.store} />
      </main>
      <Footer dict={dict.footer} showPro={siteConfig.showPro} />
      <RevealObserver />
    </div>
  );
}
