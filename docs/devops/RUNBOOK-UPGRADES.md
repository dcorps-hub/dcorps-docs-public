# Runbook: Upgrades

**Document type**: DevOps runbook  
**Doc ID**: DEVOPS-RUNBOOK-UPGRADES  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/devops/RUNBOOK-UPGRADES.md](/devops/RUNBOOK-UPGRADES))  
**Last updated**: 2026-01-25

> Scope: Public-safe steps for planned upgrades and rollback posture.

---

## 1. Preconditions

- Upgrade proposal (or equivalent governance process) is approved where required.
- Release artifacts are available (tags, binaries, checksums, upgrade notes).
- A staging rehearsal is completed against a realistic state snapshot.
- Operators have a published upgrade window and a clear rollback posture.

---

## 2. Planned upgrade steps (public-safe)

1. Publish release notes, artifacts, and checksums.
2. Announce upgrade window (including expected downtime).
3. Rehearse the upgrade on staging using the same artifacts.
4. Coordinate operator readiness (sequencer, batch poster, and RPC).
5. Execute the upgrade using the approved deployment process and timelock controls.
6. Verify chain health, batch posting, and indexer catch-up.

---

## 3. Validation checklist

- Chain continues finalizing batches within target windows.
- Operators upgrade within the expected window.
- RPC and indexer are healthy.
- No unexpected parameter or state drift is observed post-upgrade.

---

## 4. Rollback posture (public-safe)

- Rollbacks are exceptional and require governance alignment.
- Maintain snapshots and upgrade artifacts for quick recovery.
- If rollback is required, publish a public incident summary after containment.
