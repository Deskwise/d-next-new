# 04 — Orchestration Pipeline (AutoGen)

## Purpose
One orchestration to turn vague asks into artifacts, proof, and shippable automations with safety.

## Scope
Multi-agent flow (Coordinator, Planner, Implementer, Validator, Publisher).
Phase transitions (Think → Plan → Proof → Review → Ship).
Artifact-as-IPC (markdown/JSON), retries, cost caps, observability hooks.

## Out-of-scope
UI design, model provider selection details, billing internals.

## Roles (agents)
**Coordinator (ManagerAgent)** — owns state machine, reads/writes artifacts, decides next role.
**Planner** — elicits the “question behind the question”, drafts `planning/initial.md`; may request committees.
**Implementer** — produces proofs/flows/snippets, updates artifacts.
**Validator** — schema check, citation/date, policy/legal flags; blocks on failures; suggests fixes.
**Publisher** — bundles outputs (PDF/MD/site), updates `deploy/changelog.md`, triggers n8n/Flowise jobs.

## Committees (advisory sub-flows)
Seats: Market & Narrative; Product & Strategy; Data & Finance; Engineering & Ops; Legal & Compliance.
Coordinator invites relevant seats per phase; each returns a signed note appended to artifacts.

## State machine (happy path)
1. Think → Planner → write `planning/initial.md`.
2. Plan → Planner → write `planning/options.md` (A/B/C + **default** + acceptance criteria).
3. Proof → Implementer → write `proof/summary.md` (before/after, how, owner, date).
4. Review → Validator → write `validation/report.md` (citations/dates, legal flags, matches_brief).
5. Ship → Publisher → write `deploy/changelog.md` (what, reversible steps, next action).

## Guards (advance conditions)
A phase can advance only if the required artifact exists and passes schema + validator checks.
Validation failures produce actionable errors attached to the artifact and block advance.

## Parallelism
During Plan, Coordinator can run **committee consults in parallel**.
Each consult reads prior artifacts and writes a short note (max 120 words) back to `council_notes[]`.

## Artifact contracts (frontmatter)
All artifacts include JSON frontmatter then Markdown body.
Minimal fields defined in `05-artifacts-schema.md`.
Missing/invalid fields throw a **ValidationError** with field and suggestion.

## Retries & fallbacks
Planner/Implementer: up to 2 automatic retries with narrowed prompts.
Validator: 1 retry after auto-fix attempt when safe (e.g., missing acceptance criteria).
On consistent failure, Coordinator emits a *Needs Human* task with summary.

## Cost & time caps (per run)
Soft cap: token + wall-time budget per phase; Coordinator tracks and short-circuits with summary if exceeded.
Hard cap: per-tenant daily spend; refuse with graceful explanation and re-schedule.

## Inputs → Outputs (per phase)
Inputs: user ask, uploaded files (Excel/PDF), prior artifacts, committee notes, entitlements.
Outputs:
- Think: `planning/initial.md`
- Plan: `planning/options.md` (+ updated council_notes)
- Proof: `proof/summary.md` (+ assets if any)
- Review: `validation/report.md`
- Ship: `deploy/changelog.md`

## Error handling
All agent errors logged in `runs` with `phase`, `role`, `message`, `cost`, `duration`.
Recoverable → retry path; Unrecoverable → human task with the artifact snapshot.

## Observability hooks
Emit events: `phase_entered`, `artifact_written`, `validation_failed`, `phase_advanced`, `publish_done`.
Events include project_id, phase, version, cost metrics; sink to analytics and Admin Overview.

## Security & privacy rails
Legal & Compliance always consulted during Review if flags or redlines are present.
No PII leaves tenant boundary; demo data only for Uber Mode.

## User stories
- As a buyer, I want a proof before I commit, so I feel risk is controlled.
- As an editor, I want blocked gates to explain exactly what’s missing, so I can fix fast.
- As an admin, I want cost/time caps enforced automatically, so budgets don’t blow up.

## Acceptance criteria (Given/When/Then)
- Given a valid `planning/initial.md`, when Planner enters Plan, then `planning/options.md` is produced with A/B/C and a **default**.
- Given `planning/options.md` with a default, when Implementer runs, then `proof/summary.md` contains before/after and owner/date.
- Given `proof/summary.md`, when Validator runs, then `validation/report.md` includes citations/date checks; advance only if `matches_brief=true`.
- Given a validation failure, when Coordinator evaluates, then the phase remains and actionable errors are attached.
- Given Ship, when Publisher completes, then `deploy/changelog.md` records reversible steps and next action.

## Metrics
Time-to-gate per phase, validation failure rate, auto-retry success rate, cost per successful advance, percent of runs needing human intervention.

## Risks / Open questions
Over-automation can hide nuance → cap auto-fix scope; require human approval on major edits.
Committee sprawl → limit to 2–3 seats per phase by default.
Should Publisher auto-create a microsite for proofs, or require explicit toggle?
How to store large proof assets (images/videos) → signed object store with links in artifacts.
Model drift across updates → pin model versions per project or per artifact version?

## Implementation notes (non-normative)
Encode the state machine as a pure function (prev_state, inputs) → (next_state, actions).
Store artifacts in a versioned table; keep chat logs ephemeral, artifacts canonical.
Keep prompts short and refer to artifacts, not long conversation history.
Use deterministic temperature for Validator; allow higher creativity only in Implementer.
