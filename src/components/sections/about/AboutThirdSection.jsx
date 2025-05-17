import React from 'react';
import styles from '../styles/components/AboutThirdSection.module.css';

// Import icons
import visionIcon from '../assets/images/about/section3/vision-icon.svg';
import missionIcon from '../assets/images/about/section3/mission-icon.svg';
import boltIcon from '../assets/images/about/section3/bolt-icon.svg';

const AboutThirdSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        {/* Vision Row */}
        <div className={styles.visionRow}>
          <div className={styles.titleContainer}>
            <img src={visionIcon} alt="Vision icon" className={styles.icon} />
            <h2 className={styles.title}>Vision</h2>
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.description}>
              At ResearchSat, our vision is to revolutionize life sciences and
              biomedical research by harnessing the unique potential of microgravity
              environments for advancing human health beyond the boundaries of
              Earth.
            </p>
            <div className={styles.highlight}>
              <img src={boltIcon} alt="Bolt icon" className={styles.boltIcon} />
              <span className={styles.highlightText}>
                Our aim is to enrich the health sciences.
              </span>
            </div>
          </div>
        </div>

        {/* Mission Row */}
        <div className={styles.missionRow}>
          <div className={styles.titleContainer}>
            <img src={missionIcon} alt="Mission icon" className={styles.icon} />
            <h2 className={styles.title}>Mission</h2>
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.description}>
              Our commitment to excellence and discovery will fuel a new era of
              exploration, bringing the benefits of space research to the service of
              humanity and making a lasting impact on our world.
            </p>
            <div className={styles.highlight}>
              <img src={boltIcon} alt="Bolt icon" className={styles.boltIcon} />
              <span className={styles.highlightText}>
                Developing 10 new drugs in Space by 2035
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThirdSection;
