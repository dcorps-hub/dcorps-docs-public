# dCorps – Validator Charter

**Document type**: Policy  
**Doc ID**: POL-VALIDATORS  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/policy/POL-VALIDATORS.md`)

> Scope: Expectations, responsibilities, and consequences for validators participating in the dCorps Hub.

---

## 1. Eligibility and onboarding

Validators are key to the security and neutrality of the Hub. Operators should:

- demonstrate technical competence in running Cosmos-style validator nodes;
- maintain reliable infrastructure and monitoring;
- disclose any significant conflicts of interest or affiliations.

Onboarding may include:

- basic due diligence by the community or foundation;
- adherence to published best-practice guides;
- participation in testnets or dry-run upgrades before mainnet operations.

This policy does not create a permissioned validator set; eligibility is primarily economic and technical, but expectations are documented to align behavior.

---

## 2. Operational expectations

Validators should:

- maintain high uptime and low missed-block rates;
- keep nodes patched and up to date with agreed upgrade schedules;
- secure keys with appropriate hardware and operational controls;
- monitor performance, latency, and connectivity continuously.

Validators must:

- follow network upgrade instructions and timelines;
- participate in rehearsals or simulations when requested for major upgrades;
- notify the community promptly in case of operational incidents.

---

## 3. Misbehavior and penalties

Misbehavior includes, but is not limited to:

- double-signing blocks;
- extended downtime or absenteeism;
- participating in censorship or manipulation of transactions;
- colluding to undermine governance decisions or protocol rules.

Consequences may include:

- automatic slashing and jailing at the protocol level;
- reputational impact and potential removal from any curated validator lists;
- exclusion from future programs or delegations managed by the foundation or ecosystem funds.

Slashing rules and thresholds are defined technically in the staking module and economically in `SPEC-PARAMS.md`; this policy serves as a human-readable summary of expectations.

---

## 4. Communication and coordination

Validators should:

- participate in designated communication channels (e.g. mailing lists, chat, forums);
- respond promptly to critical security and upgrade announcements;
- coordinate in good faith during incidents and upgrades.

Coordinated communication:

- respects security disclosure norms (see `BUG-BOUNTY.md` and `INCIDENT-RESPONSE.md`);
- avoids undue centralization or backroom decision-making;
- is logged or summarized publicly when it materially affects network operations.

---

## 5. Transparency and monitoring

Validators are encouraged to:

- publish basic profiles (infrastructure, policies, fees, contact details);
- disclose commission rates and any major changes clearly;
- provide a high-level summary of their security posture (without exposing sensitive details).

Community members, explorers, and indexers may:

- monitor validator performance and behavior;
- surface metrics and flags (e.g. frequent downtime, governance participation);
- provide reputational signals while remaining clear that delegators make their own decisions.

---

## 6. Enforcement approach

Validator accountability is enforced through:

- protocol-level slashing and jailing where applicable;
- governance actions for removal from curated or foundation-backed validator lists;
- public incident disclosures and performance reporting.

This policy does not create a permissioned validator set. Enforcement is transparent and must align with on-chain governance decisions.
