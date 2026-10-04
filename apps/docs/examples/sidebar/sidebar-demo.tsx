'use client';

import { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandItem,
  IconTile,
  Menu,
  MenuItem,
  MenuSeparator,
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarSearch,
  SidebarSection,
  SidebarUser,
} from '@syntara/react';
import {
  IconBuilding,
  IconClock,
  IconFileText,
  IconHeadphones,
  IconLayoutGrid,
  IconNews,
  IconPlug,
  IconSettings,
  IconShieldLock,
  IconSparkles,
  IconUsers,
} from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  // The search is a launcher: it opens a command palette, and ⌘K / Ctrl+K opens it too.
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearching(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  return (
    <div style={{ blockSize: 840, display: 'flex', maxInlineSize: '100%', minInlineSize: 0 }}>
      <Sidebar aria-label={t('Main')} variant="floating" defaultCollapsed={false}>
        <SidebarHeader logo={<IconTile tint="none" size="md"><IconSparkles /></IconTile>} title="Tempo" subtitle={t("Plan the team's week")} />
        <SidebarSearch shortcut="⌘K" onPress={() => setSearching(true)} />
        <SidebarSection title={t('General')}>
          <SidebarItem href="#overview" icon={<IconLayoutGrid />}>{t('Overview')}</SidebarItem>
          <SidebarItem href="#tasks" icon={<IconFileText />}>{t('Daily tasks')}</SidebarItem>
          <SidebarItem href="#compliance" icon={<IconShieldLock />}>{t('Compliance')}</SidebarItem>
        </SidebarSection>
        <SidebarSection title={t('Management')}>
          <SidebarItem href="#organization" icon={<IconBuilding />}>{t('Organization')}</SidebarItem>
          <SidebarItem icon={<IconUsers />} label={t('Employees')} count={2}>
            <SidebarItem href="#jonah">Jonah Adams</SidebarItem>
            <SidebarItem href="#yuri" isCurrent>Yuri Jackson</SidebarItem>
          </SidebarItem>
          <SidebarItem href="#time" icon={<IconClock />}>{t('Time tracking')}</SidebarItem>
        </SidebarSection>
        <SidebarSection title={t('Other')}>
          <SidebarItem href="#integrations" icon={<IconPlug />}>{t('Integrations')}</SidebarItem>
          <SidebarItem href="#whats-new" icon={<IconNews />}>What's new</SidebarItem>
        </SidebarSection>
        <SidebarFooter>
          <SidebarItem href="#support" icon={<IconHeadphones />} badge={t('New')}>{t('Need support?')}</SidebarItem>
          <SidebarItem href="#settings" icon={<IconSettings />}>{t('Settings')}</SidebarItem>
          <SidebarUser
            name="Maya Chen"
            description="maya@example.com"
            menu={
              <Menu placement="top start">
                <MenuItem id="profile">{t('Profile')}</MenuItem>
                <MenuItem id="billing">{t('Billing')}</MenuItem>
                <MenuSeparator />
                <MenuItem id="sign-out">{t('Sign out')}</MenuItem>
              </Menu>
            }
          />
        </SidebarFooter>
      </Sidebar>
      <CommandDialog isOpen={searching} onOpenChange={setSearching} placeholder={t('Search people and pages…')}>
        <CommandItem id="yuri">Yuri Jackson</CommandItem>
        <CommandItem id="time">{t('Time tracking')}</CommandItem>
      </CommandDialog>
    </div>
  );
}
