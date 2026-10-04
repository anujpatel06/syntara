'use client';

import { Avatar, Chip, ChipGroup } from '@syntara/react';
import { IconHospital, IconPill, IconTestTube, IconVideo } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

// A leading icon gives way to the check when selected; an avatar is covered by a check disc.
export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-5)' }}>
      <ChipGroup label={t('Where')} defaultSelectedKeys={['video']}>
        <Chip id="video" icon={<IconVideo />}>{t('Video')}</Chip>
        <Chip id="clinic" icon={<IconHospital />}>{t('In clinic')}</Chip>
        <Chip id="lab" icon={<IconTestTube />}>{t('Lab')}</Chip>
        <Chip id="pharmacy" icon={<IconPill />}>{t('Pharmacy')}</Chip>
      </ChipGroup>
      <ChipGroup label={t('For')} defaultSelectedKeys={['priya']}>
        <Chip id="arjun" avatar={<Avatar name="Arjun Shah" alt="" />}>Arjun</Chip>
        <Chip id="priya" avatar={<Avatar name="Priya Shah" alt="" />}>Priya</Chip>
        <Chip id="aarav" avatar={<Avatar name="Aarav Shah" alt="" />}>Aarav</Chip>
      </ChipGroup>
    </div>
  );
}
