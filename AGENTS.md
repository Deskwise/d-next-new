# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router entry (`layout.tsx`, `page.tsx`, `globals.css`, fonts and providers).
- `components/`: Reusable UI (e.g., `Hero.tsx`, `Navigation.tsx`, `Pricing.tsx`).
- `lib/`: Utilities and shared logic (e.g., `motion.ts`, `content-mapping.ts`).
- `public/`: Static assets and design tokens (`public/styles/*`).
- `tests/`: Jest-based checks grouped by feature (e.g., `group1-motion-animations.test.js`).
- Config: `eslint.config.mjs`, `tailwind.config.ts`, `next.config.ts`, `.env.example`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server at `http://localhost:3000` (Turbopack).
- `npm run build`: Production build with Next (Turbopack).
- `npm start`: Serve the production build.
- `npm run lint`: Run ESLint with Next/TypeScript rules.
- `node run-tests.js`: Project test dashboard. Or run a group: `npx jest tests/group1-motion-animations.test.js --verbose`.

## Coding Style & Naming Conventions
- Language: TypeScript (`strict: true`). Prefer `@/` imports (see `tsconfig.json`).
- Components: PascalCase `.tsx` in `components/`; utilities: camelCase `.ts` in `lib/`.
- Indentation: 2 spaces; keep functions small and typed (explicit `Props` types).
- Linting: Follow `eslint-config-next` (core-web-vitals). Fix issues before PR.
- Styling: Tailwind CSS 4 + CSS tokens in `public/styles`. Co-locate minor styles in `globals.css` only if shared.
- Animations: Use variants from `lib/motion.ts` and `viewportDefaults` for scroll reveal.

## Testing Guidelines
- Runner: Jest (no Jest script; use `node run-tests.js` or `npx jest`).
- Location: Add tests under `tests/` named `*.test.js` (mirror existing groups or create new feature groups).
- Scope: Cover critical UI behavior and animation wiring (imports, variants, accessibility guards like `prefers-reduced-motion`).

## Commit & Pull Request Guidelines
- Commits: Use Conventional Commits (e.g., `feat:`, `fix:`, `chore:`, `refactor:`). Example: `feat(hero): add slideUp animation variant`.
- PRs: Include purpose, linked issues, before/after screenshots for UI, test plan, and checklist (dev server runs, `npm run lint` passes, tests green).

## Security & Configuration Tips
- Secrets: Do not commit `.env.local`. Copy from `.env.example` and use `NEXT_PUBLIC_` only for safe client-side vars.
- Assets: Keep private data out of `public/`. Review third-party scripts and images.
- Tailwind: If adding new source dirs, update `content` globs in `tailwind.config.ts`.
