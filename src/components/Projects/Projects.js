import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import E_Commerce from "../../Assets/Projects/e-commerce.png";
import real from "../../Assets/Projects/realestate.png";
import Art from "../../Assets/Projects/art.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E_Commerce}
              isBlog={false}
              title="Fashion E-Commerce Project"
              description="A fully functional real estate web application designed to provide seamless property listings and user interactions. 
              This project showcases my expertise in backend development, incorporating Spring Security and JWT for authentication, ensuring secure user management. 
              Additionally, I have implemented a complete backend for an e-commerce system with robust API integrations. 
              The frontend development is in progress, with the homepage completed and seller dashboard APIs fully integrated. 
              Explore my GitHub repository for the backend implementation."
              ghLink="https://github.com/olaWhales/whales_ecommerce.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Art}
              isBlog={false}
              title="HiBin Smart Waste Bin Application"
              description="HiBin is an innovative smart waste bin application that integrates hardware with software to enhance waste management efficiency. 
              This is a collaborative project involving backend, frontend, and hardware development, all actively in progress. 
              The system is designed to optimize waste collection and disposal through smart technology. 
              Explore the GitHub repository for backend implementation."
              ghLink="https://github.com/davidojo1144/Art-Work-Sale-System"
              // demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={E_Commerce}
              isBlog={false}
              title="E-Commerce Project"
              description="I just finished building my e-commerce website, and I’m really excited about how it turned out! It’s designed to make shopping easy and fun, with a sleek layout, user-friendly navigation, and secure checkout, all while showcasing some amazing products."
              demoLink="https://my-e-commerce-project-phi.vercel.app/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="I just wrapped up my latest project—a Spotify-inspired website that lets users effortlessly discover and stream music! I’m thrilled with how it captures that familiar vibe, complete with personalized playlists and sleek navigation that makes exploring new artists a breeze."
              ghLink="https://github.com/davidojo1144/My-Spotify-Project"
              demoLink="https://my-spotify-project-ten.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
