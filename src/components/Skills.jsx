function Skills() {
    const skillsList = [
        "HTML", "CSS", "JavaScript", "React",
        "Node.js", "Express", "MongoDB", "Tailwind CSS"
    ]

    return(
        <section id="skills" className="py-20 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {skillsList.map((skill) => (
                    <span key={skill}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Skills