import { useEffect, useState } from "react";
import "./Projects.css";

const fallbackProjects = [
  {
    title: "📚 Library Management System",
    description:
      "A web-based Library Management System developed using Java, JSP, Servlets, Oracle Database, and Apache Tomcat for managing books, users, and library operations efficiently.",
    technologies:
      "Java, JSP, Servlets, JDBC, Oracle Database, HTML, CSS, Bootstrap Icons, Apache Tomcat",
    github_link:
      "https://github.com/Chintala-Keerthana/Library-Management-System",
    live_link:
      "https://www.linkedin.com/posts/chintala-keerthana-916668321_java-jsp-servlets-ugcPost-7475776298372521984-xgEA/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFFu-SIBihBX_NagXMzVqi29kWx1YTaExo4",
  },
  {
    title: "🎓 Student Placement Predictor",
    description:
      "A Machine Learning application that predicts a student's placement chances using academic and skill data.",
    technologies:
      "Python, Scikit-learn, Streamlit, Pandas, NumPy",
    github_link:
      "https://github.com/Chintala-Keerthana/Student-Placement-Prediction",
    live_link:
      "https://student-placement-prediction-chintala-keerthana-2026.streamlit.app/",
  },
  {
    title: "📦 Inventra — Intelligent Warehouse Inventory Management System",
    description:
      "A smart inventory management system that helps track, manage, and optimize stock levels using data-driven insights.",
    technologies:
      "Java, SQL, Git, GitHub, Documentation & Testing",
    github_link:
      "https://github.com/Chintala-Keerthana/Inventra-Inventory-Management-System",
    live_link: "",
  },
  {
    title: "✅ Task Management Web Application",
    description:
      "A full-stack Task Management application with secure JWT authentication, CRUD operations, search, filtering, priority management, dashboard statistics, and real-time updates using Socket.io.",
    technologies:
      "React.js, Vite, Node.js, Express.js, MySQL, JWT Authentication, Socket.io, HTML, CSS, JavaScript",
    github_link:
      "https://github.com/Chintala-Keerthana/Task-Management-Application",
    live_link:
      "https://keerthi-task-manager.vercel.app/",
  },
];

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(fallbackProjects);
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
            tags = project.technologies.split(",").map((t) => t.trim());
          } else if (project.tags) {
            tags = project.tags;
          }

          return (
            <div
              className="project-card"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {tags.map((tag, index) => (
                    <span className="tech-tag" key={index}>
                      {tag}
                    </span>
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
                      🐱 GitHub
                    </a>
                  )}

                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      {project.live_link.includes("linkedin.com")
                        ? "💼 LinkedIn Post"
                        : project.live_link.includes("streamlit.app")
                        ? "🚀 Streamlit App"
                        : "🔗 Live Demo"}
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