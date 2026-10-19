"use client";

import { useEffect } from "react";

const SRC = "https://widget.chat.getdandy.com/widget/widget.js";

/**
 * GetDandy WebChat, installed at the client's request. The script is injected
 * after the first interaction or five seconds idle so it never competes with
 * the first paint, and never on data saver. Loaded once per page lifetime.
 * On phones its fixed root is lifted above the Text, Call, Book bar.
 */
export function DandyChat() {
  useEffect(() => {
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    if (nav.connection?.saveData) return;
    let done = false;
    const load = () => {
      if (done || document.querySelector(`script[src="${SRC}"]`)) return;
      done = true;
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      document.body.appendChild(s);
      document.documentElement.setAttribute("data-chat", "on");
      // Lift the widget above the Text, Call, Book bar on phones: tag every
      // fixed-position element the widget adds (it may sit inside a static
      // wrapper or an open shadow root), rescanning as the widget builds itself.
      const ours = (el: Element) => Boolean(el.closest("[data-concept]"));
      const phone = () => window.matchMedia("(max-width: 47.98rem)").matches;
      const lift = "calc(5.5rem + env(safe-area-inset-bottom))";
      const tag = (el: Element, insideFixed = false) => {
        if (!(el instanceof HTMLElement) || ours(el) || /^(SCRIPT|STYLE|LINK)$/.test(el.tagName)) return;
        let fixed = insideFixed;
        if (!insideFixed && getComputedStyle(el).position === "fixed") {
          fixed = true;
          el.setAttribute("data-dandy-root", "");
          // Inline so it also reaches launchers rendered inside a shadow root, where page CSS cannot.
          if (phone()) el.style.setProperty("bottom", lift, "important");
        }
        const kids = [...el.children, ...(el.shadowRoot ? Array.from(el.shadowRoot.children) : [])];
        kids.forEach((k) => tag(k, fixed));
      };
      const scan = () => Array.from(document.body.children).forEach(tag);
      let pending = 0;
      const mo = new MutationObserver(() => { if (!pending) pending = window.setTimeout(() => { pending = 0; scan(); }, 150); });
      mo.observe(document.body, { childList: true, subtree: true });
      [1000, 3000, 8000].forEach((ms) => window.setTimeout(scan, ms));
      window.setTimeout(() => { scan(); mo.disconnect(); }, 20000);
    };
    const events = ["pointerdown", "keydown", "touchstart", "wheel", "scroll"] as const;
    const onFirst = () => { events.forEach((e) => window.removeEventListener(e, onFirst)); load(); };
    events.forEach((e) => window.addEventListener(e, onFirst, { passive: true, once: true }));
    const t = window.setTimeout(onFirst, 5000);
    return () => { window.clearTimeout(t); events.forEach((e) => window.removeEventListener(e, onFirst)); };
  }, []);
  return null;
}
