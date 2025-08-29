# 11 — Frontend UX Flows

## Purpose
Define what each role can see and do, and the interactions that move work from idea → proof → shipped.

## Scope
Role-based pages and behaviors across Workspace, Project tabs, and Microsites.
Interaction rules (stage gates, mentions, drawers, versioning, keyboard).

## Out-of-scope
Visual design system; component library; pricing UI specifics.

---

## Roles
- **Super Admin** — operates the platform (tenants, runs, cost, templates, system).
- **Workspace Owner/Editor** — runs projects (Boardroom, Build, Artifacts), launches orchestrations.
- **Project-only Buyer** — consumes a single solution via microsite (read-only + exports).

---

## Global patterns (app)
- Tabs per project: **Boardroom · Build · Artifacts** (1/2/3 shortcuts).
- Left **phase stepper** in Build: Think · Plan · Proof · Review · Ship; committees under active phase.
- **Phase chat** pinned to bottom; one stream per phase; supports `@Boardroom`, `@Review`, `@Committee`.
- **Search** is global: projects, artifacts, mentions; results grouped by type.
- **Drawers** for committee work and previews; **Artifacts** tab owns version/diff/export.
- **Stage gate button** disabled until required artifacts exist and validate.

---

## Super Admin pages

### Admin Overview
- Sees: tenants, active projects, last 10 failures, spend today, token cost by model.
- Does: jump to tenant/project, pause a noisy workflow, export CSV.

### Tenants
- Sees: plan, seats, entitlements, invoices.
- Does: upgrade/downgrade, adjust entitlements, impersonate (requires reason; audited).

### Project Inspector
- Sees: current phase, required artifacts, last 5 runs with logs.
- Does: re-run a failed step, reopen a phase, download artifacts bundle.

### Audit (Artifacts & Runs)
- Sees: searchable artifacts/runs across all tenants.
- Does: open, diff, restore version (with warning), export.

### Templates & Committees
- Sees: committee charters, prompts, validator templates, seat versions.
- Does: version a template, roll out to selected tenants, pin persona versions per project.

### System
- Sees/Does: provider keys (secrets), model routing, cost caps, webhooks, legal text.

---

## Workspace Owner/Editor pages

### Workspace Home
- Sees: “needs decision” queue, recent ships, projects, orchestrations library.
- Does: create project, book Friction X-Ray, approve a gate.

### Project — Boardroom (exec view)
- Sees: gate (Think/Plan/Proof/Review/Ship), Executive Brief, Options (with **default**), Proof snapshot, risks/blocks, next action.
- Does: approve default, request changes to a committee, move to next phase.

### Project — Build (work view)
- Sees: phase stepper; active phase checklist; committee list; required artifacts panel; phase chat.
- Does: open committee drawer, send to Boardroom, attach files, create artifact from template.

### Project — Artifacts (library)
- Sees: artifacts by phase (required first), status, last edit, author.
- Does: open, diff, restore version, export PDF/MD; mark as “used in Boardroom.”

### Orchestrations
- Sees: playbooks (inputs/outputs, cost/time signals).
- Does: launch into a target project; monitor run; publish proof to Boardroom.

### Automations (Invisible Engine)
- Sees: scheduled briefs, nudges, outreach queues, webhooks.
- Does: toggle automation, edit cadence, view delivery log.

### Integrations
- Sees: connected apps (CRM/Sheets/Drive/Slack/Email).
- Does: connect/test; scope access per project.

### Team & Permissions
- Sees: members, roles (owner/editor/viewer), SSO/2FA status.
- Does: invite, change role, revoke.

### Billing
- Sees: plan, usage, invoices, accelerators.
- Does: upgrade/downgrade, add seats, buy X-Ray/Proof Sprint.

### Inbox / Mentions
- Sees: @Boardroom summaries, @Review flags, committee pings.
- Does: reply inline, approve, route to phase.

---

## Project-only Buyer (Microsite)

### Solution Home (read-only Boardroom)
- Sees: KPIs, last shipment, what’s next, credibility notes.
- Does: export report, request changes, **Upgrade to Workspace** CTA.

### Reports & Exports
- Sees: latest PDFs/CSVs, schedule.
- Does: download, email to…, subscribe.

### Settings (Light)
- Does: logo/colors, custom domain (if upgraded), support contact.

---

## Interactions & guardrails
- **Stage gates:** can’t advance without required artifact + validator pass.
- **Entitlements:** tabs/features appear only if plan allows; microsites hide Build.
- **Mentions:** `@Boardroom` posts a summary card; `@Review` opens validation drawer.
- **Drawers vs pages:** committee work opens in a drawer; version/diff only in Artifacts tab.
- **Keyboard:** 1/2/3 tabs; ↑/↓ phases; Enter open; Cmd/Ctrl+K search.

---

## Inputs → Outputs (artifacts)
Inputs: role matrix, routes, entitlements.  
Outputs: `ux/routes.md`, `ux/tab-map.md`, `ux/empty-states.md`, `ux/shortcuts.md`.

---

## User stories
- As an owner, I see what needs my decision first.
- As an editor, I know exactly which artifacts block the gate and how to fix them.
- As a buyer, I can prove value via a read-only microsite and upgrade easily.
- As an admin, I can spot failures/cost spikes and drill down quickly.
- As legal, I see redlines before Ship.

---

## Acceptance criteria
- Boardroom/Build/Artifacts tabs exist for every project with consistent URLs.
- Gate button disabled until required artifacts validate; error list shows missing items.
- Mentions deliver to the right destination with links back.
- Artifacts tab supports open/diff/restore/export; versions are immutable.
- Workspace Home surfaces at least three actionable items or shows an empty state.
- Microsites are read-only; edits require upgrade.
- Keyboard shortcuts work across tabs/phases and are discoverable in Help.

---

## Metrics
Decision-to-approve time; gate-block rate; search success; microsite→upgrade conversion; % orchestrations that publish a proof; restore/diff usage.

---

## Risks / Open questions
Drawer overload → limit to one open drawer; provide “Open as page.”
Phase chat noise → collapse older messages; summarize to Boardroom.
Microsite privacy → watermark “Demo” for Uber Mode; enforce expiry.
Should Boardroom allow light edits to artifacts or always route to Build?
