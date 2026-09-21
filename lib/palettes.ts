import type { ConceptKey } from "@/content/copy";

export type PaletteKey = "noir" | "orchid" | "olivo" | "champagne" | "glacier";

export interface Palette {
  key: PaletteKey;
  name: string;
  mood: string;
  /** Light ground and dark ground, used for switcher dots and the wipe. */
  light: string;
  dark: string;
  accent: string;
}

export const palettes: Palette[] = [
  { key: "noir", name: "Noir", mood: "Black and white", light: "#f5f3ef", dark: "#0b0b0c", accent: "#0b0b0c" },
  { key: "orchid", name: "Orchid", mood: "Purplish and white", light: "#fbf9fc", dark: "#1a1220", accent: "#6e4b8f" },
  { key: "olivo", name: "Olivo", mood: "Olive, bone, brass", light: "#efeae0", dark: "#151812", accent: "#5b6b3a" },
  { key: "champagne", name: "Champagne", mood: "Espresso, ivory, gold", light: "#f6f1e8", dark: "#1a1512", accent: "#b89a6a" },
  { key: "glacier", name: "Glacier", mood: "Slate, ice, pewter", light: "#f1f1ee", dark: "#0f151b", accent: "#3a5a73" },
];

export const paletteKeys = palettes.map((p) => p.key);

export const conceptDefaults: Record<ConceptKey, PaletteKey> = {
  atelier: "olivo",
  cinema: "champagne",
  precision: "glacier",
  residence: "champagne",
  current: "orchid",
};

export const conceptKeys: ConceptKey[] = ["atelier", "cinema", "precision", "residence", "current"];

export const STORAGE_KEY = "olivo.palette";
export const HIDDEN_KEY = "olivo.switcher.hidden";

export function isPaletteKey(v: unknown): v is PaletteKey {
  return typeof v === "string" && (paletteKeys as string[]).includes(v);
}

export function isConceptKey(v: unknown): v is ConceptKey {
  return typeof v === "string" && (conceptKeys as string[]).includes(v);
}

/** URL wins, else stored, else concept default. */
export function resolvePalette(
  param: string | string[] | undefined,
  stored: string | null,
  concept: ConceptKey | null,
): PaletteKey {
  const p = Array.isArray(param) ? param[0] : param;
  if (isPaletteKey(p)) return p;
  if (isPaletteKey(stored)) return stored;
  return concept ? conceptDefaults[concept] : "orchid";
}

/** Ground color the wipe overlay uses for a concept and palette. */
export function groundFor(concept: ConceptKey, palette: PaletteKey): string {
  const p = palettes.find((x) => x.key === palette) ?? palettes[0]!;
  return concept === "cinema" ? p.dark : p.light;
}

export function conceptFromPath(pathname: string): ConceptKey | null {
  const seg = pathname.split("/")[1] ?? "";
  return isConceptKey(seg) ? seg : null;
}

/** Inline, blocking script: sets data-palette before first paint. */
export const paletteInitScript = `(function(){try{var d=${JSON.stringify(conceptDefaults)};var k=${JSON.stringify(paletteKeys)};var bp='${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}';var pn=location.pathname;if(bp&&pn.indexOf(bp)===0)pn=pn.slice(bp.length);var seg=pn.split('/')[1]||'';var q=new URLSearchParams(location.search).get('palette');var s=null;try{s=localStorage.getItem('${STORAGE_KEY}')}catch(e){}var p=(q&&k.indexOf(q)>-1)?q:(s&&k.indexOf(s)>-1)?s:(d[seg]||'orchid');document.documentElement.setAttribute('data-palette',p);}catch(e){document.documentElement.setAttribute('data-palette','orchid')}})();`;
