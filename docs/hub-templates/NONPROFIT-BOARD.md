# Nonprofit Board

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-NONPROFIT-BOARD  
**Status**: Draft v0.1  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/NONPROFIT-BOARD.md](/hub-templates/NONPROFIT-BOARD))  
**Last updated**: 2026-01-03  

> Scope: Defines the NONPROFIT-BOARD Hub nonprofit template.

---

## Summary

- **Code**: NONPROFIT-BOARD
- **Template class**: Hub nonprofit
- **Complexity**: Medium

---

## Intended for

- Nonprofits with board and committee governance layers.
- Organizations running multiple programs with tighter allocation rules.

---

## Core structure

- **Governance**: Board and committee approvals with explicit role wallets.
- **Wallets**: Multi-program wallet structure with canonical donation and treasury wallets.
- **Allocation policies**: Board-approved policies and constraints for spending.
- **Events**: Tagged inflow/outflow events for reproducible allocation views.

---

## Reporting view

- Allocation view derived from tagged on-chain events over any selected timeframe.
- Minimum transparency floor across disclosure modes.

---

## Optional add-ons

- Document anchors for policy changes and material allocations.
- Optional program granularity if it improves clarity.

---

## Boundaries

- Templates define on-chain structure and evidence. Legal recognition remains off-chain or via optional modules.
