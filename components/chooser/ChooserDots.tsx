"use client";

import { palettes } from "@/lib/palettes";
import { PaletteDot } from "@/components/switcher/PaletteDot";
import { useDesignState } from "@/components/switcher/useDesignState";
import { toolMono } from "@/components/switcher/switcherFont";

/** Palette dots on the chooser: sets the shared palette and previews it on the tiles. */
export function ChooserDots() {
  const { palette, setPalette } = useDesignState();
  const active = palette;
  const choose = setPalette;
  return (
    <div className={`${toolMono.className} flex items-center gap-1 text-[12px]`}>
      <span className="mr-2 text-ink-2">Palette</span>
      {palettes.map((p) => (
        <PaletteDot key={p.key} palette={p} active={p.key === active} onSelect={choose} />
      ))}
    </div>
  );
}
