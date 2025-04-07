import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ imageSource, title, githubLink, liveLink }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageSource})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="group border border-gray-400 relative w-full h-64 rounded-lg overflow-hidden shadow-lg shadow-gray-600 transition-all duration-300 ease-in-out hover:scale-105"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex-grow flex items-center justify-center">
          <h3 className="text-white text-2xl font-bold text-center">{title}</h3>
        </div>

        <div className="flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-gray-300 transition-colors hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-gray-300 transition-colors hover:scale-110"
          >
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
