import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.lineContainer}></div>
      <Container>
        <Row>
          <Col md={4}>
            <h5 className={styles.heading}>Contact information —</h5>
            <p className={styles.mainText}>
              Feel free to reach out to me any time. I prefer to talk over
              email, especially since we may be a few time zones away.
            </p>
            <p className={`${styles.mainText} ${styles.contactText}`}>
              E:{" "}
              <a href="mailto:lucassilvestreadv@gmail.com">
                lucassilvestreadv@gmail.com
              </a>
              <br />
              P: <a href="tel:+5582996057758">+55 82 99605-7758</a>
            </p>
          </Col>
          <Col md={3}>
            <h5 className={styles.heading}>Latest projects —</h5>
            <ul className={styles.projectList}>
              <li>
                <Link href="/projects/marketplace" passHref legacyBehavior>
                  <a className={styles.projectLink}>MarketPlace</a>
                </Link>
              </li>
              <li>
                <Link href="/projects/clinica-medica" passHref legacyBehavior>
                  <a className={styles.projectLink}>Clinica Medica</a>
                </Link>
              </li>
              <li>
                <Link href="/projects/concessionaria" passHref legacyBehavior>
                  <a className={styles.projectLink}>Consessionária</a>
                </Link>
              </li>
              <li>
                <Link href="/projects/kanban-board" passHref legacyBehavior>
                  <a className={styles.projectLink}>Kanban Board</a>
                </Link>
              </li>
              <li>
                <Link href="/projects/secret-word" passHref legacyBehavior>
                  <a className={styles.projectLink}>SecrectWord</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className={styles.heading}>Current availability —</h5>
            <p className={styles.mainText}>
              I usually work on several projects but I’ll be happy to discuss
              new opportunities. Let’s get in touch!
            </p>
          </Col>
          <Col md={2}>
            <h5 className={styles.heading}>Follow me on —</h5>
            <ul className={styles.projectList}>
              <li>
                <a
                  href="https://github.com/SilvestreL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mainText}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lucassilvestrem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mainText}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/lucassilvestreee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mainText}
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
              © 2024 - Lucas Silvestre. Made with{" "}
              <span className={styles.heart}></span> in Maceió, Brazil.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
