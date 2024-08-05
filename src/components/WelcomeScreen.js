import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/WelcomeScreen.module.css";

const WelcomeScreen = ({ onAnimationComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 6000); // Tempo de exibição da tela de boas-vindas

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <motion.div
      className={styles.welcomeScreen}
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={styles.content}>
        <h1>Welcome</h1>
        <p>Wait a moment...</p>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
