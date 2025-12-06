# Docgen Tooling

> Purpose: Describe how internal docs are transformed into public-facing docs and other derived artifacts.

---

## 1. Overview

_Provide a high-level description of the docgen pipeline and goals._

---

## 2. Inputs and outputs

_List which internal files are treated as sources and what public artifacts they generate._

---

## 3. Tag and marker conventions

_Document any markers (e.g. `[RISK-NOTE]`, `[INTENT-PLANNED]`) that scripts use to include/exclude content._

---

## 4. Running the tooling

_Describe how to run the docgen scripts locally (commands, prerequisites)._

---

## 5. Contribution guidelines

_Outline expectations for contributors adding new docs or modifying the pipeline._
# Docgen Tooling

> Purpose: Describe how internal docs are transformed into public-facing docs and other derived artifacts.

---

## 1. Overview

The `docgen` tooling exists to:

- generate public-safe documentation from internal sources;
- keep public references in sync with the Master Reference and specs;
- minimize manual copy/paste and the risk of divergence.

It operates primarily on Markdown files under `docs/` and produces outputs for `docs/public/` and other targets as needed.

---

## 2. Inputs and outputs

Typical inputs:

- `docs/master/DCHUB_MASTER.md` and related master files;
- specification files under `docs/spec/`;
- policy, token, and security documents where relevant.

Typical outputs:

- public-facing master reference (`docs/public/master/DCHUB_MASTER_PUBLIC.md`);
- public specs (`docs/public/spec/*_PUBLIC.md`);
- optionally, HTML, JSON, or other formats for websites and tooling.

All outputs SHOULD be clearly traceable back to specific versions of source files.

---

## 3. Tag and marker conventions

To safely generate public docs from internal sources, the tooling MAY rely on markers such as:

- `[RISK-NOTE]` – internal-only risk annotations;
- `[INTENT-PLANNED]` – planned but not yet implemented behavior;
- `[OPEN-QUESTION]` – unresolved design questions;
- `[INTERNAL-ONLY] ... [/INTERNAL-ONLY]` – explicit blocks to be excluded from public outputs.

Docgen scripts SHOULD:

- strip or transform internal-only markers for public artifacts;
- optionally include simplified or redacted versions of some content;
- fail fast or warn loudly if markers are malformed or inconsistent.

The exact marker syntax and behavior MUST be documented here once finalized.

---

## 4. Running the tooling

To use docgen locally (once implemented):

1. ensure required dependencies are installed (e.g. a scripting language, Markdown parser);
2. run the main docgen command from the repository root, for example:

   ```bash
   ./tools/docgen/strip_internal.sh
   ```

3. inspect the generated files under `docs/public/` and other targets;
4. include updated outputs in commits where appropriate.

Actual command names and options SHOULD be documented here once the scripts exist.

---

## 5. Contribution guidelines

When editing internal docs that feed into docgen:

- avoid duplicating content manually in `docs/public/`; let tooling handle derivation where possible;
- use agreed marker conventions to separate internal details from public-safe content;
- update this README when new transformations or outputs are added.

When editing the docgen tooling itself:

- maintain tests or sample runs where feasible;
- document breaking changes to marker behavior or output formats;
- coordinate with maintainers of downstream websites and docs that depend on generated outputs.
