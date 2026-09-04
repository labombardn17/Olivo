import type { Device } from "@/content/devices";
import { silhouettes } from "@/components/shared/DeviceSilhouette";

/**
 * Cinema device placeholder: a dark object silhouette under one soft light.
 * Single-hue luminance falloff only; no colored glow. 4:5.
 */
export function CinemaObject({ device, className = "" }: { device: Device; className?: string }) {
  const id = `light-${device.slug}`;
  return (
    <figure className={`relative aspect-[4/5] overflow-hidden bg-ground ${className}`} data-object={device.slug}>
      <svg viewBox="0 0 400 500" className="h-full w-full" role="img" aria-label={`Placeholder object study for ${device.name}. Manufacturer imagery to follow.`}>
        <defs>
          <radialGradient id={`${id}-bg`} cx="0.5" cy="0.28" r="0.7">
            <stop offset="0" stopColor="var(--ink)" stopOpacity="0.16" />
            <stop offset="1" stopColor="var(--ink)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-obj`} x1="0.15" y1="0" x2="0.85" y2="1">
            <stop offset="0" stopColor="var(--ink)" stopOpacity="0.42" />
            <stop offset="0.55" stopColor="var(--ink)" stopOpacity="0.12" />
            <stop offset="1" stopColor="var(--ink)" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#${id}-bg)`} />
        <ellipse cx="200" cy="440" rx="130" ry="12" fill="var(--ink)" fillOpacity="0.05" />
        <g transform="translate(60 26) scale(0.7)">
          <path d={silhouettes[device.shape]} fill={`url(#${id}-obj)`} fillRule="evenodd" />
          <path d={silhouettes[device.shape]} fill="none" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="1" fillRule="evenodd" />
        </g>
      </svg>
    </figure>
  );
}
