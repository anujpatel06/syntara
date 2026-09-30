# @syntara/icons

## 0.1.0

### Minor Changes

- 3ab8971: A duotone layer: every outline icon now has a `Icon<Name>Duotone` twin.

  - A duotone icon is its outline twin with a tint layer painted behind it. The outline is never redrawn — a twin composes the outline's own subpaths — so the two layers cannot drift apart, and no geometry is duplicated.
  - One token controls the second tone: `--syntara-icon-tint`, defaulting to `color-mix(in oklab, currentColor 16%, transparent)`. Duotone therefore still follows the text colour, works on any surface and inside a solid button with no setup, and a theme, a tenant or one component can set the token to make the tint a real colour. Nothing to configure to get the default.
  - Duotone is a fill style, so the bare strokes — a check, an arrow, a chevron, `plus`, `menu-2` and the rest that enclose no area — have a twin with no tint, rendering exactly like the outline. The set stays 1:1, so a product can move its whole icon layer to duotone in one import change without a missing export.
  - No existing icon changed. `Icon.node` is new on every icon (the drawing it is built from), which is what lets a twin reuse an outline instead of copying it.

- e17f88a: v0.3 craft pass.

  - theme-engine: motion (spring, easing-out, slow), glass solved for text contrast, rim and glow, hairline, size-matched tracking, caps tracking, icon stroke, display sizes, rounder radii, a chart palette solver checked for colour blindness, `editorial` and `modern` type pairs, a `paper` neutral, and 98 contrast pairs per brand.
  - react: tactile motion across components; new Sidebar, IconTile, Eyebrow, Amount, Meter, Tag, PersonChip, AreaChart/LineChart, BarChart, Sparkline and chart toolkit; Card `feature`/`inset`/`rim`; Button `contrast`; Badge `status`; soft-outline fields with sm/md/lg sizes; icons from `@syntara/icons`.
  - icons: new package, 235 icons.
  - tokens: ships `dist` (`files`).

### Patch Changes

- 205de82: Every published package now carries its own `LICENSE`, a `repository` entry pointing at its directory, `homepage`
  and `bugs`. `@syntara/react` and `@syntara/tokens` build on `prepack`, so a tarball can no longer ship a stale
  `dist`. `@syntara/react`, `@syntara/icons` and `@syntara/theme-engine` have READMEs, which are what npm shows.
