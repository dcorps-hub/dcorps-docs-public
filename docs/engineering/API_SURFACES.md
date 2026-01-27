# API Surfaces

**Document type**: Engineering interface plan  
**Doc ID**: ENG-API-SURFACES  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/engineering/API_SURFACES.md](/engineering/API_SURFACES))  
**Last updated**: 2026-01-25

> Scope: JSON-RPC endpoints, contract ABIs, events, and indexer APIs for the Hub rollup. This is the v0.1 baseline for implementation.

---

## 1. Primary surfaces

- **JSON-RPC (EVM)** for chain access and transaction submission.
- **Contract ABIs** for core Hub contracts (entity registry, accounting, module registry).
- **Event logs** as the canonical indexing substrate.
- **Indexer REST APIs** for derived views and search (see [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)).

---

## 2. Core contracts (illustrative functions)

### 2.1 Entity registry

- `registerEntity(...)`
- `updateEntityMetadata(...)`
- `setEntityStatus(...)`
- `bindRole(...)` / `unbindRole(...)`
- `bindWallet(...)` / `unbindWallet(...)`
- `anchorDocument(...)`

### 2.2 Accounting

- `recordEvent(...)`
- `batchRecordEvents(...)`

### 2.3 Module registry

- `registerModule(...)`
- `upgradeModule(...)`
- `deprecateModule(...)`
- `attachModule(...)` / `detachModule(...)`

Function arguments and validation rules are defined in the Protocol Specification and data standards.

---

## 3. Core events (illustrative)

Events are emitted for indexers and off-chain tooling. Example event families include:

- `EntityRegistered` (entity_id, entity_type, creator)
- `EntityUpdated` (entity_id)
- `EntityStatusSet` (entity_id, status)
- `RoleBound` / `RoleUnbound` (entity_id, role_type, address)
- `WalletBound` / `WalletUnbound` (entity_id, wallet_type, address)
- `DocumentAnchored` (entity_id, doc_type, hash)
- `AccountingEventRecorded` (entity_id, category_code, amount, token)
- `ModuleRegistered` / `ModuleUpgraded` / `ModuleDeprecated`
- `ModuleAttached` / `ModuleDetached`

Event schemas and field semantics are defined in [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA).

---

## 4. Indexer APIs (reference)

Indexers expose reproducible views over events, including:

- entity directory and lifecycle status;
- wallets and role bindings;
- tagged accounting event views (cash-based operating and nonprofit allocation views);
- module attachments and registry status.

See [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER) for normative behavior.
