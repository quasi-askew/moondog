import Image from "next/image";

function ProjectCard({
  imageSrc,
  projectName,
  primaryBadge,
  badges,
  description,
}) {
  return (
    <div className="w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image
          src={imageSrc}
          alt={projectName}
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {projectName}
          <div className="badge badge-secondary">{primaryBadge}</div>
        </h2>
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
