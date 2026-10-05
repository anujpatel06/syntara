// Drives the Chrome or Edge already on the computer (ADR-050: no browser download), over the DevTools protocol with
// Node's own WebSocket. No dependency: `syntara` stays one install. Only what the font checks need: open a page at a
// device pixel ratio, set its HTML, run a function in it, take a full-page PNG.

import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const env = process.env;
const PATHS = {
  darwin: [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  ],
  linux: [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/usr/bin/microsoft-edge',
    '/snap/bin/chromium',
  ],
  win32: [
    `${env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`,
    `${env['PROGRAMFILES(X86)']}\\Google\\Chrome\\Application\\chrome.exe`,
    `${env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    `${env['PROGRAMFILES(X86)']}\\Microsoft\\Edge\\Application\\msedge.exe`,
    `${env.PROGRAMFILES}\\Microsoft\\Edge\\Application\\msedge.exe`,
  ],
};

/** The browser to measure in: $SYNTARA_CHROME, else the first Chrome, Edge or Chromium found. Null when none. */
export function findChrome() {
  if (env.SYNTARA_CHROME) return env.SYNTARA_CHROME;
  return (PATHS[process.platform] ?? []).find((p) => existsSync(p)) ?? null;
}

export async function launchChrome(executable = findChrome()) {
  if (!executable) throw new Error('NO_CHROME');
  const profile = mkdtempSync(join(tmpdir(), 'syntara-fonts-'));
  const child = spawn(
    executable,
    [
      '--headless=new',
      '--remote-debugging-port=0',
      `--user-data-dir=${profile}`,
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-extensions',
      '--hide-scrollbars',
      '--mute-audio',
      'about:blank',
    ],
    { stdio: ['ignore', 'ignore', 'pipe'] },
  );
  const wsUrl = await new Promise((resolve, reject) => {
    let err = '';
    const timer = setTimeout(() => reject(new Error(`Chrome did not start in 30 s: ${err.slice(-400)}`)), 30_000);
    child.stderr.on('data', (d) => {
      err += d;
      const m = /DevTools listening on (ws:\/\/\S+)/.exec(err);
      if (m) clearTimeout(timer), resolve(m[1]);
    });
    child.on('exit', (code) => (clearTimeout(timer), reject(new Error(`Chrome exited (${code}): ${err.slice(-400)}`))));
    child.on('error', (e) => (clearTimeout(timer), reject(new Error(`Chrome could not start: ${e.message}`))));
  });

  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => ((ws.onopen = resolve), (ws.onerror = () => reject(new Error('Could not connect to Chrome.')))));
  let nextId = 1;
  const waiting = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(String(event.data));
    const w = msg.id !== undefined && waiting.get(msg.id);
    if (!w) return;
    waiting.delete(msg.id);
    if (msg.error) w.reject(new Error(`${w.method}: ${msg.error.message}`));
    else w.resolve(msg.result);
  };
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const id = nextId++;
      waiting.set(id, { resolve, reject, method });
      ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    });

  return {
    async newPage({ width = 1800, height = 900, dpr = 1 } = {}) {
      const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
      const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
      const s = (method, params) => send(method, params, sessionId);
      await s('Page.enable');
      await s('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: dpr, mobile: false });
      const evaluate = async (fn, arg) => {
        const { result, exceptionDetails } = await s('Runtime.evaluate', {
          expression: `(${fn})(${JSON.stringify(arg ?? null)})`,
          awaitPromise: true,
          returnByValue: true,
        });
        if (exceptionDetails) throw new Error(exceptionDetails.exception?.description ?? exceptionDetails.text);
        return result.value;
      };
      return {
        evaluate,
        /** Replaces the document and waits for its stylesheets (the Google Fonts CSS) to load or fail. */
        async setContent(html) {
          const { frameTree } = await s('Page.getFrameTree');
          await s('Page.setDocumentContent', { frameId: frameTree.frame.id, html });
          await evaluate(() =>
            Promise.all(
              [...document.querySelectorAll('link[rel=stylesheet]')].map((l) =>
                l.sheet ? 1 : new Promise((r) => ((l.onload = r), (l.onerror = r))),
              ),
            ),
          );
        },
        /** Full-page PNG in device pixels. */
        async screenshot() {
          const { cssContentSize } = await s('Page.getLayoutMetrics');
          const clip = { x: 0, y: 0, width: Math.ceil(cssContentSize.width), height: Math.ceil(cssContentSize.height), scale: 1 };
          const { data } = await s('Page.captureScreenshot', { format: 'png', clip, captureBeyondViewport: true });
          return Buffer.from(data, 'base64');
        },
        close: () => send('Target.closeTarget', { targetId }),
      };
    },
    async close() {
      try {
        await send('Browser.close');
      } catch {}
      ws.close();
      await new Promise((r) => (child.exitCode !== null ? r() : child.once('exit', r)));
      rmSync(profile, { recursive: true, force: true });
    },
  };
}
