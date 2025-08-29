08-orchestrations-library.md

08 — Orchestrations Library
Purpose

Offer one-click, proof-oriented playbooks that turn common pains into visible progress fast, each returning a proof artifact and a next action.

Scope

Card catalog, inputs, outputs, minimal configuration, runtime guardrails, and what each playbook must publish to Boardroom. Aligned with entitlements (orchestrations/mo).

Out-of-scope

Custom consulting engagements; deep analytics builds; long-running pipelines.

Catalog (v1)

Campaign Lift-Off — spin a compelling angle and assets in hours, not weeks.

Lead Finder & Enricher — build a qualified list and draft outreach.

Numbers → Story — translate CSV/Excel into a one-page story and a single lever.

PDF → Decision — pull decisions and redlines from long docs.

Morning Ops Brief — deliver a daily “what matters” executive brief.

SOP in an Afternoon — turn tribal steps into a standard + checklist.

Market X-Ray (educational) — synthesize market/news to Proceed / Paper Test / Pause.

Playbook contract (common)

Inputs: minimal form + optional file(s).
Process: Planner → Implementer → Validator (light) → Publisher.
Outputs: required proof in proof/summary.md + any supporting assets; Boardroom card with default next step.
Timebox: returns a usable proof in ≤ 48h (Proof Sprint) or flags blockers.
Cost: soft cap per run; Coordinator halts early with a partial proof if exceeded.
Visibility: Boardroom shows status and the default option; Artifacts tab stores full outputs.

1) Campaign Lift-Off

Inputs: brand, audience, offer, goal (e.g., leads), channels to include/exclude, tone.
Outputs: narrative angle, 10 hooks, 3 creative directions, channel-by-channel plan, 1-week calendar, 5 ad/post drafts, 1 landing outline.
Boardroom: angle + “Start with this” draft; CTA = approve or tweak.
Success checks: unique angle (no generic claims), channel fit, compliance flags.
Risks: over-personalization without data → prefer archetypes unless CRM connected.

2) Lead Finder & Enricher

Inputs: ICP (firmographics + roles), sources (LinkedIn, web), email domain rules, outreach channel.
Outputs: CSV with 100–300 leads (tenant limits apply), enrichment (title, company, site), 10 personalized draft emails/DMs.
Boardroom: sample of 10 leads + 3 drafts; CTA = approve source + send test batch.
Success checks: dedupe, bounce risk estimate, opt-out language.
Risks: scraping constraints → respect robots, rate-limits, and legal flags.

3) Numbers → Story

Inputs: CSV/Excel; metric to optimize; business question.
Outputs: 3 charts, a one-page story (before/after), and a single lever recommendation; notebook link for reproducibility.
Boardroom: headline insight + lever; CTA = try lever for 7 days.
Success checks: date freshness, sanity checks (outliers, missingness), footnotes.
Risks: misread causality → label inference vs correlation.

4) PDF → Decision

Inputs: 1–3 PDFs; question (“What should we do?”).
Outputs: decision table (options, risks, costs), extracted clauses, redlines; validation/report.md with citations and date checks.
Boardroom: decision table + recommended default; CTA = adopt default or request counsel.
Success checks: citation coverage > 90%, stale dates flagged.
Risks: legal nuance → always route through Legal in Review.

5) Morning Ops Brief

Inputs: sources (dashboards, tickets, revenue, CS), thresholds.
Outputs: daily one-pager with top 5 signals, risks, and recommended actions; schedule set in Automations.
Boardroom: today’s brief + trend vs 7-day.
Success checks: on-time delivery, alert noise below threshold.
Risks: alert fatigue → cap to 5 items; require opt-in per source.

6) SOP in an Afternoon

Inputs: rough steps (voice or text), owner, target role, tools.
Outputs: clean SOP with roles, triggers, checklists, pitfalls, and a rehearsal task; optional Loom outline.
Boardroom: ready-to-ship SOP + checklist; CTA = assign and rehearse.
Success checks: runnable without the author; rollback note included.
Risks: tool variance → include alternative paths.

7) Market X-Ray (educational)

Inputs: symbols/segments, horizon (e.g., 30–90 days), news sources.
Outputs: Proceed / Paper Test / Pause, with a rationale, opposing view, and a checklist to validate; explicit educational disclaimer.
Boardroom: stance card + checklist; CTA = run paper test.
Success checks: date stamps, multiple sources, no financial advice language.
Risks: users mistake for signals → watermark “Educational”.

UX behaviors

Each playbook is a card with inputs, “what you’ll get,” time/cost signals, and a proof badge (Ready / In progress / Needs input). On launch, user chooses target project; progress appears in Boardroom and Inbox. Failed runs surface “Needs input” with a short form.

Guardrails & limits

Respect orchestrations_per_month entitlement; block with friendly upsell when exhausted. Rate-limit external calls; cache source docs. Validator runs a light pass (citations/date) where applicable; Legal seat mandatory for PDF → Decision and any flagged claims.

Inputs → Outputs (this shard)

Inputs: list of v1 playbooks, acceptance rules, entitlement limits.
Outputs: a JSON/YAML spec per playbook (inputs schema, outputs, validators, cost caps), card copy for the UI, Boardroom summary templates.

User stories

As an Owner, I want to launch a playbook and see a proof fast.
As an Editor, I want minimal forms and clear defaults.
As Legal, I need flagged items routed to me automatically.
As Finance, I want cost caps so experiments don’t explode spend.

Acceptance criteria

Each playbook returns a proof artifact to Boardroom in ≤ 48h or surfaces a blocker with next steps. Inputs are ≤ 6 fields; safe defaults exist. Entitlement limits enforced server-side. Legal is always included where required. Boardroom cards include a default next action.

Metrics

Launch → proof completion rate; median time to proof; percent blocked; cost per proof; re-use rate; approval rate from Boardroom.

Risks / Open questions

Overlapping outputs between playbooks → de-duplicate via shared components. Too many knobs → hide advanced settings by default. Do we allow custom playbooks per tenant now or post-MVP? Should we add “Campaign Refresh” as a smaller sibling to Lift-Off?
