'use client'

import { useState } from 'react'
import { Project } from '@/lib/types'

interface ProjectsClientProps {
    projects: Project[]
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === selectedCategory)

    const categories = ['All', 'Professional Apps', 'Side Projects']

    return (
        <div className="space-y-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-dark-border pb-4">
                {categories.map((category) => {
                    const count = category === 'All'
                        ? projects.length
                        : projects.filter((p) => p.category === category).length

                    return (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                                selectedCategory === category
                                    ? 'bg-brand-500 text-dark-bg shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                                    : 'bg-dark-surface text-dark-muted hover:text-white border border-dark-border hover:border-brand-500/50'
                            }`}
                        >
                            {category} ({count})
                        </button>
                    )
                })}
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 md:grid-cols-2">
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.slug || index}
                        className="flex flex-col justify-between p-6 border border-dark-border bg-dark-surface rounded-lg hover:border-brand-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)] transition-all"
                    >
                        <div>
                            {/* Card Top Metadata Row */}
                            <div className="flex items-center justify-between gap-2 mb-3">
                                {project.company ? (
                                    <span className="text-xs font-medium text-dark-muted">
                                        @{project.company}
                                    </span>
                                ) : (
                                    <span />
                                )}
                                {/* Category tag - normal & white */}
                                <span className="text-xs font-medium text-white/90 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                                    {project.category}
                                </span>
                            </div>

                            {/* Project Title */}
                            <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>

                            {/* Role Badge - green accent */}
                            {project.role && (
                                <div className="mb-3">
                                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                                        {project.role}
                                    </span>
                                </div>
                            )}

                            {/* Description */}
                            <p className="text-dark-muted text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            {/* Tech Stack Tags */}
                            {project.tags && project.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="text-xs text-dark-muted bg-dark-bg border border-dark-border rounded px-2 py-0.5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Optional URL */}
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-500 hover:text-brand-400 text-sm font-medium transition-colors inline-flex items-center"
                                >
                                    View Project <span className="ml-1">→</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
