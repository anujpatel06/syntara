/**
 * Geometry check the unit tests cannot do: every icon's drawing sits inside the live area (2→22, 0.25 tolerance)
 * and is not tiny. Uses a real browser's getBBox. `pnpm --filter @syntara/icons check:niche-drawing`. Exits 1 on any failure.
 */
import * as niche from '../src/niche';
import type { Icon } from '../src/create-icon';
// @ts-expect-error untyped repo-level script
import { launchBrowser } from '../../../scripts/launch-browser.mjs';

const icons = Object.entries(niche).filter(([, v]) => typeof v === 'function' && 'iconName' in v) as unknown as [string, Icon][];
const attrs = (a: Record<string, string | number>) => Object.entries(a).map(([k, v]) => `${k}="${v}"`).join(' ');
const html = icons.map(([, I], k) => `<svg id="i${k}" viewBox="0 0 24 24">${I.node.map(([t, a]) => `<${t} ${attrs(a)}/>`).join('')}</svg>`).join('');
const browser = await launchBrowser();
const page = await browser.newPage();
await page.setContent(`<body>${html}</body>`);
const boxes: number[][] = await page.evaluate(() =>
  [...document.querySelectorAll('svg[id^=i]')].map((s) => {
    let x0 = 99, y0 = 99, x1 = -99, y1 = -99;
    const root = (s as SVGSVGElement).getCTM()!;
    for (const el of Array.from(s.children) as SVGGraphicsElement[]) {
      const b = el.getBBox(); const rel = root.inverse().multiply(el.getCTM()!);
      for (const [x, y] of [[b.x, b.y], [b.x + b.width, b.y], [b.x, b.y + b.height], [b.x + b.width, b.y + b.height]] as const) {
        const px = rel.a * x + rel.c * y + rel.e, py = rel.b * x + rel.d * y + rel.f;
        x0 = Math.min(x0, px); y0 = Math.min(y0, py); x1 = Math.max(x1, px); y1 = Math.max(y1, py);
      }
    }
    return [x0, y0, x1, y1];
  }),
);
await browser.close();
const bad: string[] = [];
boxes.forEach(([x0, y0, x1, y1], k) => {
  const name = icons[k]![0];
  if (x0! < 1.75 || y0! < 1.75 || x1! > 22.25 || y1! > 22.25) bad.push(`${name} leaves the 2..22 area (${x0!.toFixed(2)},${y0!.toFixed(2)} → ${x1!.toFixed(2)},${y1!.toFixed(2)})`);
  if (Math.max(x1! - x0!, y1! - y0!) < 8) bad.push(`${name} is tiny`);
});
console.log(JSON.stringify({ icons: icons.length, problems: bad.length }));
for (const m of bad) console.log('FAIL', m);
process.exit(bad.length ? 1 : 0);
