import Image from "next/image";

import mOnboard from "@/assets/m-onboard.png";
import { StoreButtons } from "@/components/ui/StoreButton";
import type { Dictionary } from "@/i18n/fr";

export function FinalCta({
  dict,
  store,
}: {
  dict: Dictionary["finalCta"];
  store: Dictionary["store"];
}) {
  return (
    <section id="telecharger" className="overflow-hidden bg-brand text-ink">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-14 gap-y-6 pt-[clamp(56px,8vw,96px)]">
        <div data-reveal="0" className="flex flex-col gap-[22px] pb-[clamp(40px,7vw,96px)]">
          <h2 className="m-0 font-display text-[length:clamp(42px,6.4vw,80px)] leading-[0.98] font-extrabold tracking-[-0.045em] text-balance">
            {dict.heading}
          </h2>
          <p className="m-0 max-w-[480px] text-[length:clamp(18px,2vw,21px)] leading-normal text-pretty text-green-950">
            {dict.body}
          </p>
          <div className="flex flex-wrap gap-3 pt-1.5">
            <StoreButtons labels={store} />
          </div>
        </div>

        <div data-reveal="1" className="relative flex items-end justify-center">
          <div
            data-glow
            className="absolute bottom-0 left-[5%] aspect-square w-[90%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_62%)]"
          />
          <Image
            data-float="3"
            src={mOnboard}
            alt={dict.imgAlt}
            sizes="(min-width: 900px) 720px, 118vw"
            className="relative mx-[-6%] mt-[-4%] mb-[-10%] h-auto w-[min(118%,720px)] max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
