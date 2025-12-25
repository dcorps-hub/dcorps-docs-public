# Release and Environment Promotion Process

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-RELEASE-PROCESS  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/devops/RELEASE_PROCESS.md`)

> Scope: Define how changes move from dev to staging to prod, and what approvals and verification are required.

---

## Change types

Classify each change before release:

- **Docs-only**: content updates in this repo.
- **Website-only**: updates in `../dcorps-site`.
- **Protocol specs or policies**: normative changes that affect interpretation.
- **Chain implementation**: code changes that affect state, consensus, or APIs.
- **Infrastructure**: node, indexer, explorer, or relayer changes.

Each class has its own gate set. Chain and infrastructure changes require the highest level of review.

---

## Environment promotion flow

### Dev -> Staging

Entry criteria:

- Change is reviewed and merged.
- Docs-only changes: manual link and consistency checks pass (until CI is implemented).
- Code changes (chain/indexer/site): relevant repo tests and checks pass.
- Release notes prepared (if applicable).

Staging validation:

- Deploy release candidate.
- Run integration tests and indexer ingestion checks.
- Confirm explorer and API endpoints operate normally.
- For chain changes, rehearse upgrades on staging with a planned height.

Exit criteria:

- No blocking issues found in staging.
- Release notes finalized.

### Staging -> Prod

Entry criteria:

- Staging exit criteria met.
- Governance approval when required (see `docs/policy/POL-GOV.md`).
- Upgrade plan reviewed and communicated.

Production rollout:

- Publish release artifacts and checksums.
- Execute upgrade at planned height (for chain changes).
- Monitor chain health, indexer health, and critical APIs.

Exit criteria:

- Chain and APIs stable for the monitoring window.
- Post-release verification completed.

---

## Release artifacts (minimum set)

- Version tag and release notes.
- Upgrade instructions included in release notes (where applicable).
- Checksums for binaries and artifacts (chain code repo).
- Migration notes for breaking API changes.

---

## Rollback and incident posture

- Dev and staging can be rolled back quickly.
- Production rollbacks are exceptional and require governance alignment.
- If an incident occurs, follow `docs/security/INCIDENT-RESPONSE.md` and publish a post-incident summary when appropriate.

---

## Communication

For changes that affect builders, validators, or entities:

- Announce release windows and upgrade height in advance.
- Provide clear operator instructions and expected impact.
- Publish a post-release status update.

---

## Release cadence (baseline)

- Dev: weekly.
- Staging: monthly.
- Prod: quarterly (emergency patches as needed).

---

## Checklist template

- Change type:
- Risk level:
- Tests completed:
- Staging validation:
- Governance approval (if required):
- Release notes:
- Upgrade height (if applicable):
- Monitoring window:
- Owner:
