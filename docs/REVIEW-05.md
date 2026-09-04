# REVIEW-05: The Current

Screenshots at 390, 834 and 1440 in all five palettes, the hero mid-expansion, the peeling machine cards mid-scroll, the open mobile nav, the footer and the interior page.

## Round 1

1. The page scrolled horizontally at 390 (document 501px wide) because the run-off headlines ("Dr. Olivo", "2550 W. Fullerton") use negative right margins by design. That also blocked the mobile menu button in Playwright. Fixed: the concept wrapper clips horizontal overflow (`overflow-x: clip`, which keeps `position: sticky` alive for the cards). A horizontal-overflow check was added to the DOM audit for every concept.
2. Hero expansion only grew inside the right column, so the film never crossed the fold and the proof strip appeared on a light ground with invisible ground-colored text. Fixed: the frame is positioned against the section (left 48%, top 8%, width 52%, height 120%) and scrubs to full bleed; the proof strip sits in an inverse scope over a single-hue scrim at the foot of the film.
3. A concept class named `.block` collided with Tailwind's `block` utility and painted a ground-colored box behind every `span.block`. Fixed: renamed to `.cblock`.
4. Results labels in `mix-blend-difference` came out grey-green and the After label was never tilted. Fixed: labels in the inverse ink, a 6px accent handle, and the After label rotated 4 degrees (the concept's deliberate irregularity).

## Round 2

- Anti-template: no gradients of two hues (scrims are single-hue to transparent), no radii above 2px, no three-up icon cards; memberships are two flat blocks, reviews are one indexed list. Marquee and SplitText are Current's two shared-vocabulary devices. Two eyebrow stacks maximum (concerns and reviews open with a caption; every other section opens with a giant number, a giant name, an image or an address).
- Luxury: one hero message and one CTA; physician block directly after the proof strip; devices shown as flat color blocks in a system; one silent section on the interior page.
- Headline cadence varies: "Nine machines. One doctor." / "Nine machines. One clinic." / "Before. After." / "Two memberships, one for skin and one for body." / "2550 W. Fullerton" / "Book it."
- Distinct: the only concept with color-block sections, numeric counters at display scale, and content that breaks the container.

Open items: none. Under reduced motion the machine counter stays at 01 and the cards simply stack; that is the intended degrade.
