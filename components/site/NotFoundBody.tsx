"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ui } from "@/content/ui";
import { href, langOf } from "@/lib/i18n";

/** 404 copy follows the language of the requested path. Server HTML is English; Spanish paths switch on mount. */
export function NotFoundBody() {
  const lang = langOf(usePathname() ?? "/");
  const t = ui(lang).pages.notFound;
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return (
    <div lang={lang} className="container-x flex min-h-[70vh] flex-col items-start justify-center py-20">
      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] opacity-70">404</p>
      <h1 className="font-display mt-3 text-[2.5rem] leading-tight">{t.title}</h1>
      <p className="mt-4 max-w-[46ch] opacity-80">{t.line}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={href(lang, "/treatments")} className="btn btn-primary">{t.all}</Link>
        <Link href={href(lang, "/")} className="btn btn-outline">{t.home}</Link>
      </div>
    </div>
  );
}
