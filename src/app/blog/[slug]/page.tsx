import { getPostBySlug, getPostSlugs } from '@/lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import MDXContent from '@/components/MDXContent'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'

export async function generateStaticParams() {
    const posts = getPostSlugs()
    return posts.map((post) => ({
        slug: post.replace(/\.mdx$/, ''),
    }))
}

export default async function Post({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content', 'tags'])
    const mdxSource = await serialize(post.content)

    return (
        <article className="max-w-3xl mx-auto py-8">
            <div className="mb-8 text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 animate-fade-in-up">
                    <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="inline-block">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl animate-underline-grow m-0">
                        {post.title}
                    </h1>
                </div>
                {post.tags && (
                    <div className="mt-4 flex justify-center gap-2 animate-fade-in-up delay-100">
                        {post.tags.map((tag: string) => (
                            <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="prose prose-gray dark:prose-invert max-w-none animate-fade-in-up delay-200">
                <MDXContent source={mdxSource} />
            </div>

            <ShareButtons title={post.title} slug={post.slug} />

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center animate-fade-in-up delay-300">
                <Link href="/blog" className="text-brand-500 hover:text-brand-400 transition-colors">
                    ← Back to Blog
                </Link>
            </div>
        </article>
    )
}
