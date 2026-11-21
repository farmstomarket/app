import { HeroVisual } from "@/components/sections/HeroVisual";
import { StoreButtons } from "@/components/ui/StoreButton";
import { QrCode } from "@/components/ui/QrCode";
import { siteConfig } from "@/config/site";

/** Avec un seul store, le QR pointe directement dessus ; avec les deux, vers le smart link /app. */
const qrTarget = siteConfig.stores.appStore
  ? `${siteConfig.url}/app`
  : siteConfig.stores.googlePlay;

const ARGS = ["Paiement sous séquestre", "Zéro frais de transaction", "Suivi GPS en direct"];

export function Hero() {
  return (
    <section id="top" className="relative bg-white">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,5vw,64px)] pt-[clamp(36px,6vw,80px)] pb-[clamp(48px,6vw,80px)]">
        <div className="flex flex-col gap-[26px]">
          <div data-reveal="0" className="flex items-center gap-3.5">
            <span className="h-0.5 w-9 flex-none bg-green-700" />
            <span className="text-sm font-bold tracking-[0.1em] text-green-900 uppercase">
              L&apos;infrastructure de confiance de l&apos;agriculture africaine
            </span>
          </div>

          <h1 className="m-0 font-display text-[length:clamp(42px,6.6vw,80px)] leading-none font-extrabold tracking-[-0.04em] text-balance">
            <span data-reveal="1" className="block">
              Du champ
            </span>
            <span data-reveal="2" className="block">
              au marché,
            </span>
            <span data-reveal="3" className="block text-green-700">
              sans intermédiaire.
            </span>
          </h1>

          <p
            data-reveal="4"
            className="m-0 max-w-[500px] text-[length:clamp(18px,1.9vw,21px)] leading-normal text-pretty text-gray-700"
          >
            Producteurs, acheteurs et transporteurs réunis dans une seule application. Vendez au
            juste prix, achetez à la source, livrez en toute traçabilité.
          </p>

          <div data-reveal="5" className="flex flex-wrap items-center gap-3">
            <StoreButtons />
            {siteConfig.showQR && (
              // QR code : desktop uniquement (≥ 900px), inutile sur le téléphone lui-même.
              <div className="ml-1 hidden items-center gap-3 border-l border-gray-300 pl-4 min-[900px]:flex">
                <QrCode
                  value={qrTarget}
                  size={88}
                  label="QR code pour installer l'application Farm'sToMarket"
                  className="rounded-[10px] border border-gray-100"
                />
                <span className="max-w-[110px] text-sm leading-[1.35] text-gray-600">
                  Scannez pour installer
                </span>
              </div>
            )}
          </div>

          <div
            data-reveal="6"
            className="flex flex-wrap gap-x-[22px] gap-y-2.5 text-[15px] font-semibold text-gray-600"
          >
            {ARGS.map((a) => (
              <span key={a} className="flex items-center gap-2">
                <span className="h-0.5 w-3.5 flex-none bg-brand" />
                {a}
              </span>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
