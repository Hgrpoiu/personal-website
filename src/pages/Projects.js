function Projects({ projects }) {
    return (
        <div>
            <h2>Here are the projects I've worked on</h2>
            <div>
                {projects.map((p) => {
                    return <Project project={p} />;
                })}
            </div>
        </div>
    );
}

export default Projects;
