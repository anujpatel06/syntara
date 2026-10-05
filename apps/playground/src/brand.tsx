import { StrictMode, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import { fontFacesCSS, generateTheme, googleFontsHref, toCSS, type BrandInput } from '@syntara/theme-engine';
import { ThemeScope } from '@syntara/react';

/**
 * Brand preview: one brand file from apps/playground/brands/, light and dark side by side, in real component examples.
 *   /brand.html?brand=manrope
 * Made for judging a brand's own font (ADR-050): the brand files are written by `node scripts/check-font.mjs --out`.
 */
const brands = import.meta.glob<{ default: BrandInput }>('../brands/*.json', { eager: true });
const modules = import.meta.glob<{ default: ComponentType }>('../../docs/examples/*/*.tsx', { eager: true });
const EXAMPLES = ['card/card-with-form', 'button/button-variants', 'badge/badge-status', 'tabs/tabs-with-counts', 'alert/alert-demo', 'stat-tile/stat-tile-demo'];

const id = new URLSearchParams(location.search).get('brand') ?? 'manrope';
const brand = brands[`../brands/${id}.json`]?.default;

function Column({ scheme }: { scheme: 'light' | 'dark' }) {
  const theme = generateTheme(brand!);
  const lh = theme.foundations.lineHeight;
  return (
    <ThemeScope theme="preview" scheme={scheme} style={{ padding: 32, display: 'grid', gap: 24, alignContent: 'start', background: 'var(--syntara-color-surface-canvas)' }}>
      <header style={{ display: 'grid', gap: 8 }}>
        <p style={{ margin: 0, fontFamily: 'var(--syntara-font-mono)', fontSize: 12, color: 'var(--syntara-color-text-subtle)' }}>
          {scheme} · {theme.typePair.label} · line heights {lh.tight} / {lh.snug} / {lh.normal}
        </p>
        <h1 style={{ margin: 0, fontFamily: 'var(--syntara-font-heading)', fontSize: 'var(--syntara-font-size-4xl)', lineHeight: 'var(--syntara-line-height-tight)', letterSpacing: 'var(--syntara-font-heading-tracking)', fontWeight: 600, color: 'var(--syntara-color-text-default)' }}>
          Payouts, settled in seconds
        </h1>
        <p style={{ margin: 0, fontFamily: 'var(--syntara-font-body)', fontSize: 'var(--syntara-font-size-lg)', lineHeight: 'var(--syntara-line-height-normal)', color: 'var(--syntara-color-text-subtle)' }}>
          Quality jumpy glyphs: Order #HT-2291 confirmed. Payment of ₹1,84,250 received on 5 Oct.
        </p>
      </header>
      {EXAMPLES.map((path) => {
        const Example = modules[`../../docs/examples/${path}.tsx`]?.default;
        return Example ? <div key={path} data-example={path} style={{ display: 'flex', justifyContent: 'flex-start' }}><Example /></div> : <p key={path}>Missing example {path}</p>;
      })}
    </ThemeScope>
  );
}

function App() {
  if (!brand) return <p>No brand “{id}” in apps/playground/brands/.</p>;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', minHeight: '100vh' }}>
      <Column scheme="light" />
      <Column scheme="dark" />
    </div>
  );
}

if (brand) {
  const theme = generateTheme(brand);
  const style = document.createElement('style');
  style.textContent = `${fontFacesCSS(theme.typePair)}\n${toCSS(theme, { selector: '[data-syntara-theme="preview"]' })}\nhtml,body{margin:0}`;
  document.head.append(style);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = googleFontsHref(theme.typePair);
  document.head.append(link);
}
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
