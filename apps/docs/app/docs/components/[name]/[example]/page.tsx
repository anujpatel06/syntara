import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsPage } from '@/components/docs/docs-page';
import { A, P } from '@/components/mdx/prose';
import { ComponentPreview } from '@/components/preview/component-preview';
import { CATEGORY_LABEL } from '@/lib/meta-types';
import { getAllMeta, getMeta } from '@/lib/meta';
import { githubBlob } from '@/lib/site';

/**
 * One example on its own page, with the full preview: brand, light/dark, direction and density, and the code.
 * Overviews link here (lib/overviews.ts): click a hero style, change its brand and mode on this page.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllMeta().flatMap((m) => m.examples.map((e) => ({ name: m.name, example: e.name })));
}

function find(name: string, example: string) {
  const meta = getMeta(name);
  const entry = meta?.examples.find((e) => e.name === example);
  return meta && entry ? { meta, entry } : undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ name: string; example: string }> }): Promise<Metadata> {
  const { name, example } = await params;
  const found = find(name, example);
  return found ? { title: `${found.entry.title} · ${found.meta.title}`, description: found.entry.description } : {};
}

export default async function ExamplePage({ params }: { params: Promise<{ name: string; example: string }> }) {
  const { name, example } = await params;
  const found = find(name, example);
  if (!found) notFound();
  const { meta, entry } = found;

  return (
    <DocsPage
      href={`/docs/components/${meta.name}/${entry.name}`}
      crumbs={[
        { href: '/docs/components', label: 'Components' },
        { label: CATEGORY_LABEL[meta.category] },
        { href: `/docs/components/${meta.name}`, label: meta.title },
      ]}
      title={entry.title}
      description={entry.description}
      editUrl={githubBlob(`apps/docs/examples/${meta.name}/${entry.name}.tsx`)}
      wide
    >
      <ComponentPreview name={entry.name} label={`${meta.title}: ${entry.title}`} />
      <P>
        <A href={`/docs/components/${meta.name}`}>All of {meta.title}</A>: installation, usage, props and accessibility.
      </P>
    </DocsPage>
  );
}
