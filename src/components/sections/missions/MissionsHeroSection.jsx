import React from 'react';
import styles from '../styles/components/MissionsHeroSection.module.css';
import heroBackground from '../assets/images/missions-hero/hero-background.png';

const MissionsHeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img src={heroBackground} alt="Missions Hero" className={styles.heroImage} />
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.label}>_Missions</div>
          <h1 className={styles.title}>
            Harness the vast potential of space, and let us handle the logistics
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MissionsHeroSection;
