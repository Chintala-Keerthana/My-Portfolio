import "./Experience.css";

const experiences = [
  {
    role: "Web Development Internship",
    company: "TopperRank",
    duration: "2025",
    description:
      "Developed responsive web applications using HTML, CSS, JavaScript, and React.js while collaborating on real-world development tasks.",
  },
  {
    role: "Infosys Springboard Internship 6.0",
    company: "Infosys Springboard",
    duration: "2025 – 2026",
    description:
      "Worked on Java-based projects, REST APIs, and software engineering concepts through hands-on assignments and guided learning.",
  },
  {
    role: "Web Development Virtual Internship",
    company: "Thiranex",
    duration: "2026 (Ongoing)",
    description:
      "Building full-stack web applications using React.js, Node.js, Express.js, and MySQL with authentication and deployment.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <div className="experience-section-header">
        <h2>Internships</h2>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div
            className="experience-card"
            key={index}
            data-aos="zoom-in"
          >
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <span className="experience-date">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;