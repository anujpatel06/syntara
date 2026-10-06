/** Starts the server on stdio. stdout carries the protocol, so anything for people goes to stderr. */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { findRoot } from './root';
import { createServer } from './server';

const root = findRoot();
// @syntara/audit finds tenants next to its own source, which is only the repo's tenants/ in a checkout. Installed
// from npm it would find none, and audit_snippet and find_token would fail; point it at the same root.
const tenants = join(root, 'tenants');
if (process.env.SYNTARA_TENANTS_DIR === undefined && existsSync(tenants)) process.env.SYNTARA_TENANTS_DIR = tenants;

const server = createServer({ root });
await server.connect(new StdioServerTransport());
