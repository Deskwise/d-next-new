```markdown
# 05 — Artifacts Schema

## Purpose
Define the canonical, machine-checkable structure of every artifact so phases can advance safely.

## Scope
JSON frontmatter + Markdown body for five required artifacts:
- planning/initial.md
- planning/options.md
- proof/summary.md
- validation/report.md
- deploy/changelog.md

## Out-of-scope
- Rendering/templating
- Storage engine specifics
- Full-text search

---

## Conventions (applies to all artifacts)
- Frontmatter: first code block in the file is JSON (not YAML).
- Body: plain Markdown that may include tables/lists.
- Dates: ISO-8601 in UTC (e.g., 2025-08-28T17:00:00Z).
- Enums: use exact values listed below (validation is strict).
- Council notes: any artifact may append council_notes[].

Common optional fields (frontmatter):
~~~json
{ "version": 1, "created_by": "user_id", "updated_by": "user_id" }
~~~

---

## A) planning/initial.md (Executive Brief)

Frontmatter (required):
~~~json
{
  "title": "Dog Walking Site — Growth",
  "context": "Local service, low repeat usage, strong seasonality.",
  "core_question": "What is the fastest reversible path to +30% qualified bookings?",
  "success": "Booked jobs +30% in 60 days; CAC < $25.",
  "constraints": ["Budget <$5k", "No custom backend"],
  "council_notes": []
}
~~~

Rules:
- default ∈ {"A","B","C"} and must exist in options.
- Each option requires title, summary, ≥1 acceptance_criteria.
- Exactly 3 options.
- Body: short rationale for default + edge cases to watch.

---

## C) proof/summary.md (Before/After Snapshot)

Frontmatter (required):
~~~json
{
  "before": "Fragmented booking; no follow-ups.",
  "after": "Single-page flow with add-ons; SMS reminders.",
  "how": "Template + form → CRM → SMS",
  "owner": "name_or_id",
  "date": "2025-08-28T17:00:00Z",
  "metrics": {
    "baseline": { "bookings": 100 },
    "current":  { "bookings": 128 },
    "delta":    { "bookings": 28 },
    "methodology": "28-day cohort"
  },
  "assets": ["s3://proof/screenshot1.png"],
  "council_notes": []
}
~~~

Rules:
- owner, date required.
- If metrics.delta present, it must equal current − baseline.
- Body: annotated screenshots/links or a one-page data story.

---

## D) validation/report.md (QA & Compliance)

Frontmatter (required):
~~~json
{
  "citations": [
    { "claim": "Market size 200k", "url": "https://example.com",
      "accessed_at": "2025-08-26T12:00:00Z" }
  ],
  "date_checks": [
    { "entity": "Pricing", "as_of": "2025-08-20", "status": "ok" }
  ],
  "legal_flags": [
    { "type": "privacy", "severity": "medium",
      "note": "SMS consent language weak" }
  ],
  "matches_brief": true,
  "notes": "All acceptance criteria satisfied.",
  "reviewer": { "seat": "Legal & Compliance" },
  "council_notes": []
}
~~~

Enums:
- legal_flags[].severity ∈ {"low","medium","high"}
- date_checks[].status ∈ {"ok","stale","missing"}

Rules:
- matches_brief=true only if all required criteria met.
- Any high severity → block Ship.
- Body: concise justification; redlines if any.

---

## E) deploy/changelog.md (What Shipped)

Frontmatter (required):
~~~json
{
  "what": ["Launched single-page booking", "Enabled SMS reminders"],
  "when": "2025-09-01T09:00:00Z",
  "who": ["owner_id"],
  "reversible_steps": ["Toggle FLAG_BOOKING_V2 off", "Revert form schema v3→v2"],
  "next_action": { "owner": "owner_id", "due": "2025-09-08T17:00:00Z",
                   "description": "Cohort analysis + next upsell" },
  "links": ["https://deploy.example.com/run/123"],
  "impact": { "qual": "Cleaner flow", "quant": { "bookings": 0 } }
}
~~~

Rules:
- reversible_steps ≥ 1
- next_action.owner and next_action.due required
- Body: brief release notes; any rollout caveats

---

## Validation engine (common)
- Missing/invalid fields → ValidationError(field, rule, suggestion).
- Frontmatter must be valid JSON and first in the file.
- Body word counts enforced where specified.

---

## Inputs → Outputs (this shard)
Inputs: product requirements, legal/compliance needs, data contracts.  
Outputs: JSON schemas + example skeletons used by Planner/Validator.

---

## User stories
- As a Coordinator, I need strict schemas to block unsafe advances.
- As an Editor, I want clear errors so I can fix artifacts quickly.
- As Legal, I need a standard place for flags so approvals are auditable.

---

## Acceptance criteria
- All five artifacts validate end-to-end with sample data.
- Errors include field, rule, and suggestion.
- Review→Ship refused when any high-severity flag.

---

## Metrics
- Validation pass rate
- Average time to fix
- Missing-criteria frequency
- Legal flag distribution

---

## Risks / Open questions
- Do we ever allow a fourth option (D)?
- Images inline vs. linked?
- Size caps for proof assets?
```
