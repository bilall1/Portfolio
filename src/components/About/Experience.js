import React from "react";
import { Row, Col } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      company: "Pixel-Square",
      role: "Software Developer",
      location: "Germany",
      period: "June 2025 — Present",
      points: [
        "Joined as an early engineer at a German software startup, taking end-to-end ownership across multiple client products, independently handling system architecture, full-stack development, deployment, and live production operations.",
        "Architected and built Schul.software, a multi-tenant SaaS platform for German schools, with strict data isolation, per-school subdomain routing, and role-based access control across admin, teacher, parent, and student portals.",
        "Designed a timetable engine with automated conflict resolution, teacher availability management, and substitute tracking, eliminating manual scheduling overhead for school administrators.",
        "Architected a multi-vendor marketplace with Stripe Connect for automated vendor payouts, platform commission splits, and end-to-end order reconciliation across multiple vendors.",
        "Built an AI-powered ticket generation tool using semantic search and Mistral AI embeddings, enabling development tickets to be auto-generated from natural language grounded in project history.",
        "Configured CI/CD pipelines via GitHub Actions and managed DNS, SSL certificates, and subdomain routing via Cloudflare, ensuring zero-downtime availability for live clients.",
      ],
    },
    {
      company: "Aurora Solutions",
      role: "Software Engineer",
      location: "Sweden",
      period: "July 2023 — April 2025",
      points: [
        "Led frontend engineering within an agile team building consumer-facing web platforms, contributing across the full stack on REST API integration, database queries, and end-to-end feature delivery from design to release.",
        "Built accessible and responsive UI components in Next.js and Tailwind CSS for Cell Operative, implementing real-time bidirectional communication using WebSockets and authentication via NextAuth.js.",
        "Improved Golang backend performance for scalability and reliability, contributing to REST API design and frontend-backend integration under beta traffic.",
        "Improved application reliability and performance through database query optimization, caching strategies, and load testing.",
      ],
    },
    {
      company: "ZUNTECH",
      role: "React Developer Intern",
      location: "Pakistan",
      period: "Feb 2023 — Jun 2023",
      points: [
        "Built and maintained responsive React.js UI components using Tailwind CSS, contributing to production-ready features across the development lifecycle.",
        "Translated Figma design mockups for Al-Shifa Hospital into pixel-perfect, responsive React components, ensuring cross-browser compatibility and mobile responsiveness.",
        "Collaborated with senior developers through code reviews, gaining hands-on experience with component architecture, state management, and agile workflows.",
      ],
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col md={10}>
        {experiences.map((exp, index) => (
          <div key={index} className="resume" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <div className="resume-item">
              <h4 style={{ color: "#c770f0", fontWeight: 600 }}>
                {exp.company}
              </h4>
              <p style={{ fontStyle: "italic", marginBottom: "4px" }}>
                {exp.role} &nbsp;|&nbsp; {exp.location}
              </p>
              <p style={{ color: "#a588c0", fontSize: "0.9em", marginBottom: "10px" }}>
                {exp.period}
              </p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default Experience;