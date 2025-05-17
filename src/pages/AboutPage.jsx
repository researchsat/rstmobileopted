import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/AboutPage.module.css';

// Components
import AboutSecondSection from '../components/AboutSecondSection';
import AboutThirdSection from '../components/AboutThirdSection';
import AboutTeamSection from '../components/AboutTeamSection';
import AboutContactSection from '../components/AboutContactSection';
import SectionDivider from '../components/SectionDivider';
import heroBackground from '../assets/images/about/hero-background.png';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Hero Background */}
        <img
          src={heroBackground}
          alt="Space background"
          className={styles.heroBackground}
        />

        {/* Gradient Overlay */}
        <div className={styles.gradientOverlay}></div>

        {/* Hero Content */}
        <div className={styles.contentContainer}>
          <div className={styles.heroContent}>
            <div className={styles.aboutLabel}>_About</div>
            <h1 className={styles.heroTitle}>
              We believe each microgravity experiment makes the world a bit healthier world.
            </h1>
          </div>
        </div>

        {/* Bottom Content */}
        <div className={styles.bottomContainer}>
          <div className={styles.descriptionContainer}>
            <p className={styles.descriptionText}>
              ResearchSat offers a variety of cutting-edge capabilities and features designed to advance the field of space biology research.
            </p>
            <div style={{ textAlign: 'right' }}>
              <Link to="/payloads" style={{ textDecoration: 'none' }}>
                <span style={{
                  background: 'linear-gradient(180deg, #BBDED0 0%, #87C2AA 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '120%',
                  letterSpacing: '0.25px',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  ...see our solutions
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <AboutSecondSection />

      {/* Third Section */}
      <AboutThirdSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Team Section */}
      <AboutTeamSection />

      {/* Contact Section */}
      <AboutContactSection />

      {/* Add margin above footer */}
      <div className={styles.footerMargin}></div>
    </div>
  );
};

export default AboutPage;
