# ADR-044: Display sizes for website sections

- **Status:** Accepted. **Anuj** chose to add display sizes to the engine (option A, 2026-10-04). Keeping them out
  of the server-driven UI gaps, and raising the MCP `get_tokens space` budget from 900 to 1,000 bytes, are
  **Claude recommended, pending Anuj**.
- **Date:** 2026-10-04
- **Scope:** `packages/theme-engine` (foundations, types, exporter key lists), `packages/sdui` (gap list),
  `packages/mcp` (a test budget), `apps/docs/content/docs/theming.mdx`.

## Context

Website blocks (spec: `docs/design/marketing-blocks.md`) need a hero headline around 72px and 96px between
sections. The engine stopped at 48px type (`5xl`) and 64px space (`16`), which suits app screens.

Options put to Anuj: **A** add display sizes to the engine; **B** compute them inside each block from existing
tokens (hidden, nobody else can use them); **C** stay at 48 / 64px.

## Decision

1. Add `font-size 6xl = 60`, `7xl = 72` (and their tracking from the existing size curve; 0 for Arabic-capable
   pairs) and `space 20 = 80`, `24 = 96`, `32 = 128`. Same values for every shape and density.
2. **No new line height.** A display line height (≈1.05) was in the spec, but each type pair's `tight` value was
   measured so no glyph clips (ADR-031: 1.3 for several pairs, 1.8 for Devanagari). A tighter value would need the
   same clipping measurement per pair. Hero headlines use `tight` until that is measured.
3. The server-driven UI keeps offering `space-0`…`space-16` as layout gaps. The new spaces are for websites; adding
   them would widen the wire format and force a schema version bump for nothing.

## Consequences

- DTCG leaf tokens 339 → 344 (`countTokens()`; `pnpm --filter @syntara/theme-engine test`).
- Additive only, checked before re-recording the output fingerprints in `test/script-type.test.ts`: with the new
  tokens removed, all 8 pairs' CSS, DTCG and CSS-variable hashes equal the previous rows; shadcn is unchanged.
- MCP `get_tokens space` measured 971 bytes (`pnpm --filter @syntara/mcp test`), over its 900 budget; now 1,000.
