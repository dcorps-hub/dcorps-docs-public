# dCorps – Security Incident Response

**Document type**: Security playbook  
**Doc ID**: INCIDENT-RESPONSE  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/security/INCIDENT-RESPONSE.md`)

> Scope: Process and roles for detecting, triaging, and responding to security incidents affecting the dCorps Hub, modules, and related infrastructure.

---

## 1. Detection and triage

Incidents may be detected via:

- monitoring alerts from nodes, indexers, or infrastructure;
- reports from users, validators, or researchers;
- anomalies observed in on-chain data or logs.

Upon detection:

- triage classifies the report as potential incident, false positive, or informational;
- basic information is collected (scope, indicators, evidence);
- an initial severity assessment is assigned (e.g. low, medium, high, critical).

Low-severity issues may be handled through normal development processes; high and critical incidents trigger full incident response.

---

## 2. Severity levels

Example severity levels:

- critical – immediate risk to funds, consensus, or core data integrity;
- high – serious impact on security or availability but with some mitigating factors;
- medium – limited scope or partial mitigations available;
- low – minor issues or ones with negligible security impact.

Severity levels guide:

- who must be involved;
- how quickly actions should be taken;
- how and when the community is informed.

---

## 3. Response roles and responsibilities

Key roles may include:

- incident coordinator – leads the response process, manages communication, and ensures documentation;
- technical leads – investigate root cause, design and implement fixes or mitigations;
- validator and operations liaisons – coordinate with validator sets and infrastructure operators;
- communications lead – manages internal and external communication, including public statements.

Individuals may hold multiple roles in smaller teams, but responsibilities are clearly understood in advance.

---

## 4. Technical response and remediation

Depending on the incident, technical steps may include:

- temporarily disabling or rate-limiting affected features (where possible);
- deploying configuration changes (e.g. parameter updates, validator recommendations);
- preparing and deploying code fixes via emergency or expedited upgrades;
- coordinating with module or sub chain operators if the issue originates there.

All changes are:

- tested in appropriate environments where time permits;
- logged and documented for later review;
- communicated to validators and key ecosystem operators.

Operational runbook: `docs/devops/RUNBOOK-INCIDENTS.md`.

---

## 5. Communication and post-incident review

Communication:

- balances transparency with the need to avoid enabling exploitation before fixes are deployed;
- provides timely updates to validators, partners, and the broader community;
- is honest about impact, mitigations, and remaining uncertainty.

After an incident is resolved:

- a postmortem is conducted, focusing on root causes and lessons learned;
- follow-up actions are tracked (e.g. additional audits, process improvements);
- relevant documentation (Threat Model, Security Policy, etc.) is updated.
