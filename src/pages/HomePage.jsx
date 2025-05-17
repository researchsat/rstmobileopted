import React, { useEffect } from 'react';

// Components
import Header from '../components/Header';
import SpaceSection from '../components/SpaceSection';
import BenefitsSection from '../components/BenefitsSection';
import FeaturesSection from '../components/FeaturesSection';
import PartnershipsSection from '../components/PartnershipsSection';
import PartnershipsSectionContainer from '../components/PartnershipsSectionContainer';
import NewsSection from '../components/NewsSection';
import BookMission from '../components/BookMission';
import SEO from '../components/SEO';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Space Biology & Microgravity Research Satellites"
        description="Unlock the potential of microgravity environments in space to advance life-science technologies and therapeutics with ResearchSat's custom satellite solutions."
        keywords={['microgravity research', 'space biology', 'satellite payloads', 'life sciences', 'space medicine']}
      />
      {/* Header */}
      <Header />

      {/* Space Section */}
      <SpaceSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Partnerships Section */}
      <PartnershipsSection />

      {/* Partnership Opportunities Section */}
      <PartnershipsSectionContainer />

      {/* News Section */}
      <NewsSection />

      {/* Book a Mission Section */}
      <BookMission />
    </>
  );
};

export default HomePage;
