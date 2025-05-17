import React, { useState, useEffect } from 'react';
import styles from '../styles/components/BackToTop.module.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          className={styles.backToTopButton} 
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <div className={styles.buttonInner}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arrowIcon}
            >
              <path 
                d="M12 5L5 12M12 5L19 12M12 5V19" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.ringAnimation}></div>
        </button>
      )}
    </>
  );
};

export default BackToTop;
