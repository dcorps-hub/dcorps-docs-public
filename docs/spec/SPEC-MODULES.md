# dCorps – Module Protocol Standard

**Document type**: Normative spec  
**Doc ID**: SPEC-MODULES  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/spec/SPEC-MODULES.md`)

> Scope: Standard for protocol modules (jurisdiction adapter modules, sector frameworks, attestation modules, etc.) that extend the Hub without compromising its core invariants.

---

## 1. Introduction

Modules are the primary mechanism for extending the dCorps Hub with:

- jurisdiction adapter logic (e.g. entity recognition, filings);
- sector frameworks (e.g. nonprofit program taxonomies, ESG labeling);
- attestations and reputation systems;
- advanced workflows that should not live in the Hub’s minimal core.

This spec defines:

- how modules are described, registered, activated, and deprecated;
- which interfaces modules MUST implement;
- how permissions and capabilities are modeled;
- how modules interact with governance and other modules.

The design goal is to allow rapid innovation at the module layer while keeping the Hub stable, neutral, and conservative.

---

## 2. Module lifecycle

The lifecycle of a module includes at least the following stages:

1. **Draft** – module is being designed and not yet proposed on-chain.
2. **Proposed** – module registration proposal has been submitted for governance review.
3. **Active** – module has been approved and is available for entities to attach.
4. **Deprecated** – module is no longer recommended for new attachments but remains available for existing ones.
5. **Withdrawn** – module is disabled; new attachments are forbidden and existing ones must transition away.

### 2.1 Registration

Module registration MUST be performed via a governance proposal that includes:

- module name and unique identifier;
- module type (e.g. jurisdiction, sector, attestation);
- code or implementation reference (e.g. module binary or contract address);
- version and upgrade strategy;
- security review summary and risk classification;
- any required parameters, documented in `SPEC-PARAMS.md`.

Upon approval, the module enters the `Active` state and is recorded in the module registry.

### 2.2 Upgrade and deprecation

Upgrades MAY be handled via:

- in-place upgrades, where the implementation behind the same Module ID is updated; or
- versioned modules, where a new Module ID supersedes an older one.

In both cases:

- governance MUST approve the change;
- entities MUST have a clear migration path and timeline;
- risk and compatibility impacts MUST be documented in the Decision Log.

Deprecation and withdrawal MUST be communicated clearly and SHOULD include automated safeguards where feasible (e.g. preventing new attachments after a certain block height).

---

## 3. Required interfaces

Each module MUST conform to a standard interface depending on its type. At a minimum, modules MUST implement:

- **Initialization** – called when the module is first activated and when each entity attaches to it.
- **Query** – read-only interfaces that allow other modules, the Hub, and indexers to retrieve module state.
- **Hook handlers** – callbacks for relevant Hub or cross-module events (see below).

### 3.1 Event hooks

The Hub provides hooks for events such as:

- entity creation, update, and lifecycle changes;
- role and wallet updates;
- tagged accounting events;
- governance proposal lifecycle events;
- sub chain recognition changes and anchor acceptance.

Modules MAY subscribe to subsets of these events and MUST handle them deterministically. Failure to handle an event MUST fail the relevant transaction rather than leaving state inconsistent.

### 3.2 Capability interface

Modules MUST declare the capabilities they require, such as:

- read access to entity metadata and wallets;
- ability to enforce additional validation rules on specific message types;
- ability to emit attestations or flags that affect risk labels or recognition.

The Hub MUST enforce that modules can only exercise declared and granted capabilities.

---

## 4. Permission and capability model

The Hub uses a capability-based model to constrain module power.

### 4.1 Capability categories

Capabilities MAY include:

- **Read-only** – module can read specific parts of Hub state.
- **Advisory** – module can emit recommendations or risk flags but cannot block actions.
- **Enforcement** – module can veto or modify specific operations when attached.
- **Anchoring** – module can verify and interpret sub chain anchors.

Modules SHOULD default to the least privilege necessary. Governance SHOULD scrutinize requests for enforcement capabilities, especially when they affect many entities.

### 4.2 Attachment to entities

Entities MAY attach modules subject to:

- eligibility rules defined by the module (e.g. only nonprofits, only certain jurisdictions);
- governance-imposed constraints (e.g. some modules require explicit governance approval).

When a module is attached to an entity:

- its declared enforcement capabilities become active for that entity;
- it MAY store module-specific state bound to the entity;
- it MUST respect and not undermine the Hub’s core invariants.

---

## 5. Registry and discovery

The module registry maintained by the Hub MUST expose:

- module metadata (name, ID, type, version, description);
- status (proposed, active, deprecated, withdrawn);
- risk tier or labels (e.g. experimental, audited, high-risk);
- governance references (proposal IDs, decision IDs).

This registry enables:

- explorers and dashboards to present modules clearly to users;
- entities to discover relevant modules by type, sector, or jurisdiction;
- automated tools to reason about which modules are active on which entities.

Indexers SHOULD maintain a denormalized view of this registry for efficient querying, as detailed in `SPEC-INDEXER.md`.

---

## 6. Security and compatibility requirements

Modules MUST be designed and reviewed with the following in mind:

1. **Isolation** – a malfunctioning or malicious module MUST NOT compromise core Hub invariants.
2. **Determinism** – module logic MUST be deterministic and replayable under the consensus rules.
3. **Version compatibility** – modules MUST declare which Hub and dependency versions they support.
4. **Graceful failure** – where possible, failures SHOULD fail specific transactions rather than halting the chain.
5. **Auditability** – module state and key decisions SHOULD be observable and auditable via indexers.

Governance SHOULD require audits or equivalent review for modules with high-impact capabilities, and SHOULD maintain a public record of those reviews in the security documentation (`AUDIT-PLAN.md`, `BUG-BOUNTY.md`).
