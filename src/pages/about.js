import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Container className="text-center">
        <Row className="justify-content-center mb-5">
          <Col md={12}>
            <h2 className={styles.few}>A Few Words About Me</h2>
            <h1 className={styles.title}>
              I'm Lucas Silvestre, a Project Manager T.I and FullStack
              Developer. I am extremely curious and fascinated by learning new
              things. My communication skills, problem-solving abilities, and
              relentless quest for knowledge make me a unique professional.
            </h1>
            <p className={styles.description}>
              Over the last 3 years I have been training in the areas of project
              management and full stack development...In my free time I like
              photography and playing different sports.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-left mb-5">
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
                  src="images/lucas.jpg"
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
        <Row className={styles.services + " mb-5"}>
          <Col md={6}>
            <h5> Services</h5>
            <p>Product Manager / Full-Stack Developer / System Analyst</p>
          </Col>
          <Col md={6}>
            <h5>Tools I Use</h5>
            <p>
              JavaScript / Python / ReactJS / NodeJS / Bootstrap / NextJS /
              Databases
            </p>
          </Col>
        </Row>
        <h3 className={styles.faqTitle}>Usual Questions</h3>
        <Row className="mb-5">
          <Col md={6}>
            <details className={styles.details}>
              <summary>Tecnical Courses</summary>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              libero, culpa ea laboriosam ullam iure qui ipsam rerum labore,
              temporibus tenetur, quo sequi veritatis eos ad in odio magnam
              exercitationem?
            </details>
          </Col>
          <Col md={6}>
            <details className={styles.details}>
              <summary>Títulos Academicos</summary>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              voluptas, commodi repellendus placeat molestiae provident ullam
              tenetur! Neque, perspiciatis mollitia? Quibusdam quasi voluptatum
              alias, minus est atque dolorum illum eveniet!
            </details>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <details className={styles.details}>
              <summary>Work Experience</summary>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              libero, culpa ea laboriosam ullam iure qui ipsam rerum labore,
              temporibus tenetur, quo sequi veritatis eos ad in odio magnam
              exercitationem?
            </details>
          </Col>
          <Col md={6}>
            <details className={styles.details}>
              <summary>Certifications</summary>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              voluptas, commodi repellendus placeat molestiae provident ullam
              tenetur! Neque, perspiciatis mollitia? Quibusdam quasi voluptatum
              alias, minus est atque dolorum illum eveniet!
            </details>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
