# Documentation Organizator

## Purpose
- Define the canonical folder and file order used by the public docs center.
- Keep navigation and exports consistent with `docs/welcome/INDEX.md`.

## Update rule
- Update this file whenever any file or folder is created, renamed, removed, or updated in scope or title.
- If the docs center order changes, update the lists below in the same commit.

## Ordering protocol
- The lists below are authoritative; order is top-to-bottom.
- Use `INDEX.md` as the first entry in any folder that contains one.
- Place overviews and summaries before detailed specs, runbooks, or appendices.
- Keep references to public docs only; do not include private or restricted paths.
- Docs center exports use the canonical order minus the non-publish list.

## Non-publish list (docs center)
- README.md
- ORGANIZATOR.md
- AGENTS.md
- tools/
- tools/docgen/
- docs/REPOS.md
- docs/agents/
- docs/agents/INDEX.md
- docs/master/
- docs/ops/
- docs/ops/INDEX.md
- docs/website/
- docs/website/INDEX.md

## Canonical order

### Repository root
- README.md
- ORGANIZATOR.md
- AGENTS.md
- docs/
- tools/

### docs/
- welcome/
- REPOS.md
- whitepaper/
- investor/
- spec/
- policy/
- token/
- security/
- engineering/
- interop/
- devops/
- ops/
- roadmap/
- frontend/
- website/
- people/
- legal/
- agents/

### docs/welcome/
- INDEX.md
- OVERVIEW.md

### docs/whitepaper/
- INDEX.md
- WHITEPAPER_LONG.md
- WHITEPAPER.md
- EXECUTIVE_SUMMARY.md
- LITEPAPER.md
- WHITEPAPER_PLAIN_LANGUAGE.md
- NONPROFIT_NOTE.md
- FAQ.md
- GLOSSARY.md

### docs/investor/
- INDEX.md
- INVESTOR_BRIEF.md
- TOKENOMICS_SUMMARY.md

### docs/spec/
- INDEX.md
- SPEC-CORE_PUBLIC.md
- SPEC-CORE.md
- SPEC-PARAMS.md
- SPEC-MODULES.md
- SPEC-ATTESTATIONS.md
- SPEC-ANCHOR.md
- SPEC-INDEXER.md
- SPEC-DATA.md
- SPEC-CONFORMANCE-TESTS.md

### docs/policy/
- POL-FOUNDATION.md
- POL-GOV.md
- POL-VALIDATORS.md
- POL-TREASURY.md
- POL-REGISTRY-MODULES.md
- POL-DOCS-PUBLICATION.md

### docs/token/
- TOKEN-POLICY.md
- TOKEN-GENESIS-PLAN.md
- TOKEN-EMISSIONS-NOTES.md
- TOKEN-TREASURY-FEE-FLOWS.md
- TOKEN-VESTING-SCHEDULES.md

### docs/security/
- SECURITY-POLICY.md
- THREAT-MODEL.md
- KEY-MANAGEMENT.md
- AUDIT-PLAN.md
- BUG-BOUNTY.md
- INCIDENT-RESPONSE.md

### docs/engineering/
- INDEX.md
- TECHNICAL_OVERVIEW.md
- STACK.md
- COSMOS_BASE.md
- CHAIN_LAYOUT.md
- PROTOCOL_INTERFACES.md
- API_SURFACES.md
- INTEGRATION_GUIDE.md

### docs/interop/
- INDEX.md
- IBC.md

### docs/devops/
- INDEX.md
- ENVIRONMENTS.md
- COSMOS_ENVIRONMENT.md
- NETWORK_PARAMS.md
- SECURITY.md
- OBSERVABILITY.md
- CI_CD.md
- RELEASE_PROCESS.md
- BACKUP_STRATEGY.md
- RUNBOOKS.md
- RUNBOOK-VALIDATORS.md
- RUNBOOK-GENESIS.md
- RUNBOOK-UPGRADES.md
- RUNBOOK-IBC.md
- IBC_OPERATIONS.md
- RUNBOOK-INDEXER.md
- RUNBOOK-BACKUP.md
- RUNBOOK-INCIDENTS.md

### docs/ops/
- INDEX.md

### docs/roadmap/
- INDEX.md
- PHASES.md

### docs/frontend/
- INDEX.md
- INFO_ARCHITECTURE.md
- STACK.md
- EXPLORER_REQUIREMENTS.md
- SIGNING_FLOWS.md
- ACCESSIBILITY.md

### docs/website/
- INDEX.md

### docs/people/
- INDEX.md
- TEAM.md
- CORE_ROLES.md
- ADVISOR_ROLES.md
- OPEN_ROLES.md

### docs/legal/
- INDEX.md
- STRUCTURE_PATH.md
- DEVCO_FOUNDATION_AGREEMENT.md
- RISK_DISCLOSURE.md
- DISCLAIMERS.md

### docs/agents/
- INDEX.md

### tools/
- docgen/

### tools/docgen/
- README.md
