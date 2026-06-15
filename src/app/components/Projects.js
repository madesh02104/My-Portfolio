const projects = [
  {
    title: "Personal Blog Site",
    github: "https://github.com/madesh02104/MyBlogSite",
    live: "https://blogsbymadesh.live/",
    image: "/my-blog-site.webp",
  },
  {
    title: "TypeJam",
    github: "https://github.com/madesh02104/typejam",
    live: "https://typejam.netlify.app/",
    image: "/typejam.webp",
  },
  {
    title: "Festx Event Site",
    github: "https://github.com/madesh02104/CSBS-FESTX-2025",
    live: "https://festx.in",
    image: "/festx.webp",
  },
  {
    title: "Strait Of Warmuz",
    github: "https://github.com/madesh02104/straitofwarmuz",
    live: "https://straitofwarmuz.netlify.app/",
    image: "/warmuz.webp",
  },
  {
    title: "OD Management System",
    github: "https://github.com/madesh02104/od-management",
    live: "https://od-management-system.web.app/login",
    image: "/od-management.webp",
  },
];

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">I have built,</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-image"
              aria-label={`View ${project.title}`}
              style={{ textDecoration: "none" }}
            >
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            </a>
            <div className="project-card-overlay">
              <div className="project-title-box">
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title"
                  style={{ textDecoration: "none" }}
                >
                  {project.title}
                </a>
              </div>
              <div className="project-links-box">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`${project.title} GitHub`}
                >
                  <GithubIcon />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`${project.title} live site`}
                >
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="projects-more">
        <a
          href="https://github.com/madesh02104"
          target="_blank"
          rel="noopener noreferrer"
        >
          View more on GitHub →
        </a>
      </p>
    </section>
  );
}
