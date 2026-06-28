import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600); // 1.6s splash screen
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;