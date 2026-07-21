# Public Documentation Publication Policy

**Status**: Adopted for local and protected noindex DEV Whitepaper and Founder Manifesto review
**Authority dates**: 2026-07-15, 2026-07-16, 2026-07-17, 2026-07-19, 2026-07-20, and 2026-07-21
**Authority**: Nicolas Turcotte, Protocol Founder

## Controlling sources

### Blockchain Whitepaper V1.0

The sole controlling source for the dCorps Blockchain Whitepaper V1.0 is the
canonical manuscript in the private governance repository:

`docs/master/DCORPS_BLOCKCHAIN_WHITEPAPER_V1_0.md`

Its SHA-256 digest is:

`7606ccc013a6771eb03ae8339984ee4129145fdf6d851cf63a0512273b32851a`

### Founder Manifesto V1.0

The sole controlling source for the dCorps Founder Manifesto V1.0 is the exact
owner-provided source preserved in the private governance repository:

`docs/master/source/DCORPS_FOUNDER_MANIFESTO_V1_0.md`

Its SHA-256 digest is:

`0437b602fef558d5b50d0177ebd254fd36519b7206bd0f8a50b411e7b63c1382`

Prior Whitepapers, Manifestos, deleted files, Git history, frozen website
prose, transcripts, generated artifacts, implementation code, and agent memory
cannot supplement or reinterpret either controlling source. The owner withdrew
the Manifesto signature image on 2026-07-19. Public presentation uses the
Founder's name and title aligned at the right and must not restore the image.

## Authorized publication scope

The owner authorized the complete official V1.0 Whitepaper to be placed in the
existing dCorps website Whitepaper reader for local review. This authorizes:

- one byte-exact public distribution copy in `docs/whitepaper/`;
- one byte-exact vendored website build input;
- formatting that exact copy as accessible HTML in the existing
  `/whitepaper/` reader; and
- an unchanged raw Markdown integrity artifact and checksum beside the
  generated page.

The HTML may add navigation anchors, semantic elements, responsive tables,
safe external-link attributes, and styling. It must preserve the manuscript's
words, order, headings, lists, tables, links, quotations, code blocks, notices,
qualifications, and full Section 10 heading. The reader contents navigation may
use `DCORPS tokenomics` as the compact label for the full heading.

The owner separately authorized the complete Founder Manifesto V1.0 to replace
the placeholder copy in the existing local `/manifesto/` page. This
authorizes:

- one byte-exact public distribution copy in `docs/manifesto/`;
- one byte-exact vendored website build input;
- formatting the 29 paragraphs as accessible HTML in their exact order within
  the preserved Manifesto layout; and
- presentation metadata outside the hashed prose: the page title, author name,
  and current Protocol Founder role, aligned at the right without a signature
  image.

The website must not rewrite, correct, summarize, reorder, or append a
disclaimer to the Manifesto prose.

## Integrity requirements

- The public distribution copy and vendored website source must match the
  canonical digest exactly.
- A website build must fail if its vendored source does not match the adopted
  digest.
- The website build must not read from a sibling or private repository.
- Generated HTML is a presentation derivative. The unchanged Markdown and
  checksum remain the public integrity reference.
- The Manifesto public distribution copy and vendored website source must
  match the adopted Manifesto digest exactly.
- A website build must fail if either vendored source differs from its adopted
  digest.
- The owner explicitly authorized the corrected Whitepaper, including the
  2026-07-19 dCorps Entity and future Smart Jurisdiction correction and the
  2026-07-20 full-bridge stablecoin settlement and sovereign-treasury
  correction, and the 2026-07-21 adoption of DCORPS as the permanent native
  asset name and ticker together with the Rollup-distribution and sovereign-L1
  continuity clarification, before any V1.0 public release. It therefore
  remains V1.0 while the exact original owner intake remains immutable in the
  private governance repository.
- The owner separately authorized V1-0039 before public release. It changes the
  Section 10 table-of-contents line and H2 title to `DCORPS tokenomics: paying
  for the chain and later governing shared operations` and authorizes the
  compact reader label `DCORPS tokenomics`. It changes no economics, supply,
  allocation, release, burn, distribution, governance, Rollup, sovereign-L1,
  or implementation term.
- The immediately preceding V1-0038 Whitepaper digest was
  `9bb6fbfa5d575bcea868a603d62f89595ad7e353bf7d87852df6ce6b0368a84b`.
  The current V1-0039 digest is the controlling digest stated above.
- After public release, a substantive Whitepaper or Manifesto change requires
  explicit owner adoption, a new version or amendment, a new digest, and
  updated publication records.

## Claim and release boundary

Publication does not change any qualification in the Whitepaper. It does not
claim that the network is deployed, audited, production-ready, decentralized,
or legally effective. It is not a token offer, sale authorization, exchange
listing, legal opinion, or investment recommendation.

The Founder Manifesto is the Founder's mission statement. The Whitepaper V1.0
controls protocol behavior, launch scope, deployment status, architecture, and
technical qualifications. Publishing the Manifesto does not convert its
mission language into a claim that future protocol capabilities are already
deployed.

This authorization is limited to local and protected noindex DEV review. It
does not authorize production publication, token distribution, a production
provider action, or a change to the production `dcorps.com` surface.
