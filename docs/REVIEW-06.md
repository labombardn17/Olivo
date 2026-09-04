# REVIEW-06: The functional rebuild

Direction from Nate after the first five concepts shipped: "These are terrible. They need to be more functional home pages like Ariava.com." The reference he linked (medspa-design-center.vercel.app) is unreachable from the build environment and is not in his GitHub, so the rebuild is modelled on Ariava's source, which is in his GitHub and was read in full.

## What Ariava's homepage does, in order

Sticky white header (logo, nav with a dropdown, phone, Book button), photo hero with a pill eyebrow, one display headline, one subline, two buttons and small membership and financing links, a trust bar with stars, before and after preview, six image service cards with a white overlay panel, review cards, packages and memberships with a toggle, the family story, locations, final CTA, footer, and a floating Book button on desktop with a Call / Book bar on mobile.

## What changed

1. One shared functional page (`components/functional/`) built section for section on that order: `SiteHeader`, `Hero` (five variants), `TrustBar`, `ServicesGrid` (six outcome-led cards), `TechnologyStrip` (the nine devices as compact cards), `ResultsPreview`, `Reviews`, `Memberships`, `Doctor`, `Visit`, `Faq`, `FinalCta`, `FloatingCta`, `SiteFooter`, plus a functional `ServicePage` for the interior route.
2. The five concepts became five skins on that page: fonts, palette default, corner radius, button shape, hero variant (photo, film, split with facts, framed, color block), and which sections run dark. The design switcher, palettes, and deep links are unchanged.
3. The anti-template rules that fought this direction were retired: cards, pills, shadows, rounded corners and centered section heads are now allowed; the audit still enforces fonts, Tailwind default colors, banned copy, claims, and the 25 contrast pairs.
4. The former signature moments (pinned spreads, horizontal gallery, hotspots, peeling cards) were removed with their components. They remain in git history before commit "Functional rebuild".

## Checks on the rebuild

- Placeholder rating and reviews are literal placeholders; no fabricated rating or count.
- Every unsourced claim still carries a VERIFY comment (new ones: who performs treatments, consultation policy, membership terms, the "most clinics carry two or three" comparison).
- Results slider keyboard operable; FAQ uses native details; mobile menu is a Radix dialog; Call / Book bar sits clear of the switcher.
