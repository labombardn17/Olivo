// Locale routing. English lives at the root; Spanish mirrors every page under
// /es with Spanish section names and the same item slugs.
import type { Lang } from "@/content/ui";

export type { Lang };

/** English section → Spanish section. Item slugs (emsculpt-neo, bucktown) are shared. */
export const sections: Record<string, string> = {
  treatments: "tratamientos", concerns: "inquietudes", "med-spa": "med-spa", team: "equipo", blog: "diario", about: "nosotros",
  memberships: "membresias", specials: "especiales", financing: "financiamiento", skincare: "cuidado-de-la-piel", results: "resultados",
  reviews: "resenas", visit: "visitanos", contact: "contacto", book: "reservar", quiz: "cuestionario", "for-patients": "para-pacientes",
  "gift-cards": "tarjetas-de-regalo", "site-map": "mapa-del-sitio", privacy: "privacidad", terms: "terminos", accessibility: "accesibilidad",
};
const toEnSection = Object.fromEntries(Object.entries(sections).map(([a, b]) => [b, a]));

/** Path in the other language. "/treatments/emsculpt-neo" ↔ "/es/tratamientos/emsculpt-neo". */
export function altPath(path: string): string {
  const clean = path.replace(/\/$/, "") || "/";
  if (clean === "/") return "/es";
  if (clean === "/es") return "/";
  if (clean.startsWith("/es/")) {
    const [, , sec, ...rest] = clean.split("/");
    return "/" + [toEnSection[sec ?? ""] ?? sec, ...rest].join("/");
  }
  const [, sec, ...rest] = clean.split("/");
  return "/es/" + [sections[sec ?? ""] ?? sec, ...rest].join("/");
}

export function langOf(path: string): Lang {
  return path === "/es" || path.startsWith("/es/") ? "es" : "en";
}

/** Localized href for an English path. */
export function href(lang: Lang, enPath: string): string {
  return lang === "es" ? altPath(enPath) : enPath;
}

/** hreflang map for metadata. */
export function alternates(enPath: string) {
  return { en: enPath, es: altPath(enPath), "x-default": enPath };
}

export const dateLocale: Record<Lang, string> = { en: "en-US", es: "es-US" };
