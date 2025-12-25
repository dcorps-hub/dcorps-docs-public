# Runbook - Chain Upgrades and Rollback

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-UPGRADES  
**Status**: Final v0.1  
**Source repo**: dcorps-docs-public ([docs/devops/RUNBOOK-UPGRADES.md](/devops/RUNBOOK-UPGRADES))  
**Publishing date**: 2025-12-24  
**Last updated**: 2025-12-24  

> Scope: Public-safe steps for planned upgrades and rollback posture.

---

## 1. Preconditions

- Upgrade proposal (or equivalent governance process) is approved where required.
- Release artifacts are available (tag, binaries, checksums, upgrade notes).
- A staging rehearsal is completed against a realistic state snapshot.
- Validators have a published upgrade window and a clear rollback posture.

---

## 2. Planned upgrade steps (public-safe)

1. Publish release notes, binaries, and checksums.
2. Announce upgrade height and window (including expected downtime).
3. Rehearse the upgrade on staging using the same artifacts.
4. Coordinate validator readiness (minimum quorum online, comms channel active).
5. Execute upgrade using `cosmovisor` (recommended) or an equivalent supervised process.
6. Verify chain health and indexer catch-up.

---

## 3. Validation checklist

- Chain continues finalizing blocks at target height.
- Validators upgrade within the expected window.
- RPC and indexer are healthy.
- No unexpected parameter or state drift is observed post-upgrade.

---

## 4. Rollback posture (public-safe)

- Rollbacks are exceptional and require governance alignment.
- Maintain snapshot and upgrade artifacts for quick recovery.
- If rollback is required, publish a public incident summary after containment.
