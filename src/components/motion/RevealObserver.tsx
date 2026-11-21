"use client";

import { useEffect } from "react";

/**
 * Observe tous les éléments [data-reveal] et leur ajoute .is-revealed
 * quand ils entrent dans le viewport (threshold .12). Le style est dans globals.css.
 * Un MutationObserver prend en charge les éléments ajoutés après le montage.
 */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-revealed");
          io.unobserve(e.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const scan = () =>
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed):not([data-reveal-wired])")
        .forEach((el) => {
          el.dataset.revealWired = "";
          io.observe(el);
        });

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
