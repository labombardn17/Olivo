"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { concepts, type ConceptKey } from "@/content/copy";
import { conceptDefaults, isConceptKey, isPaletteKey, palettes, type PaletteKey } from "@/lib/palettes";
import { PaletteDot } from "@/components/switcher/PaletteDot";
import { toolMono } from "@/components/switcher/switcherFont";

function Pane({ label, concept, palette, onConcept, onPalette }: { label: string; concept: ConceptKey; palette: PaletteKey; onConcept: (c: ConceptKey) => void; onPalette: (p: PaletteKey) => void }) {
  return (
    <div className="flex min-h-0 flex-col border border-tool-rule">
      <div className="flex flex-wrap items-center gap-3 border-b border-tool-rule px-3 py-2">
        <span className="opacity-60">{label}</span>
        <select value={concept} onChange={(e) => onConcept(e.target.value as ConceptKey)} aria-label={`${label} concept`} className="border border-tool-rule bg-tool-ground px-2 py-1">
          {concepts.map((c) => <option key={c.key} value={c.key}>{c.number} {c.name}</option>)}
        </select>
        <span className="flex items-center">
          {palettes.map((p) => <PaletteDot key={p.key} palette={p} active={p.key === palette} dark={concept === "cinema"} onSelect={onPalette} size={16} />)}
        </span>
      </div>
      <iframe title={`${label}: ${concept} in ${palette}`} src={`/${concept}?palette=${palette}&present=1`} className="min-h-[70vh] flex-1 w-full bg-ground" />
    </div>
  );
}

/** Two concepts side by side, each with its own palette. Palette in the iframe URL wins, so the panes stay independent. */
export function CompareView() {
  const sp = useSearchParams();
  const a = sp.get("a"), b = sp.get("b"), pa = sp.get("pa"), pb = sp.get("pb");
  const [ca, setCa] = useState<ConceptKey>(isConceptKey(a) ? a : "atelier");
  const [cb, setCb] = useState<ConceptKey>(isConceptKey(b) ? b : "cinema");
  const [ppa, setPa] = useState<PaletteKey>(isPaletteKey(pa) ? pa : conceptDefaults[ca]);
  const [ppb, setPb] = useState<PaletteKey>(isPaletteKey(pb) ? pb : conceptDefaults[cb]);
  return (
    <main className={`${toolMono.className} min-h-screen bg-tool-ground text-tool-ink text-[12px] p-3 md:p-4 flex flex-col gap-3`}>
      <header className="flex items-center justify-between">
        <h1 className="text-[12px] uppercase tracking-[0.12em]">Olivo concepts, side by side</h1>
        <Link href="/" className="underline underline-offset-4">Back to chooser</Link>
      </header>
      <div className="grid gap-3 md:grid-cols-2 flex-1 min-h-0">
        <Pane label="A" concept={ca} palette={ppa} onConcept={(c) => { setCa(c); setPa(conceptDefaults[c]); }} onPalette={setPa} />
        <Pane label="B" concept={cb} palette={ppb} onConcept={(c) => { setCb(c); setPb(conceptDefaults[c]); }} onPalette={setPb} />
      </div>
    </main>
  );
}
