import Image from "next/image";

function ProjectCard({ projectName, badges, description, link }) {
	
  return (
    <div className="w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{projectName}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {badges.map((badge) => (
            <div key={badge} className="badge badge-outline">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
