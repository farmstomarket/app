"use client";

import { useState } from "react";

import type { Dictionary } from "@/i18n/fr";

export function Faq({ dict }: { dict: Dictionary["faq"] }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-gray-100">
      <div className="container-page section-py grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-x-[72px] gap-y-10">
        <div data-reveal="0" className="flex flex-col gap-3.5">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="heading-2">{dict.heading}</h2>
        </div>

        <div data-reveal="1" className="flex flex-col gap-2.5">
          {dict.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-[18px] bg-white">
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex min-h-[66px] w-full items-center justify-between gap-4 border-0 bg-transparent px-[22px] py-5 text-left font-display text-lg font-bold text-ink"
                >
                  <span>{f.q}</span>
                  <span
                    aria-hidden
                    className={`flex size-8 flex-none items-center justify-center rounded-full text-xl font-semibold transition-[transform,background-color] duration-[350ms] ease-in-out ${
                      isOpen ? "rotate-45 bg-brand" : "bg-gray-100"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 px-[22px] pb-[22px] text-[17px] leading-[1.55] text-pretty text-gray-700">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
