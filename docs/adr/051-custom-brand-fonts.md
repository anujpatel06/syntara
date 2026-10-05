# ADR-051: A brand can use its own font, if the font passes six measured checks

- **Status:** Accepted — **Anuj** (2026-10-05: any font that passes the checks, not an approved list; 2026-10-06: the
  four trade-offs below, the ₹ question, and the first example: Manrope, light and dark, and the failure messages).
  The six checks and their numbers: **Claude recommended, Anuj accepted** (approved with the first example).
- **Date:** 2026-10-06
- **Scope:** `packages/theme-engine` (brand input, type tokens), `packages/syntara` (`init`, `build`), the clipping
  measurement, docs. Spec: `docs/design/custom-fonts.md`.

## Context

- A brand picks one of nine type pairs (`packages/theme-engine/src/type-pairs.ts`). A real brand usually has its own
  font, and a pair that isn't theirs makes the theme feel borrowed.
- Every pair's line heights were measured so no glyph is cut off (ADR-024, ADR-031). A brand font has to meet the same
  bar, so "accepted" has to mean "measured", not "typed in".

## Options put to Anuj

1. **How a brand gives its font.** (a) Google Fonts name only; (b) also a font file of their own. Claude recommended
   (a) first. **Anuj chose both** ("they can do both").
2. **Heading and body.** (a) One font, optional heading font; (b) one only; (c) always two. Claude recommended (a).
   **Anuj:** one or two, and the brand decides which is for headings. That is (a).
3. **When a font fails.** (a) Say why, write nothing; (b) fall back to the nearest pair. Claude recommended (a).
   **Anuj:** inform them, ask them to choose a different one, **and give them a list of Google fonts** to choose from.
4. **Where `npx syntara init` measures.** (a) The Chrome or Edge already on their computer; (b) download a browser;
   (c) quick checks only. Claude recommended (a). **Anuj chose (a).**
5. **Is ₹ part of the English test text?** It was, because Syntara's tenants are Indian, so Sora (no ₹) failed for
   an English brand. Options: check ₹ only for Hindi brands; for every brand; never. Claude recommended Hindi only.
   **Anuj chose Hindi only.** Other brands' test text writes the amount in dollars.

## Decision

1. **A brand names one font, or two** (body and heading). Each is either a **Google Fonts family name** or a
   **font file of its own** (a path or URL to `.woff2`, `.woff`, `.ttf` or `.otf`, one file per weight or one variable
   file). `typePair` keeps working unchanged; a font is an addition, not a replacement (no breaking change, so no RFC).
2. **It is accepted only if it passes all six checks** in the spec: it loads, it has real 400/500/600/700, it draws
   every character of the brand's script and Latin itself, no ink is clipped at the brand's line heights, those line
   heights stay within tight/snug ≤ 1.8 and normal ≤ 1.9, and the body x-height is ≥ 0.45 em.
3. **A failing font is reported in plain words, one sentence per failed check, and nothing is written.** The report
   ends with Google fonts that **have passed the same checks** for that script, so the suggestions are never a guess.
4. **For an own font file, the licence is the brand's responsibility.** Syntara checks the file renders correctly; it
   cannot check that the brand may use it, and says so once.
5. **Measuring uses Chrome or Edge already installed.** No browser download. Someone with neither is told so and can
   pick a type pair.
6. **The measurement is stored with the brand** (line heights, fallback stack, when and with which Syntara version), so
   the theme engine stays a pure function with no network or browser.

## Consequences

- A brand can be set in its own type and still keep Syntara's promise that no text is cut off.
- Adding a font costs about a minute of measuring (one pair takes 50.58 s:
  `/usr/bin/time -p node scripts/check-script-clipping.mjs --pairs=modern`).
- Own font files add hosting to the brand's job: the theme points at their file, Syntara does not copy it anywhere.
- **Revisit when:** the first example is approved (the check numbers become **Anuj**'s or change); someone needs a
  custom mono font; per-size line heights get an RFC (ADR-031).
