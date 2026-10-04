# ADR-046: Hero follows the page's light or dark scheme

- **Status:** Accepted — decided by **Anuj** (2026-10-04). Reverses RFC-003's "always dark and glowing", also Anuj's
  choice, made earlier the same day.
- **Date:** 2026-10-04
- **Scope:** `packages/react/src/ui/hero.tsx`, `hero.module.css`, `meta/hero.meta.json`, `test/hero.test.tsx`,
  `apps/docs/examples/hero/`.

## Context

Anuj pressed Light in the docs preview toolbar on the Hero page: the page turned white and the Hero stayed dark,
because `scheme` defaulted to `"dark"`. Options put to him: **A** the docs preview follows the toggle (the component
keeps its dark default); **B** change Hero's default so it follows the page, with always-dark as an option; **C** keep
it as it is. **Anuj chose B.**

In light, the lights' colour is washed toward `surface.canvas`. With every light stacked under the copy at full
strength, `text.subtle` fell to 1.0:1. Three light-mode looks were shown to Anuj, one at a time:

1. A veil of the page colour leaving the lights at 15%: passed (4.844:1 worst over 1,000 fuzz brands), but the
   pattern all but disappeared ("where is background pattern in this").
2. Lights at 60% and a halo of the page colour at 70% behind the copy: passed (4.568:1); "make it more visible".
3. **Lights at full strength and a halo at 85%** behind the copy and the pause toggle: passed (4.844:1). Approved
   ("done"). The screenshot sweep then showed the halo's straight, feathered edge reading as a pale box when the hero
   is shown small (the styles overview); it became a blurred rectangle at 90% with round corners. Approved ("ok").
   It was then merged with the dark-scheme veil from `fix/hero-dark-contrast` (same element, same idea, Anuj approved
   its look): one `--_veil`, 90% in light and 77% in dark, painted by that branch's larger blurred box.

## Decision

1. `scheme` defaults to `"inherit"`; `"dark"` stays as an option. Hero is alpha, so GOVERNANCE.md §5 lets the default
   change without a deprecation or codemod. A changeset records it.
2. Light scheme, aurora: the lights keep their dark-scheme strength. Behind the copy, `--_veil` (`surface.canvas`,
   90% in light, 77% in dark) fills a box a `space-16` taller and two wider than the copy, blurred by a `space-16`; at
   the weakest text point it keeps 96.40% of that (the dark-fix's geometry proof). In light the pause toggle has its
   own unblurred 90% veil. Dark has no halo (`light-dark()`,
   so it follows the scope's scheme, never `prefers-color-scheme`).
3. Orbit and gallery change only in that they now follow the page; they have no lights behind their copy.
4. The docs example "Follow the page" became "Always dark" (`hero-dark`, `scheme="dark"`).

## Proof

`hero.test.tsx` › "aurora light-scheme contrast" reads every light's mix, its opacity, `--_glow` and the halo from
`hero.module.css`, composites every combination of the four lights (each at 0, half or full strength) and then the halo,
and checks: `text.default` and `text.subtle` ≥ 4.5:1, `text.brand` (the Eyebrow's mark, an icon) ≥ 3:1, the pause icon
≥ 3:1. Worst values (`npx vitest run test/hero.test.tsx -t contrast --reporter=verbose` in `packages/react`):

| | text.default | text.subtle | text.brand | pause | pause hovered |
|---|---|---|---|---|---|
| 6 tenants | 12.140 | 5.071 | 4.573 | 5.413 | 11.561 |
| 1,000 fuzz brands | 12.068 | 5.034 | 4.054 | 5.342 | 11.442 |

Buttons and the search field carry their own fills, so the lights don't touch their text contrast.

## Consequences

- On phones the copy fills nearly the whole hero, so the halo covers most of it and the colour shows mainly at the
  top and bottom. Shrinking the halo to the copy's content box would show more; offered, not taken.
- Making `.copy` positioned (for the veil) let axe compute the background behind aurora's text, which it used to
  report as "incomplete". Before the dark veil was merged in, it found the dark gap on `/docs/components/hero` (2
  nodes, 1.23:1 and 2.59:1, the same with main's dark scoping put back by hand): there before, unseen by the sweep.
  The dark veil, merged into this branch, closes it.
