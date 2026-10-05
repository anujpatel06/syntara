---
'syntara': minor
---

`npx syntara init` takes your own font: "Your own font" at the Fonts question, or `--font <Google name>`,
`--font-file <paths>`, `--heading-font`, `--heading-font-file` and `--script latin|arabic|hindi`. The font is used
only if it passes six checks, run in a minute or two in the Chrome or Edge on your computer (nothing to download):
real Regular, Medium, Semibold and Bold; every test character drawn by the font; no letter cut off at any size;
line spacing within limits; lower-case letters tall enough for 12px. A failing font gets one plain sentence per
problem and a list of Google fonts that pass, and nothing is written. `npx syntara build` reuses the stored
measurement.
