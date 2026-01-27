# Localization and Translations

**Document type**: Policy  
**Doc ID**: POL-LOCALIZATION  
**Status**: Final v0.1  
**Release date**: December 28, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/policy/POL-LOCALIZATION.md](/policy/POL-LOCALIZATION))  
**Last updated**: 2026-01-25

> Scope: Define the intended language coverage for dCorps across the website, documentation, and testnet/mainnet-facing materials.

Status note: this is a **planned** adoption workstream. Current public materials are **English-only** unless a specific translation is explicitly published.

---

## Language set (no tiers)

- English
- Spanish
- French
- Chinese (Simplified)
- Portuguese (Brazilian)
- Russian
- Korean
- Japanese
- Arabic
- Hindi
- Indonesian
- Turkish
- Vietnamese

Rationale (design intention): cover the main global adoption regions and regulatory-relevant markets across the Americas, Europe, East Asia, South and Southeast Asia, and the Middle East.

---

## What is in scope to translate

Design intention: translate user-facing material, not protocol semantics.

In scope:

- Website copy and navigation (`dcorps-site/`).
- Docs Center content in this repo (`docs/`), including whitepapers and policy documents.
- Testnet and mainnet operational materials: release notes, operator onboarding guides, upgrade notices, and incident communications.
- Reference tooling UI text (where applicable): explorer, registry, wallet guidance, and official app.

Out of scope (by default):

- On-chain data, message types, and protocol state machine rules (these remain language-neutral; UIs translate how they are described).

---

## Canonical source and conflict handling

- For correctness and safety, **English is the canonical reference** for normative protocol documents (specs, governance rules, and parameter definitions).
- Translations are intended as access copies and may lag updates.
- If a translated passage conflicts with the English version, treat the English version as the source of truth and file an issue for correction.

---

## Quality and integrity posture

- Keep disclaimers and risk language consistent across languages (no promises, no investment framing, no implication of legal personhood).
- Prefer professional translation + review for high-impact material (legal/risk sections, token documents, and governance policies).
- Maintain a shared terminology glossary so key terms translate consistently (wallet, on-chain, governance, gas, stablecoin, registry, explorer).
