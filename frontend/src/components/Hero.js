import { useState, useEffect } from "react";
import "./Hero.css";

const words = ["Full Stack Developer", "Problem Solver"];

function Hero() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 30 : 80;

    const handleTyping = () => {
      const currentFullWord = words[currentWordIdx];

      if (!isDeleting) {
        setDisplayedText(currentFullWord.substring(0, displayedText.length + 1));

        if (displayedText === currentFullWord) {
          // Pause at the end of typing
          setTimeout(() => setIsDeleting(true), 1600);
          return;
        }
      } else {
        setDisplayedText(currentFullWord.substring(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIdx]);

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-right">
          <h1>Hello, I'm <span className="text-gradient">Chintala Keerthana</span> 👋</h1>
          
          <h3 className="tagline">
            <span className="typed-text">{displayedText}</span>
            <span className="typewriter-cursor">|</span>
          </h3>
          
          <p>
            Passionate about building clean, responsive, and scalable web applications
            using React, Node.js, Express, and MySQL. I enjoy turning ideas into
            functional, user-friendly solutions while continuously learning modern
            technologies and industry best practices.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a 
              href="https://drive.google.com/file/d/1lFA1oaw-srI1ssdULIww4eONMZIx_cvR/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn secondary"
            >
              📄 View Resume
            </a>
            <a href="#contact" className="btn tertiary">Contact Me</a>
          </div>
        </div>

        <div className="hero-avatar-wrapper" data-aos="fade-left">
          <div className="avatar-glowing-circle"></div>
          <div className="avatar-img-container">
            <img src="/prolife.jpeg" alt="Chintala Keerthana" className="avatar-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;