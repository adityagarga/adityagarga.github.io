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
