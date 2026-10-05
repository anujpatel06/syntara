/**
 * Server-only: what the landing page shows about each tenant, read from tenants/<id>/brand.json and content.json
 * at build time. The contrast figures are the theme engine's own checks (Theme.checks), not a second formula.
 */
import { generateTheme, type ContrastCheck } from '@syntara/theme-engine';
import { cache } from 'react';
import { readRepoFile } from '@/lib/repo';
import { getTenants } from '@/lib/tenants';

/** One checked colour pair, as the engine measured it. `ratio` is the engine's exact ratio, never rounded up. */
export interface LandingPair {
  label: string;
  fgHex: string;
  bgHex: string;
  ratio: number;
  required: number;
  pass: boolean;
}

export interface LandingTenant {
  id: string;
  name: string;
  locale: string;
  /** The locale's language in English, e.g. "Hindi" (Intl.DisplayNames). */
  languageName: string;
  dir: 'ltr' | 'rtl';
  product: { name: string; industry: string };
  /** The brand file as written, for the closing section's "one file" panel. */
  brandJson: string;
  /** The six inputs, for captions ("Precise · Sharp"). */
  typePair: string;
  shape: string;
  /** content.json `specimen`: the one number or line that stands for the product. */
  specimen: { eyebrow: string; value: string; note?: string };
  /** content.json `overview`: a greeting, a sentence and the two actions, in the tenant's language. */
  overview: { greeting: string; subtitle: string; primaryAction: string; secondaryAction: string };
  /** content.json `hero`: the tenant's own website headline, in its language. */
  hero: { headline: string; headlineTail: string; body: string; primary: string; secondary: string };
  /** A handful of the engine's dark-scheme checks, and the totals over all of them. */
  pairs: LandingPair[];
  checks: { total: number; passed: number };
}

/** The pairs shown in the Contrast tab: the ones a visitor can see on the buttons and text above it. */
const SHOWN: ReadonlyArray<{ fg: string; bg: string; label: string }> = [
  { fg: 'action.primary.fg', bg: 'action.primary.bg', label: 'Primary button label' },
  { fg: 'text.default', bg: 'surface.default', label: 'Body text on a card' },
  { fg: 'text.subtle', bg: 'surface.default', label: 'Secondary text on a card' },
  { fg: 'accent.fg', bg: 'accent.bg', label: 'Label on the accent colour' },
  { fg: 'focus.ring', bg: 'surface.canvas', label: 'Focus ring on the page' },
];

/** `*word*` in content.json marks the brand's italic; the landing page shows the plain words. */
const plain = (s: string) => s.replace(/\*/g, '');

export const getLandingTenants = cache((): LandingTenant[] =>
  getTenants().map((t) => {
    const content = JSON.parse(readRepoFile('tenants', t.id, 'content.json') ?? '{}') as {
      overview?: Partial<LandingTenant['overview']>;
      hero?: Partial<LandingTenant['hero']>;
    };
    const theme = generateTheme(t.brand);
    const dark = theme.checks.filter((c) => c.scheme === 'dark');
    const find = (fg: string, bg: string): ContrastCheck | undefined =>
      dark.find((c) => c.fg === fg && c.bg === bg);
    const pairs = SHOWN.flatMap(({ fg, bg, label }) => {
      const c = find(fg, bg);
      return c ? [{ label, fgHex: c.fgHex, bgHex: c.bgHex, ratio: c.ratio, required: c.required, pass: c.pass }] : [];
    });
    const s = t.specimen;
    const value =
      s?.amount !== undefined
        ? new Intl.NumberFormat(t.locale, { style: 'currency', currency: t.currency, maximumFractionDigits: 0 }).format(s.amount)
        : plain(s?.headline ?? '');
    return {
      id: t.id,
      name: t.name,
      locale: t.locale,
      languageName: new Intl.DisplayNames(['en'], { type: 'language' }).of(t.locale.split('-')[0] ?? 'en') ?? t.locale,
      dir: t.dir,
      product: t.product,
      brandJson: (readRepoFile('tenants', t.id, 'brand.json') ?? '').trim(),
      typePair: String(t.brand.typePair ?? ''),
      shape: String(t.brand.shape ?? ''),
      specimen: { eyebrow: s?.eyebrow ?? '', value, ...(s?.note ? { note: plain(s.note) } : {}) },
      overview: {
        greeting: content.overview?.greeting ?? '',
        subtitle: content.overview?.subtitle ?? '',
        primaryAction: content.overview?.primaryAction ?? '',
        secondaryAction: content.overview?.secondaryAction ?? '',
      },
      hero: {
        headline: plain(content.hero?.headline ?? ''),
        headlineTail: plain(content.hero?.headlineTail ?? ''),
        body: plain(content.hero?.body ?? ''),
        primary: content.hero?.primary ?? '',
        secondary: content.hero?.secondary ?? '',
      },
      pairs,
      checks: { total: theme.checks.length, passed: theme.checks.filter((c) => c.pass).length },
    };
  }),
);
