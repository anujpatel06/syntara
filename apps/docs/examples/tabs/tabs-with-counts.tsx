'use client';

import { IconAlertTriangle, IconCircleCheck, IconInbox } from '@syntara/icons';
import { Tab, TabList, TabPanel, Tabs } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const text = { margin: 0, color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-md)' };

export default function Example() {
  const t = useCopy();
  return (
    <Tabs defaultSelectedKey="open">
      <TabList aria-label={t('Requests')}>
        <Tab id="open" count={12}>
          <IconInbox aria-hidden="true" />
          {t('Open')}
        </Tab>
        <Tab id="action" count={3}>
          <IconAlertTriangle aria-hidden="true" />
          {t('Needs action')}
        </Tab>
        <Tab id="closed" count={128}>
          <IconCircleCheck aria-hidden="true" />
          {t('Closed')}
        </Tab>
        <Tab id="archived" isDisabled>
          {t('Archived')}
        </Tab>
      </TabList>
      <TabPanel id="open"><p style={text}>{t('12 requests are waiting for review.')}</p></TabPanel>
      <TabPanel id="action"><p style={text}>{t('3 requests need a document from you.')}</p></TabPanel>
      <TabPanel id="closed"><p style={text}>{t('128 requests closed this year.')}</p></TabPanel>
    </Tabs>
  );
}
