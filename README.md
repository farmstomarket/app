# Farm'sToMarket — Landing page

Landing page mobile-first des applications **Farm'sToMarket** et **Farm'sToMarket Pro**.
Stack : **Next.js 16** (App Router, React 19, TypeScript) + **Tailwind CSS 4**.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

```
src/
├── app/
│   ├── layout.tsx        # Polices (Plus Jakarta Sans, Urbanist), métadonnées SEO, lang="fr"
│   ├── page.tsx          # Sections + JSON-LD (MobileApplication, FAQPage, Organization, WebSite)
│   ├── globals.css       # Design tokens (@theme), utilitaires, animations, reduced-motion
│   ├── app/route.ts      # Smart link /app (redirection selon l'OS)
│   ├── robots.ts         # robots.txt (Disallow /app, déclare le sitemap)
│   ├── sitemap.ts        # sitemap.xml
│   ├── manifest.ts       # Web App Manifest (PWA)
│   ├── icon.png          # Favicon 512×512 (pictogramme du logo)
│   ├── apple-icon.png    # 180×180
│   └── opengraph-image.png / twitter-image.png   # Aperçu de partage 1200×630
├── assets/               # Logo + mockups (optimisés automatiquement par next/image)
├── config/site.ts        # ⚙️ Drapeaux showPro / showProof / showQR, liens stores, contacts, légal
├── lib/content.ts        # 📝 Tous les textes : bénéfices, profils, FAQ, avis, carrousel
└── components/
    ├── motion/RevealObserver.tsx   # Apparition au scroll ([data-reveal])
    ├── ui/                         # Logo, StoreButton (boutons texte), QrCode
    └── sections/                   # Header, Hero, Marquee, Stat, Features, Roles, Pro, Proof, Faq, FinalCta, Footer
```

## Déploiement

Cible : **app.farmstomarket.io** (domaine canonique configuré dans `src/config/site.ts` → `url`,
repris par metadataBase, canonical, Open Graph, robots.txt et sitemap.xml).

## Design tokens (Tailwind)

Palette réduite aux couleurs de la marque (`--color-*: initial`) :

| Classe | Valeur |
| --- | --- |
| `ink` | #040405 |
| `brand` / `green-500` | #00E834 |
| `green-50 … green-950` | #E6FDEB → #00300A |
| `gray-100 … gray-950` | #EEF0F4 → #1A1A1A |
| `info` / `success` / `warning` / `error` | #246BFD / #02C02B / #FF981F / #F75555 |

Polices : `font-display` (Plus Jakarta Sans, titres) et `font-sans` (Urbanist, texte).
Utilitaires maison : `container-page`, `section-py`, `eyebrow`, `heading-2`.

## Animations

- `[data-reveal="n"]` : fondu + translation au scroll, délai n × 90 ms.
- `[data-intro]`, `[data-float="i"]`, `[data-glow]` : keyframes CSS dans `globals.css`.
- Carrousel (WAAPI, ralenti ×0.2 au survol), parallaxe du hero, compteur 60 %, scrollytelling : composants client.
- `prefers-reduced-motion: reduce` désactive toutes les animations.

## Stores, boutons et QR code

Tous les liens sont dans `src/config/site.ts` :

| App | Google Play | App Store |
| --- | --- | --- |
| Farm'sToMarket | `com.i4u.synthi_ai.farms2market_mobile` | `null` (pas encore publiée) |
| Farm'sToMarket Pro | `com.i4u.synthi_ai.farms2markets_agents` | `null` (pas encore publiée) |

- **Boutons stores** (`src/components/ui/StoreButton.tsx`) : rectangle arrondi à deux lignes
  (« Télécharger dans / l'App Store », « Disponible sur / Google Play »), fidèle à la maquette.
  Variante noire sur fond clair, variante verte sur le fond sombre de la section Pro.
  Un bouton n'est affiché que si son lien de store est renseigné.
- **Ajouter l'App Store** : renseigner `stores.appStore` / `stores.proAppStore` avec l'URL
  `https://apps.apple.com/app/id…` (identifiant numérique attribué par Apple, impossible à déduire
  de l'identifiant Android). Le bouton App Store et le smart link apparaissent alors automatiquement.
- **QR code** (hero, desktop ≥ 900px) : généré en SVG au build (`src/components/ui/QrCode.tsx`).
  Il pointe vers Google Play tant qu'il n'y a pas de lien App Store, puis automatiquement vers le
  smart link `/app`.
- **Smart link `/app`** (`src/app/app/route.ts`) : redirige iPhone/iPad vers l'App Store
  (si configuré) et tous les autres appareils vers Google Play. À utiliser dans les campagnes,
  flyers, SMS…

## À faire avant la mise en production

- [ ] **Liens App Store** quand les apps iOS seront publiées (cf. ci-dessus).
- [ ] **Avis** : chiffres et témoignages fictifs à remplacer (`src/lib/content.ts`) ou `showProof: false`.
- [ ] **Pages légales** (mentions, confidentialité, CGU) et leurs liens (`siteConfig.legal`).
- [ ] **Logo SVG** à la place du PNG recadré.
