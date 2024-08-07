import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/WelcomeScreen.module.css";

const WelcomeScreen = ({ onAnimationComplete }) => {
  const animationDuration = 3; // Duracao em segundos

  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, animationDuration * 1000); 

    return () => clearTimeout(timer);
  }, [onAnimationComplete, animationDuration]);

  return (
    <motion.div
      className={styles.welcomeScreen}
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: animationDuration, ease: "easeInOut" }} 
    >
      <div className={styles.content}>
        <h1>Welcome</h1>
        <p>Wait a moment...</p>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
