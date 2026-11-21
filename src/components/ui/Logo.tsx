import Image from "next/image";

import logo from "@/assets/logo.png";

/**
 * Logo horizontal recadré (le PNG fourni a de grandes marges transparentes).
 * TODO : remplacer par un SVG en production.
 */
export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  if (variant === "footer") {
    return (
      <span className="relative block h-[72px] w-[196px] overflow-hidden">
        <Image
          src={logo}
          alt="Farms to Market"
          sizes="294px"
          className="absolute -top-[50px] -left-[50px] h-[172px] w-auto max-w-none brightness-0 invert"
        />
      </span>
    );
  }
  return (
    <span className="relative block h-[46px] w-[126px] overflow-hidden">
      <Image
        src={logo}
        alt="Farms to Market"
        sizes="188px"
        preload
        className="absolute -top-8 -left-8 h-[110px] w-auto max-w-none"
      />
    </span>
  );
}
