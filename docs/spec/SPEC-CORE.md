# Core Specification

**Document type**: Normative spec  
**Doc ID**: SPEC-CORE  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/spec/SPEC-CORE.md](/spec/SPEC-CORE))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Core behavior of the dCorps Hub chain as a registry and coordination layer for entities, roles, wallets, and baseline governance. This document is normative where explicitly stated.

This spec should be read together with:

- [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG) (Whitepaper Long – conceptual and narrative source of truth).
- [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA) (data models and schemas).
- [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS) (parameters and economics).
- [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES) (module standard).
- [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR) (anchoring standard).

Where this document conflicts with an approved, versioned upgrade proposal, the approved proposal and resulting implementation control.

---

## 1. Introduction

### 1.1 Purpose

The dCorps Hub is a Cosmos-based blockchain that provides a neutral, long-lived registry and coordination layer for **corporations** and **nonprofit organizations** that operate primarily in stablecoins.

This core specification defines:

- the Hub’s high-level architecture as an **entity ledger** and registry;
- the minimal set of on-chain objects (entities, roles, wallets, modules, anchors) and their relationships;
- the baseline transaction and governance flows needed to register and operate entities;
- invariants and constraints that all conforming implementations must preserve.

The goal is to keep the Hub itself **minimal, conservative, and neutral**, while allowing rich behavior to live in protocol modules, jurisdiction adapter modules, sub chains, and off-chain applications.

### 1.2 Audience

This spec is intended for:

- core protocol engineers implementing the Hub chain;
- integrators building applications, modules, and explorers on top of the Hub;
- auditors and reviewers assessing correctness and security of the base layer;
- governance participants evaluating proposed protocol changes.

### 1.3 Normative references

The following documents are normative where referenced:

- `WHITEPAPER_LONG.md` – dCorps Hub whitepaper (long) (conceptual design and rationale).
- `SPEC-DATA.md` – Data Standards and Schemas.
- `SPEC-PARAMS.md` – Protocol Parameters and Economics.
- `SPEC-MODULES.md` – Module Protocol Standard.
- `SPEC-ANCHOR.md` – Sub Chain Anchoring Standard.

---

## 2. Terminology and notation

For the purposes of this spec:

- **Hub** – the dCorps Hub chain, including its consensus, state machine, and governance.
- **Entity** – an on-chain organizational object representing a corporation, nonprofit, foundation, or similar structure.
- **Hub corporation** – an entity modeled as a corporation on the Hub, with roles and units as defined in the Whitepaper Long.
- **Hub nonprofit** – an entity modeled as a nonprofit/NGO on the Hub, with board-driven governance and allocation rules.
- **Canonical wallet** – a designated on-chain address (or address set) associated with an entity for specific purposes (e.g. merchant wallet, donation wallet, treasury wallet).
- **Tagged event** – an on-chain event or transaction output annotated with categories and tags per `SPEC-DATA.md`, enabling cash-based operating reporting.
- **Module** – a protocol module that extends Hub functionality under `SPEC-MODULES.md` (e.g. jurisdiction adapter module, sector framework, attestation module).
- **Recognized sub chain** – a separate blockchain that implements recognition and anchoring rules under `SPEC-ANCHOR.md` and is registered on the Hub.
- **Recognition tier** – a label describing the level and type of recognition granted to a sub chain by the Hub (e.g. experimental, standard, restricted).
- **Governance** – the combination of on-chain voting, parameter changes, and upgrade mechanisms that affect the Hub protocol.

Terms such as **MUST**, **MUST NOT**, **SHOULD**, and **MAY** are to be interpreted as described in RFC 2119 when used in normative requirements.

---

## 3. High-level architecture

The Hub is a specialized Cosmos-based chain with the following high-level responsibilities:

1. **Entity registry**
   - Assign globally unique identifiers for entities.
   - Store minimal canonical metadata and state (type, lifecycle, recognition).
2. **Wallet and accounting backbone**
   - Bind canonical wallets to entities.
   - Provide primitives for tagged inflow/outflow events that downstream systems can aggregate into cash-based operating reports.
3. **Governance and role modeling**
   - Represent roles (e.g. board members, officers, signers) and their powers at the entity level.
   - Provide hooks for approval workflows and programmatic controls.
4. **Module and sub chain integration**
   - Maintain a registry of protocol modules and recognized sub chains.
   - Provide anchoring and recognition primitives, not business logic for each domain.

The Hub does not:

- custody funds on behalf of users beyond the default behavior of accounts on a proof-of-stake chain;
- replace legal recognition or filings, which remain the responsibility of off-chain jurisdictions and processes;
- run application-specific logic that can reasonably live in modules or separate chains.

---

## 4. State and data model

This section describes the conceptual state objects. Concrete schema definitions are given in `SPEC-DATA.md`.

### 4.1 Entities

The Hub MUST store a registry of `Entity` records. Each entity record includes at least:

- a stable **Entity ID** (primary key);
- **Entity type** (e.g. Hub corporation, Hub nonprofit, foundation, other) as enumerated in `SPEC-DATA.md`;
- **Display name** and optional human-readable metadata;
- **Lifecycle status** (e.g. draft, active, suspended, dissolved);
- **Creation height** and **creation time**;
- **Owner-of-record** or originating controller at the time of creation;
- optional **jurisdiction binding** information for entities recognized via modules;
- optional reference to a **sub chain** if the entity is primarily represented there (promotion).

Each entity MUST have exactly one current lifecycle status at any given block height.

### 4.2 Roles and governance bindings

For each entity, the Hub MUST support a set of `RoleBinding` records that:

- associate a **role type** (e.g. director, trustee, officer, signer) with:
  - one or more on-chain addresses; and
  - optional off-chain identifiers (for display and audit purposes);
- define **powers** or capabilities (e.g. can propose governance, can sign specific transaction types, can approve allocations).

Role types and power mappings SHOULD be standardized in `SPEC-DATA.md`, and extended where needed by modules.

### 4.3 Canonical wallets

Each entity MAY have multiple canonical wallets, each with:

- a **wallet type** (e.g. merchant, donation, operating treasury, reserves);
- a bound on-chain address (or address set);
- optional metadata such as labels and jurisdiction flags.

Canonical wallet types MUST be drawn from the catalog defined in `SPEC-DATA.md`. Modules MAY define additional wallet types as long as they do not conflict with existing names and semantics.

### 4.4 Tagged events and accounting flows

The Hub MUST provide a way for flows through canonical wallets to be tagged with:

- **category codes** (high-level accounting categories);
- **program or business unit tags**;
- optional **evidence references** (e.g. hash pointers to invoices, contracts, grant agreements).

Tagging MAY be performed by:

- typed workflows built on the Hub itself, or
- external systems that emit tags via transactions to the Hub.

The Hub MUST NOT attempt to infer tags; tagging is an explicit action by entities, modules, or external tools.

### 4.5 Module registry

The Hub maintains a registry of protocol modules as described in `SPEC-MODULES.md`. For each module it stores:

- a **Module ID** and version;
- **module type** (e.g. jurisdiction, sector, attestation);
- **status** (e.g. proposed, active, deprecated, withdrawn);
- interface metadata needed for modules to integrate with the Hub.

### 4.6 Sub chain registry and anchors

The Hub stores metadata about recognized sub chains and their anchors as defined in `SPEC-ANCHOR.md`, including:

- **Sub chain ID** and chain identifiers;
- **recognition tier** and status;
- latest accepted anchor and related metadata.

---

## 5. Messages and transactions

This section describes conceptual message categories. Concrete encodings and field names are defined in the implementation and referenced in `SPEC-DATA.md`.

### 5.1 Entity registration and lifecycle

The Hub MUST support messages that allow:

1. **Register entity**
   - Inputs: entity type, display name, minimal metadata, initial roles, initial canonical wallets.
   - Effects: creates a new `Entity` with lifecycle status `active` (or `draft` if configured), assigns an Entity ID, emits an event.
   - Constraints: registration fee and gas as specified in `SPEC-PARAMS.md`.
2. **Update entity metadata**
   - Inputs: Entity ID, updated metadata.
   - Effects: updates non-critical fields only; ownership and lifecycle may require separate actions.
3. **Change lifecycle status**
   - Inputs: Entity ID, target status.
   - Effects: transitions between allowed statuses (e.g. active → suspended → active, active → dissolved).
   - Constraints: transitions MAY be gated by governance or module logic.

### 5.2 Roles and wallets

The Hub MUST support messages that:

- create, update, and revoke role bindings for an entity;
- bind or unbind canonical wallets;
- set limits or policies on specific wallet types (e.g. max outbound amount without approvals).

Authorization for such messages MUST be enforced using the existing role bindings and governance rules.

### 5.3 Tagged accounting events

The Hub SHOULD expose message types that allow:

- attaching tags to new transfers initiated through the Hub;
- attaching tags to previously recorded transactions (where allowed);
- emitting summary or reconciliation events from modules.

Implementations MUST ensure that tags are:

- persistently stored and queryable via indexers; and
- immutable once attached, except for corrections explicitly modeled by the protocol.

### 5.4 Governance

Core on-chain governance messages MUST at minimum cover:

- submitting governance proposals;
- depositing tokens in support or opposition (if applicable);
- voting;
- executing approved proposals.

Governance proposal types SHOULD include:

- parameter changes (see `SPEC-PARAMS.md`);
- module lifecycle actions (see `SPEC-MODULES.md`);
- sub chain recognition changes (see `SPEC-ANCHOR.md`);
- software upgrades (chain-wide).

### 5.5 Module integration hooks

The Hub MUST provide hooks for modules to:

- receive notifications about relevant events (e.g. entity creation, tag emission, governance outcomes);
- veto or modify effects where explicitly allowed by module capabilities (e.g. jurisdiction adapter module enforcing sanctions list checks).

The exact hook interface is defined in `SPEC-MODULES.md`.

---

## 6. Invariants and constraints

Conforming implementations MUST enforce at least the following:

1. **Entity ID uniqueness** – no two entities share the same Entity ID.
2. **Lifecycle consistency** – lifecycle transitions follow allowed patterns; dissolved entities cannot be reactivated without an explicit, separately modeled process.
3. **Wallet binding integrity** – a canonical wallet MUST NOT be bound to more than one entity for the same wallet type at the same time.
4. **Tag integrity** – once a tag is recorded it MUST NOT be silently modified; corrections MUST be modeled as explicit corrective events.
5. **Module isolation** – modules MUST NOT be able to corrupt core Hub invariants; failures in module logic MUST fail cleanly without compromising the base registry.
6. **Anchoring consistency** – anchors from recognized sub chains MUST satisfy the conditions in `SPEC-ANCHOR.md` or be rejected.

Implementations MAY strengthen these invariants but MUST document any additional constraints that impact integrators.

---

## 7. Governance hooks

The Hub’s core state (entities, roles, parameters, module registry, sub chain registry) is governed by on-chain mechanisms that:

- define who can propose changes;
- define which proposals require which thresholds and quorums;
- enforce timelocks or delay windows for sensitive actions where specified by policy.

At minimum:

- parameter changes MUST be gated by governance in accordance with `SPEC-PARAMS.md`;
- module activation/deactivation MUST be recorded in governance state under `SPEC-MODULES.md`;
- sub chain recognition tier changes MUST be traceable to explicit governance decisions.

Governance implementations SHOULD favor:

- long grace periods for breaking changes;
- strong transparency around votes and rationales;
- durable rationale in governance proposal metadata and public release notes (or equivalent public documentation).

---

## 8. Conformance

An implementation is considered **conformant** with SPEC-CORE if:

1. It exposes all state objects and message categories defined in this document, with semantics that are materially equivalent.
2. It enforces the invariants and constraints defined in section 6.
3. It respects any cross-spec references to `SPEC-DATA.md`, `SPEC-PARAMS.md`, `SPEC-MODULES.md`, and `SPEC-ANCHOR.md`.
4. It documents any deliberate deviations or extensions and the rationale for them.

Integrators SHOULD treat this spec as the authoritative description of expected Hub behavior and SHOULD report observed deviations via the project’s issue tracker and governance channels.
