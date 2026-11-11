import { getAllProjects } from '@/lib/api'
import ProjectsClient from '@/components/ProjectsClient'

export default function ProjectsPage() {
    const projects = getAllProjects([
        'slug',
        'title',
        'category',
        'company',
        'role',
        'tags',
        'url',
        'order',
        'description',
    ])

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <div className="inline-block mb-4">
                    <h1 className="text-3xl font-bold text-white animate-underline-grow m-0">Projects</h1>
                </div>
                <p className="text-dark-muted max-w-2xl">
                    A collection of mobile applications, enterprise solutions, and side projects I have built and led throughout my career.
                </p>
            </div>

            <ProjectsClient projects={projects} />
        </div>
    )
}
