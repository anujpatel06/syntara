// The command /themes hands over ("Use in your app") must parse, and must rebuild exactly the theme on screen.
// It is built in the docs app (apps/docs/components/themes/use-command.ts) and run by this package's CLI.
import { generateTheme } from '@syntara/theme-engine';
import { describe, expect, it } from 'vitest';
import { initCommand } from '../../../apps/docs/components/themes/use-command';
import { parseArgs } from '../src/cli/init.js';
import { LOOKS } from '../src/cli/looks.js';

describe('/themes → npx syntara init', () => {
  it.each(LOOKS.map((l) => [l.id, l] as const))('the %s look round-trips', (_, look) => {
    const theme = generateTheme({ name: 'x', ...look.brand });
    const command = initCommand(theme.input);
    expect(command.startsWith('npx syntara init ')).toBe(true);
    // A word starting with "#" would be a shell comment: the colour would silently vanish.
    expect(command.split(' ').some((word) => word.startsWith('#'))).toBe(false);

    const opts = parseArgs(command.split(' ').slice(3));
    expect(generateTheme({ name: 'x', ...opts.brand }).input).toEqual(theme.input);
  });
});
