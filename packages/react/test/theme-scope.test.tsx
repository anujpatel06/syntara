import { parseDate } from '@internationalized/date';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Calendar } from '../src/ui/calendar';
import { ThemeScope, useLocale } from '../src/ui/theme-scope';

function Locale() {
  return <span data-testid="locale">{useLocale().locale}</span>;
}

/** The calendar's day cells, as written: the digits a reader sees. */
const day8 = () => screen.getAllByRole('gridcell').map((c) => c.textContent).find((t) => /^(8|٨|८)$/.test(t ?? ''));

describe('ThemeScope numerals', () => {
  it('leaves the locale alone when numerals is omitted', () => {
    render(<ThemeScope locale="ar-AE"><Locale /></ThemeScope>);
    expect(screen.getByTestId('locale').textContent).toBe('ar-AE');
  });

  it('native: Arabic digits in Arabic, replacing a -u-nu- already in the locale', () => {
    render(
      <ThemeScope locale="ar-AE-u-nu-latn" numerals="native">
        <Locale />
        <Calendar aria-label="Date" defaultValue={parseDate('2026-10-08')} />
      </ThemeScope>,
    );
    expect(screen.getByTestId('locale').textContent).toBe('ar-AE-u-nu-arab');
    expect(day8()).toBe('٨');
  });

  it('native: Devanagari digits in Hindi', () => {
    render(
      <ThemeScope locale="hi-IN" numerals="native">
        <Calendar aria-label="Date" defaultValue={parseDate('2026-10-08')} />
      </ThemeScope>,
    );
    expect(day8()).toBe('८');
  });

  it('latin forces 1 2 3, and native is a no-op for a language without its own digits', () => {
    render(
      <>
        <ThemeScope locale="ar-EG" numerals="latin"><Locale /></ThemeScope>
        <ThemeScope locale="en-GB" numerals="native"><Locale /></ThemeScope>
      </>,
    );
    expect(screen.getAllByTestId('locale').map((e) => e.textContent)).toEqual(['ar-EG-u-nu-latn', 'en-GB']);
  });
});
