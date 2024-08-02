// components/AnimatedCircle.js
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/AnimatedCircle.module.css';

const AnimatedCircle = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <div className={styles.circleContainer} onClick={handleClick}>
      <div className={styles.circle}>
        <i className="bi bi-envelope-fill"></i>
        <span className={styles.tooltipText}>Contact me</span>
      </div>
    </div>
  );
};

export default AnimatedCircle;
