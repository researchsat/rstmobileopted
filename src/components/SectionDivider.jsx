import React from 'react';
import styles from '../styles/components/SectionDivider.module.css';

const SectionDivider = () => {
  return (
    <div className={styles.dividerContainer}>
      <div className={styles.dividerImage}></div>
    </div>
  );
};

export default SectionDivider;
