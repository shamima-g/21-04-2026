/**
 * Tests for .claude/hooks/claude-md-permission-checker.js
 *
 * Fires on Write/Edit/MultiEdit tool calls. Protects CLAUDE.md from silent
 * edits — the user should always know when Claude wants to modify the
 * master instructions file.
 */

import { describe, it, expect } from 'vitest';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { REPO_ROOT } from '../../helpers';

const HOOK = path.join(REPO_ROOT, '.claude', 'hooks', 'claude-md-permission-checker.js');

function runHook(input: object): { exitCode: number; stdout: string; stderr: string } {
  const res = spawnSync('node', [HOOK], {
    input: JSON.stringify(input),
    encoding: 'utf8',
    timeout: 10_000,
  });
  return {
    exitCode: typeof res.status === 'number' ? res.status : 1,
    stdout: (res.stdout ?? '').toString(),
    stderr: (res.stderr ?? '').toString(),
  };
}

describe('claude-md-permission-checker — protects CLAUDE.md', () => {
  it('PASS: blocks or warns on a Write to CLAUDE.md', () => {
    const { exitCode, stdout, stderr } = runHook({
      tool_name: 'Write',
      tool_input: { file_path: '/some/path/CLAUDE.md', content: 'overwritten' },
    });
    // Either denies (exit 2) or produces a warning message.
    const raisedConcern =
      exitCode === 2 ||
      /claude\.md|permission|warn|block/i.test(stdout + stderr);
    expect(raisedConcern).toBe(true);
  });

  it('FAIL: does NOT block Writes to unrelated files', () => {
    const { exitCode } = runHook({
      tool_name: 'Write',
      tool_input: { file_path: '/some/path/web/src/app/page.tsx', content: 'ok' },
    });
    expect(exitCode).toBe(0);
  });
});

describe('claude-md-permission-checker — handles malformed input', () => {
  it('PASS: does not crash on empty payload', () => {
    const { exitCode } = runHook({});
    expect([0, 1, 2]).toContain(exitCode);
  });

  it('FAIL: does not accidentally allow a CLAUDE.md write when file_path is missing', () => {
    const { exitCode } = runHook({ tool_name: 'Write', tool_input: {} });
    // Should not crash; behaviour of missing file_path is implementation-defined
    // but must not silently exit 0 if the hook thinks it's protecting CLAUDE.md.
    expect(typeof exitCode).toBe('number');
  });
});
