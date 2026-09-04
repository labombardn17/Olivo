import type { Device } from "@/content/devices";
import { DeviceSilhouette } from "@/components/shared/DeviceSilhouette";

/** Current device placeholder: a flat color-block silhouette cut out against the section ground. 4:5. */
export function CurrentBlock({ device, className = "", tone = "ground" }: { device: Device; className?: string; tone?: "ground" | "inverse" | "accent" }) {
  const cls = tone === "inverse" ? "card-inverse" : tone === "accent" ? "card-accent" : "card-ground";
  return (
    <figure className={`relative aspect-[4/5] overflow-hidden ${cls} ${className}`} data-block={device.slug} role="img" aria-label={`Placeholder silhouette for ${device.name}. Manufacturer imagery to follow.`}>
      <DeviceSilhouette shape={device.shape} className="absolute inset-[8%] h-[84%] w-[84%]" fill="currentColor" />
    </figure>
  );
}
