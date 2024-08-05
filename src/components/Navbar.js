import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Navbar.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
      <Navbar className={`${styles.navbar} fixed-top`}>
        <div className={styles.brandContainer}>
          <Link href="/" passHref legacyBehavior>
            <a
              className={`${styles.brandTextContainer} ${styles.button}`}
              onClick={handleClose}
            >
              <span className={styles.brandTextHome}>Lucas Silvestre</span>
              <span className={styles.subtitle}>Full Stack Developer</span>
            </a>
          </Link>
        </div>

        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link href="/cv.pdf" target="_blank" className={styles.cvLink}>
            <i className="bi bi-download"></i>
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
                <Link href="/" passHref legacyBehavior>
                  <a
                    className={styles.brandTextContainer}
                    onClick={handleClose}
                  >
                    <span className={styles.brandTextHomeModal}>
                      Lucas Silvestre
                    </span>
                    <span className={styles.subtitle}>
                      Full Stack Developer
                    </span>
                  </a>
                </Link>
              </div>
              <div className={styles.modalClose} onClick={handleClose}>
                &times;
              </div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.bgContent}>{bgContent}</div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.menuTitle}>MENU</div>
                <Nav
                  className={`flex-column text-center ${styles.navLinksContainer}`}
                >
                  <Link href="/projects" passHref legacyBehavior>
                    <Nav.Link
                      onClick={handleClose}
                      onMouseEnter={() =>
                        handleMouseEnter(
                          <img
                            src="/images/pcdev2.jpg"
                            alt="Projects"
                            width="100%"
                            height="100%"
                           
                          />
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
                          <img
                            src="/images/about.png"
                            alt="About"
                            width="100%"
                            height="100%"
                            object-fit= "cover"
                          />
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
                          <img
                            src="/images/pc2.jpg"
                            alt="Contact-me"
                            width="100%"
                            height="100%"
                      
                          />
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
                        <img
                          src="/images/github2.jpg"
                          alt="GitHub"
                          width="100%"
                          height="100%"
                        />
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
                        <img
                          src="/images/instagram2.jpg"
                          alt="Instagram"
                          width="100%"
                          height="100%"
                        />
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
                    <i className="bi bi-download"> c.v</i>
                  </Nav.Link>
                </Nav>
              </motion.div>
            </div>
            <div className={styles.modalFooter}>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MyNavbar;
