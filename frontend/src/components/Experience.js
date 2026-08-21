import "./Experience.css";

const experiences = [
  {
    role: "Infosys Springboard Internship 6.0",
    company: "Infosys Springboard",
    duration: "2025 – 2026",
    description:
      "Worked on Java-based projects, REST APIs, and software engineering concepts through hands-on assignments and guided learning.",
    technologies: ["Java", "SQL", "REST APIs", "Software Engineering", "Testing"],
  },
  {
    role: "Full Stack Development Virtual Internship",
    company: "Thiranex",
    duration: "2026",
    description:
      "Building full-stack web applications using React.js, Node.js, Express.js, and MySQL with secure user authentication and deployment.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JWT Authentication"],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "CODTECH IT Solutions",
    duration: "2026",
    description:
      "Developing full-stack web applications using React.js, Node.js, Express.js, and MySQL. Working on REST APIs, authentication, database integration, and GitHub-based project management.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Git", "GitHub"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <div className="experience-section-header">
        <h2>Experience & Internships</h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            className="timeline-item"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="experience-header">
                <span className="experience-date">{exp.duration}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </div>
              <p>{exp.description}</p>
              <div className="experience-tags">
                {exp.technologies.map((tech, techIdx) => (
                  <span className="experience-tech-tag" key={techIdx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;