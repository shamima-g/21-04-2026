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


_**Agent (model claude-opus-4-7)**_



Bash: Check working tree status

---

_**Agent (model claude-opus-4-7)**_



Bash: Get diff stat for modified files

---

_**Agent (model claude-opus-4-7)**_



Bash: Recent commit style

---

_**Agent (model claude-opus-4-7)**_



Bash: Check if lockfile is gitignored

---

_**Agent (model claude-opus-4-7)**_

Staging specifically (avoiding `git add -A`), then committing with a message covering the test-code fixes.

---

_**Agent (model claude-opus-4-7)**_



Bash: Stage all modified and new files

---

_**Agent (model claude-opus-4-7)**_



Bash: Commit QA test-code fixes

---

_**Agent (model claude-opus-4-7)**_



Bash: Verify clean state and commit landed

---

_**Agent (model claude-opus-4-7)**_

Committed as `f780716`: 13 files, tree clean, 1 commit ahead of `origin/main`. Not pushed â€” push separately when you're ready.

[Logs saved]

---


_**User: shamima-g (2026-04-23 02:46Z)**_

I have not understood what you mean by:

"Four of five are straightforward docs updates. One is a policy extension. All low-risk. Want me to take them in one pass, or would you like to review the deny-list change (#1) separately since it affects runtime permission behavior"?

What work will you do.  Explain don't do any work


_**Agent (model claude-opus-4-7)**_

Sure, here's the breakdown without doing any of it.

**Five remaining failures, split into two kinds of work:**

### Kind 1 â€” docs updates (4 of the 5 failures)

These are just text edits to markdown files. Nothing executable changes.

1. **`.claude/agents/README.md`** â€” the file already lists most agents but is missing entries for `mock-setup-agent` and `spec-compliance-watchdog`. I'd add two lines describing what each agent does, in the same format as the existing entries.

2. **`.claude/commands/api-go-live.md`** â€” the file has YAML frontmatter at the top (between `---` markers) but is missing the `description:` field. I'd add one line like `description: Promote the feature's API integration from mock to live backend` or similar.

3. **`.claude/commands/api-mock-refresh.md`** â€” same problem, same fix: add a `description:` line to the frontmatter.

4. **Root `README.md`** â€” lists some agents but doesn't mention these five: `mock-setup-agent`, `prototype-review-agent`, `spec-compliance-watchdog`, `test-designer`, `type-generator-agent`. I'd add them to whatever agent table/list is already in the README.

All four are low-risk â€” no code runs, no behavior changes. A reader of the docs gets a more complete picture, that's it.

### Kind 2 â€” policy extension (the 5th failure)

5. **`.claude/settings.json` deny list** â€” the file currently denies `cat`, `type`, `Get-Content`, and `sed` when the target contains `id_rsa`, `.pem`, or `credentials`. It does NOT deny `grep`. The failing test case is `grep password credentials.json` â€” i.e., using grep to read credential files. To fix it I'd add three entries (one per credential-filename pattern):

```
"Bash(*grep*id_rsa*)"
"Bash(*grep*.pem*)"
"Bash(*grep*credentials*)"
```

### Why I called #5 out separately

The first four just update what docs say. The fifth changes what Claude Code will actually do at runtime: the next time any command matching those patterns is attempted in this project, the permission system will auto-deny it instead of asking. That's almost certainly what you want (grep can read files too, so the existing cat/sed/type rule is just incomplete), but it's a behavior change, not a docs change, so I wanted you to decide rather than rolling it in silently with the docs edits.

**So when I asked "one pass or separately":**
- "One pass" = I do all 5 fixes in one commit.
- "Separately" = I do the 4 docs fixes in one commit, then show you the deny-list diff for approval before committing it.

Your call. No work done yet.

[Logs saved]

---


_**User: shamima-g (2026-04-23 02:47Z)**_

commit and push

