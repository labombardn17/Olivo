import { clinic } from "@/content/olivo";
import { Verify } from "@/lib/verify";

/** Four or six placeholder tiles and the handle. No embed. */
export function InstagramTiles({ count = 6, className = "", tileClassName = "" }: { count?: 4 | 6; className?: string; tileClassName?: string }) {
  return (
    <div className={className} data-instagram="">
      <ul className={`grid gap-px bg-rule ${count === 6 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`} aria-label="Instagram placeholder tiles">
        {Array.from({ length: count }).map((_, i) => (
          <li key={i} className={`aspect-square bg-ground-2 ${tileClassName}`} aria-hidden="true" />
        ))}
      </ul>
      <p className="mt-3 text-[13px] text-ink-2">
        <a href="#follow" className="u-draw text-ink">{clinic.instagram.handle}</a> on Instagram. Tiles are placeholders.
        <Verify note={clinic.instagram.verify} />
      </p>
    </div>
  );
}
