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
