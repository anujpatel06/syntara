/**
 * The package as npm ships it: `pnpm pack`, unpacked in an empty folder outside the repo, started from its bin
 * with no SYNTARA_ROOT. Every tool and both resources must answer from the data bundled in the tarball.
 *
 * 0.1.3 shipped without that data: `npx @syntara/mcp` started, then every tool answered "No Syntara repo"
 * (checked 2026-10-06). The other tests all ran inside the repo, so none of them could see it.
 *
 * Dependencies come from this package's own node_modules (linked in), so the test needs no network.
 * That has one blind spot: the linked @syntara/audit is the workspace copy, which finds the repo's tenants on its
 * own, so this test can't tell whether src/main.ts points the auditor at the bundled tenants. That was checked by
 * hand on 2026-10-06: `npx --package <tarball> syntara-mcp` in an empty folder, every tool and resource answered.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readdirSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { TOOL_NAMES } from '../src/server';

const here = dirname(fileURLToPath(import.meta.url));
const pkgDir = join(here, '..');

const ONE_CALL_EACH: Record<(typeof TOOL_NAMES)[number], Record<string, unknown>> = {
  list_components: {},
  get_component: { name: 'button' },
  get_tokens: { category: 'radius' },
  find_token: { value: '16px' },
  get_pattern: { name: 'sign-in' },
  audit_snippet: { code: '<Button>Save</Button>' },
  get_example: { component: 'button' },
  find_icon: { query: 'arrow' },
};

let tmp: string;
let client: Client;

beforeAll(async () => {
  tmp = mkdtempSync(join(tmpdir(), 'syntara-mcp-packed-'));
  execFileSync('pnpm', ['pack', '--pack-destination', tmp], { cwd: pkgDir, stdio: 'pipe' });
  const tarball = readdirSync(tmp).find((f) => f.endsWith('.tgz'))!;
  const unpacked = join(tmp, 'pkg');
  mkdirSync(unpacked);
  execFileSync('tar', ['-xzf', join(tmp, tarball), '-C', unpacked, '--strip-components=1']);
  symlinkSync(join(pkgDir, 'node_modules'), join(unpacked, 'node_modules'), 'dir');

  const { SYNTARA_ROOT: _, ...env } = process.env as Record<string, string>;
  client = new Client({ name: 'syntara-mcp-packed-test', version: '0.0.0' });
  await client.connect(
    new StdioClientTransport({ command: process.execPath, args: [join(unpacked, 'bin/cli.mjs')], cwd: tmp, env, stderr: 'pipe' }),
  );
}, 120_000);

afterAll(async () => {
  await client?.close();
  if (tmp) rmSync(tmp, { recursive: true, force: true });
});

describe('the packed package, outside the repo', () => {
  for (const name of TOOL_NAMES) {
    it(`${name} answers from the bundled data`, async () => {
      const result = await client.callTool({ name, arguments: ONE_CALL_EACH[name] });
      const text = (result.content as { text: string }[])[0]!.text;
      expect(text).not.toMatch(/No Syntara repo/);
      expect(result.isError, text).toBeFalsy();
    });
  }

  it('lists every component', async () => {
    const result = await client.callTool({ name: 'list_components', arguments: {} });
    const { components } = JSON.parse((result.content as { text: string }[])[0]!.text) as { components: unknown[] };
    const inRepo = readdirSync(join(pkgDir, '../react/meta')).filter((f) => f.endsWith('.meta.json')).length;
    expect(components.length).toBe(inRepo);
  });

  for (const uri of ['syntara://agents', 'syntara://governance']) {
    it(`serves ${uri}`, async () => {
      const { contents } = await client.readResource({ uri });
      expect((contents[0] as { text: string }).text.length).toBeGreaterThan(100);
    });
  }
});
