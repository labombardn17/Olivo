"use client";

import type { Palette } from "@/lib/palettes";

interface Props {
  palette: Palette;
  active: boolean;
  dark?: boolean;
  onSelect: (key: Palette["key"]) => void;
  size?: number;
}

/** A two-tone dot: ground on the left, accent on the right. Active state is a hairline ring. */
export function PaletteDot({ palette, active, dark, onSelect, size = 22 }: Props) {
  const ground = dark ? palette.dark : palette.light;
  return (
    <button
      type="button"
      onClick={() => onSelect(palette.key)}
      aria-label={`Palette: ${palette.name}`}
      aria-pressed={active}
      title={`${palette.name}: ${palette.mood}`}
      className="relative grid place-items-center rounded-full"
      style={{ width: size + 12, height: size + 12 }}
    >
      <span
        aria-hidden="true"
        className="block rounded-full"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(90deg, ${ground} 50%, ${palette.accent} 50%)`,
          boxShadow: active ? `0 0 0 3px #f7f4ee, 0 0 0 4px #141414` : `0 0 0 1px #d8d3c9`,
        }}
      />
    </button>
  );
}
