import React, { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/About.module.css";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      src: "/images/treinamento1.jpg",
      alt: "First Slide",
      title: "Business",
      description: "giving a business training session.",
    },
    {
      src: "/images/cachoeira.jpg",
      alt: "Second Slide",
      title: "Waterfall",
      description:
        "enjoying a refreshing moment at the waterfall.",
    },
    {
      src: "/images/american.jpg",
      alt: "Third Slide",
      title: "American Crime",
      description: "at Atleta of American Crime event.",
    },
    {
      src: "/images/futvolei.jpg",
      alt: "Fourth Slide",
      title: "Beach Soccer",
      description:
        "Participating in a futvolei tournament.",
    },
    {
      src: "/images/jiu.jpg",
      alt: "Fifth Slide",
      title: "Jiu-Jitsu",
      description: "Jiu-Jitsu competition.",
    },
    {
      src: "/images/treinamento1.jpg",
      alt: "Sixth Slide",
      title: "Training",
      description: " during a training session.",
    },
  ];

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className={styles.about}>
      <Container className={styles.container}>
        <Row className="mb-5">
          <Col>
            <h2 className={styles.few}>A Few Words About Me</h2>
            <h1 className={styles.title}>
              Hello, my name is Lucas Silvestre. An extremely curious person and
              fascinated with learning new things. I like to add value to
              people's lives with my technology skills. I believe that this
              tireless search for knowledge makes me a unique professional.
            </h1>
            <p className={styles.description}>
              Over the last 3 years I have been training in the areas of project
              management and full stack development. In my free time I like
              photography and playing different sports. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Delectus voluptates consectetur
            </p>
          </Col>
        </Row>
        <Row className="justify-content-left mb-5">
          <Col md={8}>
            <Carousel
              className={styles.carousel}
              activeIndex={activeIndex}
              onSelect={handleSelect}
            >
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={item.src}
                    alt={item.alt}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={4} className={styles.carouselText}>
            <div className={styles.textContent}>
              <h3>{carouselItems[activeIndex].title}</h3>
              <p>{carouselItems[activeIndex].description}</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.services}>
          <Col md={6}>
            <h5 className={styles.few}>Services</h5>
            <p className={styles.titleTools}>
              <span> Product Manager</span>
              <span> / </span>
              <span> Full-Stack Developer </span>
              <span> / </span>
              <span> System Analyst </span>
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
