# ADR-052: Niche icons live in `@syntara/icons`, behind their own entry point, with two measured caps

- **Status:** Accepted — **Anuj** (2026-10-06: 2,000 icons, outline only, duotone later per domain; the cap of 5
  strokes and the cap of 4 filled dots; "include in same" package). The entry point `@syntara/icons/niche` instead of
  the main entry: **Claude recommended, pending Anuj** (see Consequences).
- **Date:** 2026-10-06
- **Scope:** `packages/icons` (`src/icons/niche/`, `src/niche.ts`), spec in `docs/design/icon-domains.md`.

## Context

- `@syntara/icons` has 243 outline icons (480 with duotone twins). Anuj asked for 2,000 more at niche level (every
  specialist in healthcare, and so on for every domain).
- First built as a separate package (`@syntara/icons-niche`, Claude recommended). **Anuj chose the same package.**
- Three consumers import the *whole* main entry (`import * as icons`): the server-driven UI renderer and schema
  generator (`packages/sdui`: schema icon names, renderer bundle), the docs icon gallery, and `syntara/icons`
  (`export *`). Putting 2,000 icons in the main entry would grow all of them, and would change the SDUI schema, which has
  its own version.

## Decision

1. **Same package, own entry point:** `import { IconCardiology } from '@syntara/icons/niche'`. The main entry is
   unchanged (a test asserts no niche export leaks into it). Moving the icons into the main entry later is one
   re-export line, once the three consumers above are ready for it.
2. **Outline only**; duotone later, per domain (Anuj).
3. **Two caps, enforced by tests:** at most 5 stroked subpaths per icon (the spec's aim is 3; Anuj accepted 5 after the
   measured spread: 0–2 strokes 432 icons, 3: 628, 4: 594, 5: 346, so 940 of 2,000 are above the aim of 3) and at most
   4 filled dots (a spray of dots had been used to dodge the stroke count; `loading-spinner` is exempt).
4. **Drawn by agents, reviewed by eye.** The measured rules cannot say whether an icon reads as its name. Drawers cut
   and replaced about 200 drawings that read as the wrong object and named about 30 that still read weakly.

## Consequences

- One package to release (a minor bump). Consumers who want niche icons import from the subpath; bundlers tree-shake
  per domain module.
- `@syntara/icons` now carries the pack in its published files (about 2 MB of unminified ESM and source maps in `dist`).
- Two caps in a spec file, not in the shipped 243, which has icons above both.
- Every icon needs a human look before the package is published (not done yet).
