import React, { useRef, useEffect } from 'react';
import styles from '../styles/components/PastMissionLightbox.module.css';
import CalButton from './CalButton';

const PastMissionLightbox = ({
  isOpen,
  onClose,
  missionData
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

  if (!isOpen || !missionData) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContainer} ref={lightboxRef} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <div className={styles.lightboxContent}>
          <div className={styles.imageSection}>
            <img src={missionData.image} alt={missionData.title} className={styles.missionImage} />
            <div className={styles.missionBadge}>
              <span className={styles.missionNumber}>{String(missionData.id).padStart(2, '0')}</span>
              <span className={styles.missionIcon}>🚀</span>
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.headerContainer}>
              <h2 className={styles.missionTitle}>{missionData.title}</h2>
              <p className={styles.missionSubtitle}>{missionData.subtitle}</p>
              <p className={styles.missionDate}>{missionData.date}</p>
            </div>

            <hr className={styles.divider} />

            <div className={styles.detailsContainer}>
              <div className={styles.overviewSection}>
                <h3 className={styles.sectionTitle}>Mission Overview</h3>
                <p className={styles.overviewText}>{missionData.overview}</p>
              </div>

              <div className={styles.launchDetailsSection}>
                <h3 className={styles.sectionTitle}>Launch Details</h3>
                <ul className={styles.detailsList}>
                  {missionData.launchDetails.map((detail, index) => (
                    <li key={index} className={styles.detailItem}>
                      <span className={styles.detailIcon}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.specsSection}>
                <h3 className={styles.sectionTitle}>Mission Specifications</h3>
                <ul className={styles.detailsList}>
                  {missionData.missionSpecs.map((spec, index) => (
                    <li key={index} className={styles.detailItem}>
                      <span className={styles.detailIcon}>📊</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.resultsSection}>
                <h3 className={styles.sectionTitle}>Mission Results</h3>
                <ul className={styles.detailsList}>
                  {missionData.results.map((result, index) => (
                    <li key={index} className={styles.detailItem}>
                      <span className={styles.detailIcon}>🎯</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.significanceSection}>
                <h3 className={styles.sectionTitle}>Mission Significance</h3>
                <p className={styles.significanceText}>{missionData.significance}</p>
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
                Back to Missions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastMissionLightbox;
