# Corporation Private Standard

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-CORP-PRIVATE-STD  
**Status**: Draft v0.2  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/CORP-PRIVATE-STD.md](/hub-templates/CORP-PRIVATE-STD))  
**Last updated**: 2026-01-25

> Scope: Defines the CORP-PRIVATE-STD Hub corporation template.

---

## Summary

- **Code**: CORP-PRIVATE-STD
- **Template class**: Hub corporation
- **Complexity**: Low to medium
- **Primary objective**: small-team corporation with separation of duties
- **Reporting view**: cash-based time-window operating view (unit of account: USDC)

---

## Why this template exists

- CORP-SOLO optimizes for speed, but many teams quickly need basic governance hygiene:
  - more than one signer for treasury actions,
  - explicit separation between “who can configure” and “who can spend”,
  - a clear approval trail for sensitive payments and cap table actions.
- CORP-PRIVATE-STD is the default “serious small company” template on the Hub.

---

## Intended for

- Small teams and LLC-style private corporations operating primarily in USDC (bridged from Ethereum to the canonical USDC contract on dCorps).
- Operators who need role-based authority, approval routing, and a standard wallet layout without venture-grade complexity.
- Teams that want to start Hub-first and only add modules/adapters when needed.

---

## Not intended for

- Venture-backed governance requiring board processes, pools, vesting schedules, and investor-grade transfer restrictions (use `CORP-VENTURE`).
- Multi-class unit structures, committees, or holding-company/group structures (use `CORP-COMPLEX-PRIVATE`).
- Nonprofits (use `NONPROFIT-*` templates).

---

## What you get (features)

- **Default cap table primitive**
  - Default 10,000 base units (1 unit = 0.01 percent).
  - Optional unit expansion later (multiples of 10,000) for higher precision.
- **Role-based authority**
  - Separate operational roles (configure vs spend vs approve).
  - Clear authority mapping for apps, indexers, and auditors.
- **Approval routing for sensitive actions**
  - Recommended spend tiers (routine vs protected) with explicit co-approval for large or sensitive actions.
- **Canonical wallet structure**
  - Standard wallet bindings used to compute consistent reporting views.
- **Commerce primitives (items, invoices, recurring plans)**
  - On-chain catalog items/services, invoices with status tracking, and optional recurring plans.
- **Tagged flows + evidence anchors**
  - Tagged inflows/outflows drive reproducible time-window reporting.
  - Evidence anchors recommended for material transactions and major decisions.

---

## How this maps to traditional corporate structure (2.0 → Hub)

- Operating agreement / bylaws → anchored hash + role bindings + policy configuration.
- Managers/officers → on-chain roles (admin, treasurer, approver) bound to addresses and/or DIDs.
- Cap table spreadsheet → on-chain units ledger (issue/transfer/cancel).
- Internal controls (two-signature policy) → treasury policy with explicit approvals and thresholds.
- Bank accounts → canonical wallet bindings.
- Cash-based bookkeeping → tagged accounting events + time-window operating views.

---

## Template definition (on-chain structure)

This section describes the minimum structure the template expects. Exact message formats are in the specs.

- **Entity type**: `HUB_CORP`
- **Units**
  - Base unit profile: 10,000 default; optional expansion later in multiples of 10,000 (recommended max 1,000,000 base units in v0.1).
  - Default voting model: one unit, one vote (unless changed by later governance/module overlays).
  - Unit holders can be individual wallets and/or other Hub entities (where used for holding-company structures).
- **Roles (recommended baseline)**
  - `admin`: config authority (roles, wallets, policies, tags, metadata)
  - `treasurer`: operating payments + accounting event emission
  - `approver`: co-approves protected treasury and cap table actions
  - Optional: `secretary` (evidence/anchors operator), `board` (if you want a formal board layer)
- **Authority wallets**
  - Role-bound wallets sign governance actions and approvals; keep separate from payment wallets.
- **Canonical wallets (minimum)**
  - `MERCHANT` (recommended): revenue inflows (invoice and checkout payment address)
  - `OPERATING_TREASURY` (required): primary operating spending
  - `RESERVES` (optional): buffers and strategic reserves
- **Operating currency (v0.1)**
  - Inflows/outflows and reporting are USDC-only in v0.1 (USDC bridged from Ethereum to the canonical USDC contract on dCorps).
  - Gas is paid in DCHUB by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- **Treasury policy (recommended baseline)**
  - Define at least two spend tiers:
    - routine spending: treasurer-only up to a configured limit
    - protected spending: treasurer + approver above that limit
  - Require approvals for sensitive configuration actions (roles, wallets, policies) and for unit actions (issue/transfer/cancel).
- **Tagging and evidence (minimum)**
  - Each material inflow/outflow is tagged with:
    - `category_code` (chart of accounts),
    - `counterparty_type`,
    - `reference_id` and `reference_type` when applicable,
    - amount and denom (USDC-only in v0.1),
    - optional operating/org and equity context tags (`business_unit_tag`, `department_tag`, `cost_center_tag`, `project_tag`, `product_tag`, `item_id`, `channel_tag`, `region_tag`, `counterparty_tag`, `equity_class_tag`, `vesting_schedule_tag`, `option_pool_tag`),
    - optional evidence reference (anchor ID or hash).
  - Evidence anchors are recommended above a materiality threshold (default planning threshold: 1,000 USDC; configurable by entity policy).

---

## Tag schema (template-specific)

Required tags (all templates):

- `category_code`
- `counterparty_type`
- `reference_id` (when applicable)
- `reference_type` (when `reference_id` is present)

Template context tags (use when applicable):

- Operating/org: `business_unit_tag`, `department_tag`, `cost_center_tag`, `project_tag`, `product_tag`, `item_id`, `channel_tag`, `region_tag`, `counterparty_tag`.
- Equity context (if issuing units): `equity_class_tag`, `vesting_schedule_tag`, `option_pool_tag`.

---

## Reporting view (what downstream tools can produce)

- **Cash-based time-window view** (for any selected timeframe)
  - Wallet balances and movements for canonical wallets.
  - Inflows/outflows by category code (and optional tags).
  - Coverage ratios (inflow, outflow, evidence) and explicit “uncategorized” warnings.

---

## Workflow (action flow)

This is the canonical action sequence used later to build a graph/canvas representation.

### 1) Setup (one-time, then iterate)

- Open a dCorps-compatible console app and select the target network.
- Connect wallet(s) for your signers.
- Confirm network and fees:
  - Gas: DCHUB
  - Service fees (when shown): USDC
  - Gas is paid by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- Configure gas coverage for team actions (recommended):
  - Option A: each signer wallet holds DCHUB for gas.
  - Option B: use DCHUB fee grants from an entity-controlled sponsor wallet to signer wallets for routine actions.
  - Option C: use an app that sponsors gas and discloses sponsorship in the signing flow.
- Create the company:
  - Entity type: Hub corporation
  - Template code: CORP-PRIVATE-STD
- Enter company details:
  - display name and minimal metadata,
  - base unit count (default 10,000),
  - initial unit allocation (cap table),
  - initial roles and canonical wallets.
- Sign creation transaction:
  - creates Entity ID and lifecycle status,
  - sets owner-of-record at creation.
- Assign roles (recommended separation of duties):
  - bind `admin`, `treasurer`, `approver` to distinct addresses (or a smaller set if needed); sign.
- Bind canonical wallets:
  - bind `OPERATING_TREASURY` and (recommended) `MERCHANT`; optional `RESERVES`; sign.
- Set treasury policy:
  - routine spend tier (treasurer-only up to limit),
  - protected spend tier (treasurer + approver above limit),
  - optional per-wallet limits and evidence requirements; sign.
- Set basic tags:
  - required: `category_code`, `counterparty_type`, `reference_id` (when applicable), `reference_type` (when `reference_id` is present),
  - operating/org context: `business_unit_tag`, `department_tag`, `cost_center_tag`, `project_tag`, `product_tag`, `item_id`, `channel_tag`, `region_tag`, `counterparty_tag`,
  - equity context (if issuing units): `equity_class_tag`, `vesting_schedule_tag`, `option_pool_tag`; sign.

### 2) Operate (repeat)

- Receive USDC (bridged from Ethereum to the canonical USDC contract on dCorps) into canonical wallets to maximize inflow coverage.
- Use `MERCHANT` as the invoice/checkout payment address for revenue inflows.
- (Optional) Issue an invoice or checkout payment request and anchor evidence:
  - denominate in USDC and pay to `MERCHANT`,
  - hash invoice/receipt/contract file (as applicable),
  - anchor the hash on-chain; optionally include a URI; sign.
- Record income events:
  - `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link invoice reference or anchor; sign.
- (Optional) Move operating funds to treasury:
  - transfer USDC from `MERCHANT` to `OPERATING_TREASURY` (or to `RESERVES`),
  - tag as treasury movement/internal transfer; sign.
- Execute spending under policy:
  - routine payment: treasurer initiates and signs (within limit).
  - protected payment: treasurer initiates; approver co-signs (above limit or protected category).
- Record expense events:
  - `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link receipt anchor/ref when available; sign.
- Cap table actions (when needed):
  - issue/transfer/cancel units under the template’s approval policy; anchor agreements where material.

### 3) Review, report, and close (repeat)

- Review dashboard:
  - balances by canonical wallet,
  - tagged flows and coverage (inflow, outflow, evidence),
  - missing tags or anchors.
- Export reports:
  - select period,
  - export the cash-based operating view (unit of account: USDC).
- Close period:
  - generate a final snapshot view for the period,
  - export and/or anchor the snapshot (gas is DCHUB for anchoring).

---

## Upgrade paths

- If you start as `CORP-SOLO`, move here when you need multiple signers and separation of duties.
- Move to `CORP-VENTURE` when you need board approvals, pools/vesting, and investor-grade transfer restrictions.
- Move to `CORP-COMPLEX-PRIVATE` when you need multi-class units, committees, or holding-company/group structures.

---

## Boundaries and disclaimers

- Templates define on-chain structure and evidence. Legal recognition remains off-chain or via optional modules.
- This document is descriptive and is not legal, tax, accounting, or investment advice.

---

## References

- Whitepaper Long (conceptual intent): [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Treasury continuity guide: [docs/adoption/TREASURY_CONTINUITY.md](/adoption/TREASURY_CONTINUITY)
- Core spec (messages and invariants): [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- Data and tagging standards: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- Reference indexer behavior (reporting views): [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)
