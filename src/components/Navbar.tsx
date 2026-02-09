import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="w-full py-6 md:py-8 border-b border-dark-border">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-brand-400 transition-colors">
                    bitsofmyself
                </Link>
                <div className="flex gap-6">
                    <Link href="/blog" className="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors">
                        Blog
                    </Link>
                    <Link href="/projects" className="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors">
                        Projects
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
}
