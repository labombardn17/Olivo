import { doctor, sectionCopy, team } from "@/content/olivo";
import { Placeholder } from "@/components/shared/Placeholder";
import { Verify } from "@/lib/verify";

/** Meet Dr. Olivo: portrait, story, credentials, the quote, and the team. */
export function Doctor({ dark = false }: { dark?: boolean }) {
  return (
    <section id="doctor" aria-labelledby="doctor-title" className={`${dark ? "inverse" : ""} py-20 md:py-28`}>
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Placeholder shot="portrait" className="img-frame aspect-[4/5] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 52rem) 50vw, 100vw" />
        <div>
          <span className="pill">Physician owned and led</span>
          <h2 id="doctor-title" className="section-title mt-4">{sectionCopy.doctorHeading}</h2>
          <p className="mt-2 text-[1.0625rem] text-ink-2">{doctor.name}. {doctor.role}.</p>
          <blockquote className="font-display mt-6 text-[1.6rem] italic leading-tight">&ldquo;{doctor.quote}&rdquo;</blockquote>
          <p className="mt-6 leading-relaxed text-ink-2">{doctor.bio}<Verify note={doctor.bioVerify} /></p>
          <ul className="mt-6 space-y-1.5 text-[0.9375rem]">
            {doctor.credentials.map((c) => <li key={c}>{c}</li>)}
            <li>{doctor.boardLine}<Verify note={doctor.boardVerify} /></li>
          </ul>
          <p className="mt-6 text-[0.9375rem] text-ink-2">With {team.slice(1).map((t) => t.name).join(", ")}.</p>
          <a href="#doctor" className="btn btn-outline mt-8">Read her full bio</a>
        </div>
      </div>
    </section>
  );
}
