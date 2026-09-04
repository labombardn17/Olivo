import type { Device } from "@/content/devices";
import { silhouettes } from "@/components/shared/DeviceSilhouette";

/**
 * Atelier device placeholder: an engraving-style line frame on paper with the
 * name set in the serif. 4:5. Real device photography replaces it.
 */
export function AtelierPlate({ device, className = "", index }: { device: Device; className?: string; index?: number }) {
  const id = `hatch-${device.slug}`;
  return (
    <figure className={`relative aspect-[4/5] overflow-hidden bg-ground ${className}`} data-plate={device.slug}>
      <svg viewBox="0 0 400 500" className="h-full w-full" role="img" aria-label={`Placeholder engraving for ${device.name}. Manufacturer imagery to follow.`}>
        <defs>
          <pattern id={id} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="6" className="hatch" />
          </pattern>
        </defs>
        <rect x="14" y="14" width="372" height="472" fill="none" stroke="var(--ink)" strokeWidth="0.8" />
        <rect x="22" y="22" width="356" height="456" fill="none" stroke="var(--rule)" strokeWidth="0.8" />
        <g transform="translate(60 26) scale(0.7)">
          <path d={silhouettes[device.shape]} fill={`url(#${id})`} stroke="var(--ink)" strokeWidth="1.1" fillRule="evenodd" />
        </g>
        <line x1="40" y1="418" x2="360" y2="418" stroke="var(--ink)" strokeWidth="0.6" />
        <text x="40" y="446" fontFamily="var(--font-display-face)" fontSize="19" fill="var(--ink)" style={{ fontVariationSettings: '"opsz" 24, "SOFT" 50' }}>{device.name}</text>
        <text x="40" y="466" fontFamily="var(--font-text-face)" fontSize="9.5" letterSpacing="1.2" fill="var(--ink-2)">{device.family.toUpperCase()} · PLATE {index !== undefined ? String(index + 1).padStart(2, "0") : ""}</text>
      </svg>
    </figure>
  );
}
