# Custom brand fonts — what "passes" means

**Status:** approved by Anuj with the first example (2026-10-06). Decisions: ADR-050 (**Anuj**: any font that passes; Google name or
own file; one or two fonts; on failure, say why and list Google fonts that pass; measure in their Chrome or Edge).

A brand can name its own font instead of picking one of the nine type pairs. Syntara accepts it only if every check
below passes. Each check is a measurement with a number, not a judgement, so the same font gets the same answer on
any machine and a failure can be explained in one plain sentence.

## What a brand gives

- **One font, or two** (body and heading; the brand says which is which). Each is either a **Google Fonts name**
  as Google spells it (`"Manrope"`) or **its own font file** (a path or URL to `.woff2`, `.woff`, `.ttf` or `.otf`:
  one file per weight, or one variable file). For an own file, the licence is the brand's responsibility.
- The **script** the brand writes in: `latin` (default), `arabic` or `devanagari`. Latin is always checked as well,
  because every brand shows Latin digits, SKUs and codes. The rupee sign ₹ is checked only for Hindi brands; other
  brands' test text shows dollars (**Anuj**, 2026-10-06, ADR-050).
- Mono (code, numbers in tables) is not part of this. It stays JetBrains Mono, or IBM Plex Mono for Arabic.

## The checks

Every check runs on the body font. The heading font, if different, runs checks 1–5 too; check 6 is body only.

| # | Check | Passes when | Measured with |
|---|---|---|---|
| 1 | **It exists** | Google Fonts serves the family by that exact name, or the brand's file loads in the browser. | `fonts.googleapis.com/css2?family=<name>` answers 200 with an `@font-face`; for a file, `document.fonts.load()` succeeds. |
| 2 | **Four weights** | 400, 500, 600 and 700 are all real faces (static files or a variable `wght` axis covering 400–700). The browser must never fake bold. | The same response lists `font-weight` 400, 500, 600 and 700; for files, one per weight or a variable file whose `wght` range covers 400–700. |
| 3 | **It draws the brand's script** | Every character in the test strings for the brand's script, and the Latin ones, is drawn by the font itself: **0 characters** fall back to another font. | In a browser: each string's width in `"<font>", serif` equals its width in `"<font>", monospace`. Any difference means a fallback drew something. |
| 4 | **No clipped ink** | At the brand's line heights, **0 cases** of glyph ink leave the line box, at every size Syntara uses (12–72px), weights 400 and 700, DPR 1 and 2, four sub-pixel offsets, one line and wrapped. | `scripts/check-script-clipping.mjs`, the script that chose Mukta (0 in 5,616 cases) and set every pair's line heights (ADR-031). |
| 5 | **Line heights stay in bounds** | The line heights needed for check 4 are **tight ≤ 1.8, snug ≤ 1.8, normal ≤ 1.9**: the loosest Syntara already ships (the Arabic pairs, ADR-031), so every component has been seen at them. Floor is the shared scale: tight 1.2, snug 1.35, normal 1.5. | Start at the shared scale; if anything clips, raise the failing step by 0.05 and measure again at exactly that value (clipping is not monotonic, ADR-031). Fail if a step passes its ceiling. |
| 6 | **Big enough to read small** | Body x-height **≥ 0.45 em** (Inter 0.546, Mukta 0.47 — the smallest Syntara ships; both from ADR-024). Below it, a 12px caption has smaller lower-case letters than 10px Inter (12 × 0.45 = 5.4px; 10 × 0.546 = 5.46px). | In a browser: the inked height of `x` at 100px, 400 weight, DPR 2, divided by 100. |

**Controls keep their size.** Control heights are fixed by density (40px comfortable, 32px compact), not by the
font, so targets stay ≥ 24px whatever the font. Check 5's ceiling keeps one line of control text inside the
control: 16px × 1.8 = 28.8px < 32px.

**What a pass produces** (stored with the brand, so the theme engine stays a pure function and never measures):

- The font's **measured line heights** (from check 5), which replace the shared scale exactly as a type pair's
  `script.lineHeight` does today.
- A **fallback stack** by Google's category: `serif` fonts get Syntara's serif fallback, everything else the sans
  one; Arabic and Devanagari get their script fallbacks (Tahoma / Nirmala UI and friends), as the pairs do.
- **Heading tracking:** `-0.01em` for Latin, `0` for Arabic (letter-spacing breaks joined script), and Devanagari's
  caps tracking `0` (ADR-024).
- The **Google Fonts link** for 400/500/600/700 with `display=swap`, so text shows in the fallback until the font
  arrives.
- A record of **when and with what** it was measured (Syntara version, date), so a later check can be compared.

## How a failure reads

One sentence per failed check, saying what is wrong, why it matters to the people using the product, and what to do.
No error codes, no numbers without their meaning. Nothing is written to disk when a font fails. The report ends with
**Google fonts that have passed the same checks** for that script, so a suggestion is never a guess. Examples:

- "**Lobster** comes in one weight only (Regular). Syntara needs four — Regular, Medium, Semibold and Bold — for
  body text, labels, buttons and headings. Pick a font that has all four, or one of the ready-made type pairs."
- "**Sora** has no Hindi letters, so Hindi text would be drawn by a different font, with different shapes and line
  heights. Pick a font that covers Devanagari, such as Mukta."
- "**Manropee** isn't on Google Fonts. Check the spelling on fonts.google.com."

## Anti-list — what this must not become

- **Not a font picker with taste.** No "recommended" badges, no ranking. Pass or fail, with the reason.
- **No silent fixes.** A font that fails is never swapped for a similar one behind the brand's back.
- **No guessed numbers.** Line heights come from measuring this font, never from a formula or another font's values.
  A theme never ships the shared 1.2 for a font nobody measured.
- **No faked weights.** A font that needs the browser to synthesise bold or medium fails.
- **No fallback passing for the font.** If the font doesn't load, the check fails; it never measures Arial instead.
- **No new places for brands to break.** Components don't learn about fonts; they keep reading the same tokens.
- **No breaking change.** `typePair` keeps working exactly as today; the font is an addition.

## Not in this version

- A custom mono font.
- Per-size line heights (ADR-031 left that to an RFC).

## Trade-offs put to Anuj (answers in ADR-050)

1. **How a brand gives its font.**
   (a) Google Fonts name only — Syntara can fetch it, see its weights and scripts, and every Google font is free to
   use. (b) Also a self-hosted file (a company's paid font) — real brands often have one, but Syntara can't check
   the licence and has to handle files and hosting.
   **Recommend (a) now**, (b) as its own later step once (a) is proven.
2. **Heading and body.**
   (a) One font for both, with an optional separate heading font. (b) One font only. (c) Always two.
   **Recommend (a):** most brands have one font; editorial brands need a second for headings.
3. **When a font fails.**
   (a) Say why in plain words, write nothing, and let them pick another font or a type pair. (b) Fall back to the
   nearest type pair and say so.
   **Recommend (a):** it is what "accepts it only if it passes" means; (b) ships a brand that isn't theirs.
4. **Where the checks run for someone using `npx syntara init`.** Measuring takes a real browser (about 50 seconds
   per font: `/usr/bin/time -p node scripts/check-script-clipping.mjs --pairs=modern` → real 50.58 s).
   (a) In Chrome or Edge already on their computer — nothing extra to download; a team without either is told so.
   (b) Download a browser on first use (196 MB on disk here: `du -sh ~/Library/Caches/ms-playwright/chromium_headless_shell-1234`). (c) Quick checks only (1, 2 from Google's data) in `init`,
   full measurement only in this repo.
   **Recommend (a):** the full checks everywhere, no big download; nearly every developer has Chrome or Edge.
