import { Crumbs } from "./Blocks";
import { site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { legalEs } from "@/content/es/legal";
import { Verify } from "@/lib/verify";

const pagesEn = {
  privacy: { title: "Privacy policy", updated: "September 2026", sections: [
    ["What we collect", ["When you book through Vagaro, text or call the clinic, or take the treatment quiz, we may receive your name, contact details, and the treatments you are interested in. The quiz stores nothing on our servers; your answers stay in your browser session.", "Clinical information you share with the practice is handled as medical information under applicable law and is kept separately from website analytics."]],
    ["How we use it", ["To respond to you, schedule and confirm visits, send appointment reminders you have agreed to, and improve the site. We do not sell personal information."]],
    ["Third parties", ["Vagaro (booking), Cherry (financing), RepeatMD (memberships), Google (maps and analytics) each have their own privacy policies. Links to them are provided where they are used."]],
    ["Your choices", ["You can ask us to correct or delete contact information we hold for marketing by calling 872-315-3481. Text STOP to any clinic text message to stop receiving texts."]],
  ]},
  terms: { title: "Terms of use", updated: "September 2026", sections: [
    ["Educational content", ["Everything on this site is general information about treatments offered at Olivo Med Spa. It is not medical advice and does not create a patient relationship. Candidacy, risks, and expectations are set at an in-person consultation with the clinical team."]],
    ["Results", ["Individual results vary. Any images or testimonials shown reflect one person's experience and are not a promise of outcome."]],
    ["Trademarks", ["Emsculpt Neo, Emface, Exion, Emsella, Emfemme 360, Opus, Miradry, Hydrafacial, Botox Cosmetic, Xeomin, Revanesse, Belotero, Radiesse, Kybella, Alastin, ZO Skin Health, and Skinbetter Science are trademarks of their respective owners."]],
    ["Booking and financing", ["Online booking is provided by Vagaro and financing by Cherry under their own terms. Olivo Med Spa does not set financing terms."]],
  ]},
  accessibility: { title: "Accessibility statement", updated: "September 2026", sections: [
    ["Our commitment", ["We want everyone to be able to use this site and visit the clinic. The site is built to WCAG 2.2 AA: keyboard operable, screen-reader labelled, with visible focus, sufficient contrast, and motion that respects your reduced-motion setting."]],
    ["The clinic", ["2550 W. Fullerton Ave is at street level. If you need a specific accommodation for your visit, call ahead and we will arrange it."]],
    ["Tell us", ["If something on this site is hard to reach or use, call or text 872-315-3481 and we will help and fix it."]],
  ]},
} as const;

export type LegalKind = keyof typeof pagesEn;

const metaEn: Record<LegalKind, [string, string]> = {
  privacy: ["Privacy Policy | Olivo Med Spa", "How Olivo Med Spa in Logan Square, Chicago handles information collected through this website and by phone, text, and online booking."],
  terms: ["Terms of Use | Olivo Med Spa", "Terms of use for the Olivo Med Spa website, including that site content is educational and not a substitute for a consultation."],
  accessibility: ["Accessibility Statement | Olivo Med Spa", "Olivo Med Spa's commitment to an accessible website and clinic in Logan Square, Chicago, and how to reach us if something is hard to use."],
};
const metaEs: Record<LegalKind, [string, string]> = {
  privacy: ["Aviso de privacidad | Olivo Med Spa", "Cómo maneja Olivo Med Spa en Logan Square, Chicago, la información recibida a través de este sitio, por teléfono, por mensaje de texto y por reservas en línea."],
  terms: ["Términos de uso | Olivo Med Spa", "Términos de uso del sitio de Olivo Med Spa: el contenido es educativo y no sustituye una consulta con el equipo médico."],
  accessibility: ["Declaración de accesibilidad | Olivo Med Spa", "El compromiso de Olivo Med Spa con un sitio y una clínica accesibles en Logan Square, Chicago, y cómo avisarnos si algo resulta difícil de usar."],
};

export const legalMeta = (kind: LegalKind, lang: Lang) => (lang === "es" ? metaEs : metaEn)[kind];

export function LegalPage({ kind, lang = "en" }: { kind: LegalKind; lang?: Lang }) {
  const t = ui(lang);
  const p = lang === "es" ? legalEs[kind] : pagesEn[kind];
  return (
    <section className="py-12 md:py-20">
      <div className="container-x mx-auto max-w-3xl">
        <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.title }]} />
        <h1 className="section-title mt-8">{p.title}</h1>
        <p className="mt-3 text-[0.9375rem] text-ink-2">{site.legalName}. {t.pages.legal.updated(p.updated)}<Verify note="Legal pages: counsel to review before launch" /></p>
        <div className="prose mt-8">
          {p.sections.map(([h, ps]) => (<div key={h}><h2>{h}</h2>{ps.map((x) => <p key={x}>{x}</p>)}</div>))}
        </div>
      </div>
    </section>
  );
}
