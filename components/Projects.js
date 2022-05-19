import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="container mx-auto py-8">
			<h2 className="text-5xl font-bold text-center mb-6">Some Projects and Stuff</h2>
      <div className="grid gap-6 grid-cols-1 justify-items-center">
        <ProjectCard
          imageSrc="https://api.lorem.space/image/shoes?w=400&h=400"
          projectName="Project 1"
          primaryBadge="New"
          badges={["Badge1", "Badge2"]}
          description="This is a description"
        />
        <ProjectCard
          imageSrc="https://api.lorem.space/image/shoes?w=400&h=400"
          projectName="Project 1"
          primaryBadge="New"
          badges={["Badge1", "Badge2"]}
          description="This is a description"
        />
        <ProjectCard
          imageSrc="https://api.lorem.space/image/shoes?w=400&h=400"
          projectName="Project 1"
          primaryBadge="New"
          badges={["Badge1", "Badge2"]}
          description="This is a description"
        />
        <ProjectCard
          imageSrc="https://api.lorem.space/image/shoes?w=400&h=400"
          projectName="Project 1"
          primaryBadge="New"
          badges={["Badge1", "Badge2"]}
          description="This is a description"
        />
      </div>
    </div>
  );
}

export default Projects;
