import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/AboutContactSection.module.css';

const AboutContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>
        Collaborate.
        <br />
        Create.
        <br />
        Conquer.
      </h2>
      
      <div className={styles.contentContainer}>
        <p className={styles.descriptionText}>
          <span className={styles.grayText}>
            Nothing beats a good old-fashioned face-to-face chat.
            <br />
            <br />
          </span>
          <span className={styles.lightText}>
            Schedule a call now—we know you've got a packed schedule!
          </span>
        </p>
        
        <Link to="/contact" className={styles.contactButton}>
          <span className={styles.buttonText}>Contact</span>
        </Link>
      </div>
    </section>
  );
};

export default AboutContactSection;
