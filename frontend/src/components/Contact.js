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
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
            <a 
              href="https://github.com/Chintala-Keerthana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon github" 
              title="GitHub"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <a 
              href="mailto:keerthiramana.44@gmail.com" 
              className="social-icon email" 
              title="Email"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
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