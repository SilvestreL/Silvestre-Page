// pages/marketplace.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Marketplace.module.css";

const Marketplace = () => {
  return (
    <Container className={styles.container}>
      <Row className="mt-5">
        <Col md={8} className="mt-5">
          <h1>Marketplace Project</h1>
          <div className={styles.projectOverview}>
            <p>
              This project was developed to create an e-commerce platform where
              users can buy and sell products. Here, we provide an overview of
              the technologies used, how to set up the development environment,
              and how to run the project.
            </p>
            <p>
              The Marketplace Project is a full-stack application that allows
              users to browse, list, and purchase products. It was developed
              using a variety of modern technologies to ensure a smooth user
              experience and a robust back-end.
            </p>
          </div>

          <div className={styles.technologies}>
            <h5>Technologies Used</h5>
            <div className={styles.techTitle}>Front-end</div>
            <ul>
              <li>ReactJS: Used for building the user interface.</li>
              <li>
                Framer Motion: Animation library for React, used to add fluid
                animations and interactions to application components, providing
                an engaging visual experience.
              </li>
              <li>
                Vite: Build tool that provides a fast and efficient development
                environment for React projects. Vite improves performance and
                facilitates development with HMR (Hot Module Replacement).
              </li>
            </ul>
            <div className={styles.techTitle}>Back-end</div>
            <ul>
              <li>
                NodeJS: Server-side JavaScript runtime, used to create an
                efficient and scalable back-end.
              </li>
              <li>
                Express: Framework for NodeJS that simplifies the construction
                of RESTful APIs. Used to manage server routes and middlewares.
              </li>
            </ul>
            <div className={styles.techTitle}>Database</div>
            <ul>
              <li>
                MySQL: Relational database management system used to store
                product, user, and transaction information. Chosen for its
                performance, scalability, and robustness.
              </li>
            </ul>
            <div className={styles.techTitle}>Other Technologies</div>
            <ul>
              <li>
                API Rest: Architecture used for communication between the
                front-end and back-end, facilitating data manipulation between
                the client and server.
              </li>
              <li>
                GIT/GitHub: Version control system used to manage the project's
                source code. GitHub is used to store and collaborate on the
                repository.
              </li>
              <li>
                Jest: Testing framework used to ensure code quality and system
                reliability. Jest facilitates the creation of unit tests for
                components and functions.
              </li>
            </ul>
          </div>

          <div className={styles.images}>
            <h5>Project Images</h5>
            <p>Add some images here that show the project in action.</p>
          </div>
        </Col>

        <Col md={4} className="mt-5">
          <div className="bg-light p-3 rounded">
            <h5>My Role</h5>
            <ul>
              <li>FullStack Developer</li>
              <li>Website Design</li>
              <li>UX Design</li>
              <li>Photography</li>
            </ul>
            <div className={styles.client}></div>
            <div className={styles.year}>
              <h5>Year</h5>
              <p>2024</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Marketplace;
