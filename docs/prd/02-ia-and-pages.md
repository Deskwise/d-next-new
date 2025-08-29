# 02 — Information Architecture & Pages

## Purpose
Define the site/app structure so users always know where they are, what’s next, and how to act.

## Scope
Marketing site (public) and application (authenticated).
Navigation, routes, default landings, guardrails by role and plan.
Microsites for project-only buyers and Uber Mode demos.

## Out-of-scope
Visual design system; component inventory; pricing details.

## Marketing IA (public)
Primary nav: Home • ThinkWise • Invisible Engine • Orchestrations • Plans & Pricing • Proof • Book Friction X-Ray.
Header actions: Book Friction X-Ray (primary), Login.
Key pages: Home, ThinkWise, Invisible Engine, Orchestrations, Plans & Pricing, Proof, Book X-Ray.
Routes: / , /thinkwise , /engine , /orchestrations , /plans , /proof , /xray , /login , /legal/* , /privacy , /status.

## App IA (authenticated)
Global frame: project switcher • search • user menu.
Tabs per project: Boardroom • Build • Artifacts.
Workspace Home: “needs decision” queue, recent ships, projects list, start new project/X-Ray.
Other app pages: Orchestrations, Automations, Integrations, Team, Billing, Inbox.
Core routes:
/app (redirect by role),
/app/workspace,
/app/projects/:id/boardroom,
/app/projects/:id/build,
/app/projects/:id/artifacts,
/app/orchestrations,
/app/automations,
/app/integrations,
/app/team,
/app/billing,
/app/inbox.

## Microsites
Domain: *.solutions.deskwise.com.
Pages: / (Solution Home), /reports, /settings (light).
Behavior: read-only Boardroom, KPIs, last ship, exports, “Upgrade to Workspace” CTA.
Uber Mode: demo microsites expire in 72h unless converted.

## Role-based landings
Super Admin → /admin/overview.
Workspace Owner/Editor → /app/workspace.
Project-only Buyer → {microsite}/.

## Inputs → Outputs (artifacts)
Inputs: IA requirements, roles, entitlements, route list.
Outputs: routes.md, sitemap.xml, nav.json, empty-state copy checklist.

## User stories
As an owner, I land on my workspace and see what needs a decision.
As a buyer, I get a read-only microsite with proof and a clear upgrade path.
As an admin, I jump to any tenant or project from the overview.

## Acceptance criteria
Public nav and app tabs match the lists above, exactly.
All routes resolve with auth and plan entitlement checks.
Search returns projects, artifacts, and mentions with type groupings.
Stage gate buttons disabled until required artifacts exist and validate.

## Metrics
Click-through to Book X-Ray; tab usage; search success without reformulation; 404 rate.

## Risks / Open questions
Do we need segment-specific nav labels?
Should microsites optionally support custom domains post-conversion?
