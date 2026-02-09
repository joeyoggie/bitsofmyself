'use client'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface Props {
    source: MDXRemoteSerializeResult
}

export default function MDXContent({ source }: Props) {
    return <div className="prose dark:prose-invert max-w-none"><MDXRemote {...source} /></div>
}
