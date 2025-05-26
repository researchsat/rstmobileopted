import React, { useRef, useEffect } from 'react';
import styles from '../styles/components/StepLightbox.module.css';
import CalButton from './CalButton';

const StepLightbox = ({
  isOpen,
  onClose,
  stepData
}) => {
  const lightboxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !stepData) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContainer} ref={lightboxRef} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <div className={styles.lightboxContent}>
          <div className={styles.imageSection}>
            <img src={stepData.image} alt={stepData.title} className={styles.stepImage} />
            <div className={styles.stepBadge}>
              <span className={styles.stepNumber}>{stepData.number}</span>
              <span className={styles.stepIcon}>{stepData.icon}</span>
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.headerContainer}>
              <h2 className={styles.stepTitle}>{stepData.title}</h2>
              <p className={styles.stepSubtitle}>{stepData.subtitle}</p>
            </div>

            <hr className={styles.divider} />

            <div className={styles.detailsContainer}>
              <div className={styles.overviewSection}>
                <h3 className={styles.sectionTitle}>Overview</h3>
                <p className={styles.overviewText}>{stepData.overview}</p>
              </div>

              <div className={styles.keyActivitiesSection}>
                <h3 className={styles.sectionTitle}>Key Activities</h3>
                <ul className={styles.activitiesList}>
                  {stepData.keyActivities.map((activity, index) => (
                    <li key={index} className={styles.activityItem}>
                      <span className={styles.activityIcon}>✓</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.deliverablesSection}>
                <h3 className={styles.sectionTitle}>Deliverables</h3>
                <div className={styles.deliverablesList}>
                  {stepData.deliverables.map((deliverable, index) => (
                    <div key={index} className={styles.deliverableItem}>
                      <span className={styles.deliverableIcon}>📋</span>
                      <span className={styles.deliverableText}>{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.timelineSection}>
                <h3 className={styles.sectionTitle}>Timeline & Duration</h3>
                <div className={styles.timelineInfo}>
                  <div className={styles.timelineItem}>
                    <span className={styles.timelineIcon}>⏱️</span>
                    <span className={styles.timelineText}>
                      <strong>Duration:</strong> {stepData.duration}
                    </span>
                  </div>
                  <div className={styles.timelineItem}>
                    <span className={styles.timelineIcon}>📅</span>
                    <span className={styles.timelineText}>
                      <strong>Dependencies:</strong> {stepData.dependencies}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.buttonsContainer}>
              <CalButton
                className={styles.consultationButton}
                calLink="researchsat-2023/30min"
                namespace="30min"
                config={{ layout: "month_view" }}
                onCalOpen={onClose}
              >
                Schedule Consultation
              </CalButton>
              <button className={styles.backButton} onClick={onClose}>
                Back to Overview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepLightbox;
