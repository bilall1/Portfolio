import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
            Hi everyone! I'm <span className="purple">Muhammad Bilal</span>{" "}
            from <span className="purple">Passau, Germany</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Pixel-Square</span>, Germany.
            <br />
            I'm pursuing my M.Sc. in{" "}
            <span className="purple">Computer Science</span> at the{" "}
            <span className="purple">University of Passau</span>, Germany.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI-Powered Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning German
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bilal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
