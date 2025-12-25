# CI/CD

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-CICD  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/devops/CI_CD.md](/devops/CI_CD))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Describe automated checks and release flow for documentation and, later, chain code.

Release promotion between dev, staging, and prod is defined in [docs/devops/RELEASE_PROCESS.md](/devops/RELEASE_PROCESS).

---

## Documentation pipeline (this repo)

No automated CI/CD workflows are implemented in this repo yet.

Minimum checks before publishing:

- Verify internal doc links resolve within `docs/`.
- Verify public docs do not link to private restricted material.
- Verify doc metadata blocks (Doc ID, Status) are present and accurate.

---

## Website pipeline (site repo)

This lives in `../dcorps-site` and is out of scope for this repo.

- Build static pages from `../dcorps-site/content`.
- Validate navigation and route coverage.
- Publish staging preview before production.

---

## Chain pipeline (chain repo)

- Build and test chain binaries (Go).
- Run proto lint and generation (`buf`).
- Run unit and integration tests.
- Run conformance and integration tests.
- Produce release artifacts and checksums (`goreleaser`).
- Tag releases and link to upgrade notes.

---

## Release checklist (high level)

- Specs and policies updated.
- Relevant version headers and dates updated (where used).
- Upgrade notes published.
- Testnet rehearsal completed.
- Governance approval (if required).
