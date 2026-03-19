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
