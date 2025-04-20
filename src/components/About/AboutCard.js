import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, Myself <span className="purple">Nilesh Rawat </span>
            from <span className="purple"> Faridabad, India.</span>
            <br />
            I am currently employed as a Project Delivery Associate at <span className="purple">Cognizant.</span>
            <br />
            In Cognizant, I am working for <span className="purple">Wells Fargo</span> as a Software Engineer 3.
            <br />
            I have completed Bechlors of Technology (B.Tech) in Computer Science at Lingayas GVKS University Affiliated by Maharshi Dayanand University(MDU).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every algorithm crafted with care is a step toward a smarter world!"{" "}
          </p>
          <footer className="blockquote-footer">Nilesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
