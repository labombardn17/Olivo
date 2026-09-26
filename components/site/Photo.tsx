import Image from "next/image";
import { ComingSoon } from "./ComingSoon";
import type { Shot } from "@/components/shared/Placeholder";
import type { Lang } from "@/content/ui";
import { photos } from "@/content/photos";

interface Props {
  slot: string;
  index?: number;
  fallback: Shot;
  fallbackSlot?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  lang?: Lang;
  kind?: "photo" | "gallery" | "portrait";
}

/**
 * A photograph for a slot (content/photos.ts), cover-cropped to the box the
 * caller sizes. The coming soon tile remains only as a guard for a slot that
 * has no photograph; every slot on the site has one today.
 */
export function Photo({ slot, alt = "", className = "", imgClassName = "", sizes = "(min-width: 64rem) 50vw, 100vw", priority = false, lang = "en", kind, fallback }: Props) {
  const p = photos[slot];
  if (!p) {
    const fill = /\babsolute\b/.test(className);
    return <ComingSoon label={fill ? undefined : alt} fill={fill} lang={lang} className={className} kind={kind ?? (fallback === "portrait" ? "portrait" : "photo")} />;
  }
  const pos = /\b(absolute|fixed|sticky)\b/.test(className) ? "" : "relative ";
  return (
    <div className={`${pos}overflow-hidden ${className}`}>
      <Image src={p.src} alt={alt} fill sizes={sizes} priority={priority} quality={78} className={`object-cover ${imgClassName}`} style={{ objectPosition: p.focus }} />
    </div>
  );
}
