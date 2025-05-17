import React from 'react';
import SEO from '../components/SEO';
import SectionDivider from '../components/SectionDivider';
import styles from '../styles/pages/PartnershipsPage.module.css';
import partnershipsHeroBackground from '../assets/images/partnerships/partnershiphero.png';
import PartnershipsSectionContainer from '../components/PartnershipsSectionContainer';
import PartnershipProcessSection from '../components/PartnershipProcessSection';

const PartnershipsPage = () => {
  return (
    <>
      <SEO
        title="Partnerships | ResearchSat"
        description="Explore ResearchSat's partnerships and collaborations in space biology research and satellite technology."
        keywords="ResearchSat partnerships, space biology collaborations, satellite research partners"
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <img src={partnershipsHeroBackground} alt="Partnerships Hero" className={styles.heroImage} />
          <div className={styles.blurOverlay}></div>
          <div className={styles.gradientOverlay}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.label}>_Partnerships</div>
            <h1 className={styles.title}>
              Strategic Collaborations for
              <br />
              Space Biology Research
            </h1>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Partnership Opportunities Section */}
      <PartnershipsSectionContainer />


      {/* Featured Partners Section */}
      <section className={styles.featuredPartnersSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>_Featured Partners</div>
            <h2 className={styles.sectionTitle}>Our Key Collaborators</h2>
            <p className={styles.sectionDescription}>
              We work with industry leaders, research institutions, and space agencies to push the boundaries of space biology research.
            </p>
          </div>

          <div className={styles.partnersGrid}>
            {/* Partner Card 1 */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerImageContainer}>
                <img src="/src/assets/images/partnerships/card0.png" alt="Partner" className={styles.partnerImage} />
              </div>
              <div className={styles.partnerInfo}>
                <h3 className={styles.partnerName}>Atmospheric Research Institute</h3>
                <p className={styles.partnerDescription}>
                  Collaborating on atmospheric missions with durations of 9 seconds to study microgravity effects.
                </p>
              </div>
            </div>

            {/* Partner Card 2 */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerImageContainer}>
                <img src="/src/assets/images/partnerships/card1.png" alt="Partner" className={styles.partnerImage} />
              </div>
              <div className={styles.partnerInfo}>
                <h3 className={styles.partnerName}>International Space Station Program</h3>
                <p className={styles.partnerDescription}>
                  Working on long-duration missions aboard the ISS for extended space biology experiments.
                </p>
              </div>
            </div>

            {/* Partner Card 3 */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerImageContainer}>
                <img src="/src/assets/images/partnerships/unsplash-s-3-h-qu-5-yjg0.png" alt="Partner" className={styles.partnerImage} />
              </div>
              <div className={styles.partnerInfo}>
                <h3 className={styles.partnerName}>Mission S1X-3/M15 Collaboration</h3>
                <p className={styles.partnerDescription}>
                  Joint venture for specialized satellite missions focused on life sciences research.
                </p>
              </div>
            </div>

            {/* Partner Card 4 */}
            <div className={styles.partnerCard}>
              <div className={styles.partnerImageContainer}>
                <img src="/src/assets/images/partnerships/unsplash-s-3-h-qu-5-yjg1.png" alt="Partner" className={styles.partnerImage} />
              </div>
              <div className={styles.partnerInfo}>
                <h3 className={styles.partnerName}>Atmospheric Sciences Consortium</h3>
                <p className={styles.partnerDescription}>
                  Pioneering research on atmospheric conditions and their impact on biological systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>_Benefits</div>
            <h2 className={styles.sectionTitle}>Why Partner With Us</h2>
            <p className={styles.sectionDescription}>
              Partnering with ResearchSat offers unique advantages for organizations interested in space biology research.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {/* Benefit 1 */}
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <img src="/src/assets/images/partnerships/diagonal-arrow1.svg" alt="" />
              </div>
              <h3 className={styles.benefitTitle}>Access to Space</h3>
              <p className={styles.benefitDescription}>
                Gain reliable access to space environments for your research without the complexity of managing space missions.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <img src="/src/assets/images/partnerships/diagonal-arrow2.svg" alt="" />
              </div>
              <h3 className={styles.benefitTitle}>Specialized Expertise</h3>
              <p className={styles.benefitDescription}>
                Leverage our team's expertise in space biology, satellite technology, and mission operations.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <img src="/src/assets/images/partnerships/diagonal-arrow1.svg" alt="" />
              </div>
              <h3 className={styles.benefitTitle}>Cost Efficiency</h3>
              <p className={styles.benefitDescription}>
                Reduce costs through shared resources, standardized platforms, and optimized mission planning.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <img src="/src/assets/images/partnerships/diagonal-arrow2.svg" alt="" />
              </div>
              <h3 className={styles.benefitTitle}>Innovation Network</h3>
              <p className={styles.benefitDescription}>
                Join a network of forward-thinking organizations pushing the boundaries of space research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <PartnershipProcessSection />

      <SectionDivider />

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.sectionLabel}>_Get in Touch</div>
              <h2 className={styles.sectionTitle}>Interested in Partnering?</h2>
              <p className={styles.contactDescription}>
                Contact our partnerships team to discuss how we can collaborate on your next space biology research project.
              </p>
              <a href="#/contact" className={styles.contactButton}>
                Contact Us
              </a>
            </div>
            <div className={styles.contactImageContainer}>
              <img
                src="/src/assets/images/partnerships/contact-image.jpg"
                alt="Contact ResearchSat"
                className={styles.contactImage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnershipsPage;
