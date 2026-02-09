import { getAllPosts } from '@/lib/api'
import Link from 'next/link'

export default function Home() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags'])
  const recentPosts = allPosts.slice(0, 3)

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm Joey.
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400">
          Bits of Knowledge, Bytes of Experience
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          This is where I share my thoughts on technology, coding, and occasionally, life itself.
        </p>
        <div className="flex gap-4">
          <Link href="/blog" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition">
            Read blog
          </Link>
          <Link href="/projects" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 transition">
            View projects
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block space-y-3 p-6 bg-gray-50 dark:bg-neutral-900 rounded-lg hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-700 transition">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <time>{post.date}</time>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span>•</span>
                    <span className="capitalize">{post.tags[0]}</span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-semibold group-hover:underline decoration-2 underline-offset-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
