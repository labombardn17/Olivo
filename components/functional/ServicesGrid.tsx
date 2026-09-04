import { clinic, devices, featured, fullMenu, sectionCopy } from "@/content/olivo";
import { Placeholder } from "@/components/shared/Placeholder";
import { Verify } from "@/lib/verify";
import { Arrow } from "./Icons";

/** Six outcome-led image cards. Detail lives one click deeper. */
export function ServicesGrid() {
  return (
    <section id="treatments" aria-labelledby="services-title" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="pill">Treatments</span>
          <h2 id="services-title" className="section-title mt-4">{sectionCopy.servicesHeading}</h2>
          <p className="section-sub mx-auto mt-4">{sectionCopy.servicesIntro}<Verify note={sectionCopy.servicesIntroVerify} /></p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f) => (
            <li key={f.slug}>
              <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="group card relative block h-[24rem] overflow-hidden">
                <Placeholder shot={f.shot} className="absolute inset-0 h-full" imgClassName="transition-transform duration-700 group-hover:scale-[1.03]" sizes="(min-width: 64rem) 30vw, (min-width: 40rem) 50vw, 100vw" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-[calc(var(--r-card)-0.25rem)] border border-rule bg-ground/95 p-5 backdrop-blur-sm">
                    <h3 className="font-display text-[1.5rem] leading-tight">{f.title}</h3>
                    <p className="mt-1.5 text-[0.9rem] leading-snug text-ink-2">{f.line}{f.verify && <Verify note={f.verify} />}</p>
                    <p className="mt-2 text-[0.8125rem] text-ink-2">{f.devices.join(" · ")}</p>
                    <span className="link-arrow mt-3 text-[0.875rem]">Book a consultation <Arrow /></span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-[0.9375rem] text-ink-2">
          Also: {fullMenu.slice(0, 8).map((m) => m.name).join(", ")}, and more. <a href="#footer-menu" className="link-arrow">Full menu</a>
        </p>
      </div>
    </section>
  );
}

/** The nine devices as a compact, functional list with one function line each. */
export function TechnologyStrip() {
  return (
    <section id="technology" aria-labelledby="tech-title" className="bg-ground-2 py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <span className="pill">Technology</span>
            <h2 id="tech-title" className="section-title mt-4">{sectionCopy.technologyHeading}</h2>
            <p className="section-sub mt-4">Nine device platforms, named by brand. Most clinics carry two or three.<Verify note="'Most clinics carry two or three' is a comparative claim; confirm or drop" /></p>
            <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-8">Ask which is right for you</a>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {devices.map((d, i) => (
              <li key={d.slug} className="card p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[1.25rem]">{d.name}</h3>
                  <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink-2">{d.family} · 0{i + 1}</span>
                </div>
                <p className="mt-2 text-[0.9rem] leading-snug text-ink-2">{d.fn}{d.verify && <Verify note={d.verify} />}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
