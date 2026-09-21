// Photos sourced from the clinic's current website at build time
// (scripts/fetch-live-images.mjs). The manifest is empty in local builds
// where the fetch cannot run; components then fall back to placeholders.
import manifest from "@/content/live-images.json";

export interface LiveImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

type Manifest = Record<string, LiveImage[]>;
const data = manifest as Manifest;

export function liveImages(slot: string): LiveImage[] {
  return data[slot] ?? [];
}

export function liveImage(slot: string, index = 0): LiveImage | null {
  const list = liveImages(slot);
  return list[index] ?? list[0] ?? null;
}

export const liveImageCount = Object.values(data).reduce((n, l) => n + l.length, 0);
