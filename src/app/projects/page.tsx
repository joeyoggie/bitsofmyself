export default function ProjectsPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Project Name</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Brief description of a project you have worked on. Tech stack used, role, and outcome.
                    </p>
                    <a href="#" className="text-indigo-600 hover:underline">View Project -&gt;</a>
                </div>
                {/* Add more projects here */}
            </div>
        </div>
    )
}
