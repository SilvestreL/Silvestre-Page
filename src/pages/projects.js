import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const projects = [
  {
    href: "/projects/kanbanboard",
    imgSrc: "/path/to/invision-studio-image.png",
    imgAlt: "Kanban Board",
    text: "Kanban Board",
  },
  {
    href: "/projects/triniso",
    imgSrc: "/path/to/triniso-image.png",
    imgAlt: "Clinica Médica",
    text: "Clinica Médica - Página para agendamento de consultas",
  },
  {
    href: "/projects/marketplace",
    imgSrc: "/300.png",
    imgAlt: "Marketplace Project",
    text: "Marketplace Project - Uma aplicação FullStack",
  },
  // Adicione mais projetos conforme necessário
];

const Projects = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Case Studies</h1>
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
