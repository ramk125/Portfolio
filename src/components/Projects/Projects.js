import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your assets here
import chatify from "../../Assets/Projects/utilss.png";
import bitsOfCode from "../../Assets/Projects/talent.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const projectData = [
    {
      imgPath: bitsOfCode,
      title: "Talent Tutorial",
      description: "Developed Talent Tutorial, an educational platform designed to organize and deliver structured learning content efficiently. Implemented using modern web technologies with an emphasis on usability and structured content delivery.",
      ghLink: "https://github.com/ramk125/my-talent-tutorial",
      demoLink: "https://ramk125.github.io/my-talent-tutorial/PracticeNew.html",
      tech: ["HTML","CSS","JavaScript","Bootstrap","React"],
      isLarge: true, // Bento "md:col-span-8" logic
    },
    {
      imgPath: chatify,
      title: "Text Utils",
      description: "Implemented multiple text operations such as uppercase/lowercase conversion, trimming spaces, and character/word count. Added real-time text analysis including reading time estimation and text statistics. Structured the project using reusable components and clean code practices. Focused on accessibility and readability for better user interaction.",
      ghLink: "https://github.com/ramk125/TextUtil-React",
      demoLink: "https://ramk125.github.io/TextUtil-React",
      tech: ["React","JavaScript", "Bootstrap"],
      isLarge: false,
    },
    {
      imgPath: editor,
      title: "Real-Time Chat Application",
      description: "Developed a Real-Time Chat Application enabling instant messaging with user authentication and message broadcasting. Built using Java, Swing, Sockets, and MySQL, focusing on real-time communication and secure data handling. Applied multithreading to handle multiple clients simultaneously without performance issues.",
      ghLink: "https://github.com/ramk125?tab=repositories",
      demoLink: "https://github.com/ramk125?tab=repositories",
      tech: ["Java", "MySQL", "Sockets","JDBC"],
      isLarge: false,
    },
    {
      imgPath: leaf,
      title: "Restaurant System",
      description: "Manage orders, menu items, and table reservations efficiently.",
      ghLink: "https://github.com/soumyajit4419/Plant_AI",
      demoLink: "https://plant49-ai.herokuapp.com/",
      tech: ["HTML", "JS", "MySQL"],
      isLarge: true,
    }
  ];

  const filteredProjects = projectData.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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

        {/* Search Box from original Bento Design */}
        <div className="glass search-wrapper mb-5 p-3 rounded-4">
          <Form.Control
            type="text"
            placeholder="Filter by tech (e.g. React)..."
            className="bg-transparent text-white border-secondary"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col 
              key={index}
              md={project.isLarge ? 8 : 4} 
              className="project-card mb-4"
            >
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                tech={project.tech}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;