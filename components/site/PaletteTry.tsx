"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/content/ui";
import { STORAGE_KEY } from "@/lib/palettes";

type Key = "orchid" | "olivo";
const options: { key: Key; dot: string; label: Record<Lang, string> }[] = [
  { key: "orchid", dot: "#6e4b8f", label: { en: "Orchid", es: "Orquídea" } },
  { key: "olivo", dot: "#4a5a2e", label: { en: "Olive", es: "Oliva" } },
];

/**
 * Review-only colour switch for the public site: orchid (current) or olive
 * (the flash sale creative). The choice persists in localStorage and the
 * blocking script in RootShell applies it before first paint on every page.
 */
export function PaletteTry({ lang = "en" }: { lang?: Lang }) {
  const [current, setCurrent] = useState<Key>("orchid");
  useEffect(() => {
    const v = document.documentElement.getAttribute("data-palette");
    if (v === "olivo" || v === "orchid") setCurrent(v);
  }, []);
  const pick = (key: Key) => {
    document.documentElement.setAttribute("data-palette", key);
    try { localStorage.setItem(STORAGE_KEY, key); } catch { /* storage may be blocked */ }
    setCurrent(key);
  };
  return (
    <div className="palette-try" role="group" aria-label={lang === "es" ? "Probar colores" : "Try colours"}>
      {options.map((o) => (
        <button key={o.key} type="button" onClick={() => pick(o.key)} aria-pressed={current === o.key} className="palette-try-btn">
          <span className="palette-try-dot" style={{ background: o.dot }} aria-hidden="true" />
          {o.label[lang]}
        </button>
      ))}
    </div>
  );
}
