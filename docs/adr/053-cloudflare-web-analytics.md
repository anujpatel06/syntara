# ADR-053: Let Cloudflare Web Analytics run on syntara.live

- **Status:** Accepted — **Claude recommended, Anuj accepted** (2026-10-06).
- **Date:** 2026-10-06
- **Scope:** `apps/docs/public/_headers` (the site's Content-Security-Policy). The analytics switch itself lives in
  the Cloudflare dashboard, not in this repo.

## Context

- Cloudflare Pages adds its Web Analytics script to every HTML page on **syntara.live** at its edge. It is not in
  the repo and not in the build. `curl` with a browser user agent shows it in the live HTML, with a site token; it is
  not added on `syntara.pages.dev`.
- The site's policy allowed scripts only from `'self'`, so browsers blocked it: "Loading the script
  'https://static.cloudflareinsights.com/beacon.min.js/…' violates the following Content Security Policy directive".
  Web Analytics was on but could record nothing.
- Anuj did not know it was on (2026-10-06). Cloudflare likely enabled it when the domain was added.
- The site had no outside scripts until now, and no earlier decision about analytics.

## Options put to Anuj

1. **Allow it.** Add `https://static.cloudflareinsights.com` to `script-src` and `https://cloudflareinsights.com` to
   `connect-src`. Page views, top pages, referrers and page-speed numbers. No cookies, so no consent banner. Cost: one
   outside script on every page.
2. **Turn off the injected analytics** in the Cloudflare dashboard. No outside scripts. Cloudflare's server-side
   traffic counts for the domain remain, without per-page detail or page speed.

Claude recommended (1). **Anuj chose (1).**

## Decision

`_headers` now sends `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; connect-src 'self'
https://cloudflareinsights.com`. The comment above the policy names the script and this ADR.

## Evidence

- `SYNTARA_BASE_URL=http://localhost:3417 node scripts/check-csp.mjs` against a fresh build (`FS3a_myytfOxyaR-Pj697`):
  144 routes, 0 failures.
- **That check does not cover this change.** It applies the repo's `_headers` to a local build, and Cloudflare's script
  only exists on the live site. So a one-off Playwright run loaded live `https://syntara.live/` with its CSP header
  swapped:
  - current live policy: the beacon is blocked (one CSP violation, no request to Cloudflare);
  - new policy: the beacon script loads (`200`), its page-view report to `cloudflareinsights.com/cdn-cgi/rum` returns
    `204`, and there are no CSP violations.

## Consequences

- If Cloudflare moves the beacon or its report endpoint to another host, it will be blocked again, silently. The
  symptom is the same console error on syntara.live; nothing in CI will catch it.
- If analytics is ever turned off in the dashboard, remove both hosts from `_headers` so the policy stays minimal.
- The site's privacy story changes from "no third-party scripts" to "one cookieless analytics script from Cloudflare".
