# ADR-056: Grey brands get a near-white primary button in dark mode

- **Status:** Accepted — **Anuj** (2026-10-06): the option and the threshold.
- **Date:** 2026-10-06
- **Scope:** `@syntara/theme-engine` (`src/roles.ts`, `src/css-vars.ts`) and `@syntara/react` (Card's feature glow). Changes the dark-mode primary button of grey brands only.
- **Amends:** ADR-006 (dark mode keeps the light-mode label) for grey primaries.

## Context

- In dark mode the site's primary buttons looked disabled. The site brand (`tenants/house/brand.json`) has primary
  `#18181B`. Before this change its dark tokens were `action.primary.bg #4a4a4e` with a white label, hover `#3f3f43`
  (darker, so hover read as fading), and `text.disabled #525255`: almost the same grey as the button.
- Cause: ADR-006 keeps the light-mode label in dark mode. White labels on a lifted grey fail 4.5:1, so the solver
  deepened the fill until white passed. For a colour that is a fine trade; for a grey there is no hue left, so the
  result is a dull mid-grey.
- Vercel, Linear and shadcn/ui all solve this the same way: in dark mode a black/grey brand's primary button turns
  near-white with dark text.

## Options put to Anuj

1. **Engine rule for grey brands:** in dark mode a grey primary gets a near-white fill with ink labels.
2. **Override only the house brand** (a one-off in `tenants/house` or the docs CSS).
3. **Keep the grey fill, but brighten on hover** instead of darkening.

Claude recommended 1: every black or grey brand has the same problem, and a brand is data, not code (option 2 would
put a tenant special case in the site). Option 3 keeps a button that still looks disabled at rest.

**Anuj chose 1**, and set the line for "grey" at OKLCH chroma **below 0.02**. Measured with `hexToOklch`
(`packages/theme-engine/src/color.ts`): `#18181B` c = 0.00586, `#000000` and `#111111` c = 0, navy `#0F172A`
c = 0.0398 (stays coloured).

## Decision

- `GREY_PRIMARY_C = 0.02` in `roles.ts`. It is separate from `HUELESS_PRIMARY_C = 1e-3` in `ramps.ts`, which only
  decides whether neutrals borrow the primary's hue; that one is unchanged.
- Dark mode, primary button, primary chroma < 0.02: the fill is `neutral.12` (the dark scheme's text colour, L 0.95)
  and the preferred label is ink (`neutral.1`). The ADR-006 match and the dark findability lift are skipped. The label
  still goes through the solver's 4.5:1 check (4.49 fails). Hover and pressed come from the same `deriveState` as
  every fill: on near-white they step darker (ΔL 0.04 / 0.08), staying far from the disabled grey.
- The change is logged as a `choice` adjustment with the canvas ratios, so the contrast report explains it.
- Light mode, the accent fill, feedback badges and every coloured brand are unchanged. A test snapshots seven coloured
  brands (navy, a blue, and the five coloured tenants) as the engine on `main` produced them before this change and
  checks the new engine against it (`packages/theme-engine/test/grey-primary.test.ts`).

## Consequences

- House tokens in dark: the primary button becomes `#eeeef1` with an ink label `#0d0d0e`, 16.78:1; hover `#e1e1e4`,
  pressed `#d4d4d7` (from a probe of `generateTheme` on 2026-10-06).
- Glows. The first full check failed: the feature card mixes its glow from the button fill, and a 30% near-white glow
  dropped house's secondary text to 3.83:1 in dark mode (`packages/react/test/card.test.tsx`, "feature card
  contrast"). Asked with three options (a separate soft grey glow colour; no glow for grey brands; dim the glow for
  every brand), **Anuj chose the soft grey glow** (2026-10-06). The engine now writes `--syntara-glow-color`: the
  primary fill for every brand, except a grey brand in dark mode, which gets neutral step 8 (L 0.44), close to the old
  button grey (`glowColorHex` in `css-vars.ts`). `--syntara-glow` and the Card's feature glow, halo and media haze
  use it, falling back to the fill for themes built before it. It is a CSS variable like `--syntara-rim`, not a
  DTCG token, so the token count does not change. House dark text on the card's worst pixel is back to 8.14 / 4.71 /
  4.71:1 (default / subtle / brand), the same as before this change.
- The shadcn export maps `primary` to `action.primary.bg`, which now matches shadcn's own dark default.
- The brand fidelity report shows a large distance for a grey brand's dark primary. That is honest: the button no
  longer uses the brand colour in dark mode, on purpose.
- Versioning: a minor release of `@syntara/theme-engine`. No token is renamed or removed; values change for grey
  brands only.
- Open: a grey brand with no accent also gets a grey accent fill; this ADR does not change the accent fill.
