/**
 * The landing page's questions, grouped by topic for the FAQ's topic tabs. Moved from the previous homepage
 * (components/home/sections.tsx), where they were drafted from the ADRs, GOVERNANCE.md and the measured figures,
 * not from marketing copy. Every claim here is one the rest of the site already makes and a script can reproduce.
 *
 * Corrections recorded when they were written:
 *   - npm: all eight packages are published.
 *   - the MCP server ships as @syntara/mcp with eight tools; packages/mcp/README.md says eight, the source registers eight.
 *   - the decision-record count is read from disk (getAdrCount), never typed.
 */
import { cache, type ReactNode } from 'react';
import { listRepoDir } from '@/lib/repo';

/**
 * Decision records on disk, excluding `000-template.md`, which is the blank form rather than a decision.
 * Computed because the page quotes it: a hand-typed count was wrong within a day of being written.
 */
const getAdrCount = cache((): number =>
  listRepoDir('docs', 'adr').filter((f) => f.endsWith('.md') && !f.startsWith('000-')).length);

export const FAQ_TOPICS = ['Getting started', 'Accessibility', 'Tokens and agents'] as const;
export type FaqTopic = (typeof FAQ_TOPICS)[number];
export interface FaqItem {
  q: string;
  topic: FaqTopic;
  a: ReactNode;
}

export const faqItems = (): readonly FaqItem[] => [
  {
    q: 'Is Syntara on npm?',
    topic: 'Getting started',
    a: (
      <>
        Yes. <code>npm install syntara</code> installs everything an app needs in one go: the components, the icon
        set, the tokens for every brand and the theme engine. The eight <code>@syntara</code> packages it is built
        from are published on their own too, along with the server-driven UI schema, the auditor, the MCP server and
        the codemods. Or copy a component’s <code>.tsx</code> and <code>.module.css</code> into your project and load
        the token CSS once at the app root.
      </>
    ),
  },
  {
    q: 'How do I add a brand?',
    topic: 'Getting started',
    a: (
      <>
        Write two files: <code>tenants/&lt;id&gt;/brand.json</code> with the six inputs, and{' '}
        <code>tenants/&lt;id&gt;/content.json</code> with copy, language and text direction. Then run{' '}
        <code>pnpm tokens</code>. It fails the build if any pair misses AA. No component code changes.
      </>
    ),
  },
  {
    q: 'What does “accessible by construction” mean?',
    topic: 'Accessibility',
    a: (
      <>
        The theme engine can’t output a theme that fails WCAG 2.2 AA. It checks 118 text, control and focus-ring
        pairs per brand in light and dark, fixes what fails, and writes a sentence for each fix. Keyboard and
        screen-reader behaviour come from React Aria.
      </>
    ),
  },
  {
    q: 'Does it handle right to left and other scripts?',
    topic: 'Accessibility',
    a: (
      <>
        Yes. Components use CSS logical properties, and ThemeScope sets lang and dir from the tenant’s content.
        Qamar runs in Arabic, right to left; Haat runs in Hindi.
      </>
    ),
  },
  {
    q: 'Can I use the tokens without React?',
    topic: 'Tokens and agents',
    a: (
      <>
        Yes. Every tenant exports as CSS variables, DTCG 2025.10 JSON and Figma variables, plus Kotlin and Swift
        sources for native. It’s plain CSS, so any stack can read it.
      </>
    ),
  },
  {
    q: 'How do AI agents use Syntara?',
    topic: 'Tokens and agents',
    a: (
      <>
        They read the same meta.json the docs are generated from. The MCP server ships as{' '}
        <code>@syntara/mcp</code>, with eight tools, and it is read-only — no tool writes a file. ADR-008 defines
        three trust levels and GOVERNANCE §6 writes them down; enforcing them is not built yet.
      </>
    ),
  },
  {
    q: 'Who decides what goes in?',
    topic: 'Getting started',
    a: (
      <>
        One maintainer, Anuj, pairing with AI agents. There are {getAdrCount()} decision records, and each names
        who decided. Deprecated APIs are removed only at 1.0, and every breaking change ships with a codemod.
      </>
    ),
  },
];
