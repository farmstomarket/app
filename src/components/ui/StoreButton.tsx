import type { Dictionary } from "@/i18n/fr";
import { siteConfig } from "@/config/site";

type Store = "apple" | "google";
type App = "main" | "pro";
type Labels = Dictionary["store"];

function hrefFor(store: Store, app: App): string | null {
  const s = siteConfig.stores;
  if (app === "pro") return store === "apple" ? s.proAppStore : s.proGooglePlay;
  return store === "apple" ? s.appStore : s.googlePlay;
}

/**
 * Bouton store façon « Landing Page v2 » : rectangle arrondi (radius 14, min-height 58)
 * avec deux lignes de texte, libellés fournis par le dictionnaire courant.
 * Variante principale noire, variante Pro verte (sur fond sombre).
 * Rien n'est rendu si le lien du store n'est pas configuré (cf. src/config/site.ts).
 */
export function StoreButton({
  store,
  app = "main",
  labels,
}: {
  store: Store;
  app?: App;
  labels: Labels;
}) {
  const href = hrefFor(store, app);
  if (!href) return null;
  const l = labels[store];
  const pro = app === "pro";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${l.top} ${l.bottom}`}
      className={`flex min-h-[58px] shrink-0 flex-col justify-center rounded-[14px] px-[22px] py-2 no-underline transition-opacity hover:opacity-90 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        pro
          ? "bg-brand text-ink hover:text-ink focus-visible:outline-white"
          : "bg-ink text-white hover:text-white focus-visible:outline-ink"
      }`}
    >
      <span className={`text-[11px] leading-[1.1] font-semibold ${pro ? "" : "text-gray-300"}`}>
        {l.top}
      </span>
      <span className="font-display text-[19px] leading-[1.15] font-bold">{l.bottom}</span>
    </a>
  );
}

export function StoreButtons({ app = "main", labels }: { app?: App; labels: Labels }) {
  return (
    <>
      <StoreButton store="apple" app={app} labels={labels} />
      <StoreButton store="google" app={app} labels={labels} />
    </>
  );
}
