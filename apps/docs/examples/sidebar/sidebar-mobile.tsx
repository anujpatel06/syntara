'use client';

import { Button, DialogTrigger, Sheet, Sidebar, SidebarItem, SidebarSection } from '@syntara/react';
import { IconBell, IconLayoutDashboard, IconMenu2, IconReceipt, IconSettings, IconWallet } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

/** Narrow screens: the same Sidebar inside a start-side Sheet. The Sheet's title replaces the brand block, and the
 *  Sidebar drops its own panel (background, edge, block padding) because the Sheet is the panel. */
export default function Example() {
  const t = useCopy();
  return (
    <DialogTrigger>
      <Button variant="outline" size="icon" aria-label={t('Open navigation')}>
        <IconMenu2 aria-hidden />
      </Button>
      <Sheet side="start" title="Ledger">
        <Sidebar aria-label={t('Main')} style={{ inlineSize: '100%', paddingBlock: 0, background: 'transparent', boxShadow: 'none' }}>
          <SidebarSection title={t('Overview')}>
            <SidebarItem href="#dashboard" icon={<IconLayoutDashboard />} isCurrent>{t('Dashboard')}</SidebarItem>
            <SidebarItem href="#wallets" icon={<IconWallet />}>{t('Wallets')}</SidebarItem>
            <SidebarItem href="#statements" icon={<IconReceipt />} count={3}>{t('Statements')}</SidebarItem>
          </SidebarSection>
          <SidebarSection title={t('Activity')}>
            <SidebarItem href="#alerts" icon={<IconBell />}>{t('Alerts')}</SidebarItem>
            <SidebarItem href="#settings" icon={<IconSettings />}>{t('Settings')}</SidebarItem>
          </SidebarSection>
        </Sidebar>
      </Sheet>
    </DialogTrigger>
  );
}
