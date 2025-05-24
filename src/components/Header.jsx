import React, { useState } from 'react';
import styles from '../styles/components/Header.module.css';
import BackgroundImage from './BackgroundImage';
import heroBackground from '../assets/images/hero/hero-background.png';
import VideoModal from './VideoModal';

const Header = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = (e) => {
    e.preventDefault();
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <header id="header" className={styles.header}>
      <BackgroundImage
        src={heroBackground}
        className={styles.heroContainer}
        minHeight="100vh"
        position="center"
        size="cover"
        overlay={true}
        overlayOpacity={0.3}
      >

        {/* Right Side Content - ResearchSat Text and Button */}
        <div className={styles.rightContent}>
          <div className={styles.brandText}>
            <span className={styles.brandName}>ResearchSat</span>
            <span className={styles.tagline}>
              empowers your space biology research with seamless, end-to-end solutions
            </span>
          </div>

          <div className={styles.buttonWrapper}>
            <a href="#" className={styles.exploreButton} onClick={openVideoModal}>
              Explore Payloads
            </a>
          </div>
        </div>

        {/* Bottom Left Content - Merged structure for easier handling */}
        <div className={styles.bottomContent}>
          <div className={styles.mainText}>
            <span>Satellites</span>
            <span>for</span>
            <br />
            <span>life sciences</span>
          </div>
        </div>
      </BackgroundImage>

      {/* YouTube Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoId="Ud6-gEj7wow"
      />
    </header>
  );
};

export default Header;
