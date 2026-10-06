---
'@syntara/theme-engine': minor
---

A brand can use its own font (ADR-051). `BrandInput.font` takes a Google family or the brand's own files, for body
and optionally headings, with the line heights measured when it passed the checks. The engine turns it into the same
type tokens a type pair gives (the pair still sets the mono font) and refuses line heights outside 1.2–1.8 (tight),
1.35–1.8 (snug) and 1.5–1.9 (normal). New exports: `typePairForFont`, `fontFacesCSS`, `validateBrandFont`,
`fontFamilyOf`, `FONT_LINE_HEIGHT_BOUNDS`, `FONT_MIN_X_HEIGHT`. `typePair` is unchanged and still required.
