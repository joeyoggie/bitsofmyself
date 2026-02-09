import { getPostBySlug, getPostSlugs } from '@/lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import MDXContent from '@/components/MDXContent'
import Link from 'next/link'

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
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <time dateTime={post.date}>{post.date}</time>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                    {post.title}
                </h1>
                {post.tags && (
                    <div className="mt-4 flex justify-center gap-2">
                        {post.tags.map((tag: string) => (
                            <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <MDXContent source={mdxSource} />
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <Link href="/blog" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                    ← Back to Blog
                </Link>
            </div>
        </article>
    )
}
