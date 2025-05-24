import React, { useState } from 'react';
import styles from '../styles/components/BenefitsSection.module.css';
import VideoModal from './VideoModal';

const BenefitsSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = (e) => {
    e.preventDefault();
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section className={`${styles.benefitsSection} parallax-section`}>
      <div className={`${styles.container} parallax-content`}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.benefitsLabel}>_Benefits</div>
          <h2 className={styles.benefitsTitle}>Unlocking the Cosmos</h2>
          <p className={styles.benefitsDescription}>
            ResearchSat offers a variety of cutting-edge capabilities and features
            designed to advance the field of space biology research.
          </p>
        </div>

        {/* Success Stories Button */}
        <a href="#" className={styles.successButton} onClick={openVideoModal}>
          Success Stories
        </a>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Card 1 */}
          <div className={styles.card1}>
            <div className={styles.starsBackground}>
              <img src="/src/assets/images/benefits/starysky.svg" alt="Starry Sky" className={styles.starsBackgroundSvg} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                Impactful &amp; Intellectually Interesting Projects
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className={styles.column2}>
            {/* Card 2 */}
            <div className={styles.card2}>
              <img src="/src/assets/images/background/checkedbg.svg" alt="Checkered Background" className={styles.card2Bg} />
              <div className={styles.cardTitle}>
                Interdisciplinary Research</div>
            </div>

            {/* Card 3 */}
            <div className={styles.card3}>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                  New Knowledge Creation
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className={styles.card4}>
            <div className={styles.cardContent}>
              <div className={styles.waveBg}>
                <img src="/src/assets/images/benefits/solarsytem.svg" alt="Solar System" className={styles.solarSystemSvg} />
              </div>
              <div className={styles.cardTitle}>
                Represent your industry sector in Space Sector
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className={styles.card5}>
            <div className={styles.cardContent}>
                <div className={styles.waveBg}>
                  <img src="/src/assets/images/benefits/mask-group0.svg" alt="" className={styles.maskGroup} />
                </div>
              <div className={styles.cardTitle}>
                Conduct cutting-edge research
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* YouTube Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoId="EG5MEujVL7Y"
      />
    </section>
  );
};

export default BenefitsSection;
