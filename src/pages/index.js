import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";


const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      const newOpacity = 1 - window.scrollY / 500;
      setOpacity(newOpacity > 0 ? newOpacity : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.skeletonContainer}>
          <Skeleton height={50} width={`60%`} />
          <Skeleton height={400} width={`100%`} />
          <Skeleton height={50} width={`80%`} />
          <Skeleton height={200} width={`100%`} />
          <Skeleton height={50} width={`60%`} />
        </div>
      ) : (
        <Container className="mt-5 pt-5">
          {" "}
          {/* Adiciona margem superior e padding superior */}
          <Row className="my-5">
            <Col md={6} className="text-left">
              <h1 className={styles.mainHeading}>Lucas Silvestre</h1>
              <h2 className={styles.subHeading}>
                Professional website and user interface
              </h2>
              <p className={styles.paragraph}>
                I am extremely curious and fascinated by learning new things. My
                dive into new knowledge led me to learn programming and every
                day I use the most current market technologies. I have always
                been interested in TI project management, something embraced by
                my first degree in Law. The ability to communicate and solve
                problems, in addition to a relentless quest for knowledge
              </p>
              <div>
                <Link href="/projects" passHref legacyBehavior>
                  <a className={styles.link}>View Projects</a>
                </Link>
                {"  or    "}
                <Link href="/about" passHref legacyBehavior>
                  <a className={styles.link}>Read About Me</a>
                </Link>
              </div>
            </Col>
            <Col md={6} className="text-right">
              <img
                src="/images/lucasSemFundo.jpg"
                alt="Lucas Silvestre"
                className={styles.profileImage}
                style={{ opacity }}
              />
            </Col>
          </Row>
          <Row>
            <p className={styles.mainHeading}> Selected Projects</p>
            <h1 className={styles.subHeading}>Web developer </h1>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <h3 className={styles.servicesHeading}>My Services</h3>
              <ul className={styles.servicesList}>
                <li>FullStack Development</li>
                <li>Project Management</li>
                <li>System Analys</li>
              </ul>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default HomePage;
