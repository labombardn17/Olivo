import Quiz from "@/components/quiz/Quiz";
import { Crumbs } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";

export const metadata = buildMeta({ title: "Treatment Quiz | Which Treatment Is Right for Me? | Olivo Med Spa", description: "Answer five questions and get up to three treatments to read about, then text your results to Olivo Med Spa in Logan Square, Chicago with one tap.", path: "/quiz" });

export default function QuizPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-x mx-auto max-w-3xl">
        <Crumbs items={[{ name: "Home", href: "/" }, { name: "Treatment quiz" }]} />
        <p className="kicker mt-8">Two minutes</p>
        <h1 className="section-title mt-3 balance">Tell us what you would change. We will point you somewhere useful.</h1>
        <p className="lede mt-4 max-w-[52ch]">Five questions, no email required. You get up to three treatments to read about and a text you can send us with one tap.</p>
        <div className="card mt-10 p-6 md:p-10"><Quiz /></div>
      </div>
    </section>
  );
}
