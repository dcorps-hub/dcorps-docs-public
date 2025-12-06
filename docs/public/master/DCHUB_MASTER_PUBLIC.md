# dCorps Hub Master Reference – Public View

**Document type**: Public-facing reference  
**Doc ID**: DCHUB-MASTER-PUBLIC  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/public/master/DCHUB_MASTER_PUBLIC.md`)

> Scope: Public subset of `docs/master/DCHUB_MASTER.md`, stripped of internal notes, open questions, and non-public details. This document is descriptive and informational only.

---

## 1. Purpose and audience

This public view provides:

- a high-level overview of the dCorps Hub and its role in the ecosystem;
- a conceptual map for founders, nonprofits, builders, and stakeholders considering integration;
- a stable reference for external documentation and communication.

It is written for:

- founders and operators of corporations and nonprofits;
- builders and integrators of applications and tools;
- regulators, policymakers, and researchers seeking to understand the protocol at a high level.

This document does not contain internal design notes, risk annotations, or detailed economics. It is not a legal, tax, or investment document.

---

## 2. High-level overview

dCorps is a Web3-native base layer for corporations and nonprofit organizations. It provides:

- a dedicated Hub blockchain that acts as a global registry and coordination layer for entities;
- standardized on-chain models for governance, roles, and wallets;
- a common tagging and reporting framework for on-chain flows, enabling transparent cash-based operating views;
- interfaces for protocol modules and recognized sub chains that extend functionality without fragmenting core identity and data.

In early phases, the Hub focuses on:

- registering entities and their canonical wallets;
- standardizing how inflows and outflows are tagged and summarized;
- enabling basic governance controls at the entity level.

Over time, additional modules and sub chains can provide jurisdictional recognition, sector frameworks, and advanced financial or governance features.

---

## 3. Core concepts

Key concepts include:

- **Hub entities**
  - On-chain organizational objects representing corporations, nonprofits, and related structures.
  - Hold canonical wallets, roles, and governance policies.
- **Canonical wallets**
  - Designated addresses for operations such as merchant revenue, donations, or program spending.
  - Serve as the basis for transparent cash-flow views.
- **Tagged flows**
  - On-chain transactions annotated with categories and tags.
  - Enable standardized reporting for income, spending, and allocations.
- **Modules**
  - Pluggable components that add domain-specific logic (e.g. jurisdiction modules, sector frameworks, attestations).
- **Recognized sub chains**
  - Separate blockchains that anchor state back to the Hub under shared standards.
  - Use the Hub as a coordination and evidence root.

Together, these pieces aim to make serious entities more transparent, programmable, and verifiable without replacing legal systems.

---

## 4. Protocol architecture (public view)

At a simplified level:

1. **Applications and services**
   - Wallets, dashboards, donation portals, accounting tools, and integrator platforms.
2. **Modules**
   - Jurisdiction modules, sector frameworks, and other components that interpret and constrain entity behavior.
3. **dCorps Hub**
   - Core entity registry, wallet bindings, governance primitives, and tagging standards.
4. **Consensus and security**
   - DCHUB-based proof-of-stake, providing economic security for the Hub and recognized sub chains.
5. **Recognized sub chains**
   - Chains that anchor summaries to the Hub and follow shared recognition and anchoring standards.

The Hub is intentionally minimal: many complex behaviors live at the module or sub chain layer, not in the base state machine.

---

## 5. Governance and security (public view)

High-level governance characteristics:

- DCHUB stakers and delegators participate in on-chain governance;
- the dCorps Foundation acts as a steward and interface with off-chain stakeholders, within clear policy boundaries;
- major changes—especially those affecting security, economics, or recognition—require broad participation and strong approval thresholds.

Security posture:

- defense in depth across protocol, infrastructure, and process;
- rigorous audits and a bug bounty program for critical components;
- over time, a transparent track record of incident handling and continuous improvements.

External participants (validators, developers, entities) remain responsible for their own security practices and risk management.

---

## 6. Disclaimers

Nothing in this document:

- is an offer to sell, or a solicitation of an offer to buy, any token, share, or security;
- is investment, legal, tax, or accounting advice;
- guarantees any listing, price performance, or financial return.

This document is a technical and conceptual description of the dCorps protocol as currently envisioned. Details may change with engineering work, legal advice, market conditions, and community input.

Participants are responsible for obtaining their own professional advice and complying with applicable laws in all relevant jurisdictions.

