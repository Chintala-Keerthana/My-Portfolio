import { useEffect, useState } from "react";
import "./Projects.css";

const fallbackProjects = [
  {
    title: "📚 Library Management System",
    description:
      "A web-based Library Management System with admin authentication, CRUD operations, and efficient book management. The application uses Java, JSP, Servlets, JDBC, Oracle Database, and Apache Tomcat for reliable backend functionality and deployment.",
    technologies:
      "Java, JSP, Servlets, JDBC, Oracle Database, HTML, CSS, Bootstrap, Apache Tomcat",
    github_link:
      "https://github.com/Chintala-Keerthana/Library-Management-System",
    live_link:
      "https://www.linkedin.com/posts/chintala-keerthana-916668321_java-jsp-servlets-ugcPost-7475776298372521984-xgEA/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFFu-SIBihBX_NagXMzVqi29kWx1YTaExo4",
  },

  {
    title: "🎓 Student Placement Predictor",
    description:
      "A Machine Learning web application that predicts student placement outcomes based on academic and relevant student features. It includes data preprocessing, model training, prediction, and an interactive dashboard for real-time placement probability analysis.",
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
      "An intelligent warehouse inventory management system developed during Infosys Internship 6.0 to help track, manage, and monitor inventory efficiently. The project involved application development, testing, documentation, and troubleshooting.",
    technologies:
      "Java, SQL, Git, GitHub, Documentation & Testing",
    github_link:
      "https://github.com/Chintala-Keerthana/Inventra-Inventory-Management-System",
    live_link: "",
  },

  {
    title: "✅ Task Management Web Application",
    description:
      "A full-stack Task Management application with secure JWT authentication, CRUD operations, task prioritization, search, filtering, dashboard statistics, and real-time updates using Socket.io.",
    technologies:
      "React.js, Vite, Node.js, Express.js, MySQL, JWT Authentication, Socket.io, HTML, CSS, JavaScript",
    github_link:
      "https://github.com/Chintala-Keerthana/Task-Management-Application",
    live_link:
      "https://keerthi-task-manager.vercel.app/",
  },

  {
    title: "🛒 E-Commerce Web Application",
    description:
      "A modern full-stack e-commerce platform featuring secure user authentication, product management, shopping cart, wishlist, checkout, and responsive user interfaces.",
    technologies:
      "React.js, Vite, Node.js, Express.js, MySQL, JWT Authentication, HTML, CSS, JavaScript",
    github_link:
      "https://github.com/Chintala-Keerthana/E-Commerce-Web-Application",
    live_link:
      "https://thiran-shop.vercel.app/shop",
  },

  {
    title: "📝 Blog Platform",
    description:
      "A full-stack blogging platform where users can register, log in, create, edit, and delete blog posts using JWT authentication. The application also includes comments, responsive UI, and secure REST APIs.",
    technologies:
      "React.js, Vite, Node.js, Express.js, MySQL, JWT Authentication, HTML, CSS, JavaScript",
    github_link:
      "https://github.com/Chintala-Keerthana/Blog-Platform",
    live_link: "",
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
            tags = project.technologies
              .split(",")
              .map((t) => t.trim());
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