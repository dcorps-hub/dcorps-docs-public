# dCorps – Sub Chain Anchoring Standard

**Document type**: Normative spec  
**Doc ID**: SPEC-ANCHOR  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/spec/SPEC-ANCHOR.md`)

> Scope: How recognized sub chains anchor commitments back to the Hub and how the Hub interprets them for recognition, security, and observability.

---

## 1. Introduction

The dCorps Hub recognizes external sub chains that:

- implement entity, governance, or financial logic beyond the Hub’s minimal core;
- periodically anchor their state back to the Hub via succinct commitments;
- follow clear security and recognition standards set by governance.

This spec defines:

- the structure of anchor commitments;
- how and when anchors must be submitted;
- how the Hub validates and records anchors;
- how recognition tiers depend on anchoring behavior.

Anchoring enables:

- independent chains to reuse the Hub as a **security and evidence root**;
- explorers and auditors to correlate activity across Hub and sub chains;
- consistent treatment of sub chains in governance decisions and risk frameworks.

---

## 2. Anchor data model

Each accepted anchor is a record in Hub state containing at least:

- **Sub chain ID** – unique identifier for the recognized chain;
- **Anchor height** – block height or epoch number on the sub chain;
- **Commitment hash** – cryptographic commitment to the sub chain state or subset (e.g. Merkle root);
- **Previous anchor reference** – pointer to the last accepted anchor for that sub chain;
- **Timestamp** – submission time from the Hub’s perspective;
- **Metadata** – optional structured fields (e.g. version, anchor type, attested metrics).

Anchors MUST be immutable once accepted. Any correction or re-anchoring MUST be modeled as a new anchor with explicit relationships to previous ones.

The exact structure of the commitment hash and metadata MAY vary by sub chain, but MUST be:

- well-documented;
- clearly versioned where formats can evolve;
- sufficient to allow independent verification by indexers and auditors.

---

## 3. Anchoring process and frequency

### 3.1 Submission

Anchors are submitted via dedicated messages on the Hub that include:

- the sub chain identifier;
- the commitment payload (height, hash, metadata);
- proof of authorization (e.g. signatures from designated sub chain operators or validators).

Only entities authorized for a given sub chain MAY submit anchors for it. Authorization rules MUST be registered and maintained in the sub chain registry.

### 3.2 Frequency and liveness

For each recognition tier, governance MUST define:

- **minimum anchoring frequency** (e.g. at least once every N sub chain blocks or every T minutes);
- **maximum allowed lag** between the sub chain’s anchor height and the Hub’s current height/time.

Failure to meet liveness requirements MAY:

- trigger automatic risk flags;
- result in recognition tier downgrade;
- eventually lead to recognition withdrawal if unaddressed.

### 3.3 Failure and resynchronization

If a sub chain experiences a reorg or rollback:

- it MUST submit new anchors that reflect the corrected history;
- it SHOULD provide metadata that allows auditors to detect and analyze the reorg;
- governance MAY treat repeated severe reorgs as a risk factor.

The Hub itself does not rewind; it records a sequence of anchors that may include corrected commitments, as long as they follow the rules in this spec.

---

## 4. Verification and failure handling

### 4.1 Verification

Upon anchor submission, the Hub MUST perform basic validation including:

- structural checks (required fields present, sizes within limits);
- authorization checks;
- monotonicity checks (anchor height is greater than the last accepted height for that sub chain).

Deeper verification (e.g. checking that the commitment matches the sub chain’s published state) MAY be delegated to:

- off-chain monitors and indexers;
- watchdog modules with read access to the sub chain;
- third-party attestations.

Verification approaches and guarantees SHOULD be documented for each recognized sub chain.

### 4.2 Failure modes

If verification fails or suspicious patterns are detected (e.g. conflicting anchors, impossible heights), the Hub and governance MAY:

- reject the anchor outright;
- mark the sub chain with a higher risk tier while continuing to accept anchors;
- initiate governance action to downgrade or remove recognition;
- trigger slashing of recognition deposits if conditions are met.

All anchor acceptance or rejection decisions MUST be logged with sufficient detail for forensics.

---

## 5. Recognition tiers and behavior

Recognition tiers are labels attached to sub chains that:

- communicate risk and maturity to users and integrators;
- determine economic requirements such as deposits and fees;
- control how strictly anchoring requirements are enforced.

Example tiers include:

- **Experimental** – early-stage chains with limited history; higher liveness tolerance, stricter warnings.
- **Standard** – chains that meet full anchoring and security requirements.
- **Restricted** – chains with known issues; still recognized but with clear warnings and possible limitations.
- **Revoked** – chains that no longer meet minimum standards; anchors are no longer accepted.

Governance MUST define:

- criteria for moving between tiers;
- the anchoring requirements for each tier;
- any automatic or semi-automatic triggers for downgrades (e.g. extended liveness failures or proven misbehavior).

Indexers and explorers SHOULD surface recognition tiers prominently when presenting sub chain data and cross-Hub views, so that users can make informed decisions.

