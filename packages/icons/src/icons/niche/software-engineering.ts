/** Domain: software engineering. Style spec: ../../create-icon.tsx (ADR-014); pack rules: docs/design/icon-domains.md (≤5 strokes, ≤4 filled dots). */
import { createIcon } from '../../create-icon';

export const IconAccessControl = createIcon('access-control', [
  ['circle', { cx: 9, cy: 7.5, r: 3.5 }],
  ['path', { d: 'M3 20a6 6 0 0 1 9.5-4.9' }],
  ['rect', { x: 14.5, y: 14.5, width: 6, height: 5.5, rx: 1.5 }],
  ['path', { d: 'M16 14.5v-1.25a1.5 1.5 0 0 1 3 0v1.25' }],
]);
export const IconAccessToken = createIcon('access-token', [
  ['circle', { cx: 12, cy: 12, r: 8.5 }],
  ['path', { d: 'M12 8.5a2 2 0 0 1 1 3.73V15.5h-2v-3.27A2 2 0 0 1 12 8.5Z' }],
]);
export const IconApiDocs = createIcon('api-docs', [
  ['path', { d: 'M5 18.5v-13a2 2 0 0 1 2-2h12v14H7a2 2 0 0 0 0 4h12' }],
  ['path', { d: 'M10.5 7.5c-.75 0-1.25.5-1.25 1.25v.5c0 .5-.5 1-1 1 .5 0 1 .5 1 1v.5c0 .75.5 1.25 1.25 1.25M14.5 7.5c.75 0 1.25.5 1.25 1.25v.5c0 .5.5 1 1 1-.5 0-1 .5-1 1v.5c0 .75-.5 1.25-1.25 1.25' }],
]);
export const IconAppCrash = createIcon('app-crash', [
  ['rect', { x: 3, y: 4, width: 18, height: 16, rx: 3 }],
  ['path', { d: 'M12 4l-2 5 4 3-2.5 4 1 4' }],
]);
export const IconAppFirewall = createIcon('app-firewall', [
  ['rect', { x: 3, y: 3.5, width: 18, height: 17, rx: 3 }],
  ['path', { d: 'M3 8h18' }],
  ['path', { d: 'M12 10.5l4 1.5v2.5c0 2.25-1.75 3.75-4 4.5-2.25-.75-4-2.25-4-4.5V12Z' }],
]);
export const IconAutoscaling = createIcon('autoscaling', [
  ['rect', { x: 8, y: 8, width: 8, height: 8, rx: 2 }],
  ['path', { d: 'M3.5 7.5v-4h4M3.5 3.5l3 3M20.5 16.5v4h-4M20.5 20.5l-3-3' }],
]);
export const IconBinaryCode = createIcon('binary-code', [
  ['path', { d: 'M5.5 5 7 3.5V10' }],
  ['ellipse', { cx: 16, cy: 6.75, rx: 2, ry: 3.25 }],
  ['ellipse', { cx: 8, cy: 17.25, rx: 2, ry: 3.25 }],
  ['path', { d: 'M16.5 15.5 18 14v6.5' }],
]);
export const IconBinaryTree = createIcon('binary-tree', [
  ['path', { d: 'M9.66 17.51 7.5 12 12 5 16.5 12v5.4M5.34 17.51 7.5 12' }],
  ['circle', { cx: 4.75, cy: 19, r: 1.6 }],
  ['circle', { cx: 10.25, cy: 19, r: 1.6 }],
  ['circle', { cx: 16.5, cy: 19, r: 1.6 }],
  ['circle', { cx: 12, cy: 5, r: 1.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7.5, cy: 12, r: 1.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 16.5, cy: 12, r: 1.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBlueGreenDeploy = createIcon('blue-green-deploy', [
  ['rect', { x: 3, y: 4, width: 7, height: 9, rx: 2 }],
  ['rect', { x: 14, y: 4, width: 7, height: 9, rx: 2 }],
  ['path', { d: 'M6.5 15.5v3a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3M15.5 17.5l2-2 2 2' }],
]);
export const IconBreakpoint = createIcon('breakpoint', [
  ['path', { d: 'M9.5 3v18' }],
  ['path', { d: 'M13 7h7.5M13 12h7.5M13 17h5' }],
  ['circle', { cx: 5, cy: 12, r: 2.5, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBrowserCookie = createIcon('browser-cookie', [
  ['path', { d: 'M20.5 12A8.5 8.5 0 1 1 12 3.5a3 3 0 0 0 4 3.5 3 3 0 0 0 4.5 5Z' }],
  ['circle', { cx: 8.5, cy: 9.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 9, cy: 15, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13, cy: 11, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBrowserWindow = createIcon('browser-window', [
  ['rect', { x: 3, y: 4, width: 18, height: 16, rx: 3 }],
  ['path', { d: 'M3 9h18' }],
  ['circle', { cx: 6, cy: 6.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 8.75, cy: 6.5, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconBugReport = createIcon('bug-report', [
  ['rect', { x: 4.5, y: 4, width: 15, height: 17, rx: 2.5 }],
  ['path', { d: 'M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1' }],
  ['rect', { x: 10, y: 10.5, width: 4, height: 7, rx: 2 }],
  ['path', { d: 'M8 14h2M14 14h2' }],
  ['circle', { cx: 12, cy: 8.75, r: 1.25, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCacheLayer = createIcon('cache-layer', [
  ['ellipse', { cx: 12, cy: 5.5, rx: 7, ry: 2.5 }],
  ['path', { d: 'M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13' }],
  ['path', { d: 'M12.75 9.5 10.25 13.5h3.5L11.25 17.5' }],
]);
export const IconCiPipeline = createIcon('ci-pipeline', [
  ['circle', { cx: 5, cy: 12, r: 2.5 }],
  ['circle', { cx: 12, cy: 12, r: 2.5 }],
  ['circle', { cx: 19, cy: 12, r: 2.5 }],
  ['path', { d: 'M7.5 12h2M14.5 12h2' }],
]);
export const IconCloudDownload = createIcon('cloud-download', [
  ['path', { d: 'M7.25 17A4 4 0 0 1 6.5 9.07 5.5 5.5 0 0 1 17.37 8.04 4.5 4.5 0 0 1 16.75 17' }],
  ['path', { d: 'M12 11v9M9.5 17.5 12 20l2.5-2.5' }],
]);
export const IconCloudHosting = createIcon('cloud-hosting', [
  ['path', { d: 'M7 13a3 3 0 0 1-.4-5.97 4.5 4.5 0 0 1 8.7-1.3A3.75 3.75 0 0 1 17 13Z' }],
  ['path', { d: 'M12 13v3' }],
  ['rect', { x: 5.5, y: 16, width: 13, height: 4.5, rx: 2 }],
  ['circle', { cx: 8.5, cy: 18.25, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconCloudSync = createIcon('cloud-sync', [
  ['path', { d: 'M7.25 18.75A4 4 0 0 1 6.5 10.82A5.5 5.5 0 0 1 17.37 9.79A4.5 4.5 0 0 1 16.75 18.75Z' }],
  ['path', { d: 'M9.75 17v-5M8 13.75l1.75-1.75 1.75 1.75M14.25 12v5M12.5 15.25 14.25 17 16 15.25' }],
]);
export const IconCodeCoverage = createIcon('code-coverage', [
  ['path', { d: 'M12 3.5a8.5 8.5 0 1 1-8.5 8.5' }],
  ['path', { d: 'M8.5 12l2.5 2.5 4.5-5' }],
]);
export const IconCodeEditor = createIcon('code-editor', [
  ['rect', { x: 3, y: 4, width: 18, height: 16, rx: 3 }],
  ['path', { d: 'M8 4v16' }],
  ['path', { d: 'M11 9h6M11 12.5h4M11 16h5' }],
]);
export const IconCodeFolder = createIcon('code-folder', [
  ['path', { d: 'M3 7.5A2.5 2.5 0 0 1 5.5 5h3.75l2 2.5h7.25A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5Z' }],
  ['path', { d: 'M10 11.5l-2 2 2 2M14 11.5l2 2-2 2' }],
]);
export const IconCodeQuality = createIcon('code-quality', [
  ['path', { d: 'M7 4H6a2 2 0 0 0-2 2v3.5A2.5 2.5 0 0 1 2.5 12 2.5 2.5 0 0 1 4 14.5V18a2 2 0 0 0 2 2h1' }],
  ['path', { d: 'M17 4h1a2 2 0 0 1 2 2v3.5a2.5 2.5 0 0 0 1.5 2.5 2.5 2.5 0 0 0-1.5 2.5V18a2 2 0 0 1-2 2h-1' }],
  ['path', { d: 'M8.5 12l2.5 2.5 4.5-5' }],
]);
export const IconCodeReview = createIcon('code-review', [
  ['path', { d: 'M5.5 4h13A2.5 2.5 0 0 1 21 6.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V17H5.5A2.5 2.5 0 0 1 3 14.5v-8A2.5 2.5 0 0 1 5.5 4Z' }],
  ['path', { d: 'M9.5 8.5l-2 2 2 2M14.5 8.5l2 2-2 2' }],
]);
export const IconCommitHistory = createIcon('commit-history', [
  ['path', { d: 'M12 8v2M12 14v2' }],
  ['circle', { cx: 12, cy: 6, r: 2 }],
  ['circle', { cx: 12, cy: 12, r: 2 }],
  ['circle', { cx: 12, cy: 18, r: 2 }],
]);
export const IconConfigFile = createIcon('config-file', [
  ['path', { d: 'M14 3H7a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V8.5Z' }],
  ['path', { d: 'M14 3v3a2.5 2.5 0 0 0 2.5 2.5h3' }],
  ['path', { d: 'M8 12.5h8M8 16.5h8' }],
  ['circle', { cx: 10, cy: 12.5, r: 1.4, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 14, cy: 16.5, r: 1.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconContainer = createIcon('container', [
  ['rect', { x: 3, y: 6, width: 18, height: 12, rx: 2.5 }],
  ['path', { d: 'M7.5 9v6M10.5 9v6M13.5 9v6M16.5 9v6' }],
]);
export const IconCronJob = createIcon('cron-job', [
  ['path', { d: 'M20 12a8 8 0 1 1-2.3-5.6M20 4.5V8h-3.5' }],
  ['path', { d: 'M12 8v4l2.5 1.5' }],
]);
export const IconCurlyBraces = createIcon('curly-braces', [
  ['path', { d: 'M9 4H8a2 2 0 0 0-2 2v3.5A2.5 2.5 0 0 1 3.5 12 2.5 2.5 0 0 1 6 14.5V18a2 2 0 0 0 2 2h1' }],
  ['path', { d: 'M15 4h1a2 2 0 0 1 2 2v3.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0-2.5 2.5V18a2 2 0 0 1-2 2h-1' }],
]);
export const IconDataExport = createIcon('data-export', [
  ['path', { d: 'M13.5 21H7a2.5 2.5 0 0 1-2.5-2.5v-13A2.5 2.5 0 0 1 7 3h7l5.5 5.5V12' }],
  ['path', { d: 'M14 3v3a2.5 2.5 0 0 0 2.5 2.5h3' }],
  ['path', { d: 'M14 17h7M18.5 14.5 21 17l-2.5 2.5' }],
]);
export const IconDataPipeline = createIcon('data-pipeline', [
  ['ellipse', { cx: 6, cy: 10, rx: 3.5, ry: 1.5 }],
  ['path', { d: 'M2.5 10v6c0 .8 1.6 1.5 3.5 1.5s3.5-.7 3.5-1.5v-6' }],
  ['path', { d: 'M11 13h4.5M13.5 11l2 2-2 2' }],
  ['rect', { x: 17, y: 8.5, width: 4.5, height: 9, rx: 1.5 }],
]);
export const IconDatabaseBackup = createIcon('database-backup', [
  ['ellipse', { cx: 10, cy: 5.5, rx: 6, ry: 2.25 }],
  ['path', { d: 'M4 5.5v11c0 1.25 2.7 2.25 6 2.25M16 5.5V10' }],
  ['path', { d: 'M20.5 16.5a3.75 3.75 0 1 1-1.1-2.65M20.5 12.25V14h-1.75' }],
]);
export const IconDependencyTree = createIcon('dependency-tree', [
  ['rect', { x: 9, y: 3, width: 6, height: 4.5, rx: 1.5 }],
  ['rect', { x: 3.5, y: 16.5, width: 6, height: 4.5, rx: 1.5 }],
  ['rect', { x: 14.5, y: 16.5, width: 6, height: 4.5, rx: 1.5 }],
  ['path', { d: 'M12 7.5V12M6.5 16.5V14a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2.5' }],
]);
export const IconDeployment = createIcon('deployment', [
  ['rect', { x: 3.5, y: 13, width: 17, height: 7, rx: 2.5 }],
  ['path', { d: 'M12 10V3M9 6l3-3 3 3' }],
  ['circle', { cx: 7, cy: 16.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconDevopsLoop = createIcon('devops-loop', [
  ['path', { d: 'M12 12c-1.75-2.5-3.5-4-5.5-4a4 4 0 0 0 0 8c2 0 3.75-1.5 5.5-4s3.5-4 5.5-4a4 4 0 0 1 0 8c-2 0-3.75-1.5-5.5-4Z' }],
  ['path', { d: 'M16 6.5 17.5 8 16 9.5' }],
]);
export const IconEncryption = createIcon('encryption', [
  ['rect', { x: 4.5, y: 10.5, width: 15, height: 10, rx: 3 }],
  ['path', { d: 'M8 10.5v-3a4 4 0 0 1 8 0v3' }],
  ['circle', { cx: 9, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 15, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconFileDiff = createIcon('file-diff', [
  ['path', { d: 'M14 3H7a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V8.5Z' }],
  ['path', { d: 'M14 3v3a2.5 2.5 0 0 0 2.5 2.5h3' }],
  ['path', { d: 'M12 10.5v4M10 12.5h4M10 17h4' }],
]);
export const IconFlowchart = createIcon('flowchart', [
  ['rect', { x: 8, y: 2.5, width: 8, height: 4, rx: 1.5 }],
  ['path', { d: 'M12 9l3.5 3-3.5 3-3.5-3Z' }],
  ['rect', { x: 8, y: 17.5, width: 8, height: 4, rx: 1.5 }],
  ['path', { d: 'M12 6.5V9M12 15v2.5' }],
]);
export const IconFunctionFx = createIcon('function-fx', [
  ['path', { d: 'M12.5 4H11a2.5 2.5 0 0 0-2.5 2.5V20M5.5 10.5h6' }],
  ['path', { d: 'M14 13l5 6.5M19 13l-5 6.5' }],
]);
export const IconGitCommit = createIcon('git-commit', [
  ['circle', { cx: 12, cy: 12, r: 3.5 }],
  ['path', { d: 'M3 12h5.5M15.5 12H21' }],
]);
export const IconGitCompare = createIcon('git-compare', [
  ['circle', { cx: 6, cy: 5.5, r: 2, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18, cy: 18.5, r: 2, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M6 8v6a3 3 0 0 0 3 3h4M11 15l2 2-2 2' }],
  ['path', { d: 'M18 16v-6a3 3 0 0 0-3-3h-4M13 9l-2-2 2-2' }],
]);
export const IconGitFork = createIcon('git-fork', [
  ['circle', { cx: 7, cy: 5.5, r: 2 }],
  ['circle', { cx: 17, cy: 5.5, r: 2 }],
  ['circle', { cx: 12, cy: 18.5, r: 2 }],
  ['path', { d: 'M7 7.5V9a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V7.5M12 12v4.5' }],
]);
export const IconHashFunction = createIcon('hash-function', [
  ['path', { d: 'M9.5 3.5 8 20.5M16 3.5l-1.5 17M4.5 9h16M3.5 15h16' }],
]);
export const IconIssueTracker = createIcon('issue-tracker', [
  ['path', { d: 'M3 7.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V10a2 2 0 0 0 0 4v2.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V14a2 2 0 0 0 0-4Z' }],
  ['circle', { cx: 12, cy: 12, r: 3 }],
  ['circle', { cx: 12, cy: 12, r: 0.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconKanbanBoard = createIcon('kanban-board', [
  ['rect', { x: 3, y: 3.5, width: 18, height: 17, rx: 3 }],
  ['path', { d: 'M7.5 7.5v6M12 7.5v9M16.5 7.5v4' }],
]);
export const IconLatencyGauge = createIcon('latency-gauge', [
  ['path', { d: 'M4.5 17.5a8.5 8.5 0 1 1 15 0' }],
  ['path', { d: 'M12 14l4-5' }],
  ['circle', { cx: 12, cy: 14, r: 1.4, fill: 'currentColor', stroke: 'none' }],
]);
export const IconLinterWarning = createIcon('linter-warning', [
  ['path', { d: 'M4 7h16M4 11.5h10' }],
  ['path', { d: 'M4 17c1-1.5 2-1.5 3 0s2 1.5 3 0 2-1.5 3 0 2 1.5 3 0' }],
]);
export const IconLoadBalancer = createIcon('load-balancer', [
  ['rect', { x: 8.5, y: 3, width: 7, height: 5, rx: 2 }],
  ['path', { d: 'M12 8v8M6 16.5V14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.5' }],
  ['circle', { cx: 6, cy: 18.75, r: 1.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 18.75, r: 1.9, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 18, cy: 18.75, r: 1.9, fill: 'currentColor', stroke: 'none' }],
]);
export const IconLoadingSpinner = createIcon('loading-spinner', [
  ['circle', { cx: 12, cy: 4.5, r: 1.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.3, cy: 6.7, r: 1.62, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 19.5, cy: 12, r: 1.49, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 17.3, cy: 17.3, r: 1.36, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 19.5, r: 1.23, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6.7, cy: 17.3, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 4.5, cy: 12, r: 0.97, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6.7, cy: 6.7, r: 0.84, fill: 'currentColor', stroke: 'none' }],
]);
export const IconLogFile = createIcon('log-file', [
  ['path', { d: 'M14 3H7a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V8.5Z' }],
  ['path', { d: 'M14 3v3a2.5 2.5 0 0 0 2.5 2.5h3' }],
  ['path', { d: 'M10.5 12h5M10.5 15.5h5' }],
  ['circle', { cx: 8, cy: 12, r: 0.85, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 8, cy: 15.5, r: 0.85, fill: 'currentColor', stroke: 'none' }],
]);
export const IconMergeConflict = createIcon('merge-conflict', [
  ['circle', { cx: 6, cy: 5, r: 2, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 6, cy: 19, r: 2, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M6 5v14M6 9c0 2.5 2.5 3 5 3h1' }],
  ['path', { d: 'M15.5 9.5l5 5M20.5 9.5l-5 5' }],
]);
export const IconMessageQueue = createIcon('message-queue', [
  ['rect', { x: 2.5, y: 9.5, width: 13, height: 10, rx: 2 }],
  ['path', { d: 'M2.75 11 9 15l6.25-4' }],
  ['path', { d: 'M7 9.5V7a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-4' }],
]);
export const IconMicroservices = createIcon('microservices', [
  ['path', { d: 'M8 5 11.03 6.75 11.03 10.25 8 12 4.97 10.25 4.97 6.75ZM16 5 19.03 6.75 19.03 10.25 16 12 12.97 10.25 12.97 6.75ZM12 11.93 15.03 13.68 15.03 17.18 12 18.93 8.97 17.18 8.97 13.68Z' }],
]);
export const IconNeuralNetwork = createIcon('neural-network', [
  ['path', { d: 'M5 7 12 8.5 5 17 12 15.5Z' }],
  ['path', { d: 'M12 8.5 17 12 12 15.5' }],
  ['circle', { cx: 19, cy: 12, r: 2 }],
  ['circle', { cx: 5, cy: 7, r: 1.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 5, cy: 17, r: 1.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 8.5, r: 1.75, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 12, cy: 15.5, r: 1.75, fill: 'currentColor', stroke: 'none' }],
]);
export const IconPasswordField = createIcon('password-field', [
  ['rect', { x: 2.5, y: 8, width: 19, height: 8, rx: 2.5 }],
  ['circle', { cx: 6.5, cy: 12, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 10, cy: 12, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 13.5, cy: 12, r: 1, fill: 'currentColor', stroke: 'none' }],
  ['path', { d: 'M17.5 9.75v4.5' }],
]);
export const IconPrivateCloud = createIcon('private-cloud', [
  ['path', { d: 'M7.25 18.75A4 4 0 0 1 6.5 10.82A5.5 5.5 0 0 1 17.37 9.79A4.5 4.5 0 0 1 16.75 18.75Z' }],
  ['rect', { x: 9.5, y: 13, width: 5, height: 4, rx: 1.25 }],
  ['path', { d: 'M10.5 13v-1a1.5 1.5 0 0 1 3 0v1' }],
]);
export const IconRegex = createIcon('regex', [
  ['path', { d: 'M15 3.5v8M11.5 5.5l7 4M18.5 5.5l-7 4' }],
  ['circle', { cx: 6.5, cy: 17.5, r: 2, fill: 'currentColor', stroke: 'none' }],
]);
export const IconResponsiveDevices = createIcon('responsive-devices', [
  ['rect', { x: 2.5, y: 4, width: 13, height: 10, rx: 2 }],
  ['path', { d: 'M6 17.5h6M9 14v3.5' }],
  ['rect', { x: 15.5, y: 9, width: 6, height: 11.5, rx: 1.75 }],
]);
export const IconRollback = createIcon('rollback', [
  ['path', { d: 'M3.5 12A8.5 8.5 0 1 0 6 6L3.5 8.5' }],
  ['path', { d: 'M3.5 4v4.5H8' }],
  ['path', { d: 'M8.5 9.5h4.5l2.5 2.5-2.5 2.5H8.5Z' }],
  ['circle', { cx: 10.25, cy: 12, r: 0.8, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSchemaDiagram = createIcon('schema-diagram', [
  ['rect', { x: 3, y: 3.5, width: 8, height: 7, rx: 2 }],
  ['rect', { x: 13, y: 13.5, width: 8, height: 7, rx: 2 }],
  ['path', { d: 'M3 6.5h8M13 16.5h8' }],
  ['path', { d: 'M11 7h3a2 2 0 0 1 2 2v4.5' }],
]);
export const IconSecureConnection = createIcon('secure-connection', [
  ['path', { d: 'M3.5 12h4.5M16 12h4.5' }],
  ['rect', { x: 8, y: 11, width: 8, height: 6.5, rx: 1.75 }],
  ['path', { d: 'M10 11V9.5a2 2 0 0 1 4 0V11' }],
  ['circle', { cx: 3.5, cy: 12, r: 1.25, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 20.5, cy: 12, r: 1.25, fill: 'currentColor', stroke: 'none' }],
]);
export const IconSecurityScan = createIcon('security-scan', [
  ['path', { d: 'M3.5 8V5.5a2 2 0 0 1 2-2H8M16 3.5h2.5a2 2 0 0 1 2 2V8M20.5 16v2.5a2 2 0 0 1-2 2H16M8 20.5H5.5a2 2 0 0 1-2-2V16' }],
  ['path', { d: 'M12 7l4 1.5v3c0 2.5-1.75 4.25-4 5-2.25-.75-4-2.5-4-5v-3Z' }],
]);
export const IconSplitTest = createIcon('split-test', [
  ['path', { d: 'M3.5 17 6.75 7 10 17M4.75 13.5h4' }],
  ['path', { d: 'M12 4v16' }],
  ['path', { d: 'M14.5 12V7h3a2.5 2.5 0 0 1 0 5h-3v5h3.5a2.5 2.5 0 0 0 0-5' }],
]);
export const IconStatusPage = createIcon('status-page', [
  ['rect', { x: 3, y: 3.5, width: 18, height: 17, rx: 3 }],
  ['path', { d: 'M10 8.5h7M10 12h7M10 15.5h7' }],
  ['circle', { cx: 7, cy: 8.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7, cy: 12, r: 1.1, fill: 'currentColor', stroke: 'none' }],
  ['circle', { cx: 7, cy: 15.5, r: 1.1, fill: 'currentColor', stroke: 'none' }],
]);
export const IconStorageBucket = createIcon('storage-bucket', [
  ['ellipse', { cx: 12, cy: 9, rx: 7, ry: 2 }],
  ['path', { d: 'M5 9l1.5 9.5c.2 1.2 2.6 2 5.5 2s5.3-.8 5.5-2L19 9' }],
  ['path', { d: 'M5.5 8.5C5.5 3 18.5 3 18.5 8.5' }],
]);
export const IconTestAutomation = createIcon('test-automation', [
  ['path', { d: 'M9.5 3.5h5M10.25 3.5v5.5L5 18.5a1.5 1.5 0 0 0 1.3 2.25h11.4A1.5 1.5 0 0 0 19 18.5L13.75 9V3.5' }],
  ['path', { d: 'M10.75 13v5l4-2.5Z' }],
]);
export const IconTestFailed = createIcon('test-failed', [
  ['path', { d: 'M14 3H7a2.5 2.5 0 0 0-2.5 2.5v13A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V8.5Z' }],
  ['path', { d: 'M14 3v3a2.5 2.5 0 0 0 2.5 2.5h3' }],
  ['path', { d: 'M9.5 12.5l5 5M14.5 12.5l-5 5' }],
]);
export const IconTestSuite = createIcon('test-suite', [
  ['path', { d: 'M3.5 6.5 5 8l3-3M3.5 12.5 5 14l3-3' }],
  ['path', { d: 'M11.5 6.5h9M11.5 12.5h9M3.5 18.5h17' }],
]);
export const IconTwoFactorAuth = createIcon('two-factor-auth', [
  ['rect', { x: 6, y: 2.5, width: 12, height: 19, rx: 3 }],
  ['path', { d: 'M12 7l3.5 1.25v2.5c0 2-1.5 3.5-3.5 4.25-2-.75-3.5-2.25-3.5-4.25v-2.5Z' }],
  ['path', { d: 'M10.5 18.5h3' }],
]);
export const IconUptimeMonitor = createIcon('uptime-monitor', [
  ['rect', { x: 3, y: 3.5, width: 18, height: 13, rx: 2.5 }],
  ['path', { d: 'M6 10h3l1.5-3 3 6 1.5-3h3' }],
  ['path', { d: 'M9 20.5h6M12 16.5v4' }],
]);
export const IconVirtualMachine = createIcon('virtual-machine', [
  ['rect', { x: 3, y: 3.5, width: 18, height: 13, rx: 2.5 }],
  ['rect', { x: 7, y: 7, width: 10, height: 6, rx: 1.5 }],
  ['path', { d: 'M9 20.5h6M12 16.5v4' }],
]);
export const IconVulnerability = createIcon('vulnerability', [
  ['path', { d: 'M12 3l7 2.5v6c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-6Z' }],
  ['path', { d: 'M12 8v4.5' }],
  ['circle', { cx: 12, cy: 15.5, r: 1, fill: 'currentColor', stroke: 'none' }],
]);
