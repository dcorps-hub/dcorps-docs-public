# CI/CD and Release Flow

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-CICD  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/devops/CI_CD.md`)

> Scope: Describe automated checks and release flow for documentation and, later, chain code.

Release promotion between dev, staging, and prod is defined in `docs/devops/RELEASE_PROCESS.md`.

---

## Documentation pipeline (this repo)

- Markdown linting and link checks.
- Content consistency checks (doc IDs, references).
- Publish previews for review.

---

## Website pipeline (site repo)

- Build static pages from `../dcorps-site/content`.
- Validate navigation and route coverage.
- Publish staging preview before production.

---

## Chain pipeline (future)

- Build and test chain binaries.
- Run conformance and integration tests.
- Produce release artifacts and checksums.
- Tag releases and link to upgrade notes.

---

## Release checklist (high level)

- Specs and policies updated.
- Changelog updated.
- Upgrade notes published.
- Testnet rehearsal completed.
- Governance approval (if required).
