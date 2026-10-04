import { generateTheme } from '@syntara/theme-engine';
import { contrastRatio } from '../../theme-engine/src/color';
import { TENANTS, loadFuzzInputs, readUiCss } from './status-icon-contrast';

/**
 * Outlines that show a state against the page (WCAG 1.4.11, 3:1) must use a role the engine proves against the
 * page. action.primary.bg is only proven against its own label: on 2026-10-04 it measured 1.65–2.97:1 against the
 * surfaces in six tenant × scheme pairs (Qamar light 1.93 on a selected radio card). text.brand is proven ≥ 4.5:1.
 */
const OUTLINES: Array<[file: string, selector: string]> = [
  ['radio-group.module.css', '.card[data-selected] {'],
  ['file-upload.module.css', '.zone[data-drop-target] {'],
  ['slider.module.css', '.thumb[data-dragging] {'],
];

function rule(file: string, selector: string): string {
  const css = readUiCss(file);
  const start = css.indexOf(selector);
  expect(start, `${selector} in ${file}`).toBeGreaterThan(-1);
  return css.slice(start, css.indexOf('}', start));
}

describe('state outlines against the page', () => {
  it.each(OUTLINES)('%s %s draws its outline in text.brand, not the button fill', (file, selector) => {
    const body = rule(file, selector);
    expect(body).toMatch(/border-color:\s*var\(--syntara-color-text-brand\)/);
    expect(body).not.toMatch(/border-color:\s*var\(--syntara-color-action-primary-bg\)/);
  });

  it('text.brand keeps ≥ 3:1 on every surface, every tenant (and the site) × scheme and 1,000 fuzz brands', async () => {
    const surfaces = ['surface.canvas', 'surface.default', 'surface.raised', 'surface.selected'] as const;
    let worst = Infinity;
    for (const brand of [...Object.values(TENANTS), ...(await loadFuzzInputs())]) {
      const theme = generateTheme(brand);
      for (const scheme of ['light', 'dark'] as const) {
        const roles = theme.schemes[scheme].roles;
        for (const s of surfaces) worst = Math.min(worst, contrastRatio(roles['text.brand'].hex, roles[s].hex));
      }
    }
    expect(worst).toBeGreaterThanOrEqual(3);
  }, 60_000);
});
