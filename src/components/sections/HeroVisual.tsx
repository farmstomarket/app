"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import m17 from "@/assets/m-17.png";
import mMarket from "@/assets/m-market.png";

export function HeroVisual() {
  const parallaxRef = useRef<HTMLImageElement>(null);

  // Parallaxe : translateY(scrollY × 0.06), plafonné à 800px de scroll.
  useEffect(() => {
    const img = parallaxRef.current;
    if (!img || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      img.style.transform = `scale(1.08) translateY(${Math.min(window.scrollY, 800) * 0.06}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[560px] pb-[6%]">
      <div
        data-intro="panel"
        className="relative aspect-[4/4.3] overflow-hidden rounded-[32px] bg-brand"
      >
        <div
          data-glow
          className="absolute top-[4%] left-[18%] aspect-square w-[86%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_65%)]"
        />
        <div data-intro="up" className="absolute inset-0">
          <div data-float="4" className="absolute inset-0">
            <Image
              ref={parallaxRef}
              src={mMarket}
              alt="Catalogue et carte des produits dans Farms to Market"
              preload
              sizes="(min-width: 900px) 840px, 150vw"
              className="absolute top-[-4%] left-[-25%] h-auto w-[150%] max-w-none"
            />
          </div>
        </div>
      </div>

      <div
        data-intro="left"
        className="pointer-events-none absolute -bottom-[2%] left-[max(-12%,-40px)] w-[78%]"
      >
        <div data-float="5">
          <Image
            src={m17}
            alt="Accueil de l'application"
            preload
            sizes="(min-width: 900px) 440px, 78vw"
            className="h-auto w-full drop-shadow-[0_30px_40px_rgba(4,4,5,0.28)]"
          />
        </div>
      </div>

      <div
        data-float="0"
        className="absolute top-[10%] left-[clamp(-8px,-2vw,-28px)] flex items-center gap-3 rounded-[14px] bg-white py-3 pr-4 pl-3 shadow-[0_18px_40px_rgba(4,4,5,0.16)]"
      >
        <span className="flex size-[38px] items-center justify-center rounded-[10px] bg-ink text-lg font-extrabold text-brand">
          ✓
        </span>
        <span className="flex flex-col">
          <strong className="font-display text-[15px]">Paiement libéré</strong>
          <span className="text-[13px] text-gray-600">Livraison confirmée par QR</span>
        </span>
      </div>

      <div
        data-float="1"
        className="absolute top-[40%] right-[clamp(-8px,-2vw,-24px)] flex flex-col gap-0.5 rounded-[14px] bg-ink px-[18px] py-3 text-white shadow-[0_18px_40px_rgba(4,4,5,0.25)]"
      >
        <span className="text-xs text-gray-400">Tomates · Bourse agricole</span>
        <strong className="font-display text-base">
          Cours en hausse <span className="text-brand">▲</span>
        </strong>
      </div>
    </div>
  );
}
