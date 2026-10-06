# Motion lab spec

Status: **approved for the first build** (Anuj, 2026-10-06: all six recommendations in §9 accepted). Nothing is built yet. Decision record: [ADR-055](../adr/055-motion-lab.md).

Cross-checked against the repo on 2026-10-06. Every number below comes from a file or a command named next to it.

## 1. What it is, in one line

A page on the docs site where someone picks a brand and a component, chooses how it moves, watches it loop live, and copies the code.

Not a video tool. Syntara's users can ship the real component, so the output is code. A video or GIF is an optional share button, added last.

Inspired by https://animos.app (landing page read on 2026-10-06; editor not opened). We take the idea of "pick, tweak, loop". We do not copy their templates, copy text or code.

## 2. Who it is for, and what each gets

| Visitor | Does | Leaves with |
|---|---|---|
| Newcomer | Lands on the page and sees a component in a real brand, already moving | A reason to install Syntara |
| Existing user | Picks a motion style, tunes it, copies it | A block of token overrides to paste into their project |

## 3. What exists today

Motion is already tokens, with exactly **one feel**. Values from `packages/theme-engine/src/foundations.ts`; the CSS names from `writeMotionVars` in `packages/theme-engine/src/css-vars.ts`. There are **seven** motion variables:

| Token | Value |
|---|---|
| `--syntara-motion-duration-fast` | 120 ms |
| `--syntara-motion-duration-normal` | 200 ms |
| `--syntara-motion-duration-slow` | 320 ms |
| `--syntara-motion-duration-spring` | 402 ms (measured, see §4) |
| `--syntara-motion-easing` | `cubic-bezier(0.2, 0, 0, 1)` |
| `--syntara-motion-easing-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| `--syntara-motion-spring` | stiffness 400, damping 28, as CSS `linear()` |

Already in the rules (`packages/react/CONVENTIONS.md`, Tactile style): every transform sits inside `prefers-reduced-motion: no-preference`; only opacity, transform, colour and shadow animate; no JS animation libraries.

**What is not a token:** how far things shrink or grow. Scale values are written into each component's CSS. `grep -rhoE "scale: ?0\.[0-9]+" packages/react/src/ui | sort | uniq -c` finds 11 different values (0.96 ×17, 0.9 ×14, 0.8 ×14, 0.98 ×10, 0.97 ×5, and six rarer ones). Dialog itself enters from **0.94** and exits to **0.98** (`dialog.module.css`, keyframes `grow` and `shrink`), not the 0.96 CONVENTIONS describes for modals.

**The gap:** every brand moves the same way. The lab's new idea is a *motion style*, a named set of the seven tokens, that a brand can choose.

## 4. Motion styles (to approve)

A style changes **the seven token values only**: time and curve. It does not change how far anything scales or travels, because those are not tokens (§3). No component code changes, no tenant ids in components. The first style equals today, so nothing existing moves.

| | Tactile (today) | Gentle | Snappy |
|---|---|---|---|
| Feel | Alive under the hand | Slower, soft, no bounce | Faster, crisp, small bounce |
| fast / normal / slow | 120 / 200 / 320 ms | 160 / 280 / 440 ms | 80 / 140 / 220 ms |
| Easing (standard) | `cubic-bezier(0.2, 0, 0, 1)` | `cubic-bezier(0.4, 0, 0.2, 1)` | `cubic-bezier(0.3, 0, 0, 1)` |
| Easing out (enters) | `cubic-bezier(0.16, 1, 0.3, 1)` | `cubic-bezier(0.22, 1, 0.36, 1)` | `cubic-bezier(0.1, 1, 0.2, 1)` |
| Spring stiffness / damping | 400 / 28 | 300 / 34 | 700 / 38 |
| Spring overshoot (measured) | 4.4% | 0.0% | 3.7% |
| Spring duration (measured) | 402 ms | 446 ms | 311 ms |

Spring numbers come from the engine's own `springEasing` with 400 samples, run on 2026-10-06 from `packages/theme-engine`:

```sh
npx tsx -e "import {springEasing} from './src/foundations.ts'; for (const [k,c] of [[400,28],[300,34],[700,38]]) { const {easing,duration}=springEasing(k,c,400); const peak=Math.max(...easing.slice(7,-1).split(',').map(Number)); console.log(k,c,((peak-1)*100).toFixed(1)+'%',duration+'ms') }"
```

Rejected on the way, by the same method:

| Tried | Overshoot | Duration | Why rejected |
|---|---|---|---|
| Snappy 600 / 30 (first draft) | 8.5% | 420 ms | Breaks the 5% rule |
| Gentle 220 / 30 (first draft) | 0.0% | 536 ms | Breaks the 500 ms rule |

The durations and easing curves for Gentle and Snappy are **proposals, not tested by eye.** They get tuned on the real Dialog, and any change is re-measured before it is written here.

Rules every style must pass:
1. Fast < normal < slow. No duration, **spring included**, is over 500 ms.
2. Spring overshoot ≤ 5%, measured with `springEasing`.
3. Reduced motion: movement is removed, short opacity fades stay. Same in every style.
4. Styles change time and curve only. Never colour, size, radius or scale amount.

## 5. The page

Route: `/motion` on the docs site (free: `ls apps/docs/app` has no `motion`). Top to bottom:

1. **Stage.** The chosen component, centred, on a surface in the chosen brand. A light/dark switch. Direction follows the brand (Qamar is right-to-left, in Arabic), not a separate toggle: Dialog's motion has no direction in it, and mirrored English would be a state no product ships.
2. **Controls, three groups:**
   - Brand: the five product tenants (Vela, Harbor, Qamar, Care, Haat). `house` is the docs site's own theme, so it is the default, not a choice.
   - Component (v1: Dialog only).
   - Motion style (the three above), plus a **speed** slider and a **bounce** slider (0 to 100% of the style's overshoot). Speed stops wherever the longest duration would pass 500 ms, so the sliders can never break rule 1.
3. **Loop.** The stage replays on its own: open, hold 1.2 s, close, wait 0.6 s, repeat. A pause button and a "preview reduced motion" toggle are always visible. A visitor whose system asks for reduced motion starts paused.
   - **What loops is a stand-in, not the modal** (Anuj, 2026-10-06). A real Dialog is modal: it covers the page, moves focus into itself and hides the rest from assistive tech. Looping it would block the controls and steal focus every cycle. The stand-in is the Dialog's markup wearing the Dialog's own stylesheet (`dialog.module.css`, imported, not copied), inside the stage, hidden from assistive tech and inert. Its look and motion can't drift from the component's because they are the same CSS.
   - **"Open the real Dialog"** opens the component itself, once, with the chosen motion.
4. **Code panel.** Two tabs: *Tokens* and *Component*, each with one Copy button.

Not in v1: video or GIF export, saving, accounts, any component but Dialog, a custom curve editor.

## 6. How the code output works

- **Tokens tab** prints the seven motion variables for the chosen style and sliders.
  - The selector matters. A `:root` block loses to a theme scoped under `[data-syntara-theme="<id>"]`, and that scoped form is what most users have: `npx syntara init` writes its tokens that way (ADR-049), and so do the docs site's tenants. The engine's plain export uses `:root` (`packages/theme-engine/src/export/css.ts`).
  - So the panel prints `[data-syntara-theme="<id>"]` by default, with a text field for the theme id (prefilled from the chosen brand) and a switch to `:root`. The note under it says: paste after your Syntara CSS.
- **Component tab** prints the existing Dialog example (`apps/docs/examples/dialog/dialog-demo.tsx`) unchanged, because Dialog's motion reads the tokens (`dialog.module.css` uses all seven).
- Spring sliders regenerate the curve with `springEasing`. A test checks that the printed block equals the values on the stage.

## 7. Anti-list (what "generic" means here)

- No decorative looping backgrounds, glow blobs or floating shapes. The component is the show.
- No "AI" or "magic" wording.
- No testimonials or logos we cannot back up.
- No video-editor chrome: no timeline, scrubber or layers.
- No new colours, radii or fonts. Tokens only.

## 8. Definition of done for the first version

Anuj approves when he sees:
1. `/motion` running locally with Dialog, brand Harbor, style Tactile, looping.
2. Switching to Gentle and Snappy visibly changes the feel. A still screenshot can't show motion, so this comes as a **short screen recording, or two frames per style** (mid-enter and settled).
3. The Tokens output pasted into a blank Syntara project gives the same motion.

Only after that: `/verify` once, the `/screenshots` sweep once, a docs nav link, then more components in groups.

## 9. Decisions (2026-10-06, all **Claude recommended, Anuj accepted**; see ADR-055)

1. Three styles in v1: Tactile, Gentle, Snappy. Two cannot show a range.
2. A docs-site demo that prints overrides. Styles are **not** added to the published `@syntara/theme-engine` yet; promote them only if people use the lab.
3. ~~Linked from the home page only, for now. No main-nav entry.~~ Revised by Anuj, 2026-10-06: "Motion" is in the
   site header from 810px (ADR-055 revision). Built as a "Motion lab" link under Brand in the footer
   (`FOOTER_COLUMNS`), which the home page shares with every page, so it also shows in other pages' footers.
4. A clip/GIF button for sharing, built last.
5. The middle style is called **Gentle**, because Harbor's type pair is already called `calm` (`tenants/harbor/brand.json`).
6. Scale amounts stay out of v1. Making them tokens touches 11 values across many components and is its own piece of work.

## 10. Risks

- Gentle and Snappy may feel wrong once seen. That is why they are tuned by eye before being made final.
- Making styles a published engine option adds to the public API. Under GOVERNANCE.md §4 it is an addition, and §5 (versioning) decides the version bump. Keeping v1 as a demo avoids both.
- The looping Dialog: **was a risk, found in the build.** Controlling `isOpen` works, but a looping modal blocks the page and steals focus. Resolved with the stand-in (§5).

## 11. Editor layout (Anuj, 2026-10-06: "build the layout how [Animos] has, and the export button at the top")

Exemplar: the Animos editor (Anuj's screenshot, 2026-10-06, 2000 px wide). What we take: a full-height workspace with
three columns, a top bar holding the title and the primary action, a dotted canvas, and a play bar under the stage.
What we don't take: their colours, their blue Export, their template thumbnails' content.

Measured on the screenshot, converted to tokens:

| Part | Animos (px of 2000) | Ours |
|---|---|---|
| Top bar | 78 tall, title centred, Export right | `space-12` + `space-2` (56 px), same as the site header |
| Left panel | 333 wide, 2-column thumbnail grid, section label in caps with a count | `space-16` × 4.5 (288 px) |
| Right panel | 445 wide, grouped settings, caps section labels | `space-16` × 5.5 (352 px) |
| Canvas | dot grid, stage centred with a 1 px edge | dots: 1 px, every `space-5`, `border.subtle` |
| Play bar | 78 tall: play/pause, restart, progress, "15.6s / 20.0s" | 56 px: same four parts |

- **Workspace height:** the viewport minus the site header (`100dvh − --docs-header-height`), never less than
  `space-32` × 5 (640 px). Each side panel scrolls on its own.
- **Left panel:** "Motion style · 3": one card per style, each with a small live preview of that style's spring.
  "Component · 1": Dialog. No placeholder cards for components that don't exist.
- **Right panel:** Brand, Timing (speed, bounce, the measured readout), Preview (dark, reduced motion).
- **Top bar:** "Motion lab" + the brand and style as the subtitle, centred; Export (primary button) at the end.
- **Export** opens a real Dialog (so it moves with the chosen style) with the Tokens and Component tabs, Copy and
  Download. Video export is a separate piece of work (see below).
- **Play bar:** pause/play, restart, a progress line through one loop, and the time in the loop
  ("1.2 s / 2.6 s"). The progress line is decoration (hidden from assistive tech); the time is plain text.
- **Under 900 px wide:** one column, in order stage, settings, styles; the workspace grows with its content.

Video export (not built): the stand-in is live page content, which a browser can't draw into video frames
directly. It needs either drawing the Dialog again in a canvas or a capture step on a server, and an MP4 encoder.
Decide separately.

## 12. Components on the left, every motion control on the right (Anuj, 2026-10-06)

Anuj: "left side should come all the components i can select to animate and on right all the controls to
animate". The left panel lists the components as tiles, two in a row, each with a still drawing of the component in the
chosen brand's tokens (`component-thumbs.tsx`) and its name; the selected component's description sits under the
list (Anuj's follow-ups). Grouped Overlays / Controls / Content; the right panel holds motion
style (three small tiles in a row, Anuj's follow-up; the selected style's description under the row), brand,
timing and preview.

One before many: the first batch is one component per kind of movement, shown to Anuj before the rest.

| Kind | First batch | How the loop drives it |
|---|---|---|
| Overlay that takes over the page | Dialog | Stand-in wearing `dialog.module.css` (modal: it would block the controls and move focus) |
| Overlay next to a control | Tooltip | The real component, `isOpen` |
| On/off state | Switch | The real component, `isSelected` |
| Selection that slides | Tabs | The real component, `selectedKey` |
| Height | Accordion | The real component, `expandedKeys` |
| Content arriving | Stat tile | The real component, remounted each loop |

The list lives in `apps/docs/components/motion/specimen-list.ts` (plain data, readable on the server) and the
drawing in `specimens.tsx`. The loop waits for the animations each change starts, including overlays portalled out
of the stage, so each component's loop is as long as its own motion. The stage is decoration: inert and hidden
from assistive tech. Not yet covered: about 44 more components with motion (checked by grepping each component's
CSS for keyframes, enter/exit states, press states and transitions on 2026-10-06), after Anuj approves this batch.

## 13. More motion controls (Anuj, 2026-10-06: "add more motion controls, see the reference website")

Read from the Animos editor's right panel on 2026-10-06 (`/editor`, page text): Frame (six aspect ratios),
Media, Timing (loop duration 5–30 s), Text, Logo, background (colour / gradient / image), Position (padding,
corner radius, tilt, size, perspective…), Shadow, Reset settings, and a Keyframes timeline. Most of that arranges
photos for a video; what carries over is below. Controls are in two kinds, and the panel says which is which.

**Exported (they change the seven tokens the Export dialog prints):**

| Control | Range | Rule it keeps |
|---|---|---|
| Fast / Normal / Slow durations | 40–250 / 80–400 / 120–500 ms, step 10 | fast < normal < slow (moving one pushes its neighbour); speed then scales all three; nothing over 500 ms |
| Standard easing | style's own, Ease in-out `(0.4, 0, 0.2, 1)`, Sharp `(0.4, 0, 0.6, 1)`, Linear | — |
| Enter easing | style's own, Out quart `(0.25, 1, 0.5, 1)`, Gentle out `(0.22, 1, 0.36, 1)`, Decelerate `(0, 0, 0.2, 1)` | no "back" curves: their overshoot is outside rule 2 |
| Curve graph | draws the enter easing and the spring, with the spring's measured overshoot | — |

**Preview only (the stage changes, the export doesn't), as Animos's Frame and Timing:**

| Control | Values |
|---|---|
| Frame | Desktop, Tablet, Phone. Phone is narrower than Dialog's 480 px breakpoint, so it shows the bottom sheet |
| Playback | 0.25×, 0.5×, 1×: every duration on the stage divided by it, to watch motion slowly |
| Hold open | 0.6, 1.2, 2 s |
| Reset settings | back to the style as designed |

Not taken: Keyframes, Text, Logo, background, Position, Shadow (they arrange images for a video, not how a
component moves), and scale amounts (decision 6).

### Batch 2 (2026-10-06, after Anuj: "it's live now, add the next batch of components")

Ten more, using only the two methods batch 1 proved: Sheet (stand-in wearing `sheet.module.css`, modal like
Dialog); Checkbox (`isSelected`), Radio group (`value`), Toggle group (`selectedKeys`), Chip (`selectedKeys`),
Steps (`current`); Badge, Meter, Sparkline and Avatar (remounted each loop: they animate as they mount). 16 in all.
Left for batch 3, because opening them moves focus or announces to screen readers: Popover, Select, Menu,
Combobox, Date picker, Command, Toast.
