import React from 'react';
import styles from '../styles/components/CareersThirdSection.module.css';
import openInNewIcon from '../assets/images/open-in-new-white.svg';

const CareersThirdSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentRow}>
            <div className={styles.quoteContainer}>
              <div className={styles.quote}>
                We believe microgravity research has a potential to develop novel
                therapeutics with high efficacy
              </div>
              <div className={styles.authorContainer}>
                <div className={styles.authorName}>RaviTeja Duggineni</div>
                <div className={styles.authorTitle}>Founder and CEO</div>
              </div>
            </div>
            
            <a href="/job-openings" className={styles.button}>
              <img className={styles.buttonIcon} src={openInNewIcon} alt="" />
              <span className={styles.buttonText}>Discover Openings</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersThirdSection;
