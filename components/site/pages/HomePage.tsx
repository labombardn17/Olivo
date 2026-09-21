import { HomeHero } from "@/components/site/home/HomeHero";
import { DeviceMarquee, DoctorBlock, ProofStrip, Results, Technology, Testimonials, TreatmentGrid } from "@/components/site/home/HomeSections";
import { MembershipsTeaser, QuizTeaser, VisitBlock } from "@/components/site/home/HomeSections2";
import { CtaBand, FaqList } from "@/components/site/Blocks";
import Quiz from "@/components/quiz/Quiz";
import { faq } from "@/content/featured";
import { faqEs } from "@/content/es/home";
import { ui, type Lang } from "@/content/ui";
import { buildMeta } from "@/lib/meta";

export const homeMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Olivo Med Spa | Med spa en Logan Square, Chicago", description: "Dirigido por una médica desde 2013. Emsculpt Neo, Emface, Exion, Opus Plasma, Miradry, inyectables e Hydrafacial en Logan Square, Chicago. Atención en español.", path: "/", lang }
  : { title: "Olivo Med Spa | Physician-Led Med Spa in Logan Square", description: "Physician owned and led since 2013. Emsculpt Neo, Emface, Exion, Opus Plasma, Miradry, injectables and Hydrafacial under one roof in Logan Square, Chicago.", path: "/", lang });

export function HomePage({ lang }: { lang: Lang }) {
  const t = ui(lang).home;
  return (
    <>
      <HomeHero lang={lang} />
      <DeviceMarquee lang={lang} />
      <ProofStrip lang={lang} />
      <TreatmentGrid lang={lang} />
      <QuizTeaser lang={lang}><Quiz compact lang={lang} /></QuizTeaser>
      <Technology lang={lang} />
      <DoctorBlock lang={lang} />
      <Results lang={lang} />
      <Testimonials lang={lang} />
      <MembershipsTeaser lang={lang} />
      <VisitBlock lang={lang} />
      <FaqList faqs={lang === "es" ? faqEs : faq} lang={lang} />
      <CtaBand title={t.finalTitle} line={t.finalLine} lang={lang} />
    </>
  );
}
