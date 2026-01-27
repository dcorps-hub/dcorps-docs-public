# Treasury Policy

**Document type**: Policy  
**Doc ID**: POL-TREASURY  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/policy/POL-TREASURY.md](/policy/POL-TREASURY))  
**Last updated**: 2026-01-16  

> Scope: Management of protocol and foundation treasury assets, including objectives, controls, and transparency expectations.

---

## 1. Objectives and mandate

The dCorps and foundation treasuries exist to:

- fund development, security, and ecosystem growth of the protocol;
- provide buffers for adverse events and long-term sustainability;
- support public goods that strengthen the dCorps ecosystem.

Treasury operations:

- prioritize safety and continuity over speculative returns;
- avoid conflicts of interest and self-dealing;
- align with the nonprofit mission of the foundation where applicable.

---

## 2. Asset universe and risk limits

### 2.1 Allowed assets

Treasury assets may include:

- DCHUB tokens (native token);
- widely used, reputable stablecoins;
- major cryptoassets relevant to the ecosystem;
- approved CBDC instruments where legally available and technically supported.

Exotic or illiquid assets are generally avoided unless specifically justified and approved by governance.

### 2.2 Risk limits

Risk management includes:

- diversification limits by asset and counterparty;
- maximum exposure to any single stablecoin issuer or custodian;
- guidelines for duration and liquidity risk (e.g. limits on long lockups).

Governance reviews and updates risk limits periodically, especially after major market events.

---

## 3. Allocation and spending

### 3.1 Strategic allocation

Treasury allocation decisions consider:

- runway and expected future cash flows;
- near-term funding needs for development and security;
- diversification away from single points of failure.

Long-term strategic allocations are guided by a multi-year plan reviewed at least annually.

### 3.2 Spending approvals

Spending from treasury may be authorized via:

- on-chain governance proposals (e.g. community grants, large strategic expenditures);
- foundation board approval processes for operational expenses, as defined in `POL-FOUNDATION.md`.

All significant disbursements:

- are tagged and reported using dCorps data standards;
- include clear descriptions of purpose and expected outcomes;
- are traceable from treasury wallets to recipients.

---

## 4. Controls and signers

Treasury custody uses robust controls such as:

- multisignature wallets or hardware-backed custody;
- separation of duties between proposers, approvers, and signers;
- documented procedures for signer rotation and incident response.

Signers:

- are selected based on trust, competence, and diversity;
- are subject to clear accountability, including removal for cause;
- disclose relevant conflicts of interest related to treasury decisions.

For on-chain-controlled treasuries, smart-contract-level controls may complement or replace manual signer structures, provided they are auditable and well-documented.

---

## 5. Reporting and transparency

Treasury transparency is essential to trust. At minimum:

- key wallet addresses and current balances are publicly discoverable (preferably on-chain labeled and linked from public docs);
- explorers/indexers SHOULD provide reproducible views over any caller-selected timeframe, including:
  - starting balances and inflows;
  - outflows by category (development, grants, operations, reserves);
  - material changes in strategy or risk.
- any narrative summaries published by the Treasury or Foundation SHOULD cite the exact timeframe and be reproducible from tagged on-chain activity, using the same data standards available to all other entities operating on dCorps.
