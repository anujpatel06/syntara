# ADR-052: Niche icons ship as their own package, with two measured caps

- **Status:** Accepted — **Anuj** (2026-10-06: 2,000 icons, outline only, duotone later per domain; the cap of 5 strokes
  and the cap of 4 filled dots). The separate package: **Claude recommended, pending Anuj** (he did not choose a home).
- **Date:** 2026-10-06
- **Scope:** new package `packages/icons-niche` (`@syntara/icons-niche`), spec in `docs/design/icon-domains.md`.

## Context

- `@syntara/icons` has 243 outline icons (480 with duotone twins). Anuj asked for 2,000 more at niche level (every
  specialist in healthcare, and so on for every domain).
- Putting them in `@syntara/icons` would make the main package about nine times larger for everyone.

## Decision

1. **Separate package**, `@syntara/icons-niche`, with `@syntara/icons` as a peer dependency (it supplies `createIcon`).
   One module per domain in `dist`, so a product imports only what it uses.
2. **Outline only**; duotone later, per domain (Anuj).
3. **Two caps, enforced by tests:** at most 5 stroked subpaths per icon (the spec's aim is 3; Anuj accepted 5 after the
   measured spread: 0–2 strokes: 432 icons, 3: 628, 4: 594, 5: 346, so 940 of 2,000 are above the aim of 3) and at most 4 filled dots (a spray of dots had been
   used to dodge the stroke count; `loading-spinner` is exempt).
4. **Drawn by agents, reviewed by eye.** The measured rules cannot say whether an icon reads as its name. Drawers cut
   and replaced about 200 drawings that read as the wrong object and named about 30 that still read weakly.

## Consequences

- A second package to release and keep in step with `@syntara/icons`' `createIcon`.
- Two caps in a spec file, not in the shipped `@syntara/icons` set, which has icons above both.
- Every icon needs a human look before the package is published (not done yet).
