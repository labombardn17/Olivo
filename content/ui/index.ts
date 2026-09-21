import { en } from "./en";
import { enPages } from "./en-pages";
import { es } from "./es";
import { esPages } from "./es-pages";

export type Lang = "en" | "es";
export type Ui = typeof en & { pages: typeof enPages };

const dict: Record<Lang, Ui> = { en: { ...en, pages: enPages }, es: { ...es, pages: esPages } };

export function ui(lang: Lang): Ui {
  return dict[lang];
}
