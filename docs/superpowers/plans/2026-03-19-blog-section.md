# Blog Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a blog to adityagarga.com with markdown authoring, a homepage section showing latest posts, a `/blog` index page, and individual `/blog/:slug` post pages.

**Architecture:** Markdown files with YAML frontmatter in `src/content/blog/`, discovered via Vite's `import.meta.glob`, parsed at runtime with `gray-matter`, rendered with `react-markdown`. `react-router-dom` handles three routes: `/` (homepage), `/blog` (index), `/blog/:slug` (post). The homepage stays as a single-page scroll; blog pages are separate routes with their own layout.

**Tech Stack:** React, TypeScript, Tailwind CSS, react-router-dom, react-markdown, gray-matter, remark-gfm, Vite

**Spec:** `docs/superpowers/specs/2026-03-19-blog-section-design.md`

---

## File Structure

```
src/
  content/
    blog/
      hello-world.md                     # Seed post for testing
  blog/
    posts.ts                             # Post registry (glob import + frontmatter parsing)
    BlogCard.tsx                         # Reusable blog post card component
    BlogSection.tsx                      # Homepage section (latest 3 + "view all")
    BlogIndex.tsx                        # /blog index page (all posts)
    BlogPost.tsx                         # /blog/:slug post page (markdown rendering)
  App.tsx                                # Modified: add routing, blog nav entry, BlogSection
  main.tsx                               # Modified: wrap in BrowserRouter
  index.css                              # Modified: add .blog-prose styles
```

---

### Task 1: Install dependencies

**Files:**

-   Modify: `package.json`

-   [ ] **Step 1: Install new packages**

```bash
npm install react-router-dom react-markdown gray-matter remark-gfm
```

-   [ ] **Step 2: Verify install succeeded**

```bash
npm ls react-router-dom react-markdown gray-matter remark-gfm
```

Expected: All four packages listed without errors.

-   [ ] **Step 3: Verify build still works**

```bash
npm run build
```

Expected: Build succeeds with no errors.

-   [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat(blog): add routing and markdown dependencies"
```

---

### Task 2: Create post registry and seed content

**Files:**

-   Create: `src/content/blog/hello-world.md`
-   Create: `src/blog/posts.ts`

-   [ ] **Step 1: Create seed blog post**

Create `src/content/blog/hello-world.md` with the following exact content (everything between the START and END markers):

--- START OF FILE ---

```
---
title: "Hello World"
date: 2026-03-19
description: "First post — testing the new blog setup."
type: note
---

This is the first post on my blog. Just making sure everything works.

## A heading

Some text under a heading with **bold** and *italic* and `inline code`.

A [link](https://adityagarga.com) for good measure.
```

--- END OF FILE ---

Note: The file should include a Python code block for testing code rendering, but it cannot be shown inline here due to markdown nesting. Add a fenced python code block after the `inline code` line containing `def hello(): print("hello world")`.

-   [ ] **Step 2: Create post registry**

Create `src/blog/posts.ts`:

```typescript
import matter from 'gray-matter';

export type PostType = 'post' | 'note';

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
    type: PostType;
}

export interface Post extends PostMeta {
    content: string;
}

// Vite glob import: all .md files as raw strings
const modules = import.meta.glob('../content/blog/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>;

function parsePost(filePath: string, raw: string): Post {
    const { data, content } = matter(raw);
    const slug = filePath.replace('../content/blog/', '').replace('.md', '');

    return {
        slug,
        title: data.title ?? 'Untitled',
        date:
            data.date instanceof Date
                ? data.date.toISOString().split('T')[0]
                : String(data.date ?? ''),
        description: data.description ?? '',
        type: (data.type as PostType) ?? 'post',
        content,
    };
}

const allPosts: Post[] = Object.entries(modules)
    .map(([path, raw]) => parsePost(path, raw))
    .sort((a, b) => b.date.localeCompare(a.date));

export function getPostList(): PostMeta[] {
    return allPosts.map(({ content: _, ...meta }) => meta);
}

export function getPost(slug: string): Post | undefined {
    return allPosts.find(p => p.slug === slug);
}
```

-   [ ] **Step 3: Verify build works with gray-matter**

```bash
npm run build
```

Expected: Build succeeds. If `gray-matter` has Buffer issues, we'll need to add a polyfill or swap to a regex parser — check the build output.

**If gray-matter fails with Buffer error**, replace the `matter` import in `posts.ts` with this regex-based parser:

```typescript
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return { data: {}, content: raw };
    const data: Record<string, string> = {};
    for (const line of match[1].split('\n')) {
        const idx = line.indexOf(':');
        if (idx > 0) {
            const key = line.slice(0, idx).trim();
            const val = line
                .slice(idx + 1)
                .trim()
                .replace(/^["']|["']$/g, '');
            data[key] = val;
        }
    }
    return { data, content: match[2] };
}
```

Then use `parseFrontmatter(raw)` instead of `matter(raw)`.

-   [ ] **Step 4: Commit**

```bash
git add src/content/blog/hello-world.md src/blog/posts.ts
git commit -m "feat(blog): add post registry and seed content"
```

---

### Task 3: Create BlogCard component

**Files:**

-   Create: `src/blog/BlogCard.tsx`

-   [ ] **Step 1: Create the blog card component**

Create `src/blog/BlogCard.tsx`:

```tsx
import { Link } from 'react-router-dom';
import type { PostMeta } from './posts';

export const BlogCard = ({ slug, title, date, description, type }: PostMeta) => {
    return (
        <Link
            to={`/blog/${slug}`}
            className="group flex w-full flex-col gap-2 rounded border-2 border-black bg-sky-50 px-5 py-4 shadow-card transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-card-hover sm:px-8"
        >
            <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-space text-lg font-bold text-text sm:text-xl">{title}</span>
                <span className="inline-block rounded border-2 border-black bg-sky-100 px-2 py-0.5 font-space text-xs shadow-badge">
                    {type}
                </span>
            </div>
            <div className="font-space text-xs text-text-muted sm:text-sm">{date}</div>
            <p className="font-space text-sm leading-relaxed text-text sm:text-base">
                {description}
            </p>
        </Link>
    );
};
```

-   [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build succeeds (component is created but not yet used — tree-shaking is fine, just checking for syntax errors).

-   [ ] **Step 3: Commit**

```bash
git add src/blog/BlogCard.tsx
git commit -m "feat(blog): add BlogCard component"
```

---

### Task 4: Create BlogSection (homepage section)

**Files:**

-   Create: `src/blog/BlogSection.tsx`

-   [ ] **Step 1: Create the homepage blog section**

Create `src/blog/BlogSection.tsx`:

```tsx
import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../AnimatedSection';
import { getPostList } from './posts';
import { BlogCard } from './BlogCard';

const BlogSection = () => {
    const posts = getPostList().slice(0, 3);

    if (posts.length === 0) return null;

    return (
        <AnimatedSection>
            <section className="flex flex-col gap-4">
                <h2 className="inline-block border-b-[3px] border-sky-400 pb-0.5 font-space text-2xl font-bold text-text sm:text-3xl">
                    blog
                </h2>
                <StaggerContainer className="flex flex-col gap-3">
                    {posts.map(post => (
                        <StaggerItem key={post.slug}>
                            <BlogCard {...post} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
                <div className="flex justify-end">
                    <Link
                        to="/blog"
                        className="inline-block rounded border-2 border-black bg-sky-100 px-4 py-2 font-space text-sm font-bold shadow-button transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    >
                        view all posts →
                    </Link>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default BlogSection;
```

-   [ ] **Step 2: Commit**

```bash
git add src/blog/BlogSection.tsx
git commit -m "feat(blog): add BlogSection homepage component"
```

---

### Task 5: Create BlogIndex page

**Files:**

-   Create: `src/blog/BlogIndex.tsx`

-   [ ] **Step 1: Create the blog index page**

Create `src/blog/BlogIndex.tsx`:

```tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostList } from './posts';
import { BlogCard } from './BlogCard';
import Footer from '../Footer';

const BlogIndex = () => {
    const posts = getPostList();

    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-background">
            <main className="flex w-full max-w-3xl flex-col px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        to="/"
                        className="font-space text-sm text-text-muted transition-colors hover:text-text"
                    >
                        ← home
                    </Link>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="mt-6 font-space text-4xl font-bold text-text sm:text-5xl"
                >
                    blog
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="mt-2 font-space text-sm text-text-light sm:text-base"
                >
                    Posts and notes on agentic engineering, AI tooling, and building products.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                    className="mt-6 flex h-1 w-32 origin-left overflow-hidden rounded-full"
                >
                    <div className="flex-1 bg-pink-400" />
                    <div className="flex-1 bg-orange-400" />
                    <div className="flex-1 bg-amber-400" />
                    <div className="flex-1 bg-emerald-400" />
                    <div className="flex-1 bg-sky-400" />
                    <div className="flex-1 bg-violet-400" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="mt-8 flex flex-col gap-3"
                >
                    {posts.map(post => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                    {posts.length === 0 && (
                        <p className="font-space text-sm text-text-muted">
                            No posts yet. Check back soon.
                        </p>
                    )}
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogIndex;
```

-   [ ] **Step 2: Commit**

```bash
git add src/blog/BlogIndex.tsx
git commit -m "feat(blog): add BlogIndex page"
```

---

### Task 6: Create BlogPost page and blog prose styles

**Files:**

-   Create: `src/blog/BlogPost.tsx`
-   Modify: `src/index.css`

-   [ ] **Step 1: Add blog prose styles to index.css**

Add the following at the end of `src/index.css`:

```css
/* Blog prose styles */
.blog-prose {
    @apply font-space text-sm leading-relaxed text-text sm:text-base;
}

.blog-prose h1 {
    @apply mb-4 mt-8 text-2xl font-bold text-text sm:text-3xl;
}

.blog-prose h2 {
    @apply mb-3 mt-8 inline-block border-b-2 border-amber-400 pb-0.5 text-xl font-bold text-text sm:text-2xl;
}

.blog-prose h3 {
    @apply mb-2 mt-6 text-lg font-bold text-text sm:text-xl;
}

.blog-prose p {
    @apply mb-4;
}

.blog-prose a {
    @apply underline decoration-sky-400 underline-offset-2 transition-colors hover:text-sky-600;
}

.blog-prose strong {
    @apply font-bold;
}

.blog-prose ul,
.blog-prose ol {
    @apply mb-4 ml-6 list-outside;
}

.blog-prose ul {
    @apply list-disc;
}

.blog-prose ol {
    @apply list-decimal;
}

.blog-prose li {
    @apply mb-1;
}

.blog-prose blockquote {
    @apply my-4 border-l-4 border-sky-400 pl-4 italic text-text-light;
}

.blog-prose pre {
    @apply my-4 overflow-x-auto rounded border-2 border-black bg-neutral-900 p-4 font-space text-xs text-neutral-100 shadow-card sm:text-sm;
}

.blog-prose code {
    @apply rounded border border-black/10 bg-sky-50 px-1.5 py-0.5 font-space text-xs sm:text-sm;
}

.blog-prose pre code {
    @apply border-0 bg-transparent p-0;
}

.blog-prose img {
    @apply my-4 max-w-full rounded border-2 border-black;
}

.blog-prose hr {
    @apply my-8 border-t-2 border-black/10;
}
```

-   [ ] **Step 2: Create the blog post page**

Create `src/blog/BlogPost.tsx`:

```tsx
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPost } from './posts';
import Footer from '../Footer';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPost(slug) : undefined;

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-background">
            <main className="flex w-full max-w-3xl flex-col px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        to="/blog"
                        className="font-space text-sm text-text-muted transition-colors hover:text-text"
                    >
                        ← blog
                    </Link>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="mt-6 font-space text-3xl font-bold leading-tight text-text sm:text-4xl"
                >
                    {post.title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="mt-3 flex items-center gap-3"
                >
                    <span className="font-space text-sm text-text-muted">{post.date}</span>
                    <span className="inline-block rounded border-2 border-black bg-sky-100 px-2 py-0.5 font-space text-xs shadow-badge">
                        {post.type}
                    </span>
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                    className="mt-6 flex h-1 w-32 origin-left overflow-hidden rounded-full"
                >
                    <div className="flex-1 bg-pink-400" />
                    <div className="flex-1 bg-orange-400" />
                    <div className="flex-1 bg-amber-400" />
                    <div className="flex-1 bg-emerald-400" />
                    <div className="flex-1 bg-sky-400" />
                    <div className="flex-1 bg-violet-400" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="blog-prose mt-8"
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogPost;
```

-   [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

-   [ ] **Step 4: Commit**

```bash
git add src/blog/BlogPost.tsx src/index.css
git commit -m "feat(blog): add BlogPost page and prose styles"
```

---

### Task 7: Wire up routing and integrate into App

**Files:**

-   Modify: `src/main.tsx`
-   Modify: `src/App.tsx`
-   Modify: `tailwind.config.js`
-   Modify: `package.json`

-   [ ] **Step 1: Wrap app in BrowserRouter**

Modify `src/main.tsx` to:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);
```

-   [ ] **Step 2: Modify App.tsx with targeted edits**

Make these changes to `src/App.tsx` (targeted edits, not a full replacement):

**2a. Add imports** at the top of the file:

```tsx
import { Routes, Route } from 'react-router-dom';
import BlogSection from './blog/BlogSection';
import BlogIndex from './blog/BlogIndex';
import BlogPost from './blog/BlogPost';
```

**2b. Add Blog to the sections array** — insert after the Project entry:

```tsx
    { name: 'Blog', icon: 'Book', activeColor: 'bg-cyan-200' },
```

So the array becomes: About, Work, Project, **Blog**, Education, Life, Contact.

**2c. Add Blog ref to sectionRefs** — add inside the `sectionRefs` object:

```tsx
        Blog: useRef<HTMLDivElement>(null),
```

**2d. Add BlogSection to the main content** — insert between the Project and Education divs:

```tsx
<div ref={sectionRefs.Blog}>
    <BlogSection />
</div>
```

**2e. Rename the current `App` component to `HomePage`** — change `const App = () => {` to `const HomePage = () => {`.

**2f. Add a new `App` component at the bottom** that handles routing, and export it:

```tsx
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};

export default App;
```

Remove the old `export default App;` line (since the renamed component is now `HomePage` and the new `App` wrapping component is the export).

-   [ ] **Step 3: Add cyan-200 to Tailwind safelist**

In `tailwind.config.js`, add these entries to the `safelist` array:

```
'bg-cyan-200',
'group-hover:bg-cyan-200',
```

-   [ ] **Step 4: Update build script for SPA routing on gh-pages**

In `package.json`, change the build script to:

```json
"build": "vite build && cp dist/index.html dist/404.html"
```

-   [ ] **Step 5: Verify full build**

```bash
npm run build
```

Expected: Build succeeds. `dist/404.html` exists and is identical to `dist/index.html`.

-   [ ] **Step 6: Test locally**

```bash
npm run dev
```

Verify:

1. Homepage loads at `http://localhost:3000/` — Blog section visible between Projects and Education
2. Blog nav button scrolls to blog section
3. "view all posts →" navigates to `/blog`
4. `/blog` shows the index page with the hello-world post
5. Clicking the post navigates to `/blog/hello-world`
6. Post content renders with proper styling
7. `← blog` link goes back to `/blog`
8. `← home` link goes back to `/`
9. Invalid routes (e.g., `/nonsense`) redirect to homepage

-   [ ] **Step 7: Commit**

```bash
git add src/main.tsx src/App.tsx tailwind.config.js package.json
git commit -m "feat(blog): wire up routing and integrate blog into site"
```

---

### Task 8: Scroll-to-top on route change

**Files:**

-   Create: `src/blog/ScrollToTop.tsx`
-   Modify: `src/main.tsx`

When navigating from the homepage to `/blog/:slug`, the page may start scrolled down. Fix this.

-   [ ] **Step 1: Create ScrollToTop component**

Create `src/blog/ScrollToTop.tsx`:

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
};
```

-   [ ] **Step 2: Add ScrollToTop to main.tsx**

Update `src/main.tsx`:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './blog/ScrollToTop';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </StrictMode>,
);
```

-   [ ] **Step 3: Verify navigation scrolls to top**

```bash
npm run dev
```

Navigate from homepage (scrolled down) to a blog post — page should start at the top.

-   [ ] **Step 4: Commit**

```bash
git add src/blog/ScrollToTop.tsx src/main.tsx
git commit -m "feat(blog): add scroll-to-top on route change"
```

---

### Task 9: Final verification

-   [ ] **Step 1: Full production build**

```bash
npm run build
```

Expected: Clean build, no warnings. `dist/404.html` exists.

-   [ ] **Step 2: Preview production build**

```bash
npm run preview
```

Test all routes work correctly in the production build.

-   [ ] **Step 3: Verify all routes**

1. `/` — homepage with all sections including Blog
2. `/blog` — index page with all posts
3. `/blog/hello-world` — post page with rendered markdown
4. `/nonexistent` — redirects to homepage
5. Direct navigation to `/blog/hello-world` (refresh) — works (tests 404.html fallback locally won't work with vite preview, but the file exists for gh-pages)

-   [ ] **Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "feat(blog): final polish and fixes"
```
