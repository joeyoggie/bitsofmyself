import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="w-full py-6 md:py-8 border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    bitsofmyself
                </Link>
                <div className="flex gap-6">
                    <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                        Blog
                    </Link>
                    <Link href="/projects" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                        Projects
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
}
