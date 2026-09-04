import type { ConceptKey } from "@/content/copy";
import { isPaletteKey, resolvePalette, type PaletteKey } from "@/lib/palettes";

export type SearchParams = Promise<Record<string, string | string[] | undefined>>;

/** Next 15: searchParams is a Promise and must be awaited. */
export async function resolvePageParams(searchParams: SearchParams, concept: ConceptKey): Promise<{ palette: PaletteKey; fromUrl: boolean }> {
  const sp = await searchParams;
  const raw = sp.palette;
  const v = Array.isArray(raw) ? raw[0] : raw;
  return { palette: resolvePalette(v, null, concept), fromUrl: isPaletteKey(v) };
}
