# Corporation Solo Operator

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-CORP-SOLO  
**Status**: Draft v0.1  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/CORP-SOLO.md](/hub-templates/CORP-SOLO))  
**Last updated**: 2026-01-03  

> Scope: Defines the CORP-SOLO Hub corporation template.

---

## Summary

- **Code**: CORP-SOLO
- **Template class**: Hub corporation
- **Complexity**: Low

---

## Intended for

- Solo founders or owner-operators who want a clean, legible on-chain structure.
- Teams that need a single signer and minimal governance complexity.

---

## Core structure

- **Cap table**: Default 10,000 base units (1 unit = 0.01 percent).
- **Authority**: Single signer (1-of-1 treasury) with minimal role structure.
- **Wallets**: Canonical income and treasury wallets; optional payroll/vendor wallets.
- **Events**: Tagged inflow/outflow events to support reproducible views.

---

## Reporting view

- Cash-based time-window view derived from tagged on-chain events.

---

## Optional add-ons

- Document anchors for material decisions or agreements.
- Optional modules for expanded workflows as needed.

---

## Boundaries

- Templates define on-chain structure and evidence. Legal recognition remains off-chain or via optional modules.
