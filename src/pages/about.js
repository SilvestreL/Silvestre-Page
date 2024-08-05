import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/About.module.css";

const About = () => {
  const cards = [
    {
      imgSrc: "/images/futvolei.jpg",
      title: "Footvolley",
      text: "Competition and sport have always been present.",
    },
    {
      imgSrc: "/images/jiu.jpg",
      title: "Jiu Jitsu",
      text: "Where the body tires and the mind rests.",
    },
    {
      imgSrc: "/images/palestra3.jpg",
      title: "Work",
      text: "Obsession beats talent.",
    },
    {
      text: "“I always try to surpass myself. I've always been like this.”",
      footer: "- Lionel Messi",
    },
    {
      text: "If you want to be successful, you need total dedication, seek your ultimate limit and give your best.",
      footer: "- Ayrton Senna",
    },
    {
      imgSrc: "/images/pc2.jpg",
      title: "Technologic",
      text: " “If there is a way to do it better, find it.” - Thomas Edison",
    },
    {
      imgSrc: "/images/disney.jpg",
      title: "Trips",
      text: "With each new trip, we return home with new sparks in our eyes.",
    },
  ];

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
              Over the last 3 years, I have been training in the areas of
              project management and full stack development. In my free time, I
              like photography and playing different sports. Additionally, I
              have been actively involved in various personal projects to
              sharpen my skills and stay updated with the latest trends in
              technology. My dedication to continuous learning has earned me
              several certifications, reflecting my commitment to professional
              growth. Balancing my technical pursuits with personal interests
              allows me to maintain a well-rounded and fulfilling lifestyle.
            </p>
          </Col>
        </Row>
        <Container className="py-3">
          <h1 className={`text-center mb-5 ${styles.few}`}>50 shades of</h1>
          <Row>
            {cards.slice(0, 3).map((card, index) => (
              <Col xs={12} md={4} key={index} className="mb-4">
                <Card className={styles.polaroid}>
                  {card.imgSrc && (
                    <Card.Img
                      variant="top"
                      src={card.imgSrc}
                      className={styles.cardImg}
                    />
                  )}
                  <Card.Body>
                    {card.title && <Card.Title>{card.title}</Card.Title>}
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <Card className={styles.polaroid}>
                <Card.Img
                  variant="top"
                  src={cards[5].imgSrc}
                  className={styles.cardImg}
                />
                <Card.Body>
                  {cards[5].title && <Card.Title>{cards[5].title}</Card.Title>}
                  <Card.Text>{cards[5].text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className={`${styles.polaroid} ${styles.equalHeightCard}`}>
                <Card.Body className={styles.cardBody}>
                  <Card.Text>{cards[3].text}</Card.Text>
                  {cards[3].footer && (
                    <footer className="blockquote-footer">
                      <br />
                      <small className="text-muted">{cards[3].footer}</small>
                    </footer>
                  )}
                </Card.Body>
              </Card>
              <Card className={`${styles.polaroid} ${styles.equalHeightCard}`}>
                <Card.Body className={styles.cardBody}>
                  <Card.Text>{cards[4].text}</Card.Text>
                  {cards[4].footer && (
                    <footer className="blockquote-footer">
                      <br />
                      <small className="text-muted">{cards[4].footer}</small>
                    </footer>
                  )}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-4">
              <Card className={styles.polaroid}>
                <Card.Img
                  variant="top"
                  src={cards[6].imgSrc}
                  className={styles.cardImg}
                />
                <Card.Body>
                  {cards[6].title && <Card.Title>{cards[6].title}</Card.Title>}
                  <Card.Text>{cards[6].text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className={styles.separator}></div>
        <Container className={styles.container}>
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
                <summary className={styles.summary}>
                  Academic Background
                </summary>
                <ul className={styles["styled-list"]}>
                  <li>Information Systems (2023 - 2027) - Cesmac/AL</li>
                  <li>Law (2011 - 2016) - Unit/AL</li>
                  <li>
                    Postgraduate in Administrative and Constitutional Law (2017
                    - 2019)
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
                  <li> ITIL 4 / React / Docker / Project Manager /</li>
                </ul>
              </details>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default About;
