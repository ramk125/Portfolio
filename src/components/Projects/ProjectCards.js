import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view glass">
      <div className="card-img-wrapper" style={{ position: "relative", overflow: "hidden" }}>
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          className="project-image"
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="tech-stack-wrapper mb-2">
          {props.tech && props.tech.map((t, index) => (
            <span key={index} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "0.9rem" }}>
          {props.description}
        </Card.Text>
        
        <div className="mt-auto">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;