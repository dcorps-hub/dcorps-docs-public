# dcorps-docs

Master documentation and specifications for the dCorps Hub protocol, including the Master Reference (whitepaper), protocol specifications, policies, security documents, and token documentation.

> Status: publication-ready documentation set

---

## 1. Purpose

This repo exists to:

- Hold the **Master Reference** for the dCorps Hub.
- Hold **normative specs** for protocol behavior, parameters, modules, and data.
- Hold **governance, treasury, token, and security policies**.
- Generate **public facing docs** that are safe to embed in the main website and other repos.

Anything that defines how the protocol works, how entities behave, or how we describe dCorps externally should live here first, then be surfaced outward through automation and controlled exports.

---

## 2. Repository structure

Planned layout aligned with the Master Reference:

```text
docs/
  master/
    DCHUB_MASTER.md          Master Reference (internal)
    CHANGELOG.md             Master Reference changelog
    TBD_REGISTER.md          Appendix A, open decisions
    DECISION_LOG.md          Appendix B, decisions taken
  spec/
    SPEC-CORE.md             Protocol Specification
    SPEC-PARAMS.md           Protocol Parameters and Economics
    SPEC-MODULES.md          Module Protocol Standard
    SPEC-ANCHOR.md           Sub chain Anchoring Standard
    SPEC-INDEXER.md          Reference Indexer Specification
    SPEC-DATA.md             Data Standards, schemas, chart of accounts, tags
  policy/
    POL-GOV.md               Governance Charter
    POL-TREASURY.md          Treasury Policy
    POL-REGISTRY-MODULES.md  Registry and Module Policy
    POL-VALIDATORS.md        Validator Charter
    POL-FOUNDATION.md        Foundation Charter
  token/
    TOKEN-POLICY.md
    TOKEN-GENESIS-PLAN.md
    TOKEN-EMISSIONS-NOTES.md
  security/
    SECURITY-POLICY.md
    THREAT-MODEL.md
    AUDIT-PLAN.md
    BUG-BOUNTY.md
    INCIDENT-RESPONSE.md
  public/
    master/
      DCHUB_MASTER_PUBLIC.md   Public version of Master Reference
    spec/
      SPEC-CORE_PUBLIC.md      Public spec views
      ...
tools/
  docgen/
    README.md                  Doc generation notes
    strip_internal.*           Internal to public converter scripts
.github/
  workflows/
    docs-ci.yml
    publish-public-docs.yml
