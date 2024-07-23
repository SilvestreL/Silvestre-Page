import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Container className={`text-center ${styles.container}`}>
        <Row className="mb-5">
          <Col md={12} className="justify-content-center">
            <h2 className={styles.few}>A Few Words About Me</h2>
            <h1 className={styles.title}>
              I'm Lucas Silvestre, a Project Manager T.I and FullStack
              Developer. I am extremely curious and fascinated by learning new
              things. My communication skills, problem-solving abilities, and
              relentless quest for knowledge make me a unique professional.
            </h1>
            <p className={styles.description}>
              Over the last 3 years I have been training in the areas of project
              management and full stack development. In my free time I like
              photography and playing different sports.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Col md={7}>
            <Carousel className={styles.carousel}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/palestra.jpg"
                  alt="Primeiro Slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/lucas.jpg"
                  alt="Segundo Slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/mcz.jpg"
                  alt="Terceiro Slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className={`${styles.services} mb-5`}>
          <Col md={6}>
            <h5 className={styles.few}>Services</h5>
            <p className={styles.titleTools}>
              <span>Product Manager</span>
              <span>/</span>
              <span>Full-Stack Developer</span>
              <span>/</span>
              <span>System Analyst</span>
            </p>
          </Col>
          <Col md={6}>
            <h5 className={styles.few}>Tools I Use</h5>
            <p className={styles.titleTools}>
              <span>JavaScript</span>
              <span>/</span>
              <span>Python</span>
              <span>/</span>
              <span>ReactJS</span>
              <span>/</span>
              <span>NodeJS</span>
              <span>/</span>
              <span>Bootstrap</span>
              <span>/</span>
              <span>NextJS</span>
              <span>/</span>
              <span>Databases</span>
            </p>
          </Col>
        </Row>
        <h3 className={styles.few2}>Usual Questions</h3>
        <Row className="mb-5">
          <Col md={6}>
            <details className={styles.details}>
              <summary className={styles.summary}>Academic Background</summary>
              <ul className={styles["styled-list"]}>
                <li>Information Systems (2023 - 2027) - Cesmac/AL</li>
                <li>Law (2011 - 2016) - Unit/AL</li>
                <li>
                  Postgraduate in Administrative and Constitutional Law (2017 -
                  2019)
                </li>
              </ul>
            </details>
          </Col>
          <Col md={6}>
            <details className={styles.details}>
              <summary className={styles.summary}>Titles</summary>
              <ul className={styles["styled-list"]}>
                <li>
                  Member of the Innovation and Legal Technology and Data
                  Protection Commission
                </li>
              </ul>
            </details>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <details className={styles.details}>
              <summary className={styles.summary}>Work Experience</summary>
              <ul className={styles["styled-list"]}>
                <li>System Analyst / Project Manager T.I (2023 - 2024)</li>
                <li>Full Stack Developer - Freelancer (2022 - 2024)</li>
                <li>
                  Technical Advisor for Special and Judicial Purchases (2020 -
                  2023)
                </li>
                <li>Lawyer (2016 - 2024)</li>
              </ul>
            </details>
          </Col>
          <Col md={6}>
            <details className={styles.details}>
              <summary className={styles.summary}>Certifications</summary>
              <ul className={styles["styled-list"]}>
                <li>Agile Project Management with SCRUM</li>
                <li>ITIL 4 Certification</li>
                <li>HTML and CSS</li>
                <li>Project Planning and Management</li>
                <li>
                  React from Basics to Advanced (with hooks, router, API,
                  Projects)
                </li>
                <li>ITIL 4 / React / Docker / Project Manager</li>
              </ul>
            </details>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
