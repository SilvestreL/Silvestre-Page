import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    href: "/projects/kanban",
    imgSrc: "/images/kanban2.jpg",
    imgAlt: "Kanban Board",
    text: "Kanban Board",
  },
  {
    href: "/projects/clinicamedica",
    imgSrc: "/images/clinicamedica.jpg",
    imgAlt: "Clinica Médica",
    text: "Clinica Médica",
  },
  {
    href: "/projects/marketplace",
    imgSrc: "/images/markeplacecard.jpg",
    imgAlt: "Marketplace Project",
    text: "Marketplace Project",
  },

];

const Projects = () => {
  return (
    <Container className="mt-5">
      <h1 className={styles.subHeading}>Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Link href={project.href} legacyBehavior>
              <a className="text-decoration-none">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={project.imgSrc}
                    alt={project.imgAlt}
                  />
                  <Card.Body>
                    <Card.Text className="text-center">
                      {project.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
