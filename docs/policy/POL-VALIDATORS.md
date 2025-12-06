# dCorps – Validator Charter

**Document type**: Policy  
**Doc ID**: POL-VALIDATORS  
**Status**: Draft  
**Source repo**: dcorps-docs (`docs/policy/POL-VALIDATORS.md`)

> Scope: Expectations, responsibilities, and consequences for validators participating in the dCorps Hub.

---

## 1. Eligibility and onboarding

_Define who can be a validator and how they join._

---

## 2. Operational expectations

_Describe uptime, performance, and operational standards._

---

## 3. Misbehavior and penalties

_Outline what constitutes misbehavior and how penalties/slashing are applied._

---

## 4. Communication and coordination

_Explain required communication channels, incident coordination, and information sharing._

---

## 5. Transparency and monitoring

_Describe monitoring expectations and public information validators should provide._
# dCorps – Validator Charter

**Document type**: Policy  
**Doc ID**: POL-VALIDATORS  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/policy/POL-VALIDATORS.md`)

> Scope: Expectations, responsibilities, and consequences for validators participating in the dCorps Hub.

---

## 1. Eligibility and onboarding

Validators are key to the security and neutrality of the Hub. Operators SHOULD:

- demonstrate technical competence in running Cosmos-style validator nodes;
- maintain reliable infrastructure and monitoring;
- disclose any significant conflicts of interest or affiliations.

Onboarding MAY include:

- basic due diligence by the community or foundation;
- adherence to published best-practice guides;
- participation in testnets or dry-run upgrades before mainnet operations.

This policy does not create a permissioned validator set; eligibility is primarily economic and technical, but expectations are documented to align behavior.

---

## 2. Operational expectations

Validators SHOULD:

- maintain high uptime and low missed-block rates;
- keep nodes patched and up to date with agreed upgrade schedules;
- secure keys with appropriate hardware and operational controls;
- monitor performance, latency, and connectivity continuously.

Validators MUST:

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

Consequences MAY include:

- automatic slashing and jailing at the protocol level;
- reputational impact and potential removal from any curated validator lists;
- exclusion from future programs or delegations managed by the foundation or ecosystem funds.

Slashing rules and thresholds are defined technically in the staking module and economically in `SPEC-PARAMS.md`; this policy serves as a human-readable summary of expectations.

---

## 4. Communication and coordination

Validators SHOULD:

- participate in designated communication channels (e.g. mailing lists, chat, forums);
- respond promptly to critical security and upgrade announcements;
- coordinate in good faith during incidents and upgrades.

Coordinated communication:

- MUST respect security disclosure norms (see `BUG-BOUNTY.md` and `INCIDENT-RESPONSE.md`);
- SHOULD avoid undue centralization or backroom decision-making;
- SHOULD be logged or summarized publicly when it materially affects network operations.

---

## 5. Transparency and monitoring

Validators are encouraged to:

- publish basic profiles (infrastructure, policies, fees, contact details);
- disclose commission rates and any major changes clearly;
- document their security posture at a high level (without exposing sensitive details).

Community members, explorers, and indexers MAY:

- monitor validator performance and behavior;
- surface metrics and flags (e.g. frequent downtime, governance participation);
- provide reputational signals while remaining clear that delegators make their own decisions.
