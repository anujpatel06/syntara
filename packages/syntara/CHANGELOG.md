# syntara

## 0.2.0

### Minor Changes

- fdfb2f2: New: `npx syntara init` sets up your brand in a few questions (Enter takes every suggestion), or from one of five
  starting looks if you have no brand guidelines. It writes `syntara.brand.json` and a checked light and dark theme
  file, reports what it changed for contrast, offers to install `syntara`, and prints the two lines to add to your app.
  Every choice can also be passed as a flag (`--primary`, `--accent`, `--grey`, `--corners`, `--fonts`, `--spacing`,
  `--look`, `--name`), and anything given is not asked. `npx syntara build` rebuilds the theme after you edit the brand
  file. The package's homepage is now
  https://syntara.live.

### Patch Changes

- f14e33a: The README says how to make `ThemeScope`'s background fill the whole page (`minHeight: '100vh'` and no `body`
  margin).
- Updated dependencies [7864023]
- Updated dependencies [8240ffc]
- Updated dependencies [549f2fc]
  - @syntara/react@0.3.0

## 0.1.0

### Minor Changes

- 7d03f6e: New package `syntara`: one install for everything on the site. `npm install syntara` brings the components
  (`@syntara/react`), the icon set (`@syntara/icons`), the token CSS for every brand (`@syntara/tokens`) and the theme
  engine (`@syntara/theme-engine`). `syntara/styles.css` is the tokens and the component styles in one file, so setup is
  one import. Entry points: `syntara`, `syntara/styles.css`, `syntara/icons`, `syntara/theme-engine`.

### Patch Changes

- Updated dependencies [2557e70]
- Updated dependencies [a5feb6f]
- Updated dependencies [aa8222b]
- Updated dependencies [8cf9136]
- Updated dependencies [16f45a5]
- Updated dependencies [1a41bbf]
- Updated dependencies [983fd22]
- Updated dependencies [983fd22]
- Updated dependencies [44ca23a]
- Updated dependencies [2c37d6e]
- Updated dependencies [2557e70]
- Updated dependencies [d3a538a]
- Updated dependencies [bd08eb7]
- Updated dependencies [9cc5d80]
- Updated dependencies [29f9b23]
  - @syntara/react@0.2.0
  - @syntara/theme-engine@0.2.0
  - @syntara/tokens@0.2.0
