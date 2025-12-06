# dCorps – Threat Model

**Document type**: Security analysis  
**Doc ID**: THREAT-MODEL  
**Status**: Draft  
**Source repo**: dcorps-docs (`docs/security/THREAT-MODEL.md`)

> Scope: Systematic analysis of threats, assets, and mitigations for the Hub, modules, and recognized sub chains.

---

## 1. Scope and methodology

_Define what is in scope and which threat-modeling framework or approach is used._

---

## 2. Assets and trust boundaries

_Identify key assets and major trust boundaries in the system._

---

## 3. Attacker profiles

_Describe plausible attacker types and capabilities._

---

## 4. Threats and attack scenarios

_Outline major threats and example attack scenarios._

---

## 5. Mitigations and residual risk

_Summarize key mitigations, remaining risks, and assumptions._
# dCorps – Threat Model

**Document type**: Security analysis  
**Doc ID**: THREAT-MODEL  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/security/THREAT-MODEL.md`)

> Scope: Systematic analysis of threats, assets, and mitigations for the Hub, modules, and recognized sub chains. This document informs design, audits, and incident response.

---

## 1. Scope and methodology

This threat model focuses on:

- the dCorps Hub chain and its core modules;
- the protocol module layer and sub chain anchoring;
- governance and treasury at a high level.

External applications, custodians, and user devices are in scope only to the extent that they interact with the Hub and can affect its security or trust assumptions.

A lightweight methodology is used:

- identify critical assets and trust boundaries;
- define plausible attacker profiles;
- enumerate key threats and attack paths;
- document existing and planned mitigations;
- record residual risks and assumptions.

This document is a living artifact and SHOULD be updated as the system evolves.

---

## 2. Assets and trust boundaries

### 2.1 Key assets

Key assets include:

- integrity and availability of the Hub blockchain;
- correctness of entity registry and module attachments;
- security of DCHUB staking and recognition deposits;
- confidentiality and integrity of foundation and treasury operations;
- integrity of tagged accounting data and reporting views.

### 2.2 Trust boundaries

Important trust boundaries:

- between the Hub and protocol modules;
- between the Hub and recognized sub chains;
- between on-chain governance and off-chain execution (e.g. foundation actions);
- between users and external applications that interface with the Hub.

Each boundary may introduce different threat vectors, such as dependency on external validators, API gateways, or legal entities.

---

## 3. Attacker profiles

Representative attacker types include:

- **Economically motivated attackers**
  - seek to steal funds, manipulate markets, or extract MEV beyond acceptable limits.
- **Protocol adversaries**
  - attempt to disrupt consensus, censor transactions, or corrupt the entity registry.
- **Insiders and colluding parties**
  - compromised or malicious validators, developers, or key holders.
- **Regulatory or legal actors**
  - may impose constraints that indirectly affect security or availability.
- **Opportunistic attackers**
  - exploit unpatched bugs, misconfigurations, or poorly secured infrastructure.

These profiles help prioritize mitigations and understand potential impacts.

---

## 4. Threats and attack scenarios

Examples of threat categories and scenarios:

- **Consensus and staking**
  - stake concentration enabling censorship or reorgs;
  - double-signing and equivocation attacks;
  - long-range attacks if key management or unbonding rules are weak.
- **Entity and module integrity**
  - unauthorized entity or module registrations;
  - malicious modules with excessive privileges;
  - misconfigured governance that allows dangerous changes with low friction.
- **Anchoring and recognition**
  - sub chains submitting fraudulent anchors;
  - failure to anchor within required windows, reducing observability;
  - sybil or spoofing attacks on anchor submissions.
- **Governance and treasury**
  - social engineering or bribery around governance votes;
  - treasury mismanagement or theft due to poor controls;
  - malicious proposals that appear benign on the surface.

Each scenario SHOULD be documented with:

- preconditions and attack path;
- potential impact;
- likelihood (qualitative);
- existing and planned mitigations.

---

## 5. Mitigations and residual risk

Mitigations span multiple layers:

- **Protocol-level**
  - staking and slashing parameters that deter misbehavior;
  - capability-based module permissions and isolation;
  - anchoring standards that detect and respond to suspicious behavior.
- **Governance-level**
  - strong thresholds and timelocks for sensitive changes;
  - transparency and documentation of decisions;
  - delegation structures that reduce capture risk.
- **Operational-level**
  - secure development and deployment processes;
  - robust key and infrastructure management;
  - coordinated incident response and communication.

Residual risks SHOULD be clearly documented along with:

- assumptions that may change over time;
- areas where further research or tooling is needed;
- recommendations for ecosystem participants to reduce their own exposure.
