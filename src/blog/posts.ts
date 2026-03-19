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
