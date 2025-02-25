import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Ajadi Taoreed Olawale </span>
  from <span className="purple">Lagos, Nigeria.</span>
  <br />
  My journey started in the field of Biology, where I earned my degree from the University of Lagos. However, my passion for problem-solving and innovation led me to transition into the tech industry.
  <br />
  I pursued software engineering at Semicolon, where I honed my skills in building scalable and efficient applications.
  <br />
  <br />
  Beyond coding, I enjoy engaging in other activities that fuel my creativity and curiosity!
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li> 
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with love ones.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference and impactful!"{" "}
          </p>
          <footer className="blockquote-footer">@whales</footer>
          <button style={{padding: "10px 20px", background: "purple", color: "white", border: "none", borderRadius: "5px", cursor: "pointer"}}>
            <a style={{color: "white"}} href="https://docs.google.com/document/d/1dEqSWD-BzVKjc-KEWkEksdswycMW1JVZq2UZJIuhYBg/edit?usp=sharing" target="_blank">View Resume</a>
          </button>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
