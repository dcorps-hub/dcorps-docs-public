# Hub Whitepaper – Executive Summary

**Document type**: Executive summary  
**Doc ID**: DCHUB-EXEC-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
[www.dcorps.com](http://www.dcorps.com/) · [dev@dcorps.com](mailto:dev@dcorps.com)  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

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
- treasury primitives and standardized accounting events; and
- anchoring of key documents by hash.

dCorps is infrastructure, not a bank, broker, exchange, or custodial service.

---

## v1 in one sentence

In v1, an entity can register, bind roles and wallets, run stablecoin operations through tagged accounting events, and generate reproducible monthly cash-based operating views (corporations) or allocation views (nonprofits), with optional evidence anchoring.

---

## The v1 wedge (first workflow and measurable outcome)

The first workflow is intentionally narrow:

1. Register an entity, set canonical wallets and roles, and anchor baseline governing documents by hash.
2. Route inflows and outflows through canonical on-chain wallets and emit tagged accounting events.
3. Generate a reproducible period report object directly from the tagged ledger (cash-based operating report or nonprofit allocation report), with clear coverage metrics.

Measurable outcome:

- an independent party can verify, from public chain data and anchored evidence, who had authority to act at a given time, what was approved, and how period totals were derived.

---

## Who dCorps is for

dCorps is designed for:

- stablecoin-native founders and small teams that want clear ownership, approvals, and cash-based operating reporting without heavy reconciliation;
- nonprofits and NGOs that want donation and allocation transparency with board-governed controls;
- builders and service providers that want a shared entity and accounting standard to build interoperable tools;
- validators and security contributors that want a clear, conservative base layer to secure.

dCorps is not designed for entities that want opaque structures, cosmetic governance, or minimal transparency.

---

## Kernel and adapters (what is required vs optional)

dCorps keeps a strict boundary between a minimal kernel and optional modules:

- **Kernel (required)**: identity, roles and authority, governance actions, treasury primitives, accounting events, and document anchoring.
- **Adapters and modules (optional)**: jurisdiction recognition workflows, institutional reporting views, sector frameworks, attestations, and derived signals.

Entities must be able to operate without adapters. Adapters may publish derived interpretations, but they must not redefine kernel semantics or rewrite history.

---

## Architecture at a glance

```text
External applications (UIs, payroll, donation portals, dashboards)
        |
        v
Optional adapters and modules (jurisdiction recognition, sector frameworks, attestations)
        |
        v
dCorps Hub kernel (entity registry, roles, governance, wallets, accounting events, anchoring)
        |
        v
DCHUB staking and consensus (security, gas, protocol governance)
```

---

## Economics and assets (high-level)

dCorps uses two primary assets with distinct roles:

- **USDC** is the baseline operating currency and the unit of account for examples and many protocol service fees (registration, renewals, premium names, optional module participation).
- **DCHUB** is the Hub’s gas, staking, and protocol governance token, and the security root for the Hub and recognized sub chains.

This describes protocol mechanics, not market outcomes.

---

## What to read next

- Executive narrative: [docs/whitepaper/LITEPAPER.md](/whitepaper/LITEPAPER)
- Official mid-length: [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER)
- Long version: [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Developer and auditor specs: [docs/spec/](/spec)
- Risk disclosure: [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE)
