06-data-and-tenancy.md

06 — Data & Tenancy
Purpose

Define how users, tenants, projects, artifacts, runs, and microsites are modeled and isolated so we can enforce security, auditability, and clean lifecycle management.

Scope

Multi-tenant data model, row-level security (RLS), identifiers, versioning, soft-delete, entitlements mapping, microsites, and audit trails.

Out-of-scope

UI, billing webhooks code, storage engine specifics (indexes, vacuum policies).

Tenancy model

Tenants represent customer workspaces (including the demo tenant for Uber Mode). All project and artifact data is scoped to a single tenant. Cross-tenant reads are forbidden except for Super Admin with impersonation and audit reason.

Core entities

users — account identity (email, auth ids, profile).
tenants — workspace (name, slug, plan, status).
memberships — (user_id, tenant_id, role: owner|editor|viewer|admin_impersonation_only).
projects — (tenant_id, name, status, created_by, pinned_persona_version, region).
artifacts — (tenant_id, project_id, path, version, frontmatter_json, body_md, created_by, updated_by, created_at).
runs — (project_id, phase, role, status, started_at, finished_at, cost_tokens, cost_usd, error).
entitlements — (tenant_id, key, value, source: stripe|trial|override).
sites — (project_id, domain, type: microsite|custom, status, expires_at).
audit_log — (tenant_id, actor_user_id, action, subject_type, subject_id, diff, created_at).
files — (tenant_id, project_id, key, size, mime, checksum, created_by).

IDs and keys

Use ULIDs for all primary keys for sortability by time. Human-readable slugs for tenants and projects; slugs are stable once created. Artifacts are addressed by (project_id + path + version). “Latest” resolves to max(version).

Relationships (high level)

A user can belong to many tenants via memberships. A tenant has many projects and entitlements. A project has many artifacts and runs, and an optional site. Artifacts are immutable per version; only new versions are added. Runs reference the artifact version they produced.

Roles and permissions

Owner — full control of tenant; can override flags with reason.
Editor — can create/edit projects and artifacts; cannot change billing or delete tenant.
Viewer — read-only in app; cannot advance gates; can comment if enabled.
Super Admin — server-side elevated role used only with impersonation + reason logged.

RLS (row-level security)

RLS predicate = current_user must have a membership in the row’s tenant_id. Super Admin bypass allowed only when impersonating a tenant and recording audit reason. All writes must include tenant_id from session, not client input, to prevent forged scoping.

Entitlements and feature flags

Entitlements control visibility and limits: thinkwise_enabled, orchestrations_per_month, seats, microsites_enabled, automations_enabled, api_access. Flags are read server-side and cached per request; UI should never trust client-side flags alone.

Artifacts — storage and versioning

Artifacts store JSON frontmatter and Markdown body. Version increments on every save; previous versions are immutable. Diff is computed on demand. Required artifacts per phase are defined in 05; validators reject invalid frontmatter or missing sections.

Runs — observability spine

Every agent step writes a run row with timing and cost metrics. Status ∈ queued|running|succeeded|failed|aborted. On failure, error is captured with truncated message and pointer to logs. Admin Overview aggregates cost_usd by model and tenant daily.

Files and assets

Large proof assets are stored in object storage; files table tracks metadata and signed URL policy. Links are referenced from artifacts’ frontmatter (assets[]) rather than embedding binary data.

Microsites (sites table)

For project-only buyers and Uber Mode demos. Domain may be a subdomain on *.solutions.deskwise.com or a verified custom domain after upgrade. Expiry (expires_at) required for demos; read-only views enforce role=viewer. Microsite content pulls from specific artifact versions to ensure consistency.

Soft delete and retention

Deleting a tenant sets tenants.status=“disabled” and tombstones projects, artifacts, files, and sites via a soft-delete flag; data retained for 30–90 days (configurable) then purged. Individual artifact versions are never hard-deleted unless retention policy demands.

Audit log

All privileged actions (impersonation, flag overrides, entitlement changes, role changes, deletions) emit an audit_log row with a minimal diff. Audit events are tenant-scoped and visible to Owners; system-wide view is restricted to Super Admin.

Regions and legal

Projects carry a region code (e.g., US, EU). Legal & Compliance personas use region to choose the correct templates. Data residency is future-proofed via region-scoped buckets; for now, metadata resides in a single primary region.

Performance and indexes (guidance)

Composite indexes: (tenant_id, slug) on tenants and projects; (project_id, path, version DESC) on artifacts; (project_id, started_at DESC) on runs; (tenant_id, key) on entitlements. Avoid unbounded text search on body_md; use a separate search index if needed.

Impersonation

Super Admin can impersonate a tenant only by providing a reason string; this is appended to audit_log and shown to the Owner in Admin Overview.

Inputs → Outputs (this shard)

Inputs: security requirements, UX flows, artifacts schema. Outputs: ERD sketch, table contracts, RLS policies draft, index checklist, purge policy.

User stories

As an Owner, I want my data isolated so other customers can’t access it. As an Editor, I want artifact versions I can diff and restore. As a Super Admin, I need to impersonate for support with a clear audit trail. As a Buyer, I need a microsite that is read-only and expires if I don’t convert.

Acceptance criteria

RLS blocks cross-tenant read/write without membership or impersonation. Artifact versions are immutable; restore creates a new version. Runs are written for every agent step with status and costs. Entitlements hide disallowed features server-side and client-side. Microsites respect expiry and cannot mutate artifacts. Soft-deleted tenants and projects no longer appear in UI but can be restored within retention.

Metrics

Unauthorized access attempts blocked; % runs with cost metrics; artifact restore rate; microsite expiry→conversion rate; impersonation count with reasons; median query latency on artifacts by (project_id, path).

Risks / Open questions

Microsite leakage of internal metadata → only expose redacted frontmatter; never show council internals by default. Retention window legal requirements vary by region → make policy configurable per tenant. Search across large body_md fields → consider external vector/text index. Should viewers be allowed to comment on microsites pre-upgrade? If yes, where do those comments live (separate table scoped to site)?
