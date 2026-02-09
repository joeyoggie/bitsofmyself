export default function ProjectsPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 border border-dark-border bg-dark-surface rounded-lg hover:border-brand-500/50 transition-all">
                    <h2 className="text-xl font-bold mb-2 text-white">Project Name</h2>
                    <p className="text-dark-muted mb-4">
                        Brief description of a project you have worked on. Tech stack used, role, and outcome.
                    </p>
                    <a href="#" className="text-brand-500 hover:text-brand-400 transition-colors inline-flex items-center">
                        View Project <span className="ml-1">→</span>
                    </a>
                </div>
                {/* Add more projects here */}
            </div>
        </div>
    )
}
