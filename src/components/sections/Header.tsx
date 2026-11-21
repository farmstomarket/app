import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 backdrop-blur-[14px]">
      <div className="container-page flex items-center justify-between gap-4 py-2.5">
        <a href="#top" aria-label="Farms to Market" className="block">
          <Logo />
        </a>
        <nav className="flex items-center gap-1.5">
          {siteConfig.showPro && (
            <a
              href="#pro"
              className="px-3.5 py-2.5 text-[15px] font-bold whitespace-nowrap text-gray-700 no-underline max-[399px]:hidden hover:text-ink hover:no-underline"
            >
              Version Pro
            </a>
          )}
          <a
            href="#telecharger"
            className="rounded-xl bg-ink px-5 py-3 text-[15px] font-bold whitespace-nowrap text-white no-underline hover:text-white hover:no-underline"
          >
            Télécharger
          </a>
        </nav>
      </div>
    </header>
  );
}
