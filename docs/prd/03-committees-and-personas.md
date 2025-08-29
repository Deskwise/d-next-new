03-committees-and-personas.md

03 — Committees & Personas
Purpose

Create a small, credible “virtual council” that pressure-tests plans and proofs from different angles (market, product, data, engineering, legal) without slowing momentum.

Scope

Five seats, their responsibilities, how they’re invoked per phase, what they must output, SLAs, and versioning so projects stay consistent even as personas evolve.

Out-of-scope

Hiring real consultants; full prompt libraries; UI visuals (covered in UX flows).

Seats (5) — responsibilities

Market & Narrative — audience, positioning, offer clarity, social proof.

Product & Strategy — scope, trade-offs, sequencing, success definition.

Data & Finance — metrics, baselines, deltas, ROI math, risk sizing.

Engineering & Ops — feasibility, complexity, rollout/rollback, reliability.

Legal & Compliance — privacy, consent, licensing, claims, industry rules.

Persona blueprint (fields)

id; display_name; seat (one of the five above); voice/tone; goals; redlines (things they never allow); risk_appetite (low/med/high); tools_allowed[]; templates[]; citation_style; jurisdiction (for Legal); version (v1, v2…).

Committee charter (how they work)

Planner/Validator invites specific seats per phase. Each invite yields a short signed note (≤ 120 words) that must add either a greenlight, a red flag, or a crisp question. Notes append to the artifact’s council_notes[] with: seat, version, stance (approve/flag/question), body, and optional links. Committees never overwrite artifacts; they annotate and request changes.

When each seat is consulted (defaults)

Think: Market, Product (optional Data). Plan: Market, Product, Data. Proof: Engineering, Data (optional Market). Review: Legal (mandatory), Data (mandatory). Ship: Engineering (rollback safety), Legal (if any redlines present earlier). Defaults can be overridden by Coordinator if the brief demands.

SLAs (time limits)

Think and Plan notes due within 60–120 seconds in app; Review (Legal) within 90–180 seconds; Ship checks within 60 seconds. If a seat times out, Coordinator records “no response” and proceeds unless that seat is mandatory for the phase (e.g., Legal in Review).

Stances & effects

Approve → no block. Question → does not block but adds a task to the phase checklist. Flag → blocks advance until addressed or overridden by Owner with reason (captured in artifact metadata).

Quality bar (what a good note looks like)

Cites a single lever or risk; is falsifiable (“Accept if abandonment < 35%”); references the artifact (not chat); includes a next step if blocking.

Escalation & overrides

Owners can override a blocking flag only in Boardroom with a required reason. Overrides tag the note with overridden_by, reason, and timestamp, and appear in changelog.

Versioning rules

Personas are versioned (v1…); projects pin persona versions at creation. Updating a persona to v2 does not affect existing projects unless explicitly “migrated,” which creates a new council note acknowledging the persona shift.

Governance (who edits personas)

Super Admin edits global personas and seat charters; Workspace Owners can clone personas into workspace-local variants; Editors cannot change personas, only request clarifications via comments.

Inputs → Outputs (artifacts)

Inputs: active phase artifact(s), brief, persona versions, project context (industry, jurisdiction). Outputs: council_notes[] entries appended to the current artifact; each note is machine-readable and human-clear; optional required_change checklist items for Build.

User stories

As a Planner, I want fast, specific counsel so I can set a safe default option. As a Validator, I want Legal/Data to check claims and dates so I can pass Review confidently. As an Owner, I want to see where disagreement sits (by seat) so I can decide quickly. As Legal, I want a single place to add redlines that block Ship until addressed.

Acceptance criteria

Inviting the default seats for a phase produces at least two signed notes within the SLA. Any note with stance=flag blocks the phase and lists an actionable fix. Legal is mandatory in Review; absence or flag prevents advance. Overriding a flag requires an Owner reason and is logged in deploy/changelog.md on Ship. Council notes appear in Boardroom and under the artifact they reference.

Metrics

Coverage rate (notes/phase), time-to-note, percent flags vs questions vs approves, override rate, “note helpfulness” (thumbs-up), and downstream rework after ignored questions.

Risks / Open questions

Persona drift (voice shifts over time) → pin versions per project and surface version in notes. Committee sprawl (too many invites) → default to 2–3 seats per phase, cap at 3 unless Owner expands. Legal bottlenecks → pre-bake common redlines; allow workspace-local legal variants. Jurisdiction complexity → tag projects with region; select legal templates accordingly. Should we allow cross-seat replies (e.g., Eng answering Data) or keep notes atomic to avoid debate?
