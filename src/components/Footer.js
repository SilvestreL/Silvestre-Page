import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.lineContainer}></div> 
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <h5>Contact information —</h5>
            <p>
              Feel free to reach out to me any time. I prefer to talk over
              email, especially since we may be a few time zones away.
            </p>
            <p className="align-text-top">
              E:{" "}
              <a href="mailto:lucassilvestreadv@gmail.com">
                lucassilvestreadv@gmail.com
              </a>
              <br />
              P: <a href="tel:+5582996057758">+55 82 99605-7758</a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <h5>Latest projects —</h5>
            <ul className="list-unstyled">
              <li>MarketPlace</li>
              <li>Clinica Medica</li>
              <li>Consessionária</li>
              <li>Kanban Board</li>
              <li>SecrectWord</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Current availability —</h5>
            <p>
              I usually work on several projects but I’ll be happy to discuss
              new opportunities. Let’s get in touch!
            </p>
          </Col>
          <Col md={3}>
            <h5>Follow me on —</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/SilvestreL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lucassilvestrem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/lucassilvestreee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className={styles.footerText}>
              © 2021 — 2024 Lucas Silvestre. Made with{" "}
              <span className={styles.heart}></span> in Maceió, Brasil.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
