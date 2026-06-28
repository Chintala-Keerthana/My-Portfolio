-- ========================================================
-- Database Schema for Thiranex Portfolio Project
-- ========================================================

-- 1. Create Database if not exists
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- 2. Create Projects Table
DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    github_link VARCHAR(255) DEFAULT '',
    live_link VARCHAR(255) DEFAULT '',
    technologies VARCHAR(255) NOT NULL
);

-- 3. Create Contacts Table
DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Clear existing projects before inserting seed data
TRUNCATE TABLE projects;

-- 5. Insert Initial Seed Data for Projects
INSERT INTO projects (title, description, github_link, live_link, technologies) VALUES
('📚 Library Management System', 'A web-based Library Management System developed using Java, JSP, Servlets, Oracle Database, and Apache Tomcat for managing books, users, and library operations efficiently.', 'https://github.com/Chintala-Keerthana/Library-Management-System', 'https://www.linkedin.com/posts/chintala-keerthana-916668321_java-jsp-servlets-ugcPost-7475776298372521984-xgEA/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFFu-SIBihBX_NagXMzVqi29kWx1YTaExo4', 'Java, JSP, Servlets, JDBC, Oracle Database, HTML, CSS, Bootstrap Icons, Apache Tomcat'),
('🎓 Student Placement Predictor', 'A ML-based app that predicts a student’s placement chances using academic and skill data.', 'https://github.com/Chintala-Keerthana/Student-Placement-Prediction', 'https://student-placement-prediction-chintala-keerthana-2026.streamlit.app/', 'Python, Scikit-learn, Streamlit, Pandas, NumPy'),
('📦 Inventra — Intelligent Warehouse Inventory Management System', 'A smart inventory management system that helps track, manage, and optimize stock levels in real time using data-driven insights.', 'https://github.com/Chintala-Keerthana/Inventra-Inventory-Management-System', '', 'Java, SQL, Git, GitHub, Documentation & Testing');

-- ========================================================
-- End of Schema File
-- ========================================================
