import React, { useRef, useEffect } from 'react';
import styles from '../styles/components/FounderStoryLightbox.module.css';
import founderPhoto from '../assets/images/about/team/Ravi.jpg';
import CalButton from './CalButton';

const FounderStoryLightbox = ({ isOpen, onClose }) => {
  const lightboxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContainer} ref={lightboxRef} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <div className={styles.lightboxContent}>
          <div className={styles.imageSection}>
            <img
              src={founderPhoto}
              alt="RaviTeja Duggineni"
              className={styles.founderImage}
            />
          </div>

          <div className={styles.contentSection}>
            <div className={styles.headerContainer}>
              <h2 className={styles.title}>Founder's Story</h2>
              <h3 className={styles.founderName}>RaviTeja Duggineni</h3>
            </div>

            <hr className={styles.divider} />

            <div className={styles.storyContainer}>
              <p className={styles.storyText}>
                Growing up in a middle-class family, I witnessed the devastating impact that hospital bills and medication costs could have on families. I saw loved ones struggle to pay for life-saving treatments and medications, and I knew that something needed to change.
              </p>
              <p className={styles.storyText}>
                As I learned more about the history of medicine, I was struck by the incredible progress that had been made in treating diseases that were once considered deadly. Smallpox, for example, killed millions of people in the 17th and 18th centuries, but it has now been eradicated thanks to advancements in microbiology knowledge. Cholera, another deadly disease, can now be treated with off-the-shelf medications.
              </p>
              <p className={styles.storyText}>
                At ResearchSat, we're using the microgravity environment of space as a stimulant to advance medical and life sciences knowledge. Our goal is to develop new, off-the-shelf medicines that can treat diseases that are currently considered moderately deadly. Through hard work and dedication, we're progressing towards our vision of a healthier world.
              </p>
            </div>

            <div className={styles.buttonsContainer}>
              <CalButton
                className={styles.contactButton}
                calLink="researchsat-2023/30min"
                namespace="30min"
                config={{ layout: "month_view" }}
                onClick={() => {
                  // Close the lightbox when Cal button is clicked
                  onClose();
                }}
              >
                Schedule a Consultation
              </CalButton>
              <button className={styles.backButton} onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderStoryLightbox;
