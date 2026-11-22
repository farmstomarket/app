"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { FEATURE_IMAGES } from "@/lib/content";
import type { Dictionary } from "@/i18n/fr";

const num = (i: number) => String(i + 1).padStart(2, "0");

export function Features({ dict }: { dict: Dictionary["features"] }) {
  const items = dict.items;
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  // Le bénéfice actif est celui qui traverse le centre de l'écran.
  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.feat));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    root.querySelectorAll("[data-feat]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-white">
      <div className="container-page pt-[clamp(64px,9vw,112px)]">
        <div data-reveal="0" className="flex max-w-[680px] flex-col gap-3.5">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="heading-2 text-balance">{dict.heading}</h2>
        </div>
      </div>

      {/* Desktop (≥ 900px) : scrollytelling avec visuel sticky */}
      <div className="container-page hidden grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-16 pb-[clamp(64px,8vw,96px)] min-[900px]:grid">
        <div ref={listRef} className="flex flex-col">
          {items.map((f, i) => (
            <div
              key={f.title}
              data-feat={i}
              className="flex min-h-[72vh] flex-col justify-center gap-3.5 transition-opacity duration-500 ease-in-out"
              style={{ opacity: i === active ? 1 : 0.28 }}
            >
              <span className="font-display text-[15px] font-extrabold text-green-700">
                {num(i)}
              </span>
              <h3 className="m-0 font-display text-[length:clamp(28px,3vw,40px)] leading-[1.08] font-extrabold tracking-[-0.03em]">
                {f.title}
              </h3>
              <p className="m-0 max-w-[440px] text-[19px] leading-[1.55] text-pretty text-gray-700">
                {f.body}
              </p>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="sticky top-24 h-[calc(100vh-140px)] max-h-[720px] overflow-hidden rounded-[32px] bg-gray-100">
            {items.map((f, i) => (
              <Image
                key={f.title}
                src={FEATURE_IMAGES[i]}
                alt={f.title}
                aria-hidden={i !== active}
                sizes="(min-width: 1240px) 620px, 50vw"
                className="absolute inset-0 size-full object-contain p-6 transition-[opacity,transform] duration-[600ms,800ms] ease-[ease,var(--ease-out-soft)]"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform:
                    i === active
                      ? "translateY(0) scale(1)"
                      : i < active
                        ? "translateY(-24px) scale(.97)"
                        : "translateY(24px) scale(.97)",
                }}
              />
            ))}
            <div className="absolute bottom-6 left-6 flex gap-1.5" aria-hidden>
              {items.map((f, i) => (
                <span
                  key={f.title}
                  className="h-1.5 rounded-[3px] transition-[width,background-color] duration-400 ease-in-out"
                  style={{
                    width: i === active ? 28 : 6,
                    background: i === active ? "#040405" : "#A3A8B7",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (< 900px) : liste image + texte */}
      <div className="container-page flex flex-col gap-14 pt-10 pb-[72px] min-[900px]:hidden">
        {items.map((f, i) => (
          <div key={f.title} data-reveal="0" className="flex flex-col gap-3.5">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
              <Image
                src={FEATURE_IMAGES[i]}
                alt={f.title}
                sizes="100vw"
                className="size-full object-contain"
              />
            </div>
            <span className="pt-1.5 font-display text-[15px] font-extrabold text-green-700">
              {num(i)}
            </span>
            <h3 className="m-0 font-display text-[28px] leading-[1.1] font-extrabold tracking-[-0.03em]">
              {f.title}
            </h3>
            <p className="m-0 text-lg leading-[1.55] text-gray-700">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
