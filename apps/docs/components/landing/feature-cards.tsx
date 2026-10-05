'use client';

import { parseDate } from '@internationalized/date';
import { Button, Calendar, Card, CardContent, Switch, ThemeScope, ToggleButton, ToggleButtonGroup } from '@syntara/react';
import { IconSparkles } from '@syntara/icons';
import { useState, type ReactNode } from 'react';
import type { LandingTenant } from './landing-data';
import styles from './landing.module.css';

/** A card of the tenant's own overview copy, in its own theme and language. */
function TenantPreview({ t, children }: { t: LandingTenant; children?: ReactNode }) {
  return (
    <ThemeScope theme={t.id} scheme="dark" locale={t.locale}>
      <Card className={styles.preview}>
        <CardContent>
        <strong>{t.overview.greeting}</strong>
        <p className={styles.caption} style={{ margin: 'var(--syntara-space-1) 0 var(--syntara-space-4)' }}>
          {t.overview.subtitle}
        </p>
        {children}
        <div className={styles.coverActions}>
          <Button size="sm">{t.overview.primaryAction}</Button>
          <Button size="sm" variant="outline">
            {t.overview.secondaryAction}
          </Button>
        </div>
        </CardContent>
      </Card>
    </ThemeScope>
  );
}

/**
 * A calendar in the tenant's theme and language: month names, weekday names and digits change script, and in Arabic
 * the grid mirrors. A different component from the theme card above it, so the two features don't look the same.
 * The date is fixed so the statically built page renders the same on any day.
 */
function ScriptPreview({ t }: { t: LandingTenant }) {
  return (
    // Qamar's and Haat's locales carry their own digits (ADR-048), so the calendar writes ٨ and ८.
    <ThemeScope theme={t.id} scheme="dark" locale={t.locale}>
      <Card className={styles.preview}>
        <CardContent className={styles.centred}>
          <Calendar aria-label={t.product.name} defaultValue={parseDate('2026-10-08')} />
        </CardContent>
      </Card>
    </ThemeScope>
  );
}

function Feature({
  tag,
  title,
  body,
  foot,
  picture,
  flip,
  children,
}: {
  tag: string;
  title: string;
  body: ReactNode;
  foot: string;
  picture: string;
  flip?: boolean;
  children: ReactNode;
}) {
  return (
    <article className={`${styles.lit} ${styles.feat} ${flip ? styles.flip : ''}`} data-lit="" data-stack="">
      <div className={`${styles.litFace} ${styles.featFace}`}>
        <div className={styles.featText}>
          <span className={`${styles.tag} ${styles.tagPlain}`} data-reveal="">
            {tag}
          </span>
          <h3 className={styles.h3} data-reveal="2">
            {title}
          </h3>
          <p className={styles.small} data-reveal="3">
            {body}
          </p>
          <p className={styles.featFoot} data-reveal="4">
            <IconSparkles aria-hidden />
            {foot}
          </p>
        </div>
        <div className={styles.featPic} style={{ backgroundImage: `url(${picture})` }} data-reveal="zoom">
          <div className={styles.float}>{children}</div>
        </div>
      </div>
    </article>
  );
}

export function FeatureCards({ tenants }: { tenants: LandingTenant[] }) {
  const [brand, setBrand] = useState(tenants[0]?.id ?? '');
  const theme = tenants.find((t) => t.id === brand) ?? tenants[0];
  /* One tenant per script: the first left-to-right Latin one, the Arabic one, the Devanagari one. */
  const scripts = [
    { key: 'en', label: 'English', t: tenants.find((t) => t.locale.startsWith('en')) },
    { key: 'ar', label: 'العربية', t: tenants.find((t) => t.locale.startsWith('ar')) },
    { key: 'hi', label: 'हिन्दी', t: tenants.find((t) => t.locale.startsWith('hi')) },
  ].filter((s): s is { key: string; label: string; t: LandingTenant } => Boolean(s.t));
  const [script, setScript] = useState(scripts[0]?.key ?? 'en');

  return (
    <>
      <Feature
        tag="The theme engine"
        title="Six inputs. A whole theme."
        body="Pick a brand. Buttons, cards, focus rings and type all change together, in light and dark, and every colour pair is checked before it is used."
        foot="Try it: the card is live."
        picture="/landing/galaxy-sky.webp"
      >
          <ToggleButtonGroup
            size="sm"
            aria-label="Brand"
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={[brand]}
            onSelectionChange={(k) => setBrand(String([...k][0] ?? brand))}
          >
            {tenants.map((t) => (
              <ToggleButton key={t.id} id={t.id}>
                {t.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        {theme && (
          <TenantPreview t={theme}>
            <Switch defaultSelected>{theme.typePair} type · {theme.shape} shape</Switch>
          </TenantPreview>
        )}
      </Feature>

      <Feature
        flip
        tag="Every script"
        title="Right to left, and Devanagari, by default."
        body="Layouts use logical properties, so a right-to-left brand mirrors without a single override, and each type pair carries the fonts its script needs."
        foot="Switch the language on the card."
        picture="/landing/galaxy-spiral.webp"
      >
          <ToggleButtonGroup
            size="sm"
            aria-label="Language"
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={[script]}
            onSelectionChange={(k) => setScript(String([...k][0] ?? script))}
          >
            {scripts.map((s) => (
              <ToggleButton key={s.key} id={s.key} lang={s.key}>
                {s.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        {/* All three calendars sit in one grid cell and only the chosen one shows, so the card keeps the tallest
            one's height. Swapping one in alone changed the card's height (English has a week fewer), the centred
            stack re-centred, and the buttons jumped 26px — so the pill slid in from below. */}
        <div className={styles.scriptStack}>
          {scripts.map((s) => (
            <div key={s.key} inert={s.key !== script} data-active={s.key === script || undefined}>
              <ScriptPreview t={s.t} />
            </div>
          ))}
        </div>
      </Feature>

      <Feature
        tag="For agents"
        title="Read by your agents, not guessed at."
        body="Every component is described once, in a meta.json file. The docs, the MCP server and the drift checker all read that file, so an agent builds with the rules you wrote."
        foot="@syntara/mcp, on npm."
        picture="/landing/galaxy-sky.webp"
      >
        <div className={styles.chat}>
          <p className={`${styles.msg} ${styles.msgMe}`}>Add a payout settings form for Harbor.</p>
          <p className={styles.msg}>
            Using <code>Switch</code>, <code>Slider</code> and <code>Button</code>. Switches take effect at once, so
            the only button is <code>Save limit</code>, for the slider.
          </p>
          <p className={`${styles.msg} ${styles.msgMe}`}>Will it pass contrast in dark mode?</p>
          <p className={styles.msg}>Harbor’s dark theme was checked pair by pair when it was built, so yes.</p>
        </div>
      </Feature>
    </>
  );
}
