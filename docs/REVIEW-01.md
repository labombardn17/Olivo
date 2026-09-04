# REVIEW-01: The Atelier

Critique loop against the Anti-Template Audit (section 8) and the Luxury Audit (section 9). Screenshots at 390, 834 and 1440 in all five palettes, plus open mobile nav and footer.

## Round 1 (first render)

1. Hero poster and video invisible: the HeroVideo wrapper forced `relative` while the caller passed `absolute`, and `h-full` of a min-height parent collapsed to zero. Fixed: the primitive no longer sets its own position.
2. Results before and after frames rendered as flat tinted blocks. Same cause in the Placeholder component (`relative` forced), then a second cause: the unlayered `.tint { position: relative }` beat the `absolute` utility. Fixed: helper classes moved into `@layer components` so utilities win.
3. Base resets (`a { color: inherit }`) were unlayered and overrode `text-ground`, so the sticky mobile "Book" and the menu CTA rendered black on black. Fixed: base rules moved into `@layer base`.
4. Engraving plates: the silhouette overran the caption rule. Fixed: silhouette scaled to 0.7 and lifted above the caption.
5. Instruments pinned spread: the nine-step progress rail overlapped the "Book" link. Fixed: rail moved above the ordinal, where a catalogue would put its folio marks.
6. "After" label used `mix-blend-difference` and vanished on the placeholder. Fixed: label sits on a small ground panel.
7. Mobile menu rendered in a Radix portal outside `[data-concept]`, so it lost Fraunces and the concept CSS. Fixed: no portal.
8. Mobile menu bottom row collided with the switcher toggle. Fixed: 96px bottom padding.
9. Interior page running head sat under the fixed nav. Fixed: `below` offset for the first section.
10. Hero video read as untinted grey in every palette. Fixed: palette tint layer (10% accent, multiply) on the HeroVideo primitive.
11. Deliberate irregularity was missing on the results section. Fixed: the "Before, and after." headline now runs back over the image edge by 14%.

## Round 2 (after fixes)

- Anti-template: no cards, no triptych, no pill above the h1, one filled button and one drawn underline per pair, secondary CTAs are text. Grain present at 5%. Two eyebrow stacks maximum (hero and final CTA only; other sections open with a number, a portrait, a list, an image, a map).
- Luxury: one hero message and one CTA; physician immediately after the proof strip; the nine devices shown as engraved plates; facts as one serif paragraph; one silent section (results image with one line); opening curtain present.
- Headline cadence varies: "Aesthetic medicine, practiced." / "aging is optional." / "The instruments" / "Before, and after." / "Book a consultation."
- Would the client mistake this for Residence? No: bled, asymmetric, type-led, paper texture, running heads and folios. Residence will be framed, symmetrical and photography-led.

Open items: none. Remaining placeholders are labeled in alt text and listed in ASSETS.md.
