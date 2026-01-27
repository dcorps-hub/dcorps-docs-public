# Tokenomics Summary

**Document type**: Tokenomics summary  
**Doc ID**: DCHUB-TOKENOMICS-SUMMARY-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/investor/TOKENOMICS_SUMMARY.md](/investor/TOKENOMICS_SUMMARY))  
**Last updated**: 2026-01-25

---

## Disclaimer

Nothing in this document is an offer to sell, or a solicitation of an offer to buy, any token, share, or security. This document describes protocol mechanics and design intentions, not market outcomes.

---

## 1. Asset separation (avoid category errors)

dCorps separates protocol participation and entity-level ownership:

- **DCHUB**: gas, protocol governance, and protocol-level fees on the Hub rollup.
- **Hub units**: entity-scoped ownership and voting rights inside a Hub corporation (not a global protocol token; 10,000 base units by default, expandable in multiples of 10,000; v0.1 templates recommend a practical maximum of 1,000,000 base units).
- **Nonprofit governance**: board and allocation rules, not equity; no token represents ownership of a nonprofit.
- **dShares (optional future extension)**: equity-style tokens issued by entities under applicable legal regimes, potentially via Hub modules or approved external rails.

---

## 2. DCHUB roles (protocol mechanics)

DCHUB is used for:

- **Gas**: pricing execution on the Hub rollup.
- **Protocol fees**: entity registration, module registry actions, and anchor submissions where applicable.
- **Protocol governance**: voting on protocol upgrades, parameters, module status, and related governance actions.

dCorps is intended to be infrastructure. DCHUB does not represent ownership in user entities, the development corporation, or the foundation. It does not entitle holders to dividends, profit distributions, or rights to donations.

---

## 3. Unit of account and fees

USDC is the baseline unit of account for examples and is intended to be the primary operating currency for many entities. At launch it is bridged from Ethereum to a canonical USDC contract on dCorps.

In addition to gas, protocol services may charge stablecoin fees (for example USDC) for services such as:

- entity registration and renewals,
- premium names and namespaces,
- certain optional module participation.

Fee routing and any revenue-sharing rules are governed by explicit policies and on-chain governance processes.

---

## 4. Supply stance (fixed hard cap)

The v1 design stance is a fixed hard-cap supply minted at genesis:

- **Hard-cap total supply at genesis**: 1,000,000,000 DCHUB
- **Supply creation**: minted once at genesis and assigned into vesting accounts and governance-controlled module accounts.
- **No discretionary inflation beyond genesis**: “emissions” refers to tokens entering circulation from predefined allocations (for example the protocol operations pool), not supply creation beyond the fixed cap.

For definitions of minted supply, circulating supply, and emissions, see [docs/token/TOKEN-EMISSIONS-NOTES.md](/token/TOKEN-EMISSIONS-NOTES).

---

## 5. Indicative allocations (reference)

Indicative allocation at genesis (see [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)):

- Founder: 15% (150,000,000)
- Core team and future contributors: 8% (80,000,000)
- Investors: 15% (150,000,000)
- Community and ecosystem programs: 33% (330,000,000)
- Operator incentives and protocol operations: 18% (180,000,000)
- Protocol Treasury: 4% (40,000,000)
- dCorps foundation: 4% (40,000,000)
- Liquidity bootstrap (operational liquidity): 3% (30,000,000)

Indicative sub allocation plan for Community and ecosystem programs (33%):

Community and ecosystem programs are intended to be programmatic and transparent, with clear buckets that map to public goods needs. An indicative split is:

- Security and audits: 7% (70,000,000)
  - Audits, monitoring, bug bounties, incident response tooling, safety critical infrastructure.
- Core tooling and developer grants: 9% (90,000,000)
  - SDKs, indexers, explorers, accounting and payroll tooling, compatibility tooling, module development grants.
- Jurisdiction pilots and module development: 6% (60,000,000)
  - jurisdiction adapter pilots, standards work, legal research support, jurisdiction adapter implementation grants.
- NGO onboarding and support: 6% (60,000,000)
  - NGO onboarding programs, nonprofit fee waivers where adopted, training, reporting tooling, local capacity building.
- Ecosystem growth and incentives: 4.95% (49,500,000)
  - Limited incentives for meaningful adoption, integrations, ecosystem reliability, recruiting incentives, and targeted airdrops, structured as time bounded programs with transparent criteria.
- Gas-free onboarding credits: 0.05% (500,000)
  - Time-boxed fee grants that cover entity onboarding gas at scale, with per-entity caps, governance approval, and public reporting.

Entity onboarding gas support may be issued as time-boxed fee grants rather than direct transfers, capped per entity and governed through the community program pool.

These are budget buckets for governance and reporting. They do not imply that the full bucket amount is released early. Release caps and a circulating supply schedule are defined in [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG) section 10.4A.

Vesting, lockups, and release caps constrain transferable supply, especially early in the network lifecycle.

Investor breakdown (15% total):

- Seed: 2.5% (25,000,000)
- Series A: 3.5% (35,000,000)
- Series B: 3% (30,000,000)
- Series C: 2% (20,000,000)
- Public sale / ICO (if any): 4% (40,000,000)

Vesting highlights (summary):

- Founder: 24-month cliff, then 72-month linear vesting.
- Core team and future contributors: 18-month cliff, then 48-month linear vesting.
- Seed: 12-month lockup, then 36-month linear vesting.
- Series A: 9-month lockup, then 36-month linear vesting.
- Series B: 6-month lockup, then 30-month linear vesting.
- Series C: 3-month lockup, then 24-month linear vesting.
- Public sale / ICO (if any): 10% at TGE, 90% linear vesting over 12 months.

---

## 6. How DCHUB enters circulation (high-level)

Circulating supply increases through a small number of explicit mechanisms:

- protocol operations distributions (if activated),
- governed releases from community and ecosystem program pools,
- vesting unlocks from time-locked allocations, and
- limited liquidity bootstrap deployment (if any).

---

## 7. References (normative and detailed)

- Token policy: [docs/token/TOKEN-POLICY.md](/token/TOKEN-POLICY)
- Genesis plan: [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)
- Emissions and rewards: [docs/token/TOKEN-EMISSIONS-NOTES.md](/token/TOKEN-EMISSIONS-NOTES)
- Condensed whitepaper: [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER)
