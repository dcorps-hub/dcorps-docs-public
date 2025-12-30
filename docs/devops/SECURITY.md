# DevOps Security

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-SECURITY  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/SECURITY.md](/devops/SECURITY))  
**Last updated**: 2025-12-24  

> Scope: Security posture for infrastructure and operations. No live secrets are stored in this repo.

---

## Principles

- Least privilege for access.
- Auditability for production changes.
- Separation between dev, staging, and prod access.
- No secrets in Git or public artifacts.

---

## Secret handling

- Use dedicated secret management tools and access controls.
- Rotate credentials on a schedule.
- Keep sensitive runbook details in `dcorps-docs-private/docs/restricted/` if needed.

---

## Incident response

- Follow [docs/security/INCIDENT-RESPONSE.md](/security/INCIDENT-RESPONSE).
- Maintain clear escalation paths.
- Publish public incident summaries after remediation when appropriate.
