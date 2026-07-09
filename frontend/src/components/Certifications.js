import "./Certifications.css";

const certifications = [
  {
    title: "Web Development Internship",
    issuer: "TopperRank",
    year: "2025",
  },
  {
    title: "Infosys Springboard Internship 6.0",
    issuer: "Infosys Springboard",
    year: "2025 - 2026",
  },
  {
    title: "Web Development Virtual Internship",
    issuer: "Thiranex",
    year: "2026 (Ongoing)",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications"
      data-aos="fade-up"
    >
      <div className="certifications-section-header">
  <h2>Certifications & Internships</h2>
</div>

<div className="certifications-grid">
  {certifications.map((cert, index) => (
    <div className="certification-card" key={index}>
      <h3>{cert.title}</h3>
      <p>{cert.issuer}</p>
      <span className="certificate-date">{cert.year}</span>
    </div>
  ))}
</div>
    </section>
  );
}

export default Certifications;