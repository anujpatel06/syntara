// Every route the docs site prerenders, shared by the scripts that sweep the running site so they cannot drift
// apart on which pages count as covered.
import { existsSync, readdirSync } from 'node:fs';

// Every tenants/<id>/ with a brand.json, house included (the block views render the site's own brand too).
export const TENANTS = readdirSync('tenants', { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(`tenants/${d.name}/brand.json`))
  .map((d) => d.name)
  .sort();
export const BLOCKS = ['benefits-overview', 'portfolio', 'dashboard-overview', 'request-flow', 'settings', 'sign-in', 'activity-table', 'hero-orbit', 'hero-gallery', 'hero-cards', 'hero-aurora'];

export function docsRoutes() {
  const comps = readdirSync('packages/react/meta')
    .filter((f) => f.endsWith('.meta.json'))
    .map((f) => f.replace('.meta.json', ''));
  const docs = readdirSync('apps/docs/content/docs')
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
    .filter((s) => s !== 'index');
  return [
    '/',
    '/docs',
    '/docs/components',
    '/blocks',
    '/themes',
    '/motion',
    '/colors',
    '/story',
    // File pages (not .mdx): listed by hand, or no sweep would ever visit them.
    '/docs/icons',
    '/docs/icons/niche',
    ...docs.map((d) => `/docs/${d}`),
    ...comps.map((c) => `/docs/components/${c}`),
    ...BLOCKS.flatMap((b) => TENANTS.map((t) => `/blocks/${b}/view?tenant=${t}`)),
  ];
}
