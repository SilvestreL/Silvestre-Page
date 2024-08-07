// pages/clinicaMedica.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/clinicaMedica.module.css";

const ClinicaMedica = () => {
  return (
    <Container className={styles.container}>
      <Row className="">
        <Col md={8} className="mt-5">
          <h1>Clínica Médica Project</h1>
          <div className={styles.projectOverview}>
            <p>
              This project was developed to create a web application that facilitates medical appointment scheduling. 
              Here, we provide an overview of the technologies used, how to set up the development environment, and how to run the project.
            </p>
            <p>
              The Clínica Médica Project is a web application that allows users to register doctors, manage logins, schedule appointments, and view scheduled appointments. 
              It was developed using modern technologies to ensure an intuitive user experience and efficient integration with the database.
            </p>
          </div>

          <div className={styles.technologies}>
            <h5>Technologies Used</h5>
            <div className={styles.techTitle}>Front-end</div>
            <ul>
              <li>
                ReactJS: Used for building the user interface. React allows the creation of reusable components and facilitates state management in the application.
              </li>
              <li>
                CSS/HTML: Used to style the application and structure the content in a semantic and accessible way.
              </li>
            </ul>
            <div className={styles.techTitle}>Back-end</div>
            <ul>
              <li>
                Node.js: Used to build the back-end logic of the application. Node.js allows for the creation of an efficient and scalable server.
              </li>
              <li>
                MySQL: Relational database used to store information about users, doctors, and appointments.
              </li>
            </ul>
            <div className={styles.techTitle}>Other Technologies</div>
            <ul>
              <li>
                REST API: Used for communication between the front-end and back-end, enabling CRUD (Create, Read, Update, Delete) operations on the system entities.
              </li>
              <li>
                GIT/GitHub: Version control system used to manage the project's source code. GitHub is used to store and collaborate on the repository.
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

export default ClinicaMedica;
