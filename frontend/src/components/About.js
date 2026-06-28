import "./About.css";

const skillCategories = [
  {
    title: "🎨 Frontend",
    skills: ["React", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "⚡ Backend",
    skills: ["Node.js", "Express"],
  },
  {
    title: "💾 Database",
    skills: ["MySQL"],
  },
  {
    title: "🛠️ Tools",
    skills: ["Git", "GitHub", "VS Code"],
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
            Hello! I'm <strong>Chintala Keerthana</strong>, an aspiring Full Stack
            Developer with a passion for building clean, responsive, and scalable
            web applications. I enjoy turning ideas into functional, user-friendly
            solutions while continuously learning modern technologies and industry
            best practices.
          </p>
          <p>
            My goal is to develop applications that solve real-world problems and provide
            smooth, intuitive user interfaces. I love collaborating, coding, and keeping
            up with current design methodologies.
          </p>
        </div>

        <div className="about-skills" data-aos="fade-left">
          <h3>Skills & Technologies</h3>
          <div className="skills-grid">
            {skillCategories.map((cat, idx) => (
              <div className="skill-category" key={idx}>
                <h4>{cat.title}</h4>
                <div className="skill-badges">
                  {cat.skills.map((skill, sIdx) => (
                    <span className="skill-badge" key={sIdx}>
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