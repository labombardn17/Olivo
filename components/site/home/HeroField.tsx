import type { Lang } from "@/content/ui";

const copy = { en: "Clinic film coming soon", es: "Video de la clínica próximamente" };

/**
 * The homepage backdrop until the clinic's film is shot: a deep palette field
 * with two slow-drifting lights, a fine grid, and a corner caption. Pure CSS,
 * so the headline is the largest paint and nothing is requested over the wire.
 */
export function HeroField({ lang = "en" }: { lang?: Lang }) {
  return (
    <div className="hero-field absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-field-base" />
      <div className="hero-field-light hero-field-light-a" />
      <div className="hero-field-light hero-field-light-b" />
      <div className="hero-field-grid" />
      <p className="hero-field-caption">{copy[lang]}</p>
    </div>
  );
}
