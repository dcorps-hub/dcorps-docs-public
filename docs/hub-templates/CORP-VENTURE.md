# Corporation Venture Grade

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-CORP-VENTURE  
**Status**: Draft v0.2  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/CORP-VENTURE.md](/hub-templates/CORP-VENTURE))  
**Last updated**: 2026-01-04  

> Scope: Defines the CORP-VENTURE Hub corporation template.

---

## Summary

- **Code**: CORP-VENTURE
- **Template class**: Hub corporation
- **Complexity**: Medium
- **Primary objective**: board-governed, investor-grade private corporation (Hub-first)
- **Reporting view**: cash-based time-window operating view (unit of account: USDC)

---

## Why this template exists

- A venture-grade private company needs more than “two signers”:
  - board approvals for protected matters,
  - repeatable issuance and grant workflows (pools, vesting),
  - stricter transfer restrictions and approval routing,
  - an evidence trail that matches how institutions and counsel work.
- CORP-VENTURE is designed to keep those mechanics Hub-first, on a public chain, using standardized roles, policies, tagged flows, and anchors.

---

## Intended for

- Venture-backed teams requiring board approvals and structured governance.
- Organizations using unit pools and vesting schedules for employees, advisors, and contributors.
- Companies that expect repeated financings and need legible approvals and evidence.

---

## Not intended for

- Solo or early-stage teams that do not need board processes (use `CORP-SOLO` or `CORP-PRIVATE-STD`).
- Multi-class unit structures with committees and holding-company/group structures (use `CORP-COMPLEX-PRIVATE`).
- Nonprofits (use `NONPROFIT-*` templates).

---

## What you get (features)

- **Board-based protected matters**
  - Board seats, quorum, majority/supermajority thresholds.
  - Explicit “protected actions” that require board approval (and optionally unit-holder approval).
- **Pools and vesting-friendly ownership structure**
  - Default 10,000 base units (1 unit = 0.01 percent).
  - Optional precision patterns (pools + claims / vesting schedules) without breaking the base unit model.
- **Stricter transfer rules**
  - Lockups, vesting locks, whitelists, and approval workflows for transfers.
- **Institutionally legible evidence trail**
  - Anchored board consents/resolutions and material agreements (term sheets, SAFEs/notes, grant letters).
  - Tagged operating flows for reproducible time-window reporting.

---

## How this maps to traditional venture-backed structure (2.0 → Hub)

- Charter/bylaws + investor rights → anchored docs + explicit on-chain approval thresholds and protected matters.
- Board meetings / written consents → proposals, votes, and executed resolutions linked to anchored minutes/consents.
- Cap table + option plan → on-chain units + pool allocations and vesting/claim schedules (where used).
- Stock transfer restrictions → transfer policies (lockups, whitelists, approvals) with an on-chain audit trail.
- Data room evidence → anchors to the same documents, referenced by governance and cap table actions.

---

## Template definition (on-chain structure)

This section describes the minimum structure the template expects. Exact message formats are in the specs.

- **Entity type**: `HUB_CORP`
- **Units**
  - Base unit profile: 10,000 default; optional expansion later in multiples of 10,000 (recommended max 1,000,000 base units in v0.1).
  - Default voting model: one unit, one vote (unless changed by later governance/module overlays).
  - Unit holders can be individual wallets and/or other Hub entities (holding companies, SPVs, and joint ventures).
  - Optional: pool + claims pattern for grants/vesting precision (keeps the base model stable).
- **Roles (recommended baseline)**
  - `admin`: config authority (roles, wallets, policies, tags, metadata)
  - `board`: board seats (addresses and/or DIDs), with quorum + thresholds
  - `treasurer`: operating payments + accounting event emission
  - `secretary`: governance records, minutes, and anchors (optional but recommended)
  - Optional: committee roles (e.g. `comp_committee`, `audit_committee`) if the entity wants delegated approvals
- **Canonical wallets (minimum)**
  - `MERCHANT` (recommended): revenue inflows (invoice and checkout payment address)
  - `OPERATING_TREASURY` (required): primary operating spending
  - `RESERVES` (recommended): runway buffers and strategic reserves
- **Operating currency (v0.1)**
  - Inflows/outflows and reporting are USDC-only in v0.1 (USDC on Noble, via IBC).
  - Gas is paid in DCHUB by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- **Treasury policy (recommended baseline)**
  - routine spending: treasurer-only up to a configured limit
  - protected spending: board approval (and/or designated committee approval) above that limit
  - evidence requirements for material transactions (by policy)
- **Transfers and cap table policy (recommended baseline)**
  - Founders/investors: lockups and transfer approvals where required by agreements.
  - Employees/advisors: vesting locks and non-transferability defaults for unvested or claim-based grants.
  - Unit actions (issue/transfer/cancel) treated as protected matters with required approvals and anchored evidence.

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
- Connect wallet(s) for your admin, board seats, and treasury signers.
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
  - Template code: CORP-VENTURE
- Enter company details:
  - display name and minimal metadata,
  - base unit count (default 10,000),
  - initial unit allocation (cap table),
  - initial roles and canonical wallets.
- Sign creation transaction:
  - creates Entity ID and lifecycle status,
  - sets owner-of-record at creation.
- Define board structure:
  - bind board seats (`board`) to addresses/DIDs,
  - set quorum and thresholds (majority/supermajority) for protected matters; sign.
- Bind operating roles:
  - bind `admin`, `treasurer`, and (recommended) `secretary`; sign.
- Bind canonical wallets:
  - bind `OPERATING_TREASURY`, `MERCHANT`, and `RESERVES`; sign.
- Set treasury policy:
  - routine spend tier (treasurer-only up to limit),
  - protected spend tier (board or committee approval above limit),
  - evidence requirements for material items; sign.
- Set transfers and cap table policy:
  - define transfer restrictions (lockups, whitelists, approvals),
  - define approval requirements for unit actions; sign.
- Set basic tags:
  - define minimal revenue and expense categories,
  - add business-unit tags if needed; sign.
- (Optional) Set up a contributor pool:
  - allocate a pool of units to a pool address,
  - publish a vesting/grant policy and anchor supporting docs; sign.

### 2) Operate (repeat)

- Receive USDC (on Noble, via IBC) into canonical wallets to maximize inflow coverage.
- Use `MERCHANT` as the invoice/checkout payment address for revenue inflows.
- (Optional) Issue an invoice or checkout payment request and anchor evidence:
  - denominate in USDC and pay to `MERCHANT`,
  - hash invoice/receipt/contract file (as applicable),
  - anchor the hash on-chain; optionally include a URI; sign.
- Record income events:
  - category + optional tags,
  - include amount (USDC),
  - link invoice reference or anchor; sign.
- (Optional) Move operating funds to treasury:
  - transfer USDC from `MERCHANT` to `OPERATING_TREASURY` (or to `RESERVES`),
  - tag as treasury movement/internal transfer; sign.
- Spend under treasury policy:
  - routine payment: treasurer initiates and signs (within limit).
  - protected payment: treasurer initiates; board/committee approves; execute and record; sign.
- Record expense events:
  - category + optional tags,
  - include amount (USDC),
  - link receipt anchor/ref when available; sign.

### 3) Governance and protected matters (repeat as needed)

- Draft the decision artifact off-chain (resolution/consent/term sheet/grant letter).
- Anchor the artifact hash on-chain (optional URI); sign.
- Submit governance action:
  - specify action type (treasury approval, unit issuance, policy change),
  - link anchor(s) for supporting documents; sign.
- Collect approvals:
  - board votes / committee approvals per thresholds; sign.
- Execute the approved action:
  - perform the unit action or treasury movement,
  - emit the tagged accounting/corporate action event linking to the approval record; sign.

### 4) Equity grants and vesting (repeat as needed)

- Approve a grant:
  - board/committee approval,
  - anchor grant agreement; sign.
- Execute cap table updates:
  - issue units to the recipient or allocate claims within a pool (depending on your precision pattern),
  - set vesting schedule/locks where applicable; sign.
- Maintain transfer restrictions:
  - enforce vesting locks and approval routing for transfers; sign updates if required.

### 5) Financing round (repeat as needed)

- Prepare financing docs off-chain (term sheet, SAFE/note, purchase agreement).
- Anchor key documents; sign.
- Obtain required approvals:
  - board consent (and unit-holder consent if required by your rules); sign.
- Execute issuance:
  - issue units (or record conditional instrument templates where used),
  - update transfer restrictions/whitelists; sign.
- Update reporting artifacts:
  - anchor updated cap table snapshot or financing memo (optional).

### 6) Review, report, and close (repeat)

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

- Move here from `CORP-PRIVATE-STD` when you add a board and investor-grade governance.
- Move to `CORP-COMPLEX-PRIVATE` when you need multi-class units, committees as first-class governance layers, or holding-company/group structures.

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
