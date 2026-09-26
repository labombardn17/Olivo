import type { ReactNode } from "react";
import type { Lang } from "@/content/ui";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { TextNow } from "./TextNow";

/** Header, main, footer, and the text bar for one language. */
export function SiteFrame({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <div lang={lang}>
      <a href="#main" className="sr-skip">{lang === "es" ? "Ir al contenido" : "Skip to content"}</a>
      <SiteHeader lang={lang} />
      <main id="main">{children}</main>
      <SiteFooter lang={lang} />
      <TextNow lang={lang} />
    </div>
  );
}
