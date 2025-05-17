import React from 'react';
import styles from '../styles/components/ContactHeroSection.module.css';
import heroBackground from '../assets/images/contact-hero/hero-background.png';

const ContactHeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <img src={heroBackground} alt="Contact Hero" className={styles.heroImage} />
        <div className={styles.blurOverlay}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.label}>_Contact</div>
          <h1 className={styles.title}>
            Turning your great ideas into reality is
            <br />
            our mission
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
