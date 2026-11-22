import type { ReactNode } from "react";

import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/fr";

const linkCls = "text-base font-medium text-white hover:text-white";

function Col({ title, reveal, children }: { title: string; reveal: string; children: ReactNode }) {
  return (
    <div data-reveal={reveal} className="flex flex-col gap-3.5">
      <span className="text-[13px] font-bold tracking-[0.1em] text-gray-500 uppercase">{title}</span>
      {children}
    </div>
  );
}

export function Footer({
  dict,
  showPro,
}: {
  dict: Dictionary["footer"];
  showPro: boolean;
}) {
  const { contact, legal } = siteConfig;
  return (
    <footer className="overflow-hidden bg-ink text-gray-400">
      <div className="container-page flex flex-col gap-[clamp(48px,6vw,72px)] pt-[clamp(56px,7vw,88px)] pb-[clamp(48px,6vw,72px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-8 gap-y-10">
          <div className="flex flex-col gap-[18px]">
            <span data-reveal="0">
              <Logo variant="footer" />
            </span>
            <p className="m-0 max-w-[260px] text-base leading-normal text-gray-400">
              {dict.slogan}
            </p>
          </div>

          <Col title={dict.appsTitle} reveal="1">
            <a href="#top" className={linkCls}>
              {dict.appMain}
            </a>
            {showPro && (
              <a href="#pro" className={linkCls}>
                {dict.appPro}
              </a>
            )}
            <a href="#telecharger" className={linkCls}>
              {dict.appDownload}
            </a>
          </Col>

          <Col title={dict.contactTitle} reveal="2">
            <a href={`mailto:${contact.email}`} className={linkCls}>
              {contact.email}
            </a>
            <span className="flex flex-col gap-0.5">
              <span className="text-[13px] text-gray-500">{dict.supportLabel}</span>
              <a href={`mailto:${contact.support}`} className={linkCls}>
                {contact.support}
              </a>
            </span>
          </Col>

          <Col title={dict.legalTitle} reveal="3">
            <a href={legal.mentions} className={linkCls}>
              {dict.legalMentions}
            </a>
            <a href={legal.privacy} className={linkCls}>
              {dict.legalPrivacy}
            </a>
            <a href={legal.terms} className={linkCls}>
              {dict.legalTerms}
            </a>
          </Col>
        </div>
      </div>

      <div className="relative border-t border-gray-950 bg-ink">
        <div className="container-page flex flex-wrap justify-between gap-x-6 gap-y-2.5 py-[22px] text-sm text-gray-500">
          <span>
            {dict.copyright} ·{" "}
            <a href={siteConfig.url} className="text-gray-300 hover:text-gray-300">
              {siteConfig.domain}
            </a>
          </span>
          <span>{dict.poweredBy}</span>
        </div>
      </div>
    </footer>
  );
}
