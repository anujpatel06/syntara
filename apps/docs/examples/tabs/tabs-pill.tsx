'use client';

import { Tab, TabList, TabPanel, Tabs } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const text = { margin: 0, color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-md)' };

export default function Example() {
  const t = useCopy();
  return (
    <Tabs variant="pill" defaultSelectedKey="month">
      <TabList aria-label={t('Reporting period')}>
        <Tab id="week">{t('Week')}</Tab>
        <Tab id="month">{t('Month')}</Tab>
        <Tab id="quarter">{t('Quarter')}</Tab>
        <Tab id="year">{t('Year')}</Tab>
      </TabList>
      <TabPanel id="week">
        <p style={text}>{t('Spending for the last 7 days.')}</p>
      </TabPanel>
      <TabPanel id="month">
        <p style={text}>{t('Spending for September, compared with August.')}</p>
      </TabPanel>
      <TabPanel id="quarter">
        <p style={text}>{t('Spending for July to September.')}</p>
      </TabPanel>
      <TabPanel id="year">
        <p style={text}>{t('Spending for the last 12 months.')}</p>
      </TabPanel>
    </Tabs>
  );
}
