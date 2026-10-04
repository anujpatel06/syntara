# RFC-003: Hero — the opening section of a website page, as a component

- **Status:** Accepted — decided by **Anuj** (2026-10-04: "can you add those as components as hero section"; chose
  one Hero with four styles over four components or keeping blocks; Aurora first; chose "always dark and glowing"
  after seeing round 1; approved round 2 with "next").
- **Date:** 2026-10-04
- **Kind:** New component
- **Trust level:** Hard gate (GOVERNANCE.md §6). Claude drafted this RFC and built the first style; Anuj decided.

## The need

- Product websites need a hero: headline, a sentence, buttons, over something eye-catching. Syntara has four
  animated hero **blocks** (#48, `apps/docs/blocks/hero-*`), but blocks live in the docs site and read their copy
  from a tenant's `content.json`; nobody who installs `@syntara/react` can use them.
- Today a team copies a block's 150 lines of TSX and 400 lines of CSS, and loses every later fix.

## Proposal

```tsx
<Hero
  eyebrow={<Eyebrow>New: one wallet for every claim</Eyebrow>}
  title="Health cover that pays"
  titleSecondary="before you do"
  description="Book a consult, pay at the pharmacy and claim lab tests from one app."
  actions={<><Button size="lg">Get started</Button><Button size="lg" variant="outline">See plans</Button></>}
/>
```

- **One component, four styles** via `variant`, the same slots in every style: `eyebrow`, `title`,
  `titleSecondary` (muted second line), `description`, `actions`. `aurora` ships first; `orbit`, `gallery` and
  `cards` follow one at a time, each from its block, each shown to Anuj before the next.
- **Just the section.** The blocks' menu bar and built-in search stay in the blocks: a site has its own header, and
  a search can go in `actions`.
- **`scheme="dark"` by default**: the hero copies the tenant id from the nearest themed ancestor (as overlays do,
  ADR-012) and sets `data-syntara-scheme="dark"` on itself, so its text, buttons and lights use the brand's own dark
  roles, whose contrast the engine already proves. `theme` renders it dark on the server with no flash;
  `scheme="inherit"` follows the page.
- **Motion (WCAG 2.2.2):** the decoration loops slowly, so a pause toggle is always shown, with a fixed name and
  `aria-pressed`. With reduced motion asked for, nothing moves and the toggle is removed.
- **Semantics:** a `<section>` named by its headline; `headingLevel` 1–4 (default 1).
- Tokens only. Dark mode of the light wash comes from `light-dark()` on the scope's `color-scheme`, never
  `prefers-color-scheme`.

## Extend, vary, add or override?

**Add.** No component lays out a page section; Card and EmptyState are containers inside a screen. Extending a block
doesn't help consumers, who can't install blocks (ADR-011 revision: the registry is internal).

## Alternatives

- **Four components** (`HeroOrbit`, …): more freedom per style, four APIs to learn and keep in step.
- **Keep blocks, make them copyable:** smallest change, but copies don't receive fixes.

## Cost

- **Every tenant:** checked in Vela, Qamar (dark, RTL) on the playground; the full `/verify` and the axe sweep run
  every tenant × scheme. A dark scope needs the theme on a `data-syntara-theme` element; a theme written to `:root`
  only (no attribute) can't scope dark, and the hero then follows the page.
- **Consumers:** additive.
- **Maintenance:** one component file per style's decoration; tests per style.

## Checklist before release

- [x] `meta.json`, examples and docs
- [x] Tests (slots, heading level, pause toggle, dark scope)
- [x] Changeset
- [x] `orbit` (Anuj approved 2026-10-04, after asking for a white button at the centre)
- [x] `gallery` (Anuj approved 2026-10-04; the Hero page now opens with every style side by side, each linking to its own page)
- [ ] `cards`
