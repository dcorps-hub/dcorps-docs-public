# dCorps – Security Incident Response

**Document type**: Security playbook  
**Doc ID**: INCIDENT-RESPONSE  
**Status**: Draft  
**Source repo**: dcorps-docs (`docs/security/INCIDENT-RESPONSE.md`)

> Scope: Process and roles for detecting, triaging, and responding to security incidents.

---

## 1. Detection and triage

_Describe how incidents are detected, validated, and initially classified._

---

## 2. Severity levels

_Define severity tiers and their criteria._

---

## 3. Response roles and responsibilities

_Outline who does what during an incident._

---

## 4. Technical response and remediation

_Describe steps for containment, mitigation, patching, and verification._

---

## 5. Communication and post-incident review

_Explain communication to users/partners and postmortem expectations._
# dCorps – Security Incident Response

**Document type**: Security playbook  
**Doc ID**: INCIDENT-RESPONSE  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/security/INCIDENT-RESPONSE.md`)

> Scope: Process and roles for detecting, triaging, and responding to security incidents affecting the dCorps Hub, modules, and related infrastructure.

---

## 1. Detection and triage

Incidents may be detected via:

- monitoring alerts from nodes, indexers, or infrastructure;
- reports from users, validators, or researchers;
- anomalies observed in on-chain data or logs.

Upon detection:

- triage MUST classify the report as potential incident, false positive, or informational;
- basic information SHOULD be collected (scope, indicators, evidence);
- initial severity assessment SHOULD be assigned (e.g. low, medium, high, critical).

Low-severity issues may be handled through normal development processes; high and critical incidents trigger full incident response.

---

## 2. Severity levels

Example severity levels:

- **Critical** – immediate risk to funds, consensus, or core data integrity.
- **High** – serious impact on security or availability but with some mitigating factors.
- **Medium** – limited scope or partial mitigations available.
- **Low** – minor issues or ones with negligible security impact.

Severity levels guide:

- who must be involved;
- how quickly actions should be taken;
- how and when the community is informed.

---

## 3. Response roles and responsibilities

Key roles may include:

- **Incident coordinator**
  - leads the response process, manages communication, and ensures documentation.
- **Technical leads**
  - investigate root cause, design and implement fixes or mitigations.
- **Validator and operations liaisons**
  - coordinate with validator sets and infrastructure operators.
- **Communications lead**
  - manages internal and external communication, including public statements.

Individuals may hold multiple roles in smaller teams, but responsibilities SHOULD be clearly understood in advance.

---

## 4. Technical response and remediation

Depending on the incident, technical steps MAY include:

- temporarily disabling or rate-limiting affected features (where possible);
- deploying configuration changes (e.g. parameter updates, validator recommendations);
- preparing and deploying code fixes via emergency or expedited upgrades;
- coordinating with module or sub chain operators if the issue originates there.

All changes SHOULD be:

- tested in appropriate environments where time permits;
- logged and documented for later review;
- communicated to validators and key ecosystem operators.

---

## 5. Communication and post-incident review

Communication SHOULD:

- balance transparency with the need to avoid enabling exploitation before fixes are deployed;
- provide timely updates to validators, partners, and the broader community;
- be honest about impact, mitigations, and remaining uncertainty.

After an incident is resolved:

- a postmortem SHOULD be conducted, focusing on root causes and lessons learned;
- follow-up actions SHOULD be tracked (e.g. additional audits, process improvements);
- relevant documentation (Threat Model, Security Policy, etc.) SHOULD be updated.
