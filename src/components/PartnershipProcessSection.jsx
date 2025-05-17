import React from 'react';
import styles from '../styles/components/PartnershipProcessSection.module.css';

const PartnershipProcessSection = () => {
  return (
    <div className={styles.secondSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <h2 className={styles.heading}>How to Partner With Us</h2>
            <p className={styles.description}>
              Our streamlined <span className={styles.highlightText}>partnership process</span> makes collaboration easy and effective. Follow these steps to begin your journey with ResearchSat.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>01</div>
              <h3 className={styles.featureTitle}>Initial Consultation</h3>
              <p className={styles.featureDescription}>
                We begin with a detailed discussion of your research goals and requirements to understand your specific needs.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>02</div>
              <h3 className={styles.featureTitle}>Proposal Development</h3>
              <p className={styles.featureDescription}>
                Our team works with you to develop a customized partnership proposal tailored to your objectives.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>03</div>
              <h3 className={styles.featureTitle}>Agreement Finalization</h3>
              <p className={styles.featureDescription}>
                We finalize the partnership agreement, including scope, timeline, and deliverables for the project.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureNumber}>04</div>
              <h3 className={styles.featureTitle}>Project Implementation</h3>
              <p className={styles.featureDescription}>
                Our team works closely with yours to implement the project according to the agreed plan and timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipProcessSection;
