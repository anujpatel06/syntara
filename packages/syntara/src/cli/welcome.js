// The welcome card `npx syntara init` adds to the app, so the first thing someone sees after setup is their own
// brand on real components, not their old page. It is one file they own and delete; nothing in syntara depends on it.

import { posix } from 'node:path';

/** Where the card goes: beside the theme CSS, in the entry file's language (.tsx for TypeScript apps). */
export function welcomePathFor(cssPath, entryPath) {
  const ext = /\.tsx?$/.test(entryPath) ? '.tsx' : '.jsx';
  return posix.join(posix.dirname(cssPath), `syntara-welcome${ext}`);
}

const quote = (text) => JSON.stringify(text);

/**
 * The card's source. `checks` comes from the theme that was just generated, so the number on the card is the one
 * the command printed.
 * @param {{ name: string, entryPath: string, welcomePath: string, checks: { passed: number, checks: number } }} input
 */
export function welcomeSource({ name, entryPath, welcomePath, checks }) {
  const removal = `To remove this card, delete ${welcomePath} and the two SyntaraWelcome lines in ${entryPath}.`;
  return `'use client';

// Added by \`npx syntara init\` so you can see your brand straight away.
// ${removal}

import { useState } from 'react';
import { Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Link, Switch, TextField } from 'syntara';

export function SyntaraWelcome() {
  const [shown, setShown] = useState(true);
  if (!shown) return null;
  return (
    <div style={{ paddingBlock: 'var(--syntara-space-8)', paddingInline: 'var(--syntara-space-4)' }}>
      <Card style={{ maxInlineSize: 520, marginInline: 'auto' }}>
        <CardHeader>
          {/* A welcome is a headline, so the title is two steps up from a card's usual size. */}
          <CardTitle level={2} style={{ fontSize: 'var(--syntara-font-size-2xl)', letterSpacing: 'var(--syntara-font-tracking-2xl)' }}>{${quote(`This is ${name}`)}}</CardTitle>
          <CardDescription>
            {${quote(`Your colours, corners and fonts on real components, in light and dark. ${checks.passed} of ${checks.checks} contrast checks pass.`)}}
          </CardDescription>
          <CardAction>
            <Badge tone="success" variant="status">Set up</Badge>
          </CardAction>
        </CardHeader>
        <CardContent style={{ display: 'grid', gap: 'var(--syntara-space-5)' }}>
          <TextField label="Email" type="email" placeholder="you@example.com" />
          <Switch defaultSelected>Send me product updates</Switch>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--syntara-space-2)' }}>
            <Button>Get started</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </CardContent>
        {/* The line above uses border.default: the card's own (border.subtle) all but disappears on a dark card. */}
        <CardFooter
          divider
          style={{
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 'var(--syntara-space-3)',
            boxShadow: 'inset 0 var(--syntara-hairline) 0 var(--syntara-color-border-default)',
          }}
        >
          <Link href="https://syntara.live/components" target="_blank">
            See every component
          </Link>
          <Button variant="ghost" size="sm" onPress={() => setShown(false)}>
            Hide for now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
`;
}
