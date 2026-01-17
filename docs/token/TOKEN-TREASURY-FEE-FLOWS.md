# Treasury Fee Flows

**Document type**: Token reference  
**Doc ID**: TOKEN-TREASURY-FEE-FLOWS  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/token/TOKEN-TREASURY-FEE-FLOWS.md](/token/TOKEN-TREASURY-FEE-FLOWS))  
**Last updated**: 2025-12-24  

> Scope: How protocol service fees and treasury-related flows are accounted for and reported.

---

## 1. Fee types

- **Gas fees (DCHUB)**: paid per transaction; distributed to validators/delegators by default, with an optional capped Treasury share if governance adopts it.
- **Service fees (USDC or approved stablecoins)**: charged for protocol services such as entity registration, premium names, and module participation.

---

## 2. Default fee routing

### 2.1 Gas fees

- Collected by the chain and distributed through the standard distribution module (validators/delegators) by default.
- Governance MAY introduce a capped Treasury share with explicit parameters and disclosure.
- Visible in chain events and validator reward records.

### 2.2 Service fees

- Default routing: 100% to the Protocol Treasury module account (genesis default).
- Governance MAY define explicit splits by fee type, for example:
  - a share to the dCorps foundation once established; and
  - a share to participating jurisdictions where jurisdiction adapter modules are used.
- Governance MAY also route a share to the community pool or other program accounts where adopted.

---

## 3. Accounting and reporting

Treasury reporting MUST include:

- starting balance by asset and wallet;
- inflows by fee type (gas vs service);
- outflows by category (development, grants, operations, reserves);
- period delta and ending balance.

Reporting should be derived from tagged on-chain events where possible.

---

## 4. Change control

- Fee routing changes require governance approval.
- Changes MUST be recorded on-chain (governance) and reflected by updating this document.
