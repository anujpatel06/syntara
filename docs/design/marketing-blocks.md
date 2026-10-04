# Website blocks — the standard

Ready-made sections that someone can stack into a product's website: header, hero, features, call to action and
footer. They live next to the app blocks in `apps/docs/blocks/`, are built only from Syntara components, and take
their copy from the tenant's `content.json`. So every section works in all six brands, light and dark, and right to
left, with no extra work. That is the selling point; no other kit does it.

Status: **approved by Anuj 2026-10-04** (hero next). Order of work: this spec → the hero → Anuj approves a screenshot → the other
four. Nothing gets built in bulk before the hero is approved.

## What we take from each reference

| Reference | Take this | Leave this |
|---|---|---|
| Linear / Vercel | Precision. 1px hairline borders, tight heading tracking, a small "what's new" pill above the headline, dark mode as good as light. | The near-black-only look. Our brands have colour. |
| Stripe | The product picture is **real UI, layered**: one main window, plus one smaller card overlapping its edge. Brand colour used boldly on one thing: the ribbon. A two-tone headline (first sentence default colour, the rest muted). | Animating the ribbon. |
| Apple | One idea per section. The headline is the biggest thing on screen and nothing competes with it. Lots of space. | Full-bleed photography (we have none, and fake photos are worse). |
| Notion / Cal.com | Plain, human copy. A short trust line under the buttons ("Free for 14 days. No card needed."). | Hand-drawn illustrations. |

## Measurable rules (all sections)

Sizes in px are the current token values; the CSS uses the tokens, never the numbers.

- **Width.** Content column max 1200px (`space-16 × 18.75`), centred, side gutter 16px narrow / 32px from 640px.
- **Section spacing (top and bottom).** 64px narrow. Wide: 96px (`space-24`).
- **Headline (hero only).** 40px narrow → 60px from 640px → 72px from 1024px (`4xl` → `6xl` → `7xl`). Line height `tight`
  for now: a tighter display value needs clipping measured per type pair first (ADR-043). Tracking: `--syntara-font-heading-tracking`.
  Max 18 characters per line in Latin (`max-inline-size: 18ch`), so it breaks into 2 lines, never 4.
- **Section headings (other blocks).** 32px narrow → 48px wide (`3xl` → `5xl`, already exist).
- **Body under a headline.** 18–20px (`lg`/`xl`), muted text colour, max 60 characters per line.
- **Gaps inside the hero.** Pill → headline 24px, headline → body 24px, body → buttons 32px, buttons → picture 64px.
- **Buttons.** At most two: one primary, one outline. Size `lg`. Never a third.
- **Corners and shadows.** Product window: `radius-container`, 1px border, `shadow-overlay`. Floating card:
  `shadow-raised`. Nothing else on the page gets a shadow.
- **Colour.** Flat `surface-canvas` behind all text. One bold decoration per page, in the hero: the **brand
  ribbon** (Anuj, 2026-10-04, after round 1 read as "a plain page"). A diagonal band made from the brand's own
  primary and accent, starting below the menu bar on the far side from the text and running off the edge; below
  1024px it sits behind the product picture. Text never sits on it. Text contrast is measured on the flat surface
  and must pass WCAG AA (4.5:1 body, 3:1 for 24px+). Never rounded up.
- **Motion.** One entrance per section: fade in and rise 8px, `motion-duration-slow` (320ms), `motion-easing-out`,
  items 60ms apart, at most 4 items. CSS only, so text shows even if scripts fail. Turned off completely for people
  who ask for reduced motion. Nothing loops, nothing moves on scroll.
- **Layout follows the block's own width**, not the screen (container queries at 640 / 1024px), so a block looks
  right inside the docs preview and on a real page.

## The hero, specifically

> Superseded. This round-1 hero was deleted (Anuj, 2026-10-04); the shipped heroes are Orbit, Gallery, Card fan
> and Aurora, built from Anuj's animated references. The rules below still hold for spacing, colour and motion.

Round 1 (text over a boxed picture, faint glow) was approved in structure and rejected as "a plain page". Round 2
adds: a menu bar, the brand ribbon, a two-tone headline, and a bigger picture (an app window with a side menu,
fading into the page at the bottom, the floating card hanging over its edge).

1. Optional "what's new" pill (Badge + Link): one line, links somewhere.
2. Headline. A word wrapped in `*…*` is set in the heading font's italic, as in the sign-in block. Arabic and
   Devanagari have no true italic, so there the emphasis becomes the brand's primary colour instead (to check with
   Anuj on the screenshot).
3. One or two sentences of body.
4. Primary + outline button, then the trust line in small muted text.
5. The product picture: a framed window built from real Syntara components showing *that tenant's* product (a
   neobank dashboard for Vela, a shop for Haat), with one smaller card overlapping its bottom corner (the far corner
   from the text's start, so it mirrors in right-to-left). On narrow widths it sits below the text and the floating
   card tucks in.
   - Accessibility: the picture is a picture, not a working app. It is `inert` (no tab stops) and has
     `role="img"` with a one-line description from the content file.
6. Text is start-aligned (left in English, right in Arabic), not centred. Centred multi-line text reads badly in
   long Hindi and Arabic lines, and every template already does it.

## Generic — what we will not do

- Centred everything, sitting on a purple-to-blue blob that isn't the brand's colour.
- Gradient *text*, glass panels, 3D blobs, stock photos, emoji in headings.
- "Supercharge your workflow", "Unlock the power of…", "Built for the modern team".
- Made-up proof: "Trusted by 10,000+ teams", fake customer logos, invented star ratings. If a tenant has no real
  number, the block shows no number.
- A third button, a chat bubble, a cookie banner in the screenshot.
- Typing animations, things that move on scroll, anything that loops.
- Shadows on every card.

## The other four (built after the hero is approved)

- **Header:** logo, 3–5 links, sign-in link and one primary button. Collapses into a menu below 1024px. Sticky
  with a hairline border once scrolled.
- **Feature grid:** section heading + 3 or 6 features (icon from `@syntara/icons`, title, one sentence). One
  feature can be "big" with its own small product picture (Stripe's bento, but restrained).
- **Call to action band:** one sentence, one button, on the brand primary surface. Only place the brand colour fills
  a whole area.
- **Footer:** link columns, language and theme switch, legal line. No newsletter box by default.

## Done means (for the hero)

- Renders in all six brands × light/dark × left-to-right/right-to-left × 375 / 768 / 1280px wide, from
  `/screenshots`.
- Copy for every tenant in its `content.json` (Arabic and Hindi marked for a native speaker's review).
- `/verify` passes: typecheck, tests, docs build, axe sweep with no new issues.
- Anuj has approved one screenshot.

## Decisions

- **Display sizes** — added to the engine (Anuj, option A). ADR-043.
