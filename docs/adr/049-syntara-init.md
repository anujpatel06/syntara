# ADR-049: `npx syntara init`, a brand in a minute, with starting looks for teams without guidelines

- **Status:** Accepted — **Anuj** (2026-10-05) on who it is for, what people without guidelines get, the five looks
  and Technical's colour. Details marked **Claude recommended, Anuj accepted** were shown to him in the approved
  screenshots.
- **Date:** 2026-10-05
- **Scope:** `packages/syntara` (`bin/syntara.js`, `src/cli/`), its README.

## Context

- Making Syntara "scalable to every client" first needs one number: how long a new brand takes. Until now a brand
  meant a folder in this repo (`tenants/<id>/brand.json`), so only someone with the repo could add one. A team that
  installed `syntara` from npm had no way to make its own theme without calling the engine in code.
- Anuj: it "should be easy to install and use and seamless … or give an option for default selection if person don't
  have any brand guideline".

## Options put to Anuj

1. **Who the first version serves.** (a) Anyone, through `npx syntara init` in their own React project; (b) this repo
   only, as `pnpm new-brand`. Claude recommended (a). **Anuj chose (a).**
2. **What someone without guidelines gets.** (a) Pick from a few ready-made starting looks; (b) type one colour and
   get the rest; (c) Syntara's own neutral look, no questions. Claude recommended (a). **Anuj chose (a).**
3. **Technical's grey button in dark mode** (its near-black primary has to be lightened to stay visible, and reads
   as disabled). (a) A deep green primary; (b) keep near-black; (c) drop Technical. **Anuj chose (a).**

## Decision

1. **`npx syntara init`** ships in the one-install package (ADR-047), so installing and setting up are the same
   package. It asks "Do you have brand guidelines?" (Enter = no), then:
   - **No:** brand name, a starting look (numbered list, Enter = the first), and the main colour (Enter keeps the
     look's).
   - **Yes:** the six brand inputs: main colour, accent (Enter = the main colour), grey tone, corners, fonts, spacing.

   Every question has a suggested answer in brackets; Enter takes it. `--yes` asks nothing. A run with no terminal
   (CI, a pipe) also asks nothing.
2. **It writes two files:** `syntara.brand.json` (the inputs and theme id) and `syntara-theme.css` (in `src/` when the
   project has one): the brand's Google Fonts import, then its tokens under `[data-syntara-theme="<id>"]`, light, dark
   and both densities. `npx syntara build` rebuilds the CSS after the JSON is edited by hand. Existing files are never
   replaced without `--force` or a yes.
3. **It reports in plain words**, from the theme itself: the contrast check count, whether each brand colour was kept
   exactly or how far it moved, and each fix the solver made (its own one-sentence messages).
4. **It finishes the setup.** In a project with a `package.json` and no `syntara` dependency, it offers to install it
   with the project's own package manager (pnpm, yarn, bun or npm, from the lockfile). It then prints the two imports,
   the `ThemeScope` line and a link that opens the brand in the docs' theme preview
   (`https://syntara.live/themes?primary=…`).
5. **Five starting looks**, each a complete brand input (`src/cli/looks.js`). **Claude recommended, Anuj accepted**
   (approved in the screenshot):

   | Look | For | Main | Accent | Grey | Corners | Fonts | Spacing |
   |---|---|---|---|---|---|---|---|
   | Clear (default) | most products | `#2f5bea` | `#0f9d8a` | cool | soft | Modern (Geist) | comfortable |
   | Warm | consumer and lifestyle | `#c2410c` | `#0e7490` | warm | round | Friendly (Plus Jakarta Sans) | comfortable |
   | Editorial | content and media | `#25533f` | `#b7791f` | paper | sharp | Editorial (Fraunces / DM Sans) | comfortable |
   | Technical | dashboards and dev tools | `#047857` | `#0369a1` | neutral | sharp | Technical (Space Grotesk / IBM Plex) | compact |
   | Bold | brands that stand out | `#7b2ff7` | `#df2866` | neutral | round | Precise (Inter Tight / Inter) | comfortable |

   **Every look passes every contrast check and keeps both its colours exactly, in light and dark.** A test enforces
   both. Editorial's green (was `#1f4d3a`) and Bold's pink (was `#e8336d`) were moved to the values the engine kept
   them at, so nothing a new user sees has been adjusted. Technical's blue accent (`#0369a1`) replaced a cyan
   (`#0891b2`) the engine had to adjust: **Claude**, within Anuj's "deep green" call.

## Consequences

- A team outside this repo can make a checked brand without code. The command takes about a second
  (`/usr/bin/time -p expect` over a scripted run, log 2026-10-05).
- A name with no Latin letters (Arabic, Hindi) gets the id `my-brand`; it can be changed in `syntara.brand.json`.
- The theme CSS imports Google Fonts. Offline or privacy-strict apps have to self-host the fonts and delete that line.
- **Not done here:** brands inside this repo still use `tenants/<id>/`, and about 19 non-test files name tenants by
  hand (`grep -rlE "['\"](vela|harbor|qamar|haat)['\"]"`), some of which would leave a new tenant out. Custom brand
  fonts, locked colours and wider shape and spacing ranges are later steps, each a decision for Anuj.
