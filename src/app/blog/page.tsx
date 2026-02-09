import { getAllPosts } from '@/lib/api'
import Link from 'next/link'

export default function BlogIndex() {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags'])

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">Blog</h1>
            <div className="space-y-8">
                {allPosts.map((post) => (
                    <article key={post.slug} className="group relative flex flex-col items-start">
                        <h2 className="text-xl font-semibold tracking-tight text-white">
                            <div className="absolute -inset-x-4 -inset-y-3 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-dark-surface/50 border border-brand-500/20 sm:-inset-x-6 sm:rounded-2xl" />
                            <Link href={`/blog/${post.slug}`}>
                                <span className="absolute -inset-x-4 -inset-y-3 sm:-inset-x-6 sm:rounded-2xl" />
                                <span className="relative">{post.title}</span>
                            </Link>
                        </h2>
                        <div className="relative z-10 order-first mb-3 flex items-center text-sm text-dark-muted pl-3.5">
                            <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                <span className="h-4 w-0.5 rounded-full bg-brand-500" />
                            </span>
                            <time dateTime={post.date}>{post.date}</time>
                        </div>
                        <p className="relative z-10 mt-2 text-sm text-dark-muted">
                            {post.excerpt}
                        </p>
                        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-brand-500 group-hover:text-brand-400">
                            Read article
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
