import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUHAMMAD BILAL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container id="contact">
        <Row style={{ paddingTop: "50px", paddingBottom: "40px" }}>
          <Col md={12} className="home-about-social">
            <h1>Contact <span className="purple">Details</span></h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "20px", color: "white" }}>
          <Col md={4} style={{ textAlign: "center", paddingBottom: "20px" }}>
            <MdPhone style={{ fontSize: "1.6em", color: "#c770f0", marginBottom: "8px" }} />
            <h5>
              <a href="tel:+491709074806" style={{ color: "white", textDecoration: "none" }}>
                +49-170-9074806
              </a>
            </h5>
          </Col>
          <Col md={4} style={{ textAlign: "center", paddingBottom: "20px" }}>
            <MdEmail style={{ fontSize: "1.6em", color: "#c770f0", marginBottom: "8px" }} />
            <h5>
              <a href="mailto:m.bilal8232@gmail.com" style={{ color: "white", textDecoration: "none" }}>
                m.bilal8232@gmail.com
              </a>
            </h5>
          </Col>
          <Col md={4} style={{ textAlign: "center", paddingBottom: "20px" }}>
            <MdLocationOn style={{ fontSize: "1.6em", color: "#c770f0", marginBottom: "8px" }} />
            <h5>Passau, Germany</h5>
          </Col>
        </Row>
        <Row style={{ paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bilall1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mbilal19/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
