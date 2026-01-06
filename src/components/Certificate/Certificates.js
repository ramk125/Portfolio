import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle"; 
import cert1 from "../../Assets/IBM.jpg";
import cert2 from "../../Assets/java.jpg";
import cert3 from "../../Assets/cert3.png";

function Certificates() {
  return (
    <Container fluid className="certificate-section" id="certificates">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card className="certificate-card">
              <Card.Img variant="top" src={cert1} />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Completed full-stack web development certification.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="certificate-card">
              <Card.Img variant="top" src={cert2} />
              <Card.Body>
                <Card.Title>Java Programming</Card.Title>
                <Card.Text>
                  Core Java & OOP concepts certification.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="certificate-card">
              <Card.Img variant="top" src={cert3} />
              <Card.Body>
                <Card.Title>Data Structures</Card.Title>
                <Card.Text>
                  DSA concepts & problem-solving certification.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
