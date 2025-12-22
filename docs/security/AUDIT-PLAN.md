# dCorps – Audit Plan

**Document type**: Security process  
**Doc ID**: AUDIT-PLAN  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/security/AUDIT-PLAN.md`)

> Scope: Planning and execution framework for security and code audits across the dCorps protocol, modules, and critical tooling.

---

## 1. Objectives and scope

Audits are intended to:

- identify and remediate security vulnerabilities before they are exploited;
- validate correctness of critical protocol logic and implementations;
- build confidence for users, validators, and partners.

Scope priorities:

- core Hub state machine and consensus integration;
- protocol modules with high impact (funds, governance, or recognition);
- critical infrastructure and key management tooling where feasible.

Audits are not a guarantee of safety and do not replace ongoing security work.

---

## 2. Auditor selection and independence

Auditors:

- have demonstrated expertise in relevant technology stacks;
- are independent from core development teams and major stakeholders where possible;
- disclose any conflicts of interest.

Selection criteria include:

- track record and references;
- capacity to perform in-depth reviews on relevant timelines;
- ability to provide actionable remediation guidance.

Multiple auditors may be engaged over time to reduce concentration risk and provide diverse perspectives.

---

## 3. Audit lifecycle

Typical lifecycle:

1. **Scoping**
   - define components in scope, timelines, and success criteria;
   - prepare threat model excerpts and relevant documentation.
2. **Pre-audit preparation**
   - freeze or tag code for review;
   - ensure build instructions and tests are accurate and complete.
3. **Execution**
   - auditors perform manual review and automated analysis;
   - maintain communication channel for clarifications.
4. **Reporting**
   - auditors deliver a report with findings, severities, and recommendations;
   - teams triage findings and plan remediation.
5. **Remediation and verification**
   - implement fixes;
   - obtain verification from auditors where applicable;
   - publish updated reports and changelogs.

Timelines allow for iterative review and fixes before high-risk launches or upgrades.

---

## 4. Issue classification and tracking

Findings are classified by:

- severity (e.g. critical, high, medium, low, informational);
- impact area (funds, consensus, data integrity, privacy, performance);
- likelihood (qualitative).

Tracking:

- uses an internal or open issue tracker with appropriate access controls;
- records status (open, in progress, resolved, wont-fix) and resolution details;
- links to relevant commits, patches, and governance decisions.

Critical and high-severity issues are addressed before mainnet launches or major upgrades, unless there is a clearly documented and accepted rationale.

---

## 5. Transparency and disclosure

Where legally and practically feasible:

- audit reports are published or summarized for the community;
- known limitations or deferred fixes are clearly identified;
- timelines for future audits are communicated.

Confidentiality constraints (e.g. on specific exploit paths) may require partial or delayed disclosure, but the default posture is transparency balanced with responsible disclosure practices.
