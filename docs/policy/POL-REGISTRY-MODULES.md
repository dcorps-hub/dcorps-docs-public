# dCorps – Module and App Registry Policy

**Document type**: Policy  
**Doc ID**: POL-REGISTRY-MODULES  
**Status**: Draft  
**Source repo**: dcorps-docs (`docs/policy/POL-REGISTRY-MODULES.md`)

> Scope: Rules for listing, maintaining, and delisting modules and applications in official registries.

---

## 1. Purpose and scope

_Describe the role of the registry and which modules/apps it covers._

---

## 2. Listing criteria

_Define technical, security, and disclosure requirements for listing._

---

## 3. Review and approval process

_Explain submission, review, and decision workflows._

---

## 4. Risk tiers and labels

_Describe how modules/apps are categorized by risk and surfaced to users._

---

## 5. Delisting and incident response

_Outline conditions and processes for delisting or restricting modules/apps._
# dCorps – Module and App Registry Policy

**Document type**: Policy  
**Doc ID**: POL-REGISTRY-MODULES  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/policy/POL-REGISTRY-MODULES.md`)

> Scope: Rules for listing, maintaining, and delisting modules and applications in official dCorps registries.

---

## 1. Purpose and scope

The module and app registry serves to:

- provide a **curated, transparent catalog** of modules and apps that integrate with the dCorps Hub;
- communicate risk levels, audit statuses, and intended use cases;
- avoid the appearance of implicit endorsement beyond clearly stated criteria.

This policy covers:

- protocol modules approved via governance and listed in the on-chain module registry;
- applications and tools listed in any official off-chain directories maintained by the foundation or community.

---

## 2. Listing criteria

To be listed, a module or app SHOULD:

- implement relevant dCorps standards (e.g. `SPEC-MODULES.md`, `SPEC-DATA.md`);
- have clearly documented purpose, scope, and limitations;
- disclose its operators, maintainers, and any economic relationships with dCorps;
- undergo appropriate security review for its risk profile.

Additional expectations for high-impact modules include:

- public audit reports or equivalent independent review;
- documented incident response and maintenance plans;
- clear user-facing risk disclosures.

---

## 3. Review and approval process

### 3.1 Protocol modules

Protocol modules:

- MUST be approved via on-chain governance following `SPEC-MODULES.md`;
- are listed in the on-chain module registry upon activation;
- may be accompanied by off-chain entries with richer descriptions and documentation.

### 3.2 Applications and tools

Apps and tools integrated into official directories:

- MAY be submitted via a lightweight application process;
- SHOULD be reviewed by a small review group or foundation team;
- MUST not misrepresent themselves as official unless explicitly designated.

Decisions to list or not list an app or tool SHOULD be based on transparent criteria and documented where practical.

---

## 4. Risk tiers and labels

Each listed module or app SHOULD have risk labels, for example:

- **Core** – maintained by or under the close oversight of core teams or the foundation.
- **Ecosystem** – maintained by third parties with established track records.
- **Experimental** – new or unproven modules with limited track record.

Additional labels MAY include:

- `Audited` / `Unaudited`;
- `High impact` (e.g. modules that can affect funds or governance outcomes);
- `Jurisdictional` (modules binding on-chain behavior to local law).

Risk labels MUST be:

- clearly explained to users;
- updated when new information (e.g. audits, incidents) arrives.

---

## 5. Delisting and incident response

Modules or apps MAY be delisted or downgraded when:

- severe vulnerabilities or abuses are discovered;
- operators fail to address issues within reasonable timeframes;
- behavior diverges materially from stated purpose or policy.

For protocol modules:

- delisting or disabling MUST go through on-chain governance, except in narrowly scoped emergencies handled under governance and security policies.

For apps and tools:

- registry maintainers MAY delist quickly in response to credible security issues or abuse, with public post-hoc explanations when appropriate.

Delisting does not retroactively validate or invalidate past use; users remain responsible for their own decisions. The objective is to provide timely, transparent signals about ongoing risk.
