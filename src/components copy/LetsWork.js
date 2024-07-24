import React from "react";
import Link from "next/link";
import styles from "../styles/LetsWork.module.css";
import { Row, Col } from "react-bootstrap";

const LetsWork = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col className={styles.textContainer}>
          <p className={styles.subtitle}>Need a technology support?</p>

          <Link href="/contact" legacyBehavior>
            <h3 className={styles.mainText}>
              Let's work together <span className={styles.arrow}>&rarr;</span>
            </h3>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default LetsWork;
