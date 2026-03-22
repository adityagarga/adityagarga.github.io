export type PostType = 'post' | 'note';

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
    type: PostType;
    draft: boolean;
}

export interface Post extends PostMeta {
    content: string;
}

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

// Vite glob import: all .md files as raw strings
const modules = import.meta.glob('../content/blog/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
}) as Record<string, string>;

function parsePost(filePath: string, raw: string): Post {
    const { data, content } = parseFrontmatter(raw);
    const slug = filePath.replace('../content/blog/', '').replace('.md', '');

    return {
        slug,
        title: data.title ?? 'Untitled',
        date: data.date ?? '',
        description: data.description ?? '',
        type: (data.type as PostType) ?? 'post',
        draft: data.draft === 'true',
        content,
    };
}

const allPosts: Post[] = Object.entries(modules)
    .map(([path, raw]) => parsePost(path, raw))
    .sort((a, b) => b.date.localeCompare(a.date));

const publicPosts = allPosts.filter(p => !p.draft);

export function getPostList(): PostMeta[] {
    return publicPosts.map(({ content: _, ...meta }) => meta);
}

export function getPost(slug: string): Post | undefined {
    return publicPosts.find(p => p.slug === slug);
}
