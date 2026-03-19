# Blog Section Design

## Goal

Add a blog to adityagarga.com supporting both long-form posts and short TIL notes, with markdown authoring, runtime rendering, and three views: a main-page section, a `/blog` index, and individual `/blog/:slug` post pages.

## Decisions Made

-   **Content format**: Markdown files with YAML frontmatter, stored in `src/content/blog/`
-   **Rendering**: Runtime via `react-markdown` + `gray-matter` (no build plugins)
-   **Routing**: `react-router-dom` with three routes: `/` (current site), `/blog` (index), `/blog/:slug` (post)
-   **Main page integration**: Hybrid — latest 3 posts shown as a section on the homepage, "view all posts" links to `/blog`
-   **Post types**: `post` (long-form) and `note` (short TIL), distinguished by frontmatter `type` field

## Content Authoring

Files live in `src/content/blog/`. Filename becomes the slug.

```markdown
---
title: 'Building Waddle with Multi-Agent Orchestration'
date: 2026-03-15
description: 'How I used PydanticAI and Claude to build an agentic calendar app.'
type: post
---

Your content here...
```

-   `type`: `post` or `note`
-   `date`: ISO date string, used for sorting
-   `description`: One-line summary shown on cards
-   Slug derived from filename: `building-waddle-with-agents.md` → `/blog/building-waddle-with-agents`

## Architecture

### Routing

Add `react-router-dom`. Three routes:

-   `/` — current single-page site (all existing sections)
-   `/blog` — blog index page (all posts)
-   `/blog/:slug` — individual post page

### Post Registry (`src/blog/posts.ts`)

Uses Vite's `import.meta.glob` to discover all `.md` files in `src/content/blog/` at build time. Exports:

-   `getPostList()` — returns sorted array of `{ slug, title, date, description, type }` (sorted by date descending)
-   `getPost(slug)` — returns full post content + metadata for a given slug

Frontmatter is parsed at runtime with `gray-matter`.

### New Dependencies

-   `react-router-dom` — routing
-   `react-markdown` — markdown → React rendering
-   `gray-matter` — YAML frontmatter parsing
-   `remark-gfm` — GitHub Flavored Markdown support (tables, strikethrough, etc.)

## Components

### 1. `BlogSection.tsx` — Main page section

-   Placed between Projects and Education in `App.tsx`
-   Section header: "blog" with sky-blue underline (`border-sky-400`)
-   Shows latest 3 posts as cards (same brutalist card style: cream bg, black border, offset shadow)
-   Each card shows: title, type badge (`post`/`note`), date, one-line description
-   Cards link to `/blog/:slug`
-   "view all posts →" button at bottom-right, links to `/blog`
-   Color scheme: sky-blue (`bg-sky-50` cards, `bg-sky-100` badges)

### 2. `BlogIndex.tsx` — `/blog` index page

-   `← home` back link to `/`
-   Page title: "blog"
-   Subtitle: "Posts and notes on agentic engineering, AI tooling, and building products."
-   Rainbow divider
-   Full list of all posts, same card style as main page section, sorted by date descending
-   No pagination (add later if needed)

### 3. `BlogPost.tsx` — `/blog/:slug` post page

-   `← blog` back link to `/blog`
-   Post title (large)
-   Date + type badge
-   Rainbow divider
-   Rendered markdown content
-   Typography: `font-space`, `text-sm sm:text-base`, `leading-relaxed`
-   Styled elements via CSS classes in `index.css`:
    -   Headings: bold, amber underline (matching site style)
    -   Code blocks: dark background (`#1A1A1A`), brutalist shadow, monospace
    -   Inline code: light background with border
    -   Lists: styled bullets
    -   Links: underlined, text color
    -   Blockquotes: left border accent

### 4. Nav update in `App.tsx`

-   Add "Blog" entry to the `sections` array with `activeColor: 'bg-cyan-200'` (sky-200 is taken by Life)
-   Icon: use `Book` icon (already registered in the icon system)
-   **Behavior**: On the homepage, the Blog nav button scrolls to the `BlogSection`. On `/blog` and `/blog/:slug` routes, the sticky nav is not shown (those pages have their own back links). The nav is homepage-only — it stays as a scroll-based navigation for the single-page sections.

## Styling

Blog-specific markdown styles added to `index.css` under a `.blog-prose` wrapper class. Minimal set:

-   `h1, h2, h3` — sizing, weight, amber underline on h2
-   `p` — margin-bottom
-   `pre, code` — dark bg, border, shadow for blocks; light bg for inline
-   `ul, ol` — indentation, bullet styling
-   `a` — underline
-   `blockquote` — left border, padding
-   `img` — max-width, border-radius

No `@tailwindcss/typography` — keep it light and hand-tuned.

## File Structure

```
src/
  content/
    blog/
      building-waddle-with-agents.md    (example post)
      til-structured-outputs.md          (example note)
  blog/
    posts.ts                             (post registry)
  BlogSection.tsx                        (main page section)
  BlogIndex.tsx                          (index page)
  BlogPost.tsx                           (post page)
```

## What Changes in Existing Files

-   `main.tsx` — wrap `App` in `BrowserRouter`
-   `App.tsx` — add `Routes`/`Route` for `/`, `/blog`, `/blog/:slug`. Homepage route renders the current single-page layout. Add Blog to nav sections array, add `BlogSection` between Projects and Education
-   `index.css` — add `.blog-prose` styles
-   `package.json` — new dependencies + update build script to copy `index.html` to `404.html`

## What Stays the Same

-   All existing sections (About, Work, Projects, Education, Life, Contact)
-   Deploy flow (`gh-pages`)
-   No backend, no CMS, no build plugins
-   Existing `InfoCard` component (blog cards will be a new simpler component, not reusing InfoCard since blog cards have different structure — type badge, date, no icons)

## Risks

-   **`gray-matter` in browser**: This library is designed for Node.js. It works in the browser but may need a polyfill for `Buffer`. If it causes issues, fall back to a simple regex-based frontmatter parser.
-   **`import.meta.glob` with raw markdown**: Vite supports `?raw` suffix for importing file contents as strings. This is well-documented and stable.
-   **SPA routing + gh-pages**: GitHub Pages doesn't support client-side routing natively. **Required fix**: copy `dist/index.html` to `dist/404.html` as a post-build step. This is the standard SPA workaround — GitHub Pages serves `404.html` for unknown paths, which loads the React app and lets `react-router` handle the route client-side. Add to the build script in `package.json`: `"build": "vite build && cp dist/index.html dist/404.html"`.
