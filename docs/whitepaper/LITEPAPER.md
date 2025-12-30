# Litepaper

**Document type**: Litepaper
**Doc ID**: DCHUB-LITEPAPER-2025-12-21
**Version**: v1.3.1
**Status**: Final v1.3.1
**Release date**: December 21, 2025
**Author**: Nicolas Turcotte, Founder
[www.dcorps.com](http://www.dcorps.com/) · [dev@dcorps.com](mailto:dev@dcorps.com)
**Last updated**: 2025-12-24

---

## Disclaimer

Nothing in this document is:

- an offer to sell, or a solicitation of an offer to buy, any token, share, or security;
- investment, legal, tax, or accounting advice; or
- a promise of listing, price performance, or financial return for any asset.

This litepaper describes a technical and economic design for the dCorps protocol as currently envisioned. Details may change with engineering work, legal advice, market conditions, and community input.

---

## 1. What dCorps is

dCorps is a digitally native base layer for **corporations** and **nonprofit organizations**.

It provides a shared standard where organizations can be:

- registered with canonical identity;
- owned or governed with verifiable roles and governance actions;
- operated with standardized treasury and accounting events; and
- audited over time through deterministic on-chain state and anchored evidence.

dCorps is infrastructure. It does not provide legal, tax, or regulatory guarantees. It does not provide custody. It does not operate as a bank, broker, exchange, or fundraising platform.

---

## 2. The problem

Stablecoins and wallets can already function as day-to-day operating accounts for global teams.

But the entity layer around them is fragmented:

- authority and approvals live in inboxes, spreadsheets, and private tooling;
- operating reporting is expensive to produce and hard to verify;
- nonprofits face persistent trust gaps around allocation claims; and
- cross-border teams face unequal access to “serious” corporate structures and credible audit trails.

The result: teams can move money, but they cannot easily prove, in a shared and reusable way:

- who had authority to act;
- what approvals were required and obtained; and
- how totals for a selected timeframe were derived from underlying activity.

---

## 3. The solution (kernel first)

dCorps treats the Hub as a minimal, stable kernel for digital organizations.

The kernel provides:

- canonical entity identity and discovery;
- ownership and authority (roles, approvals, governance actions);
- treasury primitives and standardized accounting events;
- document anchoring for governing documents, resolutions, and evidence.

Everything that varies by jurisdiction, institution, or sector is optional and sits above the kernel as protocol modules.

This “kernel + adapters” design keeps the base layer neutral and interoperable, while still enabling institutional workflows when an entity chooses to opt in.

---

## 4. v1 scope (what ships vs what does not)

v1 is intentionally narrow: ship a stable Hub kernel that can host complete corporations and nonprofits on a shared public chain.

**In scope for v1**

- Hub chain, DCHUB gas and staking, and basic on-chain protocol governance.
- Entity registry and entity lifecycle status.
- Standard on-chain entity containers:
  - Hub corporation (units, role-based governance, structured accounting primitives).
  - Hub nonprofit (board governance, donation/program flows, allocation rules, transparency floor).
- Canonical wallet types and tagged accounting events.
- Reproducible cash-based operating views (corporations) and allocation views (nonprofits) over any selected timeframe.
- Document anchoring for minutes, agreements, audits, and key artifacts.
- Reference tooling standards (indexer/export formats and explorer expectations).

**Explicitly out of scope for v1**

- any requirement to attach a jurisdiction adapter or compliance process;
- any promise of listing, liquidity, or public-market infrastructure;
- operating fiat rails, bank integrations, or custody;
- mandatory protocol-level KYC/KYB/AML (these live in applications and optional modules);
- default full privacy execution (privacy is an optional evolution).

---

## 5. Core flows (what an entity does)

### 5.1 Register and set authority

1. Submit an entity registration transaction and pay protocol fees.
2. Bind initial roles (board seats for nonprofits; governance roles for corporations).
3. Bind canonical wallets (merchant, donation, program, treasury, and other configured wallet types).
4. Anchor baseline governing documents by hash.

### 5.2 Operate day to day in stablecoins

1. Receive inflows to canonical wallets.
2. Execute payouts from canonical wallets using tagged accounting events.
3. Anchor evidence for material items where appropriate.

### 5.3 Generate views (any timeframe)

Entities can generate reproducible views over any selected timeframe from tagged accounting events:

- corporations: cash-based operating reporting (distinct from GAAP/IFRS accrual reporting);
- nonprofits: allocation reporting derived from donation and program flows plus allocation rules.

Views include coverage and integrity signals (e.g., uncategorized flows surfaced explicitly).

---

## 6. Architecture (conceptual)

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

The Hub is intended to be the canonical source of truth for entity identity, authority, and standardized accounting events.

---

## 7. Entity models (public overview)

### 7.1 Hub corporation

A Hub corporation is an on-chain entity container with:

- an internal unit-based cap table (10,000 base units by default);
- role-based authority and governance actions;
- canonical wallets and tagged accounting events for operating flows.

Units and governance rights are scoped to the entity. They are not global protocol tokens.

### 7.2 Hub nonprofit

A Hub nonprofit is an on-chain entity container with:

- board-governed authority;
- donation and program wallet structure;
- allocation rules and category-level transparency.

The nonprofit module is designed to produce a minimum transparency floor meaningful to donors without forcing disclosure of sensitive beneficiary details.

### 7.3 Optional extensions

The ecosystem may support optional, registered sub chains in the future. v1 does not require any sub chains for entities to operate.

---

## 8. Economics (high-level)

dCorps uses two primary assets with distinct roles:

- **DCHUB**: gas, staking, and protocol governance; security root for the Hub and recognized sub chains.
- **USDC**: baseline unit of account and primary operating currency for many entities and protocol service fees.

This describes protocol mechanics, not market outcomes.

Supply, allocations, vesting, and release caps are described in:

- [docs/token/TOKEN-POLICY.md](/token/TOKEN-POLICY)
- [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)
- [docs/token/TOKEN-EMISSIONS-NOTES.md](/token/TOKEN-EMISSIONS-NOTES)

---

## 9. Governance and safety posture (high-level)

Protocol governance is designed to be conservative:

- the Hub stays minimal and neutral;
- upgrades and sensitive changes are slower and more visible;
- “Protected Changes” require higher thresholds and additional safety mechanisms.

For governance process and proposal types, see [docs/policy/POL-GOV.md](/policy/POL-GOV).

---

## 10. What to read next

- Condensed whitepaper (mid-length): [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER)
- Long version: [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Technical overview: [docs/engineering/TECHNICAL_OVERVIEW.md](/engineering/TECHNICAL_OVERVIEW)
- Specs (normative): [docs/spec/](/spec)
- Risk disclosure: [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE)
