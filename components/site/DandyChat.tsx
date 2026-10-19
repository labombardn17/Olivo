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
      // Tag the widget's fixed root(s) as they appear so CSS can lift them above the text bar on phones.
      const tag = (el: Element) => {
        if (!(el instanceof HTMLElement) || el.closest("[data-concept]") || el.tagName === "SCRIPT") return;
        if (getComputedStyle(el).position === "fixed") el.setAttribute("data-dandy-root", "");
      };
      const mo = new MutationObserver((muts) => muts.forEach((m) => m.addedNodes.forEach((n) => { if (n instanceof Element) tag(n); })));
      mo.observe(document.body, { childList: true });
      window.setTimeout(() => { Array.from(document.body.children).forEach(tag); mo.disconnect(); }, 15000);
    };
    const events = ["pointerdown", "keydown", "touchstart", "wheel", "scroll"] as const;
    const onFirst = () => { events.forEach((e) => window.removeEventListener(e, onFirst)); load(); };
    events.forEach((e) => window.addEventListener(e, onFirst, { passive: true, once: true }));
    const t = window.setTimeout(onFirst, 5000);
    return () => { window.clearTimeout(t); events.forEach((e) => window.removeEventListener(e, onFirst)); };
  }, []);
  return null;
}
