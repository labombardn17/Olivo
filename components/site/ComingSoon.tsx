import type { Lang } from "@/content/ui";

interface Props {
  /** What the photograph will show, e.g. "Emsculpt Neo" or "Dr. Jacqueline Olivo". */
  label?: string;
  lang?: Lang;
  className?: string;
  kind?: "photo" | "gallery" | "portrait";
  /** Fills a card that draws its own title over the tile: the mark sits higher and the label is omitted. */
  fill?: boolean;
}

const copy = {
  en: { photo: "Photography coming soon", gallery: "Before and after gallery coming soon", portrait: "Portrait coming soon" },
  es: { photo: "Fotografía próximamente", gallery: "Galería de antes y después próximamente", portrait: "Retrato próximamente" },
};

/**
 * A designed placeholder for every photograph until the clinic's photography
 * is shot: palette gradient, a fine aperture mark, and a small caption. No
 * image request, no layout shift, honest about what it is.
 */
export function ComingSoon({ label, lang = "en", className = "", kind = "photo", fill = false }: Props) {
  const pos = /\b(absolute|fixed|sticky)\b/.test(className) ? "" : "relative ";
  return (
    <figure className={`${pos}overflow-hidden soon ${className}`} data-soon={kind} data-soon-fill={fill ? "" : undefined} role="img" aria-label={`${copy[lang][kind]}${label ? `: ${label}` : ""}`}>
      <div className="soon-field" aria-hidden="true" />
      <div className="soon-grid" aria-hidden="true" />
      <div className="soon-inner" aria-hidden="true">
        <svg className="soon-mark" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="24" cy="24" r="21" /><circle cx="24" cy="24" r="8" />
          <path d="M24 3v13M45 24H32M24 45V32M3 24h13" opacity="0.5" />
        </svg>
        <p className="soon-caption">{copy[lang][kind]}</p>
        {label && <p className="soon-label">{label}</p>}
      </div>
    </figure>
  );
}
