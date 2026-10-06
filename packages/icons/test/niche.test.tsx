import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import * as core from '../src/index';
import type { Icon } from '../src/create-icon';
import * as niche from '../src/niche';
import { nicheDomains as domains } from '../src/niche-domains';

const isIcon = (v: unknown): v is Icon => typeof v === 'function' && 'iconName' in (v as object);
const icons = Object.entries(niche).filter(([, v]) => isIcon(v)) as [string, Icon][];

/** Pack rules (docs/design/icon-domains.md): ≤5 stroked subpaths, ≤4 filled dots. A ring of dots is the one exemption. */
const DOT_EXEMPT = new Set(['loading-spinner']);
const strokes = (I: Icon): number =>
  I.node.reduce((n, [tag, a]) => (a.fill === 'currentColor' ? n : n + (tag === 'path' ? (String(a.d).match(/[Mm]/g) ?? []).length : 1)), 0);
const dots = (I: Icon): number => I.node.filter(([, a]) => a.fill === 'currentColor').length;

describe('@syntara/icons/niche', () => {
  it('ships 2,000 icons across the domain list', () => {
    expect(icons).toHaveLength(2000);
    expect(Object.keys(domains)).toHaveLength(40);
  });

  it('keeps the main entry free of niche icons (the server-driven UI, docs gallery and syntara/icons import it wholesale)', () => {
    const nicheNames = new Set(Object.keys(niche).filter((k) => k.startsWith('Icon')));
    expect(Object.keys(core).filter((k) => nicheNames.has(k))).toEqual([]);
  });

  it('names every icon once: export matches displayName, kebab-case, unique in the pack and against @syntara/icons', () => {
    const shipped = new Set(Object.values(core).filter(isIcon).map((i) => i.iconName));
    const seen = new Set<string>();
    const bad: string[] = [];
    for (const [exp, I] of icons) {
      if (I.displayName !== exp) bad.push(`${exp}: displayName ${I.displayName}`);
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(I.iconName)) bad.push(`${exp}: iconName ${I.iconName} is not kebab-case`);
      if (seen.has(I.iconName)) bad.push(`${exp}: ${I.iconName} is used twice`);
      if (shipped.has(I.iconName)) bad.push(`${exp}: ${I.iconName} already ships in the main @syntara/icons entry`);
      seen.add(I.iconName);
    }
    expect(bad).toEqual([]);
  });

  it('lists every icon in exactly one domain', () => {
    const listed: string[] = Object.values(domains).flat();
    expect(new Set(listed).size).toBe(listed.length);
    expect([...listed].sort()).toEqual(icons.map(([, I]) => I.iconName).sort());
  });

  it('keeps every icon within the stroke cap (5) and the dot cap (4)', () => {
    const bad = icons.flatMap(([exp, I]) => [
      ...(strokes(I) > 5 ? [`${exp}: ${strokes(I)} strokes`] : []),
      ...(dots(I) > 4 && !DOT_EXEMPT.has(I.iconName) ? [`${exp}: ${dots(I)} dots`] : []),
    ]);
    expect(bad).toEqual([]);
  });

  it('renders every icon on the 24 grid, decorative by default, in currentColor', () => {
    const bad: string[] = [];
    for (const [exp, I] of icons) {
      const svg = renderToStaticMarkup(createElement(I));
      for (const needle of ['viewBox="0 0 24 24"', 'aria-hidden="true"', 'stroke="currentColor"']) if (!svg.includes(needle)) bad.push(`${exp}: missing ${needle}`);
    }
    expect(bad).toEqual([]);
  });

  it('becomes an image with a name when labelled; size and stroke props apply', () => {
    const svg = renderToStaticMarkup(createElement(niche.IconAnatomySkull, { 'aria-label': 'Skull', size: 20, stroke: 2 }));
    expect(svg).toContain('role="img"');
    expect(svg).toContain('aria-label="Skull"');
    expect(svg).toContain('width="20"');
    expect(svg).toContain('stroke-width:2');
  });
});
