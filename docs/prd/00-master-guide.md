00-master-guide.md

00 — Master Guide (ThinkWise)
Purpose

Define the common language, rules, and guardrails so every project moves from idea → proof → shipped with speed, safety, and clarity.

Scope

Glossary, phases (Think → Plan → Proof → Review → Ship), required artifacts, roles (Coordinator, Planner, Implementer, Validator, Publisher), committees, writing rules, gates, quality bars, caps, and observability hooks.

Out-of-scope

Visual design, provider choice, low-level schema DDL, pricing specifics.

Glossary

ThinkWise — our end-to-end process that listens, diagnoses, proves, automates, scales.
Artifacts — versioned Markdown files with JSON frontmatter; the single source of truth.
Stage gate — a machine-checkable condition that must pass for the phase to advance.
Coordinator — the state machine that selects roles, enforces gates, and writes events.
Committees — five advisory seats (Market, Product, Data, Eng, Legal) that add short signed notes.
Microsite — read-only, shareable snapshot of a project’s Boardroom and proofs.
Proof Sprint — a time-boxed run that must return a usable proof/summary.md or surface a blocker.

Phases and required artifacts (gates)

Think → planning/initial.md (Executive Brief).
Plan → planning/options.md (A/B/C, default, acceptance criteria).
Proof → proof/summary.md (before/after, how, owner, date, assets).
Review → validation/report.md (citations, date checks, legal flags, matches_brief).
Ship → deploy/changelog.md (what shipped, reversible steps, next action).
A phase can only advance if its required artifact exists and validates against schema.

Roles (agents)

Coordinator — owns the state machine, checks caps, records runs/events.
Planner — uncovers the question behind the question; drafts Executive Brief and Options.
Implementer — produces proofs, flows, or small shippable changes.
Validator — enforces schema, checks claims and dates, applies redaction rules; blocks unsafe moves.
Publisher — compiles PDFs/MD/microsites, updates changelog, triggers automations.

Committees (how they participate)

Seats: Market & Narrative; Product & Strategy; Data & Finance; Engineering & Ops; Legal & Compliance.
Default invites by phase:
Think → Market, Product (optional Data).
Plan → Market, Product, Data.
Proof → Engineering, Data (optional Market).
Review → Legal (mandatory), Data (mandatory).
Ship → Engineering (rollback safety), Legal if prior flags existed.
Each seat returns a signed note (≤ 120 words) with stance: approve, question, or flag. Flags block advance unless Owner overrides with reason (logged).

Artifact conventions

Frontmatter is JSON in the first fenced block; the body is Markdown.
Dates are ISO-8601 UTC.
All artifacts accept an array council_notes[] for committee entries.
See “05 — Artifacts Schema” for exact fields and validation.

Writing rules (for human clarity)

Aim for a one-page brief (≈ 400–600 words) per artifact, plus bullets.
Options must include a recommended default and testable acceptance criteria.
Avoid chatty tone; write for an executive who will skim.
Reference artifacts, not conversation history.

Gate mechanics

Validation happens before a phase can advance.
Missing or invalid fields trigger a ValidationError with field, rule, and suggestion.
Legal high-severity flags block Ship.
Owners can override a blocking flag only in Boardroom with a mandatory reason; overrides appear in the changelog.

Quality bars

Executive Brief states the core question, constraints, and success measure.
Options present three viable paths; the default is safe and reversible.
Proof explains before/after and how we got there, with a single lever highlighted.
Validation cites sources, dates, and redaction when sharing externally.
Changelog lists reversible steps and the next action owner/date.

Cost and time caps

Per-run caps on tokens, wall-time, and external spend; Coordinator short-circuits to a partial artifact with summary if exceeded.
Per-tenant daily spend cap with friendly failures and Owner notifications.
Retries are limited (Planner/Implementer up to 2; Validator 1 with safe auto-fixes).

Observability hooks (what we emit)

Events: phase_entered, artifact_written, validation_failed, phase_advanced, publish_done, run_started, run_finished, run_failed, cap_hit, user_override, impersonation_started/ended.
Runs table records phase, role, timing, model, tokens, cost, status, and error summaries.
Admin Overview shows spend today, last 10 failures, stuck projects, and caps.

Security and privacy anchors

Tenant isolation via RLS; server-enforced entitlements control feature visibility.
Microsites are read-only with short-lived tokens and redacted frontmatter by default.
Uber Mode uses synthetic data and persistent watermarks (“Demo”).
No secrets in artifacts; files use signed URLs.

Inputs → Outputs (this shard)

Inputs: company narrative, product constraints, legal requirements.
Outputs: the authoritative rules that other shards reference (phases, roles, gates, writing standards, caps, events).

User stories

As an Owner, I want predictable progress with reversible steps so I can decide quickly.
As an Editor, I want clear checklists and errors so I can fix what blocks the gate.
As Legal, I want a hard stop on risky language with a clear override path.
As an Admin, I want visibility into cost and failures across tenants.

Acceptance criteria

All five phases have one required artifact each, validated against schema.
Committee notes append to artifacts and display in Boardroom; flags block advance.
Gate violations explain exactly what’s missing (field, rule, suggestion).
Overrides require Owner reason and appear in the changelog.
Cost/time caps enforce gracefully with partial outputs and notifications.
Events and runs are emitted for every action; Admin Overview can drill into a failed run and open the blocking artifact.

Metrics

Time-to-gate per phase, validation failure rate, override rate, cost per successful advance, percentage of runs needing human intervention, and microsite conversion when proofs are shared.

Risks / Open questions

Process rigidity vs speed — allow temporary “fast path” that still writes minimal artifacts.
Committee sprawl — cap default invites to 2–3 seats per phase; allow Owner to expand.
Model drift — pin model versions per project or artifact; monitor Validator failure spikes.
Microsite privacy — ensure redaction is correct and watermarks are always visible.
