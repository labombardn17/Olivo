/** "Two / The technology": a spelled running head at the top right of each section, and a folio. */
export function RunningHead({ word, title, folio, below }: { word: string; title: string; folio: string; below?: boolean }) {
  return (
    <>
      <p className={`running-head absolute right-[var(--gutter)] ${below ? "top-28" : "top-8"} hidden md:block`} aria-hidden="true">
        {word} <span className="mx-2 opacity-50">/</span> {title}
      </p>
      <p className="folio absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block" aria-hidden="true">{folio}</p>
    </>
  );
}
