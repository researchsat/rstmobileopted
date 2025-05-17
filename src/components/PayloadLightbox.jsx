import React, { useRef, useEffect } from 'react';
import styles from '../styles/components/PayloadLightbox.module.css';
import CalButton from './CalButton';

const PayloadLightbox = ({
  isOpen,
  onClose,
  title,
  subtitle,
  image,
  features,
  applications
}) => {
  const lightboxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContainer} ref={lightboxRef} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <div className={styles.lightboxContent}>
          <div className={styles.imageSection}>
            <img src={image} alt={title} className={styles.payloadImage} />
          </div>

          <div className={styles.contentSection}>
            <div className={styles.headerContainer}>
              <div className={styles.payloadLabel}>_Payload</div>
              <h2 className={styles.payloadTitle}>{title}</h2>
              {subtitle && <h6 className={styles.payloadSubtitle}>{subtitle}</h6>}
            </div>

            <hr className={styles.divider} />

            <div className={styles.featuresContainer}>
              <h4 className={styles.featuresTitle}>Key Features:</h4>
              <ul className={styles.featuresList}>
                {features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <i className={styles.checkIcon}></i>
                    <div className={styles.featureText}>{feature}</div>
                  </li>
                ))}
              </ul>
            </div>

            {applications && (
              <div className={styles.applicationsContainer}>
                <h4 className={styles.applicationsTitle}>Potential Applications:</h4>
                <p className={styles.applicationsText}>{applications}</p>
              </div>
            )}

            <div className={styles.buttonsContainer}>
              <a
                href="javascript:void(0)"
                className={styles.contactButton}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();

                  // Allow a small delay for the lightbox to close
                  setTimeout(() => {
                    // Scroll to the bookmission section on the current page
                    const bookMissionSection = document.getElementById('bookmission');
                    if (bookMissionSection) {
                      bookMissionSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 300);
                }}
              >
                Schedule a Consultation
              </a>
              <button className={styles.backButton} onClick={onClose}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayloadLightbox;
