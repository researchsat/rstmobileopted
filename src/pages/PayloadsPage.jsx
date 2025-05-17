import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PayloadsHeroSection from '../components/PayloadsHeroSection';
import PayloadsQuoteSection from '../components/PayloadsQuoteSection';
import PayloadsSecondSection from '../components/PayloadsSecondSection';
import PayloadSectionImageLeft from '../components/PayloadSectionImageLeft';
import PayloadSectionImageRight from '../components/PayloadSectionImageRight';
import PayloadMidSection from '../components/PayloadMidSection';
import ScheduleMeetingSection from '../components/ScheduleMeetingSection';
import PayloadLastSection from '../components/PayloadLastSection';
import BookMission from '../components/BookMission';
import styles from '../styles/pages/PayloadsPage.module.css';

// Import images
import payload1Image from '../assets/images/services/unsplash-s-3-h-qu-5-yjg0.png';
import payload2Image from '../assets/images/services/unsplash-s-3-h-qu-5-yjg1.png';
import payload3Image from '../assets/images/services/unsplash-s-3-h-qu-5-yjg2.png';
import payload4Image from '../assets/images/partnerships/unsplash-s-3-h-qu-5-yjg0.png';
import serv1Image from '../assets/images/serv1.jpg';

const PayloadsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured data for SEO
  const payloadStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Space Biology Research Payloads",
    "description": "ResearchSat empowers your space biology research with custom payload solutions designed for optimal performance in microgravity environments.",
    "provider": {
      "@type": "Organization",
      "name": "ResearchSat",
      "url": "https://researchsat.space"
    },
    "serviceType": "Space Research Payloads",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Custom payload solutions for space biology research"
    }
  };

  return (
    <div className={styles.payloadsPage}>
      <SEO
        title="Space Biology Research Payloads"
        description="Explore ResearchSat's custom payload solutions for space biology research, designed to meet the specific requirements of your experiments in microgravity."
        keywords={['space payloads', 'microgravity research', 'biology payloads', 'custom payloads', 'space biology', 'research payloads']}
        ogImage={serv1Image}
        structuredData={payloadStructuredData}
      />
      {/* Hero Section */}
      <PayloadsHeroSection />

      {/* Quote Section */}
      <PayloadsQuoteSection />

      {/* Payload Types */}
      <div className={styles.payloadTypesWrapper}>
        <div className={styles.payloadTypesHeader}>
          <div className={styles.trustWallLabel}>_Payloads</div>
          <h2 className={styles.sectionTitle}>Our Payload Solutions</h2>
        </div>

        {/* Microbe Culture Payload */}
        <PayloadSectionImageLeft
          image={payload1Image}
          title="Microbe Culture Payload"
          subtitle="Advanced Solutions for Microbial Research in Space"
          date=""
          description="Designed for studying microbial growth and behavior in microgravity, with applications in antimicrobial resistance research and pharmaceutical development."
          features={[
            "Multiple culture chambers for parallel experiments",
            "Automated nutrient delivery system for consistent growth conditions",
            "Real-time growth monitoring and data collection"
          ]}
          applications="Antimicrobial resistance research, pharmaceutical development, microbial adaptation studies, biofilm formation analysis"
        />

        {/* Protein Crystallization Payload */}
        <PayloadSectionImageRight
          image={payload2Image}
          title="Protein Crystallization Payload"
          subtitle="High-Quality Crystal Growth in Microgravity"
          date=""
          description="Optimized for growing high-quality protein crystals in microgravity, enabling more detailed structural analysis for drug discovery and development."
          features={[
            "Precise temperature control (±0.5°C) for optimal crystallization conditions",
            "Multiple crystallization methods supported in a single payload",
            "Advanced vibration isolation system to prevent crystal disruption"
          ]}
          applications="Drug discovery, structural biology research, enzyme engineering, pharmaceutical development"
        />

        {/* Cell Culture Payload */}
        <PayloadSectionImageLeft
          image={payload3Image}
          title="Cell Culture Payload"
          subtitle="Mammalian Cell Research in Space"
          date=""
          description="Specialized for mammalian cell culture experiments in space, supporting research in tissue engineering, cancer biology, and regenerative medicine."
          features={[
            "Controlled gas exchange system for maintaining optimal cell environment",
            "Automated media exchange to support long-duration experiments",
            "Live cell imaging capability for real-time observation"
          ]}
          applications="Tissue engineering, cancer research, stem cell studies, regenerative medicine, drug testing"
        />

        {/* Double Emulsion Payload */}
        <PayloadSectionImageRight
          image={payload4Image}
          title="Double Emulsion Payload"
          subtitle="Advanced Drug Delivery Research Platform"
          date=""
          description="Custom-designed for studying double emulsion formation in microgravity, with applications in drug delivery system development and material science."
          features={[
            "Precision fluid handling system for controlled emulsion formation",
            "High-resolution imaging for detailed structural analysis",
            "Temperature-controlled environment for stability studies"
          ]}
          applications="Drug delivery system development, encapsulation technology, controlled release formulations, material science research"
        />

      </div>

      {/* Second Section */}
      <PayloadsSecondSection />

      {/* Payload Last Section */}
      <PayloadLastSection />

      {/* Book a Mission Section */}
      <BookMission />
    </div>
  );
};

export default PayloadsPage;
