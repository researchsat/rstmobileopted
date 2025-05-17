import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/PartnershipsSectionContainer.module.css';

const PartnershipsSectionContainer = () => {
  return (
    <div className={styles.secondSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <Link to="/partnerships" className={styles.headingLink}>
              <h2 className={styles.heading}>Partnership Opportunities</h2>
            </Link>
            <p className={styles.description}>
              <span className={styles.highlightText}>ResearchSat</span>
              {' '}offers collaborative opportunities for organizations interested in advancing space biology research. Our partnerships are designed to maximize scientific impact while sharing resources and expertise.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <Link to="/partnerships" className={styles.cardLink}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                    <path d="M288 0H160 128c-17.7 0-32 14.3-32 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"/>
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Research Collaboration</h3>
                <p className={styles.featureDescription}>
                  Joint research initiatives focused on specific scientific questions or technological challenges in space biology.
                </p>
              </div>
            </Link>

            <Link to="/partnerships" className={styles.cardLink}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
                    <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Mission Participation</h3>
                <p className={styles.featureDescription}>
                  Opportunities to participate in planned space missions with dedicated payload space for your experiments.
                </p>
              </div>
            </Link>

            <Link to="/partnerships" className={styles.cardLink}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
                    <path d="M160 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32c0 17.7-14.3 32-32 32V96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V64c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32v32h96V64c-17.7 0-32-14.3-32-32zM416 0c17.7 0 32 14.3 32 32v32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H448v32c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V96c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V0c0-17.7 14.3-32 32-32s32 14.3 32 32zM64 256c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm288-32h32c17.7 0 32 14.3 32 32c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32c0-17.7 14.3-32 32-32zM64 384c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm288-32h32c17.7 0 32 14.3 32 32c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32c0-17.7 14.3-32 32-32z"/>
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Technology Development</h3>
                <p className={styles.featureDescription}>
                  Collaborative development of new technologies and methodologies for space-based biological research.
                </p>
              </div>
            </Link>

            <Link to="/partnerships" className={styles.cardLink}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24" fill="currentColor">
                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/>
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>Educational Programs</h3>
                <p className={styles.featureDescription}>
                  Joint educational initiatives to inspire and train the next generation of space biology researchers.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsSectionContainer;
