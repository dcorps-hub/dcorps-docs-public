# Runbook - Chain Upgrades and Rollback

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-UPGRADES  
**Status**: Living v0.1  
**Source repo**: dcorps-docs-public (`docs/devops/RUNBOOK-UPGRADES.md`)

> Scope: Public-safe steps for planned upgrades and rollback posture.

---

## 1. Planned upgrade steps

1. Publish release notes, binaries, and checksums.
2. Announce upgrade height and window.
3. Rehearse the upgrade on staging.
4. Execute upgrade using `cosmovisor` or equivalent.
5. Verify chain health and indexer catch-up.

---

## 2. Validation checklist

- Chain continues finalizing blocks at target height.
- Validators upgrade within the expected window.
- RPC and indexer are healthy.

---

## 3. Rollback posture (public-safe)

- Rollbacks are exceptional and require governance alignment.
- Maintain snapshot and upgrade artifacts for quick recovery.
- If rollback is required, publish a public incident summary.
