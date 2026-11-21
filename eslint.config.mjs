import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Livrables de design (référence tierce, pas du code applicatif) :
    "design_handoff_landing_farmstomarket*/**",
    "Farms to Market - Landing Page.html",
  ]),
]);

export default eslintConfig;
