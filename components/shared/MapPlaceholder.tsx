import { clinic } from "@/content/olivo";

/** A schematic of the block, palette tinted. Not a map: a drawn placeholder until a static map is licensed. */
export function MapPlaceholder({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative overflow-hidden bg-ground-2 ${className}`} data-map="">
      <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label={`Schematic of ${clinic.address.line1}, ${clinic.address.neighborhood}. Placeholder for a static map.`}>
        <rect width="600" height="400" fill="var(--ground-2)" />
        <g stroke="var(--rule)" strokeWidth="1">
          {[60, 130, 200, 270, 340].map((y) => <line key={y} x1="0" x2="600" y1={y} y2={y} />)}
          {[80, 170, 260, 350, 440, 530].map((x) => <line key={x} x1={x} x2={x} y1="0" y2="400" />)}
        </g>
        <line x1="0" x2="600" y1="200" y2="200" stroke="var(--ink-2)" strokeWidth="2" />
        <line x1="440" x2="440" y1="0" y2="400" stroke="var(--ink-2)" strokeWidth="1.5" />
        <line x1="20" x2="580" y1="60" y2="340" stroke="var(--ink-2)" strokeWidth="1" strokeDasharray="4 4" />
        <g fontFamily="var(--font-text-face)" fontSize="11" fill="var(--ink-2)">
          <text x="12" y="194">W Fullerton Ave</text>
          <text x="446" y="16">N Western Ave</text>
          <text x="268" y="16">N Rockwell St</text>
          <text x="40" y="52">Milwaukee Ave</text>
        </g>
        <circle cx="330" cy="200" r="7" fill="var(--accent-fill)" />
        <circle cx="330" cy="200" r="14" fill="none" stroke="var(--accent-fill)" strokeWidth="1" />
        <text x="344" y="222" fontFamily="var(--font-text-face)" fontSize="12" fill="var(--ink)">2550 W Fullerton</text>
      </svg>
    </figure>
  );
}
