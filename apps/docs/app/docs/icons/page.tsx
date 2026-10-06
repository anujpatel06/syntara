import { ThemeScope, ToastRegion } from '@syntara/react';
import type { Metadata } from 'next';
import { DocsPage } from '@/components/docs/docs-page';
import { getDuotoneFacts, getIconGroups, getIconSpec } from '@/components/icons/icon-data';
import { getNicheGroups } from '@/components/icons/niche-data';
import { IconGallery } from '@/components/icons/icon-gallery';
import { IconSpecimen } from '@/components/icons/icon-specimen';
import styles from '@/components/icons/icons.module.css';
import { CodeBlock } from '@/components/mdx/code-block';
import { AdrLink } from '@/components/mdx/data';
import { H2, P } from '@/components/mdx/prose';
import { getDocPage } from '@/lib/docs';
import { githubBlob } from '@/lib/site';

const page = getDocPage('icons')!;
export const metadata: Metadata = { title: page.title, description: page.description };

const USAGE = `import { IconBell } from '@syntara/icons';

// Decorative next to text (the default): hidden from assistive tech, sized to the text.
<Button><IconBell aria-hidden /> Notify me</Button>

// On its own, it needs a name.
<IconBell aria-label="Notifications" size={20} />`;

const DUOTONE = `import { IconBellDuotone } from '@syntara/icons';

// Works with no setup: the tint is the text colour at 16%.
<IconBellDuotone size={32} />

/* Make the second tone your own — one token, anywhere above the icon. */
.promo { --syntara-icon-tint: var(--syntara-color-accent-muted-bg); }`;

const NICHE = `import { IconCardiology } from '@syntara/icons/niche';

// Same icons API. Which icon belongs to which domain, for pickers and search:
import { nicheDomains } from '@syntara/icons/niche';
nicheDomains['healthcare-dental']; // ['…', '…']`;

export default function IconsPage() {
  const mainGroups = getIconGroups();
  const nicheGroups = getNicheGroups();
  // Main outline groups, then the niche domains (also outline), then the two style layers at the end.
  const styleLayers = mainGroups.filter((g) => g.id === 'filled' || g.id === 'duotone');
  const groups = [...mainGroups.filter((g) => g.id !== 'filled' && g.id !== 'duotone'), ...nicheGroups, ...styleLayers];
  const spec = getIconSpec();
  const duo = getDuotoneFacts();
  const total = mainGroups.reduce((n, g) => n + g.names.length, 0);
  const nicheTotal = nicheGroups.reduce((n, g) => n + g.names.length, 0);
  // Honest arithmetic (ADR-036): a duotone twin reuses its outline's drawing, so it is another component but not
  // another drawing. The set is `drawings` drawings you can import `total` ways.
  const drawings = total - duo.total;
  const duoGroups = 1; // the Duotone layer is a group on this page but adds twins, not drawings
  return (
    <DocsPage
      href={page.href}
      crumbs={[{ href: '/docs', label: 'Docs' }, { label: 'Foundations' }]}
      title="Icons"
      description={
        <>
          Syntara draws its own icons: <em className={styles.leadEm}>curvy and minimal</em>, one stroke weight, colour from
          the text around them. {(drawings + nicheTotal).toLocaleString('en-US')} drawings in <code>@syntara/icons</code>:{' '}
          {drawings} in the main set and {nicheTotal.toLocaleString('en-US')} niche icons in {nicheGroups.length} domains
          (<code>@syntara/icons/niche</code>). Every main outline icon also has a duotone twin, so{' '}
          {(total + nicheTotal).toLocaleString('en-US')} React components in all.
        </>
      }
      toc={[
        { id: 'all-icons', title: 'All icons', depth: 2 },
        ...mainGroups
          .filter((g) => g.id !== 'filled' && g.id !== 'duotone')
          .map((g) => ({ id: `icons-${g.id}`, title: g.label, depth: 3 as const })),
        ...nicheGroups.map((g) => ({ id: `icons-${g.id}`, title: g.label, depth: 3 as const })),
        ...styleLayers.map((g) => ({ id: `icons-${g.id}`, title: g.label, depth: 3 as const })),
        { id: 'the-style', title: 'The style', depth: 2 },
        { id: 'usage', title: 'Usage', depth: 2 },
        { id: 'duotone', title: 'Duotone', depth: 2 },
      ]}
      editUrl={githubBlob('apps/docs/app/docs/icons/page.tsx')}
      wide
    >
      <H2 id="all-icons">All icons</H2>
      {/* The page's own scope, so the toast region copies the house theme and the site's scheme. */}
      <ThemeScope theme="house" data-syntara-scheme="site">
        <IconGallery groups={groups} defaultStroke={spec.stroke} />
        <ToastRegion placement="bottom-end" />
      </ThemeScope>

      <H2 id="the-style">The style</H2>
      <IconSpecimen spec={spec} />
      <dl className={styles.facts}>
        <div className={styles.fact}>
          <dt>Grid</dt>
          <dd>
            <span className={styles.factNumber}>{spec.grid}</span>
            <span className={styles.factUnit}>px, drawing inside the central {spec.live}</span>
          </dd>
        </div>
        <div className={styles.fact}>
          <dt>Stroke</dt>
          <dd>
            <span className={styles.factNumber}>{spec.stroke}</span>
            <span className={styles.factUnit}>
              round caps and joins, from <code>--syntara-icon-stroke</code>
            </span>
          </dd>
        </div>
        <div className={styles.fact}>
          <dt>Set</dt>
          <dd>
            <span className={styles.factNumber}>{(drawings + nicheTotal).toLocaleString('en-US')}</span>
            <span className={styles.factUnit}>
              drawings in {groups.length - duoGroups} groups, {(total + nicheTotal).toLocaleString('en-US')} components with
              the duotone twins
            </span>
          </dd>
        </div>
      </dl>
      <ul className={styles.rules}>
        <li>
          <strong>Curves over corners.</strong> An arc or a curve wherever a corner would do: rounded chevron tips, arc
          shoulders and handles, scalloped mechanical shapes.
        </li>
        <li>
          <strong>Only the strokes you need.</strong> No inner detail lines, decorative ticks or shading. Most icons are
          three paths or fewer.
        </li>
        <li>
          <strong>Colour follows the text.</strong> Every icon draws in <code>currentColor</code> and sizes to{' '}
          <code>1.25em</code>, so it matches the label beside it.
        </li>
        <li>
          <strong>Quiet by default.</strong> Icons are <code>aria-hidden</code> unless you give one an{' '}
          <code>aria-label</code>; then it’s announced as an image.
        </li>
      </ul>
      <P>
        Why Syntara draws its own instead of using an off-the-shelf set: <AdrLink n="014" />. The full spec sits at the top
        of{' '}
        <a href={githubBlob('packages/icons/src/create-icon.tsx')} className={styles.inlineLink}>
          create-icon.tsx
        </a>
        .
      </P>

      <H2 id="usage">Usage</H2>
      <CodeBlock code={USAGE} lang="tsx" />
      <P>
        The niche icons come from their own entry so the main one stays small: a product imports only the domains it
        uses. They are outline only for now; duotone twins will follow. Why: <AdrLink n="054" />.
      </P>
      <CodeBlock code={NICHE} lang="tsx" />

      <H2 id="duotone">Duotone</H2>
      <P>
        Every outline icon has a duotone twin: the same drawing, untouched, with a tint layer painted behind it. The
        tint isn’t drawn a second time — it’s derived from the outline’s own subpaths, so the two layers can’t drift
        apart. {duo.total} twins, named <code>Icon&lt;Name&gt;Duotone</code>.
      </P>
      <P>
        One token controls the second tone: <code>--syntara-icon-tint</code>, defaulting to{' '}
        <code>{duo.tint.replace(/^var\(--syntara-icon-tint, (.+)\)$/, '$1')}</code>. So duotone still follows the text
        colour like every other icon — it works on any surface and inside a solid button with no setup — and a theme,
        a tenant or one component can set the token to make the tint a real colour.
      </P>
      <CodeBlock code={DUOTONE} lang="tsx" />
      <P>
        Duotone is a fill style, so {duo.untinted} of the {duo.total} have no tint: a check, an arrow, a chevron and
        the other bare strokes enclose no area, and there is nothing to fill. Their twins exist and render exactly
        like the outline, so you can move a whole product to duotone in one import change without a missing export.
        Why the set gained a second style, and what was rejected: <AdrLink n="036" />.
      </P>

    </DocsPage>
  );
}
