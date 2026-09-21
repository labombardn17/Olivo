import { HomeHero } from "@/components/site/home/HomeHero";
import { DeviceMarquee, DoctorBlock, ProofStrip, Results, Technology, Testimonials, TreatmentGrid } from "@/components/site/home/HomeSections";
import { MembershipsTeaser, QuizTeaser, VisitBlock } from "@/components/site/home/HomeSections2";
import { CtaBand, FaqList } from "@/components/site/Blocks";
import Quiz from "@/components/quiz/Quiz";
import { faq } from "@/content/featured";
import { buildMeta } from "@/lib/meta";

export const metadata = buildMeta({
  title: "Olivo Med Spa | Physician-Led Med Spa in Logan Square, Chicago",
  description: "Physician owned and led since 2013. Emsculpt Neo, Emface, Exion, Opus Plasma, CO2 laser, Miradry, injectables and Hydrafacial under one roof at 2550 W. Fullerton, Logan Square, Chicago.",
  path: "/",
  languages: { en: "/", es: "/es", "x-default": "/" },
});

export default function Home() {
  return (
    <>
      <HomeHero />
      <DeviceMarquee />
      <ProofStrip />
      <TreatmentGrid />
      <QuizTeaser><Quiz compact /></QuizTeaser>
      <Technology />
      <DoctorBlock />
      <Results />
      <Testimonials />
      <MembershipsTeaser />
      <VisitBlock />
      <FaqList faqs={faq} />
      <CtaBand title="We would love to see you." line="Book a consultation online any time, text us, or call the clinic during hours." />
    </>
  );
}
