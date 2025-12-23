# DevOps Security

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-SECURITY  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/devops/SECURITY.md`)

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
- Keep sensitive runbook details in `docs/restricted/` if needed.

---

## Incident response

- Follow `docs/security/INCIDENT-RESPONSE.md`.
- Maintain clear escalation paths.
- Publish public incident summaries after remediation when appropriate.
