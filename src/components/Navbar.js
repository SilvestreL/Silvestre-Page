import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Navbar.module.css";

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const [bgContent, setBgContent] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMouseEnter = (content) => {
    setBgContent(content);
  };

  const handleMouseLeave = () => {
    setBgContent(null);
  };

  return (
    <>
      <Navbar bg="light" className={styles.navbar}>
        <div className={styles.brandContainer}>
          <div className={styles.circle}>LS</div>
          <div>
            <Link href="/" passHref legacyBehavior>
              <a className={styles.brandTextHome} onClick={handleClose}>
                Lucas Silvestre
              </a>
            </Link>
            <div className={styles.subtitle}>Full Stack Developer</div>
          </div>
        </div>
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link
            href="/cv.pdf"
            target="_blank"
            className={styles.cvLink}
          >
            CV
          </Nav.Link>
          <Nav.Link onClick={handleShow} className={styles.menuButton}>
            <motion.div
              className={styles.menuContainer}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className={styles.menuText}>MENU</span>
              <span className={styles.menuIcon}>
                <motion.div
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.6 }}
                >
                  &#9776;
                </motion.div>
              </span>
            </motion.div>
          </Nav.Link>
        </Nav>
      </Navbar>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
            className={styles.modalOverlay}
          >
            <div className={styles.modalHeader}>
              <div className={styles.brandContainerModal}>
                <div className={styles.circle}>LS</div>
                <div>
                  <Link href="/" passHref legacyBehavior>
                    <a className={styles.brandText} onClick={handleClose}>
                      Lucas Silvestre
                    </a>
                  </Link>
                  <div className={styles.subtitle}>Full Stack Developer</div>
                </div>
              </div>
              <div className={styles.modalClose} onClick={handleClose}>
                CLOSE
              </div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.bgContent}>{bgContent}</div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Nav className="flex-column text-center">
                  <Link href="/projects" passHref legacyBehavior>
                    <Nav.Link
                      onClick={handleClose}
                      onMouseEnter={() =>
                        handleMouseEnter(
                          <img src="/images/project.jpg" alt="Projects" />
                        )
                      }
                      onMouseLeave={handleMouseLeave}
                      className={styles.navLink}
                    >
                      Projects
                    </Nav.Link>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <Nav.Link
                      onClick={handleClose}
                      onMouseEnter={() =>
                        handleMouseEnter(
                          <img src="/images/about.jpg" alt="About me" />
                        )
                      }
                      onMouseLeave={handleMouseLeave}
                      className={styles.navLink}
                    >
                      About me
                    </Nav.Link>
                  </Link>
                  <Link href="/contact" passHref legacyBehavior>
                    <Nav.Link
                      onClick={handleClose}
                      onMouseEnter={() =>
                        handleMouseEnter(
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18709.56780647672!2d-35.73592654619894!3d-9.663763920258464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1720619333659!5m2!1spt-BR!2sbr"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        )
                      }
                      onMouseLeave={handleMouseLeave}
                      className={styles.navLink}
                    >
                      Contact
                    </Nav.Link>
                  </Link>
                  <Nav.Link
                    href="https://github.com/silvestrel"
                    target="_blank"
                    onMouseEnter={() =>
                      handleMouseEnter(
                        <img src="/images/github.jpg" alt="Github" />
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                    className={styles.navLink}
                  >
                    Github
                  </Nav.Link>
                  <Nav.Link
                    href="https://instagram.com/lucassilvestrem"
                    target="_blank"
                    onMouseEnter={() =>
                      handleMouseEnter(
                        <img src="/images/instagram.jpg" alt="Instagram" />
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                    className={styles.navLink}
                  >
                    Instagram
                  </Nav.Link>
                  <Nav.Link
                    href="/cv.pdf"
                    target="_blank"
                    className={`${styles.navLink} ${styles.cvLinkModal}`}
                  >
                    CV
                  </Nav.Link>
                </Nav>
              </motion.div>
            </div>
            <div className={styles.modalFooter}>
              © 2024 Lucas Silvestre. Made with ❤️ in Maceió, Brasil.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MyNavbar;
