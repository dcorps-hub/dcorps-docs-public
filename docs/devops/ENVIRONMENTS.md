# Environments

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-ENVIRONMENTS  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/ENVIRONMENTS.md](/devops/ENVIRONMENTS))  
**Last updated**: 2025-12-24  

> Scope: Define dev, staging, and prod environments for dCorps infrastructure.

---

## Environment goals

### Dev

- Fast iteration for core protocol and tooling.
- Short-lived data is acceptable.
- Access is limited to core contributors.
- Uptime is best-effort.

### Staging

- Mirrors production configuration as closely as possible.
- Used for upgrade rehearsals and release candidates.
- Data is reset as needed, but should support realistic load tests.
- Access is limited to trusted contributors and operators.

### Prod

- Mainnet or production-grade network.
- Strict change control and auditability.
- Full monitoring, alerting, and incident response.
- Access is restricted and logged.

---

## Reference topology (baseline)

Baseline infrastructure is cloud-hosted and can be mirrored by validators.

- Validators run behind sentry nodes.
- Public RPC/gRPC/REST nodes are isolated behind load balancers.
- Indexer and explorer are separated from validator infrastructure.
- Snapshots and backups are stored in independent object storage.

This baseline is provider-agnostic but defaults to AWS for reference deployments.

---

## Environment readiness checklist

- Chain ID, denom, and bech32 prefixes defined and documented ([docs/devops/NETWORK_PARAMS.md](/devops/NETWORK_PARAMS)).
- Genesis process documented and repeatable.
- RPC, gRPC, REST endpoints defined.
- Faucet or funding workflow defined for dev and staging.
- Indexer and explorer endpoints available.
- Monitoring and alerting active.
- Backups and snapshots defined.
- Runbooks available for upgrades and incidents.
- Promotion gates defined ([docs/devops/RELEASE_PROCESS.md](/devops/RELEASE_PROCESS)).

---

## Decisions (baseline)

- Access control model: RBAC with least privilege, MFA required, break-glass access logged.
- On-call rotation: weekly primary/secondary for prod; best-effort coverage for dev/staging.
- Release cadence:
  - Dev: weekly
  - Staging: monthly
  - Prod: quarterly (emergency patches as needed)
