09-security-privacy-legal.md
09 — Security, Privacy, Legal
Purpose

Protect tenant data, respect user privacy, and keep shipping safe: least privilege, clear redlines, auditable decisions, and honest disclaimers where advice is sensitive.

Scope

Access control (RLS + roles), data classification, storage/transport security, artifact redaction, legal review gates, consent, retention, audit logs, impersonation, demo/marketing boundaries (Uber Mode, microsites).

Out-of-scope

Pen-test execution, SOC2 report drafting, regional tax/legal counsel.

Principles

Tenant isolation by default; minimize data collected; encrypt in transit and at rest; explicit consent for anything public-facing; artifacts are the source of truth; logs are metadata-only (no secrets).

Data classification

Public (marketing), Internal (non-sensitive app UI), Sensitive (artifacts, files, run logs), Restricted (PII, contracts). Restricted data never leaves tenant boundary; demo tenant uses synthetic data only.

Access control

Row-level security (RLS) on all tenant records; roles: owner/editor/viewer; Super Admin access only via impersonation with required reason captured to audit_log and visible to Owners. Feature visibility is server-enforced by entitlements.

Storage & transport

TLS for all traffic; encryption at rest for databases and object storage; signed URLs for file access; short-lived tokens for microsites; no secrets in artifact bodies; secrets stored in a dedicated vault/integration layer.

Privacy and consent

Microsites: read-only, redacted frontmatter by default; optional logo/colors. Uber Mode: watermarked “Demo / Synthetic Data,” no passenger PII unless they opt-in on the microsite. Email capture is explicit; unsubscribe and data deletion links included in emails.

Legal review (gate)

Legal & Compliance seat is mandatory during Review phase when legal_flags exist or keywords (privacy, claim, medical, financial, warranty, regulated industries) are detected. Ship is blocked on any high-severity legal flag until cleared or overridden with Owner reason (logged).

Redaction & exposure

Artifacts intended for external sharing (microsites, exports) must remove PII, vendor keys, internal URLs, council internals, and any draft-only notes. Redaction runs in Validator; a “Redacted for sharing” badge appears on exported artifacts.

Disclaimers

Market X-Ray and any finance-adjacent orchestration are labeled “Educational — Not financial advice.” Health or legal-adjacent summaries carry “Informational — Not medical/legal advice.” Uber Mode carries “Demo / Synthetic Data — Results vary.”

Logging & audit

Every privileged action (impersonation, flag override, entitlement change, export of redacted artifacts) emits an audit_log row with actor, subject, diff (minimal), timestamp. Owners can view their tenant’s audit log; Super Admin has system view.

Retention & deletion

Soft delete for tenants/projects with configurable retention (30–90 days). Upon hard-delete, remove artifacts, files, runs, microsites, and entitlements; keep a minimal legal audit trail (actor, timestamps, counts) without content.

Subprocessors & DPAs

Maintain a subprocessors registry (model providers, storage, email/TTS). Provide a standard DPA; notify tenants of material changes to subprocessors. Region tags on projects enable future residency controls.

Incident response

Define severities (S1–S4), on-call escalation, tenant notification windows, and postmortems. Security contact listed in footer/status page. Breach notifications follow applicable regulations and tenant contracts.

Inputs → Outputs (this shard)

Inputs: role matrix, artifacts schema, microsite behavior, orchestration catalog. Outputs: security controls list, redaction checklist, legal gate rules, disclaimer text bank, audit event map.

User stories

As an Owner, I need confidence our data is isolated and auditable. As Legal, I need hard stops on risky language with clear override mechanics. As a Buyer, I want to see proof without exposing internals. As Support, I need to impersonate only with visible accountability.

Acceptance criteria

RLS blocks cross-tenant reads/writes; impersonation requires a reason and appears in audit_log. Validator enforces redaction for shared artifacts and sets a “Redacted” badge. Legal gate blocks Ship on high-severity flags until cleared/overridden. Microsites use short-lived tokens and show disclaimers. Uber Mode records no passenger PII unless explicitly entered on microsite. Exports never include secrets or council internals.

Metrics

Unauthorized access attempts blocked; % artifacts requiring redaction; legal flag rate by severity; impersonation count with reasons; time to incident acknowledgment; microsite token misuse (should be zero).

Risks / Open questions

Over-redaction reducing usefulness → allow Owner to toggle specific safe fields. Region-specific rules (GDPR/CCPA/PDPA) → introduce region-aware templates in Legal seat. Should microsites ever allow comments before upgrade? If yes, terms and moderation required.
