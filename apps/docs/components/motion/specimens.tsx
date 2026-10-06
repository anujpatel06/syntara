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
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Chip,
  ChipGroup,
  Meter,
  Radio,
  RadioGroup,
  Sparkline,
  Steps,
  ToggleButton,
  ToggleButtonGroup,
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
import { RENDER as DATA_RENDER } from './batch3/data';
import { RENDER as INPUTS_RENDER } from './batch3/inputs';
import { RENDER as OVERLAYS_RENDER } from './batch3/overlays';
import { RENDER as PAGE_RENDER } from './batch3/page';
import { SPECIMEN_LIST, type SpecimenInfo } from './specimen-list';
import { on, type SpecimenProps } from './specimen-types';
import { useCopy } from '../../examples/_copy/use-copy';
/* Same files as the components import, so the same class names: a stand-in can't drift from its component. */
import dialogCss from '../../../../packages/react/src/ui/dialog.module.css';
import sheetCss from '../../../../packages/react/src/ui/sheet.module.css';
import styles from './motion-lab.module.css';

export type { Phase, SpecimenProps } from './specimen-types';

export interface Specimen extends SpecimenInfo {
  Render: (props: SpecimenProps) => ReactNode;
}


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

/* ---- Sheet: a stand-in, like Dialog (it is modal too) ---- */

function SheetStandIn({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <>
      <div className={styles.page} aria-hidden inert>
        <Button variant="outline">{t('Filters')}</Button>
      </div>
      {phase !== 'closed' && (
        <div
          key={cycle}
          aria-hidden
          inert
          className={`${sheetCss.overlay} ${styles.standin}`}
          data-entering={phase === 'entering' || undefined}
          data-exiting={phase === 'exiting' || undefined}
        >
          <div
            className={sheetCss.panel}
            data-side="end"
            data-entering={phase === 'entering' || undefined}
            data-exiting={phase === 'exiting' || undefined}
          >
            <div className={sheetCss.dialog}>
              <div className={sheetCss.header}>
                <p className={sheetCss.title}>{t('Filter claims')}</p>
                <p className={sheetCss.description}>{t('Show only the claims that match.')}</p>
              </div>
              <div className={sheetCss.body}>
                <TextField label={t('Reference')} placeholder={t('e.g. CLM-20418')} />
                <Checkbox defaultSelected>{t('Submitted')}</Checkbox>
                <Checkbox defaultSelected>{t('In review')}</Checkbox>
                <Checkbox>{t('Paid')}</Checkbox>
              </div>
              <div className={sheetCss.footer}>
                <Button variant="ghost">{t('Reset')}</Button>
                <Button>{t('Show results')}</Button>
              </div>
              <Button variant="ghost" size="icon" aria-label="Close" className={sheetCss.close}>
                <IconX aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ---- Batch 2: real components ---- */

function CheckboxSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={styles.specimen}>
      <Checkbox isSelected={on(phase)} description={t('We’ll email you when a claim changes status.')}>
        {t('Email me about updates')}
      </Checkbox>
    </div>
  );
}

function RadioSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={styles.specimen}>
      <RadioGroup label={t('Statement frequency')} value={on(phase) ? 'quarterly' : 'weekly'}>
        <Radio value="weekly">{t('Weekly')}</Radio>
        <Radio value="monthly">{t('Monthly')}</Radio>
        <Radio value="quarterly">{t('Quarterly')}</Radio>
      </RadioGroup>
    </div>
  );
}

function ToggleGroupSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={styles.specimen}>
      <ToggleButtonGroup aria-label={t('Reporting period')} selectedKeys={[on(phase) ? 'year' : 'week']} disallowEmptySelection>
        <ToggleButton id="week">{t('Week')}</ToggleButton>
        <ToggleButton id="month">{t('Month')}</ToggleButton>
        <ToggleButton id="year">{t('Year')}</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

function ChipSpecimen({ phase }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={styles.specimen}>
      <ChipGroup label={t('Benefits')} selectedKeys={on(phase) ? ['sponsored', 'consults'] : ['all']}>
        <Chip id="all" count={10}>{t('All')}</Chip>
        <Chip id="sponsored" count={3}>{t('Sponsored')}</Chip>
        <Chip id="discounted" count={2}>{t('Discounted')}</Chip>
        <Chip id="consults" count={4}>{t('Consults')}</Chip>
      </ChipGroup>
    </div>
  );
}

const STEPS = [
  { id: 'details', label: 'Details' },
  { id: 'upload', label: 'Upload' },
  { id: 'review', label: 'Review' },
];

function StepsSpecimen({ phase }: SpecimenProps) {
  return (
    <div className={`${styles.specimen} ${styles.specimenWide}`}>
      <Steps current={on(phase) ? 'upload' : 'details'} steps={STEPS} />
    </div>
  );
}

/** Badges pop in as they mount, so each loop mounts them again. */
function BadgeSpecimen({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={styles.specimen}>
      {phase !== 'closed' && (
        <div key={cycle} className={styles.specimenRow}>
          <Badge>{t('Draft')}</Badge>
          <Badge tone="info">{t('In review')}</Badge>
          <Badge tone="success">{t('Paid')}</Badge>
          <Badge tone="warning">{t('Pending')}</Badge>
          <Badge tone="danger">{t('Rejected')}</Badge>
          <Badge tone="brand" variant="solid">{t('New')}</Badge>
        </div>
      )}
    </div>
  );
}

function MeterSpecimen({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={`${styles.specimen} ${styles.specimenWide}`}>
      {phase !== 'closed' && (
        <Meter key={cycle} label={t('Consultations')} value={7400} maxValue={18000} valueLabel="₹7,400 used" caption="of ₹18,000" />
      )}
    </div>
  );
}

function SparklineSpecimen({ phase, cycle }: SpecimenProps) {
  const t = useCopy();
  return (
    <div className={styles.specimen}>
      {phase !== 'closed' && (
        <Card key={cycle} className={styles.specimenCard}>
          <CardHeader>
            <CardDescription>{t('Monthly recurring revenue')}</CardDescription>
            <CardTitle>$48,210</CardTitle>
          </CardHeader>
          <CardContent>
            <Sparkline
              aria-label={t('Up 18% over the last 12 months')}
              data={[31, 33, 32, 36, 35, 38, 41, 39, 43, 44, 46, 48]}
              className={styles.specimenSpark}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

/* A stand-in photo (inline SVG), as avatar-demo.tsx uses, so nothing is fetched. */
const PHOTO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#c9d6e3"/><circle cx="32" cy="26" r="12" fill="#8a9bb0"/><path d="M10 64c2-14 11-21 22-21s20 7 22 21z" fill="#8a9bb0"/></svg>',
  );

function AvatarSpecimen({ phase, cycle }: SpecimenProps) {
  return (
    <div className={styles.specimen}>
      {phase !== 'closed' && (
        <div key={cycle} className={styles.specimenRow}>
          <Avatar name="Priya Raman" src={PHOTO} size="lg" />
          <Avatar name="Arjun Shah" size="lg" />
          <Avatar name="Meera Iyer" size="lg" />
          <Avatar name="Daniel Okafor" size="lg" />
          <Avatar name="Omar Haddad" size="lg" shape="square" />
        </div>
      )}
    </div>
  );
}

const RENDER: Record<string, (props: SpecimenProps) => ReactNode> = {
  ...OVERLAYS_RENDER,
  ...INPUTS_RENDER,
  ...DATA_RENDER,
  ...PAGE_RENDER,
  dialog: DialogStandIn,
  tooltip: TooltipSpecimen,
  switch: SwitchSpecimen,
  tabs: TabsSpecimen,
  accordion: AccordionSpecimen,
  'stat-tile': StatTileSpecimen,
  sheet: SheetStandIn,
  checkbox: CheckboxSpecimen,
  'radio-group': RadioSpecimen,
  'toggle-group': ToggleGroupSpecimen,
  chip: ChipSpecimen,
  steps: StepsSpecimen,
  badge: BadgeSpecimen,
  meter: MeterSpecimen,
  sparkline: SparklineSpecimen,
  avatar: AvatarSpecimen,
};

export const SPECIMENS: readonly Specimen[] = SPECIMEN_LIST.map((info) => ({ ...info, Render: RENDER[info.id]! }));
