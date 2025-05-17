import React from 'react';
import styles from '../styles/components/PayloadsSecondSection.module.css';

const PayloadsSecondSection = () => {
  return (
    <div className={styles.secondSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <h2 className={styles.heading}>Custom Payload Solutions</h2>
            <p className={styles.description}>
              <span className={styles.highlightText}> ResearchSat</span>
              , delivers specialized microgravity research platforms optimized for your unique experimental requirements. Our payloads maximize research potential while minimizing complexity.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-temperature-high"></i>
              </div>
              <h3 className={styles.featureTitle}>Temperature Control</h3>
              <p className={styles.featureDescription}>
                Precise temperature regulation (±0.5°C) to maintain optimal conditions for biological samples throughout the mission.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-robot"></i>
              </div>
              <h3 className={styles.featureTitle}>Automation</h3>
              <p className={styles.featureDescription}>
                Fully automated experimental procedures to ensure consistent execution without human intervention.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className={styles.featureTitle}>Data Monitoring</h3>
              <p className={styles.featureDescription}>
                Real-time data collection and monitoring capabilities to track experimental progress throughout the mission.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className={styles.featureTitle}>Customization</h3>
              <p className={styles.featureDescription}>
                Tailored solutions designed to meet the specific requirements of your research objectives and experimental protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayloadsSecondSection;
