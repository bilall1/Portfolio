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
              I'm a Full-Stack Software Engineer based in Germany, passionate
              about building scalable web applications and integrating
              AI-powered features into real products.
              <br />
              <br />
              I work comfortably across the full stack,
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Golang, and Python{" "}
                </b>
              </i>
              on the backend, with
              <i>
                <b className="purple"> React and Next.js </b>
              </i>
              on the frontend, and PostgreSQL and vector databases for data.
              <br />
              <br />
              I've shipped production SaaS platforms end-to-end, from system
              architecture and API design to deployment and keeping things
              running live.
              <br />
              <br />
              Lately I've been focused on building intelligent features using
              <b className="purple"> semantic search</b>,
              <b className="purple"> embeddings</b>, and
              <b className="purple"> large language model integrations</b>,
              things that actually add value rather than just looking impressive
              in a demo.
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