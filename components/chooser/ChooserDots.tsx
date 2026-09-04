"use client";

import { palettes, type PaletteKey } from "@/lib/palettes";
import { PaletteDot } from "@/components/switcher/PaletteDot";
import { useDesignState } from "@/components/switcher/useDesignState";
import { toolMono } from "@/components/switcher/switcherFont";
import { useRouter } from "next/navigation";

/** Palette dots on the chooser: sets the shared palette and previews it on the tiles. */
export function ChooserDots({ initial }: { initial: PaletteKey | null }) {
  const { palette, setPalette } = useDesignState();
  const router = useRouter();
  const active = initial ?? palette;
  const choose = (k: PaletteKey) => {
    setPalette(k);
    router.replace(`/?palette=${k}`, { scroll: false });
  };
  return (
    <div className={`${toolMono.className} flex items-center gap-1 text-[12px]`}>
      <span className="mr-2 text-ink-2">Palette</span>
      {palettes.map((p) => (
        <PaletteDot key={p.key} palette={p} active={p.key === active} onSelect={choose} />
      ))}
    </div>
  );
}
