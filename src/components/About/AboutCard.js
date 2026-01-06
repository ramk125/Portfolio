import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ram Kumar</span>{" "}
            from <span className="purple">Araria, Bihar, India</span>.
            <br />
            I’m currently pursuing my {" "}
            <span className="purple">Master of Computer Applications (MCA)</span> at{" "}
            <span className="purple">Lovely Professional University</span>.
            <br />I hold a Bechlor of Computer Applications (BCA)
            <span className="purple"></span> from{" "}
            <span className="purple">Bhupendra Narayan Mandal University</span>.
            <br />
            <br />
            Outside of my academic, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Puzzle solving 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> DSA & LeetCode Challenges ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Emerging Technologies 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ram Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
