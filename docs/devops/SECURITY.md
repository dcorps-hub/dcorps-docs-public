# DevOps Security

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-SECURITY  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/devops/SECURITY.md](/devops/SECURITY))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Security posture for infrastructure and operations. No live secrets are stored in this repo.

---

## Principles

- Least privilege for access.
- Auditability for production changes.
- Separation between dev, staging, and prod access.
- No secrets in Git or public artifacts.

---

## Key and secret management

- Use dedicated secret management tools and access controls.
- Rotate keys and credentials on a schedule.
- Keep sensitive runbook details in `dcorps-docs-private/docs/restricted/` if needed.
- Public-safe key policy: [docs/security/KEY-MANAGEMENT.md](/security/KEY-MANAGEMENT).

---

## Incident response

- Follow [docs/security/INCIDENT-RESPONSE.md](/security/INCIDENT-RESPONSE).
- Maintain clear escalation paths.
- Publish public incident summaries after remediation when appropriate.
