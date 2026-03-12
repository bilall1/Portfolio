import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Full-Stack Software Engineer passionate about building
              scalable, high-performance web applications and integrating
              AI-powered solutions into real-world products.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Golang, and Python{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Web Applications, AI-Powered Features,{" "}
                </b>
              </i>
              and building RAG pipelines and intelligent chatbots.
              <br />
              <br />
              I love building projects with
              <b className="purple"> Node.js</b>,{" "}
              <b className="purple">Next.js</b>, and modern frameworks like{" "}
              <i>
                <b className="purple">React</b> and{" "}
                <b className="purple">Express.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
