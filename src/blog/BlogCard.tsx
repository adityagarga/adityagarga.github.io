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
