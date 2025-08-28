# Repository Guidelines

## Project Structure & Module Organization
- Proposed layout:
  - `src/` application code (by feature: `feature-name/`).
  - `public/` static assets: `images/`, `fonts/`, `icons/`, `styles/`.
  - `tests/` unit/integration; mirrors `src/`.
  - `scripts/` dev/build utilities; `docs/` architecture/ADRs; `.github/` CI and templates.
- Naming: folders/files in kebab-case; variables camelCase; components/types PascalCase.

## Build, Test, and Development Commands
- Until the stack is chosen, standardize entry points:
  - `make dev` → start local dev server.
  - `make build` → production build to `dist/`.
  - `make test` → run tests with coverage.
- If using npm, add: `npm run dev`, `npm run build`, `npm test`.
- Static prototypes: `python3 -m http.server 8000` (open `http://localhost:8000`).

## Coding Style & Naming Conventions
- 2-space indent, UTF-8, LF endings. Add `.editorconfig` to keep IDEs consistent across IDEs.
- Auto-format: Prettier (print width 100). Add language linters (ESLint/TypeScript or Ruff/Black for Python).
- Filenames: kebab-case; env files as `.env.local` and excluded from VCS.

## Testing Guidelines
- Framework TBD (Vitest/Jest or Pytest). Mirror `src/` in `tests/`.
- Test files: `*.spec.*` for unit; `*.e2e.*` for end-to-end.
- Target ≥80% line coverage; avoid network/file I/O in unit tests.

## Commit & Pull Request Guidelines
- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
- PRs include: summary, linked issues, touched paths (`src/...`, `tests/...`), screenshots for UI, and a checklist (tests pass, docs updated).

## IDE & Setup Tips
- Multiple IDEs are fine—enable “format on save” and linter integration.
- Share settings via `.editorconfig`; keep editor-specific configs in VCS if helpful.

## Scaffolding Checklist
- [ ] Choose stack and package manager.
- [ ] Add `.editorconfig`, Prettier, and linter configs.
- [ ] Create `src/`, `public/`, `tests/`, `scripts/`, `docs/`.
- [ ] Initialize `make` targets or npm scripts for dev/build/test.
- [ ] Set up CI (lint + test) in `.github/workflows/`.
- [ ] Add PR template and CODEOWNERS; document decisions in `docs/`.
