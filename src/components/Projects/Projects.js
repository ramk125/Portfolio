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
      imgPath: chatify,
      title: "Text Utils",
      description: "A web application built with React.js, Material-UI, and Firebase. It allows users to manage text efficiently.",
      ghLink: "https://github.com/ramk125/TextUtil-React",
      demoLink: "https://ramk125.github.io/TextUtil-React",
      tech: ["React", "Material-UI", "Firebase"],
      isLarge: true, // Bento "md:col-span-8" logic
    },
    {
      imgPath: bitsOfCode,
      title: "Talent Tutorial",
      description: "An educational platform providing class-wise courses and study resources.",
      ghLink: "https://github.com/ramk125/my-talent-tutorial",
      demoLink: "https://ramk125.github.io/my-talent-tutorial/PracticeNew.html",
      tech: ["React", "Bootstrap"],
      isLarge: false,
    },
    {
      imgPath: editor,
      title: "Real Time Chat",
      description: "Built with Java and Socket Programming for real-time communication.",
      ghLink: "https://github.com/soumyajit4419/Editor.io",
      demoLink: "https://editor.soumya-jit.tech/",
      tech: ["Java", "MySQL", "Sockets"],
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