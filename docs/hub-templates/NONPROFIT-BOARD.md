# Nonprofit Board

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-NONPROFIT-BOARD  
**Status**: Draft v0.2  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/NONPROFIT-BOARD.md](/hub-templates/NONPROFIT-BOARD))  
**Last updated**: 2026-01-16  

> Scope: Defines the NONPROFIT-BOARD Hub nonprofit template.

---

## Summary

- **Code**: NONPROFIT-BOARD
- **Template class**: Hub nonprofit
- **Complexity**: Medium
- **Primary objective**: multi-program nonprofit with board + committee governance and tighter allocation controls
- **Reporting view**: nonprofit allocation view over any selected timeframe (unit of account: USDC)

---

## Why this template exists

- As a nonprofit grows, “board governance” is not enough by itself:
  - multiple programs need consistent allocation and tagging,
  - committees often handle finance, audit, grants, or program oversight,
  - donors and partners expect policy-backed controls and an evidence trail.
- NONPROFIT-BOARD adds committee layers and stronger allocation policies while keeping the Hub as the canonical governance and allocation ledger.

---

## Intended for

- Nonprofits with board and committee governance layers.
- Organizations running multiple programs with tighter allocation rules.
- NGOs that need clear delegation (finance/audit/program committees) but do not require designated fund complexity.

---

## Not intended for

- Very small, single-program nonprofits with minimal governance overhead (use `NONPROFIT-SIMPLE`).
- Umbrella NGOs or foundations with designated funds, sponsorship programs, and selective disclosure workflows (use `NONPROFIT-COMPLEX`).
- Corporations (use `CORP-*` templates).

---

## What you get (features)

- **Board + committee governance**
  - Board seats, quorum, and thresholds.
  - Committee roles with delegated approval scope (e.g., finance, audit, grants).
- **Multi-program wallet structure**
  - Canonical donation wallet plus multiple program wallets (recommended).
  - Optional operating treasury and reserves for overhead and buffers.
- **Commerce primitives (items, payment requests, recurring plans)**
  - On-chain payment requests (invoices) for donations, grants, or services, plus optional recurring plans.
- **Allocation policies as enforceable rules**
  - Board-approved allocation policies (e.g., budget caps, materiality thresholds).
  - Committee approvals for program disbursements or grants where desired.
- **Transparency floor (all disclosure modes)**
  - Board composition and governance events are visible.
  - Donation inflows and at least category-level outflows remain reproducible over any timeframe.
- **Evidence anchors**
  - Anchors for policy changes and material allocations (minutes, budgets, grant agreements).

---

## How this maps to traditional nonprofit governance (2.0 → Hub)

- Bylaws + committee charters → anchored docs + explicit committee roles and delegated powers.
- Annual budget / program budgets → anchored budget packages + on-chain policy constraints (where used).
- Grants committee approvals → committee votes linked to anchored grant agreements.
- Bank accounts by program → canonical `PROGRAM` wallets and tags.
- Public allocation reporting → allocation view derived from tagged flows over any timeframe.

---

## Template definition (on-chain structure)

This section describes the minimum structure the template expects. Exact message formats are in the specs.

- **Entity type**: `HUB_NONPROFIT`
- **Ownership and control (important)**
  - Hub nonprofits have no equity and are not “owned” by units.
  - A nonprofit can still participate in group structures by holding units in a Hub corporation subsidiary and/or by anchoring off-chain control documents (e.g., membership/appointment rights) as evidence.
- **Board governance**
  - Board seats bound to addresses and/or DIDs.
  - Roles commonly used:
    - `board_member` (seat)
    - `chair` (optional)
    - `treasurer` (recommended)
    - `secretary` (recommended)
  - Quorum and approval thresholds for board actions.
- **Committee governance (recommended)**
  - One or more committees with explicit roles and delegated scope, such as:
    - `finance_committee` (budget oversight, treasury approvals above threshold)
    - `audit_committee` (controls, evidence requirements, auditor coordination)
    - `grants_committee` (grant approvals, partner disbursements)
    - `program_committee` (program allocations, program-level policy)
- **Authority wallets**
  - Role-bound wallets sign governance actions and approvals; keep separate from payment wallets.
- **Canonical wallets (recommended baseline)**
  - `DONATION` (required): donation and grant inflows
  - `PROGRAM` (recommended): one wallet per program (labeled)
  - `OPERATING_TREASURY` (recommended): shared overhead spending
  - `RESERVES` (optional): buffers and designated reserves (designated funds are formalized in `NONPROFIT-COMPLEX`)
- **Operating currency (v0.1)**
  - Inflows/outflows and reporting are USDC-only in v0.1 (USDC on Noble, via IBC).
  - Gas is paid in DCHUB by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- **Allocation policy (recommended baseline)**
  - Define:
    - category scheme (program/overhead/fundraising at minimum),
    - program mapping (which program wallets/tags exist),
    - approval routing (routine vs protected disbursements),
    - evidence requirements for material allocations.
  - Policies and changes are board-approved and anchored.
- **Tagging and evidence (minimum)**
  - Each material inflow/outflow is tagged with:
    - `category_code` (chart of accounts),
    - `counterparty_type`,
    - `reference_id` and `reference_type` when applicable,
    - amount and denom (USDC-only in v0.1),
    - program tag and/or program wallet label, plus allocation/impact context tags as needed,
    - optional evidence reference (anchor ID or hash).
- **Transparency floor (all disclosure modes)**
  - Board composition, proposals, votes, and allocation rule changes.
  - Donation inflows and category-level outflows over any selected timeframe.

---

## Tag schema (template-specific)

Required tags (all templates):

- `category_code`
- `counterparty_type`
- `reference_id` (when applicable)
- `reference_type` (when `reference_id` is present)

Template context tags (use when applicable):

- Program/fund: `program_tag`, `fund_tag`, `restriction_tag`.
- Donor/reporting: `grant_id`, `donor_tag`, `campaign_tag`, `item_id`, `beneficiary_tag`, `impact_area_tag`, `region_tag`, `project_tag`, `counterparty_tag`.

---

## Reporting view (what downstream tools can produce)

- **Nonprofit allocation view** (for any selected timeframe)
  - Donation and grant inflows (totals and categories).
  - Outflows at least at category level (program/overhead/fundraising).
  - Program-level breakdowns by `PROGRAM` wallet and/or program tags.
  - Coverage ratios (inflow, outflow, evidence) and explicit “uncategorized” warnings.

---

## Workflow (action flow)

This is the canonical action sequence used later to build a graph/canvas representation.

### 1) Setup (one-time, then iterate)

- Open a dCorps-compatible console app and select the target network.
- Connect wallet(s) for board members, committee members, and treasury signers.
- Confirm network and fees:
  - Gas: DCHUB
  - Service fees (when shown): USDC
  - Gas is paid by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- Configure gas coverage for team actions (recommended):
  - Option A: each signer wallet holds DCHUB for gas.
  - Option B: use DCHUB fee grants from an entity-controlled sponsor wallet to signer wallets for routine actions.
  - Option C: use an app that sponsors gas and discloses sponsorship in the signing flow.
- Create the nonprofit:
  - Entity type: Hub nonprofit
  - Template code: NONPROFIT-BOARD
- Enter nonprofit details:
  - display name and minimal metadata,
  - initial board seats and roles,
  - initial canonical wallets.
- Sign creation transaction:
  - creates Entity ID and lifecycle status.
- Bind board roles:
  - bind `board_member` seats and `chair`/`treasurer`/`secretary` as used; sign.
- Bind committees:
  - bind committee roles (`finance_committee`, `audit_committee`, `grants_committee`, etc),
  - define delegated approval scope and thresholds; sign.
- Bind canonical wallets:
  - bind `DONATION`,
  - bind one `PROGRAM` wallet per program (labeled),
  - bind `OPERATING_TREASURY` (recommended),
  - bind `RESERVES` (optional); sign.
- Set allocation policy:
  - define program mapping and category scheme,
  - define routine vs protected disbursement rules,
  - define evidence requirements for material allocations; sign.
- Anchor policy documents (recommended):
  - minutes, committee charters, budgets, grant policies; anchor hashes and link them to governance records.
- Set tags:
  - required: `category_code`, `counterparty_type`, `reference_id` (when applicable), `reference_type` (when `reference_id` is present),
  - program/fund context: `program_tag`, `fund_tag`, `restriction_tag`,
  - donor/reporting context: `grant_id`, `donor_tag`, `campaign_tag`, `item_id`, `region_tag`, `project_tag`, `beneficiary_tag`, `impact_area_tag`, `counterparty_tag`; sign.

### 2) Operate (repeat)

- Receive donations/grants (USDC on Noble, via IBC) into `DONATION`; confirm on-chain.
- Optional: issue payment requests or recurring plans for structured giving (grants, sponsorships, memberships).
- Record inflow events:
  - tag with `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link donation receipt or grant agreement anchor when available; sign.
- Allocate to programs:
  - transfer from `DONATION`/`OPERATING_TREASURY` to `PROGRAM` wallets under the allocation policy; sign.
- Spend within programs:
  - routine program spend: program signer executes and records under policy.
  - protected program spend: obtain committee/board approval first; then execute and record; sign.
- Record outflow events:
  - tag with `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link receipt/grant agreement anchors when available; sign.

### 3) Governance, reporting, and close (repeat)

- Record governance actions:
  - committee approvals and board votes for policy changes and material allocations; sign.
- Publish allocation reporting:
  - select period,
  - export nonprofit allocation view (unit of account: USDC).
- Close period:
  - generate a final snapshot view for the period,
  - export and/or anchor the snapshot (gas is DCHUB for anchoring).

---

## Upgrade paths

- Move here from `NONPROFIT-SIMPLE` when you add committees, multiple programs, and tighter policy constraints.
- Move to `NONPROFIT-COMPLEX` when you add designated funds, umbrella sponsorship patterns, or selective disclosure workflows.

---

## Boundaries and disclaimers

- Templates define on-chain structure and evidence. Legal recognition remains off-chain or via optional modules.
- This document is descriptive and is not legal, tax, accounting, or investment advice.

---

## References

- Whitepaper Long (nonprofit model and transparency floor): [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Treasury continuity guide: [docs/adoption/TREASURY_CONTINUITY.md](/adoption/TREASURY_CONTINUITY)
- Core spec (messages and invariants): [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- Data and tagging standards: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- Reference indexer behavior (reporting views): [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)
