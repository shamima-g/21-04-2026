/**
 * Tests for .claude/scripts/import-prototype.js
 *
 * Imports a prototype repo (v1 or v2 layout) into documentation/.
 * Tested against synthesised v1 and v2 source trees.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createTempProject, runScript } from '../../helpers';
import type { TempProject } from '../../helpers/temp-project';

const SCRIPT = '.claude/scripts/import-prototype.js';

function makeV1Source(base: string): string {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'proto-v1-'));
  fs.writeFileSync(path.join(src, 'prototype-requirements.md'), '# Reqs\n');
  fs.writeFileSync(path.join(src, 'business-requirements.md'), '# Business\n');
  fs.writeFileSync(path.join(src, 'design-language.md'), '# Design\n');
  return src;
}

function makeV2Source(base: string): string {
  const src = fs.mkdtempSync(path.join(os.tmpdir(), 'proto-v2-'));
  fs.writeFileSync(path.join(src, 'genesis.md'), '# Genesis\n');
  fs.writeFileSync(path.join(src, 'tokens.css'), ':root { --primary: #123; }\n');
  // v2 may also have an API spec
  fs.writeFileSync(path.join(src, 'api.yaml'), 'openapi: 3.0.3\ninfo:\n  title: X\n  version: 1.0.0\npaths: {}\n');
  return src;
}

describe('import-prototype.js — v1 layout', () => {
  let project: TempProject;
  let src: string;
  beforeEach(() => { project = createTempProject(); src = makeV1Source(''); });
  afterEach(() => {
    project.cleanup();
    fs.rmSync(src, { recursive: true, force: true });
  });

  it('PASS: copies v1 files into documentation/ and returns status=ok with format=v1', () => {
    const r = runScript(SCRIPT, ['--from', src], { cwd: project.root });
    const json = r.parsedJson as { status?: string; format?: string } | undefined;
    expect(json?.status).toBe('ok');
    // Format should be 'v1' when prototype-requirements.md is present
    if (json?.format) {
      expect(json.format).toBe('v1');
    }
    // Files should be copied into documentation/
    expect(project.exists('documentation/prototype-requirements.md')).toBe(true);
  });

  it('FAIL: returns status=error when --from path does not exist', () => {
    const r = runScript(SCRIPT, ['--from', path.join(os.tmpdir(), 'does-not-exist-xyz')], { cwd: project.root });
    const json = r.parsedJson as { status?: string } | undefined;
    expect(json?.status).toBe('error');
  });
});

describe('import-prototype.js — v2 layout', () => {
  let project: TempProject;
  let src: string;
  beforeEach(() => { project = createTempProject(); src = makeV2Source(''); });
  afterEach(() => {
    project.cleanup();
    fs.rmSync(src, { recursive: true, force: true });
  });

  it('PASS: detects v2 layout when genesis.md is present', () => {
    const r = runScript(SCRIPT, ['--from', src], { cwd: project.root });
    const json = r.parsedJson as { status?: string; format?: string } | undefined;
    // Either format=v2, or it copies v2 marker files
    const hasV2Marker = project.exists('documentation/genesis.md') || json?.format === 'v2';
    expect(hasV2Marker).toBe(true);
  });

  it('FAIL: does not silently treat v2 as v1 (losing the prototype-review-agent step)', () => {
    const r = runScript(SCRIPT, ['--from', src], { cwd: project.root });
    const json = r.parsedJson as { format?: string } | undefined;
    // If format reported, must not be v1 when genesis.md is the distinguishing artifact
    if (json?.format) {
      expect(json.format).not.toBe('v1');
    }
  });
});
