import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import containerImg from "../../Assets/container_platform.png";
import aiBuddyImg from "../../Assets/ai_buddy.png";
import cellImg from "../../Assets/cell.png";
import stakaterImg from "../../Assets/stakater.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={containerImg}
              isBlog={false}
              title="Containerentsorgung Marketplace"
              description="Multi-vendor marketplace with role-based access, location-based service zones, dynamic shipping rules, and Stripe Connect for automated vendor payouts and platform commissions. Built with Next.js, Node.js, TypeScript, PostgreSQL, and Docker."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiBuddyImg}
              isBlog={false}
              title="AI Buddy - Ticket Generation"
              description="AI-powered system using RAG and pgvector for semantic search and context-aware ticket generation. Features secure authentication with role-based access control, and Mistral AI embeddings to auto-generate development tickets from natural language."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cellImg}
              isBlog={false}
              title="Cell Operative"
              description="Full-stack application built with Next.js and Golang, featuring authentication, authorization, and real-time communication using NextAuth.js and WebSockets. Responsive UI built with Tailwind CSS, deployed with Docker on AWS."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stakaterImg}
              isBlog={false}
              title="Stakater Cloud Chatbot"
              description="AI-powered chatbot using OpenAI GPT models for intelligent conversational interactions. Implements embeddings and cosine similarity for context-aware responses, with chat history management and prompt optimization for improved accuracy."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
