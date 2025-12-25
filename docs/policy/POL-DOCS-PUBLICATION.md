# Docs Publication Policy

**Document type**: Policy  
**Doc ID**: POL-DOCS-PUBLICATION  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/policy/POL-DOCS-PUBLICATION.md](/policy/POL-DOCS-PUBLICATION))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Defines what is published by default, what must be restricted for safety, and how to keep public and restricted materials consistent.

---

## 1. Default posture

dCorps documentation is **public by default**.

This includes specifications, governance and policy documents, security posture documents, and technical guides—unless they meet the restriction criteria in this policy.

---

## 2. Restriction rule (safety first)

A document MUST be treated as **restricted** if publishing it would reasonably increase the likelihood, impact, or success rate of attacks against:

- the protocol, reference implementations, or network operations;
- ecosystem participants (validators, operators, integrators, entities);
- custody, keys, credentials, or operational controls.

Restricted documents MUST be placed under `dcorps-docs-private/docs/restricted/` and MUST NOT be published on the public website.

Restricted documents MAY still be stored and versioned in the private repository `dcorps-docs-private` for internal sharing and backup, as long as repository visibility and access controls are managed appropriately.

---

## 3. What belongs in `dcorps-docs-private/docs/restricted/`

Examples of restricted content include:

- secrets and sensitive configuration (private keys, mnemonics, credentials, `.env` contents, internal endpoints);
- step-by-step exploitation or bypass instructions not yet remediated;
- detailed infrastructure runbooks that meaningfully aid attackers (deployment diagrams with internal details, incident comms bridges, on-call routing, precise rate-limit/anti-abuse thresholds);
- embargoed security findings, private audit notes, and pre-disclosure vulnerability reports.

General “security posture” documents that avoid sensitive operational detail (e.g. `SECURITY-POLICY.md`, `THREAT-MODEL.md`, `BUG-BOUNTY.md`) are intended to remain public.

Even in `dcorps-docs-private/docs/restricted/`, do not store live secrets. Keep secrets in dedicated secret-management systems.

---

## 4. Responsible disclosure

Security-relevant information should be published in a way that supports transparency without creating avoidable harm.

- If an issue is **unpatched or actively exploitable**, keep detailed reproduction steps, exploit paths, and proofs in `dcorps-docs-private/docs/restricted/` until remediation is shipped.
- After remediation, publish a public write-up (e.g. incident report or advisory) that communicates impact, timeline, and fixes, while omitting unnecessary attacker-enabling detail.

---

## 5. Link and navigation rules

- Public documents MUST NOT link to restricted material in `dcorps-docs-private`.
- Restricted documents MAY link to public documents.
- If a public document needs to reference restricted material, use neutral language (e.g. “internal runbook available to operators”) without exposing locations or details.

---

## 6. Publishing rule (website and exports)

Public website and public documentation exports MUST include everything under `dcorps-docs-public/docs/` and MUST exclude anything under `dcorps-docs-private/docs/restricted/`.

If a separate public mirror is used, exclude `dcorps-docs-private` from the mirror.

If `dcorps-docs-private` is made public, review `dcorps-docs-private/docs/restricted/` before publishing and remove or redact any material that would create undue safety risk.
