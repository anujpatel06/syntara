# Research: has anyone built a conflict-management flow for a design system?

- **Date:** 2026-10-04
- **Asked by:** Anuj ("has anyone done it" / "lets do this")
- **Method:** web search, then primary pages fetched on 2026-10-04 with a page reader that extracts and summarises the page. Quotes below come from that extraction, not from a person reading the page in a browser. Medium (EightShapes, Salesforce UX) and the Salesforce sites refused the fetch (403), so those claims rest on search snippets and are marked [S].

## How to read this

- **[V]** read on a primary or official page today · **[S]** search snippet or secondary source · **[U]** could not be verified.
- "Not found" is **absence of evidence**, not proof of absence.
- No number here was produced by a Syntara script. **None of them may appear on the site as a Syntara metric.**

The flow being checked has four steps (Raise → Sort into three kinds → Decide → Record) and one optional extra (a linter that files the conflict itself). Section 1 takes each piece in turn.

## 1. Who has done which piece

### Raise: a structured way to report the problem

- **GOV.UK Design System** runs a public community backlog on GitHub where teams discuss proposed components and patterns. It is for *proposals*, not for clashes. [V] https://github.com/alphagov/govuk-design-system-backlog
- **Home Office Design System** has a working group that turns community discussions into GitHub issues and tracks its decisions there. [V] https://design.homeoffice.gov.uk/design-system/contribute/working-group
- **Brad Frost** (2024) says the real "trick" of governance is simply to talk: give people a channel and answer them. Useful as a reminder that the form is a starting point, not the whole process. [V] https://bradfrost.com/blog/post/master-design-system-governance-with-this-one-weird-trick/
- Issue forms (structured GitHub forms with required fields) are a standard GitHub feature. [V] https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms
- **Not found:** any design system with an issue form or intake specifically for a *conflict* (two rules clashing, or two products wanting opposite things). Every intake found is for bugs, requests or proposals.

### Sort (a): two rules clash → a ranked priority order

- **W3C HTML Design Principles** (Working Draft, 26 Nov 2007), §3.2 "Priority of Constituencies": "consider users over authors over implementors over specifiers over theoretical purity". It is introduced with "In case of conflict", so it is explicitly a tie-break. [V] https://www.w3.org/TR/html-design-principles/
- **W3C TAG Web Platform Design Principles** carries the same ranking forward as §1.1, in a Group Note dated 14 Sep 2026. So the precedent is current, not just historical. [V] https://www.w3.org/TR/design-principles/
- **Salesforce Lightning Design System** lists four principles (Clarity, Efficiency, Consistency, Beauty), and a principles collection says they are "used in order of priority to drive design decisions", citing a Salesforce UX article by JD Vogt. This is the clearest case found of a design system *ranking* its principles. The official SLDS pages and the Medium article refused the fetch, so this is not confirmed first-hand. [S] https://www.designprinciplesftw.com/collections/salesforce-lightning-design-principles · [S] https://medium.com/salesforce-ux/defining-principles-to-drive-design-decisions-b647b68fb057
- Writing about principles in general argues that good principles must reveal priorities and say which wins in which context. That is advice, not a system doing it. [S] https://principles.design/articles/why-most-design-principles-fail · [S] https://www.nngroup.com/articles/design-principles/
- **Not found:** a design system whose ranked list puts *accessibility*, *not breaking consumers* and *brand wishes* in one explicit order. Salesforce ranks user-facing qualities; W3C ranks people. Neither ranks the trade-offs a multi-brand system actually faces.

### Sort (b): someone disagrees with a past decision → reopen only with new evidence

- **John Ousterhout, "Open Decision-Making"**: reconsider a decision only when "significant new information has come to light". [V] https://web.stanford.edu/~ouster/cgi-bin/decisions.php
- **Go's proposal process** adopts Ousterhout's rule by name. It also has a written escalation path when the review group can't agree: first the Go architects, then a named arbiter who documents the decision and its reasons on the issue. [V] https://github.com/golang/proposal/blob/master/README.md
- **ADR practice** treats an accepted record as fixed: if the decision changes, you write a new record that supersedes the old one. [S] https://docsio.co/blog/architecture-decision-record
- **Not found:** a design system that writes the "new evidence or it stands" rule into its own governance. Design systems with RFCs (below) describe how to propose, not how to reopen.

### Sort (c): two products want opposite things → setting, or local override until enough need it

- **Brad Frost, "A Design System Governance Process"** (4 Nov 2019) sorts new work into system work or a "snowflake" (a one-off for one product). Snowflakes stay in the product's backlog, tracked so they can be folded into the system later. [V] https://bradfrost.com/blog/post/a-design-system-governance-process/
- **Primer (GitHub)** is local-first: product teams build a pattern themselves, and it is promoted only if it is "very likely to be used in more than one product". Primer says it keeps a high bar on purpose. [V] https://primer.style/design/guides/contribute/handling-new-patterns/
- **GOV.UK contribution criteria**: a proposal must be *useful* (evidence it would help many teams, such as screenshots from different services) and *unique*. No fixed count. [V] https://design-system.service.gov.uk/community/contribution-criteria/
- **The "rule of three"** comes from software reuse, not design systems: a reusable component should be tried in three different applications before it goes into a shared library. Credited to Robert Glass's *Facts and Fallacies of Software Engineering* (fact 18). [V] https://blog.codinghorror.com/rule-of-three/ · [S] https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)
- **Nathan Curtis / EightShapes** has written on contribution criteria ("I made this, does it go in the system?"), on stewarding contributions, and on balancing reuse against customisation. Snippets show the themes; the articles themselves refused the fetch. [S] https://medium.com/eightshapes-llc/i-made-this-does-it-go-in-the-system-3b67b9894531 · [S] https://medium.com/eightshapes-llc/stewarding-design-system-contributions-817665b6c7dd · [S] https://www.knapsack.cloud/blog/nathan-curtis-co-founder-at-eightshapes-balancing-reuse-and-customization-in-ui-design
- **Not found:** anyone asking "can this clash become a brand input?" as the first question. That step depends on having a theme engine where a brand is data, which most systems do not have.

### Decide: a named decider, within published review times

- **Carbon (IBM)** has an RFC repo. The core team decides, each accepted RFC needs a core-team champion, and approval is followed by a three-calendar-day final comment period. The repo looks quiet (few commits). [V] https://github.com/carbon-design-system/rfcs
- **GOV.UK** says the Design System team reviews proposals against the criteria and agrees timings with each contributor, but publishes no fixed number of days. [V] https://design-system.service.gov.uk/community/develop-a-component-or-pattern/
- **Home Office** working group meets every two weeks. [V] https://design.homeoffice.gov.uk/design-system/contribute/working-group
- Some systems publish response targets, for example University of Michigan "usually within 2 business days" and Pluralsight reviewing PRs within seven days. [S] https://design-system.lib.umich.edu/foundations/guiding-principles-and-scope · [S] https://bencallahan.com/fixing-design-system-contribution
- Curtis's "Team Models" contrasts a central team where one owner decides with a federated model where product designers decide together. [S] https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0
- **Go** is the best example found of an escalation path that ends with a named person. It is a programming language, not a design system. [V] https://github.com/golang/proposal/blob/master/README.md
- **Not found:** a design system with an appeal or "disagree and commit" step written into its governance.

### Record: an ADR that names who decided

- **Primer React** keeps ADRs in its repo (`contributor-docs/adrs`). The one checked (ADR-021, CSS layers) has a status table but **does not name who decided**. [V] https://github.com/primer/react/tree/main/contributor-docs/adrs · [V] https://raw.githubusercontent.com/primer/react/main/contributor-docs/adrs/adr-021-css-layers.md
- **MADR**, a widely used ADR template, has an optional `decision-makers` field. So naming the decider has a ready-made format; it is just optional and often skipped. [V] https://adr.github.io/madr/

### Optional: a tool that detects the conflict and files it

- **Figma library analytics** reports detaches (someone breaking a component's link to the library). It is reporting only: it does not notify anyone or open tickets. [V] https://help.figma.com/hc/en-us/articles/360039238353-View-and-explore-library-analytics
- **Omlet** (launched 17 Oct 2023) scans codebases for design-system and custom components and shows them on dashboards so a team can decide whether a custom one belongs in the system. Dashboards, not issues. [V] https://omlet.dev/blog/announcing-omlet/
- **Buoy** is a GitHub app that posts a "drift" review (hard-coded colours, spacing and so on) on every pull request, can fail the check, and has ignore rules for intended exceptions. It comments on the PR; it does not open a governance issue. [V] https://buoy.design/features/github-action/
- **Atlassian's ESLint rule** `ensure-design-token-usage` flags hard-coded values instead of tokens and can auto-fix. [S] https://atlassian.design/components/eslint-plugin-design-system/usage
- Several small open-source drift checkers exist (ds-drift, audit-design-tokens, mp-token-drift). [S] https://github.com/sylwaninn/ds-drift · [S] https://github.com/humbleteam/audit-design-tokens
- **Supernova** opens pull requests when a token changes in Figma: automation in the other direction (system to code). [S] https://www.supernova.io/vs/zeroheight
- **Not found:** any tool that turns a detected override into a *governance issue* routed to a decider. Every tool found either reports, comments on a PR, or blocks a merge.

### Others looked at briefly

- **Fluent UI (Microsoft)** keeps RFCs in `docs/react-v9/contributing/rfcs` with a template. No process page was readable (the wiki page linked from search was empty). [V] https://github.com/microsoft/fluentui/tree/master/docs/react-v9/contributing/rfcs
- **React Spectrum (Adobe)** asks for an RFC in an `rfcs` folder for larger work; React Aria Components itself started as one. [S] https://github.com/adobe/react-spectrum/pull/4058
- **Atlassian** contributions are internal only, limited to fixes and small enhancements, with a fortnightly critique session. Nothing on conflicts. [S] https://atlassian.design/contribution
- **Nord**: the contributing page returned no content to the reader. [U] https://nordhealth.design/contributing
- **Material, Backpack, Orbit:** not checked in depth today. [U]

## 2. Corrections to the from-memory claims

1. **"Brad Frost published a governance process flowchart (~2019)."** **Held.** Published 4 Nov 2019, building on a flowchart by Inayaili de León Persson at Canonical. He also posted an updated diagram walkthrough in 2024. [V] https://bradfrost.com/blog/post/a-design-system-governance-process/ · [S] https://x.com/brad_frost/status/1846559126219812907
2. **"GOV.UK has a working group reviewing contributions against published criteria, with a public GitHub backlog."** **Partly wrong, as of today.** The published criteria and the public backlog are real. But the working group's own page now returns **HTTP 410 Gone** (deliberately removed), and the current contribution pages say "the Design System team" reviews, with no working group mentioned. A 2023 GDS post kept the working group unchanged at that time, so it existed; it does not appear to be part of the process now. Why it went is unknown. Say "the GOV.UK Design System team reviews against published criteria", not "a working group". [V] https://design-system.service.gov.uk/community/design-system-working-group (410) · [V] https://design-system.service.gov.uk/community/contribution-criteria/ · [V] https://designnotes.blog.gov.uk/2023/05/31/iterating-the-gov-uk-design-system-contribution-model/
3. **"Carbon, Polaris and Fluent use RFC-style written proposals."** **Held for Carbon and Fluent; weak for Polaris.** Carbon has a formal RFC repo with a written process. Fluent has an RFC folder and template. Polaris has issues titled "[RFC]" (for example #4093, March 2021) and GitHub Discussions for proposals, but no documented RFC process was found. Say "Carbon and Fluent run RFCs"; leave Polaris out or call its RFCs informal. [V] https://github.com/carbon-design-system/rfcs · [V] https://github.com/microsoft/fluentui/tree/master/docs/react-v9/contributing/rfcs · [V] https://github.com/Shopify/polaris/issues/4093
4. **"Nathan Curtis / EightShapes wrote on overrides vs contributing back, and on governance."** **Held in substance, not confirmed first-hand.** He wrote on contribution criteria, stewarding contributions, team models and customisation. Medium blocked the reader, so the wording of what he says about overrides is unverified. [S] (links in §1)
5. **"W3C Priority of Constituencies as a ranked tie-break."** **Held, and stronger than remembered.** It is in the 2007 HTML Design Principles draft with the exact ranking given, and it is still §1.1 of the TAG's design principles, updated 14 Sep 2026. [V] https://www.w3.org/TR/html-design-principles/ · [V] https://www.w3.org/TR/design-principles/

## 3. What we found no precedent for

- A **conflict** intake, as distinct from a bug or feature request, in any design system.
- A **three-way sort** of conflicts (rule clash / disagreement with a past decision / product-vs-product) that sends each kind down a different path.
- A design system with a **ranked list of trade-offs** of the kind Syntara proposes (accessibility over not breaking consumers over brand wishes over speed). Salesforce ranks qualities, W3C ranks people.
- "**Could this become a brand input?**" as the first question when two products disagree.
- A **numeric threshold** (three products) for an override returning to a design system. The number three comes from software reuse (Glass), not from any design system found.
- A design system that writes "**reopen only with new evidence**" into its governance.
- A tool that **detects an override and files a governance issue** for a person to decide.

## 4. What this means for Syntara

Every single piece of the flow has a precedent somewhere: W3C for a ranked tie-break, Ousterhout and Go for "reopen only with new evidence" and a named final decider, Brad Frost and Primer for "local first, promote later", Carbon for a named champion and a fixed comment period, MADR for naming who decided, and Buoy, Omlet and Figma for detecting drift. What we did not find is anyone who **puts them together as one flow for conflicts**, sorts conflicts into kinds, or ranks the trade-offs a multi-brand system faces. So "nobody has combined these" is **probably true but not safe to say as a "first"**: the search was one day, several big systems (Material, Backpack, Orbit, internal company systems) were not read, and internal governance is usually private. The safe public line is something like "we combined existing practices into one written flow for conflicts", with the sources cited. That is honest and still distinctive. What to borrow: from **W3C**, the form of the ranked list itself (one line, "in case of conflict, X over Y over Z") and the habit of keeping it short enough to quote. From **Go**, the "new information" rule by name (cite Ousterhout) and an escalation path that ends with a named person who writes the reason on the issue. From **Carbon**, a fixed final comment period stated in days, so "published review times" means a number. From **Primer** and **Glass's rule of three**, the promotion bar (credit the three-product threshold to Glass rather than presenting it as ours). From **MADR**, the `decision-makers` field, made required rather than optional. From **Buoy**, ignore rules for intended exceptions, so the optional auto-detection step can tell a recorded local override from real drift before it files anything. And drop the GOV.UK "working group" wording: that page is gone.

## 5. Follow-ups

- [ ] Read the Salesforce UX article (JD Vogt) first-hand to confirm the SLDS principles are ranked for decisions, before citing it publicly.
- [ ] Read Curtis's contribution-criteria article first-hand before quoting him on overrides.
- [ ] Check Material, Backpack and Orbit governance pages before any "nobody else" wording is published.
- [ ] Find out why GOV.UK removed the working group page (the GDS design notes blog is the likely place).
