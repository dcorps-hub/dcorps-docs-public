# Executive Summary

**Document type**: Executive summary
**Doc ID**: DCHUB-EXEC-2025-12-21
**Version**: v1.3.1
**Status**: Final v1.3.1
**Release date**: December 21, 2025
**Author**: Nicolas Turcotte, Founder
[www.dcorps.com](http://www.dcorps.com/) · [dev@dcorps.com](mailto:dev@dcorps.com)
**Last updated**: 2026-01-25

---

## Disclaimer

Nothing in this document is:

- an offer to sell, or a solicitation of an offer to buy, any token, share, or security;
- investment, legal, tax, or accounting advice; or
- a promise of listing, price performance, or financial return for any asset.

This summary describes a technical and economic design for the dCorps protocol as currently envisioned. Details may change with engineering work, legal advice, market conditions, and community input.

---

## What dCorps is

dCorps is a digitally native base layer for **corporations** and **nonprofit organizations**.

It provides a shared standard where organizations can be created, owned, governed, and operated on-chain, with a verifiable history of authority and financial activity.

The dCorps Hub is the kernel. It defines:

- canonical entity identity and discovery;
- ownership and authority (roles, approvals, and governance actions);
- wallet structure (authority approvals and operational payments) and standardized accounting events;
- commerce primitives (catalog items/services, invoices, recurring plans); and
- anchoring of key documents by hash.

dCorps is infrastructure, not a bank, broker, exchange, or custodial service.

---

## v1 in one sentence

In v1, an entity can register, bind roles and authority/operational wallets, issue invoices or recurring plans, run stablecoin operations through tagged accounting events, and view reproducible cash-based operating and allocation summaries over any selected timeframe, with optional evidence anchoring.

---

## The v1 wedge (first workflow and measurable outcome)

The first workflow is intentionally narrow:

1. Register an entity, set authority and canonical operational wallets, and anchor baseline governing documents by hash.
2. Issue invoices or recurring plans tied to canonical payment wallets and route inflows/outflows through those wallets with tagged accounting events.
3. Use explorers/indexers (and optional dApps) to derive reproducible cash-based operating and allocation views over any selected timeframe directly from tagged ledger events, with clear coverage metrics.

Nonprofits may accept direct donations to the donation wallet without invoices; payment requests and recurring plans are optional for structured giving, with optional donation receipt anchors.

Measurable outcome:

- an independent party can verify, from public chain data and anchored evidence, who had authority to act at a given time, what was approved, and how period totals were derived.

---

## Who dCorps is for

dCorps is designed for:

- stablecoin-native founders and small teams that want clear ownership, approvals, and cash-based operating views without heavy reconciliation;
- nonprofits and NGOs that want donation and allocation transparency with board-governed controls;
- builders and service providers that want a shared entity and accounting standard to build interoperable tools;
- rollup operators and security contributors that want a clear, conservative base layer to secure.

dCorps is not designed for entities that want opaque structures, cosmetic governance, or minimal transparency.

---

## Kernel and adapters (what is required vs optional)

dCorps keeps a strict boundary between a minimal kernel and optional modules:

- **Kernel (required)**: identity, roles and authority, governance actions, wallet structure, commerce primitives, accounting events, and document anchoring.
- **Adapters and modules (optional)**: jurisdiction recognition workflows, institutional reporting views, sector frameworks, attestations, and derived signals.

Entities must be able to operate without adapters. Adapters may publish derived interpretations, but they must not redefine kernel semantics or rewrite history.

---

## Privacy, disclosure, and lifecycle

Each entity declares a disclosure mode at creation (Mode A, B, or C), and the mode is public metadata that tells interfaces whether data is fully public, aggregated, or anchored with privacy-preserving proofs. Confidentiality exists only when privacy tools are used.

The registry also records lifecycle status (draft, active, suspended, or dissolved) so counterparties can see standing at a glance.

---

## Architecture at a glance

```text
External applications (UIs, payroll, donation portals, dashboards)
        |
        v
Optional adapters and modules (jurisdiction recognition, sector frameworks, attestations)
        |
        v
dCorps Hub kernel (entity registry, roles, governance, wallets, commerce primitives, accounting events, anchoring)
        |
        v
DCHUB gas + rollup settlement (sequencer + Ethereum)
```

---

## Economics and assets (high-level)

dCorps uses two primary assets with distinct roles:

- **USDC** is the baseline operating currency and the unit of account for examples and many protocol service fees (registration, renewals, premium names, optional module participation). At launch it is bridged from Ethereum to a canonical USDC contract on dCorps.\n+- **DCHUB** is the Hub’s gas, protocol governance, and protocol-level fee token in the Orbit rollup architecture.
- The architecture also supports multiple approved stablecoins and, where technically and legally feasible, CBDC-style instruments via the approved asset registry and optional jurisdiction adapters (some rails may require disclosed gateways or provider attestations); adoption is expected to depend on issuer/jurisdiction cooperation and to be pursued through adoption work coordinated by the foundation and ResCo (planned).

This describes protocol mechanics, not market outcomes.

---

## What to read next

- Executive narrative: [docs/whitepaper/LITEPAPER.md](/whitepaper/LITEPAPER)
- Official mid-length: [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER)
- Long version: [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Developer and auditor specs: [docs/spec/](/spec)
- Risk disclosure: [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE)
