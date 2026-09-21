import Link from "next/link";
import type { Area, Service } from "@/content/types";
import { site } from "@/content/site";
import { getService } from "@/content/services";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeArea, localizeService } from "@/lib/localize";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, LinkCard } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs } from "@/lib/schema";
import { Verify } from "@/lib/verify";
import { Phone, Pin } from "@/components/functional/Icons";

export function AreaTemplate({ a: raw, lang = "en" }: { a: Area; lang?: Lang }) {
  const t = ui(lang);
  const p = t.pages.area;
  const a = localizeArea(raw, lang);
  const list = a.popular.map(getService).filter((s): s is Service => Boolean(s)).map((s) => localizeService(s, lang));
  const L = (x: string) => href(lang, x);
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: t.blocks.home, path: L("/") }, { name: p.visitCrumb, path: L("/visit") }, { name: a.name, path: L(`/med-spa/${a.slug}`) }])} />
      <section data-hero="" className="bg-ground-2">
        <div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.visitCrumb, href: "/visit" }, { name: a.name }]} />
            <p className="kicker mt-6">{p.kicker(a.name)}</p>
            <h1 className="display-xl mt-3 balance">{p.title(a.name, a.travel)}</h1>
            <p className="lede mt-5 max-w-[50ch]">{a.intro[0]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={L(site.booking)} className="btn btn-primary">{t.nav.bookConsult}</a><a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{p.directions}</a></div>
            {a.verify?.map((v) => <Verify key={v} note={v} />)}
          </div>
          <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer"><MapPlaceholder className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" /><span className="sr-only">{t.home.mapLabel}</span></a>
        </div>
      </section>
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="section-title">{p.gettingHere(a.name)}</h2>
            <p className="prose mt-2"><span>{a.route}</span></p>
            <div className="prose">{a.intro.slice(1).map((x) => <p key={x.slice(0, 30)}>{x}</p>)}</div>
            <ul className="mt-6 space-y-2 text-[0.9375rem] text-ink-2">{a.notes.map((n) => <li key={n} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{n}</li>)}</ul>
            <address className="card mt-8 p-6 not-italic">
              <p className="flex items-start gap-3"><Pin className="mt-1.5 h-4 w-4 shrink-0 text-accent-text" /><span className="font-semibold">{site.address.line1}, {site.address.city}, {site.address.state} {site.address.zip}</span></p>
              <p className="mt-2 flex items-center gap-3"><Phone className="h-4 w-4 text-accent-text" /><a href={site.phoneTel} className="hover:underline">{site.phoneDisplay}</a></p>
              <p className="mt-2 text-[0.9375rem] text-ink-2">{p.hoursLine}</p>
            </address>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">{p.bookMost(a.name)}</h2>
            <p className="mt-3 text-[0.9375rem] text-ink-2"><Verify note="'book most' by neighborhood is illustrative; clinic to confirm or reword" />{p.popular}</p>
            <Stagger as="ul" className="mt-8 grid gap-4">{list.map((s) => (<li key={s.slug}><LinkCard lang={lang} href={`/treatments/${s.slug}`} title={s.name} line={s.headline} meta={s.tag} /></li>))}</Stagger>
            <Link href={L("/treatments")} className="link-arrow mt-6 text-[0.9375rem]">{p.allTreatments}</Link>
          </Reveal>
        </div>
      </section>
      <CtaBand title={p.seeYou} line={p.seeYouLine(a.travel, a.name)} lang={lang} />
    </>
  );
}
