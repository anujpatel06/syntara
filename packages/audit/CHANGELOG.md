# @syntara/audit

## 0.2.2

### Patch Changes

- Updated dependencies [5f9b8fd]
  - @syntara/theme-engine@0.4.0

## 0.2.1

### Patch Changes

- 5c00355: The package's repository and issue links point at the renamed GitHub repository, https://github.com/anujpatel06/syntara.
  The old address still redirects.
- Updated dependencies [37b9578]
- Updated dependencies [5c00355]
  - @syntara/theme-engine@0.3.0

## 0.2.0

### Minor Changes

- 89d7afb: New rule `unknown-token`: flags a `var(--syntara-…)` name the theme engine does not emit.

  An undefined custom property is not a CSS error. `var(--syntara-radius-md)` parses, and the declaration holding it
  is then invalid at computed-value time — it computes to `unset`, so it silently does nothing while still winning
  the cascade over any lower-specificity rule that would have worked. Seven invented names had reached the docs site
  that way, three of them in `:focus-visible` rules, where the effect was not cosmetic: the focus ring was erased on
  five keyboard-reachable elements, over the site's own `:where(…:focus-visible)` fallback, with no error anywhere.
  That is a WCAG 2.2 AA 2.4.7 failure that nothing in the build could see.

  The known names come from the engine's `toCssVariables`, the same function the exporters and the Brand Generator
  use, unioned over every tenant, both schemes and both densities, so the list cannot drift from what ships. Names
  outside the `--syntara-` namespace are not the rule's business, and a file that declares a `--syntara-*` name
  itself may use it. The fix is never safe: which role is right depends on what the element is, so the rule lists
  the candidates and asks for a comment saying why.

  The rule is an `error`, and it counts an opportunity for every `--syntara-*` use. **Scores move**: a file that
  uses tokens correctly now gains error-weighted passing opportunities, so it scores higher than it did under the
  ten-rule set. Audit scores are only comparable within one version of the rule set — the agent eval's recorded
  numbers in `evals/results.md` were produced under the old one.

### Patch Changes

- Updated dependencies [29f9b23]
  - @syntara/theme-engine@0.2.0

## 0.1.0

### Minor Changes

- 320a45c: Phase 5: the drift auditor, the MCP server and brand fidelity (ADR-018, ADR-022).

  - audit: new package. `syntara-audit <path>` finds raw colours, off-scale sizes, written-out fonts, native elements, physical properties, missing accessible names and deprecated APIs. It scores 0–100, suggests a fix for every finding, and `--fix` applies the ones with a single right answer.
  - mcp: new package. A read-only MCP server with seven tools: `list_components`, `get_component`, `get_example`, `get_tokens`, `find_token`, `get_pattern` and `audit_snippet`. It serves `AGENTS.md` and `GOVERNANCE.md` as resources.
  - theme-engine: `brandFidelity(theme)` reports how far each brand fill is from the colour the brand asked for.
  - tokens: each tenant's `contrast-report.json` includes brand fidelity.

### Patch Changes

- Packaging for the first release.

  - Every package carries its own `LICENSE` (npm does not hoist a monorepo root one), `repository` with its
    `directory`, `homepage`, `bugs` and `keywords`, so npm can show a source link and the packages are findable.
  - `@syntara/react`, `@syntara/icons` and `@syntara/theme-engine` have READMEs, which are what npm renders as the
    package page.
  - `@syntara/icons` and `@syntara/theme-engine` are built packages rather than TypeScript source: ESM with
    `preserveModules` plus declarations, mapped through `publishConfig.exports`. They previously exported
    `./src/index.ts`, which Node cannot load and Next.js will not transpile without `transpilePackages`. Neither
    declared `files`, so npm had also been packing their test suites — 2 files and 14 respectively, including the
    native token snapshots; both now ship `dist` alone.
  - `@syntara/react` and `@syntara/tokens` build on `prepack`, so a tarball can no longer ship a stale `dist`.
  - `@syntara/sdui`'s peer ranges on `@syntara/react` and `@syntara/icons` are real ranges instead of `workspace:*`,
    which publishes as an exact pin and would make every later release a peer conflict.

- Updated dependencies [9ee91af]
- Updated dependencies [820c317]
- Updated dependencies [a859d16]
- Updated dependencies
- Updated dependencies [320a45c]
- Updated dependencies [3a42138]
- Updated dependencies [e17f88a]
  - @syntara/theme-engine@0.1.0
