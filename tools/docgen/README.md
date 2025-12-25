# Docgen Tooling

> Purpose: Describe how internal docs are transformed into public-facing docs and other derived artifacts.

---

## 1. Overview

The `docgen` tooling exists to:

- generate public-safe documentation from internal sources;
- keep public references in sync with the whitepaper suite and specs;
- minimize manual copy/paste and the risk of divergence.

It operates primarily on Markdown files under `docs/` and produces outputs for the docs center and other targets as needed.

---

## 2. Inputs and outputs

Typical inputs:

- whitepaper suite under `docs/whitepaper/`;
- specification files under `docs/spec/`;
- policy, token, and security documents where relevant.
- restricted material under `dcorps-docs-private/docs/restricted/` (excluded from public outputs).

Typical outputs:

- public-facing whitepaper suite (`docs/whitepaper/`);
- public specs (`docs/spec/`);
- optionally, HTML, JSON, or other formats for websites and tooling.

All outputs should be clearly traceable back to specific versions of source files.

---

## 3. Tag and marker conventions

When docgen tooling is introduced, it may rely on markers such as:

- `[RISK-NOTE]` – internal-only risk annotations;
- `[INTENT-PLANNED]` – planned but not yet implemented behavior;
- `[OPEN-QUESTION]` – unresolved design questions;
- `[INTERNAL-ONLY] ... [/INTERNAL-ONLY]` – explicit blocks to be excluded from public outputs.

Planned behavior for docgen scripts:

- strip or transform internal-only markers for public artifacts;
- optionally include simplified or redacted versions of some content;
- fail fast or warn loudly if markers are malformed or inconsistent.

Marker syntax and behavior should be documented here alongside any implemented scripts.

---

## 4. Running the tooling

Docgen scripts are not implemented in this repo yet. For now, docs are maintained manually under `docs/`.

If/when docgen is implemented, document the exact commands and options here (including any scripts added under `tools/docgen/`), and describe the expected outputs under `docs/` and downstream exports.

Public outputs MUST exclude `dcorps-docs-private/docs/restricted/` (policy: `docs/policy/POL-DOCS-PUBLICATION.md`).

---

## 5. Contribution guidelines

When editing internal docs that feed into docgen:

- avoid duplicating content manually once docgen is in place; let tooling handle derivation where possible;
- use agreed marker conventions to separate internal details from public-safe content;
- update this README when new transformations or outputs are added.

When editing the docgen tooling itself:

- maintain tests or sample runs where feasible;
- document breaking changes to marker behavior or output formats;
- coordinate with maintainers of downstream websites and docs that depend on generated outputs.
