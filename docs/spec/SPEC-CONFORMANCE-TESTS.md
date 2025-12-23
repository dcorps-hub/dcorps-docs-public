# dCorps – Compatibility and Conformance Tests

**Document type**: Normative spec  
**Doc ID**: SPEC-CONFORMANCE-TESTS  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/spec/SPEC-CONFORMANCE-TESTS.md`)

> Scope: Defines the minimum conformance test coverage and reporting format for implementations that claim compatibility with dCorps specifications (Hub implementations, protocol modules, indexers, explorers, and reporting tooling).

This spec should be read together with:

- `docs/master/DCHUB_MASTER.md` (design intent and ecosystem expectations),
- `docs/spec/SPEC-CORE.md` (core state and message families),
- `docs/spec/SPEC-DATA.md` (schemas, tags, chart of accounts),
- `docs/spec/SPEC-MODULES.md` (module standard),
- `docs/spec/SPEC-ANCHOR.md` (sub chain anchoring standard),
- `docs/spec/SPEC-INDEXER.md` (reference indexer and explorer behavior).

---

## 1. Purpose

dCorps standards are intended to be interoperable across multiple implementations and tooling stacks. Conformance tests exist to:

- reduce ambiguity about what “compatible” means;
- catch breaking changes early (schemas, events, invariants);
- give integrators a predictable baseline; and
- make claims verifiable (tests produce artifacts that can be inspected and anchored).

This document does not mandate a specific test runner or programming language. It defines the **minimum required coverage** and the **report format** for publishing conformance results.

---

## 2. Conformance claims and versioning

An implementation that claims compatibility SHOULD state its conformance scope explicitly, for example:

- **Hub implementation conformance**: conforms to `SPEC-CORE.md` + referenced specs at stated versions.
- **Module conformance**: conforms to `SPEC-MODULES.md` and any module-specific interfaces/schemas it claims to implement.
- **Indexer / explorer conformance**: conforms to `SPEC-INDEXER.md` (and required schema parsing from `SPEC-DATA.md`).
- **Reporting conformance**: produces cash-based operating and allocation views consistent with the standards in the Master Reference and `SPEC-DATA.md`.

Conformance claims MUST name:

- the target document(s) and versions (or git commit hashes);
- the tested artifact (binary, contract, module build, indexer version); and
- the environment (chain ID / network, or a deterministic test harness).

---

## 3. Required test coverage (minimum)

### 3.1 Schema conformance (required)

Schema conformance tests MUST verify that:

- emitted events and exported records follow the required field sets and encodings defined in `SPEC-DATA.md`;
- category and tag codes used in examples or reference exports match the chart of accounts and tag registries; and
- unknown or extension fields are handled according to the extension rules (no silent reinterpretation of standard fields).

### 3.2 Core protocol behavior (required for Hub implementations)

A conforming Hub implementation MUST be tested for:

- entity creation, status changes, and metadata updates;
- canonical wallet binding and resolution behavior;
- role and authority updates (including rejection of unauthorized changes);
- accounting event recording and required tag validation where applicable; and
- governance-controlled registries (module registry and recognized sub chain registry) where present.

Tests MUST include both expected-success and expected-failure cases (for example, invalid authority or malformed payloads).

### 3.3 Module conformance (required for modules)

A conforming protocol module MUST be tested for:

- lifecycle flows required by `SPEC-MODULES.md` (registration, upgrade, deprecation/withdrawal where applicable);
- deterministic behavior given the same inputs (no reliance on off-chain state for consensus-critical outcomes);
- permissioning and authority checks for any state writes; and
- schema correctness for any module-emitted events or records.

Modules that publish attestations SHOULD also test dispute/correction lifecycle behavior (see `SPEC-ATTESTATIONS.md` if applicable).

### 3.4 Anchoring and recognition (required where implemented)

Implementations that support recognized sub chains MUST be tested for:

- acceptance criteria and monotonicity rules for anchors (`SPEC-ANCHOR.md`);
- correct handling of invalid anchors and failure cases;
- correct recording of recognition tiers / labels and their transitions; and
- correct surfacing of those labels to downstream indexers and explorers.

### 3.5 Indexer and explorer behavior (required for reference tooling)

Indexers and explorers that claim compatibility MUST be tested for:

- accurate ingestion and mapping of on-chain events into exported formats (`SPEC-INDEXER.md`);
- correct entity discovery views, including status labeling for inactive entities;
- correct module and sub chain registry presentation, including recognition tiers; and
- consistent derived reporting views where supported (cash-based and allocation views).

Where token supply metrics are displayed, tooling SHOULD distinguish minted supply vs circulating supply and show vesting/unlock evidence when available (see the Master Reference token terminology).

---

## 4. Conformance report (required)

Conformance tests MUST produce a report that can be published and independently reviewed.

At minimum, a conformance report MUST include:

- **Report ID** (unique identifier)
- **Date (UTC)**
- **Subject** (what was tested: binary/module/indexer)
- **Target versions** (spec versions or commit hashes)
- **Environment** (chain ID / network, or harness ID)
- **Results summary** (pass/fail by category)
- **Evidence** (hashes of artifacts, logs, and test vectors where publishable)

Recommended (but optional):

- links to reproducible builds,
- links to anchored evidence hashes on-chain, and
- notes for any known limitations (explicitly labeled as such).

Suggested minimal format:

```text
Report ID: CONF-YYYYMMDD-XXXX
Date (UTC): YYYY-MM-DD
Subject: <name/version/commit>
Target specs: SPEC-CORE v0.1, SPEC-DATA v0.1, ...
Environment: <chain-id or harness>

Results:
- Schema conformance: PASS
- Core protocol behavior: PASS
- Module conformance: N/A
- Anchoring and recognition: PASS
- Indexer/explorer behavior: PASS

Evidence:
- Build artifact hash: <sha256>
- Test logs hash: <sha256>
- Test vectors hash: <sha256>
```

---

## 5. Publication and verification

Conformance reports SHOULD be:

- stored in a public repository (or otherwise publicly accessible); and
- optionally anchored on-chain by hash so that later readers can verify the report has not been altered.

When confidentiality constraints apply (for example, undisclosed exploit details), reports MAY omit sensitive details, but MUST still:

- state what was omitted and why; and
- include hashes of the full artifacts shared privately with authorized reviewers.

---

## 6. Change management

Conformance requirements evolve as specs evolve. When any referenced spec introduces a breaking change:

- conformance reports MUST clearly state which versions they apply to; and
- updated test vectors SHOULD be published as part of the same change process that updates the spec.

Conformance claims are only meaningful when versioned and when evidence is available for review.
