# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun install` — install dependencies (uses Bun, not npm/yarn)
- `bun run dev` — start local dev server
- `bun run build` — type-check (`astro check`) then build for production
- `bun run preview` — preview the production build locally

## Architecture

This is a single-page portfolio site built with **Astro 4 + React 19 + Tailwind CSS 3**, deployed as a static site to `1π.com`.

Astro handles the static shell (`src/layouts/Layout.astro`, `src/pages/index.astro`), while the main UI is a React island rendered with `client:only="react"` in `src/components/homepage.tsx`. This means the homepage component runs entirely client-side with no SSR.

All portfolio content (projects, skills, social links, personal info) is centralized in `src/constants.ts` with types defined in `src/types.ts`. To add or update projects/skills, edit those files — no CMS or markdown content collection is used.

## Styling

- Tailwind with custom theme colors: `ink` (#050505) and `paper` (#f0f0f0)
- Custom font: JetBrains Mono (imported via `@fontsource-variable`)
- Glitch text animation and dither mask effects are defined as custom CSS in `Layout.astro`

## Deployment

Static site hosted via GitHub Pages (indicated by `public/CNAME`). The build output is plain static HTML/JS/CSS.
