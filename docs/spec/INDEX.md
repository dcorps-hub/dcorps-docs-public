# Hub – Specification Index (Normative)

**Document type**: Spec index  
**Doc ID**: SPECS-INDEX  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/spec/INDEX.md](/spec/INDEX))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Canonical entry point for the normative protocol specifications. These documents are developer and auditor oriented and define “what is” and “what must be” for compatibility.

---

## Who this is for

Use this section if you are:

- building an indexer, explorer, or analytics pipeline;
- integrating wallets or applications that create entities and emit tagged events;
- implementing modules or sub chain anchoring;
- validating compatibility claims (conformance).

If you want a high-level onboarding path first, start at [docs/welcome/INDEX.md](/welcome/INDEX).

---

## Guides vs specs (why there are two)

- [docs/engineering/*](/engineering) is descriptive guidance for integrators.
- [docs/spec/*](/spec) is normative: rules, schemas, and compatibility requirements.
- [docs/spec/SPEC-CORE_PUBLIC.md](/spec/SPEC-CORE_PUBLIC) provides a reader-facing overview of the core spec.

When there is any conflict, treat [docs/spec/*](/spec) as the source of truth.

---

## Recommended reading order (developers)

1. [docs/engineering/TECHNICAL_OVERVIEW.md](/engineering/TECHNICAL_OVERVIEW) (context and boundaries)
2. [docs/engineering/INTEGRATION_GUIDE.md](/engineering/INTEGRATION_GUIDE) (integration checklist)
3. [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE) + [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA) (core behavior + data standards)
4. [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER) (if you index or build explorers)
5. [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES) (if you build modules)
6. [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR) (if you support sub chain anchoring)
7. [docs/spec/SPEC-ATTESTATIONS.md](/spec/SPEC-ATTESTATIONS) (if you implement attestations)
8. [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS) (parameters and economics model)
9. [docs/spec/SPEC-CONFORMANCE-TESTS.md](/spec/SPEC-CONFORMANCE-TESTS) (if you publish compatibility claims)

---

## Spec set (normative)

- Core protocol: [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- Data standards, schemas, tag catalogs: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- Module standard: [docs/spec/SPEC-MODULES.md](/spec/SPEC-MODULES)
- Attestations standard: [docs/spec/SPEC-ATTESTATIONS.md](/spec/SPEC-ATTESTATIONS)
- Sub chain anchoring: [docs/spec/SPEC-ANCHOR.md](/spec/SPEC-ANCHOR)
- Parameters and economics model: [docs/spec/SPEC-PARAMS.md](/spec/SPEC-PARAMS)
- Reference indexer behavior: [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)
- Conformance tests and reporting: [docs/spec/SPEC-CONFORMANCE-TESTS.md](/spec/SPEC-CONFORMANCE-TESTS)

---

## Implementation notes (non-normative)

- Engineering entry point: [docs/engineering/INDEX.md](/engineering/INDEX)
- Interop and IBC overview: [docs/interop/INDEX.md](/interop/INDEX)

---

## Publication note

This repo is public by default. Safety-sensitive operational material (not needed for third-party compatibility) belongs under `dcorps-docs-private/docs/restricted/` and must be excluded from public website/exports (policy: [docs/policy/POL-DOCS-PUBLICATION.md](/policy/POL-DOCS-PUBLICATION)).
