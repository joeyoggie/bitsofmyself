const PROJECTS: any[] = [] // Add projects here

export default function ProjectsPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>

            {PROJECTS.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="p-6 border border-dark-border bg-dark-surface rounded-lg hover:border-brand-500/50 transition-all">
                            <h2 className="text-xl font-bold mb-2 text-white">{project.name}</h2>
                            <p className="text-dark-muted mb-4">
                                {project.description}
                            </p>
                            <a href={project.url} className="text-brand-500 hover:text-brand-400 transition-colors inline-flex items-center">
                                View Project <span className="ml-1">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center border border-dashed border-dark-border rounded-lg bg-dark-surface/50">
                    <h2 className="text-2xl font-semibold text-white mb-2">Projects Coming Soon</h2>
                    <p className="text-dark-muted max-w-md mx-auto">
                        I'm currently working on some cool projects. Check back soon to for some exciting stuff!
                    </p>
                </div>
            )}
        </div>
    )
}
