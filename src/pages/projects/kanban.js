// pages/kanban.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/kanban.module.css";

const Kanban = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col md={8} className="mt-5">
          <h1>Kanban Board Project</h1>
          <div className={styles.projectOverview}>
            <p>
              This project was developed to create a virtual Kanban board where
              users can manage their tasks visually and interactively. Here, we
              provide an overview of the technologies used, how to set up the
              development environment, and how to run the project.
            </p>
            <p>
              The Kanban Board Project is a web application that allows users to
              create, move, and manage tasks between different states, such as
              "To Do", "In Progress", and "Done". It was developed using modern
              technologies to ensure an intuitive user experience and efficient
              integration with the real-time database.
            </p>
          </div>

          <div className={styles.technologies}>
            <h5>Technologies Used</h5>
            <div className={styles.techTitle}>Front-end</div>
            <ul>
              <li>
                ReactJS: Used for building the user interface. React allows the
                creation of reusable components and facilitates state management
                in the application.
              </li>
              <li>
                CSS/HTML: Used to style the application and structure the
                content in a semantic and accessible way.
              </li>
            </ul>
            <div className={styles.techTitle}>Back-end</div>
            <ul>
              <li>
                Firebase: Platform that offers various functionalities such as
                real-time database, authentication, and hosting. In the Kanban
                Board Project, Firebase is used to store and synchronize tasks
                in real-time between users.
              </li>
            </ul>
            <div className={styles.techTitle}>Other Technologies</div>
            <ul>
              <li>
                GIT/GitHub: Version control system used to manage the project's
                source code. GitHub is used to store and collaborate on the
                repository.
              </li>
              <li>
                Firebase Authentication: Used to manage user login, ensuring
                that only authenticated users can access and modify tasks.
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

export default Kanban;
