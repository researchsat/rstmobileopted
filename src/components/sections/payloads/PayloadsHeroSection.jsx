import React from 'react';
import styles from '../styles/components/PayloadsHeroSection.module.css';
import payloadsHeroBg from '../assets/images/payloads-hero-bg.png';

const PayloadsHeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <img
        src={payloadsHeroBg}
        alt="Space background"
        className={styles.heroBackground}
      />
      <div className={styles.gradientOverlay}></div>

      <div className={styles.topContainer}>
        <div className={styles.heroContent}>
          <div className={styles.payloadsLabel}>_Payloads</div>
          <h1 className={styles.heroHeading}>
            Harness the vast potential of space, and let us handle the logistics
          </h1>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.subHeading}>
            Why Choose ResearchSat Payloads?
          </h2>
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.description}>
            <span className={styles.grayText}>
              Our payloads are more than just containers; they're cutting-edge tools designed to optimize your research outcomes.
              Collaborate with us to leverage the untapped potential of space in your next project.
              <br /><br />
              At 
            </span>
            <span className={styles.highlightText}> ResearchSat</span>
            <span className={styles.grayText}>
              , we believe in the transformative power of space to revolutionize our understanding of life sciences and its potential applications.
            </span>
          </p>

          <a
            href="#"
            data-cal-link="researchsat-2023/30min"
            className={styles.contactButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default PayloadsHeroSection;
