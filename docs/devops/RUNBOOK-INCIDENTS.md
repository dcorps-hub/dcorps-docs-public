# Runbook - Incident Response (Operational)

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-INCIDENTS  
**Status**: Living v0.1  
**Source repo**: dcorps-docs-public (`docs/devops/RUNBOOK-INCIDENTS.md`)

> Scope: Operational incident steps aligned to `docs/security/INCIDENT-RESPONSE.md`.

---

## 1. Triage

- Classify severity (low, medium, high, critical).
- Confirm scope: chain, indexer, wallet UX, or external dependency.

---

## 2. Containment

- Isolate impacted services.
- Notify validators and operators.
- Document immediate mitigations.

---

## 3. Recovery

- Deploy fixes or configuration changes.
- Validate block production and API health.
- Monitor for recurrence.

---

## 4. Post-incident

- Publish a summary when safe.
- Log the incident and follow-up actions.
- Update threat model and runbooks as needed.
