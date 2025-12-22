# dcorps-docs

Master documentation and specifications for the dCorps Hub protocol, including the Master Reference (whitepaper), protocol specifications, policies, security documents, and token documentation.

> Status: publication-ready documentation set

Start here (public docs): `docs/public/INDEX.md`

---

## 1. Purpose

This repo exists to:

- Hold the **Master Reference** for the dCorps Hub.
- Hold **normative specs** for protocol behavior, parameters, modules, and data.
- Hold **governance, treasury, token, and security policies**.
- Publish documentation **public by default**, with safety-sensitive exceptions under `docs/restricted/` (see `docs/policy/POL-DOCS-PUBLICATION.md`).

Anything that defines how the protocol works, how entities behave, or how we describe dCorps externally should live here first, then be surfaced outward through controlled exports (manual for now; see `tools/docgen/README.md`).

---

## 2. Repository structure

High-level layout:

```text
docs/
  master/
    DCHUB_MASTER.md          Master Reference (long whitepaper, source)
    CHANGELOG.md             Master Reference changelog
    TBD_REGISTER.md          Appendix A, open decisions
    DECISION_LOG.md          Appendix B, decisions taken
  spec/
    SPEC-CORE.md             Protocol Specification
    SPEC-PARAMS.md           Protocol Parameters and Economics
    SPEC-MODULES.md          Module Protocol Standard
    SPEC-ATTESTATIONS.md     Attestation Module Standard
    SPEC-ANCHOR.md           Sub chain Anchoring Standard
    SPEC-INDEXER.md          Reference Indexer Specification
    SPEC-CONFORMANCE-TESTS.md Compatibility and Conformance Tests
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
    INDEX.md                   Public doc map (start here)
    whitepaper/                Public whitepaper suite (exec → long)
    investor/                  Investor and tokenomics summaries (informational)
    technical/                 Public technical overview and integration guide
    legal/                     Public disclaimers and risk disclosure
    master/
      DCHUB_MASTER_PUBLIC.md   Short public overview
    spec/
      SPEC-CORE_PUBLIC.md      Public spec views
      ...
tools/
  docgen/
    README.md                  Doc generation notes
```

---

## 3. GitHub visibility and publishing policy

This repo is designed for **transparency by default**: most documents are intended to be safe for public reading and reuse.

What must be private (or excluded from public distribution):

- Any document that would materially increase attack success if published (detailed operational runbooks, attacker-enabling exploit paths, internal infrastructure specifics, embargoed security findings).
- Any secrets (private keys, mnemonics, credentials, `.env` contents). Do not store live secrets in Git.

How we organize this:

- Public-by-default docs live throughout `docs/` (including `docs/spec/`, `docs/policy/`, `docs/security/`, and `docs/token/`).
- Safety-sensitive operational material belongs under `docs/restricted/` and must be excluded from the public website and public exports.

If repository visibility changes:

- If the repository is made public, review `docs/restricted/` first and remove or redact anything that creates undue safety risk.
- Use the policy as the source of truth: `docs/policy/POL-DOCS-PUBLICATION.md`.
