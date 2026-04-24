# RUN TESTs in qa-tests folder (2026-04-23 05:47Z)

**Project:** 21-04-2026
**Session ID:** 0786dc02-5e77-442c-80aa-1416d009bfdc
**Started:** 2026-04-23 05:45Z
**Permission Mode:** 

---


_**User: shamima-g (2026-04-23 05:47Z)**_

_Opened file: `c:\AI\21-04-2026\TEST-STRATEGY.md`_

RUN TESTs in qa-tests folder


_**User: shamima-g (2026-04-23 05:48Z)**_

report


_**Agent (model claude-opus-4-7)**_

# QA Test Run Report â€” `qa-tests/`

**Command:** `npm test` (vitest run) from `qa-tests/`
**Result:** 178 passed Â· **5 failed** Â· 17 skipped Â· 38 files Â· 8.23s

---

## Failures

### Doc-consistency drift (4 failures, 3 files)

| # | Test | File | Issue |
|---|---|---|---|
| 1 | agents-frontmatter â€º every agent file has a matching entry in README.md | [tier-1-unit/consistency/agents-frontmatter.test.ts:66](qa-tests/tier-1-unit/consistency/agents-frontmatter.test.ts#L66) | Agents missing from `.claude/agents/README.md`: **mock-setup-agent**, **spec-compliance-watchdog** |
| 2 | cross-doc-references â€º README.md references every real agent | [tier-1-unit/consistency/cross-doc-references.test.ts:57](qa-tests/tier-1-unit/consistency/cross-doc-references.test.ts#L57) | Agents missing from top-level `README.md`: **mock-setup-agent**, **prototype-review-agent**, **spec-compliance-watchdog**, **test-designer**, **type-generator-agent** |
| 3 | commands-frontmatter â€º /api-go-live has a non-empty description | [tier-1-unit/consistency/commands-frontmatter.test.ts:29](qa-tests/tier-1-unit/consistency/commands-frontmatter.test.ts#L29) | `/api-go-live` command file is missing `description:` frontmatter |
| 4 | commands-frontmatter â€º /api-mock-refresh has a non-empty description | [tier-1-unit/consistency/commands-frontmatter.test.ts:29](qa-tests/tier-1-unit/consistency/commands-frontmatter.test.ts#L29) | `/api-mock-refresh` command file is missing `description:` frontmatter |

### Hook logic gap (1 failure)

| # | Test | File | Issue |
|---|---|---|---|
| 5 | bash-permission-checker â€º deny matrix â€º `grep password credentials.json` | [tier-1-unit/hooks/bash-permission-checker.test.ts:62](qa-tests/tier-1-unit/hooks/bash-permission-checker.test.ts#L62) | Expected `deny`, got `fallthrough` â€” hook does not catch credential-file access patterns |

---

## Skipped (17)

All in `tier-2-log-replay/invariants/` â€” expected. Tier 2 replays harvested `.claude/logs/*.md` fixtures; the fixtures aren't present in this repo, so tests self-skip. Not a regression.

Representative skipped invariants: `dashboard-timing`, `dispatcher-tool-call-limit`, `two-step-approval`, `developer-called-twice`, `clearing-boundaries`, `askuser-not-for-text-input`, `issues-found-delegates`, `logs-saved-marker`, `q3-combined`, `realign-auto-completes`, `write-tests-gates-approval`.

---

## Notable passes

- **State machine** (`transition-phase.js`) â€” full suite green
- **Scripts** â€” `copy-with-header`, `scan-doc`, `import-prototype`, `init-preferences`, `generate-dashboard-html` (incl. stable-HTML snapshot), `validate-phase-output`, `detect-workflow-state`, `quality-gates`, `collect-dashboard-data`, `generate-traceability-matrix`, `generate-todo-list`, `generate-progress-index` â€” all green
- **Schemas** â€” `workflow-state.json`, `intake-manifest.json`, `settings-schema` â€” all green
- **Artifact lint** â€” `api-path-exactness`, `no-suppression-directives`, `shadcn-imports-only`, `role-field-in-stories`, `plain-language-checklists` â€” all green
- **Hooks** â€” `claude-md-permission-checker` green; `bash-permission-checker` 27/28 green (one deny case above)

---

## Summary

Template is healthy. Five real failures cluster into two themes: (a) four doc-drift failures where new agents/commands (`mock-setup-agent`, `spec-compliance-watchdog`, `prototype-review-agent`, `test-designer`, `type-generator-agent`, `/api-go-live`, `/api-mock-refresh`) were added without updating their README listings or frontmatter descriptions; (b) one bash-permission-checker gap where `grep password credentials.json` falls through instead of denying.

[Logs saved]

---


---

## Session Resumed (2026-04-23 10:55Z)

**Permission Mode:** 

---


---

## Session Summary (Recovered from /clear)

**Recovered:** 2026-04-23 10:55Z
**Total Prompts:** 2
**Tools Used:** Bash, Glob, Read
**Files Modified:** 0

### Token Usage

_Token usage data not available. Run `/context` during session to capture token usage._


---

## Session Resumed (2026-04-24 05:40Z)

**Permission Mode:** 

---


---

## Session Summary (Recovered from /clear)

**Recovered:** 2026-04-24 07:57Z
**Total Prompts:** 2
**Tools Used:** Bash, Glob, Read
**Files Modified:** 0

### Token Usage

_Token usage data not available. Run `/context` during session to capture token usage._

