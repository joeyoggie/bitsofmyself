'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function Navbar() {
    return (
        <nav className="w-full py-6 md:py-8 border-b border-dark-border">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white hover:text-brand-400 transition-colors"
                    onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'Logo Home' })}
                >
                    BitsOfMyself
                </Link>
                <div className="flex gap-6">
                    <Link
                        href="/blog"
                        className="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors"
                        onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'Blog' })}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/projects"
                        className="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors"
                        onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'Projects' })}
                    >
                        Projects
                    </Link>
                    /* <Link
                        href="/family"
                        className="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors"
                        onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'Family' })}
                    >
                        Family
                    </Link> */
                    <Link
                        href="/about"
                        className="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors"
                        onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'About' })}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-dark-muted hover:text-brand-400 transition-colors"
                        onClick={() => trackEvent({ action: 'nav_click', category: 'navigation', label: 'Contact' })}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}
