# Docs Publication Policy

**Document type**: Policy  
**Doc ID**: POL-DOCS-PUBLICATION  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/policy/POL-DOCS-PUBLICATION.md](/policy/POL-DOCS-PUBLICATION))  
**Last updated**: 2026-05-30

> Scope: Defines what is published by default, what must be restricted for safety, and how to keep public and restricted materials consistent.

---

## 1. Default posture

dCorps documentation is **public by default**.

This includes specifications, governance and policy documents, security posture documents, and technical guides—unless they meet the restriction criteria in this policy.

---

## 2. Restriction rule (safety first)

A document MUST be treated as **restricted** if publishing it would reasonably increase the likelihood, impact, or success rate of attacks against:

- the protocol, reference implementations, or network operations;
- ecosystem participants (operators, integrators, entities);
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

---

## 7. Whitepaper source-of-truth and artifact rule

The canonical public whitepaper sources live only in `dcorps-docs-public/docs/whitepaper/`.

- `docs/whitepaper/WHITEPAPER.md` is the canonical condensed Markdown whitepaper.
- `docs/whitepaper/WHITEPAPER_LONG.md` is the canonical source for the long-version PDF.
- Website and app whitepaper copies are generated artifacts. They MUST NOT be edited as independent doctrine.

Any change to a canonical whitepaper source MUST update the generated artifacts in the same change:

- the canonical PDF artifact under `docs/whitepaper/pdf/`;
- every checked-in public PDF mirror used by `dcorps-site-v2` and `dcorps-app`;
- the generated-source checksum files under `docs/whitepaper/pdf/`;
- every public checksum sidecar published beside a public PDF mirror.

The official PDF MUST include a visible integrity-confirmation page with the canonical source SHA-256 fingerprint and verification instructions. The exact PDF artifact SHA-256 MUST be published as a detached `.sha256` sidecar beside the PDF, because embedding the final PDF file hash inside the PDF would change the artifact and invalidate that same hash.

The PDF table of contents MUST be generated from canonical Markdown headings, rendered as internal PDF links, and include printed page numbers for paper copies. Visual support elements used in the official PDF MUST be generated from reviewed, source-controlled components in the whitepaper export tool, not from manual PDF edits.

The archived `dcorps-site` repository is not part of the active whitepaper artifact stack and MUST NOT be updated by the exporter or publication workflow.

Run the export command after every whitepaper source edit:

```bash
npm run whitepaper:export
```

For local editing sessions, a maintainer MAY run the watcher so the export happens automatically whenever a canonical whitepaper Markdown file changes:

```bash
npm run whitepaper:watch
```

Run the check command before treating a whitepaper change as complete:

```bash
npm run whitepaper:check
```

Local maintainers SHOULD install the tracked aggressive git hooks:

```bash
npm run hooks:install
```

The pre-commit hook MUST regenerate and check whitepaper artifacts when canonical whitepaper Markdown is staged. The pre-push hook MUST run the artifact check before publication. Hook failures MUST stop the commit or push.

The check MUST fail when the canonical Markdown hash and generated artifact hash files disagree. This is intentional: a whitepaper Markdown update is incomplete until the PDF and public mirrors are regenerated.

Whitepaper PDF generation is allowed to use local headless Chrome, Chromium, or a compatible installed browser plus Poppler tools (`pdfunite` and `pdftotext`) for cover/body merging and printed table-of-contents page-number resolution. If PDF generation cannot run locally, the change MUST be marked blocked rather than leaving stale public artifacts behind.
