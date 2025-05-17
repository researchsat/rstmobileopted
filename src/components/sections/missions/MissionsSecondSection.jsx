import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/MissionsSecondSection.module.css';

const MissionsSecondSection = () => {
  return (
    <section className={styles.secondSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Medical Research with Our Space Missions
        </h2>
        
        <div className={styles.contentContainer}>
          <div className={styles.descriptionText}>
            <span className={styles.grayText}>
              At <span className={styles.redText}>ResearchSat</span>, we provide a variety of mission types tailored to your research
              needs, ensuring the right balance of time and environment to glean the
              insights your experiments require.
              <br /><br />
            </span>
            <span className={styles.lightText}>
              Schedule a call now—we know you've got a packed schedule!
            </span>
          </div>
          
          <Link to="/contact" className={styles.contactButton}>
            <span className={styles.buttonText}>Contact</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionsSecondSection;
