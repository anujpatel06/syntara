import { ThemeScope, ToastRegion } from '@syntara/react';
import type { Metadata } from 'next';
import { DocsPage } from '@/components/docs/docs-page';
import { getIconSpec } from '@/components/icons/icon-data';
import { NicheGallery } from '@/components/icons/niche-gallery';
import { getNicheGroups } from '@/components/icons/niche-data';
import styles from '@/components/icons/icons.module.css';
import { CodeBlock } from '@/components/mdx/code-block';
import { AdrLink } from '@/components/mdx/data';
import { H2, P } from '@/components/mdx/prose';
import { getDocPage } from '@/lib/docs';
import { githubBlob } from '@/lib/site';

const page = getDocPage('icons-niche')!;
export const metadata: Metadata = { title: page.title, description: page.description };

const USAGE = `import { IconCardiology } from '@syntara/icons/niche';

// Same as every Syntara icon: hidden from assistive tech unless you name it.
<IconCardiology aria-label="Cardiology" size={24} />

// Which icons belong to which domain, for pickers and search.
import { nicheDomains } from '@syntara/icons/niche';
nicheDomains['healthcare-dental']; // ['…', '…']`;

export default function NicheIconsPage() {
  const groups = getNicheGroups();
  const spec = getIconSpec();
  const total = groups.reduce((n, g) => n + g.names.length, 0);
  return (
    <DocsPage
      href={page.href}
      crumbs={[{ href: '/docs', label: 'Docs' }, { href: '/docs/icons', label: 'Icons' }, { label: 'Niche icons' }]}
      title="Niche icons"
      description={
        <>
          {total.toLocaleString('en-US')} more icons at niche level, in {groups.length} domains: every healthcare
          specialty, finance, legal, farming, aviation and more. Same style, same package:{' '}
          <code>@syntara/icons/niche</code>.
        </>
      }
      toc={[
        { id: 'usage', title: 'Usage', depth: 2 },
        { id: 'all-niche-icons', title: 'All niche icons', depth: 2 },
        ...groups.map((g) => ({ id: `niche-${g.id}`, title: g.label, depth: 3 as const })),
      ]}
      editUrl={githubBlob('apps/docs/app/docs/icons/niche/page.tsx')}
      wide
    >
      <P>
        These are drawn to the same spec as the <a href="/docs/icons" className={styles.inlineLink}>main set</a>:{' '}
        {spec.grid}px grid, {spec.stroke} stroke, <code>currentColor</code>, round caps. They are outline only for now;
        duotone twins will follow, a domain at a time. They sit behind their own entry so the main entry stays small:
        a product imports only the domains it uses. Why: <AdrLink n="054" />.
      </P>

      <H2 id="usage">Usage</H2>
      <CodeBlock code={USAGE} lang="tsx" />

      <H2 id="all-niche-icons">All niche icons</H2>
      <ThemeScope theme="house" data-syntara-scheme="site">
        <NicheGallery groups={groups} defaultStroke={spec.stroke} />
        <ToastRegion placement="bottom-end" />
      </ThemeScope>
    </DocsPage>
  );
}
