import React from 'react';
import styles from '../styles/components/PayloadMidSection.module.css';
import maskGroupSvg from '../assets/images/mask-group0.svg';

const PayloadMidSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <div className={styles.description}>
            Microgravity research reveals biological processes impossible to observe on Earth, 
            providing unique insights for medical and pharmaceutical breakthroughs.
          </div>
        </div>
      </div>
      <div className={styles.waveBg}>
        <img className={styles.maskGroup} src={maskGroupSvg} alt="Wave background" />
      </div>
    </div>
  );
};

export default PayloadMidSection;
