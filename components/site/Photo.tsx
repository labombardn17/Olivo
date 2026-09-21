import Image from "next/image";
import { Placeholder, type Shot } from "@/components/shared/Placeholder";
import { liveImage } from "@/lib/live-images";

interface Props {
  slot: string;
  index?: number;
  fallback: Shot;
  alt?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}

/** A clinic photo if the build fetched one for this slot, otherwise a labelled placeholder. */
export function Photo({ slot, index = 0, fallback, alt, className = "", imgClassName = "", sizes = "100vw", priority }: Props) {
  const live = liveImage(slot, index);
  if (!live) return <Placeholder shot={fallback} className={className} imgClassName={imgClassName} sizes={sizes} priority={priority} tint={false} />;
  const pos = /\b(absolute|fixed|sticky)\b/.test(className) ? "" : "relative ";
  return (
    <figure className={`${pos}overflow-hidden ${className}`} data-live={slot}>
      <Image src={live.src} alt={alt ?? live.alt} width={live.width} height={live.height} sizes={sizes} priority={priority} className={`h-full w-full object-cover ${imgClassName}`} />
    </figure>
  );
}
