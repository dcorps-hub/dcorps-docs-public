# dCorps Hub – Specification Index (Normative)

**Document type**: Spec index  
**Doc ID**: SPECS-INDEX  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/spec/INDEX.md`)

> Scope: Canonical entry point for the normative protocol specifications. These documents are developer and auditor oriented and define “what is” and “what must be” for compatibility.

---

## Who this is for

Use this section if you are:

- building an indexer, explorer, or analytics pipeline;
- integrating wallets or applications that create entities and emit tagged events;
- implementing modules or sub chain anchoring;
- validating compatibility claims (conformance).

If you want a public onboarding path first, start at `docs/public/INDEX.md`.

---

## Public vs specs (why there are two)

- `docs/public/technical/*` is descriptive guidance for integrators.
- `docs/spec/*` is normative: rules, schemas, and compatibility requirements.
- `docs/public/spec/*_PUBLIC.md` is a public-view subset of some specs (high-level and externally focused).

When there is any conflict, treat `docs/spec/*` as the source of truth.

---

## Recommended reading order (developers)

1. `docs/public/technical/TECHNICAL_OVERVIEW.md` (context and boundaries)
2. `docs/public/technical/INTEGRATION_GUIDE.md` (integration checklist)
3. `docs/spec/SPEC-CORE.md` + `docs/spec/SPEC-DATA.md` (core behavior + data standards)
4. `docs/spec/SPEC-INDEXER.md` (if you index or build explorers)
5. `docs/spec/SPEC-MODULES.md` (if you build modules)
6. `docs/spec/SPEC-ANCHOR.md` (if you support sub chain anchoring)
7. `docs/spec/SPEC-ATTESTATIONS.md` (if you implement attestations)
8. `docs/spec/SPEC-PARAMS.md` (parameters and economics model)
9. `docs/spec/SPEC-CONFORMANCE-TESTS.md` (if you publish compatibility claims)

---

## Spec set (normative)

- Core protocol: `docs/spec/SPEC-CORE.md`
- Data standards, schemas, tag catalogs: `docs/spec/SPEC-DATA.md`
- Module standard: `docs/spec/SPEC-MODULES.md`
- Attestations standard: `docs/spec/SPEC-ATTESTATIONS.md`
- Sub chain anchoring: `docs/spec/SPEC-ANCHOR.md`
- Parameters and economics model: `docs/spec/SPEC-PARAMS.md`
- Reference indexer behavior: `docs/spec/SPEC-INDEXER.md`
- Conformance tests and reporting: `docs/spec/SPEC-CONFORMANCE-TESTS.md`

---

## Implementation notes (non-normative)

- Engineering entry point: `docs/engineering/INDEX.md`
- Interop and IBC overview: `docs/interop/INDEX.md`

---

## Publication note

This repo is public by default. Safety-sensitive operational material (not needed for third-party compatibility) belongs under `docs/restricted/` and must be excluded from public website/exports (policy: `docs/policy/POL-DOCS-PUBLICATION.md`).
