import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/ContactPartnershipsSection.module.css';

const ContactPartnershipsSection = () => {
  return (
    <section className={styles.partnershipsSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.trustWallLabel}>_Trust Wall</div>
        <h2 className={styles.partnershipsTitle}>Our Partnerships</h2>

        {/* View All Button */}
        <Link to="/partnerships" className={styles.viewAllButton}>
          View All
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
                    <div className={styles.cardCategory}>Upcoming</div>
                    <div className={styles.cardTitle}>ISS Missions - Duration: 9 months</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className={styles.bottomCard}>
              <img
                src="/src/assets/images/partnerships/unsplash-s-3-h-qu-5-yjg0.png"
                alt="Mission"
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardCategory}>Missions</div>
                <div className={styles.cardTitle}>Mission S1X-3/M15</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.largeCard}>
              <img
                src="/src/assets/images/partnerships/unsplash-s-3-h-qu-5-yjg1.png"
                alt="Atmospheric Mission"
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardCategory}>Missions</div>
                <div className={styles.cardTitle}>Atmospheric Missions - Duration: 9 seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPartnershipsSection;
