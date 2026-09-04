"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { clinic, cta, nav } from "@/content/olivo";
import { Verify } from "@/lib/verify";

interface Props {
  /** Class for the trigger button. */
  triggerClassName?: string;
  /** Class for the full-screen panel. */
  panelClassName?: string;
  linkClassName?: string;
  label?: string;
  wordmark?: React.ReactNode;
}

/**
 * Full-screen mobile menu with large type. Radix Dialog for focus trapping
 * and Escape handling only; every visual decision is the concept's. No
 * portal, so the concept's font variables and CSS still apply.
 */
export function MobileMenu({ triggerClassName = "", panelClassName = "", linkClassName = "", label = "Menu", wordmark }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger data-nav-toggle="" className={`md:hidden ${triggerClassName}`} aria-label="Open menu">
        {label}
      </Dialog.Trigger>
      <Dialog.Content className={`fixed inset-0 z-[78] flex flex-col overflow-y-auto bg-ground text-ink ${panelClassName}`} data-mobile-menu="" aria-describedby={undefined}>
          <div className="flex items-center justify-between px-5 pt-5">
            <Dialog.Title className="font-display text-2xl">{wordmark ?? clinic.wordmark}</Dialog.Title>
            <Dialog.Close className="text-[13px] uppercase tracking-[0.1em]" aria-label="Close menu">Close</Dialog.Close>
          </div>
          <nav className="flex flex-1 flex-col justify-center px-5 py-10" aria-label="Mobile">
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setOpen(false)} className={`block font-display text-[2.6rem] leading-[1.05] ${linkClassName}`}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-5 pb-24 flex flex-col gap-4 text-[14px]">
            <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="inline-flex justify-center px-6 py-4 bg-ink text-ground">{cta.primary}</a>
            <div className="flex items-center justify-between text-ink-2">
              <a href={clinic.phoneTel} className="u-draw">{clinic.phoneDisplay}</a>
              <span aria-label="Language, English selected">EN <span>/ ES</span><Verify note={clinic.language.verify} /></span>
            </div>
          </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
