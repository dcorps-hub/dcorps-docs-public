# dCorps Whitepaper (Public, Plain Language)

**Document type**: Whitepaper (public, plain-language)  
**Doc ID**: DCHUB-WP-PLAIN-2025-12-22  
**Version**: v1.0  
**Status**: Final v1.0  
**Release date**: December 22, 2025  
**Author**: Nicolas Turcotte, Founder  
[www.dcorps.com](http://www.dcorps.com/) - [dev@dcorps.com](mailto:dev@dcorps.com)

> This is the public website whitepaper written for general readers. It is detailed, but uses plain language so anyone can follow.

---

## Disclaimer

Nothing in this document is:

- an offer to sell, or a solicitation of an offer to buy, any token, share, or security;
- investment, legal, tax, or accounting advice; or
- a promise of listing, price performance, or financial return for any asset.

This whitepaper describes a technical and economic design for the dCorps protocol as currently envisioned. Details may change with engineering work, legal advice, market conditions, and community input.

---

## Reader map

- If you are new: read sections 1 to 5.
- If you are a founder or nonprofit operator: read sections 6 to 9.
- If you are a builder: read sections 10 to 12.
- If you care about governance and security: read sections 13 to 16.

---

## Document stack and what is normative

This whitepaper explains intent, scope, and design. It is not the protocol specification.

For technical correctness and compatibility:

- the protocol specs and data standards are the source of truth;
- governance and treasury policies define process and limits;
- security documents define operational posture.

If there is a conflict between this whitepaper and the specs, the specs are intended to take precedence.

---

## Table of contents

- 0. Executive summary
- 1. The problem and context
- 2. Design principles and boundaries
- 3. Architecture overview
- 4. Entity models and lifecycle
- 5. Operations, accounting events, and reporting
- 6. Modules and adapters
- 7. Data, indexers, and interoperability
- 8. Token model and economic mechanics
- 9. Tokenomics (plain language)
- 10. Governance and upgrade safety
- 11. Security posture
- 12. Privacy and transparency
- 13. Roadmap and phases
- 14. Products and ecosystem
- 15. Who builds and stewards dCorps
- 16. Risks and limits
- 17. Glossary
- 18. What to read next

---

## 0. Executive summary

### 0.1 The simple idea

dCorps is a public record system for organizations.

It helps companies and nonprofits show:

- who is allowed to make decisions;
- how money moves; and
- what was approved and when.

The goal is to make serious organizations easier to trust and easier to verify.

### 0.2 What dCorps is

dCorps is a Cosmos-based Hub chain that treats corporations and nonprofits as first-class objects.

It provides:

- a neutral registry for entities and roles;
- canonical wallets and tagged accounting events;
- reproducible reporting views; and
- document anchoring for evidence.

dCorps is infrastructure. It is not a bank, broker, exchange, or custodial service.

### 0.3 v1 in one sentence

In v1, an entity can register, set roles and wallets, run stablecoin operations through tagged accounting events, and generate reproducible reports, with optional evidence anchoring.

### 0.4 Who dCorps is for

dCorps is designed for:

- founders and small teams that want a clean, credible structure;
- nonprofits that want donor transparency without chaos;
- builders who want shared standards for apps and reporting;
- validators who want a conservative base layer;
- institutions that need readable, verifiable records.

### 0.5 The measurable outcome

If dCorps is working, an independent party should be able to verify, from public chain data and anchored evidence:

- who had authority at a given time;
- what decisions were approved; and
- how period totals were derived from underlying activity.

### 0.6 Kernel and adapters in one paragraph

The Hub kernel is the stable core. It records identity, roles, wallets, and accounting events. Modules and adapters sit above it to add legal or sector meaning. They can add interpretation, but they cannot change the kernel history.

### 0.7 Economics in one paragraph

USDC is the main operating currency for entities. DCHUB secures the network, pays gas, and governs upgrades. These roles are separate on purpose.

---

## 1. The problem and context

### 1.1 The trust gap

Organizations often ask people to trust them without giving them usable proof.

- Ownership and roles are hidden in private documents.
- Approvals live in inboxes and spreadsheets.
- Reports are late and hard to verify.
- Donors and partners rely on reputation instead of evidence.

This creates friction, cost, and mistrust.

### 1.2 The stablecoin reality

Many serious organizations already use stablecoins for operations.

- Payments move globally without a bank in every country.
- Teams can pay contractors and receive revenue quickly.
- But the entity layer around stablecoins is weak.

Money can move, but governance and reporting stay fragmented.

### 1.3 The need for shared standards

Every organization builds its own system:

- custom dashboards,
- custom reporting formats,
- custom workflows.

That makes interoperability hard and auditing expensive. dCorps offers one shared standard.

### 1.4 Why this matters

- **Founders** save time and gain credibility with clearer ownership and approvals.
- **Nonprofits** reduce donor skepticism with consistent reporting.
- **Builders** can create tools that work across many entities.
- **Regulators and institutions** can read the same data the entity sees.
---

## 2. Design principles and boundaries

### 2.1 Minimal kernel

dCorps keeps the core small and stable. The kernel focuses on:

- identity and roles,
- governance actions,
- wallets and accounting events,
- document anchoring.

Everything else is optional.

### 2.2 Modularity

Jurisdictions, sector standards, and advanced workflows are handled by optional modules.

Modules can add meaning, but they cannot rewrite the kernel record.

### 2.3 Neutrality

dCorps is neutral infrastructure.

- It does not privilege specific jurisdictions.
- It does not force one legal wrapper.
- It does not enforce a single business model.

### 2.4 Transparency with safety

The system is public by default, but sensitive data stays off-chain.

- Only hashes of documents are anchored.
- Private data remains private.

### 2.5 Safety over speed

High-impact changes move slowly. Governance uses:

- higher thresholds for sensitive changes,
- transparent proposals,
- documented rationales.

### 2.6 Kernel invariants

Some rules are treated as core invariants:

- the Hub keeps a consistent record of identity, roles, and flows;
- history cannot be rewritten to hide or erase actions;
- modules can add interpretation but cannot change kernel facts.

---

## 3. Architecture overview

### 3.1 Layers

dCorps is layered on purpose:

- **Hub kernel**: identity, roles, wallets, accounting events, document anchoring.
- **Modules and adapters**: jurisdiction recognition, sector frameworks, attestations.
- **Apps and tools**: Explorer, Registry, official app, and third-party tools.

Simple diagram:

```text
Apps and tools (Explorer, Registry, dCorps App)
        |
        v
Optional modules and adapters (jurisdictions, sector standards, attestations)
        |
        v
Hub kernel (entities, roles, wallets, accounting events, anchoring)
        |
        v
DCHUB staking and consensus (security, gas, governance)
```

### 3.2 Hub chain

The Hub chain is the base layer that stores:

- the entity registry;
- governance actions and role changes;
- canonical wallet events;
- anchors for evidence and external summaries.

### 3.3 How data moves

1. The entity writes events to canonical wallets on the Hub.
2. Indexers read those events and build public views.
3. Modules read the same data and publish derived outputs.
4. Applications use the public views to serve users.
### 3.4 Sub chains (optional)

Some entities may use sub chains for custom logic or scale.

To remain recognized, sub chains must:

- follow common interfaces;
- anchor summaries back to the Hub;
- stay within protocol standards.

---

## 4. Entity models and lifecycle

### 4.1 Entity registry

Every entity on the Hub has:

- a unique ID and name;
- a type (Hub corporation, Hub nonprofit, public sub chain, private sub chain);
- optional sector and region tags;
- attached modules and sub chain references;
- a lifecycle status (active, under review, dissolved, retired).

The registry emits events when:

- an entity is created or dissolved;
- roles change;
- modules are attached or detached.

### 4.1.1 Lifecycle status

Each entity has a public status, for example:

- active (operational),
- under review (flagged or pending review),
- dissolved (no longer active),
- retired (historical record preserved).

Status changes are recorded on-chain.

### 4.2 Hub corporation

A Hub corporation is a standard on-chain company container:

- a cap table with 10,000 internal units;
- role-based governance and approvals;
- canonical wallets and tagged transactions.

Units represent ownership and voting rights inside the entity. They are not global protocol tokens.

### 4.3 Hub nonprofit

A Hub nonprofit is a nonprofit container:

- board-based governance with clear roles;
- donation and program wallets for transparency;
- allocation rules that make reporting consistent.

The nonprofit model is designed to provide a minimum transparency floor without forcing disclosure of sensitive beneficiary details.

### 4.4 Sub chain corporations

A sub chain corporation can run its own chain while anchoring summaries to the Hub.

Anchors may include:

- cap table summaries;
- governance checkpoints;
- aggregated revenue and expense metrics.

If a sub chain stops anchoring or breaks standards, it can lose recognition in the registry.

---

## 5. Operations, accounting events, and reporting

### 5.1 Roles and authority

Roles bind to decentralized identifiers (DIDs):

- a DID can map to one or more wallets;
- roles are assigned through governance actions;
- role history is preserved even when people change.

This creates a public trail of authority.

### 5.1.1 Governance actions

Governance actions record formal decisions, such as:

- appointing or removing roles;
- approving budgets or major spend;
- updating governance rules or thresholds;
- approving module attachments.

Each action is tied to roles and evidence.

### 5.2 Canonical wallets

Entities use structured wallets:

- merchant wallet for revenue;
- donation wallet for nonprofits;
- treasury wallet for reserves;
- program wallets for specific projects;
- role wallets for approvals and governance actions.

### 5.3 Tagged accounting events

Every transaction is tagged with standard categories, such as:

- type (revenue, expense, donation, grant, program cost, overhead, tax);
- counterparty type (customer, donor, beneficiary, supplier, staff, partner NGO, jurisdiction);
- accounting category from a standard chart of accounts.

This makes reporting predictable and comparable.

Example tags:

- a donation from a foundation can be tagged as type: donation, counterparty: donor, category: grants income.
- a nonprofit program payout can be tagged as type: program cost, counterparty: beneficiary, category: program delivery.

### 5.4 Document anchoring

Key documents are anchored by hash:

- charters and bylaws,
- board resolutions,
- audit reports,
- legal agreements.

Anchoring proves integrity without revealing private content.

### 5.5 Reporting outputs

Reports are generated directly from tagged events:

- **Corporations**: cash-based operating reports.
- **Nonprofits**: allocation reports tied to donation and program flows.

Reports include coverage signals:

- what percentage of flows are categorized,
- where uncategorized activity exists,
- which evidence links support each line item.

Coverage signals make it clear when reporting is complete and when it is not. They make gaps visible instead of hidden.

### 5.6 Why this matters

This approach lets an independent party verify:

- who had authority;
- what was approved;
- how money moved; and
- how totals were computed.

---

## 6. Modules and adapters

### 6.1 What modules do

Modules are optional components that read Hub data and publish additional outputs.

A module can:

- recognize an entity under a jurisdiction;
- publish sector metrics or ratings;
- provide attestations or eligibility flags.

Modules cannot rewrite the kernel record.

### 6.2 Attaching and detaching

Entities opt in by attaching to modules:

- an authorized role approves the attachment;
- the module may require a one-time or recurring fee in USDC;
- the module publishes outputs based on Hub data.

Detachment rules vary by module and may require notice or final reporting.

### 6.2.1 Module registry and risk signals

Modules are listed in a public registry with basic metadata:

- purpose and scope;
- version and operator identity;
- risk or safety notes.

This lets users and institutions compare modules and make informed choices.

### 6.3 Smart jurisdiction modules

Jurisdiction modules allow local legal systems to:

- recognize dCorps entities under local law;
- define registration and renewal fees;
- publish reporting expectations;
- provide dashboards for regulators and institutions.

The legal effect of a module depends on the jurisdiction's own instruments.

### 6.4 Sector and impact frameworks

Sector frameworks focus on domains such as:

- climate and environmental impact,
- education and skills,
- public health and social services.

They define:

- metrics entities agree to report;
- how metrics are computed from on-chain and off-chain proofs;
- rules for participation in specific programs.

### 6.5 Attestations

Attestation modules publish third-party statements such as:

- audit confirmations,
- compliance checks,
- rating or certification signals.

Attestations are optional and must be transparent about who issued them and why.

---

## 7. Data, indexers, and interoperability

### 7.1 Reference indexer and explorer

dCorps defines reference behavior for indexers and explorers so that public views are consistent.

This includes:

- how entity profiles are displayed;
- how event timelines are built;
- how reporting views are generated.

### 7.2 Conformance tests

Conformance tests allow third-party tools to prove compatibility.

This supports:

- multiple independent explorers;
- redundant data providers;
- auditability across the ecosystem.

### 7.3 Public APIs and exports

Data is intended to be accessible through standard APIs and export formats (JSON, CSV).

This makes integration easier for:

- analytics platforms,
- reporting dashboards,
- institutional partners.

### 7.4 Schemas and compatibility

Data schemas and tag catalogs are published so that:

- different indexers produce the same results,
- independent builders can validate outputs,
- auditors can reproduce reports without private access.
---

## 8. Token model and economic mechanics

### 8.1 Two assets with different jobs

- **USDC** is the main operating currency for entities. It is used for day-to-day flows and many protocol service fees.
- **DCHUB** secures the network and powers gas, staking, and protocol governance.

### 8.2 DCHUB roles

DCHUB powers:

- **Gas**: transaction fees on the Hub and recognized sub chains.
- **Staking**: validators stake DCHUB to secure the network.
- **Governance**: DCHUB holders vote on protocol proposals.

DCHUB is not equity in any user entity. It does not grant dividends or profit rights.

### 8.3 Why stablecoins

Stablecoins are used for operations because:

- they are predictable in value;
- they support global payments;
- they are easier for budgeting and reporting.

In dCorps, USDC (via Noble) is the baseline reference stablecoin.

### 8.4 Service fees

Protocol services can charge fees in stablecoins, such as:

- entity registration and renewal;
- premium names and namespaces;
- optional jurisdiction or sector modules.

These fees are routed through defined treasury flows.

---

## 9. Tokenomics (plain language)

### 9.1 Fixed supply

- Total supply: **1,000,000,000 DCHUB** minted at genesis.
- There is no discretionary inflation beyond the genesis supply.
- "Emissions" means tokens entering circulation from predefined pools, not new supply creation.

### 9.2 Indicative genesis allocation

An indicative allocation at genesis is:

- **Founder**: 15% (150,000,000)
- **Core team and future contributors**: 10% (100,000,000)
- **Investors**: 10% (100,000,000)
- **Community and ecosystem programs**: 35% (350,000,000)
- **Staking and validator rewards**: 18% (180,000,000)
- **Protocol Treasury**: 5% (50,000,000)
- **dCorps Foundation**: 5% (50,000,000)
- **Liquidity bootstrap (operational liquidity)**: 2% (20,000,000)

These allocations are governed by on-chain rules and may be refined before mainnet launch.

Allocation intent (plain language):

- Founder, team, and investors align long-term delivery.
- Community and ecosystem programs fund builders and adoption.
- Rewards secure the network.
- Treasury and foundation support public goods and long-term stewardship.
- Liquidity bootstrap supports operational market needs.

### 9.3 Vesting and lockups

To promote long-term alignment:

- Founder allocation has a **24-month cliff**, then linear vesting from month 24 to month 96.
- Core team allocation typically has a **12-month cliff**, then linear vesting over 36 months.
- Investor allocation has a **12-month lockup**, then linear vesting from month 12 to month 48.
- Community and ecosystem allocations release under explicit quarterly and annual caps.
- Validator rewards are distributed from the rewards pool on a published schedule.

Where possible, vesting and lockups are enforced on-chain and verifiable in the genesis state.

### 9.4 Rewards and emissions

- Validator rewards come from the staking rewards pool.
- Emissions refer to the gradual release of already minted tokens.
- Governance can adjust reward parameters within published limits.

### 9.5 Fees and treasury flows

- Transactions use DCHUB for gas.
- Many protocol services use USDC (registration, renewals, optional modules).
- Stablecoin fees flow to the protocol treasury, foundation, and jurisdictions where applicable.

Treasury and foundation funds are governed by on-chain proposals and published policies. They are not personal accounts.

### 9.6 What this means in practice

- Supply is fixed. Circulating supply grows only as vesting and reward schedules unlock.
- Governance can adjust parameters within published limits, but cannot mint new supply.
- Long-term security is intended to shift from emissions to fees as usage grows.

---

## 10. Governance and upgrade safety

### 10.1 On-chain governance

Governance is on-chain and stake-weighted:

- token holders vote on proposals and parameters;
- quorum and thresholds apply;
- votes and outcomes are public.

Common proposal types include:

- parameter changes;
- module lifecycle (register, upgrade, retire);
- sub chain recognition;
- software upgrades;
- treasury and budget allocations.

### 10.2 Advisory bodies

The Protocol Council is advisory only. It:

- reviews high-impact proposals;
- publishes recommendations;
- has no veto power.

### 10.3 Protected changes

Some changes are considered high-risk and require stronger safeguards:

- higher voting thresholds,
- extended review periods,
- timelocks before execution.

### 10.4 Emergency actions

Emergency powers are narrow and time-limited:

- they exist to protect network integrity;
- they must be documented after use;
- they sunset unless re-approved under strict rules.

---

## 11. Security posture

### 11.1 Consensus security

- The Hub uses proof of stake.
- Validators stake DCHUB to secure the network.
- Delegators share rewards and penalties.
- Slashing applies to serious misbehavior.

Validator expectations include:

- secure key management;
- high uptime and monitoring;
- responsible governance participation.
### 11.2 Secure development

Core components are developed with:

- code review for critical changes;
- testing across unit, integration, and testnet environments;
- independent security audits.

Audits focus on:

- Hub core modules;
- entity models for corporations and nonprofits;
- critical infrastructure such as the app and registry.

### 11.3 Bug bounty

dCorps plans a public bug bounty program that:

- covers the Hub and official modules;
- rewards responsible disclosure;
- encourages early reporting and coordinated fixes.

### 11.4 Incident response

When something goes wrong:

- use the smallest intervention that restores safety;
- avoid silent changes to history;
- communicate clearly with public reports.

---

## 12. Privacy and transparency

- The Hub is public by default, but sensitive data stays off-chain.
- Only hashes of documents are anchored, not private content itself.
- Entities can prove integrity without exposing private information.

Examples of public data:

- entity identity and status;
- role changes and governance actions;
- tagged accounting events;
- module attachments and attestations.

Examples of private data:

- personal identities and addresses;
- salary details and HR records;
- beneficiary identities;
- full legal documents (only their hashes are anchored).

Selective disclosure and privacy tools are optional layers, not mandatory requirements.

---

## 13. Roadmap and phases

The public roadmap is gated by readiness, not dates:

- **Phase 0A**: finalize website and public documentation.
- **Phase 0**: publish specs, run a public testnet, ship reproducible tooling.
- **Phase 1**: launch mainnet with core entity modules and registries.
- **Phase 2**: harden standards, APIs, and incident processes.
- **Phase 3**: grow the ecosystem and stablecoin rails.
- **Phase 4**: add jurisdiction adapters and institutional modules.
- **Phase 5**: reach long-term decentralized maturity.

Each phase has exit criteria and success metrics to reduce hype and increase accountability.

---

## 14. Products and ecosystem

The public stack includes:

- **Explorer**: view entities, roles, and flows.
- **Registry**: discover entities, modules, and apps.
- **Official app**: create and manage entities.
- **Documentation**: specs, policies, and integration guides.

Third-party tools can integrate using the same standards.

Builders can focus on UX and analysis instead of recreating basic data structures. Validators and node operators secure the base layer and keep the ecosystem reliable.

---

## 15. Who builds and stewards dCorps

- **Independent development company (DevCo)** builds protocol software and tooling.
- **dCorps Foundation (planned)** stewards public goods, standards, and ecosystem programs.
- **On-chain governance** makes protocol-level decisions.

The foundation may fund development work through transparent proposals and reporting. The goal is to avoid single-vendor control while keeping delivery accountable.

---

## 16. Risks and limits

- Legal recognition depends on local law and optional jurisdiction modules.
- DCHUB price, liquidity, and regulatory treatment are uncertain.
- The protocol is early and may change as it matures.
- No part of this document is a promise of future results.

Other risks include:

- security vulnerabilities or operational mistakes;
- lower than expected adoption or ecosystem growth;
- changes in stablecoin availability or regulation;
- governance capture or low participation.

Use this document to understand the design, not as a guarantee of outcomes.

---

## 17. Glossary

- **Entity**: a corporation or nonprofit recorded on the Hub.
- **Hub kernel**: the minimal core rules for identity, roles, wallets, and accounting events.
- **Module**: an optional layer that reads Hub data and publishes derived outputs.
- **Attestation**: a module output that asserts a claim or status.
- **Anchor**: a hash of a document or summary published to the chain for integrity proof.
- **DCHUB**: the protocol token used for gas, staking, and governance.
- **USDC**: the primary stablecoin used for operating flows and fees.

---

## 18. What to read next

- Roadmap: `/information/roadmap/index.html`
- Tokenomics: `/learn/tokenomics/index.html`
- Protocol overview: `/proocol/overview/index.html`
- Build documentation: `/build/documentations/index.html`
