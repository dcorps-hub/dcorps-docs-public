# Tokenomics Summary

**Document type**: Tokenomics summary  
**Doc ID**: DCHUB-TOKENOMICS-SUMMARY-2025-12-21  
**Version**: v1.3.1  
**Status**: Final v1.3.1  
**Release date**: December 21, 2025  
**Source repo**: dcorps-docs-public ([docs/investor/TOKENOMICS_SUMMARY.md](/investor/TOKENOMICS_SUMMARY))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

---

## Disclaimer

Nothing in this document is an offer to sell, or a solicitation of an offer to buy, any token, share, or security. This document describes protocol mechanics and design intentions, not market outcomes.

---

## 1. Asset separation (avoid category errors)

dCorps separates protocol participation and entity-level ownership:

- **DCHUB**: gas, staking, and protocol governance on the Hub; security root for the Hub and recognized sub chains.
- **Hub units**: entity-scoped ownership and voting rights inside a Hub corporation (not a global protocol token).
- **Nonprofit governance**: board and allocation rules, not equity; no token represents ownership of a nonprofit.
- **dShares (optional future extension)**: equity-style tokens issued by public sub chain corporations on their own sub chains, under their own legal regime.

---

## 2. DCHUB roles (protocol mechanics)

DCHUB is used for:

- **Gas**: pricing execution on the Hub (and, where applicable, recognized sub chains).
- **Staking**: validator and delegator participation in proof-of-stake consensus.
- **Protocol governance**: voting on protocol upgrades, parameters, module status, and related governance actions.

dCorps is intended to be infrastructure. DCHUB does not represent ownership in user entities, the development corporation, or the foundation. It does not entitle holders to dividends, profit distributions, or rights to donations.

---

## 3. Unit of account and fees

USDC is the baseline unit of account for examples and is intended to be the primary operating currency for many entities.

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
- **No discretionary inflation beyond genesis**: “emissions” refers to tokens entering circulation from predefined allocations (for example the staking and validator rewards pool), not supply creation beyond the fixed cap.

For definitions of minted supply, circulating supply, and emissions, see [docs/token/TOKEN-EMISSIONS-NOTES.md](/token/TOKEN-EMISSIONS-NOTES).

---

## 5. Indicative allocations (reference)

Indicative allocation at genesis (see [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)):

- Founder: 15% (150,000,000)
- Core team and future contributors: 10% (100,000,000)
- Investors: 10% (100,000,000)
- Community and ecosystem programs: 35% (350,000,000)
- Staking and validator rewards: 18% (180,000,000)
- Protocol Treasury: 5% (50,000,000)
- dCorps foundation: 5% (50,000,000)
- Liquidity bootstrap (operational liquidity): 2% (20,000,000)

Vesting, lockups, and release caps constrain transferable supply, especially early in the network lifecycle.

---

## 6. How DCHUB enters circulation (high-level)

Circulating supply increases through a small number of explicit mechanisms:

- rewards pool distributions to validators and delegators,
- governed releases from community and ecosystem program pools,
- vesting unlocks from time-locked allocations, and
- limited liquidity bootstrap deployment (if any).

---

## 7. References (normative and detailed)

- Token policy: [docs/token/TOKEN-POLICY.md](/token/TOKEN-POLICY)
- Genesis plan: [docs/token/TOKEN-GENESIS-PLAN.md](/token/TOKEN-GENESIS-PLAN)
- Emissions and rewards: [docs/token/TOKEN-EMISSIONS-NOTES.md](/token/TOKEN-EMISSIONS-NOTES)
- Official whitepaper: [docs/whitepaper/WHITEPAPER.md](/whitepaper/WHITEPAPER)
