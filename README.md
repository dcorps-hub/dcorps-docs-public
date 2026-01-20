# dcorps-docs-public

Public documentation and specifications for the dCorps Hub protocol, including whitepapers, protocol specifications, policies, security documents, and token documentation.

> Status: Phase 0A (development) — public baseline documentation set (mainnet is not live; the foundation is not incorporated; DevCo is incorporated and active in the British Virgin Islands)

Docs center entry point: `docs/welcome/INDEX.md`
Developer entry point (normative specs): `docs/spec/INDEX.md`

---

## 1. Purpose

This repo exists to:

- Hold the whitepaper suite for the dCorps Hub.
- Hold **normative specs** for protocol behavior, parameters, modules, and data.
- Hold **governance, treasury, token, and security policies**.
- Publish documentation **public by default**, with safety-sensitive exceptions and internal planning stored in the private documentation repo `dcorps-docs-private` (policy: `docs/policy/POL-DOCS-PUBLICATION.md`).

Anything that defines how the protocol works, how entities behave, or how we describe dCorps externally should live here first, then be surfaced outward through controlled exports (manual for now; see `tools/docgen/README.md`).

---

## 2. Repository structure

High-level layout:

```text
docs/
  REPOS.md                   Repository map (internal)
  welcome/
    INDEX.md                 Docs center welcome and reader paths
    OVERVIEW.md              dCorps overview
  whitepaper/
    INDEX.md                 Whitepaper suite index
    EXECUTIVE_SUMMARY.md
    FAQ.md
    GLOSSARY.md
    LITEPAPER.md
    NONPROFIT_NOTE.md
    WHITEPAPER.md
    WHITEPAPER_LONG.md
    WHITEPAPER_PLAIN_LANGUAGE.md
  investor/
    INDEX.md                 Investor materials index
    INVESTOR_BRIEF.md
    TOKENOMICS_SUMMARY.md
  spec/
    INDEX.md                 Spec index (normative)
    SPEC-CORE.md             Protocol Specification
    SPEC-CORE_PUBLIC.md      Core spec overview
    SPEC-PARAMS.md           Protocol Parameters and Economics
    SPEC-MODULES.md          Module Protocol Standard
    SPEC-ATTESTATIONS.md     Attestation Module Standard
    SPEC-ANCHOR.md           Sub chain Anchoring Standard
    SPEC-INDEXER.md          Reference Indexer Specification
    SPEC-CONFORMANCE-TESTS.md Compatibility and Conformance Tests
    SPEC-DATA.md             Data Standards, schemas, chart of accounts, tags
  policy/
    POL-GOV.md               Governance Charter
    POL-GOV-TRANSITION.md    Governance transition plan (founder-led → foundation readiness)
    POL-TREASURY.md          Treasury Policy
    POL-REGISTRY-MODULES.md  Registry and Module Policy
    POL-VALIDATORS.md        Validator Charter
    POL-FOUNDATION.md        Foundation Policy (planned)
    POL-LOCALIZATION.md      Localization and translations policy
    POL-DOCS-PUBLICATION.md  Documentation Publication Policy
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
  engineering/
    INDEX.md                 Engineering entry point
    TECHNICAL_OVERVIEW.md    Technical overview
    INTEGRATION_GUIDE.md     Integration guide
    COSMOS_BASE.md           Base protocol notes (Cosmos, token, stablecoins)
    PROTOCOL_INTERFACES.md   Interface surface map
  devops/
    INDEX.md                 DevOps entry point
    ENVIRONMENTS.md          Dev, staging, and prod definitions
    COSMOS_ENVIRONMENT.md    Cosmos environment setup notes
    CI_CD.md                 CI/CD and release flow
    RELEASE_PROCESS.md       Release and environment promotion process
    OBSERVABILITY.md         Metrics, logs, and alerts
    SECURITY.md              DevOps security posture
    RUNBOOKS.md              Runbook index
  interop/
    INDEX.md                 Interop entry point
    IBC.md                   IBC and interchain notes
  roadmap/
    INDEX.md                 Roadmap and phases
    PHASES.md                Phase goals and exit criteria
  frontend/
    INDEX.md                 Frontend entry point
    STACK.md                 Current and future stack notes
    ACCESSIBILITY.md         Accessibility guidelines
    EXPLORER_REQUIREMENTS.md Explorer requirements
    INFO_ARCHITECTURE.md     Information architecture
    SIGNING_FLOWS.md         Signing flows
  people/
    INDEX.md                 People & Organization index
    TEAM.md                  Team roster
    ORGANIZATIONS.md         DevCo/ResCo/Foundation overview
    ROLES.md                 Roles needed (capability map)
    ADVISOR_ROLES.md         Advisor role map
    OPEN_ROLES.md            Open roles (coverage needed; hiring may be paused)
  legal/
    INDEX.md                 Legal and compliance index
    STRUCTURE_PATH.md
    DEVCO_AGREEMENT.md
    RESCO_AGREEMENT.md
    DISCLAIMERS.md
    RISK_DISCLOSURE.md
tools/
  docgen/
    README.md                  Doc generation notes
```

Canonical docs center ordering lives in `ORGANIZATOR.md`.
- Update `ORGANIZATOR.md` whenever any file or folder is created or updated.

---

## 3. GitHub visibility and publishing policy

This repo is designed for **transparency by default**: most documents are intended to be safe for public reading and reuse.

What must be private (or excluded from public distribution):

- Any document that would materially increase attack success if published (detailed operational runbooks, attacker-enabling exploit paths, internal infrastructure specifics, embargoed security findings).
- Any secrets (private keys, mnemonics, credentials, `.env` contents). Do not store live secrets in Git.

How we organize this:

- Public-by-default docs live throughout `docs/` (including `docs/spec/`, `docs/policy/`, `docs/security/`, and `docs/token/`).
- Safety-sensitive and internal-only material belongs in the private documentation repo `dcorps-docs-private` and must be excluded from public website/exports.

If repository visibility changes:

- If `dcorps-docs-private` is ever made public, review `dcorps-docs-private/docs/restricted/` first and remove or redact anything that creates undue safety risk.
- Use the policy as the source of truth: `docs/policy/POL-DOCS-PUBLICATION.md`.
