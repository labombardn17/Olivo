import Link from "next/link";
import type { Service } from "@/content/types";
import { categoryByKey, site } from "@/content/site";
import { getService } from "@/content/services";
import { concerns } from "@/content/concerns";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Drift, Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, FaqList, LinkCard, Steps } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs, faqSchema, serviceSchema } from "@/lib/schema";
import { Verify } from "@/lib/verify";
import { Arrow, Check, Phone } from "@/components/functional/Icons";

const defaultSteps = (name: string) => [
  { step: "Consultation", line: "A conversation with the clinical team about what you want to change, a candidacy check, and a written plan." },
  { step: "Treatment", line: `A ${name} session in the clinic, on the schedule the plan sets.` },
  { step: "Aftercare", line: "Plain-language instructions and a number to call or text." },
  { step: "Follow-up", line: "A check on the result and what, if anything, comes next." },
];

export function ServiceTemplate({ s }: { s: Service }) {
  const cat = categoryByKey(s.category);
  const related = s.related.map(getService).filter((x): x is Service => Boolean(x));
  const concernList = concerns.filter((c) => s.concerns.includes(c.slug));
  const sms = `Hi Olivo, I am interested in ${s.name}. Can we set up a consultation?`;
  return (
    <>
      <JsonLd data={[serviceSchema(s), faqSchema(s.faqs), breadcrumbs([{ name: "Home", path: "/" }, { name: "Treatments", path: "/treatments" }, { name: cat.name, path: `/treatments/${cat.key}` }, { name: s.name, path: `/treatments/${s.slug}` }])]} />
      <section data-hero="" aria-labelledby="svc-title" className="bg-ground-2">
        <div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <Crumbs items={[{ name: "Home", href: "/" }, { name: "Treatments", href: "/treatments" }, { name: cat.name, href: `/treatments/${cat.key}` }, { name: s.name }]} />
            <p className="pill mt-6">{s.brand ? `${s.brand} · ` : ""}{s.tag}</p>
            <h1 id="svc-title" className="display-xl mt-4 balance">{s.name}</h1>
            <p className="lede mt-5 max-w-[50ch]">{s.headline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.booking} data-cta="primary" className="btn btn-primary">Book {s.name}</a>
              <a href={site.sms(sms)} className="btn btn-outline">Text us about it</a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-5 border-t border-rule pt-6 sm:grid-cols-4">
              {[["Session", s.session.duration], ["Plan", s.session.sessions], ["Downtime", s.session.downtime], ["Where", "Logan Square"]].map(([k, v]) => (<div key={k}><dt className="kicker !text-ink-2">{k}</dt><dd className="mt-1 text-[0.9375rem] font-semibold leading-snug">{v}</dd></div>))}
            </dl>
            <p className="mt-3 text-[0.8125rem] text-ink-2">Facts describe a typical plan. Candidacy and expectations are set at consultation.{s.session.verify && <Verify note={s.session.verify} />}</p>
          </div>
          <Drift className="img-frame shadow-[var(--shadow-card-hover)]"><Photo slot={s.image.slot} fallbackSlot={cat.slot} fallback={s.image.fallback} alt={s.image.alt} className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" sizes="(min-width: 64rem) 50vw, 100vw" priority /></Drift>
        </div>
      </section>

      <section aria-labelledby="about-title" className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <p className="kicker">About the treatment</p>
            <h2 id="about-title" className="section-title mt-3 balance">{s.summary.split(". ")[0]}.</h2>
            <div className="prose">{s.intro.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}</div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{s.benefits.map((b) => (<li key={b} className="flex items-start gap-3 text-[0.9375rem]"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{b}</li>))}</ul>
            {concernList.length > 0 && <p className="mt-8 text-[0.9375rem] text-ink-2">Often chosen for: {concernList.map((c, i) => (<span key={c.slug}>{i > 0 && ", "}<Link href={`/concerns/${c.slug}`} className="link-arrow">{c.name.toLowerCase()}</Link></span>))}.</p>}
            {s.verify?.map((v) => <Verify key={v} note={v} />)}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card sticky top-28 p-7">
              <p className="kicker">What it feels like</p>
              <p className="mt-2 leading-relaxed">{s.session.feels}</p>
              <p className="kicker mt-6">When people notice change</p>
              <p className="mt-2 leading-relaxed">{s.session.results}</p>
              <p className="kicker mt-6">Good candidates</p>
              <ul className="mt-2 space-y-2 text-[0.9375rem]">{s.goodFor.map((g) => (<li key={g} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{g}</li>))}</ul>
              <a href={site.booking} className="btn btn-primary mt-7 w-full">Book a consultation</a>
              <a href={site.phoneTel} className="btn btn-outline mt-3 w-full"><Phone />{site.phoneDisplay}</a>
              <p className="mt-4 text-center text-[0.8125rem] text-ink-2">Individual results vary.</p>
              <Link href="/quiz" className="mt-5 block rounded-[var(--r-card)] bg-ground-2 p-4 text-[0.875rem] hover:ring-soft"><span className="font-semibold">Not sure this is the one?</span><br /><span className="text-ink-2">Take the two-minute treatment quiz.</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ground-2 py-20 md:py-24">
        <div className="container-x grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal><Steps steps={defaultSteps(s.name)} /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Often paired with</h2>
            <Stagger as="ul" className="mt-8 grid gap-4">{related.map((r) => (<li key={r.slug}><LinkCard href={`/treatments/${r.slug}`} title={r.name} line={r.headline} meta={categoryByKey(r.category).name} /></li>))}</Stagger>
            <Link href={`/treatments/${cat.key}`} className="link-arrow mt-6 text-[0.9375rem]">All {cat.name.toLowerCase()} <Arrow /></Link>
          </Reveal>
        </div>
      </section>
      <FaqList faqs={s.faqs} title={`${s.name}, answered`} />
      <CtaBand title={`Ask about ${s.name}.`} line="Book online any time, or text us and the team will reply during clinic hours." sms={sms} />
    </>
  );
}
