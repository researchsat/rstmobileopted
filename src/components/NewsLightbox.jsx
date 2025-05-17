import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/components/NewsLightbox.module.css';
import chevronLeft from '../assets/images/news/chevron-left.svg';
import chevronRight from '../assets/images/news/chevron-right.svg';
import avatarImg from '../assets/images/news/avatar-square.svg';

const NewsLightbox = ({ isOpen, onClose, newsCards, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const lightboxRef = useRef(null);
  const contentRef = useRef(null);

  // Get current card
  const currentCard = newsCards[currentIndex] || {};

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling when lightbox is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Restore scrolling when lightbox is closed
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, newsCards.length, onClose]);

  // Animation effect when changing cards
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add(styles.animating);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.classList.remove(styles.animating);
        }
      }, 300);
    }
  }, [currentIndex]);

  // Navigate to previous card
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to the last card
      setCurrentIndex(newsCards.length - 1);
    }
  };

  // Navigate to next card
  const handleNext = () => {
    if (currentIndex < newsCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop to the first card
      setCurrentIndex(0);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.lightboxOverlay}>
      <div className={styles.lightboxContainer} ref={lightboxRef}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className={styles.lightboxContent} ref={contentRef}>
          <div className={styles.imageSection}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: currentCard.backgroundImage }}
            >
              <div className={styles.cardCategory}>{currentCard.category}</div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.headerContainer}>
              <h2 className={styles.cardTitle}>{currentCard.title}</h2>
              <div className={styles.cardDate}>{currentCard.date}</div>
            </div>

            <div className={styles.authorContainer}>
              <div className={styles.authorImage}>
                <img src={avatarImg} alt="Author" />
              </div>
              <div className={styles.authorName}>ResearchSat Team</div>
            </div>

            <div className={styles.cardContent}>
              <p>
                {currentCard.content ||
                  "ResearchSat is pioneering the future of space biology research, enabling groundbreaking discoveries in microgravity environments. Our innovative satellite platforms and bioreactors are unlocking new possibilities for pharmaceutical development, regenerative medicine, and sustainable technologies."}
              </p>
              <p>
                {currentCard.additionalContent ||
                  "By leveraging the unique conditions of microgravity, we're accelerating scientific breakthroughs that have the potential to transform healthcare, agriculture, and materials science on Earth."}
              </p>
            </div>

            <div className={styles.buttonsContainer}>
              <button className={styles.backButton} onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className={`${styles.navArrow} ${styles.prevArrow}`}
          onClick={handlePrev}
          aria-label="Previous article"
        >
          <img src={chevronLeft} alt="Previous" />
        </button>

        <button
          className={`${styles.navArrow} ${styles.nextArrow}`}
          onClick={handleNext}
          aria-label="Next article"
        >
          <img src={chevronRight} alt="Next" />
        </button>

        {/* Pagination Indicators */}
        <div className={styles.paginationIndicators}>
          {newsCards.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsLightbox;
