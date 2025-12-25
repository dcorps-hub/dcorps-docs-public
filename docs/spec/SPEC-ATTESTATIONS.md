# Attestation Modules and Interface Standards

**Document type**: Normative spec  
**Doc ID**: SPEC-ATTESTATIONS  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/spec/SPEC-ATTESTATIONS.md](/spec/SPEC-ATTESTATIONS))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Defines the minimum required record format and lifecycle rules for attestation-style protocol modules, plus reference interface requirements for presenting attestation outputs.

This spec should be read together with:

- [docs/master/DCHUB_MASTER.md](/master/DCHUB_MASTER) (attestation design intent and boundaries),
- [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE) (entity IDs and core objects),
- [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES) (module lifecycle and compatibility requirements),
- [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA) (schema and anchoring conventions where applicable),
- [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER) (reference explorer and indexer behavior).

---

## 1. Purpose and boundaries

Attestations and reputation are not part of the Hub kernel. They are implemented as **optional protocol modules** that can be attached to, or used alongside, Hub entities by choice.

This spec exists to ensure that when attestations are used:

- records are structured and machine-readable;
- lifecycle state (active/expired/disputed/etc.) is explicit and queryable;
- disputes and corrections are first-class, not UI conventions; and
- explorers and dashboards present attestations with clear provenance and labels.

Non-goals:

- adjudicating truth at the Hub level;
- forcing a universal issuer set; or
- creating a single “official” interface or weighting policy.

---

## 2. Attestation record format (required)

An attestation is an issuer-signed statement published by an attestation module.

Attestation modules MUST:

- use structured, machine-readable records; and
- avoid relying on free-text accusations as the primary signal.

A compliant attestation record MUST include, at minimum:

- **Issuer identity** (DID and signing address).
- **Issuer scope** (for example jurisdiction authority, auditor, sector framework operator, oversight body, analytics provider).
- **Subject entity ID** (and optional sub chain ID if relevant).
- **Attestation type** (enumerated), for example:
  - Recognition active
  - Recognition withdrawn
  - Audit or review anchor published
  - Reporting completeness signal
  - Policy compliance signal
- **Reason codes** (enumerated), sufficient to interpret the attestation without narrative text.
- **Evidence anchors** (hashes of documents, reports, or module outputs).
- **Validity window**:
  - issued at
  - effective at
  - optional expiry
- **Lifecycle status** (enumerated):
  - active
  - expired
  - superseded
  - disputed
  - withdrawn

Attestation types, reason codes, and evidence anchor schemas MUST be versioned, published, and upgradeable through governance of the module (not via informal UI conventions).

---

## 3. Issuer classes and issuer registries (optional, module-local)

Attestation modules MAY maintain an issuer registry to make trust assumptions explicit.

Issuer registries are module-local (not universal). Different modules MAY use different issuer sets.

If a module implements an issuer registry, it SHOULD distinguish:

- **Registered issuer**
  - added to the module’s issuer registry through the module’s governance process, with:
    - DID and signing addresses,
    - declared scope,
    - public issuer metadata (including contact channels),
    - published correction process,
    - optional bond requirements.
- **Unregistered issuer**
  - any other issuer; unregistered attestations may still be recorded, but do not receive default weighting in reference interfaces that follow the module’s weighting standard.

---

## 4. Issuer registry governance (required if issuer registry exists)

Issuer registry changes MUST be executed through transparent governance.

Adding or removing a registered issuer MUST require an on-chain proposal that includes:

- issuer identity and scope,
- rationale and supporting evidence,
- any required bond amount and conditions, and
- conflict and affiliation disclosures.

Registered issuer status MAY be suspended or revoked for objective reasons such as:

- proven fraud or misrepresentation,
- repeated publication of materially false attestations without timely correction,
- failure to follow the issuer’s published correction process, or
- cryptographic key compromise without appropriate rotation.

Issuer registry governance does not adjudicate truth. It defines which issuers a specific module treats as default-weighted inputs.

---

## 5. Dispute and correction signaling (required)

Attestation modules MUST support a symmetric dispute and correction pattern:

- entities can publish a signed dispute record that references a specific attestation and anchors response evidence;
- issuers can withdraw, correct, or supersede attestations with new signed statements; and
- disputed status is a first-class lifecycle state, not a UI convention.

The Hub does not adjudicate disputes. Dispute resolution occurs through:

- the issuer’s correction process,
- module governance (for module-level integrity issues), and
- off-chain legal processes where jurisdictions or contracts apply.

---

## 6. Reference interface requirements (required for interfaces that display attestations)

Reference explorers and dashboards that choose to display attestation module outputs MUST:

- allow users to select which attestation modules are shown, and support “no module selected” as a valid default state;
- display issuer identity, issuer scope, registry status (registered or unregistered), attestation type, reason codes, evidence anchors, and validity window;
- label disputed, expired, and superseded attestations prominently; and
- treat detachment from an attestation or reputation module as a neutral structural fact, not as deletion of history.

No reference interface is consensus. Any interface can be forked or replaced, and any operator can publish an alternative weighting policy. The protocol remains neutral regardless of interface decisions.

---

## 7. Spam resistance and deposits (required for usability)

To keep attestation modules usable and resistant to spam, attestation modules are expected to implement spam-resistance rules.

### 7.1 Publishing limits (required)

- Each issuer MAY be subject to rate limits per period for selected attestation types.
- Attestation modules SHOULD enforce maximum payload sizes for attestation metadata, with evidence stored as anchors.

### 7.2 Deposits and bonds (optional)

For selected high-impact attestation types, a module MAY require a deposit or bond:

- the deposit is denominated in DCHUB or USDC, as defined by module parameters;
- deposits are designed to price spam and abuse, not to create an endorsement market; and
- any slashing or forfeiture conditions MUST be objective, verifiable, and narrowly defined (for example invalid schema, duplicate flooding, or proven key misuse), not based on the content or popularity of an attestation.

Registered issuers MAY be exempt from per-attestation deposits but MAY be required to maintain a module-level issuer bond.

### 7.3 Dispute rights (required)

Entities MUST be able to publish dispute records without deposits. Disputes MUST reference the specific attestation and include evidence anchors. Reference interfaces MUST surface disputes prominently for any disputed attestation they display.
