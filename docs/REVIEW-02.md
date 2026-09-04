# REVIEW-02: The Cinema

Screenshots at 390, 834 and 1440 in all five palettes (always dark), plus the pinned Collection mid-scroll, the open mobile nav, the footer and the interior page.

## Round 1

1. Primary nav links vanished over the light top of the film. Fixed: a second scrim from the ground color at the top 28% of the hero, so the nav reads before it goes solid.
2. "The collection" header shrink-wrapped and centered inside the pinned flex column, so the 01 / 09 counter sat against the title instead of at the right edge. Fixed: `w-full` on the stage row.
3. Reduced motion rendered both halves of the vertical concern marquee as a 12-item list. Fixed: the aria-hidden duplicate half is hidden when the animation is off.
4. Placeholder photographs read as bright grey rectangles on the black stage and broke the "light on objects" idea. Fixed: a 45% ground multiply under the accent soft-light for Cinema only, so photography sits in the dark room.
5. Results frame ignored the letterbox request (arbitrary child-variant did not compile). Fixed: BeforeAfter takes an aspect prop; Cinema uses 21:9. Before and After micro labels now sit on small ground panels so they read over the image.
6. Reviews were three equal columns, a triptych. Fixed: three placeholders staggered across a 12-column grid (5 / 5 offset / 5 indented), still hairline-left, no cards.
7. "Watch film" was a button, so the text-link style (uppercase micro) did not apply. Fixed: the selector targets any `[data-cta="text"]`.
8. Custom cursor showed a 10px dot at the top-left corner before the pointer moved. Fixed: hidden until the first pointer move.

## Round 2

- Anti-template: no cards; one hairline-bounded marquee (the proof strip) and one custom cursor, which are Cinema's two shared-vocabulary devices; no grain, no numbered indices beyond the single 1 / 9 counter, no SplitText. Two eyebrow stacks maximum (hero and final title card). Uppercase appears only in 11px micro labels.
- Luxury: depth comes from light on objects and image layering only; no glow, no neon, no glass. One silent section on the interior page (a room and one line). Physician immediately after the proof marquee.
- Headline cadence varies: "Aging is optional." / "The collection" / "Before, then after" / "Two memberships, one for skin and one for body." / "The doctor is in."
- Distinct from every other concept: the only dark concept, the only horizontal pinned gallery, the only italic serif accent.

Open items: none.
