'use client'

import { useState } from 'react'
import { Share2, Twitter, Linkedin, Facebook, Link as LinkIcon, Check } from 'lucide-react'

interface ShareButtonsProps {
    title: string
    slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)
    const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : ''

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    const shareLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            color: 'hover:text-[#0077b5]'
        },
        {
            name: 'Facebook',
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            color: 'hover:text-[#1877f2]'
        },
        {
            name: 'X',
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
            color: 'hover:text-white'
        }
    ]

    return (
        <div className="flex flex-col items-center gap-4 py-8 border-y border-dark-border mt-12 animate-fade-in-up">
            <span className="text-sm font-medium text-dark-muted uppercase tracking-widest flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Share this post
            </span>
            <div className="flex gap-6">
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-dark-muted transition-all transform hover:scale-110 ${link.color}`}
                        title={`Share on ${link.name}`}
                    >
                        <link.icon className="w-6 h-6" />
                    </a>
                ))}
                <button
                    onClick={handleCopy}
                    className="text-dark-muted hover:text-brand-400 transition-all transform hover:scale-110"
                    title="Copy link"
                >
                    {copied ? <Check className="w-6 h-6 text-brand-500" /> : <LinkIcon className="w-6 h-6" />}
                </button>
            </div>
        </div>
    )
}
