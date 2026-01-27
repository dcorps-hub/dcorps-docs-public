# Protocol Interfaces

**Document type**: Engineering map  
**Doc ID**: ENG-PROTOCOL-INTERFACES  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/engineering/PROTOCOL_INTERFACES.md](/engineering/PROTOCOL_INTERFACES))  
**Last updated**: 2026-01-25

> Scope: High-level map of interface surfaces that implementations and integrators must support. This is not a full API reference; it points to normative specs.

---

## Core registry and governance surfaces

- Entity lifecycle, roles, wallets, governance actions: [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- Parameters and economics: [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS)

---

## Data and reporting surfaces

- Tagged event schemas and categories: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- Indexer expectations and queries: [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)

---

## Module and registry surfaces

- Module registry and lifecycle: [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES)
- Attestation modules and issuer registry behavior: [docs/spec/SPEC-ATTESTATIONS.md](/spec/SPEC-ATTESTATIONS)

---

## Interop and anchoring surfaces

- Document anchoring requirements: [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR)

---

## Conformance

- Required test coverage and report format: [docs/spec/SPEC-CONFORMANCE-TESTS.md](/spec/SPEC-CONFORMANCE-TESTS)

---

## Implementation notes

Contract ABIs, JSON-RPC usage, and event names are defined in [docs/engineering/API_SURFACES.md](/engineering/API_SURFACES) and should be mirrored in the contract code repo.
