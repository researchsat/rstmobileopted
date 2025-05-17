import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/AboutSecondSection.module.css';
import boltIcon from '../assets/images/about/bolt.svg';

const AboutSecondSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.innerWrapper}>
          <div className={styles.contentRow}>
            <div className={styles.textContainer}>
              <p className={styles.descriptionText}>
                At ResearchSat, Ravi Teja &amp; team are leveraging the microgravity
                environment of space to drive advancements in medical and life
                sciences. Through unwavering commitment and effort, the team is
                steadily moving closer to their vision of a healthier global
                community.
              </p>
              <Link to="/about" className={styles.button}>
                <img src={boltIcon} alt="Bolt icon" className={styles.boltIcon} />
                <span className={styles.buttonText}>Our story</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecondSection;
