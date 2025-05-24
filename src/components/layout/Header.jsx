import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/Header.module.css';
import BackgroundImage from '../common/BackgroundImage';
import heroBackground from '../../assets/images/hero/hero-background.png';

const Header = () => {
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
        {/* Mobile Layout - Only visible on mobile screens */}
        <div className={styles.mobileTextContainer}>
          <div className={styles.mobileMainHeading}>
            Satellites for<br />life sciences
          </div>

          <div className={styles.mobileDescription}>
            <span className={styles.mobileBrandName}>ResearchSat</span> empowers your space biology research with seamless, end-to-end solutions
          </div>

          <Link to="/payloads" className={styles.mobileExploreButton}>
            Explore Payloads
          </Link>
        </div>

        {/* Right Side Content - ResearchSat Text and Button */}
        <div className={styles.rightContent}>
          <div className={styles.brandText}>
            <span className={styles.brandName}>ResearchSat</span>
            <span className={styles.tagline}>
              empowers your space biology research with seamless, end-to-end solutions
            </span>
          </div>

          <div className={styles.buttonWrapper}>
            <Link to="/payloads" className={styles.exploreButton}>
              Explore Payloads
            </Link>
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
    </header>
  );
};

export default Header;
