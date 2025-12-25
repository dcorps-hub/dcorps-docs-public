# Investor Brief

**Document type**: Investor brief (informational)  
**Doc ID**: DCHUB-INVESTOR-BRIEF-2025-12-21  
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

This brief is informational and describes a technical and economic design for the dCorps protocol as currently envisioned. Details may change with engineering work, legal advice, market conditions, and community input.

---

## 1. What dCorps is (one paragraph)

dCorps is a digitally native base layer for corporations and nonprofit organizations. It provides a shared standard where entities can be registered, governed, and operated on-chain, with canonical identity, verifiable authority, standardized accounting events, and reproducible period reporting views.

---

## 2. Why this exists (the wedge)

Stablecoins and wallets can already function as day-to-day operating accounts. The missing layer is standardized entity infrastructure:

- who has authority to act, and when;
- what approvals and governance actions occurred; and
- how operating totals can be reproduced from shared inputs.

dCorps’ v1 wedge focuses on a measurable workflow:

1. Register an entity, bind canonical wallets and roles, and anchor baseline governing documents.
2. Route inflows/outflows through canonical wallets with tagged accounting events.
3. Produce reproducible period reporting objects with coverage and integrity signals.

This is designed to produce verifiable, reusable entity records and operating views without relying on bespoke SaaS formats.

---

## 3. What ships in v1 (scope)

v1 is intentionally narrow:

- Hub chain with DCHUB staking, gas, and protocol governance.
- Hub corporation and Hub nonprofit entity containers.
- Canonical wallet types and tagged accounting events.
- Reproducible cash-based operating reporting (corporations) and allocation reporting (nonprofits).
- Document anchoring and reference standards for indexers and explorers.

Out of scope for v1 includes: bank integrations, custody, mandatory protocol-level KYC/KYB/AML, and any guarantee of public-market infrastructure or liquidity.

---

## 4. Token and economics (high-level)

dCorps uses two primary assets with distinct roles:

- **DCHUB**: gas, staking (economic security), and protocol governance; security root for the Hub and recognized sub chains.
- **USDC**: baseline unit of account for examples and primary operating currency for many entities and protocol service fees.

The token model separates:

- DCHUB (protocol participation),
- Hub units (entity-level corporate ownership, scoped per corporation), and
- nonprofit governance (board and allocation rules, not equity).

For details on supply, allocations, vesting, and emissions vocabulary, see:

- [docs/investor/TOKENOMICS_SUMMARY.md](/investor/TOKENOMICS_SUMMARY)
- [docs/token/TOKEN-POLICY.md](/token/TOKEN-POLICY)
- [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)
- [docs/token/TOKEN-EMISSIONS-NOTES.md](/token/TOKEN-EMISSIONS-NOTES)

---

## 5. Governance posture

Governance is designed to be conservative:

- keep the Hub minimal and neutral;
- require stronger thresholds and safety mechanisms for high-impact “Protected Changes”;
- keep module and registry decisions legible through explicit proposal types and documentation.

See [docs/policy/POL-GOV.md](/policy/POL-GOV).

---

## 6. Metrics and adoption framing (illustrative, non-binding)

To keep adoption measurable, the Whitepaper Long describes reproducible metrics such as:

- **Active reporting entities**: entities that produce reproducible period reports across consecutive periods.
- **Coverage ratios** (illustrative): inflow coverage, outflow coverage, evidence coverage for material transactions.

These are planning benchmarks, not guarantees. Exact metrics and thresholds may evolve.

---

## 7. Risk summary

Key risks include:

- technical risks (software bugs, economic design errors);
- stablecoin issuer and rail risks;
- bridge and cross-chain risks;
- governance risks and capture risks;
- regulatory and jurisdiction risks;
- third-party application and module risks.

See [docs/legal/RISK_DISCLOSURE.md](/legal/RISK_DISCLOSURE) and [docs/legal/DISCLAIMERS.md](/legal/DISCLAIMERS).

---

## 8. What to read next

- Executive summary: [docs/whitepaper/EXECUTIVE_SUMMARY.md](/whitepaper/EXECUTIVE_SUMMARY)
- Condensed whitepaper (mid-length): [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER)
- Technical overview: [docs/engineering/TECHNICAL_OVERVIEW.md](/engineering/TECHNICAL_OVERVIEW)
- Specs (normative): [docs/spec/](/spec)
