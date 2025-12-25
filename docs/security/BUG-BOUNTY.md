# Bug Bounty

**Document type**: Security policy  
**Doc ID**: BUG-BOUNTY  
**Status**: Final v0.1  
**Release date**: December 21, 2025  
**Author**: Nicolas Turcotte, Founder  
**Source repo**: dcorps-docs-public ([docs/security/BUG-BOUNTY.md](/security/BUG-BOUNTY))  
**Last updated**: 2025-12-24  

> Scope: Rules and process for reporting vulnerabilities and receiving rewards, including baseline reward ranges and safe-harbor expectations.

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

In-scope deployments and artifacts are limited to those explicitly published by dCorps (official repos, binaries, and public endpoints).

### 2.2 Out-of-scope

Generally out of scope:

- user errors (e.g. lost keys, phishing);
- third-party services and apps not designated as in-scope;
- denial-of-service vulnerabilities that require unrealistic resources or are inherent to public blockchains;
- spam, rate-limit bypass, and “gas griefing” reports that do not lead to concrete protocol harm.

Reports that rely on social engineering, physical attacks, or insider access are generally out of scope unless they reveal a systemic weakness in published controls.

---

## 3. Rewards and severity

Rewards are calibrated based on:

- severity and impact of the vulnerability;
- ease of exploitation;
- quality and clarity of the report;
- whether a working exploit or proof-of-concept is provided.

Indicative severities:

- critical – could lead to large fund loss, consensus failure, or permanent data corruption;
- high – serious security impact but with more limited scope or additional preconditions;
- medium – meaningful but mitigated by existing defenses or limited in scope;
- low – minor issues, hard-to-exploit bugs, or defense-in-depth findings.

### 3.1 Reward ranges (baseline)

Rewards are paid in USDC (or equivalent) and are granted at the discretion of the program based on impact and report quality.

| Severity | Typical impact | Reward range (USDC) |
| --- | --- | --- |
| Critical | consensus failure, chain halt, or credible large-scale fund loss | 25,000 to 150,000 |
| High | severe security impact with meaningful constraints | 5,000 to 25,000 |
| Medium | meaningful impact with mitigating factors | 1,000 to 5,000 |
| Low | limited impact or defense-in-depth | 250 to 1,000 |
| Informational | best practices, low-risk issues | 0 to 250 |

### 3.2 Eligibility and award rules (baseline)

- First valid reporter is eligible for rewards; duplicates may be acknowledged but typically are not rewarded.
- Reports must include clear reproduction steps and sufficient detail to validate the issue.
- Reports that include safe, minimal proof-of-concept code may be rewarded higher.
- Researchers who are employees, contractors, or paid auditors for dCorps (or acting under their direction) are not eligible for rewards.
- Where legally required, payment may be subject to sanctions checks or similar compliance requirements.

---

## 4. Submission and communication process

Researchers:

- report vulnerabilities privately via designated channels (e.g. security email address, secure form);
- provide clear reproduction steps and, where possible, minimal proof-of-concept code;
- avoid any actions that cause harm, data loss, or disruption to the network.

Maintainers:

- acknowledge receipt promptly;
- provide periodic updates on triage and remediation;
- coordinate disclosure timelines with the reporter.

Where a vulnerability affects multiple ecosystems, maintainers coordinate with other impacted projects when feasible and subject to disclosure constraints.

---

### 4.1 Submission workflow (baseline)

- Contact: `security@dcorps.com`
- Required report contents:
  - impact summary
  - affected component and version
  - reproduction steps
  - proof-of-concept or test case (if safe)
  - suggested mitigation (optional)

### 4.2 Response targets (baseline)

- Acknowledgement: within 2 business days.
- Triage decision: within 7 business days.
- Severity assignment and remediation plan: within 14 business days.

These targets may adjust based on severity and complexity.

---

## 5. Disclosure and safe harbor

The program intends to provide safe harbor for good-faith security research within published program rules. This generally means:

- refraining from pursuing legal action against researchers who comply with the program rules and act in good faith;
- working collaboratively with researchers to fix issues before public disclosure.

Researchers must:

- make a good-faith effort to avoid privacy violations, data destruction, and service disruption;
- avoid accessing, modifying, or exfiltrating funds or sensitive data beyond what is necessary to demonstrate impact;
- stop testing and report immediately if sensitive data is accessed unintentionally;
- not publicly disclose details until a coordinated disclosure plan is agreed.

This document is a program policy and does not constitute legal advice.

### 5.1 Disclosure timeline (baseline)

- Default coordinated disclosure window: 90 days.
- Critical issues may require accelerated disclosure after remediation.
