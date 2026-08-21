import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Chintala Keerthana
        </h2>

        <button 
          className={`menu-toggle ${isOpen ? "open" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;