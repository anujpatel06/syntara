'use client';

import { Badge, Chip, ChipGroup, PersonChip, Tag } from '@syntara/react';
import { IconHome } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

// The caption sits beside the items, and above them when the box is narrow.
const row = { display: 'flex', flexWrap: 'wrap', columnGap: 'var(--syntara-space-3)', rowGap: 'var(--syntara-space-2)', alignItems: 'center' } as const;
const caption = { margin: 0, flex: '0 0 7rem', color: 'var(--syntara-color-text-subtle)', fontSize: 'var(--syntara-font-size-sm)' } as const;

// One family, four jobs. Badge = a state or count. Tag = a static attribute. PersonChip = a person. Chip = something you pick or remove.
export default function Example() {
  const t = useCopy();
  return (
    <div style={{ display: 'grid', gap: 'var(--syntara-space-4)', inlineSize: '100%', maxInlineSize: '36rem' }}>
      <div style={row}>
        <p style={caption}>{t('State or count')}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)', alignItems: 'center' }}>
          <Badge tone="success">{t('Paid')}</Badge>
          <Badge tone="warning" dot>{t('Pending')}</Badge>
          <Badge variant="status" tone="info">{t('In review')}</Badge>
        </div>
      </div>
      <div style={row}>
        <p style={caption}>{t('Attribute')}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)', alignItems: 'center' }}>
          <Tag tone="success" uppercase>{t('Cashless')}</Tag>
          <Tag leading={<IconHome />}>{t('Home collection')}</Tag>
        </div>
      </div>
      <div style={row}>
        <p style={caption}>{t('A person')}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)', alignItems: 'center' }}>
          <PersonChip name="Priya Shah" />
          <PersonChip name={t('Father')} placeholder />
        </div>
      </div>
      <div style={row}>
        <p style={caption}>{t('Pick or remove')}</p>
        <ChipGroup aria-label={t('Show')} size="sm" defaultSelectedKeys={['sponsored']}>
          <Chip id="sponsored" count={3}>{t('Sponsored')}</Chip>
          <Chip id="discounted" count={2}>{t('Discounted')}</Chip>
        </ChipGroup>
      </div>
    </div>
  );
}
