import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/BenefitsSection.module.css';

const BenefitsSection = () => {
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
        <Link to="/success-stories" className={styles.successButton}>
          Success Stories
        </Link>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Card 1 */}
          <div className={styles.card1}>
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
              <div className={styles.cardTitle}>
                Represent your industry sector in Space Sector
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className={styles.card5}>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                Conduct cutting-edge research
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className={styles.starsBackground}>
          {/* Stars dots */}
          <div className={styles.star1}></div>
          <div className={styles.star2}></div>
          <div className={styles.star3}></div>
          <div className={styles.star4}></div>
          <div className={styles.star5}></div>
          <div className={styles.star6}></div>
          <div className={styles.star7}></div>
          <div className={styles.star8}></div>
          <div className={styles.star9}></div>
          <div className={styles.star10}></div>
        </div>

        <div className={styles.solarSystem}>
          {/* Solar system orbits */}
          <div className={styles.orbit1}></div>
          <div className={styles.orbit2}></div>
          <div className={styles.orbit3}></div>
          <div className={styles.orbit4}></div>
          <div className={styles.orbit5}></div>
          <div className={styles.orbit6}></div>
          {/* Planets */}
          <div className={styles.planet1}></div>
          <div className={styles.planet2}></div>
          <div className={styles.planet3}></div>
          <div className={styles.planet4}></div>
          <div className={styles.planet5}></div>
          <div className={styles.planet6}></div>
        </div>

        <div className={styles.waveBg}>
          <img src="/src/assets/images/benefits/mask-group0.svg" alt="" className={styles.maskGroup} />
        </div>

        <div className={styles.checkeredBg}>
          {/* Grid lines */}
          <div className={styles.gridLine1}></div>
          <div className={styles.gridLine2}></div>
          <div className={styles.gridLine3}></div>
          <div className={styles.gridLine4}></div>
          <div className={styles.gridLine5}></div>
          <div className={styles.gridLine6}></div>
          <div className={styles.gridLine7}></div>
          <div className={styles.gridLine8}></div>
          {/* Grid dots */}
          <img src="/src/assets/images/benefits/vector-390.svg" alt="" className={styles.gridDot1} />
          <img src="/src/assets/images/benefits/vector-400.svg" alt="" className={styles.gridDot2} />
          <img src="/src/assets/images/benefits/group-10000042450.svg" alt="" className={styles.gridDot3} />
          <img src="/src/assets/images/benefits/group-10000042460.svg" alt="" className={styles.gridDot4} />
          <img src="/src/assets/images/benefits/group-10000042470.svg" alt="" className={styles.gridDot5} />
          <img src="/src/assets/images/benefits/group-10000042480.svg" alt="" className={styles.gridDot6} />
          <img src="/src/assets/images/benefits/group-10000042490.svg" alt="" className={styles.gridDot7} />
          <img src="/src/assets/images/benefits/group-10000042500.svg" alt="" className={styles.gridDot8} />
          <img src="/src/assets/images/benefits/group-10000042510.svg" alt="" className={styles.gridDot9} />
        </div>

        {/* Interdisciplinary Research Text */}
        <div className={styles.interdisciplinaryResearch}>Interdisciplinary Research</div>
      </div>
    </section>
  );
};

export default BenefitsSection;
