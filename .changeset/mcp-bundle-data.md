---
'@syntara/mcp': patch
---

`npx @syntara/mcp` now works without a checkout of the repo. The package carries its own copy of the components, examples, blocks, icons, tenants, `AGENTS.md` and `GOVERNANCE.md`, written on `prepack`, and falls back to it when there is no `SYNTARA_ROOT` and no checkout. The auditor behind `audit_snippet` and `find_token` reads the same tenants. 0.1.3 and earlier started from npm but every tool failed with "No Syntara repo".
