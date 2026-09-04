"use client";

import { useEffect } from "react";
import type { PaletteKey } from "@/lib/palettes";

/**
 * The page server-renders the palette it resolved from searchParams. On client
 * navigation with an explicit ?palette= the inline head script does not run
 * again, so this applies the URL palette after mount.
 */
export function PaletteSync({ palette, fromUrl }: { palette: PaletteKey; fromUrl: boolean }) {
  useEffect(() => {
    if (fromUrl) document.documentElement.setAttribute("data-palette", palette);
  }, [palette, fromUrl]);
  return null;
}
