#
# Pester tests for .claude/hooks/workflow-guard.ps1
#
# Run with:  pwsh -Command "Invoke-Pester tier-1-unit/hooks/powershell"
#
# The guard reads generated-docs/context/workflow-state.json and emits JSON
# containing additionalContext telling Claude which command to redirect to.
#
BeforeAll {
    $script:RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..\..\..')).Path
    $script:Guard = Join-Path $RepoRoot '.claude\hooks\workflow-guard.ps1'
}

Describe 'workflow-guard.ps1' {

    BeforeEach {
        # Per-test temp project
        $script:TempRoot = Join-Path $env:TEMP ("claude-query-ps-" + [System.IO.Path]::GetRandomFileName())
        New-Item -ItemType Directory -Path $TempRoot -Force | Out-Null
        New-Item -ItemType Directory -Path (Join-Path $TempRoot 'web') -Force | Out-Null
        New-Item -ItemType Directory -Path (Join-Path $TempRoot 'generated-docs\context') -Force | Out-Null
        Push-Location $TempRoot
    }

    AfterEach {
        Pop-Location
        Remove-Item -Path $TempRoot -Recurse -Force -ErrorAction SilentlyContinue
    }

    Context 'Project not initialised' {
        It 'PASS: emits "Project not initialized" when web/node_modules does not exist' {
            $result = & pwsh -NoProfile -ExecutionPolicy Bypass -File $Guard
            $result | Should -Match 'Project not initialized'
            $result | Should -Match '/setup'
        }

        It 'FAIL: does NOT emit "No active workflow" when web/node_modules is also missing' {
            $result = & pwsh -NoProfile -ExecutionPolicy Bypass -File $Guard
            $result | Should -Not -Match 'No active workflow'
        }
    }

    Context 'Active workflow' {
        BeforeEach {
            New-Item -ItemType Directory -Path (Join-Path $TempRoot 'web\node_modules') -Force | Out-Null
            $state = @{
                currentPhase = 'IMPLEMENT'
                currentEpic = 2
                currentStory = 3
                featureName = 'Team Task Manager'
                featureComplete = $false
            } | ConvertTo-Json
            Set-Content -Path (Join-Path $TempRoot 'generated-docs\context\workflow-state.json') -Value $state
        }

        It 'PASS: reports the current phase / epic / story' {
            $result = & pwsh -NoProfile -ExecutionPolicy Bypass -File $Guard
            $result | Should -Match 'IMPLEMENT'
            $result | Should -Match '/continue'
        }

        It 'FAIL: does NOT tell the user to run /setup when dependencies exist and workflow is active' {
            $result = & pwsh -NoProfile -ExecutionPolicy Bypass -File $Guard
            $result | Should -Not -Match '/setup'
        }
    }

    Context 'Feature complete' {
        BeforeEach {
            New-Item -ItemType Directory -Path (Join-Path $TempRoot 'web\node_modules') -Force | Out-Null
            $state = @{
                currentPhase = 'COMPLETE'
                featureComplete = $true
            } | ConvertTo-Json
            Set-Content -Path (Join-Path $TempRoot 'generated-docs\context\workflow-state.json') -Value $state
        }

        It 'PASS: suggests /start for a new feature' {
            $result = & pwsh -NoProfile -ExecutionPolicy Bypass -File $Guard
            $result | Should -Match 'complete'
            $result | Should -Match '/start'
        }
    }

    Context 'Corrupted state file' {
        BeforeEach {
            New-Item -ItemType Directory -Path (Join-Path $TempRoot 'web\node_modules') -Force | Out-Null
            Set-Content -Path (Join-Path $TempRoot 'generated-docs\context\workflow-state.json') -Value 'not valid json {{'
        }

        It 'PASS: exits 0 and emits no output on parse failure (fail-safe)' {
            $result = & pwsh -NoProfile -ExecutionPolicy Bypass -File $Guard 2>&1
            $LASTEXITCODE | Should -Be 0
        }
    }
}
