function ProjectCard({ iconSrc, title, description, techStack, link }) {
  return (
    <div className="text-center p-6 rounded-xl shadow-md bg-cyan-950 text-white transition-transform duration-300 hover:scale-105">
      <img
        src={iconSrc}
        alt={`${title} icon`}
        className="w-100 h-80 mx-auto mb-6 object-contain"
      />
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      {description && <p className="text-sm mb-2">{description}</p>}
      {techStack && (
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline text-sm"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
