# Nonprofit Simple

**Document type**: Hub template  
**Doc ID**: HUB-TEMPLATE-NONPROFIT-SIMPLE  
**Status**: Draft v0.2  
**Release date**: January 3, 2026  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/hub-templates/NONPROFIT-SIMPLE.md](/hub-templates/NONPROFIT-SIMPLE))  
**Last updated**: 2026-01-16  

> Scope: Defines the NONPROFIT-SIMPLE Hub nonprofit template.

---

## Summary

- **Code**: NONPROFIT-SIMPLE
- **Template class**: Hub nonprofit
- **Complexity**: Low
- **Primary objective**: board-governed nonprofit with a clear transparency baseline
- **Reporting view**: nonprofit allocation view over any selected timeframe (unit of account: USDC)

---

## Why this template exists

- Nonprofits need donor trust and allocation legibility, but many do not need complex fund structures on day one.
- NONPROFIT-SIMPLE is designed to:
  - make governance (board authority) explicit,
  - standardize donation and program flows through canonical wallets,
  - produce reproducible allocation reporting from tagged events,
  - preserve privacy for sensitive beneficiary details while meeting a transparency floor.

---

## Intended for

- Smaller NGOs or single-program operators.
- Teams that need clear board governance and baseline transparency.
- Digital-native nonprofits that receive donations/grants in USDC (on Noble, via IBC) and spend on-chain.

---

## Not intended for

- Multi-program nonprofits that require committee layers and more formal policy controls (use `NONPROFIT-BOARD`).
- Umbrella NGOs or foundations with designated funds, sponsorship programs, and selective disclosure modes (use `NONPROFIT-COMPLEX`).
- Corporations (use `CORP-*` templates).

---

## What you get (features)

- **Board-based governance**
  - Board roles (chair/treasurer/secretary as needed), quorum, and voting thresholds.
  - Governance events (proposals/votes) recorded and linkable to anchored minutes/policies.
- **Donation and program wallet structure**
  - Canonical donation wallet for inflows.
  - Optional program wallets for clear allocation and reporting.
- **Commerce primitives (items, payment requests, recurring plans)**
  - On-chain payment requests (invoices) for donations, grants, or services, plus optional recurring plans.
- **Baseline allocation categories**
  - At minimum: program spending vs overhead (and fundraising if used).
- **Transparency floor (all disclosure modes)**
  - Board composition and governance events are visible.
  - Donation inflows and at least category-level outflows are reproducible from Hub data (or from published aggregates in privacy-aware modes).
- **Evidence anchors for material items**
  - Grants, large disbursements, and material vendor payments can link to anchored evidence.

---

## How this maps to traditional nonprofit structure (2.0 → Hub)

- Bylaws + governance policies → anchored docs + board roles and thresholds.
- Board minutes / resolutions → proposals/votes linked to anchored minutes.
- Restricted vs unrestricted policy → policy + tags/wallet labels (full designated-fund structures start in `NONPROFIT-COMPLEX`).
- Bank accounts → canonical wallets (`DONATION`, `PROGRAM`, `OPERATING_TREASURY`).
- Donor transparency reporting → allocation views derived from tagged flows over any selected timeframe.

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
- **Authority wallets**
  - Role-bound wallets sign governance actions and approvals; keep separate from payment wallets.
- **Canonical wallets (minimum)**
  - `DONATION` (required): donation and grant inflows
  - `PROGRAM` (optional): one or more program wallets
  - `OPERATING_TREASURY` (recommended): overhead and shared operating spending
  - `RESERVES` (optional): buffers
- **Operating currency (v0.1)**
  - Inflows/outflows and reporting are USDC-only in v0.1 (USDC on Noble, via IBC).
  - Gas is paid in DCHUB by the signing wallet (direct DCHUB balance, fee grants, or sponsored transactions).
- **Allocation policy (minimum)**
  - A minimal category scheme aligned to the standard chart of accounts:
    - program spending
    - general and administrative overhead
    - fundraising (if used)
  - Board-approved allocation rules and spend approvals (as needed by entity policy).
- **Tagging and evidence (minimum)**
  - Each material inflow/outflow is tagged with:
    - `category_code` (chart of accounts),
    - `counterparty_type`,
    - `reference_id` and `reference_type` when applicable,
    - amount and denom (USDC-only in v0.1),
    - optional allocation context tags (`program_tag`, `fund_tag`, `restriction_tag`, `grant_id`, `donor_tag`, `campaign_tag`, `item_id`, `region_tag`, `counterparty_tag`),
    - optional evidence reference (anchor ID or hash).
  - Evidence anchors are recommended above a materiality threshold (default planning threshold: 1,000 USDC; configurable by entity policy).
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
- Donor/grant: `grant_id`, `donor_tag`, `campaign_tag`, `item_id`, `region_tag`, `counterparty_tag`.

---

## Reporting view (what downstream tools can produce)

- **Nonprofit allocation view** (for any selected timeframe)
  - Donation and grant inflows (totals and categories).
  - Outflows at least at category level (program/overhead/fundraising).
  - Optional breakdowns by program wallet and program tags.
  - Coverage ratios (inflow, outflow, evidence) and explicit “uncategorized” warnings.

---

## Workflow (action flow)

This is the canonical action sequence used later to build a graph/canvas representation.

### 1) Setup (one-time, then iterate)

- Open a dCorps-compatible console app and select the target network.
- Connect wallet(s) for board members and treasury signers.
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
  - Template code: NONPROFIT-SIMPLE
- Enter nonprofit details:
  - display name and minimal metadata (mission summary if desired),
  - initial board seats and roles,
  - initial canonical wallets.
- Sign creation transaction:
  - creates Entity ID and lifecycle status.
- Bind board and operating roles:
  - bind `board_member` seats (and `chair`/`treasurer`/`secretary` as used); sign.
- Bind canonical wallets:
  - bind `DONATION`,
  - optionally bind one or more `PROGRAM` wallets,
  - bind `OPERATING_TREASURY` (recommended); sign.
- Set allocation categories and rules:
  - program vs overhead (and fundraising if used),
  - define approval requirements for material disbursements; sign.
- Set basic tags:
  - required: `category_code`, `counterparty_type`, `reference_id` (when applicable), `reference_type` (when `reference_id` is present),
  - allocation context: `program_tag`, `fund_tag`, `restriction_tag`, `grant_id`, `donor_tag`, `campaign_tag`, `item_id`, `region_tag`, `counterparty_tag`; sign.

### 2) Operate (repeat)

- Receive donations/grants:
  - donors send USDC (on Noble, via IBC) to `DONATION`; confirm on-chain.
  - optional: issue payment requests or recurring plans for structured giving (grants, sponsorships, memberships).
- Record donation/grant inflow events:
  - tag with `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link donation receipt or grant agreement anchor when available; sign.
- Allocate to programs (if used):
  - transfer from `DONATION`/`OPERATING_TREASURY` to `PROGRAM` wallets per board-approved rules; sign.
- Spend on programs and operations:
  - execute payments from `PROGRAM` and/or `OPERATING_TREASURY`; sign.
- Record outflow events:
  - tag with `category_code` + required fields + optional context tags,
  - include amount (USDC),
  - link receipt anchor/ref when available; sign.

### 3) Governance, reporting, and close (repeat)

- Anchor governance artifacts (recommended for major actions):
  - hash minutes/policies/grant agreements,
  - anchor hash on-chain; optionally include a URI; sign.
- Record board decisions:
  - proposals/votes for allocation policy changes and material disbursements; sign.
- Publish allocation reporting:
  - select period,
  - export nonprofit allocation view (unit of account: USDC).
- Close period:
  - generate a final snapshot view for the period,
  - export and/or anchor the snapshot (gas is DCHUB for anchoring).

---

## Upgrade paths

- Move to `NONPROFIT-BOARD` when you add committees, multiple programs, and tighter allocation policies.
- Move to `NONPROFIT-COMPLEX` when you add designated funds, umbrella sponsorship patterns, or privacy-aware selective disclosure workflows.

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
