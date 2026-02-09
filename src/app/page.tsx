import { getAllPosts } from '@/lib/api'
import Link from 'next/link'

export default function Home() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'tags'])
  const recentPosts = allPosts.slice(0, 3)

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
          Bits of Knowledge, <span className="text-brand-500">Bytes of Experience</span>
        </h1>
        <p className="text-lg text-dark-muted max-w-2xl">
          This is where I share my thoughts on technology, coding, and occasionally, life itself.
        </p>
        <div className="flex gap-4">
          <Link href="/blog" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-dark-bg bg-brand-500 hover:bg-brand-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            Read blog
          </Link>
          <Link href="/projects" className="inline-flex items-center justify-center px-5 py-3 border border-dark-border text-base font-medium rounded-md text-dark-text bg-dark-bg hover:bg-dark-surface transition-all">
            View projects
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-white">Recent Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block space-y-3 p-6 bg-dark-surface border border-dark-border rounded-lg hover:border-brand-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all">
              <div className="flex items-center gap-2 text-sm text-dark-muted">
                <time>{post.date}</time>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span>•</span>
                    <span className="capitalize text-brand-500">{post.tags[0]}</span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-brand-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-dark-muted line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
