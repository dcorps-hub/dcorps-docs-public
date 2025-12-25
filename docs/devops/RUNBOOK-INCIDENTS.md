# Runbook: Incidents

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-INCIDENTS  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/RUNBOOK-INCIDENTS.md](/devops/RUNBOOK-INCIDENTS))  
**Last updated**: 2025-12-24  

> Scope: Operational incident steps aligned to [docs/security/INCIDENT-RESPONSE.md](/security/INCIDENT-RESPONSE).

---

## 1. Triage

- Classify severity (low, medium, high, critical).
- Confirm scope: chain, indexer, wallet UX, or external dependency.
- Capture minimum incident facts:
  - start time (UTC) and detection source
  - impacted components and users
  - suspected root cause (hypothesis)
  - current mitigations and next steps

---

## 2. Containment

- Isolate impacted services.
- Notify validators and operators.
- Document immediate mitigations.
- Avoid publishing attacker-enabling details until remediation is deployed (see [docs/policy/POL-DOCS-PUBLICATION.md](/policy/POL-DOCS-PUBLICATION)).

---

## 3. Recovery

- Deploy fixes or configuration changes.
- Validate block production and API health.
- Monitor for recurrence.
- When applicable, rehearse fixes on staging before production rollout.

---

## 4. Post-incident

- Publish a summary when safe.
- Log the incident and follow-up actions.
- Update threat model and runbooks as needed.
