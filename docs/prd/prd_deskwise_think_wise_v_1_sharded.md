# PRD — Deskwise (ThinkWise) v1 — Sharded

> **Scope:** Landing + logged‑in app for Deskwise with multi‑tenant workspaces, ThinkWise pipeline, Invisible Engine automations, and **Uber Mode** (in‑car demo + dynamic microsite continuation).
>
> **Principle:** *Remove their ghost work. Install our background crew.* Proof first; reversible steps.

---

## Index of Shards
- **00‑master‑guide.md** — Canon, glossary, writing rules, stage gates
- **01‑positioning.md** — Narrative, promises, taglines
- **02‑ia‑and‑pages.md** — Site & app information architecture
- **03‑committees‑and‑personas.md** — 5 seats + committee charters
- **04‑orchestration‑pipeline.md** — AutoGen roles, transitions, gates
- **05‑artifacts‑schema.md** — Markdown/JSON specs and filenames
- **06‑data‑and‑tenancy.md** — Users, tenants, projects, RLS, runs
- **07‑entitlements‑and‑billing.md** — Stripe → features
- **08‑orchestrations‑library.md** — Campaigns, Leads, Numbers→Story, PDF→Decision, Ops Brief, SOP, Market X‑Ray
- **09‑security‑privacy‑legal.md** — Data handling, disclaimers
- **10‑observability‑and‑cost.md** — Metrics, caps, logs
- **11‑frontend‑ux‑flows.md** — Role‑based pages & behaviors
- **12‑uber‑mode.md** — Richard’s in‑car demo, tablet pairing, dynamic continuation

> Each shard follows the same template: **Purpose, Scope, Out‑of‑scope, Inputs→Outputs (artifacts), User stories, Acceptance criteria, Metrics, Risks/Open questions.**

---

## 00‑master‑guide.md
**Purpose**  
One canonical definition for how Deskwise ships value: vocabulary, stage gates, artifacts, writing rules.

**Glossary**  
- **ThinkWise**: the overall process (Listen→Diagnose→Prove→Automate→Scale).  
- **Committees**: ad‑hoc councils that advise Planner/Validator (seats below).  
- **Artifacts**: structured Markdown/JSON hand‑offs stored per project with versioning.  
- **Stage gate**: condition to advance a phase; machine‑checkable.

**Stage Gates (phases & required artifacts)**  
- **Think** → `planning/initial.md` *(Executive Brief)*
- **Plan** → `planning/options.md` *(3 options + default + acceptance criteria)*
- **Proof** → `proof/summary.md` *(before/after + who/what/when)*
- **Review** → `validation/report.md` *(citations/date, legal flags, compliance to brief)*
- **Ship** → `deploy/changelog.md` *(what shipped; reversible steps; next action)*

**Writing Rules**  
- 1‑page brief limit (≈ 400–600 words) + bullets.  
- Options must include a **recommended default** and **acceptance criteria**.  
- Every artifact has: title, purpose, inputs, decision(s), next action.

**Acceptance Criteria**  
- Each artifact validates against its schema (see 05).  
- Phase cannot advance without required artifact present and valid.  
- Rollback restores prior artifact version + flips phase back.

---

## 01‑positioning.md
**Thesis**  
Two kinds of ghost work: we **remove** theirs (drag) and **install** ours (engine). From **Busy to Big**.

**Promises**  
- Immediate relief: hours back in week one.  
- Enablement: one person performs like an elite team.  
- Proof first, risk off: reversible next steps.  
- Drafts, not surprises.

**Taglines**  
From Busy to Big • Remove the ghost work. Install the background crew. • Compete like a top team—without hiring one.

**Acceptance Criteria**  
- Messaging appears verbatim on Home hero + Boardroom empty states.  
- CTA: **Book Friction X‑Ray** present in hero and nav (primary).

---

## 02‑ia‑and‑pages.md
**Purpose**  
Define the top‑level information architecture for marketing + app.

**Primary nav**  
Home • **ThinkWise** • Invisible Engine • Orchestrations • Plans & Pricing • Proof • Book Friction X‑Ray

**App tabs**  
**Boardroom** (exec) • **Build** (phases + committees) • **Artifacts** (versions/diff)

**Acceptance Criteria**  
- Marketing ↔ App have separate subdomains (`www` / `app`).  
- Role‑based landing after login (see 11).  
- Global search accesses projects, artifacts, mentions.

---

## 03‑committees‑and‑personas.md
**Seats (5)**  
1) Market & Narrative  
2) Product & Strategy  
3) Data & Finance  
4) Engineering & Ops  
5) Legal & Compliance

**Committee Charter**  
- **Planner** invites 2–3 seats for Think/Plan; **Validator** invites Legal + Data for Review.  
- Each seat returns a signed note appended to artifacts.

**Config (example)**  
`persona_id, tone, goals, risk_appetite, tools_allowed[], templates[]`

**Acceptance Criteria**  
- Council notes appear on Boardroom and in artifact metadata.  
- Personas versionable (v1…); old projects pin their version.

---

## 04‑orchestration‑pipeline.md
**Purpose**  
Map AutoGen multi‑agent flow with artifacts as IPC.

**Roles**  
- **Coordinator** (ManagerAgent) — selects next role, checks gates, reads/writes artifacts.  
- **Planner** — builds `planning/initial.md` + triggers parallel planning (Prompts/Tools/Deps) if needed.  
- **Implementer** — drafts proof or automation spec.  
- **Validator** — runs schema checks, citation/date, policy flags; may loop Implementer.  
- **Publisher** — compiles PDF/MD/site; updates `deploy/changelog.md`; triggers n8n.

**Transitions**  
`Think → Plan → Proof → Review → Ship` (advance only if required artifact present + valid).  
Retries capped; cost caps enforced (see 10).

**Acceptance Criteria**  
- Each step writes an artifact row; status transitions recorded in `runs`.  
- Validation failures block phase and attach actionable errors.

---

## 05‑artifacts‑schema.md
**Files & minimal fields**  
- `planning/initial.md`: `title, context, core_question, success, constraints, council_notes[]`
- `planning/options.md`: `options[A|B|C], default, acceptance_criteria, risks`
- `proof/summary.md`: `before, after, how, owner, date`
- `validation/report.md`: `citations[], date_checks[], legal_flags[], matches_brief:boolean, notes`
- `deploy/changelog.md`: `what, when, who, reversible_steps, next_action`

**Acceptance Criteria**  
- JSON‑frontmatter + Markdown body passes schema validation.  
- Versioning: every save increments `version`; diff view available.

---

## 06‑data‑and‑tenancy.md
**Entities**  
`users, tenants, memberships(user_id, tenant_id, role), projects(tenant_id,…), artifacts(tenant_id, project_id, role, path, content, version), runs(project_id, stage, status,…), entitlements(tenant_id, key, value), sites(project_id, domain, status)`

**RLS**  
Row‑level security by `tenant_id`. Project‑only buyers access `sites` + read‑only artifacts.

**Acceptance Criteria**  
- Super Admin can impersonate with audit reason.  
- Deleting a tenant tombstones, does not hard‑delete artifacts.

---

## 07‑entitlements‑and‑billing.md
**Stripe → App mapping**  
- Momentum **Core/Growth/Scale** → seats, orchestrations/mo, ThinkWise on/off, microsites.  
- Accelerators: **Friction X‑Ray**, **Proof Sprint** (one‑time).

**Acceptance Criteria**  
- Webhook creates/updates **entitlements**; UI reacts immediately.  
- Proration on upgrades; safe downgrade (no data loss).

---

## 08‑orchestrations‑library.md
**Playbooks (cards with inputs/outputs)**  
- **Campaign Lift‑Off** — input: topic/brand; output: angle + assets + calendar.  
- **Lead Finder & Enricher** — input: ICP; output: qualified list + 10 drafts.  
- **Numbers → Story** — input: CSV/Excel; output: 3 charts + one lever.  
- **PDF → Decision** — input: PDF; output: decision table + redlines.  
- **Morning Ops Brief** — input: sources; output: 1‑page brief daily.  
- **SOP in an Afternoon** — input: tribal steps; output: standard+checklist.  
- **Market X‑Ray (educational)** — input: symbols/news; output: Proceed/Paper Test/Pause.

**Acceptance Criteria**  
- Each playbook returns a **proof artifact** in ≤ 48h for Proof Sprint.

---

## 09‑security‑privacy‑legal.md
**Data**  
Encrypted at rest; least privilege; signed URL access to artifacts.  
**Disclaimers**  
Market X‑Ray = educational; legal/compliance notes flagged for counsel; NDA available.

**Acceptance Criteria**  
- Redline keywords trigger Review step; cannot Ship without clearance toggle.

---

## 10‑observability‑and‑cost.md
**Metrics**  
- Time‑to‑gate, artifact count, validation failures, model cost/run, success rate.  
**Caps**  
Per‑tenant daily spend; per‑run token & time cap; graceful abort with summary.

**Acceptance Criteria**  
- Admin Overview shows live spend & last 10 failures; export CSV.

---

## 11‑frontend‑ux‑flows.md
**Roles**  
- **Super Admin** — Admin Overview, Tenants, Project Inspector, Audit, Templates, System.  
- **Workspace Owner/Editor** — Workspace Home, Project (Boardroom/Build/Artifacts), Orchestrations, Automations, Integrations, Team, Billing, Inbox.  
- **Project‑only Buyer** — Solution Home (read‑only Boardroom), Reports & Exports, Light Settings.

**Behaviors**  
- Tabs: **Boardroom / Build / Artifacts**.  
- Build: left **phase stepper**, committees under active phase, phase chat, right panel shows **required artifacts only**.  
- Mentions route summaries (`@Boardroom`, `@Review`).  
- Stage gate button disabled until required artifacts exist & valid.

**Acceptance Criteria**  
- Keyboard shortcuts: `1/2/3` switch tabs; `↑/↓` phases.  
- Read‑only microsite hides Build tab; exposes Reports.

---

## 12‑uber‑mode.md (Richard)
**Purpose**  
Run an in‑car **ThinkWise demo** as an Uber driver, pair a passenger tablet via QR, showcase agent orchestration, and spawn a dynamic microsite that continues the build post‑ride.

**Scope**  
Driver phone (Richard), car tablet (passenger), cloud services, generated microsite.

**Flow**  
1) **Uber Mode login**: Richard switches to *Uber Mode* from his profile.  
2) **Pre‑ride prep**: selects a demo project template (e.g., “Local Service Lead Gen”).  
3) **Tablet pairing**: car tablet opens `demo.deskwise.com/pair`; displays QR. Richard taps *Pair* → QR includes session id + read‑only token.  
4) **Live demo**: Richard speaks; **TTS** (ElevenLabs) replies over car audio; passenger tablet shows stages (Think→Plan→Proof) with animated badges.  
5) **Committee show**: short bursts from 2–3 personas appear (“Marketing says… Data says…”).  
6) **QR hand‑off**: passenger scans *Continue Build* QR → generates a **microsite** with the demo’s artifacts + a 60‑sec Executive Summary and a “Book X‑Ray” CTA.  
7) **Post‑ride**: if passenger leaves email, the microsite upgrades to a **trial workspace**; otherwise it persists for 72h with anonymous id.

**Inputs → Outputs (artifacts)**  
- Inputs: voice prompt(s), optional passenger notes.  
- Outputs: `planning/initial.md`, `planning/options.md` (lightweight), `proof/summary.md` (stub).

**Acceptance Criteria**  
- Pairing: QR scan links tablet in < 5s; reconnect on network blip.  
- Latency: voice->response < 2.5s median (canned prompts allowed).  
- Safety: demo content **never** exposes private tenant data.  
- Microsite: URL with session id + vanity slug; expires in 72h or converts on signup.  
- One‑tap **Book X‑Ray** sends calendar link and moves artifacts into a real project on signup.

**Metrics**  
Pairing success rate; demo completion rate; QR conversions → microsite visits → signups; time‑to‑X‑Ray booking.

**Risks / Controls**  
- Privacy: use demo data only; watermark “Demo.”  
- Motion sickness risk: subtle animations only.  
- Connectivity: cache demo artifacts offline; queue events for sync.

**Open Questions**  
- Voice wake word or tap‑to‑talk?  
- Allow passenger text input on tablet during ride?  
- Require explicit consent to email summary?

---

### TEMPLATE.md (for any future shard)
**Purpose**  
**Scope**  
**Out‑of‑scope**  
**Inputs → Outputs (artifacts)**  
**User stories** (As a … I want … so that …)  
**Acceptance criteria** (Given/When/Then bullets)  
**Metrics**  
**Risks / Open questions**

---

### Final notes
- This PRD is intentionally **artifact‑first**. Design can iterate around these contracts without changing the core.
- If you want, we can wire this into Git as real shard files next and add issue templates per shard.

