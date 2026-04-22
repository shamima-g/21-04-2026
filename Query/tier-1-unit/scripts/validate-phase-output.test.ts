/**
 * Tests for .claude/scripts/validate-phase-output.js.
 *
 * Validates that a phase's expected output artifacts exist and are well-formed.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { createTempProject, seedArtifact, runScript, rollback } from '../../helpers';
import type { TempProject } from '../../helpers/temp-project';

const SCRIPT = '.claude/scripts/validate-phase-output.js';

describe('validate-phase-output.js — INTAKE phase', () => {
  let project: TempProject;
  beforeEach(() => { project = createTempProject(); });
  afterEach(() => { rollback(project.root, 'RB-0'); project.cleanup(); });

  it('PASS: reports status ok when FRS exists', () => {
    seedArtifact(project.root, 'frs');
    const r = runScript(SCRIPT, ['--phase', 'INTAKE'], { cwd: project.root });
    const json = r.parsedJson as { status?: string } | undefined;
    // Valid outcomes: 'ok', 'valid', or a successful equivalent
    expect(['ok', 'valid']).toContain(json?.status ?? '');
  });

  it('FAIL: reports invalid/error when FRS is missing', () => {
    const r = runScript(SCRIPT, ['--phase', 'INTAKE'], { cwd: project.root });
    const json = r.parsedJson as { status?: string } | undefined;
    expect(['invalid', 'error', 'missing']).toContain(json?.status ?? '');
  });
});

describe('validate-phase-output.js — DESIGN phase', () => {
  let project: TempProject;
  beforeEach(() => { project = createTempProject(); });
  afterEach(() => { rollback(project.root, 'RB-0'); project.cleanup(); });

  it('PASS: valid when api-spec.yaml is present and parses', () => {
    seedArtifact(project.root, 'frs');
    seedArtifact(project.root, 'api-spec');
    const r = runScript(SCRIPT, ['--phase', 'DESIGN'], { cwd: project.root });
    const json = r.parsedJson as { status?: string } | undefined;
    expect(['ok', 'valid']).toContain(json?.status ?? '');
  });

  it('FAIL: invalid when api-spec.yaml content is malformed YAML', () => {
    seedArtifact(project.root, 'frs');
    seedArtifact(project.root, 'api-spec', '::::not valid yaml at all ::::\n  ::\n');
    const r = runScript(SCRIPT, ['--phase', 'DESIGN'], { cwd: project.root });
    const json = r.parsedJson as { status?: string } | undefined;
    // Must not claim ok for malformed content
    expect(json?.status).not.toBe('ok');
  });
});
