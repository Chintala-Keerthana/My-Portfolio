import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© 2026 Chintala Keerthana. All rights reserved.</p>
        
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/chintala-keerthana-916668321/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            LinkedIn
          </a>
          <span className="divider">•</span>
          <a href="https://github.com/Chintala-Keerthana" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            GitHub
          </a>
          <span className="divider">•</span>
          <a href="mailto:keerthiramana.44@gmail.com" className="footer-social-link">
            Email
          </a>
        </div>

        <p className="built-with">
         Built with <span className="tech-tag-mini react">React ⚛️</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;