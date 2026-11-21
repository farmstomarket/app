import QRCode from "qrcode";

/**
 * QR code rendu en SVG côté serveur (au build) : aucun JS client, net à toutes les tailles.
 * Un seul <path> pour tous les modules, marge de 2 modules.
 */
export function QrCode({
  value,
  size = 88,
  label,
  className = "",
}: {
  value: string;
  size?: number;
  label: string;
  className?: string;
}) {
  const qr = QRCode.create(value, { errorCorrectionLevel: "L" });
  const n = qr.modules.size;
  const margin = 2;
  const dim = n + margin * 2;
  let d = "";
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (qr.modules.get(x, y)) d += `M${x + margin} ${y + margin}h1v1h-1z`;
    }
  }
  return (
    <svg
      role="img"
      aria-label={label}
      width={size}
      height={size}
      viewBox={`0 0 ${dim} ${dim}`}
      shapeRendering="crispEdges"
      className={className}
    >
      <rect width={dim} height={dim} fill="#FFFFFF" />
      <path d={d} fill="#040405" />
    </svg>
  );
}
