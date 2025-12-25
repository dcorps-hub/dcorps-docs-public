# dCorps – Data Standards and Schemas

**Document type**: Normative spec  
**Doc ID**: SPEC-DATA  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public (`docs/spec/SPEC-DATA.md`)

> Scope: Data models, schemas, chart of accounts, and tagging standards used across the Hub and modules.

---

## 1. Introduction

dCorps is intended to be a shared language for entities, donors, auditors, and applications. That language is implemented as:

- standardized entity and wallet models;
- consistent tagging and chart-of-accounts structures;
- schemas that are stable enough for long-lived analytics and compliance.

This spec defines:

- core schemas the Hub and modules MUST agree on;
- reserved identifiers and categories;
- principles for evolving schemas over time.

Implementation details (e.g. protobuf or JSON encodings) MAY be defined in separate technical appendices.

---

## 2. Entity models

### 2.1 Entity types

At minimum, the Hub MUST support the following entity types:

- `HUB_CORP` – Hub corporation operating primarily on the Hub.
- `HUB_NONPROFIT` – Hub nonprofit/NGO with board-governed allocations.
- `FOUNDATION` – foundation or steward entity associated with protocol or ecosystem.
- `OTHER` – reserved for future categories.

Each entity record SHOULD include:

- `entity_id` – stable, unique identifier;
- `entity_type`;
- `display_name`;
- `lifecycle_status` (e.g. draft, active, suspended, dissolved);
- `created_at` (time/height);
- optional `jurisdiction_code` and external identifiers where a jurisdiction adapter module binds them.

### 2.2 Extensions

Modules MAY extend entity models with additional fields stored in module-specific state, but MUST NOT redefine or change the meaning of core fields.

---

## 3. Wallet and account structure

### 3.1 Wallet types

Canonical wallet types SHOULD include, at minimum:

- `MERCHANT` – operational inflows from customers or clients.
- `DONATION` – donations and grants received by nonprofits.
- `OPERATING_TREASURY` – primary operating funds.
- `RESERVES` – strategic reserves or buffers.
- `PROGRAM` – optional dedicated program wallets for nonprofits.

Wallet records SHOULD include:

- `wallet_id` or on-chain address;
- `entity_id` owner;
- `wallet_type`;
- `active` flag;
- optional metadata (e.g. labels, jurisdiction flags).

### 3.2 Mapping to accounting concepts

Wallets are not accounts in a double-entry ledger, but in practice:

- inflows to `MERCHANT` and `DONATION` wallets correspond to revenue and donations;
- outflows from `OPERATING_TREASURY` and `PROGRAM` wallets correspond to expenses and allocations.

Downstream tools MAY maintain full double-entry ledgers using tagged events emitted by the Hub.

---

## 4. Transaction and event schemas

### 4.1 Tagged accounting events

For each tagged event, the Hub and indexers SHOULD record:

- `tx_hash` and `event_index`;
- `entity_id` (where applicable);
- `from_wallet` and `to_wallet` (or external address);
- `amount` and `denom`;
- `direction` relative to the entity (inflow or outflow);
- `category_code` (see section 5);
- optional `program_tag`, `project_tag`, or other contextual tags;
- optional `evidence_ref` – hash or pointer to off-chain evidence;
- `timestamp` and `block_height`.

### 4.2 Evidence references

Evidence references MAY point to:

- IPFS or other content-addressable storage hashes;
- URLs or document IDs in external systems (with appropriate disclaimers);
- references to attestations recorded by modules.

References SHOULD be treated as hints; the Hub does not validate external content beyond basic format checks.

---

## 5. Chart of accounts and tagging

### 5.1 Category codes

The chart of accounts for v0.1 aims to be:

- small enough to be usable by small teams;
- structured enough to enable meaningful analysis across entities.

Example high-level categories (non-exhaustive) include:

- `REV_OPERATING` – operating revenue;
- `REV_NONOPERATING` – non-operating revenue;
- `DONATION_GENERAL` – unrestricted donations;
- `DONATION_RESTRICTED` – restricted donations;
- `EXP_PAYROLL` – payroll and compensation;
- `EXP_VENDOR` – vendor and contractor payments;
- `EXP_GRANTS` – grants to third parties (nonprofits);
- `CAPEX` – capital expenditures;
- `TREASURY_MOVEMENT` – internal treasury rebalancing.

Governance MAY expand or refine the chart over time, but SHOULD preserve backwards compatibility where possible.

### 5.2 Tags

Tags provide additional granularity, for example:

- `program_tag` – e.g. “Education”, “Health”, “Admin”.
- `region_tag` – e.g. ISO country or region codes.
- `counterparty_tag` – hashed or pseudo-anonymous counterparty identifier where appropriate.

Tags MUST be:

- drawn from controlled vocabularies where defined;
- documented and discoverable by indexers and tools;
- stable over time, with changes carefully managed.

---

## 6. Versioning and migration

### 6.1 Schema versioning

Every schema or major data structure defined in this spec SHOULD carry:

- a version identifier (e.g. `v0.1`, `v0.2`);
- a clear description of changes between versions.

Breaking changes MUST be:

- proposed and approved via governance;
- accompanied by migration plans for existing data;
- documented in governance proposal records and public release notes.

### 6.2 Migrations

Migrations MAY be implemented via:

- on-chain upgrade handlers that transform stored state;
- off-chain tools that rewrite or re-index data from raw history;
- a combination of both.

Migrations MUST be:

- testable and reversible where feasible;
- accompanied by monitoring and validation checks;
- communicated clearly to affected entities and operators.
