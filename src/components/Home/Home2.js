import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImgs from "../../Assets/my_image.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
          My journey into programming started with curiosity, and over time, it has grown into a deep passion for building efficient and scalable solutions.
          <br />
          <br />"I primarily work with"
          <i>
            <b className="purple"> Java</b>
          </i>
          <br />
            
          with some experience <b className="purple"> JavaScript and Python.</b>
          <br />
          My primary focus is on designing and developing robust
          <i>
            <b className="purple"> web technologies and backend systems. </b>
          </i>
          <br />
          <br />
          I am passionate about creating high-performance applications, and I frequently work with 
          <b className="purple"> Node.js, Java</b>, and 
          <i>
            <b className="purple">
              {" "}
              modern JavaScript/TypeScript frameworks 
            </b>
          </i>
          such as 
          <i>
            <b className="purple"> React.js, Next.js and Flutter.</b>
          </i>
        </p>
      </Col>
      <Col md={4} className="myAvtar">
        <Tilt>
          <img src={myImgs} className="img-fluid" alt="avatar" />
        </Tilt>
      </Col>
    </Row>
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me.
        </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/olaWhales"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/taoreed-olawale-3410b71b1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/holar_whales/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/taoreed.olawale"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>

            </ul>
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
