'use client';

/**
 * Batch 3 (page): how each component is drawn on the stage, and its tile drawing. See docs/design/motion-lab.md §12.
 *
 * Page-sized components, so each stage shows the slice where the motion is:
 * - Hero has no entrance. Its motion is the decoration's own infinite loop (orbit: the rings ripple), so it renders in
 *   every phase and the lab ignores it when timing the loop. It is drawn zoomed out (a smaller view of a desktop page)
 *   so the wide layout fits the stage; zoom changes no duration, curve or relative distance.
 * - Marquee scrolls by itself, in every phase.
 * - Sidebar: its collapse snaps (no transition on its width), so the loop opens a group through `isExpanded`.
 * - Footer only moves under the pointer. The stage is inert, so the social links are stand-ins wearing
 *   footer.module.css with `data-hovered`; the wordmark's glow keys off `:hover`, which no attribute can reach.
 *   Drawn zoomed out like Hero, so its desktop layout (from 960px) fits.
 * - File upload, Prompt composer: the real components through their controlled props.
 * - Streaming response: the real one holds an aria-live region, so the wrapper is a stand-in wearing its stylesheet
 *   around the real ResponseText and ResponseSources (neither announces anything).
 */
import {
  IconAnchor,
  IconBolt,
  IconBrain,
  IconBuilding,
  IconClock,
  IconCode,
  IconCompass,
  IconFileText,
  IconLayoutGrid,
  IconLeaf,
  IconMail,
  IconMountain,
  IconRoute,
  IconRss,
  IconSparkles,
  IconTree,
  IconUsers,
  IconVideo,
  IconWind,
} from '@syntara/icons';
import {
  Button,
  ComposerSelect,
  FileUpload,
  Footer,
  FooterColumn,
  FooterLink,
  FooterStatus,
  Hero,
  IconTile,
  Marquee,
  PromptComposer,
  ResponseSource,
  ResponseSources,
  ResponseText,
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
  type FileUploadEntry,
} from '@syntara/react';
import { useEffect, useMemo, useState } from 'react';
import { useCopy } from '../../../examples/_copy/use-copy';
import { on, type Phase, type SpecimenProps, type SpecimenRender } from '../specimen-types';
/* The components' own stylesheets, for the stand-ins: the same class names, so they can't drift. */
import footerCss from '../../../../../packages/react/src/ui/footer.module.css';
import streamCss from '../../../../../packages/react/src/ui/streaming-response.module.css';
import lab from '../motion-lab.module.css';
import styles from './page.module.css';

/* ---- Hero ---- */

function HeroSpecimen() {
  const t = useCopy();
  return (
    <div className={styles.heroView}>
      <Hero
        variant="orbit"
        headingLevel={2}
        title={t('Money that moves')}
        titleSecondary={t('at your pace')}
        description={t('Save, spend and invest from one account, with every rupee where you can see it.')}
        actions={<Button size="lg">{t('Open an account')}</Button>}
        className={styles.hero}
      />
    </div>
  );
}

/* ---- Marquee ---- */

// Made-up companies, as in marquee-demo.tsx.
const COMPANIES = [
  { name: 'Northwind', Icon: IconCompass },
  { name: 'Fernhill', Icon: IconLeaf },
  { name: 'Brightline', Icon: IconBolt },
  { name: 'Saltmarsh', Icon: IconAnchor },
  { name: 'Ridgeway', Icon: IconMountain },
  { name: 'Oakhurst', Icon: IconTree },
  { name: 'Waypoint', Icon: IconRoute },
  { name: 'Galeforce', Icon: IconWind },
];

function MarqueeSpecimen() {
  const t = useCopy();
  return (
    <div className={styles.marqueeView}>
      <p className={styles.caption}>{t('Teams building with Syntara')}</p>
      <Marquee label={t('Teams building with Syntara')}>
        {COMPANIES.map(({ name, Icon }) => (
          <span key={name} className={styles.logo}>
            <Icon aria-hidden />
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ---- Sidebar ---- */

function SidebarSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={styles.sidebarView}>
      <Sidebar aria-label={t('Main')} variant="floating" className={styles.sidebar}>
        <SidebarHeader
          logo={
            <IconTile tint="none" size="md">
              <IconSparkles />
            </IconTile>
          }
          title="Tempo"
          subtitle={t("Plan the team's week")}
        />
        <SidebarSection title={t('General')}>
          <SidebarItem href="#overview" icon={<IconLayoutGrid />} isCurrent>
            {t('Overview')}
          </SidebarItem>
          <SidebarItem href="#tasks" icon={<IconFileText />} count={4}>
            {t('Daily tasks')}
          </SidebarItem>
        </SidebarSection>
        <SidebarSection title={t('Management')}>
          <SidebarItem href="#organization" icon={<IconBuilding />}>
            {t('Organization')}
          </SidebarItem>
          <SidebarItem icon={<IconUsers />} label={t('Employees')} count={2} isExpanded={on(phase)}>
            <SidebarItem href="#jonah">Jonah Adams</SidebarItem>
            <SidebarItem href="#yuri">Yuri Jackson</SidebarItem>
          </SidebarItem>
          <SidebarItem href="#time" icon={<IconClock />}>
            {t('Time tracking')}
          </SidebarItem>
        </SidebarSection>
      </Sidebar>
      {/* The page beside it, quiet, so the sidebar reads as part of an app. */}
      <span className={styles.pageArea} aria-hidden>
        <span className={styles.pageTitle}>{t('Overview')}</span>
        <span className={styles.pageBlock} />
        <span className={styles.pageBlock} />
      </span>
    </div>
  );
}

/* ---- Footer ---- */

const SOCIALS = [
  { label: 'Newsletter', Icon: IconMail },
  { label: 'Source code', Icon: IconCode },
  { label: 'Videos', Icon: IconVideo },
  { label: 'Feed', Icon: IconRss },
];

function FooterSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  const columns = [
    { title: t('Product'), links: [t('Automations'), t('Audiences'), t('Templates')] },
    { title: t('Resources'), links: [t('Changelog'), t('Pricing'), t('Security')] },
    { title: t('Company'), links: [t('About'), t('Blog'), t('Careers')] },
  ];
  return (
    <div className={styles.footerView}>
      <Footer
        wordmark={t('Syntara')}
        aside={
          <>
            <address>
              {t('14 Harbour Lane, Suite 300')}
              <br />
              {t('Bengaluru 560001')}
            </address>
            {/* Stand-ins for FooterSocialLink: its classes, with the hover state the loop sets on the second one. */}
            <span className={styles.socialRow}>
              {SOCIALS.map(({ label, Icon }, i) => (
                <span key={label} className={footerCss.social} data-hovered={(i === 1 && on(phase)) || undefined}>
                  <span className={footerCss.socialIcon}>
                    <Icon aria-hidden />
                  </span>
                </span>
              ))}
            </span>
            <FooterStatus>{t('All systems operational')}</FooterStatus>
          </>
        }
      >
        {columns.map((col) => (
          <FooterColumn key={col.title} title={col.title}>
            {col.links.map((label) => (
              <FooterLink key={label} href="#">
                {label}
              </FooterLink>
            ))}
          </FooterColumn>
        ))}
      </Footer>
    </div>
  );
}

/* ---- File upload ---- */

const sample = (name: string, kb: number, type: string) => new File([new Uint8Array(kb * 1024)], name, { type });

/** Rest: no files. Enter: two arrive part-way. Hold: the bars glide on. Exit: both finish and their ticks pop. */
const PROGRESS: Record<Phase, number[] | null> = {
  closed: null,
  entering: [24, 8],
  open: [72, 46],
  exiting: [100, 100],
};

function FileUploadSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  const files = useMemo(
    () => [sample('invoice-march.pdf', 842, 'application/pdf'), sample('site-photo-01.jpg', 2310, 'image/jpeg')],
    [],
  );
  const progress = PROGRESS[phase];
  const entries: FileUploadEntry[] = progress ? files.map((file, i) => ({ file, progress: progress[i] })) : [];
  return (
    <div className={`${lab.specimen} ${styles.fileView}`}>
      <FileUpload
        label={t('Supporting documents')}
        acceptedFileTypes={['image/*', '.pdf']}
        maxSize={20 * 1024 * 1024}
        allowsMultiple
        files={entries}
      />
    </div>
  );
}

/* ---- Prompt composer ---- */

function PromptComposerSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${lab.specimen} ${styles.composerView}`}>
      <PromptComposer
        glow="brand"
        placeholder={t('Ask about your account…')}
        value={on(phase) ? t('How much of my consult cover is left?') : ''}
        isPending={phase === 'open'}
        startActions={
          <ComposerSelect
            label={t('Reasoning')}
            selectedId="quick"
            options={[
              { id: 'quick', label: t('Quick answer'), icon: <IconBolt /> },
              { id: 'deep', label: 'DeepThink', icon: <IconBrain /> },
            ]}
          />
        }
      />
    </div>
  );
}

/* ---- Streaming response ---- */

const WORD_MS = 70; // the pace a model writes at, as in streaming-response-demo.tsx: data arriving, not motion

/** Streaming while entering and open, a word per tick; complete on exit (caret goes, sources pop); empty at rest. */
function StreamingBody({ phase }: { phase: Phase }) {
  const t = useCopy();
  const words = useMemo(
    () =>
      t(
        'You can change the delivery address until the order is packed. Open the order, choose Edit address, and pick a saved address or add a new one.',
      ).split(/(?<=\s)/),
    [t],
  );
  const [shown, setShown] = useState(1);
  const streaming = on(phase);
  useEffect(() => {
    if (!streaming) return;
    const id = setInterval(() => setShown((n) => (n >= words.length ? n : n + 1)), WORD_MS);
    return () => clearInterval(id);
  }, [streaming, words.length]);
  const text = streaming ? words.slice(0, shown).join('') : words.join('');
  return (
    // Stand-in for StreamingResponse's <article>: its classes and data-status, without its live region.
    <div className={streamCss.root} data-status={streaming ? 'streaming' : 'complete'}>
      <div className={streamCss.body}>
        <ResponseText text={text} />
        {!streaming && (
          <ResponseSources label={t('Sources')}>
            <ResponseSource index={1} href="#">
              {t('Changing your address')}
            </ResponseSource>
            <ResponseSource index={2} href="#">
              {t('Delivery times')}
            </ResponseSource>
            <ResponseSource index={3} href="#">
              {t('Pickup points')}
            </ResponseSource>
          </ResponseSources>
        )}
      </div>
      {streaming && (
        <div className={streamCss.status}>
          <span className={streamCss.mark}>
            <span className={streamCss.dot} />
          </span>
          <span>
            <span className={streamCss.label}>{t('Writing…')}</span>
          </span>
        </div>
      )}
    </div>
  );
}

function StreamingResponseSpecimen({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${lab.specimen} ${styles.streamView}`}>
      <div className={styles.chat}>
        <p className={styles.question}>{t('Can I change my delivery address?')}</p>
        <div className={styles.answer}>
          <span className={styles.mark}>
            <IconSparkles aria-hidden />
          </span>
          <div className={styles.answerBody}>{phase !== 'closed' && <StreamingBody key={cycle} phase={phase} />}</div>
        </div>
      </div>
    </div>
  );
}

export const RENDER: Record<string, SpecimenRender> = {
  hero: HeroSpecimen,
  marquee: MarqueeSpecimen,
  sidebar: SidebarSpecimen,
  footer: FooterSpecimen,
  'file-upload': FileUploadSpecimen,
  'prompt-composer': PromptComposerSpecimen,
  'streaming-response': StreamingResponseSpecimen,
};
