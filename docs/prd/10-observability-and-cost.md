10-observability-and-cost.md

10 — Observability & Cost
Purpose

Make the system legible: see progress, failures, and spend in near-real time; catch regressions early; keep costs bounded per run and per tenant.

Scope

Events, metrics, dashboards, cost controls, alerts, run logs, sampling, data retention, and the Admin Overview requirements.

Out-of-scope

Vendor choice (BI/logs); long-term forecasting; detailed SLO math.

Events (emit from Coordinator/agents)

phase_entered, artifact_written, validation_failed, phase_advanced, publish_done, run_started, run_finished, run_failed, cap_hit (time/tokens/cost), user_override, impersonation_started/ended. Each event includes tenant_id, project_id, phase, role, run_id, artifact_path/version (if any), timestamps, token/cost deltas.

Metrics (minimum set)

Time-to-gate per phase; success rate per phase; retries per phase; validation failure rate; % runs needing human intervention; tokens and $ per run; daily cost per tenant; error rate per agent; queue latency; microsite conversion; demo completion (Uber Mode).

Dashboards

Admin Overview: today’s spend by model/tenant, last 10 failures (with phase/role), top stuck projects, caps approaching, token/$ trends 7/30 days. Tenant Overview (Owner): time-to-gate, recent ships, costs, proof completion rate. Project Overview: phase timeline, artifact version heatmap, open flags, next action.

Logs & traces

Run logs contain structured steps, prompts redacted of secrets, and external call summaries. Trace each agent call with duration, tokens in/out, cached vs live. Link from a failure in Admin Overview to the specific run trace and artifact snapshot.

Cost controls

Per-run caps (tokens, wall time, external charges) with graceful short-circuit to a partial artifact + summary. Per-tenant daily $ cap with block and Owner notification. Model routing may downgrade to cheaper models on retry (except Validator). Publisher never exceeds cap; if it would, it emits a “publish partial” with instructions.

Alerts

Owner: cap at 80%/100%, repeated validation failures, stalled phases > 48h, proof overdue. Admin: tenant cap breaches, model error spikes, webhook failures, sustained queue latency. Delivery: in-app banner + email; Slack optional per tenant.

Sampling & quality checks

Daily sample of proofs runs Validator in strict mode; if failure > threshold, freeze Publisher for affected playbooks and notify Admin. Periodic drift checks on Implementer outputs (length, structure) to catch model or prompt changes.

Data schema (observability)

runs: run_id, project_id, phase, role, status, started_at, finished_at, tokens_in/out, cost_usd, error, model, cached:boolean.
events: event_id, run_id, type, payload(json), created_at.
caps: tenant_id, date, daily_cap_usd, spent_usd, blocked:boolean.
failures: run_id, reason, artifact_ref, first_seen, count.
Optional: prompt_audit (redacted), trace_spans.

Retention & privacy

Keep high-cardinality traces 14–30 days; aggregate metrics 13 months. Redact secrets from prompts/logs; never store PII in events. Uber Mode logs exclude precise location; aggregate to city.

Admin Overview requirements

Filter by tenant/model/phase; quick actions: pause tenant, reopen phase, rerun last step, export CSV. Show “why blocked” with link to artifact errors. Display current caps and switches to raise caps (with reason and audit).

Inputs → Outputs (this shard)

Inputs: pipeline events, run results, cost data, entitlements. Outputs: event spec, metric list, dashboard requirements, cap policies, alert rules, redaction rules.

User stories

As an Admin, I want to see which tenants are burning spend and why. As an Owner, I want to know what’s blocking my project and how to fix it. As Support, I want a single link to the failed run with context. As Finance, I want hard caps and predictable spend.

Acceptance criteria

All listed events are emitted with required fields. Admin Overview shows spend today, last 10 failures, and caps; links drill to a run trace and the blocking artifact. Per-run and per-tenant caps enforce with friendly failures and notifications. Validator sampling can freeze Publisher for a playbook on quality regression. Logs contain no secrets/PII; retention windows enforced.

Metrics

MTTR for failed runs; % of phases advancing within target time; cost per successful advance; alert precision (true positives); cap intervention count; average queue latency.

Risks / Open questions

Over-alerting → tune thresholds and allow tenant-specific muting. Cost caps blocking legitimate workloads → provide one-click temporary raise (72h) with audit. Centralized logging cost blow-up → sample traces above a volume threshold. Should Owners see raw tokens, or only $ and time?
