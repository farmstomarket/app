import { siteConfig } from "@/config/site";

/**
 * Smart link : https://farmstomarket.io/app
 * Redirige vers l'App Store sur iPhone / iPad (si le lien est configuré), sinon vers Google Play.
 * Utilisé par le QR code dès que `stores.appStore` est renseigné.
 */
export function GET(request: Request) {
  const ua = request.headers.get("user-agent") ?? "";
  const isApple = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && /Mobile/i.test(ua));
  const { appStore, googlePlay } = siteConfig.stores;
  const target = isApple && appStore ? appStore : googlePlay;
  return Response.redirect(target, 302);
}
