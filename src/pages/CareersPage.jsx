import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import CareersHeroSection from '../components/CareersHeroSection';
import CareersSecondSection from '../components/CareersSecondSection';
import CareersThirdSection from '../components/CareersThirdSection';
import CareersFourthSection from '../components/CareersFourthSection';
import styles from '../styles/pages/CareersPage.module.css';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.careersPage}>
      <SEO
        title="Careers | ResearchSat"
        description="Join our team at ResearchSat and be part of the future of space research and innovation."
        keywords="careers, jobs, space research, ResearchSat careers, space technology jobs"
        image="/images/careers-hero.png"
      />

      <CareersHeroSection />
      <CareersSecondSection />
      <CareersThirdSection />
      <CareersFourthSection />
    </div>
  );
};

export default CareersPage;
