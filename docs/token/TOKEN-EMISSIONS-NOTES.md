# DCHUB Token – Emissions Notes

**Document type**: Working notes  
**Doc ID**: TOKEN-EMISSIONS-NOTES  
**Status**: Draft (internal working)  
**Source repo**: dcorps-docs (`docs/token/TOKEN-EMISSIONS-NOTES.md`)

> Scope: Working notes, scenarios, and rationale for emissions and long-term token flows.

---

## 1. Modeling assumptions

_Capture key assumptions underlying emissions models._

---

## 2. Emission models considered

_List and briefly describe candidate models (fixed, decaying, capped, etc.)._

---

## 3. Selected model (if any)

_Summarize the currently preferred model and why it was chosen._

---

## 4. Scenario notes

_Record notes from scenario analysis, stress tests, and simulations._

---

## 5. Open questions

_Reference TBDs in `TBD_REGISTER.md` that are relevant to emissions._
# DCHUB Token – Emissions Notes

**Document type**: Working notes  
**Doc ID**: TOKEN-EMISSIONS-NOTES  
**Status**: Draft (internal working)  
**Source repo**: dcorps-docs (`docs/token/TOKEN-EMISSIONS-NOTES.md`)

> Scope: Working notes, scenarios, and rationale for emissions and long-term token flows. This document is exploratory and non-normative.

---

## 1. Modeling assumptions

Key assumptions to be explicitly tracked here include:

- anticipated number of validators and target decentralization;
- desired real yield for stakers versus alternative opportunities;
- expected usage growth and fee revenues over time;
- tolerance for dilution of long-term holders.

Assumptions SHOULD be versioned and dated so that changes in context are clear.

---

## 2. Emission models considered

Potential models to analyze may include:

- **Fixed supply, fee-only rewards**
  - zero protocol inflation; rewards funded solely from fees.
- **Decaying inflation**
  - higher emissions early that decay toward zero over time.
- **Targeted inflation**
  - adaptive inflation that targets a desired staking participation rate.
- **Hybrid models**
  - combining initial higher emissions with long-term caps.

For each model, notes SHOULD cover:

- impacts on security and staking participation;
- implications for long-term holders;
- sensitivity to fee growth and market conditions.

---

## 3. Selected model (if any)

Once a model is tentatively selected:

- document its key parameters and rationale;
- link to quantitative analyses, spreadsheets, or simulations;
- list open questions that must be resolved before finalization.

Selection recorded here does **not** constitute formal adoption; that requires a governance process and updates to `TOKEN-POLICY.md` and the Master Reference.

---

## 4. Scenario notes

This section is for ad hoc notes from scenario analysis, such as:

- high-fee vs low-fee environment impacts;
- validator concentration risks under different reward structures;
- behavior under extreme conditions (e.g. sudden drop in token price).

Authors SHOULD:

- include dates and brief descriptions of methods used;
- reference any external models or tools.

---

## 5. Open questions

Open questions related to emissions SHOULD be mirrored in `TBD_REGISTER.md` with:

- clear IDs;
- proposed owners;
- links back to relevant sections in this document.

Examples:

- long-term target for staked percentage of circulating supply;
- acceptable range for annualized inflation in steady state;
- conditions under which emissions should be adjusted by governance.
