import React from 'react';
import MissionTypeSection from './MissionTypeSection';
import styles from '../styles/components/MissionTypesContainer.module.css';

// Import mission images
import atmosphericImage from '../assets/images/mission_1.jpg';
import suborbitalImage from '../assets/images/mission_2.jpg';
import orbitalImage from '../assets/images/mission_3.jpg';
import issImage from '../assets/images/mission_4.jpg';

const MissionTypesContainer = () => {
  return (
    <div className={styles.missionTypesContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.mainTitle}>Our Space Mission Types</h2>
        <p className={styles.mainDescription}>
          ResearchSat offers a range of mission types to accommodate different research needs, 
          from quick atmospheric flights to extended stays on the International Space Station.
        </p>
      </div>
      
      {/* Atmospheric Missions */}
      <MissionTypeSection 
        title="Atmospheric Missions - Duration: 9 seconds"
        subtitle="Quick Insights in a Flash of Microgravity"
        description="For swift experiments that require just a glimpse of microgravity, our Atmospheric Missions are the optimal choice:"
        features={[
          "Experience a brief but powerful 9-second window of microgravity, ideal for preliminary tests and observations.",
          "Cost-effective and efficient, allowing for rapid iteration and adjustments based on results.",
          "Perfect for projects looking to test the feasibility of a longer-duration mission."
        ]}
        applications="Introductory microgravity experiments, validation of research equipment for space, quick data generation for early-stage projects."
        image={atmosphericImage}
        imagePosition="right"
      />
      
      {/* Sub-Orbital Missions */}
      <MissionTypeSection 
        title="Sub-Orbital Missions - Duration: 9 minutes"
        subtitle="Extended Microgravity for Deeper Insights"
        description="When your research requires more time in microgravity but not a full orbital deployment, our Sub-Orbital Missions provide the perfect middle ground:"
        features={[
          "Enjoy approximately 9 minutes of high-quality microgravity, allowing for more complex experimental procedures.",
          "Balanced cost-to-data ratio, providing substantial research value without the expense of orbital missions.",
          "Rapid turnaround from launch to recovery, with experiments typically returned the same day."
        ]}
        applications="Protein crystallization, cell culture experiments, fluid dynamics studies, pharmaceutical research requiring extended microgravity exposure."
        image={suborbitalImage}
        imagePosition="left"
      />
      
      {/* Orbital Missions */}
      <MissionTypeSection 
        title="Orbital Missions - Duration: 9 weeks"
        subtitle="Long-Duration Research in Earth Orbit"
        description="For research that requires extended periods in microgravity, our Orbital Missions offer unprecedented opportunities:"
        features={[
          "Experience approximately 9 weeks of continuous microgravity, enabling long-term studies and observations.",
          "Ideal for experiments requiring multiple generations of cell growth or extended crystallization periods.",
          "Opportunity for iterative experiments with potential for in-flight adjustments based on preliminary data."
        ]}
        applications="Long-term cell culture studies, multi-generational microbial research, extended protein crystallization, comprehensive drug development studies."
        image={orbitalImage}
        imagePosition="right"
      />
      
      {/* ISS Missions */}
      <MissionTypeSection 
        title="ISS Missions - Duration: 9 months"
        subtitle="Premium Research Environment with Human Interaction"
        description="For the most demanding research requiring both extended microgravity and potential astronaut interaction, our ISS Missions represent the gold standard:"
        features={[
          "Up to 9 months of premium microgravity environment on the International Space Station.",
          "Potential for astronaut interaction with experiments, allowing for complex procedures and adjustments.",
          "Access to the ISS's sophisticated research infrastructure and support systems."
        ]}
        applications="Complex biological research requiring human intervention, long-term pharmaceutical studies, advanced materials science, experiments benefiting from the ISS's unique research capabilities."
        image={issImage}
        imagePosition="left"
      />
    </div>
  );
};

export default MissionTypesContainer;
