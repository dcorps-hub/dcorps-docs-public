# Indexer Specification

**Document type**: Reference spec  
**Doc ID**: SPEC-INDEXER  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER))  
**Last updated**: 2026-01-16  

> Scope: Expected behavior of a reference indexer and explorer for the Hub, modules, and recognized sub chains. This is non-normative for the chain, but normative for reference tooling.

---

## 1. Introduction

The Hub’s on-chain state is optimized for security and consensus, not for end-user querying or analytics. Reference indexers and explorers:

- ingest Hub and sub chain data;
- maintain denormalized views and derived tables;
- expose APIs and UIs for entities, donors, regulators, and builders.

dCorps publishes an official reference indexer that powers the official explorer and reporting summaries. Independent indexers are encouraged; on-chain state remains authoritative.

This spec defines:

- required data sources and core entities to index;
- basic schemas and query capabilities;
- expectations around consistency, reliability, and observability.

Important boundary: “reports” returned by the indexer are derived views computed over a caller-selected timeframe (`period_start`/`period_end`). The Hub chain stores on-chain facts (events, tags, anchors), not periodic report objects.

Implementers MAY extend this spec with additional features, but SHOULD maintain compatibility with the core data model.

---

## 2. Data sources and ingestion

Indexers MUST support ingesting at least:

- Hub chain blocks, transactions, and events (via RPC, gRPC, or direct node integration);
- module-specific logs and events where available;
- anchor records and metadata for recognized sub chains;
- optional off-chain feeds where needed for enrichment (e.g. token prices, unit conversions), clearly labeled as off-chain.

Ingestion SHOULD:

- be near real-time for the Hub;
- support backfilling from genesis or a known snapshot;
- handle temporary outages and reconnections without data loss.

---

## 3. Indexing model and schemas

Indexers SHOULD maintain structured representations of at least:

1. **Entities**
   - basic metadata (ID, type, name, lifecycle status);
   - bound canonical wallets;
   - attached modules and sub chain relationships.
2. **Roles and governance**
   - role bindings per entity;
   - governance proposals, votes, and outcomes;
   - links to governance proposals and public rationale where available.
3. **Wallets and flows**
   - balance history for canonical wallets;
   - tagged inflow and outflow events;
   - evidence references and derived views (report outputs).
4. **Commerce objects**
   - catalog items/services;
   - invoices and their status history;
   - recurring plans and next-run schedule.
5. **Modules and sub chains**
   - module registry entries with status and risk labels;
   - sub chain registry, anchors, and recognition tiers.

Schema definitions SHOULD align with `SPEC-DATA.md` to the extent practical. Where denormalization is useful (e.g. precomputed reporting views), indexers MAY introduce derived tables that remain clearly documented.

---

## 4. Query and API surface

Reference indexers SHOULD expose APIs that allow:

- fetching entities by ID, name, type, or attached modules;
- listing canonical wallets and recent flows with tags;
- listing catalog items, invoices, and recurring plans by entity;
- retrieving governance proposals, votes, and statuses;
- listing modules and sub chains by type, risk label, or status;
- generating basic cash-based operating and allocation views for entities over any selected timeframe.

APIs SHOULD:

- support pagination and filtering for large result sets;
- surface timestamps and block heights for all records;
- clearly distinguish between on-chain facts (e.g. amounts, timestamps) and interpretations or derived metrics (e.g. “program spend”).

---

## 5. Consistency and reliability

Indexers MUST:

- handle chain reorgs (where applicable) by recomputing affected ranges;
- provide monitoring metrics (e.g. ingestion lag, error rates, last processed height);
- support alerting on significant discrepancies or ingestion failures.

Public-facing explorers SHOULD:

- display data freshness in the UI;
- indicate when data is delayed or incomplete;
- provide links to raw transaction and block data where possible, enabling verification.

---

## 6. Reference schema (v0.1)

Reference indexers SHOULD maintain at least the following tables or equivalent documents.

### 6.1 Entities

| Field | Type | Notes |
| --- | --- | --- |
| entity_id | string | Stable ID |
| entity_type | string | `SPEC-DATA.md` |
| display_name | string | Human-readable |
| lifecycle_status | string | Active, suspended, dissolved |
| created_at | timestamp | Hub time |
| created_height | int | Block height |
| metadata_json | json | Optional |
| jurisdiction_code | string | Optional |
| subchain_id | string | Optional |

### 6.2 Roles

| Field | Type | Notes |
| --- | --- | --- |
| entity_id | string | FK |
| role_type | string | `SPEC-DATA.md` |
| address | string | Bech32 |
| powers | string[] | Optional |
| bound_height | int | Height |
| unbound_height | int | Nullable |

### 6.3 Wallets

| Field | Type | Notes |
| --- | --- | --- |
| entity_id | string | FK |
| wallet_type | string | `SPEC-DATA.md` |
| address | string | Bech32 |
| active | bool | Current binding |
| metadata_json | json | Optional |

### 6.4 Accounting events

| Field | Type | Notes |
| --- | --- | --- |
| event_id | string | Unique |
| tx_hash | string | Transaction hash |
| event_index | int | Index in tx |
| entity_id | string | FK |
| from_wallet | string | Wallet type or address |
| to_address | string | Counterparty |
| amount | string | Amount |
| denom | string | Denom |
| direction | string | inflow/outflow |
| category_code | string | `SPEC-DATA.md` |
| tags_json | json | Optional |
| evidence_ref | string | Optional |
| timestamp | timestamp | Hub time |
| height | int | Block height |

### 6.5 Anchors

| Field | Type | Notes |
| --- | --- | --- |
| anchor_id | string | Unique |
| entity_id | string | FK |
| anchor_type | string | Document type |
| hash | string | Content hash |
| uri | string | Optional |
| linked_event_id | string | Optional |
| timestamp | timestamp | Hub time |
| height | int | Block height |

### 6.6 Modules

| Field | Type | Notes |
| --- | --- | --- |
| module_id | string | Unique |
| module_type | string | Jurisdiction, sector, attestation |
| version | string | Module version |
| status | string | Proposed, active, deprecated |
| risk_tier | string | Optional |
| proposal_id | string | Optional |
| metadata_json | json | Optional |

### 6.7 Sub chains

| Field | Type | Notes |
| --- | --- | --- |
| subchain_id | string | Unique |
| chain_id | string | External chain ID |
| status | string | Recognition status |
| recognition_tier | string | Tier |
| operators | string[] | Addresses or DIDs |
| last_anchor_height | int | Nullable |
| last_anchor_time | timestamp | Nullable |

### 6.8 Sub chain anchors

| Field | Type | Notes |
| --- | --- | --- |
| anchor_id | string | Unique |
| subchain_id | string | FK |
| anchor_height | int | Sub chain height |
| commitment_hash | string | Root hash |
| prev_anchor_id | string | Optional |
| metadata_json | json | Optional |
| timestamp | timestamp | Hub time |

### 6.9 Catalog items

| Field | Type | Notes |
| --- | --- | --- |
| item_id | string | Unique |
| entity_id | string | FK |
| label | string | Human-readable |
| price | string | Amount + denom |
| cost | string | Optional |
| status | string | Active, paused, retired |
| created_at | timestamp | Hub time |
| updated_at | timestamp | Hub time |

### 6.10 Invoices

| Field | Type | Notes |
| --- | --- | --- |
| invoice_id | string | Unique |
| entity_id | string | FK |
| counterparty | string | Wallet or pseudonymous ID |
| amount_total | string | Amount + denom |
| payment_wallet_type | string | `SPEC-DATA.md` |
| payment_address | string | Resolved address (optional) |
| status | string | Draft, open, partial, paid, overdue, waived, canceled |
| due_date | timestamp | Optional |
| line_items_json | json | Item references |
| created_at | timestamp | Hub time |
| updated_at | timestamp | Hub time |

### 6.11 Recurring plans

| Field | Type | Notes |
| --- | --- | --- |
| plan_id | string | Unique |
| entity_id | string | FK |
| cadence | string | Monthly, quarterly, etc |
| amount_total | string | Optional |
| line_items_json | json | Optional |
| status | string | Active, paused, canceled |
| next_run_at | timestamp | Optional |
| created_at | timestamp | Hub time |
| updated_at | timestamp | Hub time |

---

## 7. Reference API contract (v0.1)

All endpoints return JSON with pagination via `limit` and `cursor` where applicable.

### 7.1 Entities

- `GET /v1/entities`
- `GET /v1/entities/{entity_id}`
- `GET /v1/entities/{entity_id}/roles`
- `GET /v1/entities/{entity_id}/wallets`
- `GET /v1/entities/{entity_id}/events`
- `GET /v1/entities/{entity_id}/anchors`
- `GET /v1/entities/{entity_id}/items`
- `GET /v1/entities/{entity_id}/invoices`
- `GET /v1/entities/{entity_id}/plans`

### 7.2 Accounting events

- `GET /v1/events`
  - Query: `entity_id`, `wallet_type`, `category_code`, `from_height`, `to_height`, `period_start`, `period_end`

### 7.3 Modules and sub chains

- `GET /v1/modules`
- `GET /v1/modules/{module_id}`
- `GET /v1/modules/{module_id}/attachments`
- `GET /v1/subchains`
- `GET /v1/subchains/{subchain_id}`
- `GET /v1/subchains/{subchain_id}/anchors`

### 7.4 Reporting

- `GET /v1/reports/cash`
  - Query: `entity_id`, `period_start`, `period_end`
- `GET /v1/reports/allocation`
  - Query: `entity_id`, `period_start`, `period_end`

### 7.5 Commerce objects

- `GET /v1/items/{item_id}`
- `GET /v1/invoices/{invoice_id}`
- `GET /v1/plans/{plan_id}`

---

## 8. Versioning and compatibility

- Schema and API changes MUST be versioned.
- Indexers SHOULD include a `schema_version` field on root responses.
