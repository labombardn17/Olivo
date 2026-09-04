"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { concepts } from "@/content/copy";
import { palettes } from "@/lib/palettes";
import { PaletteDot } from "./PaletteDot";
import { useDesignState } from "./useDesignState";
import { toolMono } from "./switcherFont";

function isTyping(el: Element | null): boolean {
  if (!el) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (el as HTMLElement).isContentEditable;
}

export function DesignSwitcher() {
  const s = useDesignState();
  const panelRef = useRef<HTMLDivElement>(null);
  const { concept, palette, open, setOpen, hidden, setHidden, present, notes, switchConcept, setPalette, cyclePalette, prefetch } = s;

  useEffect(() => {
    if (present) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      if (isTyping(document.activeElement)) return;
      const k = e.key;
      if (k >= "1" && k <= "5") {
        const c = concepts[Number(k) - 1];
        if (c) switchConcept(c.key);
      } else if (k === "p" || k === "P") cyclePalette();
      else if (k === "h" || k === "H") setHidden(!hidden);
      else if (k === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [present, hidden, switchConcept, cyclePalette, setHidden, setOpen]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open, setOpen]);

  if (present || hidden) return null;

  const current = concepts.find((c) => c.key === concept);
  const mailto = `mailto:?subject=${encodeURIComponent(`Olivo concept feedback: ${current?.name ?? "chooser"} / ${palette}`)}&body=${encodeURIComponent(`Concept: ${current?.name ?? "chooser"}\nPalette: ${palette}\nURL: ${typeof window !== "undefined" ? window.location.href : ""}\n\nNotes:\n`)}`;

  return (
    <div
      ref={panelRef}
      data-switcher=""
      className={`${toolMono.className} fixed z-[80] left-4 bottom-4 md:left-6 md:bottom-6 text-tool-ink`}
      style={{ fontSize: 12, lineHeight: 1.4 }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            role="dialog"
            aria-label="Design switcher"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 md:absolute md:inset-x-auto md:bottom-[calc(100%+10px)] md:left-0 md:w-[272px] bg-tool-ground border border-tool-rule md:rounded-2 shadow-[0_2px_20px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-tool-rule">
              <span className="uppercase tracking-[0.12em] text-[10px] opacity-70">Olivo concepts</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Collapse" className="px-1">Esc</button>
            </div>
            <ol className="py-1">
              {concepts.map((c) => {
                const active = c.key === concept;
                return (
                  <li key={c.key}>
                    <button
                      type="button"
                      onClick={() => switchConcept(c.key)}
                      onPointerEnter={() => prefetch(c.key)}
                      onFocus={() => prefetch(c.key)}
                      aria-current={active ? "page" : undefined}
                      className="w-full flex items-baseline gap-3 px-4 py-2 md:py-1.5 text-left hover:bg-[#efebe3]"
                    >
                      <span className="opacity-50 tabular-nums">{c.number}</span>
                      <span className={active ? "underline underline-offset-4 decoration-1" : ""}>{c.name}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="flex items-center gap-0.5 px-3 pb-3 pt-1 border-t border-tool-rule">
              {palettes.map((p) => (
                <PaletteDot key={p.key} palette={p} active={p.key === palette} dark={concept === "cinema"} onSelect={setPalette} />
              ))}
              <span className="ml-auto opacity-60 pr-1">{palette}</span>
            </div>
            {notes && (
              <div className="px-4 pb-3 -mt-1">
                <a href={mailto} className="underline underline-offset-4 decoration-1">Note on this concept</a>
              </div>
            )}
            <div className="px-4 pb-3 text-[10px] opacity-50 hidden md:block">1 to 5 concepts, P palette, H hide, Esc close</div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Collapse design switcher" : "Open design switcher"}
        className="grid place-items-center rounded-full bg-tool-ground text-tool-ink border border-tool-rule w-14 h-14 md:w-11 md:h-11 shadow-[0_1px_8px_rgba(0,0,0,0.14)]"
      >
        <span aria-hidden="true" className="block rounded-full border-[1.5px] border-tool-ink w-[18px] h-[18px]" />
      </button>
    </div>
  );
}
