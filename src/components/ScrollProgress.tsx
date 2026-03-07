'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const currentScroll = window.scrollY
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            if (scrollHeight > 0) {
                setProgress((currentScroll / scrollHeight) * 100)
            }
        }

        window.addEventListener('scroll', updateProgress)
        updateProgress() // Initial check

        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
