'use client';

import { Select, SelectItem, SelectSection } from '@syntara/react';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <Select label={t('Time zone')} defaultSelectedKey="Europe/London" style={{ inlineSize: '100%', maxInlineSize: 320 }}>
      <SelectSection title={t('Americas')}>
        <SelectItem id="America/New_York">{t('Eastern Time (New York)')}</SelectItem>
        <SelectItem id="America/Chicago">{t('Central Time (Chicago)')}</SelectItem>
        <SelectItem id="America/Los_Angeles">{t('Pacific Time (Los Angeles)')}</SelectItem>
      </SelectSection>
      <SelectSection title={t('Europe')}>
        <SelectItem id="Europe/London">{t('Greenwich Mean Time (London)')}</SelectItem>
        <SelectItem id="Europe/Berlin">{t('Central European Time (Berlin)')}</SelectItem>
      </SelectSection>
      <SelectSection title={t('Asia')}>
        <SelectItem id="Asia/Kolkata">{t('India Standard Time (Kolkata)')}</SelectItem>
        <SelectItem id="Asia/Singapore">{t('Singapore Time')}</SelectItem>
      </SelectSection>
    </Select>
  );
}
