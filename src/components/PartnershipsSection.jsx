import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/PartnershipsSection.module.css';

const PartnershipsSection = () => {
  return (
    <section className={`${styles.partnershipsSection} parallax-section`}>
      <div className={`${styles.container} parallax-content`}>
        {/* Header */}
        <div className={styles.trustWallLabel}>_Opportunities</div>
        <h2 className={styles.partnershipsTitle}>Our Missions</h2>

        {/* View All Button */}
        <Link to="/missions" className={styles.viewAllButton}>
          View Details
        </Link>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Top Row - Two Cards */}
            <div className={styles.topRow}>
              {/* Card 1 */}
              <div className={`${styles.card} ${styles.card1}`}>
                <img src="/src/assets/images/partnerships/diagonal-arrow1.svg" alt="" className={styles.cardIcon} />
                <div className={styles.cardDetails}>
                  <div className={styles.cardHeading}>
                    <div className={styles.cardCategory}>Missions</div>
                    <div className={styles.cardTitle}>Atmospheric Missions - Duration: 9 seconds</div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={`${styles.card} ${styles.card2}`}>
                <img src="/src/assets/images/partnerships/diagonal-arrow2.svg" alt="" className={styles.cardIcon} />
                <div className={styles.cardDetails}>
                  <div className={styles.cardHeading}>
                    <div className={styles.cardCategory}>Missions</div>
                    <div className={styles.cardTitle}>Sub-Orbital Missions - Duration: 9 minutes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className={styles.bottomCard}>

              <div className={styles.cardOverlay}>
                <div className={styles.cardCategory}>Missions</div>
                <div className={styles.cardTitle}>Orbital Mission - Duration: 9 weeks</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.largeCard}>
              <img src="/src/assets/images/astronaut.png" alt="Astronaut" className={styles.largeCardImage} />
              <div className={styles.cardOverlay}>
                <div className={styles.cardCategory}>Missions</div>
                <div className={styles.cardTitle}>ISS Missions - Duration: 9 Months</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
