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
        "Developed and maintained full-stack web applications, improving user satisfaction by 25%.",
        "Built scalable frontend and backend features with focus on performance and clean architecture.",
        "Integrated AI-powered features, including OpenAI-based chatbots and RAG pipelines for context-aware responses.",
      ],
    },
    {
      company: "Aurora Solutions",
      role: "Software Engineer",
      location: "Sweden",
      period: "July 2023 — April 2025",
      points: [
        "Developed full-stack features by designing APIs, integrating databases, and building user-facing components to improve system efficiency.",
        "Optimized end-to-end application performance to support 20% more concurrent users under peak load.",
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
