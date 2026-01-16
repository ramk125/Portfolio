
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/utilss.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/talent.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Text Utils"
              description="A web application built with React.js, Material-UI, and Firebase. It allows users to book, manage, and track appointments efficiently. Supports real-time updates, notifications, and appointment history. Designed to improve productivity and enhance user experience for clients and service providers."
              ghLink="https://github.com/ramk125/TextUtil-React"
              demoLink="https://ramk125.github.io/TextUtil-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Talent Tutorial"
              description="An educational web platform built with React.js, Bootstrap, and JavaScript.
Provides users with class-wise courses, extra learning materials, and study resources.
Includes profile management, interactive course sections, and responsive design.
Designed to enhance learning experience and make online education accessible and engaging."
              ghLink="https://github.com/ramk125/my-talent-tutorial"
              demoLink="https://ramk125.github.io/my-talent-tutorial/PracticeNew.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Real Time Chat Application"
              description="Built with Java, Swing, MySQL, and Socket Programming.
Allows users to register, login, and chat in real-time with friends.
Supports message broadcasting, private messaging, and user authentication.
Designed for smooth communication and a responsive messaging experience."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Restarunt Management System"
              description="A web application built with HTML, CSS, JavaScript, and MySQL.
Allows users to manage orders, menu items, and table reservations efficiently.
Supports billing, inventory tracking, and daily sales reports.
Designed to streamline restaurant operations and enhance customer service experience."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="College Management System"
              description="A complete web application built with PHP, MySQL, HTML, CSS, and Bootstrap.
Manages students, faculty, courses, attendance, and examinations efficiently.
Supports admin control, reporting, and academic workflow automation.
Designed to streamline college operations and enhance overall administrative efficiency."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"

              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="News Prime"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"  // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
