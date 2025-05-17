import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/PayloadLastSection.module.css';

const PayloadLastSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.titleText}>Looking to elevate your research with </span>
          <span className={styles.titleHighlight}>ResearchSat</span>
          <span className={styles.titleText}> Missions?</span>
        </h2>
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.description}>
          <span className={styles.descriptionText}>At </span>
          <span className={styles.descriptionHighlight}>ResearchSat</span>
          <span className={styles.descriptionText}>
            , we provide a variety of mission types tailored to your research
            needs, ensuring the right balance of time and environment to glean the
            insights your experiments require.
            <br /><br />
          </span>
          <span className={styles.descriptionCallout}>
            Schedule a call now—we know you've got a packed schedule!
          </span>
        </div>
        
        <Link to="/missions" className={styles.button}>
          Discover our Missions
        </Link>
      </div>
    </div>
  );
};

export default PayloadLastSection;
