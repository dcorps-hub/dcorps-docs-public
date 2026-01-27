# Hub Templates Index

**Document type**: Hub template index  
**Doc ID**: HUB-TEMPLATES-INDEX  
**Status**: Final v0.2  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/INDEX.md](/hub-templates/INDEX))  
**Last updated**: 2026-01-25

> Scope: Public reference for the Hub template catalog (corporation and nonprofit templates).

---

## What templates are

Templates are standardized governance and operating blueprints for Hub entities. They define the default structure, roles, wallets, and reporting views for an entity type. The catalog expands over time as new management scenarios are formalized.

---

## How to use templates (high-level)

- Pick the template code that matches your governance needs and operating complexity.
- Create the entity on the Hub using that template code.
- Bind canonical wallets and roles according to the template.
- Create catalog items/services and on-chain invoices; use the canonical payment wallet type for customer or donor payments.
- Use USDC (bridged from Ethereum to the canonical USDC contract on dCorps) as the v0.1 operating currency and reporting unit of account (USDC-only in v0.1; additional assets may be approved later).
- Configure gas coverage for signers (DCHUB): keep signer balances funded, set up DCHUB fee grants, or use apps with sponsored transactions.
- Route inflows/outflows through canonical wallets to maximize coverage.
- Tag material inflows/outflows using the required tags (`category_code`, `counterparty_type`, `reference_id`, `reference_type` when applicable) plus template-specific tags from each guide.
- Anchor evidence (minutes, policies, invoices, receipts, agreements) for material items.
- Use recurring plans when you need automatic, scheduled invoices.
- Use reference tooling (indexers/explorers) to generate time-window reporting views over any selected timeframe:
  - corporations: cash-based operating view
  - nonprofits: allocation view (with a required transparency floor)

---

## Tagging and template-specific tags

Tags make accounting events and allocation views reproducible. Every template uses the same required tags:

- `category_code`
- `counterparty_type`
- `reference_id` (when applicable)
- `reference_type` (when `reference_id` is present)

Each template highlights a focused set of optional tag groups. Use the full taxonomy in `SPEC-DATA.md` when you need additional granularity.

### Template tag sets (at a glance)

- CORP-SOLO: operating/org context + equity context tags.
- CORP-PRIVATE-STD: operating/org context + equity context tags.
- CORP-VENTURE: operating/org context + capital/financing context tags.
- CORP-COMPLEX-PRIVATE: operating/org context + capital/financing + treasury/asset context tags.
- NONPROFIT-SIMPLE: program/fund + donor/grant context tags.
- NONPROFIT-BOARD: program/fund + donor/grant + impact/reporting context tags.
- NONPROFIT-COMPLEX: program/fund + donor/grant + impact + treasury/asset context tags.

---

## What all templates share (kernel building blocks)

Across corporation and nonprofit templates, the Hub kernel provides the same core primitives:

- **Entity registry**
  - stable Entity ID, type, lifecycle status, and minimal metadata.
- **Role bindings and authority**
  - who can configure the entity, approve actions, and sign flows.
- **Authority and operational wallets**
  - role-bound authority wallets sign actions; operational wallets receive and send USDC.
- **Canonical wallets**
  - standardized wallet type bindings used by apps and indexers for payment routing.
- **Commerce primitives**
  - catalog items/services, invoices (payment requests), and recurring plans with status tracking.
- **Tagged accounting events**
  - category codes and tags on inflows/outflows for reproducible reporting.
- **Anchors**
  - document hashes and references linked to governance actions and financial events.
- **Derived views (reference tooling)**
  - time-window reporting outputs computed over any selected timeframe (not stored as periodic reports on-chain).

---

## Units and ownership (v0.1 clarifications)

These clarifications apply across the template catalog:

- **Hub units (corporations only)**
  - Units are internal ownership and voting rights inside a Hub corporation (they are not global protocol tokens).
  - Default base unit count is **10,000** (1 unit = 0.01 percent).
  - Base unit count is not forced: corporations can adopt an expanded base unit count as a **multiple of 10,000** (e.g., 100,000 or 1,000,000) to increase precision without changing ownership percentages.
  - The protocol does not enforce a maximum base unit count, but v0.1 templates and reference tooling assume a practical guardrail: **recommended maximum 1,000,000 base units** for interoperability and UI performance.
- **Entity-to-entity ownership and control**
  - A Hub corporation can hold units in other Hub corporations (holding companies, subsidiaries, SPVs, joint ventures).
  - Hub nonprofits have no equity and are not “owned” by units, but they can still participate in group structures by:
    - holding units in a Hub corporation subsidiary, and/or
    - using anchored governance documents and off-chain legal controls (e.g., membership/appointment rights) to express parent/control relationships.

---

## Adoption guides

- Treasury continuity (USDC issuer risk, segmentation, fee grants, incident plan): [docs/adoption/TREASURY_CONTINUITY.md](/adoption/TREASURY_CONTINUITY)

---

## Hub corporation templates

- Corporation Solo Operator (`CORP-SOLO`): [docs/hub-templates/CORP-SOLO.md](/hub-templates/CORP-SOLO)
- Corporation Private Standard (`CORP-PRIVATE-STD`): [docs/hub-templates/CORP-PRIVATE-STD.md](/hub-templates/CORP-PRIVATE-STD)
- Corporation Venture Grade (`CORP-VENTURE`): [docs/hub-templates/CORP-VENTURE.md](/hub-templates/CORP-VENTURE)
- Corporation Complex Private (`CORP-COMPLEX-PRIVATE`): [docs/hub-templates/CORP-COMPLEX-PRIVATE.md](/hub-templates/CORP-COMPLEX-PRIVATE)

---

## Corporation template selection guide

| Template code | Complexity | Governance model (default) | Capital structure focus | Best fit | Typical next step |
| --- | --- | --- | --- | --- | --- |
| `CORP-SOLO` | Low | Single operator (1-of-1) | Single-class units, simple cap table | Solo operator, fastest setup | `CORP-PRIVATE-STD` |
| `CORP-PRIVATE-STD` | Low–Medium | Role-based separation of duties | Single-class units, routine approvals | Small teams, “serious small company” | `CORP-VENTURE` |
| `CORP-VENTURE` | Medium | Board + protected matters | Pools/vesting patterns, stricter transfers | Venture-backed governance | `CORP-COMPLEX-PRIVATE` |
| `CORP-COMPLEX-PRIVATE` | High | Board + committees | Multi-class units + rounds + pools/vesting + group structures | Mature private corp / holdings | Custom / future templates |

Common upgrade triggers:

- Add separation of duties or multiple signers → move from `CORP-SOLO` to `CORP-PRIVATE-STD`.
- Add a board, financings, pools/vesting, and stricter transfer restrictions → move to `CORP-VENTURE`.
- Add multi-class units, committees, holdings, or advanced treasury tiers → move to `CORP-COMPLEX-PRIVATE`.

---

## Hub nonprofit templates

- Nonprofit Simple (`NONPROFIT-SIMPLE`): [docs/hub-templates/NONPROFIT-SIMPLE.md](/hub-templates/NONPROFIT-SIMPLE)
- Nonprofit Board (`NONPROFIT-BOARD`): [docs/hub-templates/NONPROFIT-BOARD.md](/hub-templates/NONPROFIT-BOARD)
- Nonprofit Complex (`NONPROFIT-COMPLEX`): [docs/hub-templates/NONPROFIT-COMPLEX.md](/hub-templates/NONPROFIT-COMPLEX)

---

## Nonprofit template selection guide

| Template code | Complexity | Governance model (default) | Fund/program focus | Best fit | Typical next step |
| --- | --- | --- | --- | --- | --- |
| `NONPROFIT-SIMPLE` | Low | Board-governed baseline | Donation + optional program wallets | Small nonprofits / single program | `NONPROFIT-BOARD` |
| `NONPROFIT-BOARD` | Medium | Board + committee layers | Multi-program structure + policy controls | Multi-program nonprofit | `NONPROFIT-COMPLEX` |
| `NONPROFIT-COMPLEX` | Medium–High | Board + committees + sponsorship oversight | Designated funds + umbrella structures + selective disclosure | Umbrella NGOs / fiscal sponsors / foundations | Custom / future templates |

Nonprofit transparency floor (important):

- Hub nonprofits must meet a minimum transparency floor in all disclosure modes.
- This floor includes: donation/grant inflows totals, category-level outflows totals, and board governance events over any selected timeframe.

---

## Notes

- Templates are on-chain structure definitions. Legal recognition and regulatory alignment remain off-chain or optional module overlays.
- Templates are not fixed; governance can add or refine templates as the ecosystem evolves.

---

## References

- Whitepaper Long (templates, nonprofit model, disclosure modes): [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Core spec: [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- Data standards and tagging: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- Reference indexer behavior: [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)
