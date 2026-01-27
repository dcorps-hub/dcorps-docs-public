# Operator Charter

**Document type**: Policy  
**Doc ID**: POL-OPERATORS  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/policy/POL-OPERATORS.md](/policy/POL-OPERATORS))  
**Last updated**: 2026-01-25

> Scope: Expectations, responsibilities, and consequences for rollup operators and core infrastructure providers supporting the dCorps Hub.

---

## 1. Eligibility and onboarding

Rollup operators are key to the liveness and integrity of the Hub. Operators should:

- demonstrate technical competence in operating the Orbit rollup stack (sequencer, batch posting, RPC, monitoring);
- maintain reliable infrastructure and incident response coverage;
- disclose material conflicts of interest or affiliations.

Onboarding may include:

- basic due diligence by governance or the foundation (once formed);
- adherence to published best-practice guides;
- participation in testnets and upgrade rehearsals before mainnet operations.

This policy does not create a permissioned operator set; eligibility is defined by governance rules, operational readiness, and transparent performance.

---

## 2. Operational expectations

Operators should:

- maintain high sequencing and batch-posting availability;
- keep software patched and follow upgrade schedules;
- manage L1 funding for data posting and withdrawals;
- monitor performance, latency, and reorg or settlement issues continuously.

Operators must:

- follow governance-approved upgrade instructions and timelines;
- participate in rehearsals for major upgrades or configuration changes;
- notify the community promptly in case of operational incidents.

---

## 3. Misbehavior and consequences

Misbehavior includes, but is not limited to:

- withholding or delaying batches without justified cause;
- sustained outages or failure to post data to Ethereum;
- participating in censorship, manipulation, or reordering beyond published policies;
- collusion to undermine governance decisions or protocol rules.

Consequences may include:

- removal from operator roles by governance;
- key rotation or privilege reduction under timelocked procedures;
- exclusion from future operator programs or funding.

Orbit v1 does not include protocol-level slashing or jailing; accountability is enforced through governance, transparency, and operator role management.

---

## 4. Communication and coordination

Operators should:

- participate in designated communication channels (mailing lists, incident rooms, status pages);
- respond promptly to critical security and upgrade announcements;
- coordinate in good faith during incidents and upgrades.

Coordinated communication:

- respects security disclosure norms (see `BUG-BOUNTY.md` and `INCIDENT-RESPONSE.md`);
- avoids undue centralization or backroom decision-making;
- is logged or summarized publicly when it materially affects network operations.

---

## 5. Transparency and monitoring

Operators are encouraged to:

- publish basic profiles (infrastructure, policies, contact details);
- disclose key-rotation procedures and operational limits;
- provide a high-level summary of their security posture (without exposing sensitive details).

Community members, explorers, and indexers may:

- monitor operator performance and liveness;
- surface metrics and flags (e.g. batch-posting gaps, prolonged downtime);
- provide reputational signals while remaining clear that governance sets operator roles.

---

## 6. Enforcement approach

Operator accountability is enforced through:

- governance actions to adjust or remove operator roles;
- published incident disclosures and performance reporting;
- timelocked operational changes to avoid sudden or opaque control shifts.

This policy does not create a permissioned operator cartel. Enforcement is transparent and must align with on-chain governance decisions.
