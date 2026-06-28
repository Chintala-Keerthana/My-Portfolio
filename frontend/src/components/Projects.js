import { useEffect, useState } from "react";
import "./Projects.css";

const fallbackProjects = [
  {
    title: "📚 Library Management System",
    description: "A web-based Library Management System developed using Java, JSP, Servlets, Oracle Database, and Apache Tomcat for managing books, users, and library operations efficiently.",
    technologies: "Java, JSP, Servlets, JDBC, Oracle Database, HTML, CSS, Bootstrap Icons, Apache Tomcat",
    github_link: "https://github.com/Chintala-Keerthana/Library-Management-System",
    live_link: "https://www.linkedin.com/posts/chintala-keerthana-916668321_java-jsp-servlets-ugcPost-7475776298372521984-xgEA/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFFu-SIBihBX_NagXMzVqi29kWx1YTaExo4"
  },
  {
    title: "🎓 Student Placement Predictor",
    description: "A ML-based app that predicts a student’s placement chances using academic and skill data.",
    technologies: "Python, Scikit-learn, Streamlit, Pandas, NumPy",
    github_link: "https://github.com/Chintala-Keerthana/Student-Placement-Prediction",
    live_link: "https://student-placement-prediction-chintala-keerthana-2026.streamlit.app/"
  },
  {
    title: "📦 Inventra — Intelligent Warehouse Inventory Management System",
    description: "A smart inventory management system that helps track, manage, and optimize stock levels in real time using data-driven insights.",
    technologies: "Java, SQL, Git, GitHub, Documentation & Testing",
    github_link: "https://github.com/Chintala-Keerthana/Inventra-Inventory-Management-System",
    live_link: ""
  }
];

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(fallbackProjects);
        }
      })
      .catch((err) => {
        console.warn("Backend not running or DB empty, using fallback projects:", err);
        setProjects(fallbackProjects);
      });
  }, []);

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, idx) => {
          let tags = [];
          if (Array.isArray(project.technologies)) {
            tags = project.technologies;
          } else if (typeof project.technologies === "string") {
            tags = project.technologies.split(",").map(t => t.trim());
          } else if (project.tags) {
            tags = project.tags;
          }

          return (
            <div className="project-card" key={project.id || idx} data-aos="zoom-in" data-aos-delay={idx * 150}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {tags.map((tag, tIdx) => (
                    <span className="tech-tag" key={tIdx}>{tag}</span>
                  ))}
                </div>
              </div>
              {(project.github_link || project.live_link) && (
                <div className="project-links">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <span className="link-icon">🐱</span> GitHub
                    </a>
                  )}
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      <span className="link-icon">
                        {project.live_link.includes("linkedin.com")
                          ? "💼"
                          : project.live_link.includes("streamlit.app")
                          ? "🚀"
                          : "🔗"}
                      </span>{" "}
                      {project.live_link.includes("linkedin.com")
                        ? "LinkedIn Post"
                        : project.live_link.includes("streamlit.app")
                        ? "Streamlit App"
                        : "Live Demo"}
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;