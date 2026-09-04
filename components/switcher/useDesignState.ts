"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ConceptKey } from "@/content/copy";
import {
  HIDDEN_KEY,
  STORAGE_KEY,
  conceptDefaults,
  conceptFromPath,
  groundFor,
  isPaletteKey,
  paletteKeys,
  type PaletteKey,
} from "@/lib/palettes";

export type WipePhase = "idle" | "cover" | "hold" | "reveal";

export interface DesignState {
  concept: ConceptKey | null;
  palette: PaletteKey;
  chosen: boolean;
  hidden: boolean;
  present: boolean;
  notes: boolean;
  open: boolean;
  wipe: { phase: WipePhase; color: string };
  setOpen: (v: boolean) => void;
  setHidden: (v: boolean) => void;
  setPalette: (p: PaletteKey) => void;
  cyclePalette: () => void;
  switchConcept: (c: ConceptKey) => void;
  prefetch: (c: ConceptKey) => void;
  onWipeCovered: () => void;
  onWipeRevealed: () => void;
}

const noop = () => {};
/** Safe default so consumers render during a Suspense fallback (no switcher, no wipe). */
export const defaultDesignState: DesignState = {
  concept: null, palette: "olivo", chosen: false, hidden: true, present: false, notes: false, open: false,
  wipe: { phase: "idle", color: "#000" },
  setOpen: noop, setHidden: noop, setPalette: noop, cyclePalette: noop, switchConcept: noop, prefetch: noop, onWipeCovered: noop, onWipeRevealed: noop,
};

export const DesignContext = createContext<DesignState>(defaultDesignState);

function readStored(): PaletteKey | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return isPaletteKey(v) ? v : null;
  } catch {
    return null;
  }
}

function applyPalette(p: PaletteKey, animate: boolean) {
  const html = document.documentElement;
  if (animate) html.classList.add("palette-transition");
  html.setAttribute("data-palette", p);
  if (animate) window.setTimeout(() => html.classList.remove("palette-transition"), 400);
}

export function useDesignStateValue(): DesignState {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const concept = conceptFromPath(pathname);
  const urlPalette = params.get("palette");
  const present = params.get("present") === "1";
  const notes = params.get("notes") === "1";

  const [palette, setPaletteState] = useState<PaletteKey>(() =>
    isPaletteKey(urlPalette) ? urlPalette : concept ? conceptDefaults[concept] : "olivo",
  );
  const [chosen, setChosen] = useState(false);
  const [hidden, setHiddenState] = useState(false);
  const [open, setOpen] = useState(false);
  const [wipe, setWipe] = useState<{ phase: WipePhase; color: string }>({ phase: "idle", color: "#000" });
  const pending = useRef<{ concept: ConceptKey; palette: PaletteKey } | null>(null);

  // Sync from the DOM after mount (the inline script already resolved it).
  useEffect(() => {
    const dom = document.documentElement.getAttribute("data-palette");
    const stored = readStored();
    const resolved = isPaletteKey(urlPalette) ? urlPalette : stored ?? (isPaletteKey(dom) ? dom : palette);
    setPaletteState(resolved);
    setChosen(stored !== null);
    if (isPaletteKey(urlPalette)) applyPalette(urlPalette, false);
    try {
      setHiddenState(sessionStorage.getItem(HIDDEN_KEY) === "1");
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, urlPalette]);

  const setPalette = useCallback(
    (p: PaletteKey) => {
      setPaletteState(p);
      setChosen(true);
      applyPalette(p, true);
      try {
        localStorage.setItem(STORAGE_KEY, p);
      } catch {}
      const url = new URL(window.location.href);
      url.searchParams.set("palette", p);
      window.history.replaceState(window.history.state, "", url.toString());
    },
    [],
  );

  const cyclePalette = useCallback(() => {
    const i = paletteKeys.indexOf(palette);
    setPalette(paletteKeys[(i + 1) % paletteKeys.length]!);
  }, [palette, setPalette]);

  const setHidden = useCallback((v: boolean) => {
    setHiddenState(v);
    try {
      sessionStorage.setItem(HIDDEN_KEY, v ? "1" : "0");
    } catch {}
  }, []);

  const prefetch = useCallback((c: ConceptKey) => router.prefetch(`/${c}`), [router]);

  const switchConcept = useCallback(
    (c: ConceptKey) => {
      if (c === concept || wipe.phase !== "idle") return;
      const next = chosen ? palette : conceptDefaults[c];
      pending.current = { concept: c, palette: next };
      setOpen(false);
      setWipe({ phase: "cover", color: groundFor(c, next) });
    },
    [concept, chosen, palette, wipe.phase],
  );

  const onWipeCovered = useCallback(() => {
    const p = pending.current;
    if (!p) return;
    setWipe((w) => ({ ...w, phase: "hold" }));
    applyPalette(p.palette, false);
    setPaletteState(p.palette);
    const q = chosen ? `?palette=${p.palette}` : "";
    router.push(`/${p.concept}${q}`);
  }, [router, chosen]);

  // Reveal once the new segment has mounted (pathname changed).
  useEffect(() => {
    const p = pending.current;
    if (p && wipe.phase === "hold" && concept === p.concept) {
      pending.current = null;
      const t = window.setTimeout(() => setWipe((w) => ({ ...w, phase: "reveal" })), 80);
      return () => window.clearTimeout(t);
    }
  }, [concept, wipe.phase]);

  const onWipeRevealed = useCallback(() => setWipe((w) => ({ ...w, phase: "idle" })), []);

  return useMemo(
    () => ({
      concept, palette, chosen, hidden, present, notes, open, wipe,
      setOpen, setHidden, setPalette, cyclePalette, switchConcept, prefetch, onWipeCovered, onWipeRevealed,
    }),
    [concept, palette, chosen, hidden, present, notes, open, wipe, setHidden, setPalette, cyclePalette, switchConcept, prefetch, onWipeCovered, onWipeRevealed],
  );
}

export function useDesignState(): DesignState {
  return useContext(DesignContext);
}
