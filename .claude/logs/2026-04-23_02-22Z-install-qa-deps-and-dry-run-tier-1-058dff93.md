# Install QA deps and dry-run Tier 1 ΓÇö cd QA && npm install && npm test (2026-04-23 02:22Z)

**Project:** 21-04-2026
**Session ID:** 058dff93-478d-4ac5-ace5-d8a367429740
**Started:** 2026-04-23 02:22Z
**Permission Mode:** default

---


_**User: shamima-g (2026-04-23 02:22Z)**_

Install QA deps and dry-run Tier 1 ΓÇö cd QA && npm install && npm test.


_**User: shamima-g (2026-04-23 02:25Z)**_

test-bugs first


_**Agent (model claude-opus-4-7)**_

Let me pull the relevant test and script files in parallel to make the call on each.

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_

Let me check the seedArtifact helper, plus the two scripts where the test-vs-script classification isn't clear.

---

_**Agent (model claude-opus-4-7)**_



Bash: List helpers and peek at settings.json

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



Bash: Find generate-progress-index reference

---

_**Agent (model claude-opus-4-7)**_



Bash: List scripts

---

_**Agent (model claude-opus-4-7)**_



Bash: List agents and check README

---

_**Agent (model claude-opus-4-7)**_



Bash: Peek at import-prototype script

---

_**Agent (model claude-opus-4-7)**_



Bash: Peek at validate-phase-output script

---

_**Agent (model claude-opus-4-7)**_

Triage complete. Classified against the actual scripts + fixtures.

## Test bugs (test/fixture code is wrong â€” not the scripts)

**1. [settings-schema.test.ts:64-68](QA/tier-1-unit/consistency/settings-schema.test.ts#L64-L68) â€” env var not expanded**
settings.json references `"$CLAUDE_PROJECT_DIR/.claude/scripts/generate-progress-index.js"`. The regex captures that literal string, then `path.join(REPO_ROOT, relPath)` produces `C:\...\$CLAUDE_PROJECT_DIR\...` which doesn't exist. Fix: strip a leading `$CLAUDE_PROJECT_DIR/` (and/or `${CLAUDE_PROJECT_DIR}/`) before the `existsSync` check.

**2. [transition-phase.test.ts:46](QA/tier-1-unit/scripts/transition-phase.test.ts#L46) â€” regex misses `no_state`**
Script emits `{"status": "no_state", ...}`. Regex `/no state|not found|missing|error/` uses a space, not underscore. Fix: `/no[_ ]state|not found|missing|error/` or assert on `parsedJson.status`.

**3. [transition-phase.test.ts:91-99](QA/tier-1-unit/scripts/transition-phase.test.ts#L91-L99) â€” strict compare vs. undefined**
`succeededButLied` evaluates to `undefined` (short-circuit on missing `parsedJson`); `expect(undefined).toBe(false)` fails. Fix: `.toBeFalsy()` or wrap in `Boolean(...)`.

**4. [transition-phase.test.ts:116](QA/tier-1-unit/scripts/transition-phase.test.ts#L116) â€” allowed-status list too narrow**
Script returns `status: "repaired"`, which is a valid distinct repair outcome. Fix: include `'repaired'` in the allowlist.

**5. [generate-traceability-matrix.test.ts:21-22](QA/tier-1-unit/scripts/generate-traceability-matrix.test.ts#L21-L22) â€” story fixture missing `Requirements:` field**
Script's warning is explicit: "Story has no Requirements field". The test body says "Covers R1." in prose, but the script parses a structured field. Fix: `**Role:** Admin\n\n**Requirements:** R1\n`.

**6. [import-prototype.test.ts:17-32](QA/tier-1-unit/scripts/import-prototype.test.ts#L17-L32) â€” source trees don't match v1/v2 layouts**
Script header documents v1 layout as `docs/project-docs/**` + `prototypes/...` and v2 as `genesis/genesis.md` + `designs/...` + `input/...` + `prototype/src/...`. Tests create flat files at the source root, so the script correctly reports `status=error`. Fix: build the fixtures under the documented subdirs (`docs/project-docs/prototype-requirements.md`, `genesis/genesis.md`, etc.).

**7. [validate-phase-output.test.ts:18-24, 38-44](QA/tier-1-unit/scripts/validate-phase-output.test.ts#L18-L44) â€” incomplete seeds**
Script INTAKE check requires both `intake-manifest.json` AND `feature-requirements.md`; test only seeds the FRS. DESIGN validation is manifest-driven (wireframes + tokens + api-spec); test only seeds api-spec.yaml. Fix: add an `intake-manifest` kind to `seedArtifact`, and seed wireframes/tokens for DESIGN â€” or drive validate-phase-output.js to "manifest-lite" mode for tests.

---

## Not a test bug, but worth noting

**8. [agents-frontmatter.test.ts:54-67](QA/tier-1-unit/consistency/agents-frontmatter.test.ts#L54-L67)** â€” the test is correct. It's catching real docs drift: `.claude/agents/mock-setup-agent.md` and `.claude/agents/spec-compliance-watchdog.md` exist on disk but aren't referenced in [.claude/agents/README.md](.claude/agents/README.md). Fix in the README, not the test.

---

## Recommendation

If you want, I can fix the 7 test-code bugs in one pass â€” they're all small, localized edits. The fixture-structural ones (#6, #7) are slightly larger but still narrow. The README drift (#8) is a docs update, separate commit. The remaining failures in the first run (scan-doc binary detection, probably others in init-preferences/etc.) are genuine script bugs that should be tackled after the test-side noise clears.

Say the word and I'll start on the test-code fixes.

[Logs saved]

---


_**User: shamima-g (2026-04-23 02:27Z)**_

test-code fixes


#### Permission Request - 2026-04-23 02:28Z

**Tool:** `Edit`

---


_**User: shamima-g (2026-04-23 02:36Z)**_

_Opened file: `c:\AI\21-04-2026\TEST-STRATEGY.md`_

jump to the script bugs (2 and 7)


_**User: shamima-g (2026-04-23 02:39Z)**_

commit and save all files

