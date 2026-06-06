# Repositories

**Document type**: Repository index  
**Doc ID**: REPOS-INDEX  
**Status**: Draft v0.3  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/REPOS.md](/REPOS))  
**Last updated**: 2026-04-11  

> Scope: inventory of repositories that make up the dCorps ecosystem after the 2026 app-first reset.

---

## Active repositories

- `dcorps-hub-rollup`  
  - Purpose: canonical protocol repo for the Hub rollup. Contracts, deployments, local-devnet, environment bundles, and genesis tooling live here.  
  - Status: active (early build).
- `dcorps-indexer`  
  - Purpose: canonical ingestion, storage, and derived-view API for entity, authority, accounting, and anchor data.  
  - Status: active (early build).
- `dcorps-app`  
  - Purpose: canonical public surface. The app absorbs operator console, entity console, registry views, explorer basics, and testnet portal functions.  
  - Status: active (early build).
- `dcorps-docs-public` (this repo)  
  - Purpose: public whitepaper, specs, policies, runbooks, and roadmap artifacts.  
  - Status: active.
- `dcorps-docs-private` (sibling repo)  
  - Purpose: restricted operations, legal, security, financing, and partner documentation.  
  - Path: `../dcorps-docs-private`
  - Status: active.
- `dcorps-devstack` (sibling repo)  
  - Purpose: optional local integration harness for multi-repo development.  
  - Path: `../dcorps-devstack`
  - Status: active.
- `dcorps-docs-center` (sibling repo)  
  - Purpose: docs UI and publishing surface for public documentation.  
  - Path: `../dcorps-docs-center`
  - Status: active.

---

## Transition repositories

- `dcorps-site-v2`  
  - Purpose: legacy static portal and multilingual website surface.  
  - Path: `../dcorps-site-v2`
  - Status: transition / retire after needed routes are absorbed into `dcorps-app`.

---

## Legacy / archived repositories

- `dcorps-chain`  
  - Purpose: legacy Cosmos-era prototype repository name.  
  - Status: archived.  
  - Replacement: `dcorps-hub-rollup`.
- `dcorps-site`  
  - Purpose: archived legacy public website source.  
  - Status: archived / read-only; do not use in the active publication stack.
  - Replacement: `dcorps-site-v2` for legacy static routes and `dcorps-app` for the canonical public surface.

---

## Repo creation rule

Do not create additional repos unless one of the following is true:

- the codebase needs an independent release cadence;
- the codebase needs a materially different operator or security boundary; or
- the product has matured enough that the extra repo reduces, rather than adds, operational complexity.
