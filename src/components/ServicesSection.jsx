import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/ServicesSection.module.css';

const ServicesSection = () => {
  return (
    <section className={`${styles.servicesSection} parallax-section`}>
      <div className={`${styles.container} parallax-content`}>
        {/* Services Header */}
        <div className={styles.servicesLabel}>_Services</div>
        <h2 className={styles.servicesTitle}>Our Space Research Solutions</h2>
        <Link to="/about" className={styles.discoverButton}>
          Discover our solutions
        </Link>

        {/* Services Grid - Bento Layout */}
        <div className={styles.servicesGrid}>
          {/* Left Column - Large Card */}
          <div className={styles.leftColumn}>
            <div className={styles.largeCard}>
              <img
                src="/src/assets/images/services/unsplash-s-3-h-qu-5-yjg0.png"
                alt="Microbe Culture"
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardLabel}>Missions</div>
                <div className={styles.cardTitle}>Microbe Culture for AMR Research</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Top Row - Medium Card */}
            <div className={styles.mediumCard}>
              <img
                src="/src/assets/images/services/unsplash-s-3-h-qu-5-yjg1.png"
                alt="Microbe Culture"
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardLabel}>Missions</div>
                <div className={styles.cardTitle}>Microbe Culture for AMR Research</div>
              </div>
            </div>

            {/* Bottom Row - Two Small Cards */}
            <div className={styles.smallCardsRow}>
              {/* Gray Card */}
              <div className={styles.smallCard + ' ' + styles.grayCard}>
                <img
                  src="/src/assets/images/services/frame-10000065200.svg"
                  alt="Arrow Icon"
                  className={styles.cardIcon}
                />
                <div className={styles.smallCardContent}>
                  <div className={styles.smallCardLabel}>Missions</div>
                  <div className={styles.smallCardTitle}>Atmospheric Missions - Duration: 9 seconds</div>
                </div>
              </div>

              {/* Light Card */}
              <div className={styles.smallCard + ' ' + styles.lightCard}>
                <img
                  src="/src/assets/images/services/frame-10000065201.svg"
                  alt="Arrow Icon"
                  className={styles.cardIcon}
                />
                <div className={styles.smallCardContent}>
                  <div className={styles.smallCardLabel}>Upcoming</div>
                  <div className={styles.smallCardTitle}>Double Emulsion for Drug Delivery Research</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
