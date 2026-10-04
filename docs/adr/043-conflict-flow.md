# ADR-043: One flow for conflicts, with a ranked priority order

- **Status:** Accepted — **Anuj** chose the size (a written flow plus a GitHub issue form, not automatic detection)
  and the priority order (2026-10-04). The wording of GOVERNANCE.md §9 is **Claude recommended, Anuj accepted**.
- **Date:** 2026-10-04
- **Scope:** `GOVERNANCE.md` §9, `.github/ISSUE_TEMPLATE/conflict.yml`. No code changes.

## Context

- GOVERNANCE.md said who decides each kind of change (§2) and what a request can turn into (§4), but not what
  happens when two rules clash, when someone disagrees with a past decision, or when two products want opposite
  things.
- Research (`docs/research/2026-10-04-conflict-management.md`) found a precedent for every piece, and nobody who
  combines them into one flow for conflicts. Not safe to call it a "first"; the research says why.

## Decision

1. **Every conflict goes raise → sort → decide → record** (GOVERNANCE.md §9).
2. **Priority order, in case of conflict:** accessibility over not breaking consumers over brand wishes over speed.
   Form borrowed from the W3C's priority of constituencies.
3. **A past decision is reopened only with significant new information** (John Ousterhout's rule, as used by Go).
4. **Opposite needs between products** go to a prop, variant or brand input first; otherwise a local override,
   back to the system at three products (Robert Glass's rule of three, already in §4).
5. **Every decided conflict ends in an ADR that names who decided.**

## Alternatives

- **Written flow only:** an hour's work, but nothing leads people into it.
- **Flow, form and automatic detection** (the drift auditor opens the issue itself): no tool found does this, so
  it would be new. Deferred until the form has been used and we know which conflicts actually come up.
- **Brand wishes before not breaking consumers:** lets brands push harder, at the cost of more breaking changes.
- **Not breaking consumers before accessibility:** contradicts principle 2.

## Consequences

- Tested on one real case: RFC-001 (Button `tone`). The flow sorts it as a rule clash, checks accessibility first
  (the new contrast pairs), then puts not breaking consumers over tidiness (`variant="danger"` kept until 1.0.0,
  with a codemod). That matches what was decided.
- The form can only add one fixed label (`conflict`). The kind is recorded in the form's answers, not as a label;
  per-kind labels would need a GitHub Action.
- Not enforced: nothing checks that a conflict issue ends in a record.
- No fixed comment window. Carbon uses one; adding it would be a new promise, so §3's review times stand.
