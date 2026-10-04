'use client';

import { Tab, TabList, TabPanel, Tabs } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

const text = { margin: 0, color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-md)' };

export default function Example() {
  const t = useCopy();
  return (
    <Tabs orientation="vertical" defaultSelectedKey="profile">
      <TabList aria-label={t('Settings')}>
        <Tab id="profile">{t('Profile')}</Tab>
        <Tab id="security">{t('Security')}</Tab>
        <Tab id="notifications">{t('Notifications')}</Tab>
        <Tab id="billing">{t('Billing')}</Tab>
      </TabList>
      <TabPanel id="profile"><p style={text}>{t('Your name, photo and contact details.')}</p></TabPanel>
      <TabPanel id="security"><p style={text}>{t('Password, two-step verification and active sessions.')}</p></TabPanel>
      <TabPanel id="notifications"><p style={text}>{t('Choose which updates reach you by email or SMS.')}</p></TabPanel>
      <TabPanel id="billing"><p style={text}>{t('Payment methods, invoices and plan.')}</p></TabPanel>
    </Tabs>
  );
}
