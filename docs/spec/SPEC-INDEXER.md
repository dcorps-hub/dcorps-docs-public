# dCorps – Reference Indexer Specification

**Document type**: Reference spec  
**Doc ID**: SPEC-INDEXER  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/spec/SPEC-INDEXER.md`)

> Scope: Expected behavior of a reference indexer and explorer for the Hub, modules, and recognized sub chains. This is non-normative for the chain, but normative for reference tooling.

---

## 1. Introduction

The Hub’s on-chain state is optimized for security and consensus, not for end-user querying or analytics. Reference indexers and explorers:

- ingest Hub and sub chain data;
- maintain denormalized views and derived tables;
- expose APIs and UIs for entities, donors, regulators, and builders.

This spec defines:

- required data sources and core entities to index;
- basic schemas and query capabilities;
- expectations around consistency, reliability, and observability.

Implementers MAY extend this spec with additional features, but SHOULD maintain compatibility with the core data model.

---

## 2. Data sources and ingestion

Indexers MUST support ingesting at least:

- Hub chain blocks, transactions, and events (via RPC, gRPC, or direct node integration);
- module-specific logs and events where available;
- anchor records and metadata for recognized sub chains;
- optional off-chain feeds where needed for enrichment (e.g. token prices, fiat conversions), clearly labeled as off-chain.

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
   - links to the Decision Log and TBD Register where available.
3. **Wallets and flows**
   - balance history for canonical wallets;
   - tagged inflow and outflow events;
   - evidence references and derived reports.
4. **Modules and sub chains**
   - module registry entries with status and risk labels;
   - sub chain registry, anchors, and recognition tiers.

Schema definitions SHOULD align with `SPEC-DATA.md` to the extent practical. Where denormalization is useful (e.g. precomputed reporting views), indexers MAY introduce derived tables that remain clearly documented.

---

## 4. Query and API surface

Reference indexers SHOULD expose APIs that allow:

- fetching entities by ID, name, type, or attached modules;
- listing canonical wallets and recent flows with tags;
- retrieving governance proposals, votes, and statuses;
- listing modules and sub chains by type, risk label, or status;
- generating basic cash-based operating and allocation reports for entities over a period.

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

