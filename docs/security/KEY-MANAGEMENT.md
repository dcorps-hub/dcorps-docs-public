# Key Management Policy (Public-Safe)

**Document type**: Security policy  
**Doc ID**: KEY-MANAGEMENT  
**Status**: Final v0.1  
**Source repo**: dcorps-docs (`docs/security/KEY-MANAGEMENT.md`)

> Scope: Public-safe guidance for key custody, rotation, and separation of duties.

---

## 1. Principles

- Use hardware-backed keys for high-value accounts.
- Separate duties across proposers, approvers, and signers.
- Rotate keys on a defined schedule or upon compromise.

---

## 2. Validator keys

- Store validator consensus keys offline where possible.
- Use sentry nodes to protect validator infrastructure.
- Maintain a documented key rotation plan.

---

## 3. Treasury and foundation keys

- Use multisig or threshold custody for treasury accounts.
- Require multiple signers for any transfer above policy thresholds.
- Maintain signer rotation and access logs.

---

## 4. Incident response

- Revoke or rotate keys upon suspected compromise.
- Document the event and notify stakeholders as required.

---

## 5. Restricted details

Operational details for key storage, rotation steps, and emergency access are kept under `docs/restricted/` when needed.
