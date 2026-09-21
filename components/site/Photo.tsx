import { ComingSoon } from "./ComingSoon";
import type { Shot } from "@/components/shared/Placeholder";
import type { Lang } from "@/content/ui";

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
 * Every photo slot on the public site renders a designed "coming soon" tile
 * until the clinic's photography is delivered. The slot and alt are kept so
 * real images drop in later without touching the pages.
 */
export function Photo({ alt, className = "", lang = "en", kind, fallback }: Props) {
  // A tile that fills a card sits under the card's own title, so it carries no label of its own.
  const fill = /\babsolute\b/.test(className);
  return <ComingSoon label={fill ? undefined : alt} fill={fill} lang={lang} className={className} kind={kind ?? (fallback === "portrait" ? "portrait" : "photo")} />;
}
