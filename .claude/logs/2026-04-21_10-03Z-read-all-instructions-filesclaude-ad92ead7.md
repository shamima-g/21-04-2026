# Read all instructions files,claude (2026-04-21 10:03Z)

**Project:** 21-04-2026
**Session ID:** ad92ead7-0051-4322-8dff-1a9306e541eb
**Started:** 2026-04-21 10:00Z
**Permission Mode:** 

---


_**User: shamima-g (2026-04-21 10:03Z)**_

Read all instructions files,claude.md and all related files and explain to me how the process works, both technical and non technical.  I am new to claude, so explain eveything in deep details.  Do NOT miss any single information


_**Agent (model claude-opus-4-7)**_

I'll explore the repository structure and read all the instruction files to give you a thorough explanation. Let me start by mapping out what's here.

---

_**Agent (model claude-opus-4-7)**_



Bash: List root directory contents

---

_**Agent (model claude-opus-4-7)**_



Bash: List subdirectory contents

---

_**Agent (model claude-opus-4-7)**_



Bash: List .claude subdirectories

---

_**Agent (model claude-opus-4-7)**_



Bash: List additional subdirectories

---

_**Agent (model claude-opus-4-7)**_

Now I'll read the most important files in parallel to understand the whole system.

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

Let me continue reading the key files in parallel.

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

Let me quickly read a few more critical files to complete the picture.

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

I have a complete picture now. Here's a deep, end-to-end explanation of how this whole system works â€” written for someone brand-new to Claude Code.

---

# Complete Guide to This Template â€” How Everything Works

## 1. What This Project Actually Is

This repository is **not a finished app**. It's a **starter template** (scaffolding) for building web applications with AI assistance. The idea is simple:

- **You** describe *what* you want to build, in plain English.
- **Claude Code** (an AI assistant running inside VSCode) handles *how* to build it â€” planning, writing tests, writing code, reviewing, and committing.

The template gives Claude a very strict, repeatable process (called a "workflow") so the AI doesn't wander off track. That process is called **TDD** â€” **Test-Driven Development**. Tests are written *before* the code, so the code has to prove it works.

**The tech stack Claude will build into:**
- **Next.js 16** (the web framework â€” based on React)
- **React 19** (UI library)
- **TypeScript** (typed JavaScript â€” catches errors early)
- **Tailwind CSS 4** + **Shadcn UI** (styling and pre-built components)
- **Vitest + React Testing Library** (test framework)

---

## 2. The Non-Technical View â€” What You Actually Do

Think of the whole thing as three stages:

### Stage A â€” One-time Setup (5 minutes)
1. Create a new project from this template on GitHub
2. Clone it to your computer
3. Open it in VSCode with the Claude Code extension installed
4. Type `/setup` in the Claude chat â†’ Claude installs everything

### Stage B â€” Building Features (repeats for each feature)
1. Put your requirements (a plain-English document, maybe an API spec, sample data, wireframes) into the `documentation/` folder â€” *or skip it and let Claude ask you questions*
2. Type `/start` in the Claude chat
3. Answer the AI's questions about roles, styling, authentication, compliance, etc.
4. Approve the AI's proposals at checkpoints (requirements, epics, stories, test plans, quality results)
5. Verify features work in your browser when asked
6. Claude commits the code for you

### Stage C â€” Resuming After Interruption
- If you close VSCode or clear the chat, type `/continue` and Claude picks up exactly where you left off.

**That's it at a high level.** Now let's unpack everything underneath.

---

## 3. The Folder Structure (What's on Disk)

```
project-root/
â”œâ”€â”€ CLAUDE.md              # Master instruction file for the AI (always read)
â”œâ”€â”€ README.md              # Human-readable project intro
â”œâ”€â”€ CHANGELOG.md           # Template version history
â”œâ”€â”€ .gitignore             # Which files git ignores
â”‚
â”œâ”€â”€ .claude/               # ALL Claude Code brain lives here
â”‚   â”œâ”€â”€ settings.json      # Which hooks run, which tools are allowed
â”‚   â”œâ”€â”€ README.md          # Explains the .claude directory
â”‚   â”œâ”€â”€ WORKFLOWS.md       # Quick reference for common workflows
â”‚   â”œâ”€â”€ LOGGING_QUICK_START.md
â”‚   â”œâ”€â”€ agents/            # 14 specialised AI "sub-agents" (one .md each)
â”‚   â”œâ”€â”€ commands/          # 9 slash commands (/start, /continue, ...)
â”‚   â”œâ”€â”€ hooks/             # Scripts that run at specific events
â”‚   â”‚   â”œâ”€â”€ workflow-guard.ps1           # Blocks dev work outside the workflow
â”‚   â”‚   â”œâ”€â”€ bash-permission-checker.js   # Blocks dangerous bash commands
â”‚   â”‚   â”œâ”€â”€ claude-md-permission-checker.js
â”‚   â”‚   â”œâ”€â”€ inject-phase-context.ps1     # Restores instructions after compaction
â”‚   â”‚   â”œâ”€â”€ inject-agent-context.ps1
â”‚   â”‚   â””â”€â”€ phase-context/               # Per-phase "reminder cards"
â”‚   â”œâ”€â”€ logging/           # Session capture system (PowerShell)
â”‚   â”œâ”€â”€ logs/              # Every session saved as markdown â€” committed to git!
â”‚   â”œâ”€â”€ policies/          # Mandatory rules (quality gates, auth, compliance)
â”‚   â”œâ”€â”€ shared/            # orchestrator-rules.md â€” the "bible" shared by /start and /continue
â”‚   â”œâ”€â”€ scripts/           # Node.js helpers (state machine, quality gates, dashboard, ...)
â”‚   â””â”€â”€ templates/         # Blank Feature Requirements Specification
â”‚
â”œâ”€â”€ .template-docs/        # Human-readable documentation for you
â”‚   â”œâ”€â”€ Getting-Started.md
â”‚   â”œâ”€â”€ Getting started/   # Numbered step-by-step onboarding
â”‚   â”œâ”€â”€ Help/              # Authentication, RBAC, env vars, troubleshooting
â”‚   â”œâ”€â”€ guides/            # Testing, development, customization guides
â”‚   â”œâ”€â”€ examples/          # Three fully worked worked workflow examples
â”‚   â””â”€â”€ agent-workflow-guide.md
â”‚
â”œâ”€â”€ documentation/         # YOU put your requirements here (before /start)
â”‚   â”œâ”€â”€ README.md          # Template/tips for writing good specs
â”‚   â”œâ”€â”€ sample-data/
â”‚   â””â”€â”€ wireframes/
â”‚
â”œâ”€â”€ generated-docs/        # Claude writes here as the workflow progresses
â”‚   â”œâ”€â”€ specs/             # FRS, API spec, design tokens, wireframes
â”‚   â”œâ”€â”€ context/           # Workflow state (machine-readable JSON)
â”‚   â”œâ”€â”€ stories/           # Epics and stories Claude creates
â”‚   â”œâ”€â”€ test-design/       # Test plans (human-reviewable) per story
â”‚   â”œâ”€â”€ qa/                # Manual verification checklists per story
â”‚   â”œâ”€â”€ dashboard.html     # Visual progress dashboard
â”‚   â””â”€â”€ discovered-impacts.md   # Learnings fed back into future stories
â”‚
â”œâ”€â”€ web/                   # The actual Next.js app lives here
â”‚   â”œâ”€â”€ src/               # Components, pages, API client, types
â”‚   â”œâ”€â”€ package.json       # npm dependencies
â”‚   â”œâ”€â”€ tsconfig.json      # TypeScript config
â”‚   â”œâ”€â”€ vitest.config.ts   # Test runner config
â”‚   â””â”€â”€ ...
â”‚
â”œâ”€â”€ scripts/               # Top-level scripts (log parser)
â””â”€â”€ .github/               # GitHub PR template, CI workflows, Copilot instructions
```

**Key idea:** *you* control `documentation/` (inputs). *Claude* controls `generated-docs/` and `web/src/` (outputs). The two never mix.

---

## 4. The Slash Commands (How You Talk to the System)

You type these into Claude Code's chat, and they run predefined "playbooks" stored in `.claude/commands/`.

| Command | Purpose | When to use |
|---|---|---|
| `/setup` | Installs dependencies, asks about git preferences, verifies TypeScript/ESLint/build | First time only |
| `/start` | Begins a brand-new feature â€” runs INTAKE â†’ DESIGN â†’ SCOPE â†’ STORIES â†’ ... all the way to commit | Starting a new feature |
| `/continue` | Resumes workflow from wherever it was paused | After `/clear`, after closing VSCode, after any interruption |
| `/status` | Shows which phase/epic/story you're on (text) | Anytime you want a summary |
| `/dashboard` | Opens a visual HTML dashboard in your browser â€” auto-refreshes every 10s | Anytime (nice to keep open) |
| `/quality-check` | Runs all automated quality checks (security, TypeScript, lint, build, tests) | Before committing |
| `/api-status` | Shows which API endpoints are mocked vs real | If you have an API spec |
| `/api-mock-refresh` | Regenerates mock API handlers after spec changes | If your OpenAPI spec changes |
| `/api-go-live` | Switches from mock API to real backend | When backend is ready |

Claude also has **built-in** commands you didn't write: `/help`, `/clear` (wipes conversation context), `/context` (shows token usage).

---

## 5. The Workflow â€” Nine Phases, Carefully Orchestrated

This is the heart of the system. The workflow is a **state machine**: there's a single file, `generated-docs/context/workflow-state.json`, that tracks exactly where you are. Claude reads it, advances it, and writes artifacts that prove each phase finished.

### The 9 Phases

```
INTAKE â†’ DESIGN â†’ SCOPE â†’ [STORIES â†’ REALIGN â†’ TEST-DESIGN â†’ WRITE-TESTS â†’ IMPLEMENT â†’ QA â†’ COMPLETE] per story
```

Here's what happens in each, plain-English first:

#### Phase 1 â€” INTAKE (runs once per feature)
**Goal:** Turn your vague idea into a formal, unambiguous requirements document.

- **Agent 1: `intake-agent`** welcomes you and asks *how* you want to start:
  - **Option A**: You dump existing docs into `documentation/` â€” specs, APIs, wireframes, meeting notes. Anything.
  - **Option B**: You have a prototype repo (e.g. from a tool called Pencil/Claude Project Planner) â€” Claude imports it automatically.
  - **Option C**: Guided Q&A â€” you describe what you want, Claude asks follow-ups.
- It asks a **mandatory 5-question checklist**:
  1. Roles / permissions (who uses this app?)
  2. Styling / branding (colors, dark mode, design system?)
  3. API & Backend â€” two linked questions: (a) do you have an OpenAPI spec? (b) is the backend running yet?
  4. Authentication â€” three options: **BFF** (backend handles login, recommended), **Frontend-only** (next-auth â€” limited), **Custom**. There's a mandatory policy (`.claude/policies/authentication-intake.md`) that says Claude must *never* skip this question or try to infer it.
  5. Compliance (PCI-DSS for payments, GDPR for personal data, HIPAA for health, etc.). Triggered by keywords in your docs. Policy: `.claude/policies/compliance-intake.md`.
- **Output:** `generated-docs/context/intake-manifest.json` â€” a structured record of what's provided vs what needs to be generated.
- **Agent 2: `intake-brd-review-agent`** reviews everything against a 9-section template (`.claude/templates/feature-requirements.md`), asks any clarifying questions it still needs, and produces the canonical **Feature Requirements Specification (FRS)** at `generated-docs/specs/feature-requirements.md`.

The FRS has:
- Problem statement
- User roles table
- Functional requirements (R1, R2, ...) â€” each testable
- Business rules (BR1, BR2, ...)
- Data model
- Workflows
- Compliance requirements (CR1, CR2, ...)
- Non-functional requirements (NFR1, ...)
- Out of scope
- Source traceability table (where each requirement came from)

**You approve the FRS. Then: `/clear` + `/continue`.**

#### Phase 2 â€” DESIGN (runs once per feature)
**Goal:** Generate missing technical artifacts.

Claude reads the intake manifest and runs up to four agents **in parallel**:
- **`design-api-agent`** â†’ writes `generated-docs/specs/api-spec.yaml` (OpenAPI spec)
- **`design-style-agent`** â†’ writes `design-tokens.css` + `design-tokens.md` (colors, fonts, spacing)
- **`design-wireframe-agent`** â†’ writes ASCII wireframes for each screen
- **`type-generator-agent`** â†’ reads the API spec and generates TypeScript types + endpoint functions (fully automatic, no approval)

Each agent asks for your approval. Files you already provided get copied over instead of regenerated.

If `mockHandlers == true`, a **`mock-setup-agent`** wires up MSW (a mock API layer) so you can build the frontend before the real backend exists.

**You approve each design output. Then: `/clear` + `/continue`.**

#### Phase 3 â€” SCOPE (runs once per feature)
**Goal:** Break the feature into **epics** (large chunks, no stories yet).

- **`feature-planner`** reads the FRS and proposes an epic breakdown with a dependency map.
- If there are 6+ epics, it also proposes a **phase grouping** (e.g. "Phase 1: MVP = Epics 1-3; Phase 2: Enhancements = Epics 4-6").
- **You approve the epic list. Then: `/clear` + `/continue`.**

#### Phase 4 â€” STORIES (runs per epic)
**Goal:** Break the current epic into user stories with acceptance criteria.

- **`feature-planner`** proposes stories for just that epic (not all epics upfront â€” this allows pivoting mid-feature).
- You approve. Stories get written to `generated-docs/stories/epic-N-[name]/`.

#### Phase 5 â€” REALIGN (runs per story)
**Goal:** Before writing the next story's code, check if earlier stories discovered anything that affects it.

- Agents can append to `generated-docs/discovered-impacts.md` during implementation ("oh, this story needs a column we didn't plan for").
- **`feature-planner`** reads that file. If no impacts for this story, it auto-completes instantly. Otherwise, it proposes revisions for your approval.

#### Phase 6 â€” TEST-DESIGN (runs per story)
**Goal:** Design test scenarios *as data tables* before writing any code.

- **`test-designer`** creates a spec-by-example document with Setup/Input/Expected tables (not Given/When/Then â€” easier for non-developers to read).
- It surfaces business decisions the requirements didn't cover ("What should happen if the user enters a negative number?").
- **You, a Business Analyst, or the user reviews and approves.** No code written yet.

#### Phase 7 â€” WRITE-TESTS (runs per story) â€” the "RED" phase of TDD
**Goal:** Write executable tests that will initially *fail*.

- **`test-generator`** converts the test-design tables into Vitest + React Testing Library test files in `web/src/__tests__/integration/`.
- Tests fail because the components don't exist yet. **This is deliberate.**
- Fully autonomous â€” no approval needed.

#### Phase 8 â€” IMPLEMENT (runs per story) â€” the "GREEN" phase of TDD
**Goal:** Make the failing tests pass.

- **`developer`** agent reads the story, reads the failing tests, writes the minimum code to make them pass.
- Runs `npm test` at the end to verify all tests pass.
- Fully autonomous.

#### Phase 9 â€” QA (runs per story)
**Goal:** Code review, quality gates, manual verification, spec-compliance check, then commit.

Three calls to the **`code-reviewer`** agent:
- **Call A** â€” qualitative code review (TypeScript, React, security, accessibility). Read-only.
- **Call B** â€” runs all automated quality gates (see section 7 below) + writes a manual verification checklist to `generated-docs/qa/epic-N/story-M-verification-checklist.md`.
- **Then: manual verification.** You open the app in the browser and test. Options: "All tests pass" / "Issues found" / "Skip for now".
  - If "Issues found", a **fix cycle** kicks in (Claude fixes, you re-verify).
- **Then: Spec Compliance Check (Gate 6).** A separate agent, **`spec-compliance-watchdog`**, compares the spec, test-design, and actual code. If they drift, you choose: *fix the code* or *update the docs*.
- **Call C** â€” commits everything with a Conventional Commits message (`feat(epic-1): story 2 â€” add user profile page`) and pushes to `main`.

**After QA: `/clear` + `/continue`.** The loop advances to the next story, or next epic, or feature complete.

### Visual Summary

```
Your docs in documentation/          â”
     â†“                               â”‚
/start                               â”‚
     â†“                               â”‚
INTAKE â†’ FRS + manifest              â”‚  (once)
     â†“  [/clear + /continue]         â”‚
DESIGN â†’ api-spec, tokens, wireframesâ”‚  (once)
     â†“  [/clear + /continue]         â”‚
SCOPE  â†’ list of epics               â”‚  (once)
     â†“  [/clear + /continue]         â”‚
â”Œâ”€â”€â”€ STORIES â†’ stories for epic N â”€â”€â”â”‚
â”‚          â†“                         â”‚â”‚
â”‚  â”Œâ”€ REALIGN â†’ check impacts â”€â”€â”€â”€â”€â” â”‚â”‚
â”‚  â”‚      â†“                        â”‚ â”‚â”‚
â”‚  â”‚  TEST-DESIGN â†’ test plan      â”‚ â”‚â”‚
â”‚  â”‚      â†“ (you approve)          â”‚ â”‚â”‚
â”‚  â”‚  WRITE-TESTS â†’ failing tests  â”‚ â”‚â”‚
â”‚  â”‚      â†“                        â”‚ â”‚â”‚
â”‚  â”‚  IMPLEMENT â†’ make them pass   â”‚ â”‚â”‚
â”‚  â”‚      â†“                        â”‚ â”‚â”‚
â”‚  â”‚  QA â†’ review, gates, verify   â”‚ â”‚â”‚
â”‚  â”‚      â†“ (commit + push)        â”‚ â”‚â”‚
â”‚  â”‚  COMPLETE                     â”‚ â”‚â”‚
â”‚  â”‚      â†“ [/clear + /continue]   â”‚ â”‚â”‚
â”‚  â””â”€â”€â”€â”€ next story â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚â”‚
â”‚              â†“                      â”‚â”‚
â””â”€â”€â”€â”€ next epic â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
              â†“
      Feature complete!
```

---

## 6. The Agents (Claude's Team of Specialists)

These are defined in `.claude/agents/*.md`. Each is a self-contained Markdown file with YAML frontmatter telling Claude what tools the agent can use, what its purpose is, and step-by-step instructions. Claude launches them via an internal `Agent` tool.

| Agent | Phase | Role (plain English) |
|---|---|---|
| `intake-agent` | INTAKE | Welcomer, document scanner, question-asker |
| `prototype-review-agent` | INTAKE (v2) | Handles Pencil-prototype imports, extracts screenshots & enrichments |
| `intake-brd-review-agent` | INTAKE | Reviews for completeness, produces the FRS |
| `design-api-agent` | DESIGN | Designs the OpenAPI spec |
| `design-style-agent` | DESIGN | Defines colors, typography, design tokens |
| `design-wireframe-agent` | DESIGN | Creates ASCII wireframes for each screen |
| `type-generator-agent` | DESIGN | Auto-generates TypeScript types from the API spec |
| `mock-setup-agent` | DESIGN | Sets up MSW mock API handlers |
| `feature-planner` | SCOPE / STORIES / REALIGN | Breaks work into epics and stories |
| `test-designer` | TEST-DESIGN | Writes human-reviewable test plans |
| `test-generator` | WRITE-TESTS | Writes failing tests (the RED of TDD) |
| `developer` | IMPLEMENT | Writes code to make tests pass (the GREEN of TDD) |
| `code-reviewer` | QA | Reviews code, runs quality gates, commits |
| `spec-compliance-watchdog` | QA | Detects drift between specs and code |

**Why so many?** Each agent has a narrow, focused job. That keeps Claude's attention sharp and prevents one bloated "do-everything" prompt from going off the rails. When Claude reads a file, only the relevant agent's prompt is loaded â€” it's like giving a specialist the file rather than letting a generalist wing it.

### How Agents Communicate
Agents don't share memory. They pass information through **files**:
- Read: inputs from `documentation/`, `generated-docs/specs/`, `generated-docs/context/`
- Write: outputs to `generated-docs/` or `web/src/`

This means even if the conversation resets, the *next* session can pick up from whatever files are on disk.

### Scoped Calls
Each agent is invoked multiple times in "calls" (Call A, Call B, Call C). The orchestrator (the main Claude) handles all user questions in between. This is because a bug in Claude Code's subagent system means `AskUserQuestion` doesn't work inside subagents â€” so the orchestrator always owns user interaction.

Example for `design-api-agent`:
- **Call A:** "Design the spec, return a summary." â†’ Agent writes the spec, returns text.
- **Orchestrator:** Shows you the summary, asks "Does this look right?"
- **Call B:** "Commit it" OR "Revise based on this feedback: ..." â†’ Agent commits or revises.

---

## 7. The Quality Gates

Every story's code must pass **6 gates** before the commit happens. This is enforced by `.claude/policies/quality-gates.md` and `.claude/scripts/quality-gates.js`.

| Gate | Name | What | How |
|---|---|---|---|
| 1 | Functional | Feature works as spec'd | **Manual** â€” you test in the browser |
| 2 | Security | No vulnerabilities, no secrets | `npm audit` â€” 0 high/critical |
| 3 | Code Quality | TypeScript compiles, lint passes, build succeeds | `tsc`, `eslint`, `next build` â€” all exit 0 |
| 4 | Testing | All tests pass | `vitest run` â€” 0 failures |
| 5 | Performance | Reasonable page loads | **Manual** â€” you confirm |
| 6 | Spec Compliance | Code matches spec & test-design | `spec-compliance-watchdog` agent |

**Key policy:** Gates are **binary** â€” they pass or fail. Claude cannot report a "conditional pass" or rationalize failures. If a gate fails, Claude must **stop and tell you**. You decide how to proceed.

**Important exception:** During the TDD RED phase (WRITE-TESTS), TypeScript errors are *expected* because tests import components that don't exist yet. Claude must still report this as a failure â€” but explain it's expected, and proceed to IMPLEMENT.

---

## 8. Hooks â€” How Claude Code Controls Itself

Hooks are commands that run automatically at specific "events" in a Claude Code session. They're configured in `.claude/settings.json`. Think of them as plugins to Claude Code itself.

### What Fires When

| Event | Hook(s) | What they do |
|---|---|---|
| `UserPromptSubmit` (every time you send a message) | `capture-context.ps1`, `workflow-guard.ps1` | 1. Logs your prompt. 2. Checks workflow state and injects a "WORKFLOW GUARD" message so Claude always knows what phase you're in and can redirect you. |
| `SessionStart` | `capture-context.ps1`, `inject-phase-context.ps1` | Starts a new log file. If Claude Code auto-compressed the conversation (due to length), restores the full workflow state and phase-specific instructions. |
| `SessionEnd` | `capture-context.ps1` | Writes the session summary to `.claude/logs/` |
| `PreCompact` | `capture-context.ps1` | Saves state before the auto-compaction runs |
| `SubagentStart` | `capture-context.ps1`, `inject-agent-context.ps1` | Logs agent launches, injects agent-specific context |
| `SubagentStop` | `capture-context.ps1` | Logs agent returns |
| `PreToolUse` (before any tool runs) | `bash-permission-checker.js`, `claude-md-permission-checker.js`, `capture-context.ps1` | 1. Blocks dangerous bash commands. 2. Blocks editing CLAUDE.md without permission. 3. Logs the call. |
| `PostToolUse` (after any tool runs) | `capture-context.ps1`, `generate-progress-index.js` | Logs the result; auto-updates the progress index when files change. |
| `Stop` (after Claude finishes replying) | `capture-context.ps1` | Logs the response |
| `PermissionRequest` | `capture-context.ps1` | Logs when Claude asks permission for something |
| `Notification` | `capture-context.ps1` | Logs UI notifications |

### The Workflow Guard (Critical)

`.claude/hooks/workflow-guard.ps1` is the enforcement backbone. On **every** message you send, it:
1. Reads `generated-docs/context/workflow-state.json`
2. Sends Claude a system message like *"WORKFLOW GUARD: Active workflow detected. Phase: IMPLEMENT | Epic: 2 | Story: 3"*
3. If you ask Claude to "just build me a dashboard" outside the workflow, Claude sees the guard message and redirects you into `/start` or `/continue` â€” it refuses to write untracked code.

This is why you saw `WORKFLOW GUARD: Project not initialized` in the system context above.

### The Permission System

The `permissions.allow` and `permissions.deny` blocks in `settings.json` control what Claude can do without asking you:
- **Allowed** automatically: reading/writing `generated-docs/`, `documentation/`, `web/`, and using the Shadcn MCP server.
- **Denied** outright: `rm -rf /`, reading SSH keys, catting credentials.
- Everything else â†’ Claude asks you before running it.

---

## 9. Logging System

Every session is captured automatically to `.claude/logs/` as a Markdown file named like:
```
2025-11-21_14_30-add-user-authentication-feature-abc12345.md
```

It records:
- Every prompt you sent (with timestamp)
- Every tool Claude ran
- Every file modified
- Token usage
- Git info (branch, commit, status)
- Session summary

**Crucially:** These logs are **committed to Git**. When you create a pull request, reviewers can see the entire AI conversation that produced the code. This is a traceability feature â€” not just for auditing, but so a human reviewer can follow the AI's reasoning.

You can parse them with:
```powershell
.\scripts\parse-logs.ps1 -Last 5
.\scripts\parse-logs.ps1 -Search "authentication"
```

The PowerShell capture script is `.claude/logging/capture-context.ps1` (and its tiny helpers in `.claude/logs/`).

---

## 10. Scripts â€” The Automation Underneath

Inside `.claude/scripts/` (Node.js, run by Claude or directly from bash):

| Script | Purpose |
|---|---|
| `transition-phase.js` | The state machine. Moves the workflow between phases, validates prerequisites, can repair broken state. Every agent calls this before advancing. |
| `validate-phase-output.js` | Checks each phase's output artifacts actually exist and are well-formed |
| `detect-workflow-state.js` | Reads files and guesses state â€” used by `--repair` |
| `quality-gates.js` | Runs Gates 2-5 in one shot (with `--auto-fix` for formatting) |
| `collect-dashboard-data.js` | Gathers current workflow data (text or JSON format) |
| `generate-dashboard-html.js` | Builds `generated-docs/dashboard.html` with all current progress |
| `generate-progress-index.js` | Auto-runs after every Write/Edit â€” keeps the progress index fresh |
| `generate-traceability-matrix.js` | Maps requirements â†’ stories â†’ tests |
| `generate-todo-list.js` | Generates the in-chat TODO list |
| `import-prototype.js` | Imports a Pencil/Claude Project Planner prototype into `documentation/` |
| `init-preferences.js` | Saves your git preferences (auto-approve commits/pushes) |
| `scan-doc.js` | Gets file metadata (line counts, etc.) without reading full file |
| `copy-with-header.js` | Copies user-provided files to `generated-docs/specs/` with a source header |
| `test-phase-transitions.js` | Runs the state-machine test suite |

The state file, `generated-docs/context/workflow-state.json`, is the single source of truth for "where are we?". Everything revolves around it.

---

## 11. CLAUDE.md â€” The Master Instructions

`CLAUDE.md` at the project root is **auto-injected into every conversation** (you can see it in this session's system reminder). It tells Claude the "house rules" for this project. Key rules you should know:

1. **Always output `[Logs saved]` at the end of every response** â€” the signal that logs are safely written.
2. **Use Shadcn UI via the MCP server** (`mcp__shadcn__add_component`) â€” never hand-roll components.
3. **Use the API client** (`web/src/lib/api/client.ts`) â€” never call `fetch()` directly.
4. **Never ignore API errors.** If the backend returns 404 or won't connect, report it â€” don't invent explanations.
5. **No suppression directives.** No `// @ts-ignore`, no `// eslint-disable`. Fix the real issue.
6. **Quality gates are binary.** Pass or fail. No rationalization.
7. **FRS overrides template code.** The scaffolding has default auth (NextAuth), default layouts, etc. If the FRS requires BFF instead, *replace* the template code â€” don't extend it.
8. **Test quality must pass.** `npm run test:quality` enforces good test patterns.
9. **TDD workflow is mandatory.** Any "build me X" / "add Y" / "fix Z" request redirects into `/start` or `/continue`. This is why the system said "Project not initialized. Redirect to /setup."
10. **Testing focuses on user-observable behavior**, not implementation details (no querying Recharts SVGs, no counting function calls).

### What CLAUDE.md Considers a "Dev Request" vs Not

| Is a dev request (redirect to `/start`) | Not a dev request (answer directly) |
|---|---|
| "Build me a login page" | "How does the API client work?" |
| "Add a sidebar" | "Explain this component" |
| "Make it look nice" | "What phase are we in?" |
| "Connect the API" | Answering questions during `/start` |
| "Fix the header" | Running `/status`, `/dashboard` |

**That's why I answered your question directly just now** â€” "explain how the process works" is a documentation request, not a dev request.

---

## 12. Policies â€” The "Inviolable" Rules

These live in `.claude/policies/` and are loaded when relevant:

- **`quality-gates.md`** â€” binary pass/fail, no exceptions (details in section 7)
- **`authentication-intake.md`** â€” *never* skip the auth question, always offer BFF/frontend-only/custom explicitly
- **`compliance-intake.md`** â€” keyword triggers for PCI-DSS, GDPR, HIPAA, SOC 2; each has mandatory questions; each produces CR-numbered requirements in the FRS
- **`file-operations.md`** â€” scanning agents must use `Read`/`Grep`/`Glob` tools instead of `cat`/`grep`/`find` shell commands

---

## 13. Memory vs State â€” Two Different Things

This is subtle but important:

- **Workflow state** = `generated-docs/context/workflow-state.json` â€” the machine-readable truth of where you are. Survives `/clear` and crashes.
- **Conversation context** = what Claude can see in the current chat. Gets cleared with `/clear` and auto-compacted when it gets too long.
- **Claude's memory system** (in `~/.claude/projects/.../memory/`) â€” saves facts about *you* (your role, preferences, feedback you've given) that persist across sessions. Not used by the workflow itself, but useful for personalization.

The **context-clearing boundaries** (6 of them per feature) are deliberate points where the workflow instructs you to `/clear` + `/continue`. This keeps the conversation short, lets Claude re-load just the instructions for the *next* phase (via `inject-phase-context.ps1`), and prevents Claude from getting confused by older phases' details.

---

## 14. Mocking & the API-in-Development Flow

One of the cleverer features: if your backend isn't ready yet, you can still build the frontend.

1. During INTAKE, if you answer "backend still in development", the manifest marks `dataSource: "api-in-development"` and `mockHandlers: true`.
2. In DESIGN, `mock-setup-agent` generates MSW (Mock Service Worker) handlers that simulate your backend responses from the OpenAPI spec + sample data.
3. The frontend runs with `NEXT_PUBLIC_USE_MOCK_API=true` â€” API calls are intercepted and served from mocks.
4. Your OpenAPI spec tracks provenance: `x-source: user-provided` (from real spec) vs `x-source: inferred` (Claude filled gaps for mock coverage).
5. `/api-status` shows you which endpoints are mocked vs real.
6. `/api-mock-refresh` regenerates mocks when the spec changes.
7. `/api-go-live` flips `NEXT_PUBLIC_USE_MOCK_API=false` when the real backend is ready.

---

## 15. Typical First Session Walk-through (What You'll Actually See)

1. **You clone the repo, open VSCode, open Claude Code.**
2. **Hook fires** â€” `workflow-guard.ps1` sees `web/node_modules` doesn't exist, injects `"Project not initialized"`.
3. **You type:** anything. Even "hi".
4. **Claude says:** *"Let's get the project set up first."* Then runs `/setup`.
5. **`/setup` runs:**
   - Checks if dependencies and preferences exist
   - In parallel: starts `npm install` (~60s), asks how to handle git (auto-commit? auto-push?)
   - Verifies TypeScript compiles, ESLint runs, build succeeds
6. **Claude says:** *"Ready! Type `/start` when you want to build something."*
7. **You type:** `/start`
8. **Claude:**
   - Initializes `workflow-state.json` (phase = INTAKE)
   - Opens the dashboard in your browser (fire-and-forget)
   - Welcomes you, asks: *"Do you want to share docs, import a prototype, or build from scratch?"*
9. **You answer.** Claude reads docs or asks questions.
10. **Claude asks 5 checklist questions.** (Roles, styling, API, auth, compliance.)
11. **Claude shows you a summary** of what it'll build and asks: *"Does this look right?"*
12. **You approve.** Intake manifest is written.
13. **Claude runs `intake-brd-review-agent`,** asks any remaining clarifying questions, writes the FRS.
14. **You approve the FRS.**
15. **Claude commits** the INTAKE artifacts and tells you: *"Run `/clear` then `/continue`."*
16. **You do so.** The conversation is wiped, but the state file + the FRS + the manifest are on disk.
17. **`/continue` kicks in.** It reads state, sees phase = DESIGN, launches design agents in parallelâ€¦
18. â€¦and so on for the next ~6 phases.

At every step, the dashboard in your browser auto-updates. You can always `/status` for a text snapshot, `/dashboard` to re-open the visual view.

---

## 16. Receiving Template Updates

This repo is itself a GitHub Template. Once per week, a workflow opens a PR that syncs template improvements (new agents, improved hooks, bug fixes). Your `web/` code is never overwritten â€” only the infrastructure files in `.claude/`, `.template-docs/`, and config files. See `.template-docs/Help/Template-Sync.md`.

---

## 17. Safety Rails Summary

Everything below is enforced *without* you having to remember it:

- **`workflow-guard.ps1`** refuses dev work outside the workflow
- **`bash-permission-checker.js`** blocks dangerous bash
- **`claude-md-permission-checker.js`** prevents silent edits to CLAUDE.md
- **`permissions.deny`** in settings.json blocks `rm -rf`, credential reads
- **Quality gates** block bad code from being committed
- **Spec-compliance-watchdog** blocks drifted code from being committed
- **Conventional Commits** enforce consistent commit messages
- **Pre-commit hooks** (Husky) run formatters and linters before each commit
- **TDD workflow** means tests exist before code exists
- **`.skip()` is banned** â€” tests must pass or fail, never be skipped
- **`// @ts-ignore` is banned** â€” fix the real error
- **Session logs committed to git** means every AI decision is auditable

---

## 18. Where to Read More

If you want to go deeper:

- [CLAUDE.md](CLAUDE.md) â€” the master project rules
- [.claude/WORKFLOWS.md](.claude/WORKFLOWS.md) â€” common workflows
- [.claude/shared/orchestrator-rules.md](.claude/shared/orchestrator-rules.md) â€” the full 700-line "bible" (most technical)
- [.template-docs/Getting-Started.md](.template-docs/Getting-Started.md) â€” step-by-step onboarding
- [.template-docs/agent-workflow-guide.md](.template-docs/agent-workflow-guide.md) â€” full agent reference
- [.template-docs/examples/example-1-full-workflow.md](.template-docs/examples/example-1-full-workflow.md) â€” worked example of a complete feature build
- [.template-docs/Help/Quality-Gates.md](.template-docs/Help/Quality-Gates.md) â€” deep dive on each gate
- [.template-docs/Help/Authentication.md](.template-docs/Help/Authentication.md) â€” BFF vs frontend-only
- [.template-docs/Help/RBAC.md](.template-docs/Help/RBAC.md) â€” role-based access control
- [.template-docs/Help/Troubleshooting.md](.template-docs/Help/Troubleshooting.md) â€” when things break

---

## TL;DR â€” One Paragraph Summary

This repo is a Next.js 16 scaffold plus a very detailed AI operating manual (`.claude/`) that turns Claude Code into a disciplined team of 14 specialist AI agents running Test-Driven Development. You put requirements in `documentation/`, type `/start`, and the system walks you through 9 phases â€” **INTAKE â†’ DESIGN â†’ SCOPE â†’ STORIES â†’ REALIGN â†’ TEST-DESIGN â†’ WRITE-TESTS â†’ IMPLEMENT â†’ QA â†’ COMPLETE** â€” stopping for your approval at 6 key checkpoints. State is tracked in `workflow-state.json`, progress is visible in an auto-refreshing browser dashboard, every AI action is logged to `.claude/logs/` and committed with the code, and 6 quality gates (including AI-powered spec-vs-code drift detection) must all pass before any commit lands. Hooks, permission rules, and mandatory policies (authentication, compliance, quality gates) keep the whole thing on rails so Claude can't wander off into writing untracked, insecure, or incorrect code.

**You're now ready to type `/setup` and then `/start`.**

[Logs saved]

---


_**User: shamima-g (2026-04-21 10:34Z)**_

Write the explanation to a md file


#### Permission Request - 2026-04-21 10:37Z

**Tool:** `Write`

---


_**Agent (model claude-opus-4-7)**_



_Tools used: Write_

---

_**Agent (model claude-opus-4-7)**_

Written to [HOW-IT-WORKS.md](HOW-IT-WORKS.md) at the project root.

[Logs saved]

---


_**User: shamima-g (2026-04-21 11:02Z)**_

_Opened file: `c:\AI\21-04-2026\HOW-IT-WORKS.md`_

Now that you understand how the template works, will you be able to help me to write a test suite of unit tests to test each and every part.  Don't do anything, just suggest for the time being.
- The tests should be automated, no manual intervention.
- Write tests a specific behavior of the Claude Code workflow
- tests are independent, any-time-runnable unit test (each test has its own setup,onetime-setup,teardown,one time tear-down
- No test depends on another's output
- Maybe - One File per Test Area(what do you suggest)
- Include Reusable Helpers
- Consider rolling back or working on different branches for different tests.
-When you create a scenario, make it does the minimum work
Suggest any other way of testing what you think I have missed.


_**Agent (model claude-opus-4-7)**_

Happy to plan this out. Here's what I'd suggest â€” as a proposal only, no code written yet.

## 1. What Actually Needs Testing

The tricky thing is that this repo is **meta-tooling** â€” it tests itself and the AI workflow, not a normal app. I'd split testable surface into 7 categories:

| # | Test Area | What lives there | Test type |
|---|---|---|---|
| A | **State machine** | `.claude/scripts/transition-phase.js`, `detect-workflow-state.js`, `validate-phase-output.js` | Pure unit |
| B | **Quality gates runner** | `.claude/scripts/quality-gates.js` | Unit + subprocess |
| C | **Dashboard & progress generators** | `collect-dashboard-data.js`, `generate-dashboard-html.js`, `generate-progress-index.js`, `generate-todo-list.js`, `generate-traceability-matrix.js` | Unit + snapshot |
| D | **Import / copy utilities** | `import-prototype.js`, `copy-with-header.js`, `init-preferences.js`, `scan-doc.js` | Unit |
| E | **Permission / safety hooks** | `bash-permission-checker.js`, `claude-md-permission-checker.js` | Unit (table-driven) |
| F | **PowerShell hooks** | `workflow-guard.ps1`, `inject-phase-context.ps1`, `inject-agent-context.ps1`, `capture-context.ps1` | Pester (PS test runner) |
| G | **Static consistency** | Agent `.md` frontmatter, command `.md` frontmatter, CLAUDE.md â†” settings.json â†” README.md | Doc-lint |

Two you didn't mention but I'd add:

| H | **JSON schema validation** | `workflow-state.json`, `intake-manifest.json`, `preferences.json` | Schema tests |
| I | **Workflow simulation (golden path)** | Full `/start` â†’ commit via scripted state transitions | Integration |

## 2. Frameworks I'd Pick

- **Vitest** â€” already in `web/`, lightest lift. Use for Aâ€“E, G, H.
- **Pester** (PowerShell test framework) â€” for F. Runs on Windows natively; your platform already has it.
- **Node's `child_process`** spawning for subprocess tests in B (exit codes matter).
- **ajv** for JSON schema validation in H.
- **Nothing new for CI** â€” reuse `.github/workflows/`.

Keep this separate from the `web/` Vitest suite â€” it has different scope. Put it at `./tests/workflow/` with its own `vitest.config.ts`, or as a second Vitest workspace.

## 3. File Organisation â€” One File Per Script

I'd lean toward **one test file per script**, not one per "area". Scripts are the natural unit, they each have real behaviour, and it makes failures immediately traceable.

```
tests/workflow/
â”œâ”€â”€ vitest.config.ts
â”œâ”€â”€ helpers/
â”‚   â”œâ”€â”€ temp-project.ts          # Scaffolds a throwaway project dir
â”‚   â”œâ”€â”€ state-fixtures.ts        # Pre-built workflow-state.json stubs
â”‚   â”œâ”€â”€ manifest-fixtures.ts     # Pre-built intake-manifest.json stubs
â”‚   â”œâ”€â”€ run-script.ts            # Spawns node script, captures stdout/exit
â”‚   â”œâ”€â”€ git-sandbox.ts           # Creates/destroys git worktree per test
â”‚   â””â”€â”€ schemas/
â”‚       â”œâ”€â”€ workflow-state.schema.json
â”‚       â””â”€â”€ intake-manifest.schema.json
â”œâ”€â”€ fixtures/
â”‚   â”œâ”€â”€ intake/                  # Sample FRS docs, manifests
â”‚   â”œâ”€â”€ design/                  # Sample api-specs, tokens
â”‚   â”œâ”€â”€ stories/                 # Sample epic/story files
â”‚   â””â”€â”€ prototypes/              # Sample v1 and v2 prototype imports
â”œâ”€â”€ scripts/
â”‚   â”œâ”€â”€ transition-phase.test.ts
â”‚   â”œâ”€â”€ detect-workflow-state.test.ts
â”‚   â”œâ”€â”€ validate-phase-output.test.ts
â”‚   â”œâ”€â”€ quality-gates.test.ts
â”‚   â”œâ”€â”€ collect-dashboard-data.test.ts
â”‚   â”œâ”€â”€ generate-dashboard-html.test.ts
â”‚   â”œâ”€â”€ generate-progress-index.test.ts
â”‚   â”œâ”€â”€ generate-todo-list.test.ts
â”‚   â”œâ”€â”€ generate-traceability-matrix.test.ts
â”‚   â”œâ”€â”€ scan-doc.test.ts
â”‚   â”œâ”€â”€ copy-with-header.test.ts
â”‚   â”œâ”€â”€ init-preferences.test.ts
â”‚   â””â”€â”€ import-prototype.test.ts
â”œâ”€â”€ hooks/
â”‚   â”œâ”€â”€ bash-permission-checker.test.ts
â”‚   â”œâ”€â”€ claude-md-permission-checker.test.ts
â”‚   â””â”€â”€ powershell/             # Pester tests
â”‚       â”œâ”€â”€ workflow-guard.Tests.ps1
â”‚       â”œâ”€â”€ inject-phase-context.Tests.ps1
â”‚       â””â”€â”€ capture-context.Tests.ps1
â”œâ”€â”€ consistency/
â”‚   â”œâ”€â”€ agents-frontmatter.test.ts   # Every agent .md has name/description/model/tools
â”‚   â”œâ”€â”€ commands-frontmatter.test.ts
â”‚   â”œâ”€â”€ settings-schema.test.ts
â”‚   â””â”€â”€ cross-doc-references.test.ts # README agent list matches agents/
â”œâ”€â”€ schemas/
â”‚   â”œâ”€â”€ workflow-state.test.ts
â”‚   â””â”€â”€ intake-manifest.test.ts
â””â”€â”€ integration/
    â”œâ”€â”€ full-happy-path.test.ts      # Scripted INTAKE â†’ COMPLETE
    â”œâ”€â”€ resume-from-each-phase.test.ts
    â””â”€â”€ phase-boundary.test.ts
```

## 4. Reusable Helpers I'd Build First

These unlock everything else â€” build them before any test:

1. **`createTempProject()`** â€” copies `.claude/scripts/`, `.claude/policies/`, etc. into a `os.tmpdir()` dir, returns `{ root, cleanup }`. Every test gets its own root. This is the single biggest investment.
2. **`seedState(root, state)`** â€” writes `generated-docs/context/workflow-state.json` with a given phase/epic/story.
3. **`seedManifest(root, overrides)`** â€” writes a valid intake-manifest with overrides.
4. **`seedArtifact(root, kind, content?)`** â€” writes FRS / api-spec / story file with sensible defaults.
5. **`runScript(root, path, args[])`** â€” `spawn` wrapper returning `{ stdout, stderr, exitCode, parsedJson }`.
6. **`gitSandbox(root)`** â€” `git init`, sets user, returns a commit helper.
7. **`snapshot(name, value)`** â€” wraps Vitest's snapshot for dashboard HTML and state transitions.

## 5. Isolation Strategy â€” Answer to Your Branch Question

You mentioned branches. Here's my take:

**Don't use git branches per test.** Branches are slow, they fight each other on shared working directory, and parallel tests step on each other.

**Do use `os.tmpdir()` + per-test directory.** Each test creates its own throwaway project root. That gives you:
- True independence (no shared state)
- Parallel safe (Vitest defaults to parallel)
- Fast (hundreds of ms, not seconds)
- Easy cleanup (just `rm -rf` the temp dir)

**Where git matters** â€” the few tests that check `git add` / commit behaviour in `transition-phase.js` and `code-reviewer` simulation. For those, `git init` inside the temp dir is plenty. You don't need worktrees of the real repo.

**Exception:** if you want to test "does CLAUDE.md still make sense after a template sync?", that genuinely needs a worktree. Rare though.

## 6. Test Shape â€” AAA With Hooks

Per your brief (each test independent, own setup/teardown):

```
describe('transition-phase.js')
  beforeAll   â†’ once: resolve paths, load schemas
  beforeEach  â†’ createTempProject(); seedState()
  afterEach   â†’ cleanup()
  afterAll    â†’ (nothing usually)

  it('advances INTAKE â†’ DESIGN when FRS exists')
    arrange   â†’ seed FRS file
    act       â†’ runScript(root, 'transition-phase.js', ['--to', 'DESIGN'])
    assert    â†’ exitCode 0; state.currentPhase === 'DESIGN'
```

Keep each test **< 100ms** where possible. State-machine tests should be sub-10ms.

## 7. Minimum-Work Scenarios

For each script, the matrix is roughly:
- **Happy path** (1 test)
- **Each error branch** (1 test each)
- **Each status output** (`ok` / `error` / `warning`) (1 test each)
- **Idempotency** (run twice, second is `status: "exists"`)

For `transition-phase.js` that's ~20 tests. For `quality-gates.js` probably 10. For `bash-permission-checker.js` the permission matrix is table-driven â€” one `it.each([...])` with maybe 40 rows covering allow/deny/prompt.

Resist temptation to test every combination of phases Ã— epics Ã— stories. Property-based testing (via `fast-check`) is a better fit if you want that coverage.

## 8. Things You Haven't Mentioned â€” Worth Adding

1. **Snapshot tests for dashboard HTML.** Regenerating the dashboard from a known state should produce byte-identical output (modulo timestamps). Catches accidental template changes.
2. **JSON schema tests.** Write a formal schema for `workflow-state.json` and `intake-manifest.json`; validate every fixture. Protects against silent schema drift.
3. **Doc-lint / consistency tests.** The biggest rot in a template like this is the docs drifting from reality. Test that:
   - Every file in `.claude/agents/` has valid frontmatter and a matching entry in `.claude/agents/README.md`
   - Every `/command` referenced in CLAUDE.md exists in `.claude/commands/`
   - Every `subagent_type` referenced in orchestrator-rules.md matches a real agent file
   - The agent list in root `README.md` matches the files on disk
4. **Permission-hook fuzzing.** `bash-permission-checker.js` is security-critical. Run it against 200+ adversarial inputs (`rm -rf /` variants, encoded, with whitespace, etc.). Use a fuzz harness.
5. **Post-compaction hook test.** `inject-phase-context.ps1` is load-bearing for long sessions. Test it returns the correct phase-context file for each phase.
6. **Cross-platform CI matrix.** Run the Node tests on `ubuntu-latest` and `windows-latest`. Path handling is the #1 source of flakiness.
7. **Performance budgets.** `quality-gates.js --auto-fix` should finish under a known time on a fixed repo. Guard against accidental NÂ² walks. Log the duration; fail if > 2Ã— baseline.
8. **Golden-file tests for generated artifacts.** For `import-prototype.js` v1 and v2, keep a canned input fixture and assert the output tree matches a golden snapshot.
9. **State-machine invariants** (property-based with `fast-check`):
   - "Any phase sequence the state machine accepts is also accepted by `--repair` from the resulting artifacts"
   - "`--show` after `--init X` reports phase X"
10. **Test the test-runner itself.** Keep one canary test that deliberately fails (`.skip`'d) â€” if CI ever goes green without running it, the harness is broken.
11. **Dry-run mode.** Consider adding `--dry-run` to `transition-phase.js` and `quality-gates.js`. Makes integration tests vastly cheaper because you can test logic without side effects.
12. **Hook-off mode for tests.** Add an env var like `CLAUDE_TEST_MODE=1` that disables the logging hook during tests â€” otherwise every test will spam `.claude/logs/`. Or point `CLAUDE_PROJECT_DIR` at the temp project so logs go there and get cleaned up.

## 9. What I'd Skip (At Least Initially)

- **Testing the AI itself.** You can't reliably unit-test "does Claude generate the right code?" â€” that's for eval harnesses, not unit tests. If you need that, it's a separate project using Anthropic's eval tooling.
- **Testing agent prompt contents.** Too brittle; they change often. Stick to structural checks (frontmatter valid, tools whitelisted).
- **End-to-end with a real LLM call.** Expensive and flaky. Mock the `Agent` tool boundary; assert the *prompt shape*, not the response.

## 10. Proposed Rollout in 3 Waves

If you try to do all 9 categories at once it'll stall. I'd sequence it:

- **Wave 1 (1â€“2 days):** Helpers + state machine (A) + JSON schemas (H). Biggest risk reduction per hour. ~40 tests.
- **Wave 2 (1â€“2 days):** Permission hooks (E) + PowerShell hooks (F) + consistency lints (G). Security + doc drift. ~60 tests.
- **Wave 3 (2â€“3 days):** Quality gates (B) + generators (C) + utilities (D) + integration (I). The expensive stuff. ~50 tests.

Target ~150 tests total, ~30 second full suite, ~5 second watch-mode feedback on the hot paths.

---

Want me to kick this off by scaffolding Wave 1 (helpers + the first transition-phase tests) so you can see the shape? Or would you rather pick a different starting point first?

[Logs saved]

---


_**User: shamima-g (2026-04-21 11:09Z)**_

Wrire all this to a md file


_**Agent (model claude-opus-4-7)**_



_Tools used: Write_

---

_**Agent (model claude-opus-4-7)**_

Written to [TEST-STRATEGY.md](TEST-STRATEGY.md) at the project root.

[Logs saved]

---


_**User: shamima-g (2026-04-21 11:11Z)**_

Now read test-guide and test-inputs.  Are they different to what you have proposed?  Can you borrow ideas from them to improve the test-strategy.md?Don't do any work.  Just suggest.


_**Agent (model claude-opus-4-7)**_

Let me find those files first.

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



_Tools used: Glob_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Glob_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Glob_

---

_**Agent (model claude-opus-4-7)**_

Found them. Reading now.

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



Bash: Count lines in TEST-GUIDE.md

---

_**Agent (model claude-opus-4-7)**_

It's a 3189-line document. Let me read it in sections to understand the structure.

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

Read both. Here's my honest read.

## Short Answer

**They're not duplicates â€” they're complementary.** Mine tests *scripts and hooks* (unit-level, Node/PowerShell, pure automation). Theirs tests *Claude's live behaviour* (system-level, needs a real Claude Code session). There's almost no overlap â€” they fit together as two layers of the same pyramid.

But the existing docs have genuinely good ideas I missed, and they surface behaviours worth testing that I completely overlooked.

## What They Have That I Don't

### Test fixtures done right
- **Team Task Manager scenario** in TEST-INPUTS.md is a deliberately designed end-to-end fixture â€” two roles (RBAC), clear data model, no existing API spec (forces generation), backend-in-development (forces mocks), two epics Ã— two stories (exercises story-to-story and epic-to-epic transitions), no compliance (keeps the test path simple). I'd been planning to invent fixtures from scratch â€” borrow this instead.
- **Variants Aâ€“F** for specific code paths (BFF auth, no-backend, user-provided spec, TypeScript error injection, FRS-override, discovered impacts). This maps cleanly onto parameterised tests.

### Three conventions worth stealing outright
1. **State Checkpoints CP-0 through CP-6** â€” named starting states ("INTAKE complete, context cleared"). In my suite, serialise each as a tarball fixture so integration tests can unpack instead of running the whole workflow from scratch.
2. **Rollback IDs RB-0 through RB-7** â€” standardised cleanup recipes. My `afterEach` blocks should cite which rollback they perform; makes intent explicit.
3. **"Minimum steps to PASS" AND "Minimum steps to FAIL"** for every test. This is the one I most regret leaving out. It's the difference between a test that asserts *something* and a test that demonstrably distinguishes pass from fail. Every test I write should have both paths.

### The big one I completely missed â€” Tier 2 log-replay testing

The guide mentions a planned `verify-session-behavior.js` that parses `.claude/logs/*.md` and asserts on tool-call order. This is brilliant and bridges the gap between my purely mechanical tests and their fully live tests:

- A human runs `/start` once with the scripted answers
- The session log captures every tool call, every prompt, every response â€” in order
- A parser then makes dozens of assertions against the log, *without* Claude running again:
  - "`generate-dashboard-html.js --collect` fires before the `/clear + /continue` instruction"
  - "the developer agent was called exactly twice per IMPLEMENT phase"
  - "`AskUserQuestion` was not used for the elevator-pitch prompt"
  - "`[Logs saved]` appears as the last line of every response"
  - "parent made â‰¤ 3 tool calls before delegating to coordinator"

This should be **Tier 2 in my strategy, between the pure-unit and the live tests.** One expensive human run â†’ many cheap log assertions â†’ replayable forever.

### Behaviours I hadn't thought to test at all
Reviewing their 38 tests, here's what I was going to miss:

| Test | What it catches |
|---|---|
| 1 | `[Logs saved]` missing â†’ logging hook silently broken |
| 2 | Claude stopping after setup instead of flowing into workflow |
| 3aâ€“3j | Dashboard update **timing** (fires before clearing instruction, per-agent not per-phase, after Call B not Call A, failure non-blocking) |
| 5 | Q3 presented as combined two-header question, not split into two prompts |
| 7 | Two-step approval â€” summary text appears before `AskUserQuestion` |
| 17 | WRITE-TESTS doesn't start before user approves test-design |
| 18 | Tests actually fail in TDD red phase (otherwise TDD isn't happening) |
| 22 | Orchestrator delegates fixes â€” doesn't fix directly (the dispatcher-pattern bug guard) |
| 26 | Parent orchestrator stays under 3 tool calls before coordinator (hook-dispatch bug guard) |
| 29 | NextAuth removed when FRS requires BFF â€” not coexisting |
| 31 | API paths match spec exactly â€” no guessed URLs |
| 33 | No `@ts-ignore` / `eslint-disable` anywhere in `web/src/` |
| 34 | Plain-language policy â€” no "Gate 3", "tsc", "ESLint" in user-facing text |
| 38 | Every story file declares a `**Role:**` field |

Most of these are either behavioural (need Claude) or artifact-lint (grep-style checks I can automate). Either way, my strategy didn't list them.

### Small but useful conventions
- **Legend symbols** â€” âœ… pass, âŒ intentional fail, âš ï¸ needs dev server. My tests should tag `@unit`, `@integration`, `@requires-claude`, `@requires-server` so selective runs are trivial.
- **Per-test "Depends on"** field (e.g. `Depends on: CP-4`) â€” makes the required starting state explicit. In my suite this becomes the fixture loaded in `beforeEach`.
- **"Quick Reference â€” What Each Test Catches"** table at the bottom â€” one-line regression descriptions. Makes the suite readable for a newcomer or reviewer. I should add an equivalent.

## What My Strategy Has That Theirs Doesn't

Their guide focuses almost entirely on live behavioural checking. It doesn't cover:
- JSON schema validation of `workflow-state.json` / `intake-manifest.json`
- Doc-lint / static consistency (agent frontmatter, cross-file references between CLAUDE.md and settings.json)
- PowerShell hooks in isolation (Pester tests for `workflow-guard.ps1`, `inject-phase-context.ps1`)
- Permission-hook adversarial fuzzing (200+ inputs against `bash-permission-checker.js`)
- Property-based invariant testing on the state machine
- Cross-platform CI matrix (Windows + Linux path handling)
- Performance budgets on `quality-gates.js`
- Canary test to detect broken harness
- Hook-off mode so tests don't spam `.claude/logs/`

So there's real work my strategy adds â€” it's not redundant.

## How I'd Update TEST-STRATEGY.md

I'd restructure it into **three tiers** instead of treating everything as "unit tests":

```
Tier 1 â€” Pure automation (runs in CI, no Claude)
  - All my current scripts/hooks/schemas/consistency tests
  - PLUS grep-style artifact-lint tests from their guide
    (suppression directives, role fields, api path matching, plain language)

Tier 2 â€” Log replay (runs in CI after seed, no live Claude)
  - verify-session-behavior.js parses committed .claude/logs/*.md
  - Asserts tool-call order invariants, AskUserQuestion usage,
    dashboard timing, [Logs saved] marker, dispatcher pattern limits
  - Seed logs are harvested once per release by a human run,
    committed to tests/fixtures/golden-logs/
  - Re-harvest when the orchestrator rules change

Tier 3 â€” Live behavioural (manual, occasional)
  - Their existing 38-test guide, unchanged
  - Run once per major template release
  - Updates the golden logs for Tier 2
```

I'd also borrow:
- **Team Task Manager + Variants Aâ€“F** as the canonical fixture set (replacing my generic fixtures)
- **CP-0â€“CP-6 checkpoints** serialised as tarball fixtures for fast integration-test startup
- **RB-0â€“RB-7** as named cleanup helpers
- **PASS-path AND FAIL-path** for every test (the single most valuable convention they use)
- Their **"Depends on" + "Variant"** metadata on every test
- A **"What This Catches" regression table** at the bottom of the strategy

## What I'd Actively Skip from Their Guide

- **The manual Pass/Fail/Date/Notes box** â€” Vitest reports this. Keep it only on Tier 3 live tests.
- **The inline `cat > file << EOF` setup scripts** â€” fine for a manual guide, but in automated tests these become fixture files.
- **The CP-based sequential dependency** for Tier 1/2 â€” each test must be independently runnable (your original brief). Checkpoints are a speedup for integration tests, not a contract.

## The Meta-Idea Worth Highlighting

Their guide is structured around **observable behaviour** rather than **code under test**. Every test answers "what does a user see happen?" That's closer to acceptance testing than unit testing. It's the right framing for a template where most of the "code" is prompts and markdown â€” the product *is* the observed behaviour.

My strategy was script-centric. I should shift my **integration** tier (Wave 3) toward their behaviour-centric framing, while keeping the **unit** tier (Waves 1â€“2) script-centric. That hybrid is stronger than either alone.

## Bottom Line

- **Keep my strategy's Waves 1â€“2 as-is** â€” they're filling a real gap.
- **Gut and rewrite Wave 3** around the Team Task Manager scenario and the Tier 2 log-replay idea.
- **Steal CP checkpoints, RB rollbacks, PASS+FAIL paths, and the log-replay concept** â€” these are genuinely better patterns than what I proposed.
- **Add a companion Tier 3** that's just a pointer to their existing guide â€” no need to rewrite it.

Want me to produce a merged `TEST-STRATEGY.md` v2 that incorporates all this, or would you rather keep v1 and add a new `TEST-STRATEGY-V2.md` / `TEST-STRATEGY-ADDENDUM.md` so the evolution is visible?

[Logs saved]

---


_**User: shamima-g (2026-04-21 11:14Z)**_

yes update TEST-STRATEGY.md


_**Agent (model claude-opus-4-7)**_



_Tools used: Read_

---

_**Agent (model claude-opus-4-7)**_



_Tools used: Write_

---

_**Agent (model claude-opus-4-7)**_

Updated [TEST-STRATEGY.md](TEST-STRATEGY.md). Key changes from v1:

- **Three-tier pyramid** replaces the flat unit-test model â€” Tier 1 pure automation, Tier 2 log-replay, Tier 3 points to `TEST-GUIDE.md`
- **Borrowed** CP-0..CP-6 checkpoints, RB-0..RB-7 rollback IDs, Team Task Manager + Variants Aâ€“F as canonical fixtures, PASS+FAIL paths for every test, "What This Catches" regression table
- **New Tier 2** â€” `verify-session-behavior.ts` harness that parses harvested `.claude/logs/` and asserts tool-call order / timing invariants, so most behavioural checks run in CI without live Claude
- **New Tier 1 artifact-lint** category covering TEST-GUIDE tests 31â€“34 and 38 (suppression directives, API path exactness, Shadcn imports, plain language, role fields)
- **Added** 12 reusable helpers (up from 7), new file tree with `tier-1-unit/`, `tier-2-log-replay/`, `tier-3-pointer.md`
- **Target revised** from ~150 to ~190 tests (150 Tier 1 + 40 Tier 2), <45s full run

[Logs saved]

---


_**User: shamima-g (2026-04-21 12:07Z)**_

commit and push


_**Agent (model claude-opus-4-7)**_



Bash: Show working tree status

---

_**Agent (model claude-opus-4-7)**_



Bash: Show summary of unstaged changes

---

_**Agent (model claude-opus-4-7)**_



Bash: Show recent commit history

---

_**Agent (model claude-opus-4-7)**_



Bash: Stage test docs and session log

---

_**Agent (model claude-opus-4-7)**_



Bash: Commit staged changes

---

_**Agent (model claude-opus-4-7)**_



Bash: Push commits to remote

---

_**Agent (model claude-opus-4-7)**_



Bash: Verify clean working tree

---

_**Agent (model claude-opus-4-7)**_

Committed and pushed. Two commits shipped (the pre-existing `how it works` and the new `test strategy and guides`), working tree clean, branch up to date with `origin/main`.

[Logs saved]

---


_**User: shamima-g (2026-04-21 12:08Z)**_

REad test-strategy.md and write the tests.  Create a folder named Query and write all your tests inside it.


---

## Session Resumed (2026-04-22 11:01Z)

**Permission Mode:** 

---


---

## Session Summary (Recovered from /clear)

**Recovered:** 2026-04-22 11:01Z
**Total Prompts:** 8
**Tools Used:** Bash, Read, Write, Glob
**Files Modified:** 46

### Token Usage

_Token usage data not available. Run `/context` during session to capture token usage._


_**User: shamima-g (2026-04-22 11:01Z)**_

resume the work


#### Permission Request - 2026-04-22 11:04Z

**Tool:** `Write`

---


_**User: shamima-g (2026-04-22 11:16Z)**_

_Opened file: `c:\AI\21-04-2026\Query\tier-1-unit\schemas\workflow-state.test.ts`_

commit and push


_**User: shamima-g (2026-04-22 11:17Z)**_

resume

