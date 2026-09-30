# @syntara/codemods

## 0.1.0

### Minor Changes

- 9ee91af: Button gets `tone`, and `variant="danger"` is deprecated (RFC-001, ADR-021).

  - react: `<Button tone="danger">` on the `primary`, `outline` and `ghost` variants. `variant="danger"` keeps working and renders the same until 1.0.0; it warns once in development. Migrate with `npx @syntara/codemods button-variant-danger-to-tone <path>`. CSS that targets `[data-variant='danger']` keeps working until 1.0.0; change it to `[data-tone='danger']` before then.
  - theme-engine: the four `feedback.*.fg` roles are now solved against `surface.canvas` and `surface.raised` as well (118 contrast checks per brand, was 102). No token value changed: the new pairs already passed in every tenant.
  - codemods: new package, with `button-variant-danger-to-tone`.

### Patch Changes

- 205de82: Every published package now carries its own `LICENSE`, a `repository` entry pointing at its directory, `homepage`
  and `bugs`. `@syntara/react` and `@syntara/tokens` build on `prepack`, so a tarball can no longer ship a stale
  `dist`. `@syntara/react`, `@syntara/icons` and `@syntara/theme-engine` have READMEs, which are what npm shows.
