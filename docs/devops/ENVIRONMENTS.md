# Environments

**Document type**: DevOps guide  
**Doc ID**: DEVOPS-ENVIRONMENTS  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/devops/ENVIRONMENTS.md`)

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

## Environment readiness checklist

- Chain ID, denom, and bech32 prefixes defined and documented.
- Genesis process documented and repeatable.
- RPC, gRPC, REST endpoints defined.
- Faucet or funding workflow defined for dev and staging.
- Indexer and explorer endpoints available.
- Monitoring and alerting active.
- Backups and snapshots defined.
- Runbooks available for upgrades and incidents.
- Promotion gates defined (`docs/devops/RELEASE_PROCESS.md`).

---

## Open decisions

- Exact chain IDs and network names.
- Hosting and infrastructure topology.
- Access control model and on-call rotation.
- Release cadence for each environment.
