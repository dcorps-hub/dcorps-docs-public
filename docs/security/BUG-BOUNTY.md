# dCorps – Bug Bounty Program

**Document type**: Security policy  
**Doc ID**: BUG-BOUNTY  
**Status**: Draft  
**Source repo**: dcorps-docs (`docs/security/BUG-BOUNTY.md`)

> Scope: Rules and process for reporting vulnerabilities and receiving rewards.

---

## 1. Program overview

_Summarize the intent and scope of the bug bounty program._

---

## 2. In-scope and out-of-scope

_Define which components and vulnerability classes are in and out of scope._

---

## 3. Rewards and severity

_Describe severity levels and indicative reward ranges._

---

## 4. Submission and communication process

_Explain how to report vulnerabilities and how communication is handled._

---

## 5. Disclosure and safe harbor

_Outline disclosure expectations and any safe harbor language (subject to legal review)._
# dCorps – Bug Bounty Program

**Document type**: Security policy  
**Doc ID**: BUG-BOUNTY  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/security/BUG-BOUNTY.md`)

> Scope: Rules and process for reporting vulnerabilities and receiving rewards. Actual reward amounts and legal terms are subject to separate, finalized program documents.

---

## 1. Program overview

The bug bounty program aims to:

- encourage responsible disclosure of security vulnerabilities;
- recognize and reward researchers who help improve dCorps security;
- complement, not replace, formal audits and internal security work.

The program covers:

- the dCorps Hub protocol and core client implementations;
- selected high-impact modules and tooling as designated by the foundation.

---

## 2. In-scope and out-of-scope

### 2.1 In-scope

Examples of in-scope targets:

- consensus and state machine logic;
- staking, governance, and module integration code;
- sub chain anchoring and recognition logic;
- treasury and foundation-related smart contracts where applicable.

### 2.2 Out-of-scope

Generally out of scope:

- user errors (e.g. lost keys, phishing);
- third-party services and apps not designated as in-scope;
- denial-of-service vulnerabilities that require unrealistic resources or are inherent to public blockchains.

Specific scope and exclusions MUST be defined in the live bounty program documentation.

---

## 3. Rewards and severity

Rewards are typically calibrated based on:

- severity and impact of the vulnerability;
- ease of exploitation;
- quality and clarity of the report;
- whether a working exploit or proof-of-concept is provided.

Indicative severities:

- **Critical** – could lead to large fund loss, consensus failure, or permanent data corruption.
- **High** – serious security impact but with more limited scope or additional preconditions.
- **Medium** – meaningful but mitigated by existing defenses or limited in scope.
- **Low** – minor issues, hard-to-exploit bugs, or defense-in-depth findings.

Reward ranges SHOULD be published for each severity but are ultimately determined on a case-by-case basis.

---

## 4. Submission and communication process

Researchers SHOULD:

- report vulnerabilities privately via designated channels (e.g. security email address, secure form);
- provide clear reproduction steps and, where possible, minimal proof-of-concept code;
- avoid any actions that cause harm, data loss, or disruption to the network.

Maintainers SHOULD:

- acknowledge receipt promptly;
- provide periodic updates on triage and remediation;
- coordinate disclosure timelines with the reporter.

Where a vulnerability affects multiple ecosystems, maintainers SHOULD coordinate with other impacted projects when feasible and subject to disclosure constraints.

---

## 5. Disclosure and safe harbor

The program intends to provide **safe harbor** for good-faith security research within published program rules. Subject to legal review and jurisdictional considerations, this generally means:

- refraining from pursuing legal action against researchers who comply with the program rules and act in good faith;
- working collaboratively with researchers to fix issues before public disclosure.

Final, legally binding safe harbor language MUST be published in the live bounty terms. Researchers are encouraged to review those terms carefully before beginning testing.
