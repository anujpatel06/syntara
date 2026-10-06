'use client';

/**
 * What the motion lab can animate (docs/design/motion-lab.md §12). Each specimen draws one component for a loop
 * phase. "on" is entering + open, "off" is exiting + closed; the lab's loop moves through the four and waits for
 * whatever animations the change started.
 *
 * Every specimen but Dialog is the real component, driven through its own controlled props: switching a Switch or
 * moving a Tab doesn't take over the page, so there is nothing to stand in for. Dialog is modal (it moves focus and
 * hides the rest of the page), so it loops as a stand-in wearing its own stylesheet (ADR-055).
 */
import { IconUsers, IconWallet, IconX } from '@syntara/icons';
import {
  Accordion,
  AccordionItem,
  Button,
  StatTile,
  StatTileGroup,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TextField,
  Tooltip,
  TooltipTrigger,
} from '@syntara/react';
import type { ReactNode } from 'react';
import { SPECIMEN_LIST, type SpecimenInfo } from './specimen-list';
import { useCopy } from '../../examples/_copy/use-copy';
/* Same file as the component imports, so the same class names: the stand-in can't drift from Dialog. */
import dialogCss from '../../../../packages/react/src/ui/dialog.module.css';
import styles from './motion-lab.module.css';

export type Phase = 'entering' | 'open' | 'exiting' | 'closed';

export interface SpecimenProps {
  phase: Phase;
  /** Bumps once per loop, for specimens that replay by remounting. */
  cycle: number;
}

export interface Specimen extends SpecimenInfo {
  Render: (props: SpecimenProps) => ReactNode;
}

const on = (phase: Phase) => phase === 'entering' || phase === 'open';

/* ---- Dialog: the stand-in ---- */

function PageButton() {
  const t = useCopy();
  return <Button variant="outline">{t('Edit profile')}</Button>;
}

function DialogStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <>
      <div className={styles.page} aria-hidden inert>
        <PageButton />
      </div>
      {phase !== 'closed' && (
        <div
          key={cycle}
          aria-hidden
          inert
          className={`${dialogCss.overlay} ${styles.standin}`}
          data-entering={phase === 'entering' || undefined}
          data-exiting={phase === 'exiting' || undefined}
        >
          <div
            className={dialogCss.panel}
            data-size="md"
            data-entering={phase === 'entering' || undefined}
            data-exiting={phase === 'exiting' || undefined}
          >
            <div className={dialogCss.dialog}>
              <div className={dialogCss.header}>
                <p className={dialogCss.title}>{t('Edit profile')}</p>
                <p className={dialogCss.description}>
                  {t('Your name and email are visible to everyone in your workspace.')}
                </p>
              </div>
              <div className={dialogCss.body}>
                <TextField label={t('Full name')} defaultValue="Priya Raman" />
                <TextField label={t('Email')} type="email" defaultValue="priya.raman@example.com" />
              </div>
              <div className={dialogCss.footer}>
                <Button variant="outline">{t('Cancel')}</Button>
                <Button>{t('Save changes')}</Button>
              </div>
              <Button variant="ghost" size="icon" aria-label="Close" className={dialogCss.close}>
                <IconX aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ---- Real components ---- */

function TooltipSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={styles.specimen}>
      <TooltipTrigger isOpen={on(phase)} delay={0}>
        <Button variant="outline">{t('Export')}</Button>
        <Tooltip>{t('Download the last 90 days as CSV')}</Tooltip>
      </TooltipTrigger>
    </div>
  );
}

function SwitchSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={styles.specimen}>
      <Switch isSelected={on(phase)}>{t('Two-step verification')}</Switch>
    </div>
  );
}

function TabsSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${styles.specimen} ${styles.specimenWide}`}>
      <Tabs selectedKey={on(phase) ? 'payments' : 'overview'}>
        <TabList aria-label={t('Claim details')}>
          <Tab id="overview">{t('Overview')}</Tab>
          <Tab id="documents">{t('Documents')}</Tab>
          <Tab id="payments">{t('Payments')}</Tab>
        </TabList>
        <TabPanel id="overview">
          <p className={styles.specimenText}>{t('Submitted on 12 September. A reviewer is checking the treatment summary.')}</p>
        </TabPanel>
        <TabPanel id="documents">
          <p className={styles.specimenText}>{t('3 files attached: invoice, prescription and discharge summary.')}</p>
        </TabPanel>
        <TabPanel id="payments">
          <p className={styles.specimenText}>{t('No payments yet. Approved amounts are paid within 5 working days.')}</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

function AccordionSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${styles.specimen} ${styles.specimenWide}`}>
      <Accordion expandedKeys={on(phase) ? ['timeline'] : []}>
        <AccordionItem id="documents" title={t('Which documents do I need?')}>
          {t('An itemised invoice, the prescription or referral, and a discharge summary for hospital stays.')}
        </AccordionItem>
        <AccordionItem id="timeline" title={t('How long does a review take?')}>
          {t('Most claims are reviewed within 3 working days. We email you if we need anything else.')}
        </AccordionItem>
        <AccordionItem id="payment" title={t('When will I be paid?')}>
          {t('Approved amounts reach your bank account within 5 working days of approval.')}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

/** Stat tiles animate as they mount, so each loop mounts them again; between loops the stage is empty. */
function StatTileSpecimen({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${styles.specimen} ${styles.specimenWide}`}>
      {phase !== 'closed' && (
        <StatTileGroup key={cycle}>
          <StatTile label={t('Members covered')} value="4" caption={t('2 adults, 2 children')} icon={<IconUsers />} />
          <StatTile
            label={t('Wallet balance')}
            value="₹8,500"
            delta={0}
            deltaLabel={t('no change this month')}
            icon={<IconWallet />}
          />
        </StatTileGroup>
      )}
    </div>
  );
}

const RENDER: Record<string, (props: SpecimenProps) => ReactNode> = {
  dialog: DialogStandIn,
  tooltip: TooltipSpecimen,
  switch: SwitchSpecimen,
  tabs: TabsSpecimen,
  accordion: AccordionSpecimen,
  'stat-tile': StatTileSpecimen,
};

export const SPECIMENS: readonly Specimen[] = SPECIMEN_LIST.map((info) => ({ ...info, Render: RENDER[info.id]! }));
