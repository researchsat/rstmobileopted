import React from 'react';
import styles from '../styles/components/ContactSecondSection.module.css';
import CalButton from './CalButton';

const ContactSecondSection = () => {
  return (
    <section className={styles.secondSection}>
      <div className={styles.container}>
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

          <CalButton
            className={styles.scheduleButton}
            calLink="researchsat-2023/30min"
            namespace="30min"
            config={{ layout: "month_view" }}
          >
            <span className={styles.buttonText}>Schedule Meeting</span>
          </CalButton>
        </div>
      </div>
    </section>
  );
};

export default ContactSecondSection;
