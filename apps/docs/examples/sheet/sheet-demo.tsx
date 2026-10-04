'use client';

import { Button, Checkbox, CheckboxGroup, DialogTrigger, Sheet, TextField } from '@syntara/react';
import { IconAdjustmentsHorizontal } from '@syntara/icons';
import { useCopy } from '../_copy/use-copy';

export default function Example() {
  const t = useCopy();
  return (
    <DialogTrigger>
      <Button variant="outline">
        <IconAdjustmentsHorizontal aria-hidden />
        {t('Filters')}
      </Button>
      <Sheet
        title={t('Filter claims')}
        description={t('Show only the claims that match.')}
        footer={({ close }) => (
          <>
            <Button variant="ghost" onPress={close}>
              {t('Reset')}
            </Button>
            <Button onPress={close}>{t('Show results')}</Button>
          </>
        )}
      >
        <TextField label={t('Reference')} placeholder={t('e.g. CLM-20418')} />
        <CheckboxGroup label={t('Status')} defaultValue={['submitted', 'review']}>
          <Checkbox value="submitted">{t('Submitted')}</Checkbox>
          <Checkbox value="review">{t('In review')}</Checkbox>
          <Checkbox value="approved">{t('Approved')}</Checkbox>
          <Checkbox value="declined">{t('Declined')}</Checkbox>
        </CheckboxGroup>
      </Sheet>
    </DialogTrigger>
  );
}
