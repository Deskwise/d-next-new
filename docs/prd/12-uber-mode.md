12 — Uber Mode (Richard)

Purpose

Run an in-car ThinkWise demo as an Uber driver, pair a passenger tablet via QR, showcase agent orchestration, and spawn a dynamic microsite that continues the build post-ride.

Scope

Driver phone (Richard), passenger-facing tablet, cloud orchestration (AutoGen), dynamic microsite. Focus on demo reliability, low latency, and privacy.

Out-of-scope

Actual Uber app integration; payment capture in-car; non-demo projects.

Personas

Richard (driver/demo host); Passenger (prospect, exec/owner); System (Deskwise backend).

Hardware / Setup

Android phone (driver) signed into Deskwise; passenger tablet on mount facing back seat; car audio via BT; hotspot fallback; QR shown on tablet.

Flow

Uber Mode toggle: Richard switches profile to Uber Mode; selects demo template (e.g., “Local Service Lead Gen”).

Pair tablet: tablet opens demo.deskwise.com/pair and shows a rotating QR; phone taps “Pair this tablet” → QR includes session_id, tenant=demo, role=viewer, exp=5m.

Greet & consent: one-tap “Start demo” reads aloud consent: “This is a live demo using synthetic data. OK to proceed?” Tablet shows Yes/No; No ends gracefully.

Think (60s): Richard asks a natural question (“How could a dog-walking biz grow 30% this quarter?”). TTS replies; tablet shows Think card filling in.

Plan (60–120s): committees flash short notes (Marketing, Data, Eng). Options A/B/C appear; Default is highlighted with acceptance criteria.

Proof (60s): quick before/after mock (screenshot, chart); tablet shows “What changed” bullets.

Hand-off: tablet displays a big “Continue this for me” QR; passenger scans to claim a microsite with artifacts and a 60-sec executive summary.

After ride: if passenger enters email, microsite converts into a trial workspace; else it expires in 72h (anonymous id).

Tablet pairing & QR spec

QR payload (JWT or JSON): { session_id, tenant: “demo”, role: “viewer”, exp, nonce }. Valid 5 minutes, single use. Tablet polls with backoff; reconnection allowed with same session_id if within 30 minutes. Show a subtle pairing toast on both devices.

Live demo behaviors

Animated stage badges; minimal motion (Lenis/Motion.dev); no distracting loops. Committees speak in 1-liners (≤ 15 words). If network degrades, fallback to pre-cached artifacts and show “live” badge muted.

Voice UX

Wake via tap; press-to-talk preferred to avoid false triggers. Latency target: speech end → first token < 2.5s median. TTS volume ducking on navigation prompts. Quick-repeat button on tablet (“Say that again”).

Inputs → Outputs (artifacts)

Inputs: voice transcript, selected demo template, optional passenger note.
Outputs: planning/initial.md, planning/options.md (light), proof/summary.md (stub), plus a microsite seeded with these artifacts and a booking CTA.

Safety / Privacy

Demo data only; watermark “Demo” on tablet and microsite. No personal data logged from passengers unless they opt in on the microsite. Logs exclude location except city.

Failure modes & graceful degradation

Tablet lost BT/Wi-Fi → keep rendering last known artifact; attempt reconnect silently. TTS fail → switch to on-screen captions. Orchestration error → show “We hit a snag—here’s a canned proof” and use cached proof/summary.md. Pairing fail → show manual short URL.

Metrics

Pairing success rate; demo completion rate; median voice latency; QR scan → microsite visit → signup conversion; time-to-X-Ray booking; demo NPS (1-tap).

Acceptance criteria

Given Uber Mode on, when tablet is paired, then the tablet mirrors stage progress within 500ms. Given consent “Yes,” when Richard asks a question, then Think and Plan artifacts render with committees in under 90 seconds total. Given Proof is shown, when QR is scanned, then a microsite is provisioned with the three artifacts and a 60-sec summary. Given no email, when 72h elapse, then the microsite is expired and shows a polite expiry page with a booking link.

Risks / Open questions

Motion sickness risk → keep zoom under 10px and disable parallax. Privacy optics → show “Demo / Synthetic Data” badge at all times. Should we allow passenger text input on the tablet during the ride? Should the microsite allow commenting before signup?
