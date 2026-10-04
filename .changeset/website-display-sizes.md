---
'@syntara/theme-engine': minor
'@syntara/tokens': minor
---

Display sizes for website sections (ADR-043).

New tokens, in every brand: `--syntara-font-size-6xl` (60px) and `-7xl` (72px), with their tracking
(`--syntara-font-tracking-6xl`, `-7xl`), and `--syntara-space-20` (80px), `-24` (96px) and `-32` (128px) for the gaps
between website sections. DTCG, Figma and the Kotlin and Swift token files carry them too. The DTCG tree goes from
339 to 344 leaf tokens.

Additive only: with the new tokens removed, every type pair's CSS, DTCG and CSS-variable output is byte-identical to
before. The server-driven UI schema does not offer the new spaces as gaps, so it keeps its version.
