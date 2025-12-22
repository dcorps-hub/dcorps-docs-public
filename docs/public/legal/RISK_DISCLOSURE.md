# dCorps – Risk Disclosure (Public)

**Document type**: Risk disclosure (public)  
**Doc ID**: DCORPS-RISK-DISCLOSURE-PUBLIC-2025-12-21  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Source repo**: dcorps-docs (`docs/public/legal/RISK_DISCLOSURE.md`)

---

## Disclaimer

This document is a plain-language risk overview. It is not legal, tax, accounting, or investment advice. It does not describe every risk and may be updated over time.

---

## 1. Protocol and software risks

### 1.1 Bugs and vulnerabilities

The Hub, modules, and surrounding tooling may contain bugs or security vulnerabilities. Exploits may result in loss of funds, loss of availability, incorrect state transitions, or corrupted derived views.

### 1.2 Upgrades and unexpected behavior

Protocol upgrades and parameter changes may introduce unintended consequences. Even well-reviewed upgrades can create edge-case failures.

### 1.3 Economic design errors

Fees, rewards, and parameter configurations may be incorrect or misaligned, potentially impacting chain security, validator participation, and usability.

---

## 2. Governance risks

### 2.1 Governance capture and coordination failures

On-chain governance can be captured or influenced by concentrated stake, coordinated voting, or conflicts of interest. Governance can also fail through apathy, poor participation, or rushed decision-making.

### 2.2 Policy ambiguity and off-chain enforcement limits

Not all “hard limits” can be enforced purely by code. Some boundaries may rely on policy and social enforcement, which can be contested.

---

## 3. Validator and infrastructure risks

### 3.1 Validator downtime and chain instability

Validator outages, operational failures, or misconfigurations may lead to downtime, degraded performance, or chain instability.

### 3.2 Slashing and operational loss

Validators and delegators may be slashed for certain types of misbehavior or downtime. Slashing and unbonding dynamics may create additional operational and economic risks.

---

## 4. Stablecoin and asset risks

### 4.1 Stablecoin issuer and rail risk

Stablecoins (including USDC) carry issuer, regulatory, and rail risks. Issuer controls, freezes, blacklists, or changes in availability may affect entities that rely on stablecoins for operations.

### 4.2 Denom, routing, and interoperability risk

Cross-chain routing mechanisms and denom representations can fail or behave unexpectedly. Even when protocol logic is correct, upstream failures can impact assets held or moved by users.

---

## 5. Bridge and cross-chain risks

Bridges and cross-chain systems are high-risk components. A bridge exploit can affect assets that have crossed that bridge or rely on that bridge for movement.

dCorps is intended to keep core entity accounting and governance on the Hub logically separate from external bridge correctness, but bridge-related losses can still be severe for users.

---

## 6. Module, adapter, and third-party risks

### 6.1 Module risk

Optional protocol modules (including jurisdiction adapter modules, sector frameworks, and attestations) may be incorrect, biased, or compromised. Modules may publish derived interpretations that are later disputed.

### 6.2 Third-party application risk

Most users interact through wallets, dashboards, explorers, and other applications. Malicious or low-quality third-party software can mislead users, leak sensitive data, or cause loss of funds.

### 6.3 Attestation and reporting risk

Tags and categories are interpretations and can be misused. Even when amounts and transfers are verifiable, reporting views can be misleading if:

- events are missing required tags;
- tags are applied inconsistently; or
- evidence anchors are absent or low-quality.

---

## 7. Privacy and confidentiality risks

On-chain data is public by default. Choosing a disclosure mode does not automatically provide confidentiality. Confidentiality exists only when privacy-preserving execution or selective disclosure tools are used.

Entities may unintentionally reveal sensitive information through:

- wallet relationships and counterparty patterns;
- metadata, tags, and evidence anchors; or
- off-chain data correlated to on-chain activity.

---

## 8. Legal and regulatory risks

### 8.1 Jurisdictional uncertainty

Legal treatment of digitally native entities, tokens, and on-chain governance varies by jurisdiction and can change over time.

### 8.2 No guarantee of legal recognition

dCorps does not guarantee legal personhood, limited liability, enforceability, or compliance in any jurisdiction. Legal recognition (where desired) is achieved through off-chain processes and, optionally, jurisdiction adapter workflows.

---

## 9. Market and liquidity risks

There is no guarantee that any token will be listed, liquid, or have stable pricing. Market conditions can change rapidly. Any discussion of protocol mechanics is not a promise of market outcomes.

---

## 10. References

- Public disclaimers: `docs/public/legal/DISCLAIMERS.md`
- Security docs: `docs/security/`
- Whitepaper: `docs/public/whitepaper/WHITEPAPER.md`
- Long version: `docs/public/whitepaper/WHITEPAPER_LONG.md`
