# ADR-047: A landing homepage after fora.so, and one install for everything

- **Status:** Accepted in part. The direction and the one-install package were decided by **Anuj** (2026-10-05); three
  details are **Claude recommended, pending Anuj** (marked below).
- **Date:** 2026-10-05
- **Scope:** `apps/docs/app/page.tsx`, `apps/docs/components/landing/`, `apps/docs/components/site/home-chrome.tsx`,
  `apps/docs/public/landing/`, `scripts/landscapes/`, `scripts/render-landscapes.mjs`, `packages/syntara/`,
  `docs/design/landing.md`.

## Context

Anuj wanted a new homepage. Explorations were shown one at a time and turned down: a dark neon page from his
Pinterest references, a calm "pick a mood" hero, a sunrise ring after RedSun, and pastel drawn landscapes. He then
pointed at fora.so and asked for "exactly" that. Fora was measured with Playwright (computed styles, transforms at 20
scroll positions, pointer sampling): `docs/design/landing.md`. The system was taken — layout, type scale, lit-edge cards,
parallax, scroll reveals, stacking cards, smooth wheel scrolling — and none of Fora's pictures, copy or code.

Separately, the hero's install command named two packages. Anuj asked for "one command that people can use everything
that I build in my website".

## Decision

1. **The homepage is a landing page after fora.so** (Anuj). Sections: hero with an app window rising from hills,
   scroll-lit intro, four-tab feature carousel, three stacking feature cards, install, FAQ with topics, "from the log",
   a closing section over dunes, and the `Footer` component.
2. **The hero's window shows the `Hero` component itself** (Anuj), cycling Gallery (Haat, Hindi), Orbit (Qamar,
   Arabic, right to left), Aurora (Care) and Card fan (Harbor), each with the tenant's own `content.json` hero copy.
   It starts on Gallery and rotates every 5.2s (Anuj); paused under reduced motion, with a pause toggle (WCAG 2.2.2).
3. **The app window rises about 96px over the first scroll, then sinks at 0.1× the scroll** (Anuj: "too much hiding
   behind the land"). Fora's window sinks at 0.2×.
4. **One install: a new unscoped package `syntara`** (Anuj) depending on `@syntara/react`, `@syntara/tokens`,
   `@syntara/icons` and `@syntara/theme-engine`, with `syntara/styles.css` (every tenant's tokens, then the component
   styles) so setup is one import. The eight `@syntara/*` packages stay published on their own. Options put to him:
   make `@syntara/react` depend on the tokens; a new `syntara` package; or only shorten the hero. His answer asked for
   everything in one command, which only the new package gives.
5. **The homepage is always dark**, whatever the site's scheme: the landscapes are its light source and a light canvas
   would put them on white. **Claude recommended, pending Anuj.**
6. **Geist, not Inter** (the house type pair, not Fora's face). **Claude recommended, pending Anuj.**
7. **Landscapes are drawn in code** — a ray-marched height field in WebGL (`scripts/landscapes/terrain.html`), rendered
   to WebP by `node scripts/render-landscapes.mjs` — rather than photographs: ours, reproducible, nothing to license,
   and splittable into parallax layers. **Claude recommended, pending Anuj.**

## Consequences

- The previous homepage components (`components/home/sections.tsx`, the stage, hero stack, brand rail, live showcase,
  tenant card, `home-data.ts`) are removed; its FAQ answers moved to `components/landing/faq-items.tsx`. The homepage
  no longer quotes the fuzz pass rate or generation time.
- On `/`, the site header floats over the hero and the site footer gives way to the `Footer` component
  (`home-chrome.tsx`); every other route is unchanged.
- Smooth scrolling takes over the mouse wheel on `/` only; keyboard, scrollbar, touch and find-in-page scroll natively,
  and reduced motion turns it off.
- A ninth package to release and keep in step. `syntara` must be published before the site that shows
  `npm install syntara` is deployed, or the hero shows a command that fails.
