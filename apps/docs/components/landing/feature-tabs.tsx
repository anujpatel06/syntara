'use client';

import {
  Avatar,
  Badge,
  Button,
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  ThemeScope,
  ToggleButton,
  ToggleButtonGroup,
  type Key,
} from '@syntara/react';
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconBell,
  IconChartBar,
  IconLayoutGrid,
  IconLayoutDashboard,
  IconMessage,
  IconPaperclip,
  IconSearch,
  IconSettings,
  IconUserPlus,
} from '@syntara/icons';
import Link from 'next/link';
import { useState } from 'react';
import index from '@/app/docs/components/components-index.module.css';
import { MaturityBadge } from '@/components/docs/maturity-badge';
import { ExampleThumb } from '@/components/preview/example-thumb';
import type { ComponentSummary } from '@/lib/meta-types';
import type { LandingTenant } from './landing-data';
import styles from './landing.module.css';

const TABS = [
  { id: 'components', label: 'Components', nav: 'Components', caption: 'The components index, in the brand picked in the sidebar. Every card is the real component, scaled down.' },
  { id: 'brands', label: 'Brands', nav: 'Brands', caption: 'Pick a brand in the sidebar: the whole window re-themes, in light and dark alike.' },
  { id: 'contrast', label: 'Contrast', nav: 'Contrast', caption: 'The theme engine’s own checks. Ratios are never rounded up: 4.49:1 fails.' },
  { id: 'agents', label: 'Agents', nav: 'Agent', caption: 'One meta.json per component, read by your coding agent.' },
] as const;
const NAV_ICON = { components: IconLayoutGrid, brands: IconLayoutDashboard, contrast: IconChartBar, agents: IconMessage } as const;

/**
 * Fora's feature carousel: a full-width bar of four tabs, then a framed night sky with an app window rising
 * over a planet's edge, and arrows with a caption underneath.
 *
 * The window is a real product screen built from Syntara components, in the brand picked in its sidebar. Its
 * sidebar is the tab list's mirror (the same four views) plus that brand picker; the top bar and the page change
 * with the tab.
 */
export function FeatureTabs({ tenants, components }: { tenants: LandingTenant[]; components: (ComponentSummary & { group: string })[] }) {
  const [tab, setTab] = useState<Key>('components');
  const [brand, setBrand] = useState(tenants[0]?.id ?? '');
  const at = TABS.findIndex((t) => t.id === tab);
  const step = (d: number) => setTab(TABS[(at + d + TABS.length) % TABS.length]!.id);
  const picked = tenants.find((t) => t.id === brand) ?? tenants[0];

  return (
    <Tabs variant="pill" selectedKey={tab} onSelectionChange={setTab}>
      <div className={`${styles.lit} ${styles.barWrap}`} data-lit="" data-reveal="">
        <div className={`${styles.litFace} ${styles.barFace}`}>
          <TabList aria-label="Features" className={styles.bar}>
            {TABS.map((t) => (
              <Tab key={t.id} id={t.id} className={styles.barTab}>
                {t.label}
              </Tab>
            ))}
          </TabList>
        </div>
      </div>

      <div className={`${styles.lit} ${styles.frame}`} data-lit="" data-reveal="2">
        <div className={`${styles.litFace} ${styles.frameFace}`} style={{ backgroundImage: 'url(/landing/galaxy-sky.webp)' }}>
          <ThemeScope theme={picked?.id} scheme="dark" locale="en-IN" className={styles.window}>
            {/* sidebar: product, the four views, and the brand the window wears */}
            <aside className={styles.winSide}>
              <div className={styles.winBrand}>
                <span className={styles.winMark} aria-hidden="true">
                  {picked?.name.slice(0, 1)}
                </span>
                <strong>{picked?.name}</strong>
                <IconSearch aria-hidden className={styles.winSearch} />
              </div>
              <nav aria-label="Views" className={styles.winNav}>
                {TABS.map((t) => {
                  const Icon = NAV_ICON[t.id];
                  return (
                    <button key={t.id} type="button" className={styles.winNavItem} data-on={t.id === tab ? '' : undefined} onClick={() => setTab(t.id)}>
                      <Icon aria-hidden />
                      {t.nav}
                    </button>
                  );
                })}
              </nav>
              <p className={styles.winGroup}>Brand</p>
              <ToggleButtonGroup
                size="sm"
                orientation="vertical"
                aria-label="Brand the window wears"
                selectionMode="single"
                disallowEmptySelection
                selectedKeys={[brand]}
                onSelectionChange={(k) => setBrand(String([...k][0] ?? brand))}
                className={styles.winBrands}
              >
                {tenants.map((t) => (
                  <ToggleButton key={t.id} id={t.id}>
                    <span className={styles.winDot} data-syntara-theme={t.id} data-syntara-scheme="dark" aria-hidden="true" />
                    {t.name}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </aside>

            <div className={styles.winMain}>
              <header className={styles.winTop}>
                <strong>{TABS[at]?.nav}</strong>
                <span className={styles.winTopEnd}>
                  <IconBell aria-hidden />
                  <Button size="sm">
                    <IconUserPlus aria-hidden />
                    Invite
                  </Button>
                  <Avatar name="Priya Raman" size="sm" alt="" />
                </span>
              </header>

              {/* The components index (app/docs/components), in the brand picked in the sidebar: the same cards,
                  stills and maturity badges, read from meta.json. */}
              <TabPanel id="components" className={styles.winPage}>
                <p className={styles.winHeading}>{components[0]?.group}</p>
                <ul className={styles.winGrid}>
                  {components.map((m) => (
                    <li key={m.name}>
                      <Card variant="outline" className={index.card}>
                        <div className={index.media}>
                          <ExampleThumb name={m.example} caption={m.opens} />
                        </div>
                        <CardHeader className={index.header}>
                          <CardTitle level={3} className={index.title}>
                            <Link href={`/docs/components/${m.name}`} className={index.link}>
                              {m.title}
                            </Link>
                          </CardTitle>
                          <CardAction className={index.action}>
                            <MaturityBadge maturity={m.maturity} />
                          </CardAction>
                          <CardDescription className={index.description}>{m.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </li>
                  ))}
                </ul>
              </TabPanel>

              <TabPanel id="brands" className={styles.winPage}>
                <div className={styles.brandRows}>
                  {tenants.map((t) => (
                    <ThemeScope key={t.id} theme={t.id} scheme="dark" locale={t.locale} className={styles.brandRow}>
                      <span className={styles.winMark} aria-hidden="true">
                        {t.product.name.slice(0, 1)}
                      </span>
                      <span className={styles.brandWho}>
                        <strong>{t.product.name}</strong>
                        <span className={styles.caption}>{t.product.industry}</span>
                      </span>
                      <span className={styles.swatches} aria-hidden="true">
                        <i />
                        <i />
                      </span>
                      <span className={styles.brandFigure}>
                        <span className={styles.caption}>{t.specimen.eyebrow}</span>
                        <span>{t.specimen.value}</span>
                      </span>
                      <Button size="sm">{t.overview.primaryAction}</Button>
                    </ThemeScope>
                  ))}
                </div>
              </TabPanel>

              <TabPanel id="contrast" className={styles.winPage}>
                {picked && (
                  <p className={styles.caption}>
                    {picked.name}: {picked.checks.passed} of {picked.checks.total} pairs pass, light and dark. Five of them:
                  </p>
                )}
                <div className={styles.pairs}>
                  {picked?.pairs.map((p) => (
                    <div key={p.label} className={styles.pair}>
                      <span className={styles.sample} style={{ background: p.bgHex, color: p.fgHex }} aria-hidden="true">
                        Aa
                      </span>
                      <span className={styles.small}>
                        {p.label}
                        <br />
                        <span className={styles.caption}>
                          {p.fgHex} on {p.bgHex}
                        </span>
                      </span>
                      <span className={styles.ratio}>{p.ratio.toFixed(2)}:1</span>
                      <Badge tone={p.pass ? 'success' : 'danger'} dot>
                        {p.pass ? `Passes ${p.required}:1` : `Below ${p.required}:1`}
                      </Badge>
                    </div>
                  ))}
                </div>
              </TabPanel>

              <TabPanel id="agents" className={`${styles.winPage} ${styles.thread}`}>
                <div className={styles.msgRow}>
                  <Avatar name="Priya Raman" size="sm" alt="" />
                  <div>
                    <strong>Priya Raman</strong>
                    <p className={styles.small}>Add a payout settings form for {picked?.name ?? 'Vela'}, and keep it accessible.</p>
                  </div>
                </div>
                <div className={`${styles.msgRow} ${styles.msgReply}`}>
                  <span className={styles.winMark} aria-hidden="true">
                    AI
                  </span>
                  <div>
                    <strong>Agent, via @syntara/mcp</strong>
                    <p className={styles.small}>
                      Read <code>switch.meta.json</code>: switches take effect at once, so they get no Save button. Only the
                      slider needs <code>Save limit</code>. Keyboard: Space toggles, arrows move the slider.
                    </p>
                  </div>
                </div>
                <div className={styles.composer}>
                  <span className={styles.caption}>Ask about a component…</span>
                  <span className={styles.composerEnd}>
                    <IconPaperclip aria-hidden />
                    <IconSettings aria-hidden />
                    <span className={styles.send} aria-hidden="true">
                      <IconArrowUp />
                    </span>
                  </span>
                </div>
              </TabPanel>
            </div>
          </ThemeScope>
        </div>
      </div>

      <div className={styles.under} data-reveal="3">
        <Button variant="secondary" size="icon" aria-label="Previous feature" onPress={() => step(-1)}>
          <IconArrowLeft aria-hidden />
        </Button>
        <p className={styles.small} aria-live="polite">
          {TABS[at]?.caption}
        </p>
        <Button variant="secondary" size="icon" aria-label="Next feature" onPress={() => step(1)}>
          <IconArrowRight aria-hidden />
        </Button>
      </div>
    </Tabs>
  );
}
