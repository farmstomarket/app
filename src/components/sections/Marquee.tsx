"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { MARQUEE } from "@/lib/content";
import type { Dictionary } from "@/i18n/fr";

const ITEMS = [...MARQUEE, ...MARQUEE];

export function Marquee({ dict }: { dict: Dictionary["marquee"] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Défilement infini 0 → -50 % en 60 s (liste dupliquée), ralenti ×0.2 au survol.
  useEffect(() => {
    const el = trackRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const anim = el.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      { duration: 60000, iterations: Infinity },
    );
    const slow = () => (anim.playbackRate = 0.2);
    const normal = () => (anim.playbackRate = 1);
    el.addEventListener("mouseenter", slow);
    el.addEventListener("mouseleave", normal);
    return () => {
      el.removeEventListener("mouseenter", slow);
      el.removeEventListener("mouseleave", normal);
      anim.cancel();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-ink py-[clamp(40px,5vw,64px)]">
      <div className="container-page mb-7 flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="m-0 font-display text-[length:clamp(20px,2.2vw,26px)] font-bold tracking-[-0.02em] text-white">
          {dict.title}
        </h2>
        <span className="text-[15px] text-gray-500">{dict.subtitle}</span>
      </div>
      {/* La marge droite est portée par chaque tuile (plutôt qu'un gap global) pour que
          translateX(-50 %) corresponde exactement à une moitié + son espacement → boucle sans saut. */}
      <div ref={trackRef} className="flex w-max">
        {ITEMS.map((img, i) => (
          <div
            key={i}
            aria-hidden={i >= MARQUEE.length || undefined}
            className="mr-7 flex aspect-[4/3] w-[clamp(260px,28vw,380px)] flex-none items-center justify-center overflow-hidden rounded-3xl bg-gray-950"
          >
            <Image
              src={img}
              alt=""
              sizes="(min-width: 1360px) 380px, (min-width: 930px) 28vw, 260px"
              className="size-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
