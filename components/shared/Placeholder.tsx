import Image from "next/image";

export type Shot = "room-1" | "room-2" | "room-3" | "skin-1" | "skin-2" | "hands-1" | "steel-1" | "light-1" | "portrait";

const shots: Record<Shot, { w: number; h: number; alt: string }> = {
  "room-1": { w: 1600, h: 1000, alt: "Placeholder: treatment room photograph, to be replaced with clinic photography" },
  "room-2": { w: 1600, h: 1000, alt: "Placeholder: second treatment room photograph, to be replaced with clinic photography" },
  "room-3": { w: 1600, h: 1000, alt: "Placeholder: consultation room photograph, to be replaced with clinic photography" },
  "skin-1": { w: 1200, h: 1500, alt: "Placeholder: skin detail photograph, to be replaced with licensed imagery" },
  "skin-2": { w: 1200, h: 1500, alt: "Placeholder: second skin detail photograph, to be replaced with licensed imagery" },
  "hands-1": { w: 1600, h: 1000, alt: "Placeholder: clinician's hands photograph, to be replaced with clinic photography" },
  "steel-1": { w: 1200, h: 1500, alt: "Placeholder: instrument and steel detail, to be replaced with clinic photography" },
  "light-1": { w: 1600, h: 1000, alt: "Placeholder: light on a wall in the clinic, to be replaced with clinic photography" },
  portrait: { w: 1200, h: 1500, alt: "Placeholder silhouette for Dr. Olivo's portrait, to be replaced with her photograph" },
};

interface Props {
  shot: Shot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tint?: boolean;
  imgClassName?: string;
}

/** Palette-tinted photographic placeholder. Every one is labeled in alt text. */
export function Placeholder({ shot, className = "", sizes = "100vw", priority, tint = true, imgClassName = "" }: Props) {
  const s = shots[shot];
  const pos = /\b(absolute|fixed|sticky)\b/.test(className) ? "" : "relative ";
  return (
    <figure className={`${tint ? "tint " : ""}${pos}overflow-hidden ${className}`} data-placeholder={shot}>
      <Image src={`/img/placeholders/${shot}.jpg`} alt={s.alt} width={s.w} height={s.h} sizes={sizes} priority={priority} className={`h-full w-full object-cover ${imgClassName}`} />
    </figure>
  );
}
