import { projects } from "../lib/projects";

function Projects() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {projects.map((project) => {
        return (
          <div key={project.name} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.desc}</p>
              <div className="card-actions justify-end">
                <a href={project.url} className="btn btn-primary">
                  {project.url}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
