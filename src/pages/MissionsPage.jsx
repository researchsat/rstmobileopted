import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import MissionsHeroSection from '../components/MissionsHeroSection';
import MissionsSecondSection from '../components/MissionsSecondSection';
import MissionSectionImageLeft from '../components/MissionSectionImageLeft';
import MissionSectionImageRight from '../components/MissionSectionImageRight';
import SectionDivider from '../components/SectionDivider';
import ScheduleMeetingSection from '../components/ScheduleMeetingSection';
import BookMission from '../components/BookMission';
import styles from '../styles/pages/MissionsPage.module.css';

// Import images
import mission1Image from '../assets/images/mission_1.jpg';
import mission2Image from '../assets/images/mission_2.jpg';
import mission3Image from '../assets/images/mission_3.jpg';
import mission4Image from '../assets/images/mission_4.jpg';
import serv1Image from '../assets/images/serv1.jpg';

const MissionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured data for SEO
  const missionStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Space Biology Research Missions",
    "description": "ResearchSat empowers your space biology research with seamless, end-to-end solutions through various mission types from atmospheric to ISS missions.",
    "provider": {
      "@type": "Organization",
      "name": "ResearchSat",
      "url": "https://researchsat.space"
    },
    "serviceType": "Space Research Missions",
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "description": "Custom space biology research missions with durations from 9 seconds to 9 months"
    }
  };

  return (
    <div className={styles.missionsPage}>
      <SEO
        title="Space Biology Research Missions"
        description="Explore ResearchSat's range of space mission types from atmospheric to ISS missions, providing the perfect environment for your space biology research needs."
        keywords={['space missions', 'microgravity research', 'ISS missions', 'suborbital missions', 'atmospheric missions', 'orbital missions']}
        ogImage={serv1Image}
        structuredData={missionStructuredData}
      />
      {/* Hero Section */}
      <MissionsHeroSection />

      {/* Second Section */}
      <MissionsSecondSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Mission Types */}
      <div className={styles.missionTypesWrapper}>
        <div className={styles.missionTypesHeader}>
          <div className={styles.trustWallLabel}>_Missions</div>
          <h2 className={styles.sectionTitle}>Our Missions</h2>
        </div>

        {/* Atmospheric Missions */}
        <MissionSectionImageLeft
          image={mission1Image}
          title="Atmospheric Missions - Duration: 9 seconds"
          subtitle="Quick Insights in a Flash of Microgravity"
          date=""
          description="For swift experiments that require just a glimpse of microgravity, our Atmospheric Missions are the optimal choice. Experience a brief but powerful 9-second window of microgravity, ideal for preliminary tests and observations."
          features={[
            "Experience a brief but powerful 9-second window of microgravity, ideal for preliminary tests and observations",
            "Cost-effective and efficient, allowing for rapid iteration and adjustments based on results",
            "Perfect for projects looking to test the feasibility of a longer-duration mission"
          ]}
          applications="Introductory microgravity experiments, validation of research equipment for space, quick data generation for early-stage projects"
        />

        {/* Sub-Orbital Missions */}
        <MissionSectionImageRight
          image={mission2Image}
          title="Sub-Orbital Missions - Duration: 9 minutes"
          subtitle="Extended Microgravity for Deeper Insights"
          date=""
          description="When your research requires more time in microgravity but not a full orbital deployment, our Sub-Orbital Missions provide the perfect middle ground. Enjoy approximately 9 minutes of high-quality microgravity, allowing for more complex experimental procedures."
          features={[
            "Enjoy approximately 9 minutes of high-quality microgravity, allowing for more complex experimental procedures",
            "Balanced cost-to-data ratio, providing substantial research value without the expense of orbital missions",
            "Rapid turnaround from launch to recovery, with experiments typically returned the same day"
          ]}
          applications="Protein crystallization, cell culture experiments, fluid dynamics studies, pharmaceutical research requiring extended microgravity exposure"
        />

        {/* Orbital Missions */}
        <MissionSectionImageLeft
          image={mission3Image}
          title="Orbital Missions - Duration: 9 weeks"
          subtitle="Long-Duration Research in Earth Orbit"
          date=""
          description="For research that requires extended periods in microgravity, our Orbital Missions offer unprecedented opportunities. Experience approximately 9 weeks of continuous microgravity, enabling long-term studies and observations."
          features={[
            "Experience approximately 9 weeks of continuous microgravity, enabling long-term studies and observations",
            "Ideal for experiments requiring multiple generations of cell growth or extended crystallization periods",
            "Opportunity for iterative experiments with potential for in-flight adjustments based on preliminary data"
          ]}
          applications="Long-term cell culture studies, multi-generational microbial research, extended protein crystallization, comprehensive drug development studies"
        />

        {/* ISS Missions */}
        <MissionSectionImageRight
          image={mission4Image}
          title="ISS Missions - Duration: 9 months"
          subtitle="Premium Research Environment with Human Interaction"
          date=""
          description="For the most demanding research requiring both extended microgravity and potential astronaut interaction, our ISS Missions represent the gold standard. Up to 9 months of premium microgravity environment on the International Space Station."
          features={[
            "Up to 9 months of premium microgravity environment on the International Space Station",
            "Potential for astronaut interaction with experiments, allowing for complex procedures and adjustments",
            "Access to the ISS's sophisticated research infrastructure and support systems"
          ]}
          applications="Complex biological research requiring human intervention, long-term pharmaceutical studies, advanced materials science, experiments benefiting from the ISS's unique research capabilities"
        />
      </div>

      {/* Schedule Meeting Section */}
      <ScheduleMeetingSection />

      {/* Book a Mission Section */}
      <BookMission />
    </div>
  );
};

export default MissionsPage;
