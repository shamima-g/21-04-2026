#
# Pester tests for .claude/hooks/inject-phase-context.ps1
#
# Fires on SessionStart (compact matcher). Restores phase-specific instructions
# after auto-compaction by reading workflow-state.json and injecting the
# matching .claude/hooks/phase-context/<phase>.md content.
#
BeforeAll {
    $script:RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..\..\..')).Path
    $script:Hook = Join-Path $RepoRoot '.claude\hooks\inject-phase-context.ps1'
}

Describe 'inject-phase-context.ps1' {

    BeforeEach {
        $script:TempRoot = Join-Path $env:TEMP ("claude-query-ps-" + [System.IO.Path]::GetRandomFileName())
        New-Item -ItemType Directory -Path $TempRoot -Force | Out-Null
        New-Item -ItemType Directory -Path (Join-Path $TempRoot 'generated-docs\context') -Force | Out-Null
        Push-Location $TempRoot
    }

    AfterEach {
        Pop-Location
        Remove-Item -Path $TempRoot -Recurse -Force -ErrorAction SilentlyContinue
    }

    It 'PASS: emits instructions matching the current phase' {
        $state = @{ currentPhase = 'DESIGN'; currentEpic = 1 } | ConvertTo-Json
        Set-Content -Path (Join-Path $TempRoot 'generated-docs\context\workflow-state.json') -Value $state
        $result = & pwsh -NoProfile -ExecutionPolicy Bypass -File $Hook
        $result | Should -Match 'DESIGN'
    }

    It 'FAIL: does not crash when state file is missing' {
        $result = & pwsh -NoProfile -ExecutionPolicy Bypass -File $Hook 2>&1
        $LASTEXITCODE | Should -Be 0
    }
}
