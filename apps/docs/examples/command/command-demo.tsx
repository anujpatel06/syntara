'use client';

import { useState } from 'react';
import { Button, CommandDialog, CommandItem, CommandSection, Kbd, useCommandShortcut } from '@syntara/react';
import { IconArrowsExchange, IconCreditCard, IconFileText, IconSearch, IconSettings, IconUser } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  const [isOpen, setOpen] = useState(false);
  useCommandShortcut(() => setOpen(true));
  return (
    <>
      <Button variant="outline" onPress={() => setOpen(true)}>
        <IconSearch aria-hidden />
        {t('Search…')}
        <Kbd>⌘K</Kbd>
      </Button>
      <CommandDialog isOpen={isOpen} onOpenChange={setOpen} placeholder={t('Search pages and actions…')} onAction={(key) => console.log(key)}>
        <CommandSection title={t('Pages')}>
          <CommandItem id="statements" icon={<IconFileText />} meta={t('Accounts')}>{t('Statements')}</CommandItem>
          <CommandItem id="cards" icon={<IconCreditCard />} meta={t('Accounts')}>{t('Cards')}</CommandItem>
          <CommandItem id="profile" icon={<IconUser />} meta={t('Settings')}>{t('Profile')}</CommandItem>
        </CommandSection>
        <CommandSection title={t('Actions')}>
          <CommandItem id="transfer" icon={<IconArrowsExchange />} description={t('Between your own accounts')} textValue={t('Transfer money move')}>
            {t('Transfer money')}
          </CommandItem>
          <CommandItem id="preferences" icon={<IconSettings />} meta="⌘,">{t('Open preferences')}</CommandItem>
        </CommandSection>
      </CommandDialog>
    </>
  );
}
