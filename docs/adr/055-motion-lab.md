# ADR-055: Motion lab, a docs page that shows a brand in motion and prints the code

- **Status:** Accepted — **Claude recommended, Anuj accepted** (2026-10-06), all six decisions below.
- **Date:** 2026-10-06
- **Scope:** `apps/docs` (a new `/motion` route). No change to published packages in v1.
- **Spec:** `docs/design/motion-lab.md`

## Context

- Anuj asked for "something like" https://animos.app for Syntara: a browser tool that turns designs into looping
  motion clips and exports MP4. He then pointed out that Syntara's users can ship the real component, so the output
  should be code, not video.
- Syntara already has seven motion tokens (`packages/theme-engine/src/css-vars.ts`, `writeMotionVars`) but one feel
  for every brand. Scale amounts (how far things shrink or grow) are not tokens: they are written into component CSS
  as 11 different values.
- A cross-check of the first draft of the spec (2026-10-06) found two proposed springs that broke the spec's own rules
  (Snappy 600/30: 8.5% overshoot against a 5% limit; Calm 220/30: 536 ms against a 500 ms limit), measured with the
  engine's `springEasing`. Both were replaced before this decision.

## Options put to Anuj

1. **How many styles in v1.** (a) Three; (b) two. Claude recommended (a): two cannot show a range.
2. **Where styles live.** (a) A docs-site demo that prints token overrides; (b) a new option in the published
   `@syntara/theme-engine`. Claude recommended (a): (b) adds public API before anyone has used the idea.
3. **Where the page is linked.** (a) Home page only; (b) main nav. Claude recommended (a).
4. **A clip/GIF share button.** (a) Yes, built last; (b) no. Claude recommended (a).
5. **Naming the slow style.** (a) Rename to "Gentle"; (b) keep "Calm", which Harbor's type pair already uses. Claude
   recommended (a).
6. **Scale amounts as tokens.** (a) Not in v1; (b) now. Claude recommended (a): it touches many components.

Anuj accepted all six recommendations ("fix everything", 2026-10-06).

7. **What the stage loops** (found while building: a real Dialog is modal, so looping it blocks the controls and
   moves focus every cycle). (a) A stand-in with the Dialog's own stylesheet, plus a button that opens the real one;
   (b) the real Dialog behind a play button, no loop; (c) a new preview mode on Dialog itself. Claude recommended (a).
   **Anuj chose (a).**

## Decision

1. A `/motion` page on the docs site: pick a brand (Vela, Harbor, Qamar, Care, Haat) and a component (v1: Dialog),
   pick a motion style, watch it loop, copy the code.
2. Three styles that change only the seven motion tokens: **Tactile** (today's values), **Gentle**, **Snappy**.
   Values and measurements are in the spec, §4.
3. Every style passes: no duration over 500 ms, spring included; overshoot ≤ 5%; movement removed under reduced
   motion.
4. The code panel prints the overrides under `[data-syntara-theme="<id>"]` by default (what `npx syntara init`
   writes, ADR-049), with a switch to `:root`.
5. Home-page link only. Share clip last. Scale tokens later, if at all.
6. The stage loops a stand-in: Dialog's markup with `dialog.module.css` imported (not copied), inert and hidden from
   assistive tech. "Open the real Dialog" opens the component.

## Consequences

- Nothing published changes, so no changeset and no version bump for v1.
- Gentle and Snappy durations and curves are proposals until Anuj has seen them on the real Dialog. Any change is
  re-measured before the spec is updated.
- If the lab is used, promoting styles to a brand input is a separate decision under GOVERNANCE.md §4 (an addition)
  and §5 (versioning).

## Revision, 2026-10-06: a top-menu entry

**Anuj** decided, after #87 merged: "give me entry point on top bar". This replaces decision 3 (footer only, no
main-nav entry). "Motion" now sits in the site header between Themes and Colors, and the footer link stays.

The header row had no room for it as it was: measured on the home page, the 70px item put the row 22px over at 768
and 32px over at 1024 and 1120 (the search's growth steps). Following the header's own rule (keep 18px spare at
every step), "Motion" shows from 810px, and the search grows at 1074 and 1170 instead of 1024 and 1120. Below
810 it is in the mobile menu and the footer.


## Revision, 2026-10-06: more components, tiles, more controls

**Anuj** decided, in order:

1. "Left side should come all the components I can select to animate and on right all the controls to animate."
   The left panel became a component list; motion style moved to the right with brand, timing and preview.
2. Motion styles as small tiles in a row; components as tiles two in a row, each with a small drawing of the
   component.
3. "Add more motion controls, see the reference website." Spec §13: Fast / Normal / Slow durations and two easing
   choices (exported), plus Frame, slow motion, hold time and Reset (preview only).

**Claude** chose, following the spec's "one before many": the first batch is one component per kind of movement
(Dialog, Tooltip, Switch, Tabs, Accordion, Stat tile). Every one but Dialog is the real component driven through
its own props; Dialog stays a stand-in (decision 7). The other ~44 components with motion wait for Anuj to approve
this batch.
