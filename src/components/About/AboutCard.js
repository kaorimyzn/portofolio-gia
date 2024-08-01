import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Agia Ardini </span>
             from <span className="purple"> Medan, Indonesia.</span>
            <br />
            A software developer specializing in PHP is an individual who designs, develops, and maintains web applications using PHP, a popular server-side scripting language.
            <br />
            This role involves writing efficient, secure, and scalable code to create dynamic web pages and applications.  A PHP developer is adept at troubleshooting, optimizing code performance, and staying updated with the latest industry trends and best practices.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listen to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Agrdn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
