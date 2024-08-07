import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCircle from "../components/AnimatedCircle";
import ScrollToTopCircle from "../components/ScrollToTopCircle";
import WelcomeScreen from "../components/WelcomeScreen";

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.6 },
};

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const { ref, inView } = useInView({ triggerOnce: true });

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

  const services = [
    "FullStack Development",
    "Project Management",
    "System Analysist",
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <div>
      <AnimatePresence>
        {showWelcomeScreen && (
          <WelcomeScreen
            onAnimationComplete={() => setShowWelcomeScreen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
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
            <Row className="my-5">
              <Col md={6} className="text-left">
                <h1 className={styles.mainHeading}>Lucas Silvestre</h1>
                <h2 className={styles.subHeading}>
                  Professional website and user interface
                </h2>
                <p className={styles.paragraph}>
                  I am extremely curious and fascinated by learning new things.
                  My dive into new knowledge led me to learn programming and
                  every day I use the most current market technologies. I have
                  always been interested in TI project management, something
                  embraced by my first degree in Law. The ability to communicate
                  and solve problems, in addition to a relentless quest for
                  knowledge.
                </p>
                <div>
                  <Link href="/projects" passHref legacyBehavior>
                    <a className={styles.link}>View Projects</a>
                  </Link>
                  {" or "}
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
              <p className={styles.mainHeading}>Selected Projects</p>
              <h1 className={styles.subHeading}>Web developer</h1>
            </Row>
            <Row>
              <Col md={6}>
                <Link href="/projects/marketplace" passHref legacyBehavior>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={styles.cardSmall}
                  >
                    <Card>
                      <Card.Img
                        variant="top"
                        src="/images/markeplacecard.jpg"
                      />
                      <Card.Body>
                        <div className={styles.cardContent}>
                          <h5>Marketplace Project</h5>
                          <p>Details about the project...</p>
                          <div className={styles.viewMore}>
                            <span>View more</span>
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Link>
              </Col>
              <Col md={6}>
                <Link href="/projects/kanban" passHref legacyBehavior>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={styles.cardSmall}
                  >
                    <Card>
                      <Card.Img variant="top" src="/images/kanban2.jpg" />
                      <Card.Body>
                        <div className={styles.cardContent}>
                          <h5>Kanban Board Project</h5>
                          <p>Details about the project...</p>
                          <div className={styles.viewMore}>
                            <span>View more</span>
                            <i className="bi bi-arrow-right"></i>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Link>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <h2 className={styles.subHeading}>My Services</h2>
                <Row ref={ref}>
                  {services.map((service, index) => (
                    <Col
                      key={index}
                      xs={12}
                      md={4}
                      className="d-flex justify-content-center"
                    >
                      <motion.div
                        custom={index}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        className={styles.serviceItem}
                      >
                        {service}
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <AnimatedCircle />
            <ScrollToTopCircle />
          </Container>
        )}
      </motion.div>
    </div>
  );
};

export default HomePage;
