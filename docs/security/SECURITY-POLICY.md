# dCorps – Security Policy

**Document type**: Policy  
**Doc ID**: SECURITY-POLICY  
**Status**: Draft  
**Source repo**: dcorps-docs (`docs/security/SECURITY-POLICY.md`)

> Scope: Security principles, responsibilities, and baseline controls for the dCorps protocol and foundation.

---

## 1. Security principles

_State high-level security principles and goals._

---

## 2. Roles and responsibilities

_Describe who is responsible for what across core devs, validators, foundation, and contributors._

---

## 3. Secure development lifecycle

_Outline expectations for design review, testing, code review, and dependency management._

---

## 4. Key and secret management

_Define expectations for handling validators’ keys, foundation keys, and other sensitive material._

---

## 5. Infrastructure and operations

_Describe baseline infra security requirements, monitoring, and backups._
# dCorps – Security Policy

**Document type**: Policy  
**Doc ID**: SECURITY-POLICY  
**Status**: Draft v0.1  
**Source repo**: dcorps-docs (`docs/security/SECURITY-POLICY.md`)

> Scope: Security principles, responsibilities, and baseline controls for the dCorps protocol and foundation. This policy is complementary to the Threat Model, Audit Plan, Bug Bounty, and Incident Response documents.

---

## 1. Security principles

dCorps adopts the following principles:

- **Defense in depth** – combine multiple layers of protection across code, infrastructure, process, and governance.
- **Least privilege** – grant only the access and capabilities required for each role, module, or system.
- **Secure by default** – prefer safe defaults even if they are less convenient.
- **Transparency** – favor open discussion of risks and mitigations, consistent with responsible disclosure.
- **Continuous improvement** – treat security as an ongoing process, not a one-time project.

Security considerations span:

- core protocol and modules;
- validators and node operators;
- foundation operations and treasury;
- ecosystem tooling and integrations.

---

## 2. Roles and responsibilities

Security is a shared responsibility:

- **Core developers**
  - design and implement protocol logic with security in mind;
  - maintain secure development practices and code review standards;
  - coordinate technical response to vulnerabilities and incidents.
- **Validators and node operators**
  - secure validator infrastructure and keys;
  - keep software up to date;
  - participate in coordinated incident handling.
- **dCorps Foundation**
  - fund audits, bug bounties, and security tooling;
  - coordinate communication with the community and external stakeholders;
  - maintain internal security processes and compliance.
- **Ecosystem developers**
  - follow best practices when integrating with dCorps;
  - avoid misrepresenting security guarantees of their own products.

Responsibilities SHOULD be further detailed in operational runbooks and agreements where applicable.

---

## 3. Secure development lifecycle

Core protocol and critical tooling SHOULD follow a secure development lifecycle (SDLC) that includes:

- security-conscious design reviews for new features and changes;
- static and dynamic analysis where appropriate;
- mandatory peer review for code changes affecting consensus, cryptography, or funds;
- structured testing at unit, integration, and system levels;
- periodic security training for contributors.

Changes that significantly affect security MUST:

- be documented in design notes or proposals;
- undergo targeted review and, where applicable, external audits;
- be accompanied by updates to the Threat Model and related documents.

---

## 4. Key and secret management

### 4.1 Validator and user keys

Validators and users are responsible for:

- using hardware-backed keys or equivalent secure storage for high-value keys;
- protecting seed phrases and backups with strong operational controls;
- promptly rotating keys in the event of suspected compromise.

Validator key management expectations are further described in `POL-VALIDATORS.md`.

### 4.2 Foundation and treasury keys

The foundation MUST:

- use multisignature or equivalent mechanisms for treasury and high-value accounts;
- define clear signer roles and rotation schedules;
- keep detailed internal records of key custody and access.

Private keys MUST never be stored in plaintext in code repositories, chat logs, or documentation.

---

## 5. Infrastructure and operations

Core infrastructure (e.g. reference nodes, build and release systems, critical services) SHOULD:

- use hardened configurations and up-to-date operating systems;
- isolate environments by function (e.g. build, test, production);
- restrict access via least privilege and strong authentication;
- be monitored for anomalies and suspicious activity.

Operational guidance SHOULD cover:

- safe software release processes (signing, reproducible builds where feasible);
- secure use of third-party dependencies and services;
- backups and disaster recovery plans for critical systems.

Validators and ecosystem participants are encouraged to adopt similar best practices, adapted to their own risk profiles.
