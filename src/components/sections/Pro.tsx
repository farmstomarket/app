import Image from "next/image";

import mPro from "@/assets/m-pro.png";
import proIcon from "@/assets/pro-icon.png";
import { StoreButtons } from "@/components/ui/StoreButton";
import type { Dictionary } from "@/i18n/fr";

export function Pro({
  dict,
  store,
}: {
  dict: Dictionary["pro"];
  store: Dictionary["store"];
}) {
  return (
    <section id="pro" className="overflow-hidden bg-ink text-white">
      <div className="container-page section-py grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-x-[72px] gap-y-12">
        <div data-reveal="0" className="flex flex-col gap-[26px]">
          <div className="flex items-center gap-4">
            <Image
              src={proIcon}
              alt={dict.iconAlt}
              sizes="72px"
              className="size-[72px] rounded-[18px] shadow-[0_0_0_1px_#353A4A]"
            />
            <span className="flex flex-col">
              <strong className="font-display text-xl">{dict.badgeTitle}</strong>
              <span className="text-[15px] text-gray-400">{dict.badgeSub}</span>
            </span>
          </div>

          <h2 className="heading-2 text-balance">
            {dict.headingLead} <span className="text-brand">{dict.headingAccent}</span>
          </h2>

          <p className="m-0 max-w-[520px] text-lg leading-[1.55] text-pretty text-gray-300">
            {dict.body}
          </p>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-gray-900 bg-gray-900">
            {dict.features.map((f) => (
              <div key={f.title} className="flex flex-col gap-1.5 bg-ink p-5">
                <strong className="font-display text-[17px]">{f.title}</strong>
                <span className="text-[15px] leading-[1.45] text-gray-400">{f.body}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <StoreButtons app="pro" labels={store} />
          </div>
        </div>

        <div data-reveal="1" className="relative flex items-center justify-center">
          <div
            data-glow
            className="absolute aspect-square w-[80%] rounded-full bg-[radial-gradient(circle,rgba(0,232,52,0.32)_0%,rgba(0,232,52,0)_66%)]"
          />
          <Image
            data-float="2"
            src={mPro}
            alt={dict.dashAlt}
            sizes="(min-width: 900px) 620px, 100vw"
            className="relative h-auto w-[min(100%,620px)]"
          />
        </div>
      </div>
    </section>
  );
}
