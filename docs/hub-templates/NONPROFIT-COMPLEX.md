# Nonprofit Complex

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-NONPROFIT-COMPLEX  
**Status**: Draft v0.2  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/NONPROFIT-COMPLEX.md](/hub-templates/NONPROFIT-COMPLEX))  
**Last updated**: 2026-01-16  

> Scope: Defines the NONPROFIT-COMPLEX Hub nonprofit template.

---

## Summary

- **Code**: NONPROFIT-COMPLEX
- **Template class**: Hub nonprofit
- **Complexity**: Medium to high
- **Primary objective**: designated funds + umbrella program structures with privacy-aware selective disclosure
- **Reporting view**: nonprofit allocation view over any selected timeframe (unit of account: USDC)

---

## Why this template exists

- Some nonprofits operate as “umbrella” entities:
  - they run multiple programs and/or sponsor partner projects,
  - they manage designated (restricted/unrestricted) funds with formal constraints,
  - they have legitimate confidentiality requirements (beneficiaries, donor privacy, regulated data),
  - but they still must preserve donor trust through a verifiable transparency floor.
- NONPROFIT-COMPLEX adds designated-fund structure and selective disclosure patterns while keeping board governance and category-level transparency legible on the Hub.

---

## Intended for

- Umbrella NGOs or fiscal sponsors managing multiple programs and partner projects.
- Grantmaking foundations and endowment-style nonprofits that manage designated funds and require audit-ready evidence trails.
- Organizations that require designated funds (restricted/unrestricted) with clear separation and policy controls.
- Nonprofits that need privacy-aware disclosure modes (aggregates + commitments, selective disclosure to auditors/regulators/major donors) while preserving the nonprofit transparency floor.

---

## Not intended for

- Small nonprofits without designated fund requirements (use `NONPROFIT-SIMPLE`).
- Nonprofits that need committees and multi-program structure but not designated funds or selective disclosure (use `NONPROFIT-BOARD`).
- Corporations (use `CORP-*` templates).

---

## What you get (features)

- **Designated funds**
  - Restricted/unrestricted fund structure with explicit tagging and separation.
  - Board-approved fund policies and change history anchored to evidence.
- **Umbrella program structures**
  - Multi-program wallet layout and program tagging for sponsored projects and partner initiatives.
  - Clear governance and approval routing for program onboarding and disbursements.
- **Foundation/grantmaking workflows (common pattern)**
  - Fits grantmaking programs (applications → committee review → approvals → disbursements) while preserving the transparency floor.
- **Commerce primitives (items, payment requests, recurring plans)**
  - On-chain payment requests (invoices) for donations, grants, or services, plus optional recurring plans.
- **Selective disclosure patterns (while preserving transparency floor)**
  - Supports disclosure modes where raw line items may be private, but:
    - time-window aggregates and category totals can be published for public views,
    - commitments (hash anchors) and encrypted payloads can be shared with specific recipients,
    - optional attestations can confirm reconciliation between private datasets and public aggregates.
- **Board + committee governance**
  - Committees commonly used for finance, audit, grants, and sponsorship oversight.
- **Evidence-first operations**
  - Anchors for fund policies, sponsorship agreements, grant agreements, audits, and material allocations.

---

## How this maps to complex nonprofit operations (2.0 → Hub)

- Fund accounting (restricted/unrestricted) → designated fund tags/wallet labeling + board-approved fund policies and change records.
- Fiscal sponsorship / umbrella NGO pattern → program wallets + sponsorship agreements anchored and referenced in disbursements.
- Audit packages and data rooms → anchored commitments to datasets + selective disclosure (encrypted payloads) + optional attestations.
- Public donor transparency → category-level allocation totals reproducible over any timeframe, even when line-item confidentiality is required.

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
  - Common committee roles:
    - `finance_committee` (fund policies, treasury approvals)
    - `audit_committee` (controls, evidence requirements, auditor coordination)
    - `grants_committee` (grant approvals, partner disbursements)
    - `sponsorship_committee` (project onboarding, sponsorship agreements, compliance)
- **Authority wallets**
  - Role-bound wallets sign governance actions and approvals; keep separate from payment wallets.
- **Canonical wallets (recommended baseline)**
  - `DONATION` (required): donation and grant inflows (tagged as restricted/unrestricted where applicable)
  - `PROGRAM` (recommended): program wallets (often one per designated fund/program/project, labeled)
  - `OPERATING_TREASURY` (recommended): overhead and shared operating spending
  - `RESERVES` (optional): buffers and designated reserves
- **Operating currency (v0.1)**
  - Inflows/outflows and reporting are USDC-only in v0.1 (USDC on Noble, via IBC).
  - Gas is paid in DCHUB by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- **Designated fund model (recommended baseline)**
  - Fund designations (restricted/unrestricted) expressed via:
    - wallet labeling (e.g., program wallets tied to specific funds),
    - tags on inflows/outflows,
    - board-approved fund policies anchored and versioned (supersession chains).
- **Disclosure modes and transparency floor**
  - Disclosure mode is declared and used by explorers and tools:
    - Mode A: raw on-chain detail (maximum verifiability)
    - Mode B: public aggregates + commitments and selective disclosure
    - Mode C: private execution with public anchoring (requires private zones/sub chains)
  - Hub nonprofits must meet a minimum transparency floor in all modes:
    - donation inflows totals and category-level outflows over any timeframe,
    - board composition and governance events,
    - allocation rule and fund policy changes.
- **Tagging and evidence (minimum)**
  - Each material inflow/outflow is tagged with:
    - `category_code` (chart of accounts),
    - `counterparty_type`,
    - `reference_id` and `reference_type` when applicable,
    - amount and denom (USDC-only in v0.1),
    - fund, program, and impact context tags as needed,
    - optional treasury/asset context tags where relevant,
    - optional evidence reference (anchor ID or hash).

---

## Tag schema (template-specific)

Required tags (all templates):

- `category_code`
- `counterparty_type`
- `reference_id` (when applicable)
- `reference_type` (when `reference_id` is present)

Template context tags (use when applicable):

- Program/fund: `fund_tag`, `restriction_tag`, `program_tag`, `project_tag`.
- Donor/impact: `grant_id`, `donor_tag`, `campaign_tag`, `item_id`, `beneficiary_tag`, `impact_area_tag`, `region_tag`, `counterparty_tag`.
- Treasury/asset: `wallet_tag`, `treasury_bucket_tag`, `asset_tag`, `custody_tag`.

---

## Reporting view (what downstream tools can produce)

- **Nonprofit allocation view** (for any selected timeframe)
  - Donation and grant inflows (including restricted/unrestricted totals if used).
  - Outflows at least at category level (program/overhead/fundraising), with optional program and fund breakdowns.
  - Coverage ratios (inflow, outflow, evidence) and explicit “uncategorized” warnings.
- **Selective disclosure outputs (Mode B/C)**
  - Public aggregates and standardized category totals for the timeframe.
  - Commitments (hash anchors) to private datasets used for assurance.
  - Encrypted payloads for authorized recipients (auditors/regulators/major donors), where used.
  - Optional attestation records referencing the commitments and reconciliation method.

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
  - Template code: NONPROFIT-COMPLEX
- Enter nonprofit details:
  - display name and minimal metadata (mission, sponsorship scope if relevant),
  - initial board seats and roles,
  - initial canonical wallets.
- Sign creation transaction:
  - creates Entity ID and lifecycle status.
- Bind board roles:
  - bind `board_member` seats and `chair`/`treasurer`/`secretary` as used; sign.
- Bind committees:
  - bind committee roles (`finance_committee`, `audit_committee`, `grants_committee`, `sponsorship_committee`, etc),
  - define delegated scope and thresholds; sign.
- Define designated funds and program structure:
  - define fund designations (restricted/unrestricted),
  - bind `PROGRAM` wallets per fund/program/project (labeled),
  - set tags:
    - required: `category_code`, `counterparty_type`, `reference_id` (when applicable), `reference_type` (when `reference_id` is present),
    - program/fund context: `fund_tag`, `restriction_tag`, `program_tag`, `project_tag`,
    - donor/impact context: `grant_id`, `donor_tag`, `campaign_tag`, `item_id`, `beneficiary_tag`, `impact_area_tag`, `region_tag`, `counterparty_tag`,
    - treasury/asset context: `wallet_tag`, `treasury_bucket_tag`, `asset_tag`, `custody_tag`; sign.
- Bind canonical wallets:
  - bind `DONATION`, `OPERATING_TREASURY`, optional `RESERVES`; sign.
- Set allocation and fund policies:
  - fund restriction rules and allowed uses,
  - approval routing for program disbursements and grants,
  - materiality and evidence requirements; sign.
- Anchor core governance and fund documents (recommended):
  - bylaws, fund policies, sponsorship agreements, budgets; anchor hashes and link them to governance records.
- Configure disclosure mode and selective disclosure plan (if using Mode B/C):
  - define what aggregates are published per timeframe,
  - define commitment/anchoring cadence for private datasets,
  - define who receives encrypted payloads and under what controls; sign where applicable.

### 2) Operate (repeat)

- Receive donations/grants (USDC on Noble, via IBC) into `DONATION`; confirm on-chain.
- Optional: issue payment requests or recurring plans for structured giving (grants, sponsorships, memberships).
- Record inflow events:
  - tag with `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link donation receipt or grant agreement anchor when available; sign.
- Allocate to designated funds/programs:
  - transfer to the appropriate `PROGRAM` wallet(s) under fund restrictions and board-approved rules; sign.
- Spend and disburse:
  - routine spending within policy: execute and record.
  - protected disbursements/grants: obtain committee/board approval first; then execute and record; sign.
- Record outflow events:
  - tag with `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link receipts/grant agreements anchors when available; sign.
- Umbrella sponsorship (when used):
  - onboard projects under a sponsorship agreement (anchor the agreement),
  - map each project to a program wallet/tag,
  - execute disbursements and reporting under the same policy controls.

### 3) Selective disclosure (Mode B/C, repeat as needed)

- Publish public aggregates for the selected timeframe (at least the transparency floor).
- Anchor commitments:
  - hash private dataset exports (ledger extracts, beneficiary records, detailed invoices),
  - anchor hashes with timeframe metadata; sign.
- Share encrypted payloads:
  - publish encrypted blobs for authorized recipients (auditors/regulators/major donors), where used.
- (Optional) Publish attestations:
  - auditor/issuer attests that private dataset commitments reconcile to published aggregates and policy rules.

### 4) Governance, reporting, and close (repeat)

- Record governance actions:
  - fund policy changes, sponsorship approvals, major grants, and allocation rule changes; sign.
- Publish allocation reporting:
  - select period,
  - export nonprofit allocation view (unit of account: USDC),
  - ensure the transparency floor is met.
- Close period:
  - generate a final snapshot view for the period,
  - export and/or anchor the snapshot (gas is DCHUB for anchoring).

---

## Upgrade paths

- Move here from `NONPROFIT-BOARD` when you add designated funds, sponsorship/umbrella structures, or selective disclosure requirements.
- If complexity is not justified, simplify to `NONPROFIT-BOARD` or `NONPROFIT-SIMPLE` to reduce governance overhead.

---

## Boundaries and disclaimers

- Templates define on-chain structure and evidence. Legal recognition remains off-chain or via optional modules.
- This document is descriptive and is not legal, tax, accounting, or investment advice.

---

## References

- Whitepaper Long (nonprofit model, disclosure modes, and transparency floor): [docs/whitepaper/WHITEPAPER_LONG.md](/whitepaper/WHITEPAPER_LONG)
- Treasury continuity guide: [docs/adoption/TREASURY_CONTINUITY.md](/adoption/TREASURY_CONTINUITY)
- Core spec (messages and invariants): [docs/spec/SPEC-CORE.md](/spec/SPEC-CORE)
- Data and tagging standards: [docs/spec/SPEC-DATA.md](/spec/SPEC-DATA)
- Reference indexer behavior (reporting views): [docs/spec/SPEC-INDEXER.md](/spec/SPEC-INDEXER)
