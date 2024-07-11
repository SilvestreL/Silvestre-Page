import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Row, Col } from "react-bootstrap";


const LetsWork = () => {
  return (
    <div>
      <Row>
        <Col className={styles.textContainer}>
          <p className={styles.subtitle}>Need a Tech?</p>
          <h3 className={styles.mainText}>Let's work together!</h3>
          <Link href="/contact" legacyBehavior>
            <a className={styles.link}>Click-me →</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default LetsWork;
