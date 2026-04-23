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


_**Agent (model claude-opus-4-7)**_



Bash: Check working tree and unpushed commits

---

_**Agent (model claude-opus-4-7)**_

Interesting â€” branch reports "up to date with origin/main". My earlier commit `f780716` must have been pushed already (likely via a post-commit hook). Verifying:

---

_**Agent (model claude-opus-4-7)**_



Bash: Compare local HEAD vs origin/main

---

_**Agent (model claude-opus-4-7)**_

The test-code fixes commit `f780716` is already on `origin/main`. Only the session log has updates from this conversation â€” committing and pushing that now.

---

_**Agent (model claude-opus-4-7)**_



Bash: Commit session log update

---

_**Agent (model claude-opus-4-7)**_



Bash: Push to origin/main

---

_**Agent (model claude-opus-4-7)**_



Bash: Confirm clean tree and pushed commits

---

_**Agent (model claude-opus-4-7)**_

Pushed. Working tree clean, `main` in sync with `origin/main`.

- `f780716` â€” QA test-code fixes + lockfile (was already on remote)
- `8ecc5f5` â€” session log update (just pushed)

[Logs saved]

---


_**User: shamima-g (2026-04-23 02:48Z)**_

If I copy paste the QA folder in another  folder with similar template, will I be able to run the tests?


_**Agent (model claude-opus-4-7)**_

Let me verify exactly what the suite depends on outside `QA/`.

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



Bash: Find REPO_ROOT definition

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_

Short answer: **yes, if the destination is the same template; no, if it's a different one.** The QA folder is not self-contained â€” it's a test suite FOR this template's `.claude/` tree, not a drop-in harness.

Here's why, based on the helpers:

### What the suite reads outside `QA/`

- **`REPO_ROOT` resolves to one level above `QA/`** â€” literally `path.resolve(__dirname, '..', '..')` in [temp-project.ts:15-17](QA/helpers/temp-project.ts#L15-L17). So wherever you put `QA/`, it treats the parent folder as the template under test.
- **`runScript` defaults to `scriptLocation: 'repo'`** ([run-script.ts:44-46](QA/helpers/run-script.ts#L44-L46)) â€” it spawns `node <REPO_ROOT>/.claude/scripts/<whatever>.js`. The tests poke the real template's scripts, not a copy.
- **Specific files the tests read directly from `<REPO_ROOT>`:**
  - `.claude/settings.json` â€” structural + hook-path test
  - `.claude/scripts/*.js` â€” transition-phase, scan-doc, validate-phase-output, import-prototype, init-preferences, generate-traceability-matrix, etc.
  - `.claude/hooks/*.js` â€” claude-md-permission-checker, bash-permission-checker
  - `.claude/agents/*.md` + `.claude/agents/README.md` â€” frontmatter + drift checks
  - `.claude/commands/*.md` â€” command frontmatter check
  - Root `README.md` â€” cross-doc-references test

### What would actually happen if you copy `QA/` into another repo

**Works well** if the destination repo is a fork/clone of this same template (same scripts, same agents, same settings.json shape). Steps:
1. Copy `QA/`.
2. `cd QA && npm install` (node_modules isn't portable â€” re-resolve at destination).
3. `npm test`.

Tests that pass/fail there will be testing *that repo's* template â€” so drift there (e.g., its README missing different agents) will show up the same way drift shows up here.

**Fails or misleads** if:
- The destination is a regular Next.js project (no `.claude/` tree) â€” most tests will error out because `.claude/scripts/...` paths don't resolve.
- The destination is a different template variant â€” tests that hardcode specific agent names (e.g., `mock-setup-agent`) or specific script contracts (e.g., `transition-phase.js` VALID_TRANSITIONS list) will report false failures even if the other template is internally consistent. The suite encodes this template's invariants, not generic ones.

### If you want the suite to be truly portable

Three things would need to change, none huge:
1. **Test expectations against specific names** (agents, commands, phase transitions) should come from a config file the suite reads from the target repo, not hardcoded in tests.
2. **Set `REPO_ROOT` explicitly** via env var (already supported â€” `process.env.REPO_ROOT` override at line 15) when the template is located somewhere other than the QA parent.
3. **Document `.claude/` as the required contract** â€” i.e., a one-paragraph `QA/README.md` addition saying "this suite expects the sibling `.claude/` tree to conform to X".

For now, treat `QA/` as "the test suite that lives with this template" rather than "a portable test harness."

[Logs saved]

---


---

## Session Resumed (2026-04-23 02:51Z)

**Permission Mode:** 

---


_**User: shamima-g (2026-04-23 02:52Z)**_

Give me the prmpts that I will have to write in order to update the QA whenever the template changes.  The template is expected to change and hence, the tests have to be adapted


_**Agent (model claude-opus-4-7)**_

Here's a pocket kit of reusable prompts. Each one is structured the same way: say **what changed**, point to **where the suite expects it**, and give Claude the **decision criteria** (is the test wrong now, or did the template introduce a regression?). That last part matters â€” without it the agent will just blindly rewrite tests to pass.

---

## 1. The always-first prompt: diagnose drift after any template change

Run this whenever `npm test` in `QA/` has new failures and you don't know why.

```
The template files under .claude/ have changed recently. Run
`cd QA && npm test` and classify each failure as one of:

  (a) TEST BUG â€” the test encodes an assumption about the old template
      that's no longer accurate. The template change is intentional and
      correct; the test needs to follow.
  (b) TEMPLATE REGRESSION â€” the test is still correct; something in
      .claude/ broke or drifted unintentionally.
  (c) CONTENT DRIFT â€” a README or docs file fell out of sync with
      .claude/agents/, .claude/commands/, or similar. Fix the docs.

For each failure, quote: the test file + line, the script/file it's
checking, the actual vs. expected output, and your classification
with one-sentence justification. Don't fix anything yet. Just triage.
```

Use this output to drive the follow-up prompts below.

---

## 2. New agent added to `.claude/agents/`

```
I added a new agent at .claude/agents/<FILENAME>.md. Update:

  (1) .claude/agents/README.md â€” add an entry in the same format as
      the other agents there.
  (2) Root README.md â€” add the agent to any agent table/list.
  (3) Confirm the agent's frontmatter has `name` (matching filename
      stem) and a `description` field longer than 20 chars â€” that's
      what QA/tier-1-unit/consistency/agents-frontmatter.test.ts
      checks.

Then run `cd QA && npm test tier-1-unit/consistency` and paste the
summary. No other edits â€” do not alter tests.
```

---

## 3. Agent renamed or removed

```
An agent under .claude/agents/ was renamed/removed:
  old: <OLD-NAME>
  new: <NEW-NAME or DELETED>

Find every reference to the old name in:
  - .claude/agents/README.md
  - Root README.md
  - .claude/commands/*.md (some commands spawn specific agents)
  - .claude/CLAUDE.md / .template-docs/
  - QA/tier-1-unit/ (search test files for hardcoded agent names)

Update or remove each reference. If QA tests mention the old name
explicitly (not via listAgentFiles() iteration), update them â€” those
aren't "test bugs," they're correctly encoding the invariant and just
need the new name. Then run `cd QA && npm test` and report.
```

---

## 4. New script added to `.claude/scripts/`

```
I added a new script at .claude/scripts/<FILENAME>.js. There's no
test for it yet. Using the other script tests in QA/tier-1-unit/scripts/
as reference (same PASS/FAIL describe pattern, uses runScript() and
createTempProject() helpers), write a new test file at
QA/tier-1-unit/scripts/<FILENAME>.test.ts that covers:

  - Happy path: run with expected args, seed any prerequisite
    artifacts (via seedArtifact), assert the JSON output shape.
  - At least one failure path: wrong args, missing prerequisites,
    or invalid input â€” assert the script exits non-zero or returns
    status=error.
  - Edge cases the script's header comment documents.

Do NOT assume behavior â€” read the script first and test what it
actually does. Then run the new test file in isolation and fix any
issues.
```

---

## 5. Existing script's behavior changed

```
.claude/scripts/<FILENAME>.js has been updated. Changes:
<PASTE CHANGE SUMMARY or commit message>

The QA test QA/tier-1-unit/scripts/<FILENAME>.test.ts may now be
out of date. For each assertion in that test file, decide:

  - Does the change make the old expectation wrong? â†’ update the
    test to match the new behavior, add a code comment linking to
    the reason (commit, issue, or one-line rationale).
  - Does the change break an invariant the test was correctly
    enforcing (e.g., output shape, exit code contract)? â†’ this is
    a regression; STOP and report back for a decision rather than
    relaxing the test.

Show me the diff before committing.
```

The "stop and report back" line is the important one â€” without it, Claude will quietly loosen assertions to make failures go away.

---

## 6. New slash command added to `.claude/commands/`

```
I added a new slash command at .claude/commands/<NAME>.md. The QA
suite's commands-frontmatter test iterates every file in that
folder and requires:
  - Valid YAML frontmatter
  - A `description:` field longer than 10 chars

Confirm the new command's frontmatter meets both. Then run
`cd QA && npm test tier-1-unit/consistency/commands-frontmatter.test.ts`
and report. No test changes should be needed.
```

---

## 7. Workflow state machine changed (phases, transitions, artifacts)

This is the scariest category because the fixture helpers hardcode the state/artifact shape.

```
The workflow state machine changed in one or more of these ways:
  - New phase added
  - Phase renamed or removed
  - VALID_TRANSITIONS edited in .claude/scripts/transition-phase.js
  - Artifact locations moved (e.g., FRS path, manifest path)
  - intake-manifest.json schema changed

Audit the QA helpers and tests for hardcoded assumptions:
  - QA/helpers/state-fixtures.ts â€” Phase union type, DEFAULT_STATE,
    seedArtifact's `kind` union and the paths each case writes to.
  - QA/helpers/manifest-fixtures.ts â€” manifest shape.
  - QA/tier-1-unit/scripts/transition-phase.test.ts â€” hardcoded
    phase names in seedState calls and --to targets.
  - QA/tier-1-unit/scripts/validate-phase-output.test.ts â€” hardcoded
    phase names passed to --phase.

Produce a checklist of every place the old shape is embedded, propose
updates, and WAIT for approval before editing â€” these helpers are
shared infrastructure and a wrong edit cascades through the whole suite.
```

---

## 8. `.claude/settings.json` changed (hooks, permissions)

```
.claude/settings.json was modified. Check:

  (1) QA/tier-1-unit/consistency/settings-schema.test.ts still passes â€”
      especially the "hook files exist" check, which parses hook
      commands with a regex.
  (2) If a new hook was wired up, there should be a matching test
      under QA/tier-1-unit/hooks/<HOOK-NAME>.test.ts. If absent,
      draft one based on the pattern in existing hook tests
      (spawnSync with JSON stdin, assert exit code + stdout).
  (3) If deny/allow rules changed, check
      QA/tier-1-unit/hooks/bash-permission-checker.test.ts â€”
      its DENY_CASES / ALLOW_CASES matrix may need new rows.

Report gaps; don't fix yet.
```

---

## 9. The "just accept reality" escape hatch

For when a batch of failures are all the same flavor of "yes, the template moved on, update the tests":

```
I'm accepting that these failures reflect intentional template
changes, not bugs:
  <list of failing test names>

Update each test to match the current behavior. For every edit, add
a one-line code comment stating WHY it changed (e.g., "// phase
VALIDATE renamed to QA in <commit-sha>"). No comments without a
concrete reason. Run `cd QA && npm test` and report the final count.
```

---

## How to use this kit

Typical flow after a template change:

1. **Prompt 1** â€” get a triage report.
2. Based on the triage, pick **one of 2-8** per category of change.
3. If the change is big (phases, artifact layout), use **prompt 7** first and let it gate the others â€” those helpers touch everything.
4. **Prompt 9** only after 1-8, for the residue of "we genuinely moved on" cases.

The one thing I'd resist is writing a single "update the QA suite to match all current template state" prompt. It sounds efficient but it removes the test/template distinction â€” Claude will happily rewrite every failing assertion into a passing one, which defeats the point of having tests.

[Logs saved]

---


_**User: shamima-g (2026-04-23 02:53Z)**_

commit and push


_**Agent (model claude-opus-4-7)**_



Bash: Check working tree

---

_**Agent (model claude-opus-4-7)**_

Only session logs changed. Committing and pushing.

---

_**Agent (model claude-opus-4-7)**_



Bash: Commit session log updates and push

---

_**Agent (model claude-opus-4-7)**_

Pushed as `6d884fc`. Working tree clean, `main` in sync with `origin/main`.

[Logs saved]

---


_**User: shamima-g (2026-04-23 02:55Z)**_

Do you also consider giving me prompts to update the test-guide, test-inputs, test-strategy and how-it-works after a change in the template.


_**Agent (model claude-opus-4-7)**_

Good call â€” let me first check what's actually in those docs so the prompts are grounded in real content, not guesses.

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Glob_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Glob_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Glob_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Glob_

---

_**Agent (model claude-opus-4-7)**_



Bash: Check size of each doc

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_

Yes â€” good catch. Those four docs cross-reference each other (TEST-STRATEGY quotes CP/RB/Variant IDs from TEST-GUIDE and TEST-INPUTS) and they're Claude's own context when the workflow runs, so stale docs are arguably worse than stale tests. Here's a parallel kit, keyed to what's actually in each file.

---

## The four docs and what they cover

| File | Lines | What it contains | Who reads it |
|---|---|---|---|
| `TEST-STRATEGY.md` | 460 | Three-tier pyramid, 9 test areas mapped to tiers, helper conventions, directory layout | You + Claude (planning the suite) |
| `TEST-GUIDE.md` | 3,189 | 38 numbered tests with Setup / PASS / FAIL / How to Test / Rollback sections. RB-0..RB-7 rollback library. "What This Catches" regression table | You (running manual tier) + Claude (behavioral reference) |
| `TEST-INPUTS.md` | 499 | Canonical Team Task Manager scenario + Variants Aâ€“F scripted answers | You (running tests) + Claude (fixture source) |
| `HOW-IT-WORKS.md` | 573 | Architecture: phase machine, agent roles, hook flow, state files | You + Claude (onboarding + runtime context) |

Because they reference each other, most template changes touch **two or three** of these. The prompts below are keyed to what changed in `.claude/`, not to individual docs.

---

## 1. The always-first prompt: detect doc drift

Run this after any template change, before touching any individual doc.

```
The template under .claude/ has changed. Check the four template-level
docs for drift:

  TEST-STRATEGY.md
  TEST-GUIDE.md
  TEST-INPUTS.md
  HOW-IT-WORKS.md

For each doc, produce a table of:
  - Line range that's now factually wrong
  - What the doc currently claims
  - What the template now does
  - Severity: BREAKING (Claude would follow outdated instructions),
    MISLEADING (humans would misread), COSMETIC (line numbers /
    counts only)

Don't edit anything. Report. I'll choose which to fix and in what
order based on severity.
```

The severity classification matters because HOW-IT-WORKS drift actively misleads future Claude sessions (bad), while a stale line count in TEST-STRATEGY is noise (fine to defer).

---

## 2. New / renamed / removed script under `.claude/scripts/`

```
A script under .claude/scripts/ was <added | renamed | removed>:
  <details>

Update:

  (1) TEST-STRATEGY.md Section 2 â€” the "9 categories" table (A-I)
      maps scripts to tiers. Add/rename/remove the row. If a new
      category is warranted, propose the letter and justify.
  (2) TEST-STRATEGY.md Section 4 ("Proposed directory layout") â€”
      the tier-1-unit/scripts/ listing.
  (3) TEST-GUIDE.md â€” grep for the old script name; update or
      remove any test steps that invoke it.
  (4) HOW-IT-WORKS.md â€” if the script is part of the user-visible
      workflow (phase transitions, dashboard, etc.), update the
      description.

Do NOT invent behavior â€” read the script header comment for its
actual purpose. Show me the diffs before committing.
```

---

## 3. New / changed phase in the workflow state machine

The highest-blast-radius change, because every doc has phase-dependent sections.

```
The workflow state machine changed:
  <describe: new phase added | phase renamed | transitions edited>

This cascades through all four docs. Update in this order:

  (1) HOW-IT-WORKS.md â€” the phase-machine section (diagram + prose).
      This is the source of truth; get it right first.
  (2) TEST-STRATEGY.md â€” the "State Checkpoints CP-0..CP-6" list
      (section "Conventions borrowed from TEST-GUIDE.md") may need
      a new checkpoint for the new phase.
  (3) TEST-GUIDE.md â€” for each of the 38 tests, check whether:
        - A new test is needed for the new phase
        - An existing test's Setup / PASS / FAIL steps reference
          an obsolete phase name
        - The rollback (RB-0..RB-7) section needs a new recipe
      Produce a checklist before editing en masse.
  (4) TEST-INPUTS.md â€” if the canonical scenario or any Variant
      exercises the changed phase, the scripted answers may need
      new or removed entries.

Then re-run the drift prompt (Prompt 1) to catch anything missed.
```

---

## 4. New / renamed / removed agent under `.claude/agents/`

```
An agent changed in .claude/agents/:
  <details>

Update:

  (1) HOW-IT-WORKS.md â€” the agent catalog section. Add/rename/remove
      the entry; describe when the agent is spawned and by whom.
  (2) TEST-GUIDE.md â€” grep for the old/new name. Any behavioral
      test that asserts "subagent X was launched" references a
      specific agent; update it.
  (3) TEST-INPUTS.md â€” if the agent prompts the user for input
      during its flow, the canonical / variant answers may need
      updating.
  (4) TEST-STRATEGY.md Section 2 â€” rarely needs changes for agent
      edits, but check if the "Test Area" table mentions the agent.

Read the agent's frontmatter description and tool list before
writing â€” don't paraphrase from memory.
```

---

## 5. New Variant or canonical-scenario change

```
The canonical test scenario changed:
  <Variant A-F modified | new variant added | Team Task Manager
  scenario replaced>

  (1) TEST-INPUTS.md â€” this is the source of truth. Update the
      scripted answers for the affected variant. Keep the existing
      format (numbered-answer blocks per prompt).
  (2) TEST-STRATEGY.md â€” Section "Conventions borrowed from
      TEST-GUIDE.md" lists Variants A-F. Add/update the row.
  (3) TEST-GUIDE.md â€” every test's "Variant" metadata field
      references the variants. If a variant was removed or
      renamed, update each affected test.
  (4) QA/helpers/ â€” check if seedArtifact / seedManifest hardcodes
      scenario-specific content (paths, feature names). Flag, don't
      fix â€” fixture edits go through the QA prompt kit, not this one.

TEST-INPUTS.md is where the new text *lives*; the other docs only
*reference* it. Don't duplicate scenario prose across files.
```

---

## 6. New hook or settings.json change

```
.claude/settings.json or .claude/hooks/ changed:
  <new hook wired up | deny rule added | permission scope changed>

Docs to update:

  (1) HOW-IT-WORKS.md â€” the hook-flow section (which hooks fire
      on which events, in what order). If a new hook is part of
      the user-facing workflow, describe it.
  (2) TEST-STRATEGY.md Section 2 â€” "Test Area E: Hooks" lists
      each hook. Add/remove the row.
  (3) TEST-GUIDE.md â€” the "Security invariants" group of tests
      (around tests 30+) covers deny-list behavior. If deny rules
      changed, add a test case entry with PASS / FAIL steps.

Quote actual file paths and event names from settings.json â€” don't
paraphrase.
```

---

## 7. New rollback or checkpoint convention

```
A new rollback (RB-*) or checkpoint (CP-*) is needed because
<reason: e.g., new phase introduced a new artifact that needs
cleaning up>.

  (1) TEST-GUIDE.md â€” the "Rollback Reference" section. Append
      the new RB-<N> with a code block showing the cleanup
      commands. Number sequentially after existing entries.
  (2) TEST-STRATEGY.md â€” the borrowed-conventions section lists
      RB IDs. Update the range.
  (3) QA/helpers/rollback.ts â€” if the rollback is mechanised for
      Tier 1 tests, add it there. This is code, not docs â€” flag
      and defer to the QA prompt kit.

For checkpoints, same pattern but with CP-* and the
checkpoint-fixtures.ts file.
```

---

## 8. Cross-doc consistency check (run after any of 2-7)

After editing any doc, run this to catch ripple effects.

```
I just edited <DOC-NAME>. Verify the other three template-level
docs are still consistent with it:

  - Search for every cross-reference. The common ones:
    * RB-<N>, CP-<N>, Variant <letter>
    * Phase names (INTAKE, DESIGN, SCOPE, STORIES, REALIGN,
      TEST-DESIGN, WRITE-TESTS, IMPLEMENT, QA, COMPLETE)
    * Script / agent / hook filenames
    * Tier 1 / Tier 2 / Tier 3 references

  - Flag any place where a reference now points at something that
    doesn't exist in the updated doc, or where the updated doc
    contradicts another doc.

Don't fix cross-doc conflicts silently â€” list them and let me
decide which doc is correct.
```

The "let me decide" line is the important one. When HOW-IT-WORKS says one thing and TEST-GUIDE says another, it's rarely obvious which was intended â€” often the mismatch is the sign of an underlying decision that was never made.

---

## 9. The "accept the new reality" escape hatch

When a batch of drift is all genuine follow-the-template work:

```
Accept the following as intentional template changes, and update
the docs accordingly:
  <list of drift items from Prompt 1's report>

Minimal edits only â€” preserve prose style, don't rewrite sections
that merely needed a name changed. Update "Prepared" dates at the
top of TEST-GUIDE.md and any similar metadata. Commit each doc as
a separate commit with a focused message so it's easy to review
or revert individually.
```

The separate-commit rule matters â€” these docs are long and mixing unrelated edits makes `git blame` useless later.

---

## How this fits with the QA kit

You now have two kits:

- **QA kit (7 prompts)** â€” keeps `QA/**/*.test.ts` in sync with `.claude/`.
- **Docs kit (this one, 9 prompts)** â€” keeps `TEST-*` and `HOW-IT-WORKS` in sync with `.claude/`.

Typical order after a template change:
1. **Docs prompt 1** â†’ drift report
2. **QA prompt 1** â†’ triage report
3. Fix HOW-IT-WORKS first if it's wrong (it's the source-of-truth doc Claude reads as context).
4. Fix QA tests that reference now-correct behavior.
5. Fix TEST-STRATEGY / TEST-GUIDE / TEST-INPUTS.
6. **Docs prompt 8** â†’ cross-consistency check.
7. **Docs prompt 9** for stragglers.

Want me to save both kits as checked-in markdown somewhere (e.g., `.template-docs/maintenance/`) so they're discoverable later instead of scattered across session logs? Say the word and I'll do it.

[Logs saved]

---


_**User: shamima-g (2026-04-23 02:58Z)**_

let, name it as QA-MAINTENANCE


#### Permission Request - 2026-04-23 03:00Z

**Tool:** `Write`

---


_**Agent (model claude-opus-4-7)**_



_Tools used: Write_

---

_**Agent (model claude-opus-4-7)**_

Saved as `QA-MAINTENANCE.md` at repo root (alongside `TEST-STRATEGY.md`, `TEST-GUIDE.md`, `TEST-INPUTS.md`, `HOW-IT-WORKS.md` â€” they're the natural siblings).

**Structure:**
- Preamble â€” why this file exists, guiding principles, recommended order
- **Part 1: QA kit** (Q1â€“Q9) â€” `QA/` test/helper maintenance
- **Part 2: Docs kit** (D1â€“D9) â€” TEST-STRATEGY / TEST-GUIDE / TEST-INPUTS / HOW-IT-WORKS maintenance
- Appendix â€” table of which failure mode each prompt prevents

Want me to commit and push?

[Logs saved]

---


_**User: shamima-g (2026-04-23 03:01Z)**_

_Opened file: `c:\AI\21-04-2026\TEST-STRATEGY.md`_

YES


_**Agent (model claude-opus-4-7)**_



Bash: Check working tree

---

_**Agent (model claude-opus-4-7)**_



Bash: Commit QA-MAINTENANCE.md and session log, push to origin

---

_**Agent (model claude-opus-4-7)**_

Pushed as `3551e31`. Tree clean, `main` in sync with `origin/main`.

[Logs saved]

---


---

## Session Resumed (2026-04-23 05:20Z)

**Permission Mode:** 

---


---

## Session Summary (Recovered from /clear)

**Recovered:** 2026-04-23 05:20Z
**Total Prompts:** 13
**Tools Used:** Bash, Read, Edit, Grep, Glob, Write
**Files Modified:** 11

### Token Usage

_Token usage data not available. Run `/context` during session to capture token usage._

