import type { Device } from "@/content/devices";
import { silhouettes } from "@/components/shared/DeviceSilhouette";

/** Precision device placeholder: a technical drawing on a faint grid with dimension ticks. 4:5. */
export function PrecisionDrawing({ device, className = "", index }: { device: Device; className?: string; index?: number }) {
  return (
    <figure className={`draft relative aspect-[4/5] overflow-hidden border border-rule bg-ground ${className}`} data-drawing={device.slug}>
      <svg viewBox="0 0 400 500" className="h-full w-full" role="img" aria-label={`Placeholder technical drawing for ${device.name}. Manufacturer imagery to follow.`}>
        <g transform="translate(60 26) scale(0.7)" fill="none" stroke="var(--ink)" strokeWidth="1.2">
          <path d={silhouettes[device.shape]} fillRule="evenodd" />
        </g>
        {/* dimension lines */}
        <g stroke="var(--ink-2)" strokeWidth="0.8">
          <line x1="40" y1="410" x2="360" y2="410" />
          <line x1="40" y1="404" x2="40" y2="416" /><line x1="360" y1="404" x2="360" y2="416" />
          <line x1="372" y1="60" x2="372" y2="370" />
          <line x1="366" y1="60" x2="378" y2="60" /><line x1="366" y1="370" x2="378" y2="370" />
        </g>
        <g fontFamily="var(--font-mono-face)" fontSize="9" fill="var(--ink-2)">
          <text x="180" y="428">W</text>
          <text x="368" y="215" transform="rotate(90 368 215)">H</text>
          <text x="24" y="470">{device.family.toUpperCase()} / {String((index ?? 0) + 1).padStart(2, "0")}</text>
          <text x="24" y="484">PLACEHOLDER DRAWING</text>
        </g>
        <text x="24" y="452" fontFamily="var(--font-display-face)" fontSize="15" fontWeight="500" fill="var(--ink)">{device.name}</text>
      </svg>
    </figure>
  );
}
