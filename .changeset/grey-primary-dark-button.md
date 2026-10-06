---
"@syntara/theme-engine": minor
"syntara": patch
"@syntara/react": patch
---

Grey and black brands (primary OKLCH chroma below 0.02) now get a near-white primary button with ink labels in dark mode, instead of a dull deepened grey that looked disabled (ADR-056). Coloured brands are unchanged.

New CSS variable `--syntara-glow-color`: the colour brand glows are mixed from. It is the primary fill, except for grey brands in dark mode, which glow in a mid grey so text on Card's feature glow keeps 4.5:1. Card falls back to the fill when the variable is missing.
