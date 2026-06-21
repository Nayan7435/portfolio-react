import ProjectCard from "./ProjectCard";

function Projects() {
  const projectList = [
    {
      title: "MERN Todo App",
      description: "Full-stack todo application with MongoDB, Express, React.",
      githubLink: "https://github.com/Nayan7435/your-repo",
      liveLink: "",
    },
    {
      title: "Expense Tracker",
      description: "Track daily expenses with React and local storage.",
      githubLink: "https://github.com/Nayan7435/your-repo",
      liveLink: "",
    },
    {
      title: "Weather App",
      description: "Real-time weather info using a weather API.",
      githubLink: "https://github.com/Nayan7435/your-repo",
      liveLink: "",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
            {projectList.map((project) => (
                <ProjectCard
                key = {project.title}
                title = {project.title}
                description = {project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects;
