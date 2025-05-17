import React from 'react';
import styles from '../styles/components/ScheduleMeetingSection.module.css';
import scheduleMeetingBg from '../assets/images/schedule-meeting-bg.png';
import CalButton from './CalButton';

const ScheduleMeetingSection = () => {
  return (
    <div className={styles.scheduleMeetingSection}>
      <div className={styles.container}>
        <img
          className={styles.backgroundImage}
          src={scheduleMeetingBg}
          alt="Schedule a meeting background"
        />

        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <div className={styles.messageContainer}>
              <span className={styles.grayText}>
                Nothing beats a good old-fashioned face-to-face chat.
                <br /><br />
              </span>
              <span className={styles.whiteText}>
                Schedule a call now—we know you've got a packed schedule!
              </span>
            </div>

            <CalButton
              className={styles.scheduleButton}
              calLink="researchsat-2023/30min"
              namespace="30min"
              config={{ layout: "month_view" }}
            >
              Schedule Meeting
            </CalButton>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.reachUs}>Reach us @</div>
            <div className={styles.contactInfo}>
              <a href="mailto:info@researchsat.space" className={styles.emailLink}>
                info@researchsat.space
              </a>
              <div className={styles.phoneNumber}>+61 4525 94883</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeetingSection;
