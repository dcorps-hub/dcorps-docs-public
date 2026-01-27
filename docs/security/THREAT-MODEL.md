# Threat Model

**Document type**: Security analysis  
**Doc ID**: THREAT-MODEL  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/security/THREAT-MODEL.md](/security/THREAT-MODEL))  
**Last updated**: 2026-01-25

> Scope: Systematic analysis of threats, assets, and mitigations for the Hub, modules, and bridge gateways. This document informs design, audits, and incident response.

---

## 1. Scope and methodology

This threat model focuses on:

- the dCorps Hub rollup and its core modules;
- the protocol module layer and anchoring standards;
- high-level governance and treasury;
- bridge gateways and their operational assumptions.

External applications, custodians, and user devices are in scope only to the extent that they interact with the Hub and can affect its security or trust assumptions.

The approach is to:

- identify critical assets and trust boundaries;
- define plausible attacker profiles;
- enumerate key threats and attack paths;
- document existing and planned mitigations;
- record residual risks and assumptions.

This document captures the threat model for the current v0.1 design. Updates are published as versioned revisions as the protocol and tooling evolve.

---

## 2. Assets and trust boundaries

### 2.1 Key assets

Key assets include:

- integrity and availability of the Hub rollup;
- correctness of entity registry and module attachments;
- security of DCHUB governance and protocol fee deposits;
- confidentiality and integrity of foundation and treasury operations;
- integrity of tagged accounting data and reporting views.

### 2.2 Trust boundaries

Important trust boundaries:

- between the Hub and protocol modules;
- between the Hub and bridge gateways;
- between on-chain governance and off-chain execution (e.g. foundation actions);
- between operator roles and the broader ecosystem;
- between users and external applications that interface with the Hub.

Each boundary introduces potential threat vectors, such as dependency on external operators, RPC gateways, or legal entities.

---

## 3. Attacker profiles

Representative attacker types include:

- economically motivated attackers – seek to steal funds, manipulate markets, or extract MEV beyond acceptable limits;
- protocol adversaries – attempt to disrupt rollup sequencing, censor transactions, or corrupt the entity registry;
- insiders and colluding parties – compromised or malicious operators, developers, or privileged signers;
- regulatory or legal actors – may impose constraints that indirectly affect security or availability;
- opportunistic attackers – exploit unpatched bugs, misconfigurations, or poorly secured infrastructure.

These profiles help prioritize mitigations and understand potential impacts.

---

## 4. Threats and attack scenarios

Examples of threat categories and scenarios:

- **Rollup operations and sequencing**
  - sequencer outage or censorship leading to delayed inclusion;
  - batch posting failures that stall finality on Ethereum;
  - operator key compromise affecting liveness or ordering integrity.
- **Entity and module integrity**
  - unauthorized entity or module registrations;
  - malicious modules with excessive privileges;
  - misconfigured governance that allows dangerous changes with low friction.
- **Anchoring and bridging**
  - bridge gateway failures or exploits affecting bridged assets;
  - delayed or missing anchors that reduce observability;
  - spoofed or invalid anchor submissions.
- **Governance and treasury**
  - social engineering or bribery around governance votes;
  - treasury mismanagement or theft due to poor controls;
  - malicious proposals that appear benign on the surface.

Each scenario is documented with:

- preconditions and attack path;
- potential impact;
- likelihood (qualitative);
- existing and planned mitigations.

---

## 5. Mitigations and residual risk

Mitigations span multiple layers:

- **Protocol-level**
  - timelocked upgrades and Protected Change rules;
  - capability-based module permissions and isolation;
  - anchoring standards that detect and respond to suspicious behavior;
  - bridge gateway monitoring and explicit risk labeling.
- **Governance-level**
  - strong thresholds and timelocks for sensitive changes;
  - transparency and documentation of decisions;
  - delegation structures that reduce capture risk.
- **Operational-level**
  - secure development and deployment processes;
  - robust operational security and infrastructure management;
  - coordinated incident response and communication.

Residual risks are clearly documented along with:

- assumptions that may change over time;
- areas where further research or tooling is needed;
- recommendations for ecosystem participants to reduce their own exposure.
