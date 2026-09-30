# @syntara/audit

## 0.1.0

### Minor Changes

- 320a45c: Phase 5: the drift auditor, the MCP server and brand fidelity (ADR-018, ADR-022).

  - audit: new package. `syntara-audit <path>` finds raw colours, off-scale sizes, written-out fonts, native elements, physical properties, missing accessible names and deprecated APIs. It scores 0–100, suggests a fix for every finding, and `--fix` applies the ones with a single right answer.
  - mcp: new package. A read-only MCP server with seven tools: `list_components`, `get_component`, `get_example`, `get_tokens`, `find_token`, `get_pattern` and `audit_snippet`. It serves `AGENTS.md` and `GOVERNANCE.md` as resources.
  - theme-engine: `brandFidelity(theme)` reports how far each brand fill is from the colour the brand asked for.
  - tokens: each tenant's `contrast-report.json` includes brand fidelity.

### Patch Changes

- 205de82: Every published package now carries its own `LICENSE`, a `repository` entry pointing at its directory, `homepage`
  and `bugs`. `@syntara/react` and `@syntara/tokens` build on `prepack`, so a tarball can no longer ship a stale
  `dist`. `@syntara/react`, `@syntara/icons` and `@syntara/theme-engine` have READMEs, which are what npm shows.
- Updated dependencies [9ee91af]
- Updated dependencies [820c317]
- Updated dependencies [a859d16]
- Updated dependencies [320a45c]
- Updated dependencies [3a42138]
- Updated dependencies [205de82]
- Updated dependencies [e17f88a]
  - @syntara/theme-engine@0.1.0
