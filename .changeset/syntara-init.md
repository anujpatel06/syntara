---
'syntara': minor
---

New: `npx syntara init` sets up your brand in a few questions (Enter takes every suggestion), or from one of five
starting looks if you have no brand guidelines. It writes `syntara.brand.json` and a checked light and dark theme
file, reports what it changed for contrast, offers to install `syntara`, and prints the two lines to add to your app.
Every choice can also be passed as a flag (`--primary`, `--accent`, `--grey`, `--corners`, `--fonts`, `--spacing`,
`--look`, `--name`), and anything given is not asked. `npx syntara build` rebuilds the theme after you edit the brand
file. The package's homepage is now
https://syntara.live.
