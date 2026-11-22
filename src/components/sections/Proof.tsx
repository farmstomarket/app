import type { Dictionary } from "@/i18n/fr";

/** ⚠️ Section « Avis » : chiffres et témoignages FICTIFS à remplacer (cf. src/i18n/*). */
export function Proof({ dict }: { dict: Dictionary["proof"] }) {
  return (
    <section className="bg-white">
      <div className="container-page section-py flex flex-col gap-12">
        <div data-reveal="0" className="flex flex-wrap items-end justify-between gap-7">
          <h2 className="heading-2 max-w-[560px] text-balance">{dict.heading}</h2>
          <div className="flex flex-wrap gap-[clamp(24px,4vw,56px)]">
            {dict.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-display text-[42px] font-extrabold tracking-[-0.03em]">
                  {s.value}
                  {s.suffix && <span className="text-xl text-gray-500">{s.suffix}</span>}
                </span>
                <span className="text-[15px] text-gray-600">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
          {dict.testimonials.map((t, i) => (
            <figure
              key={i}
              data-reveal={String(i + 1)}
              className="m-0 flex flex-col gap-[22px] rounded-3xl bg-gray-100 p-[30px]"
            >
              <span className="text-lg tracking-[2px] text-green-700" aria-label={dict.starsAria}>
                ★★★★★
              </span>
              <blockquote className="m-0 text-[19px] leading-normal text-pretty text-gray-900">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto flex flex-col">
                <strong className="text-base">{t.name}</strong>
                <span className="text-sm text-gray-600">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
