function ProjectCard({ title, description, githubLink, liveLink }) {
    return(
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex gap-4">
                <a href={githubLink} target="_blank" className="text-blue-600 hover:underline">
                    Github
                </a>
                {liveLink && (
                    <a href={liveLink} target="_blank" className="text-blue-600 hover:underline">
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard