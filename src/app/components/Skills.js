const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "EJS",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Firebase",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "REST APIs",
  "Webpack",
  "Jest",
  "Netlify",
  "Bash",
  "Figma",
  "SEO",
  "Google Ads",
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">I know,</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
