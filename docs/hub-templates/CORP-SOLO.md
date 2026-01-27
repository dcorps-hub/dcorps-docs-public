# Corporation Solo Operator

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-CORP-SOLO  
**Status**: Draft v0.2  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/CORP-SOLO.md](/hub-templates/CORP-SOLO))  
**Last updated**: 2026-01-25

> Scope: Defines the CORP-SOLO Hub corporation template (solo owner-operator).

---

## Summary

- **Code**: CORP-SOLO
- **Template class**: Hub corporation
- **Complexity**: Low
- **Primary objective**: fastest path to a legible on-chain corporation
- **Reporting view**: cash-based time-window operating view (unit of account: USDC)

---

## Why this template exists

- Many real businesses start with a single operator but still need:
  - a verifiable authority record (who can act),
  - a clean operating ledger in USDC (v0.1),
  - reproducible reporting from standardized tagged flows,
  - evidence anchoring for material decisions and payments.
- CORP-SOLO is the smallest Hub corporation template that still produces those outputs.

---

## Intended for

- Solo founders or owner-operators who want a clean, legible on-chain structure.
- Teams that accept a single controller during the early phase (1 signer, minimal separation of duties).
- Migrating an existing off-chain entity to a parallel on-chain operating ledger under one controller (optional).
- Solo owners who still delegate limited authority to employees or operators.

---

## Not intended for

- Any organization that needs:
  - multiple signers and separation of duties,
  - board approvals and protected matters,
  - investor-grade issuance, vesting, or transfer restriction workflows.
- Nonprofits (use `NONPROFIT-*` templates).

---

## What you get (features)

- **Simple cap table primitive**
  - Default 10,000 base units (1 unit = 0.01 percent).
  - Optional unit expansion later (multiples of 10,000) to increase precision without changing percentages.
- **Single-operator authority**
  - One address holds admin, board, and treasurer powers.
  - Default treasury approval is 1-of-1.
- **Delegated operators and employee roles (optional)**
  - Employee role wallets can draft invoices, tag flows, or prepare payouts.
  - The owner retains final approval for protected actions.
- **Canonical wallet structure**
  - Standard wallet bindings used by apps and indexers to compute consistent views.
- **Approval scopes and limits**
  - Per-wallet or per-category thresholds define what can execute automatically vs require approval.
- **Commerce primitives (items, invoices, recurring plans)**
  - On-chain catalog items/services, invoices with status tracking, and optional recurring plans.
  - Invoice status supports waivers and cancellations for exceptions.
- **Payroll and contractor payouts**
  - Payee wallets receive salary; role wallets handle approvals or execution (kept separate).
  - Tagged payouts for payroll/contractor expenses (optional schedules via apps).
- **Tagged flows for reproducible reporting**
  - Inflows/outflows are tagged with category codes plus operating and equity context tags as needed.
  - Material items can link to anchored evidence (invoices, receipts, agreements).
- **Counterparty directory (privacy-aware)**
  - Pseudonymous counterparty IDs (`counterparty_tag`) map to off-chain records for repeat clients/vendors.
- **Deterministic reporting outputs (reference tooling)**
  - Balances by canonical wallet type.
  - Inflows/outflows by category over any selected timeframe.
  - Coverage ratios (inflow, outflow, evidence) and explicit “uncategorized” warnings.

---

## How this maps to traditional corporate structure (2.0 → Hub)

- Charter / articles → anchored hash + entity registry record (type, template, lifecycle, metadata).
- Bylaws / operating agreement → anchored hash + on-chain role and policy configuration.
- Cap table spreadsheet → on-chain units ledger (issue/transfer/cancel actions).
- Resolutions / consents → on-chain governance actions + anchored resolution docs.
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
- **Roles (default bindings)**
  - `admin`: one address
  - `board`: same address
  - `treasurer`: same address
- **Delegated roles (optional)**
  - Bind employee role wallets for invoicing, tagging, payout prep, or execution under limits.
  - Recommended role types: `operator`, `accountant`, `approver`, `payout_executor`.
- **Authority wallets**
  - Role-bound wallets sign governance actions and approvals; keep separate from payment wallets.
  - Payee wallets used for salary are not authority wallets unless explicitly bound to a role.
- **Canonical wallets (minimum)**
  - `MERCHANT` (recommended): revenue inflows (invoice and checkout payment address)
  - `OPERATING_TREASURY` (required): primary operating spending
  - `RESERVES` (optional): buffers and strategic reserves
- **Operating currency (v0.1)**
  - Inflows/outflows and reporting are USDC-only in v0.1 (USDC bridged from Ethereum to the canonical USDC contract on dCorps).
  - Treasury/reserve wallets may hold DCHUB for gas buffers or protocol exposure; tag holdings with `asset_tag` and `BAL_DCHUB`.
  - Gas is paid in DCHUB by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- **Treasury policy (default)**
  - Approval rule: 1-of-1 (the treasurer address).
  - Optional: per-wallet or per-category limits, plus evidence requirements above a materiality threshold.
- **Tagging and evidence (minimum)**
  - Each material inflow/outflow is tagged with:
    - `category_code` (chart of accounts),
    - `counterparty_type`,
    - `reference_id` and `reference_type` when applicable,
    - amount and denom (USDC-only in v0.1),
    - optional operating and equity context tags (`program_tag` or `business_unit_tag`, `department_tag`, `cost_center_tag`, `project_tag`, `product_tag`, `item_id`, `channel_tag`, `region_tag`, `counterparty_tag`, `equity_class_tag`, `vesting_schedule_tag`, `option_pool_tag`),
    - optional evidence reference (anchor ID or hash).
  - Use `counterparty_tag` as a pseudonymous ID; keep mappings off-chain.
  - Evidence anchors are recommended above a materiality threshold (default planning threshold: 1,000 USDC; configurable by entity policy).

---

## Tag schema (template-specific)

Required tags (all templates):

- `category_code`
- `counterparty_type`
- `reference_id` (when applicable)
- `reference_type` (when `reference_id` is present)

Template context tags (use when applicable):

- Operating/org: `program_tag` or `business_unit_tag`, `department_tag`, `cost_center_tag`, `project_tag`, `product_tag`, `item_id`, `channel_tag`, `region_tag`, `counterparty_tag`.
- Equity context: `equity_class_tag`, `vesting_schedule_tag`, `option_pool_tag`.

---

## Live on-chain views (what explorers show)

- **Cash-based time-window view** (for any selected timeframe)
  - Wallet balances and movements for canonical wallets.
  - Inflows/outflows by category code.
  - Coverage ratios:
    - inflow coverage (how much inflow hits canonical wallets),
    - outflow coverage (how much outflow leaves from canonical wallets),
    - evidence coverage (how much material activity links to anchors).

---

## Workflow (action flow)

This is the canonical action sequence used later to build a graph/canvas representation.

### 1) Setup (one-time, then iterate)

- Open a dCorps-compatible console app and select the target network.
- Connect wallet (the connected address signs the first actions).
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
  - Template code: CORP-SOLO
- Enter company details:
  - display name and minimal metadata,
  - base unit count (default 10,000),
  - initial unit allocation (cap table),
  - initial roles and canonical wallets.
- Sign creation transaction:
  - creates Entity ID and lifecycle status,
  - sets owner-of-record at creation.
- Assign roles (solo):
  - bind `admin`, `board`, `treasurer` to the same address; sign.
- Optional: bind delegated employee roles:
  - bind employee role wallets (invoicing, tagging, payout prep, payout execution); sign.
- Bind canonical wallets:
  - bind `OPERATING_TREASURY` and (recommended) `MERCHANT`; sign.
- Set a simple treasury policy:
  - approval rule: 1-of-1,
  - optional per-wallet or per-category limits; sign.
- Optional: bind payee wallets:
  - add payroll/contractor payee wallets (separate from role wallets); sign if stored on-chain.
- Optional: register counterparties and payees:
  - create pseudonymous counterparty IDs and map them off-chain; sign if stored on-chain.
- Set basic tags:
  - required: `category_code`, `counterparty_type`, `reference_id` (when applicable), `reference_type` (when `reference_id` is present),
  - optional: `program_tag` or `business_unit_tag`, `project_tag`, `region_tag`, `counterparty_tag`, `equity_class_tag`, `vesting_schedule_tag`, `option_pool_tag`; sign.

### 2) Operate (repeat)

- Fund the company wallet:
  - receive USDC (bridged from Ethereum to the canonical USDC contract on dCorps) into a canonical wallet.
- (Optional) Create a catalog item:
  - define `item_id`, label, and price; sign.
- (Optional) Create an invoice or recurring plan and anchor evidence:
  - ensure the invoice/checkout pays to the canonical `MERCHANT` wallet,
  - hash invoice/receipt file,
  - anchor the hash on-chain; optionally include a URI; sign.
- Receive payment:
  - payer transfers USDC to the canonical wallet shown on the invoice/checkout (typically `MERCHANT`); confirm on-chain.
- Record income event:
  - tag with `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link invoice reference or anchor; sign.
- (Optional) Move operating funds to treasury:
  - transfer USDC from `MERCHANT` to `OPERATING_TREASURY` (or to `RESERVES`),
  - tag as treasury movement/internal transfer; sign.
- Pay a vendor:
  - transfer from a canonical wallet; sign.
- Pay employees or contractors (optional):
  - transfer from `OPERATING_TREASURY` to payee wallets; sign or approve.
  - delegated employees can execute within limits if authorized.
- Record expense event:
  - tag with `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link receipt hash if available; sign.
- Owner draw (if used):
  - transfer to personal wallet,
  - tag as draw/distribution under your category scheme; sign.
- Handle waivers or cancellations (if needed):
  - update invoice status to `waived` or `canceled`; sign.

### 3) Review, verify, and close (repeat)

- Review dashboard:
  - balances by canonical wallet,
  - tagged flows and coverage (inflow, outflow, evidence),
  - missing tags or anchors.
- View live summary:
  - select period,
  - view the cash-based operating view (unit of account: USDC),
  - export a snapshot if needed.
- Anchor a decision (optional):
  - hash the decision note,
  - anchor hash on-chain,
  - link the anchor to the entity.
- Update setup (any time):
  - update metadata, roles, wallets, policies, tags, or units (issue/transfer/cancel); sign.
- Close the period:
  - generate a final snapshot view for the period,
  - export or anchor the snapshot (gas is DCHUB for anchoring).

---

## Upgrade paths

- If you add separation of duties or multiple signers: move to `CORP-PRIVATE-STD`.
- If you need board approvals, pools, vesting, and stricter transfer rules: move to `CORP-VENTURE`.
- If you need multi-class units, committees, and holdings/group structures: move to `CORP-COMPLEX-PRIVATE`.

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
