import React from 'react';
import styles from '../styles/components/ContactLastSection.module.css';

const ContactLastSection = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Feel free to contact us</h2>
      
      <div className={styles.contactInfo}>
        <div className={styles.reachUs}>Reach us @</div>
        <div className={styles.contactDetails}>
          <a href="mailto:info@researchsat.space" className={styles.contactEmail}>
            info@researchsat.space
          </a>
          <a href="tel:+61452594883" className={styles.contactPhone}>
            +61 4525 94883
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactLastSection;
