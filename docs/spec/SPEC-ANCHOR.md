# Anchoring Standard

**Document type**: Normative spec  
**Doc ID**: SPEC-ANCHOR  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR))  
**Last updated**: 2026-01-25

> Scope: How entities anchor documents and evidence to the Hub and how the Hub validates and records anchors.

---

## 1. Introduction

The dCorps Hub allows entities to anchor documents and evidence on-chain to create verifiable references without storing full documents on-chain.

This spec defines:

- the structure of anchor records;
- how anchors must be submitted;
- how the Hub validates and records anchors; and
- how corrections and superseding anchors are modeled.

Anchoring enables:

- durable references to bylaws, resolutions, invoices, grant agreements, and reports;
- consistent audit trails for governance and accounting actions; and
- reproducible provenance for indexers and explorers.

---

## 2. Anchor data model

Each accepted anchor is a record in Hub state containing at least:

- **Anchor ID** – unique identifier for the anchor record;
- **Entity ID** – the entity that owns the anchor;
- **Anchor type** – document, resolution, invoice, grant, policy, report, or other cataloged types;
- **Commitment hash** – cryptographic hash of the anchored document or evidence;
- **Optional URI** – pointer to off-chain storage (IPFS, HTTPS, etc.);
- **Reference ID** – optional link to a related on-chain object (invoice, grant, contract);
- **Timestamp** – submission time from the Hub’s perspective;
- **Submitter address** – on-chain address that submitted the anchor.

Anchors MUST be immutable once accepted. Corrections MUST be modeled as new anchors that reference the prior anchor ID.

---

## 3. Anchoring process

### 3.1 Submission

Anchors are submitted via dedicated messages or contract calls that include:

- the entity identifier;
- the commitment hash and anchor type;
- optional URI and reference IDs.

Only authorized entity roles (e.g. secretary, admin, treasurer) MAY submit anchors for that entity. Authorization rules are defined in `SPEC-CORE.md` and `SPEC-DATA.md` role catalogs.

### 3.2 Fees

Anchor submissions MAY require a protocol-level fee as defined in `SPEC-PARAMS.md` and [docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS).

---

## 4. Validation and failure handling

### 4.1 Validation

Upon submission, the Hub MUST perform basic validation including:

- structural checks (required fields present, sizes within limits);
- authorization checks (submitter has required role);
- reference checks (if a reference ID is provided, it MUST exist and be accessible).

### 4.2 Failure modes

If validation fails, the Hub MUST reject the anchor and emit a failure event. The Hub MUST NOT mutate prior anchors or silently overwrite anchor data.

---

## 5. Indexing and presentation

Indexers and explorers SHOULD surface:

- anchor type and hash;
- linked entity and reference IDs;
- any superseding anchors; and
- provenance labels for off-chain storage URIs.

Anchors SHOULD be presented as evidence pointers, not as claims of legal validity or regulatory compliance.
