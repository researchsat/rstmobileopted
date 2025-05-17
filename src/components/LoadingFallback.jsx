import React from 'react';
import styles from '../styles/components/LoadingFallback.module.css';

const LoadingFallback = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}>
        <div className={styles.doubleBounce1}></div>
        <div className={styles.doubleBounce2}></div>
      </div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default LoadingFallback;
