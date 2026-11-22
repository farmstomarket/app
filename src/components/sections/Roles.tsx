"use client";

import Image from "next/image";
import { type KeyboardEvent, useState } from "react";

import { ROLE_IMAGES, ROLE_KEYS, type RoleKey } from "@/lib/content";
import type { Dictionary } from "@/i18n/fr";

export function Roles({ dict }: { dict: Dictionary["roles"] }) {
  const [role, setRole] = useState<RoleKey>("producer");

  // Navigation clavier conforme ARIA tablist : flèches gauche/droite (avec rebouclage),
  // Home/Fin pour les extrémités.
  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const keys: Record<string, number> = {
      ArrowRight: (i + 1) % ROLE_KEYS.length,
      ArrowLeft: (i - 1 + ROLE_KEYS.length) % ROLE_KEYS.length,
      Home: 0,
      End: ROLE_KEYS.length - 1,
    };
    const next = keys[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setRole(ROLE_KEYS[next]);
    document.getElementById(`tab-${ROLE_KEYS[next]}`)?.focus();
  };

  return (
    <section className="bg-gray-100">
      <div className="container-page section-py grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-x-[72px] gap-y-12">
        <div data-reveal="0" className="flex flex-col gap-7">
          <div className="flex flex-col gap-3.5">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="heading-2">{dict.heading}</h2>
          </div>

          <div
            role="tablist"
            aria-label={dict.tablistLabel}
            className="relative flex max-w-full gap-1 self-start overflow-x-auto rounded-2xl bg-white p-[5px]"
          >
            {ROLE_KEYS.map((key, i) => {
              const on = key === role;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  id={`tab-${key}`}
                  aria-selected={on}
                  aria-controls={`panel-${key}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setRole(key)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`min-h-[46px] rounded-xl border-0 px-5 py-2.5 font-sans text-base font-bold whitespace-nowrap transition-colors duration-300 ease-in-out ${
                    on ? "bg-ink text-white" : "bg-transparent text-gray-700"
                  }`}
                >
                  {dict.items[key].label}
                </button>
              );
            })}
          </div>

          <div className="grid">
            {ROLE_KEYS.map((key) => {
              const on = key === role;
              const r = dict.items[key];
              return (
                <div
                  key={key}
                  role="tabpanel"
                  id={`panel-${key}`}
                  aria-labelledby={`tab-${key}`}
                  aria-hidden={!on}
                  inert={!on}
                  className={`col-start-1 row-start-1 flex flex-col gap-[18px] transition-[opacity,transform] duration-[450ms] ease-in-out ${
                    on ? "opacity-100" : "pointer-events-none translate-y-2.5 opacity-0"
                  }`}
                >
                  <h3 className="m-0 font-display text-[length:clamp(22px,2.4vw,28px)] leading-[1.2] font-bold tracking-[-0.02em]">
                    {r.title}
                  </h3>
                  <p className="m-0 text-lg leading-[1.55] text-pretty text-gray-700">{r.body}</p>
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {r.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-baseline gap-3 text-[17px] leading-[1.45] text-gray-900"
                      >
                        <span className="size-2 flex-none -translate-y-0.5 rounded-[2px] bg-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div
          data-reveal="1"
          className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-[#B9C6C9]"
        >
          {ROLE_KEYS.map((key) => {
            const on = key === role;
            return (
              <Image
                key={key}
                src={ROLE_IMAGES[key]}
                alt={dict.items[key].label}
                aria-hidden={!on}
                sizes="(min-width: 900px) 580px, 100vw"
                className={`absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[600ms,1200ms] ease-[ease,var(--ease-out-soft)] ${
                  on ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
