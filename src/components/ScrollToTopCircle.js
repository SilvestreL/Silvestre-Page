// components/ScrollToTopCircle.js
import React from 'react';
import styles from '../styles/ScrollToTopCircle.module.css';

const ScrollToTopCircle = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.circleContainer} onClick={handleClick}>
      <div className={styles.circle}>
        <i className="bi bi-arrow-up"></i> {/* Usando ícone de seta para cima do Bootstrap */}
      </div>
    </div>
  );
};

export default ScrollToTopCircle;
