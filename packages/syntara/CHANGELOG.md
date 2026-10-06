# syntara

## 0.4.0

### Minor Changes

- 11163d5: `npx syntara init` now adds a welcome card to your app (`syntara-welcome.tsx`) that shows your brand on real components the first time you start it; delete the file and its two lines when you are done, or pass `--no-welcome`. The `ThemeScope` it adds follows the computer's light or dark setting (`scheme="auto"`), so an app whose own styles switch to dark mode no longer gets a light page under dark-mode text. `ThemeScope` accepts `scheme="auto"`.

### Patch Changes

- bf99e00: The npm description now says what `npx syntara init` does to a project, so an AI assistant that reads only the package summary can tell what it will change before running it.
- Updated dependencies [eb1ee7a]
- Updated dependencies [11163d5]
  - @syntara/icons@0.2.0
  - @syntara/react@0.4.0

## 0.3.0

### Minor Changes

- 37b9578: `npx syntara init` takes your own font: "Your own font" at the Fonts question, or `--font <Google name>`,
  `--font-file <paths>`, `--heading-font`, `--heading-font-file` and `--script latin|arabic|hindi`. The font is used
  only if it passes six checks, run in a minute or two in the Chrome or Edge on your computer (nothing to download):
  real Regular, Medium, Semibold and Bold; every test character drawn by the font; no letter cut off at any size;
  line spacing within limits; lower-case letters tall enough for 12px. A failing font gets one plain sentence per
  problem and a list of Google fonts that pass, and nothing is written. `npx syntara build` reuses the stored
  measurement.
- f07269d: `npx syntara init` now finishes the setup in your app too. It finds your entry file (`src/main.tsx` or `src/index.tsx`
  in Vite and Create React App, `app/layout.tsx` or `pages/_app.tsx` in Next.js), shows the two style imports and the
  `ThemeScope` it will add, and asks before saving (Enter = yes; `--yes` and runs without a terminal don't ask). It only
  edits a file where the thing it wraps (`<App />`, `{children}`, `<Component {...pageProps} />`) appears exactly once,
  follows the file's quotes, semicolons and line endings, and leaves a file that already imports `syntara/styles.css`
  alone. Anything else is left unchanged, with the lines to add by hand. `--no-edit` skips it.
- 9767dae: New: `npx syntara init` sets up your brand in a few questions (Enter takes every suggestion), or from one of five
  starting looks if you have no brand guidelines. It writes `syntara.brand.json` and a checked light and dark theme
  file, reports what it changed for contrast, offers to install `syntara`, and prints the two lines to add to your app.
  Every choice can also be passed as a flag (`--primary`, `--accent`, `--grey`, `--corners`, `--fonts`, `--spacing`,
  `--look`, `--name`), and anything given is not asked. `npx syntara build` rebuilds the theme after you edit the brand
  file. The package's homepage is now
  https://syntara.live.

### Patch Changes

- 5c00355: The package's repository and issue links point at the renamed GitHub repository, https://github.com/anujpatel06/syntara.
  The old address still redirects.
- Updated dependencies [37b9578]
- Updated dependencies [5c00355]
  - @syntara/theme-engine@0.3.0
  - @syntara/icons@0.1.1
  - @syntara/react@0.3.1
  - @syntara/tokens@0.2.1

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
