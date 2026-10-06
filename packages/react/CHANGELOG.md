# @syntara/react

## 0.3.1

### Patch Changes

- 5c00355: The package's repository and issue links point at the renamed GitHub repository, https://github.com/anujpatel06/syntara.
  The old address still redirects.
- Updated dependencies [5c00355]
  - @syntara/icons@0.1.1

## 0.3.0

### Minor Changes

- 549f2fc: `ThemeScope` gains `numerals="native" | "latin"`. `native` writes dates and numbers in the language's own digits
  (Arabic ١٢٣, Hindi १२३) for every component inside the scope; `latin` forces 1 2 3. Omitted, nothing changes: the
  locale chooses, as before.

### Patch Changes

- 7864023: `Button`: the rule that trims a leading icon's padding now weighs no more than the button's own class, so a `className`
  that sets padding wins again. It looks the same; it had been overriding padding set by consumers.
- 8240ffc: Footer: a short wordmark now sits centred on the line instead of at its start. A long one still runs off the end.

## 0.2.0

### Minor Changes

- 2557e70: Remove the top-edge highlight from every solid fill (ADR-039).

  `--syntara-shadow-highlight` drew a 1px white line along the top edge of solid fills — the "pressable key" look from
  the v0.3 tactile pass. It is gone from all 19 components that used it: Button, Badge, Chip, Checkbox, Switch, Radio,
  Slider, Progress, Steps, Kbd, Tooltip, Avatar, Chart, FileUpload, IconTile, Pagination, Sidebar, Tabs, ToggleGroup.

  **This changes light mode as well as dark** — the highlight was present in both, and strongest in light (20% vs 12%).
  Depth on a solid fill is now the raised shadow alone. Secondary, outline and ghost variants never carried it and are
  unchanged.

  Text contrast is unaffected: the highlight sat on the fill's top edge, never behind a label.

  The engine still emits `--syntara-shadow-highlight` unchanged, so the published theme contract does not move, but
  nothing in the library uses it any more.

- aa8222b: Add `Footer`, `FooterColumn`, `FooterLink`, `FooterSocialLink` and `FooterStatus`: a site footer with an oversized wordmark cut off by a hairline horizon, each letter lighting up under the pointer, over an aside and columns of links.
- 8cf9136: `Hero` gains `variant="cards"` (Card fan), the fourth and last style from RFC-003: centred copy over a fan of up to
  five `cards` rising from the bottom edge, each a title and a small label straight on a different solved brand pair
  (accent, inverse, primary in the middle, two tints), over an optional picture. Two optional `cursors` drift beside the
  headline on wide screens. The fan spreads under the pointer, the hovered card lifts and the fan tilts toward the
  pointer; reduced motion keeps the hover lift but drops the drift and tilt. Cards and cursors are decoration
  (`aria-hidden`).
- 16f45a5: `Hero` (alpha): **the default `scheme` changed from `"dark"` to `"inherit"`**, so the hero follows the page's light or
  dark scheme (ADR-046, decided by Anuj). Pass `scheme="dark"` to keep the always-dark look. In light, aurora's lights
  glow at full strength around the copy, which sits on a soft, blurred veil of the page colour (90% in light, 77% in dark: the dark veil also fixes
  text.subtle falling to 2.2:1 under the pointer light in dark); text.default and text.subtle
  stay at 4.5:1 or more over every combination of the lights, for every tenant and the engine's 1,000 fuzz brands
  (`hero.test.tsx`). Alpha components may change their API in any release (GOVERNANCE.md §5), so there is no codemod.
- 1a41bbf: `Hero` gains `variant="gallery"`: your `images` on a curved wall that turns slowly between the headline and the
  description, small and hazy straight ahead, tall at the sides, with two brand-colour tiles. It leans toward the pointer
  and turns the other way in right-to-left; the pause toggle and reduced motion stop it. The wall is decoration
  (`aria-hidden`, `inert`, no alt text).

  Also fixes a dark Hero staying in the brand it first saw: it now follows the page when the brand or density changes.

- 983fd22: `Hero` gains `variant="orbit"`: the copy on the start side, and rings of the brand colour rippling out around the
  `actions` on the far side, over a faint star field. The rings lean toward the pointer; everything stops with the pause
  toggle or reduced motion. Buttons at the centre become a white pill (the scheme's lightest text-safe pair).
- 983fd22: Add `Hero` (alpha): the opening section of a website page (RFC-003).

  Slots for an `eyebrow`, a `title` with an optional muted `titleSecondary`, a `description` and `actions`, over slow
  lights in the brand's primary and accent (`variant="aurora"`, the first of four styles; more follow). Follows the
  page's light or dark scheme by default; `scheme="dark"` keeps it dark on any page (it copies the tenant id from the
  nearest themed ancestor and scopes itself to the brand's dark roles; pass `theme` to render dark on the server). A pause toggle meets WCAG 2.2.2; with reduced motion,
  nothing moves.

- 44ca23a: Inside a card, inner surfaces are outlines (ADR-045).

  An Alert, a StatTile (`default` or `outline`), a Card inside a Card and FileUpload's file rows used to paint their own
  face, hairline and shadow, so a dashboard card read as filled boxes in a filled box. Inside a Card they now drop the
  face and shadow and keep only a faint `border.subtle` hairline; on the bare page they look exactly as before. Toast and
  anything inside a `feature` card keep their faces.

  New optional prop `surface?: 'auto' | 'raised'` on Alert, StatTile and Card: `raised` keeps the filled face inside a
  card. Box sizes don't change, and the status shapes and text are re-proven on every plain card face (shape ≥ 5.41:1,
  `text.subtle` ≥ 5.96:1, for the tenants and 1,000 fuzz brands). Browsers without container style queries keep the
  filled look.

  `@syntara/sdui`: schema 1.2.0 adds the `surface` prop to Alert, Card and StatTile.

- 2c37d6e: Add `Marquee` (alpha): a strip of logos, quotes or badges that scrolls by itself in a seamless loop.

  It meets WCAG 2.2.2 (Pause, Stop, Hide): a visible pause toggle, a pause on hover (`pauseOnHover`, default on)
  and whenever anything inside has keyboard focus. Under `prefers-reduced-motion` nothing moves and the items wrap.
  Screen readers get one copy of the items as a list in a labelled region; the copies that make the loop seamless are
  `aria-hidden` and `inert`. The pace comes from the strip's width (`speed`: `slow`, `md`, `fast`), so a long strip
  moves no faster than a short one, and it travels towards the start of the line, so rightwards in right-to-left pages.

- 2557e70: Remove the painted sheen from every surface (ADR-038).

  The Surface recipe lit raised surfaces with `--syntara-sheen`, a 115° band of light in dark schemes. On large cards
  it read as brushed metal, so no component paints it any more: Card, StatTile, Alert, Toast, Dialog, Sheet, Popover,
  Select, Combobox, Command, DatePicker, DataTable and EmptyState.

  The engine token is unchanged, so the **rim light** on card edges is untouched and nothing about the published theme
  contract moves. Light schemes never painted the sheen, so they look identical. In dark schemes the face is now
  slightly darker, which only raises text contrast — every ratio previously proven under the band is now a floor.

- d3a538a: Add `PromptComposer` (alpha), with `ComposerButton` and `ComposerSelect`: the box where people write to an AI.

  A growing text area, a toolbar of pill controls and a send button that becomes stop while `isPending`. Enter sends
  and Shift+Enter breaks the line; Enter while an input method is composing (Hindi, Japanese, Chinese keyboards) only
  confirms the composition. `glow` draws a two-colour edge and halo — `brand` (primary and accent) or `spectrum`
  (warning to info, warm to cool) — and `surface="glass"` gives a frosted face whose text keeps 4.5:1 over any
  backdrop, the same recipe as Popover. Colours swap sides and the send arrow mirrors in right-to-left pages. On narrow
  composers, pills with an icon show only the icon and keep their label as visually hidden text.

- 9cc5d80: Add `StreamingResponse` (alpha), with `ResponseText`, `ResponseSources` and `ResponseSource`: a model's answer as it
  is written, that screen readers can follow (RFC-002, ADR-041).

  The visible text is never a live region. A separate polite one speaks "Writing response", then each finished
  sentence once (split with `Intl.Segmenter`, so the Hindi danda and the Arabic question mark end sentences), then
  "Response complete", "Stopped" or "Couldn't finish". `announce="status"` speaks only the start and the end. Every
  spoken and shown word is a prop.

  The visual layer: `ResponseText` lets each new word arrive in the brand's text colour and settle into the body
  colour (colour and opacity only, so it stays on with reduced motion), with a glowing caret while streaming; the
  "Writing…" label carries a sweeping shimmer; `ResponseSources` pops citation chips in one after another.

### Patch Changes

- a5feb6f: Footer: in light schemes the wordmark's hover light takes the brand's text colour instead of a tint of the text colour, which read as a black outline. Dark schemes are unchanged.
- bd08eb7: State outlines now reach 3:1 against the page in every brand (WCAG 1.4.11).

  The selected radio card, a file-upload zone with a file dragged over it, and a slider thumb while dragging drew their
  outline in `action.primary.bg`, which the engine only proves against its own label. Against the page it fell below 3:1
  in six tenant × scheme pairs — a selected Qamar card in light mode measured 1.93:1, Vela's in dark 2.80:1. They now use
  `text.brand`, which the engine proves at 4.5:1 or more on every surface: the same cards measure 5.24:1 and 9.59:1.
  Light-mode outlines barely move (Vela 6.53 → 6.42:1); dark-mode ones become clearly visible.

## 0.1.1

### Patch Changes

- 74ee912: Three statements in these packages' READMEs were false on npm from the moment 0.1.0 published.

  - `@syntara/mcp` said "The package isn't published yet. `npx @syntara/mcp` will work after Phase 6" — printed on
    the npm page that disproves it.
  - `@syntara/sdui` said native token export "isn't built yet". It ships: every tenant gets
    `android/SyntaraTokens.kt` and `ios/SyntaraTokens.swift` from `pnpm tokens`, with every contrast pair
    re-checked on the exported values. There are still no native components and the Kotlin is uncompiled, which
    the README now says instead.
  - `@syntara/react` said `styles.css` reads `var(--syntara-*)` 2,736 times. That was `grep -c`, which counts
    lines containing the pattern. It is 3,472 occurrences across 2,736 lines, 118 distinct tokens. The command is
    in the README now so the figure can be reproduced.

  npm renders the README of the published version, so these only reach readers in a release.

## 0.1.0

### Minor Changes

- 9ee91af: Button gets `tone`, and `variant="danger"` is deprecated (RFC-001, ADR-021).

  - react: `<Button tone="danger">` on the `primary`, `outline` and `ghost` variants. `variant="danger"` keeps working and renders the same until 1.0.0; it warns once in development. Migrate with `npx @syntara/codemods button-variant-danger-to-tone <path>`. CSS that targets `[data-variant='danger']` keeps working until 1.0.0; change it to `[data-tone='danger']` before then.
  - theme-engine: the four `feedback.*.fg` roles are now solved against `surface.canvas` and `surface.raised` as well (118 contrast checks per brand, was 102). No token value changed: the new pairs already passed in every tenant.
  - codemods: new package, with `button-variant-danger-to-tone`.

- 35d65df: Case-study cards.

  - `Card variant="showcase"`: a quiet face (surface.raised in light, surface.sunken in dark), a larger radius and a glossy rim brightest along the top. Text on it is proven for every tenant and 1,000 fuzz brands, light and dark.
  - `CardMedia` (new): a media area on top of a card, with a brand or accent haze behind the media only (`glow`).
  - `CardFooter divider`: a hairline rail above the footer.
  - `StatTile variant="editorial"`: large regular-weight figures with a quiet label.

- 3a42138: Three fixes from the agent eval.

  - `Key` is now exported: `import { type Key } from '@syntara/react'`. It is React Aria's `Key` (`string | number`), the type of every selection key (Select, Combobox, Tabs, ToggleButtonGroup, Menu). You no longer need react-aria-components as a direct dependency to type selection state, and React's own `Key` (which also allows `bigint`) is no longer the only one to hand. Type-only; nothing else changes.
  - ToggleButtonGroup no longer overflows a narrow container. When its segments don't fit on one row they wrap onto another row inside the track, and a label longer than the whole track wraps inside its segment. No label is cut off and the page never scrolls sideways (WCAG 1.4.10). When the segments fit, it looks exactly as before.
  - StatTile no longer shows good and bad change by colour alone (WCAG 1.4.1). Bad news (`positiveIsGood` against the direction of the change) shows a filled alert mark in place of the trend arrow; good news keeps the arrow; no change has no mark. Screen readers hear "better" or "worse" after the change. New props `betterLabel` and `worseLabel` (defaults `'better'`, `'worse'`) translate those words. Tiles with bad news look different: the arrow in their pill becomes the alert mark.

- a859d16: Line heights are measured per type pair, and no glyph's ink leaves its line box

  Six of the nine type pairs now carry their own line heights, measured with `scripts/check-script-clipping.mjs`
  rather than sharing a scale chosen for Latin. Both Arabic pairs were cutting fully vowelled text by up to 12px, and
  four Latin pairs were cutting descenders. Across 42,768 rendered cases — every size, weight, DPR and sub-pixel
  offset the script tests — nothing clips now, down from 5,209 cases.

  | Pair                                   | tight | snug | normal |
  | -------------------------------------- | ----- | ---- | ------ |
  | `bilingual-round`, `bilingual-classic` | 1.8   | 1.8  | 1.9    |
  | `friendly`                             | 1.35  | 1.4  | 1.5    |
  | `editorial`, `calm`, `technical`       | 1.3   | 1.35 | 1.5    |

  `precise` and `modern` clipped nothing and are unchanged, as is `bilingual-devanagari` (already measured in ADR-020).

  **What changes for you:** if your brand uses one of the six, `--syntara-line-height-*` are larger and text is taller.
  Arabic is noticeably airier. The CSS, DTCG and Figma exports carry the new values; the shadcn export is unaffected,
  because it emits no line heights. No colour, no contrast result and no other token changed.

  `ScriptTypeTokens.name` widens from `'devanagari'` to `'devanagari' | 'arabic' | 'latin'`, and `minFontSize` and
  `capsTracking` are now optional so a pair can override line height alone. This is additive for anyone reading the
  type; a switch over `name` that assumed a single value will need the new cases.

  `@syntara/react` also re-exports `useLocale` from `theme-scope`, so components that need the scope's locale no longer
  have to reach into `react-aria-components` directly.

- e17f88a: v0.3 craft pass.

  - theme-engine: motion (spring, easing-out, slow), glass solved for text contrast, rim and glow, hairline, size-matched tracking, caps tracking, icon stroke, display sizes, rounder radii, a chart palette solver checked for colour blindness, `editorial` and `modern` type pairs, a `paper` neutral, and 98 contrast pairs per brand.
  - react: tactile motion across components; new Sidebar, IconTile, Eyebrow, Amount, Meter, Tag, PersonChip, AreaChart/LineChart, BarChart, Sparkline and chart toolkit; Card `feature`/`inset`/`rim`; Button `contrast`; Badge `status`; soft-outline fields with sm/md/lg sizes; icons from `@syntara/icons`.
  - icons: new package, 235 icons.
  - tokens: ships `dist` (`files`).

### Patch Changes

- 7f49a1c: Avatar initials keep a grapheme cluster whole where `Intl.Segmenter` is missing

  `getInitials` fell back to the first code point when the runtime has no `Intl.Segmenter`, which took half of a flag
  (`🇮🇳` → one regional indicator) and dropped a decomposed accent (`e` + U+0301 → `E`). It now approximates a cluster —
  a base character with its combining marks, skin tones and zero-width-joiner sequences, or a flag's two regional
  indicators. Where `Intl.Segmenter` exists nothing changes.

  Initials in Brahmic scripts are unchanged: still the base letter with its marks dropped (ADR-032), `रेखा यादव` → `रय`,
  now proven to hold on both the segmenter and the fallback path.

- 6971e1a: Compact figures no longer fail hydration

  `Intl.NumberFormat` with `notation: 'compact'` is not stable across ICU versions, and the runtime that prerenders a
  page is not the one that hydrates it. Measured on a Linux runner: Node produced `₹18.0K`, `$5.0K`, `£240k` where its
  own Chromium produced `₹18T`, `$5K`, `£240K`. Any page with a compact figure — `Amount compact`, or a chart, whose
  y-axis labels, data table and summary are all prerendered — threw React error #418, and React discarded the server
  HTML and re-rendered the whole page on the client.

  The build's string now stands, identically for every reader (ADR-033). Two changes make that work:

  - `suppressHydrationWarning` on the elements that carry compact output, and only those. Plain currency formatting is
    untouched — it matches across runtimes, and suppressing more than necessary would hide a real mismatch later.
  - **`Amount` renders the figure as one text node** instead of one per Intl part. Intl returns as many parts as it
    likes and the count depends on the value and the runtime (`18K` is two parts, `18.0K` is four), which made the
    difference structural rather than textual — and `suppressHydrationWarning` does not cover a change in the shape of
    the DOM. If you query inside `Amount`'s figure by child index, that index has changed; the currency and fraction
    spans still carry their own classes.

  Compact figures are now pinned to whatever ICU built the site, so they read the same in every browser, and a Linux
  build and a macOS build of the same commit can ship different strings.

- 99e44df: Icons from `@syntara/icons` flip and take the theme's stroke inside Button, Link and ToggleGroup.

  - Arrows and chevrons flip under right-to-left again. The rule matched Tabler's class names, which `@syntara/icons` doesn't render, so only icons with `data-directional` flipped.
  - Chip and Eyebrow icons fall back to a 1.5 stroke when `--syntara-icon-stroke` isn't set (was 1.75), the same as every other component (ADR-014).
  - Accordion: a closed panel in server-rendered HTML is `display: none` until React Aria mounts, so links inside it can't take focus before hydration.

- 561b13e: Avatar initials, date placeholders and PersonChip no longer break in Indic scripts

  - **Avatar** takes the base letter in Brahmic scripts instead of the whole syllable. A grapheme cluster there is a
    consonant plus its vowel signs, so one per word ran together as a word: "रेखा यादव" gave "रेया", and a lone "रे"
    reads as ₹. Now "रय"; a conjunct gives the consonant it starts with ("क्षमा शर्मा" → "कश"). Covers Devanagari,
    Bengali, Gurmukhi, Gujarati, Oriya, Tamil, Telugu, Kannada, Malayalam and Sinhala. Latin, Arabic and emoji initials
    are unchanged.
  - **DatePicker** fills in segment placeholders from `Intl.DisplayNames` for locales React Aria has no strings for. A
    Hindi field read "dd / mm / yyyy"; it now reads "दिन / माह / वर्ष". Only where React Aria fell back to English on a
    non-Latin locale — its own strings are kept where it has them, because a date input wants "dd" over "day".
  - **PersonChip** no longer shaves the top and bottom off names in scripts with marks above and below the letters. The
    ellipsis needs `overflow: hidden`, which made the name a clip box exactly as tall as its line; Hindi names lost 4px.
    The box now has room, and the chip's height is unchanged.

  `getInitials` is exported and its output changes for Brahmic-script names — if you snapshot avatar initials, those
  snapshots will need updating.

- Packaging for the first release.

  - Every package carries its own `LICENSE` (npm does not hoist a monorepo root one), `repository` with its
    `directory`, `homepage`, `bugs` and `keywords`, so npm can show a source link and the packages are findable.
  - `@syntara/react`, `@syntara/icons` and `@syntara/theme-engine` have READMEs, which are what npm renders as the
    package page.
  - `@syntara/icons` and `@syntara/theme-engine` are built packages rather than TypeScript source: ESM with
    `preserveModules` plus declarations, mapped through `publishConfig.exports`. They previously exported
    `./src/index.ts`, which Node cannot load and Next.js will not transpile without `transpilePackages`. Neither
    declared `files`, so npm had also been packing their test suites — 2 files and 14 respectively, including the
    native token snapshots; both now ship `dist` alone.
  - `@syntara/react` and `@syntara/tokens` build on `prepack`, so a tarball can no longer ship a stale `dist`.
  - `@syntara/sdui`'s peer ranges on `@syntara/react` and `@syntara/icons` are real ranges instead of `workspace:*`,
    which publishes as an exact pin and would make every later release a peer conflict.

- d8414dd: Tooltip: a tooltip no longer stays on the page after focus or hover moves straight to another tooltip's trigger. Before, each one stayed mounted at the top-left corner with `role="tooltip"`. Swapping between tooltips is still instant; the tooltip carries `data-instant` while it swaps. A tooltip whose trigger only had focus in passing (the last item of a toggle group, on Tab) no longer fades out after never appearing. A tooltip opened by keyboard focus stays open when that focus scrolls the page; a scroll you make still closes it.
- Updated dependencies [3ab8971]
- Updated dependencies
- Updated dependencies [e17f88a]
  - @syntara/icons@0.1.0
