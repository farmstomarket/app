"use client";

import { useEffect, useRef, useState } from "react";

const TARGET = 60;

export function Stat() {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(TARGET);

  // Compteur 0 → 60 en 1400 ms (ease-out cubique) quand 50 % de l'élément est visible.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (t: number) => {
          const k = Math.min(1, (t - t0) / 1400);
          setValue(Math.round(TARGET * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    // La section est sous le viewport (pas encore atteinte) : on remet à 0 pour animer à l'arrivée.
    // Si elle est déjà visible ou déjà dépassée (arrivée par deep-link plus bas dans la page),
    // on garde la valeur cible pour ne jamais rester bloqué à 0 %.
    const r = el.getBoundingClientRect();
    if (r.top > window.innerHeight) raf = requestAnimationFrame(() => setValue(0));
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="bg-green-50">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-x-16 gap-y-6 py-[clamp(56px,8vw,96px)]">
        <div
          ref={ref}
          className="font-display text-[length:clamp(96px,15vw,184px)] leading-[0.88] font-extrabold tracking-[-0.055em] text-green-950 tabular-nums"
        >
          {value} %
        </div>
        <div data-reveal="1" className="flex flex-col gap-3.5">
          <p className="m-0 font-display text-[length:clamp(22px,2.6vw,32px)] leading-[1.22] font-bold tracking-[-0.02em] text-pretty">
            des récoltes africaines sont perdues entre le champ et le consommateur.
          </p>
          <p className="m-0 text-lg leading-[1.55] text-pretty text-gray-800">
            Pas par manque de production, mais par manque de connexion. Farms to Market relie
            chaque maillon pour que la récolte arrive fraîche, et payée au juste prix.
          </p>
        </div>
      </div>
    </section>
  );
}
