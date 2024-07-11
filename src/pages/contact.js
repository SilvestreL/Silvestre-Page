import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <Row>
        <Col md={6} className={styles.addressSection}>
          <h2>Contact</h2>
          <h3>Get in touch — let's work together.</h3>
          <p>ADDRESS</p>
          <p>
            Lucas Silvestre<br />
            Rodolfo Abreu, 313<br />
            57038-160 Maceió<br />
            Alagoas, Brazil
          </p>
        </Col>
        <Col md={6} className={styles.formSection}>
          <h4>Got a project? Drop me a line if you want to work together on something exciting. Big or small. Mobile or web.</h4>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="What's your name?" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="What's your email address?" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formService">
                  <Form.Label>Service</Form.Label>
                  <Form.Control as="select">
                    <option>What are you interested in?</option>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>UI/UX Design</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBudget">
                  <Form.Label>Budget</Form.Label>
                  <Form.Control as="select">
                    <option>What's your budget?</option>
                    <option>$1000 - $5000</option>
                    <option>$5000 - $10000</option>
                    <option>$10000+</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="What's your message?" />
            </Form.Group>
            <Form.Group controlId="formCaptcha">
              <Form.Check type="checkbox" label="I'm not a robot" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send message
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
