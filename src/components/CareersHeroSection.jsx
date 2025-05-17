import React from 'react';
import styles from '../styles/components/CareersHeroSection.module.css';
import heroImage from '../assets/images/careers-hero.png';
import openInNewIcon from '../assets/images/open-in-new.svg';

const CareersHeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <img
        className={styles.heroImage}
        src={heroImage}
        alt="Careers at ResearchSat"
      />
      <div className={styles.gradientOverlay}></div>
      <div className={styles.gradientOverlay_1y99l_28}></div>

      <div className={styles.container}>
        <div className={styles.careers}>_Careers</div>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Shape your career and<br />
            the future of science and<br />
            technology
          </h1>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.subtitle}>
            <span className={styles.subtitleText}>
              It all starts with an
            </span>
            <span className={styles.subtitleHighlight}>
              {' application'}
            </span>
          </div>

          <a href="https://linkedin.com/company/researchsat" target="_blank" rel="noopener noreferrer" className={styles.button}>
            <img className={styles.buttonIcon} src={openInNewIcon} alt="" />
            <span className={styles.buttonText}>Discover All Openings</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersHeroSection;
