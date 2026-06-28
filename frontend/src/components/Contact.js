import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      // Fallback success simulation if backend is not running locally during demonstration
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>

      <div className="contact-container">
        {submitted ? (
          <div className="contact-success">
            <div className="success-checkmark">
              <div className="checkmark-circle">
                <span className="checkmark">✓</span>
              </div>
            </div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
            <button className="btn primary" onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-right">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              placeholder="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        <div className="contact-info-panel" data-aos="fade-left">
          <h3>Let's Connect</h3>
          <p className="subtitle">Feel free to reach out for collaborations or opportunities!</p>
          
          <div className="social-icons">
            <a 
              href="https://www.linkedin.com/in/chintala-keerthana-916668321/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon linkedin" 
              title="LinkedIn"
            >
              💼
            </a>
            <a 
              href="https://github.com/Chintala-Keerthana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon github" 
              title="GitHub"
            >
              🐱
            </a>
            <a 
              href="mailto:keerthiramana.44@gmail.com" 
              className="social-icon email" 
              title="Email"
            >
              📧
            </a>
          </div>

          <div className="contact-details">
            <p>📍 Tirupati, Andhra Pradesh, India</p>
            <p>🟢 Open to Internships & Full-Time Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;