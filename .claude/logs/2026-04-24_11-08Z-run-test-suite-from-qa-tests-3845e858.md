# run test suite from QA-tests (2026-04-24 11:08Z)

**Project:** 21-04-2026
**Session ID:** 3845e858-10f8-4424-87e2-70156a76f05e
**Started:** 2026-04-24 11:08Z
**Permission Mode:** 

---


_**User: shamima-g (2026-04-24 11:08Z)**_

_Opened file: `c:\AI\21-04-2026\TEST-INPUTS.md`_

run test suite from QA-tests


_**User: shamima-g (2026-04-24 11:11Z)**_

run the Pester suite too


_**User: shamima-g (2026-04-24 11:15Z)**_

Ensure that none of the tests fail.  Tell me what you are going to do, don't do any change yet


_**Agent (model claude-opus-4-7)**_

Let me investigate each failure before proposing fixes.

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



_Tools used: Glob_

---

_**Agent (model claude-opus-4-7)**_



Bash: List command files

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



Bash: Check root README size

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



Bash: Check project root resolution in hooks

---

_**Agent (model claude-opus-4-7)**_

I've traced each failure. Here's my plan â€” **no edits yet**.

## Plan: 9 fixes across 3 themes

### Theme 1 â€” Docs drift (4 test failures)

**1a.** [.claude/agents/README.md](.claude/agents/README.md) is missing two agents that exist on disk. Add table rows and numbered sections for:
- `mock-setup-agent` (DESIGN â€” MSW mock handlers from OpenAPI)
- `spec-compliance-watchdog` (QA â€” verifies implementation matches spec)

**1b.** Root [README.md](README.md) agent table (lines 83â€“95) is missing five agents. Add rows for:
- `mock-setup-agent`, `prototype-review-agent`, `spec-compliance-watchdog`, `test-designer`, `type-generator-agent`

Also update the mermaid diagram to include them (or at least ensure each name appears once in the doc body â€” the test uses `readme.includes(name)`, so a reference anywhere counts).

**1c.** [.claude/commands/api-go-live.md](.claude/commands/api-go-live.md) and [.claude/commands/api-mock-refresh.md](.claude/commands/api-mock-refresh.md) are missing YAML frontmatter. Add a `---\ndescription: â€¦\n---` block to each, matching the format already used in [.claude/commands/api-status.md](.claude/commands/api-status.md#L1-L3). (This isn't only a test fix â€” Claude Code's slash-command loader requires `description`.)

### Theme 2 â€” Credentials-file deny gap (1 failure)

**2.** [.claude/hooks/bash-permission-checker.js:430](.claude/hooks/bash-permission-checker.js#L430) â€” the grep-credentials `alwaysDeny` pattern requires a path separator before `credentials`:

```js
'grep\\b[^|;&]*\\s+\\S*[/\\\\]credentials(?:\\.\\w+)?' + segEnd
```

So `grep password credentials.json` (bare filename) falls through. Relax to match bare filenames too â€” same shape as the adjacent `.pem` pattern (line 427) which uses `\\S*\\.pem` without requiring a separator:

```js
'grep\\b[^|;&]*\\s+\\S*credentials(?:\\.\\w+)?' + segEnd
```

This is a real security gap, not just a test-fit. It's a deny-list widening, so worst case is a false-positive block on a legitimate filename containing `credentials` â€” acceptable for a security hook.

### Theme 3 â€” Pester workflow-guard hermeticity (4 failures)

**Root cause:** [workflow-guard.ps1:11](.claude/hooks/workflow-guard.ps1#L11) resolves `$projectRoot` from `$PSScriptRoot`, so the test's `Push-Location $TempRoot` has no effect â€” the hook always reads the real repo's `web/node_modules` and state file. Compounding this, the tests pipe the JSON output (array of lines) straight into `Should -Match`, which fails on the `{` line.

**3a.** [.claude/hooks/workflow-guard.ps1:11](.claude/hooks/workflow-guard.ps1#L11) â€” add an env-var override, mirroring what `claude-md-permission-checker.js` already does with `CLAUDE_PROJECT_DIR`:

```powershell
$projectRoot = if ($env:CLAUDE_PROJECT_DIR) {
    $env:CLAUDE_PROJECT_DIR
} else {
    (Get-Item $PSScriptRoot).Parent.Parent.FullName
}
```

Production behavior is unchanged (env var unset â†’ same `$PSScriptRoot` resolution).

**3b.** [QA-TESTS/tier-1-unit/hooks/powershell/workflow-guard.Tests.ps1](QA-TESTS/tier-1-unit/hooks/powershell/workflow-guard.Tests.ps1) â€” two changes:
- In `BeforeEach` set `$env:CLAUDE_PROJECT_DIR = $TempRoot`; in `AfterEach` clear it
- Parse the JSON output once and assert against `additionalContext`, instead of piping raw lines to `Should -Match`:

```powershell
$raw = & pwsh -NoProfile -ExecutionPolicy Bypass -File $Guard
$context = ($raw -join "`n" | ConvertFrom-Json).hookSpecificOutput.additionalContext
$context | Should -Match 'Project not initialized'
```

This also fixes the asymmetric "does NOT match /setup" assertion â€” currently it matches `/setup` inside the JSON envelope even when the intended message doesn't mention it.

---

## Risk summary

| Change | Blast radius |
|---|---|
| Docs edits (1a, 1b) | None â€” markdown only |
| Command frontmatter (1c) | Positive â€” fixes a real Claude Code loader requirement |
| Bash hook deny widening (2) | Low â€” false-positive blocks; hook already fails-open via fallthrough for adjacent allow-list |
| PowerShell hook env override (3a) | None when env var unset; additive only |
| Pester test rewrite (3b) | Test-only |

## Verification

After all five edits, re-run both suites:
- `cd QA-TESTS && npm test` â€” expect 0 failed
- `cd QA-TESTS && npm run test:pester` â€” expect 0 failed

Shall I proceed with all 5 changes, or would you like to scope down / review any specific fix first?

[Logs saved]

---


_**User: shamima-g (2026-04-24 11:19Z)**_

proceed


#### Permission Request - 2026-04-24 11:20Z

**Tool:** `Edit`

---


#### Permission Request - 2026-04-24 11:23Z

**Tool:** `Edit`

---


#### Permission Request - 2026-04-24 11:24Z

**Tool:** `Edit`

---


#### Permission Request - 2026-04-24 11:25Z

**Tool:** `Edit`

---


#### Permission Request - 2026-04-24 11:25Z

**Tool:** `Edit`

---


#### Permission Request - 2026-04-24 11:26Z

**Tool:** `Edit`

---


#### Permission Request - 2026-04-24 11:26Z

**Tool:** `Edit`

---


_**User: shamima-g (2026-04-24 11:29Z)**_

_Opened file: `c:\AI\21-04-2026\.claude\hooks\inject-agent-context.ps1`_

commit and push

