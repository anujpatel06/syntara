'use client';

import { Tab, TabList, TabPanel, Tabs } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const text = { margin: 0, color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-md)' };

export default function Example() {
  const t = useCopy();
  return (
    <Tabs defaultSelectedKey="overview">
      <TabList aria-label={t('Claim details')}>
        <Tab id="overview">{t('Overview')}</Tab>
        <Tab id="documents">{t('Documents')}</Tab>
        <Tab id="payments">{t('Payments')}</Tab>
        <Tab id="history">{t('History')}</Tab>
      </TabList>
      <TabPanel id="overview">
        <p style={text}>{t('Submitted on 12 September. A reviewer is checking the treatment summary.')}</p>
      </TabPanel>
      <TabPanel id="documents">
        <p style={text}>{t('3 files attached: invoice, prescription and discharge summary.')}</p>
      </TabPanel>
      <TabPanel id="payments">
        <p style={text}>{t('No payments yet. Approved amounts are paid within 5 working days.')}</p>
      </TabPanel>
      <TabPanel id="history">
        <p style={text}>{t('Claim created, documents uploaded, review started.')}</p>
      </TabPanel>
    </Tabs>
  );
}
