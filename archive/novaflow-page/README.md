# NOVAFLOW page archive

The dedicated `/novaflow` page (`src/pages/NovaflowPage.tsx`) was replaced with an
"under development" placeholder on 2026-08-03. Everything that was on the page
is preserved here so the full brief can be restored later without having to
rewrite it from scratch.

This folder is outside `src/`, so it is not part of the app build, the
TypeScript project (`tsconfig.app.json` only includes `src`), or lint (the
folder is excluded in `.eslintrc.cjs`). Nothing here runs.

## What's in this folder

- `NovaflowPage.tsx` - the full original page component (hero, "why it exists",
  evidence table, scope boundaries, markets, staged approach, partnership, CTA).
- `NovaflowWaves.tsx` - the animated wave visual used only by that page's hero.
- `novaflow-data-snapshot.ts` - a reference copy of the `novaflow` data object
  and its supporting types (`NovaflowPillar`, `NovaflowStage`, `MarginRow`) as
  they stood at archive time.

Note: the `novaflow` export in `src/data/site.ts` was **not removed** - it's
still used by the homepage teaser section (`src/sections/Novaflow.tsx`), which
was kept live and unchanged per the scope of this change. The snapshot here is
just a point-in-time backup in case that live data drifts before the page is
rebuilt.

## How to restore the full page

1. Copy `NovaflowWaves.tsx` back to `src/sections/visuals/NovaflowWaves.tsx`.
2. Copy `NovaflowPage.tsx` back to `src/pages/NovaflowPage.tsx`, overwriting the
   placeholder.
3. Confirm `src/data/site.ts` still exports `novaflow` with the shape the page
   expects (compare against `novaflow-data-snapshot.ts` if it has since
   changed, and merge any updates you want to keep).
4. `npm run typecheck` and `npm run dev` to confirm the route renders.
5. Delete or keep this archive folder as you prefer.
