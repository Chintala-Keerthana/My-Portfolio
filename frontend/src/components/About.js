import "./About.css";

const skillCategories = [
  {
    title: "💻 Programming Languages",
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "🎨 Frontend",
    skills: ["HTML", "CSS", "React.js"],
  },
  {
    title: "⚡ Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "💾 Databases",
    skills: ["MySQL", "Oracle SQL"],
  },
  {
    title: "📚 Core Concepts",
    skills: [
      "OOP",
      "JDBC",
      "Servlets",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "🔧 Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    title: "🛠️ Development Tools",
    skills: ["VS Code", "Eclipse", "Apache Tomcat"],
  },
];

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-section-header">
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-bio" data-aos="fade-right">
          <h3>My Story</h3>

          <p>
            Hello! I'm <strong>Chintala Keerthana</strong>, a Computer Science and
            Engineering student with a strong interest in Full Stack Development,
            Java Development, and Software Engineering. I enjoy building
            responsive, scalable, and user-friendly web applications that solve
            real-world problems.
          </p>

          <p>
            I have hands-on experience with React.js, Node.js, Express.js,
            MySQL, Java, Machine Learning, and REST API development through
            academic projects and internships. I continuously improve my skills
            by working on real-world applications and exploring modern software
            development technologies.
          </p>

          <p>
            I'm currently seeking opportunities where I can contribute,
            collaborate with development teams, and grow as a Software
            Developer while building impactful applications.
          </p>
        </div>

        <div className="about-skills" data-aos="fade-left">
          <h3>Skills & Technologies</h3>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div className="skill-category" key={index}>
                <h4>{category.title}</h4>

                <div className="skill-badges">
                  {category.skills.map((skill, skillIndex) => (
                    <span className="skill-badge" key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;