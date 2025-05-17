import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/MissionTypesSection.module.css';
import CalButton from './CalButton';

// Import images
import mission1Image from '../assets/images/mission_1.jpg';
import mission2Image from '../assets/images/mission_2.jpg';
import mission3Image from '../assets/images/mission_3.jpg';
import mission4Image from '../assets/images/mission_4.jpg';

const MissionType = ({ type, duration, description }) => (
  <li className={styles.missionTypeItem}>
    <i className={styles.checkIcon}></i>
    <div className={styles.missionTypeContent}>
      <div className={styles.missionTypeTitle}>{type}</div>
      <div className={styles.missionTypeDuration}>{duration}</div>
      {description && <p className={styles.missionTypeDescription}>{description}</p>}
    </div>
  </li>
);

const MissionTypesSection = () => {
  return (
    <section className={styles.missionTypesSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Medical Research with Our Space Missions</h2>
          <h4 className={styles.sectionSubtitle}>Space: the final frontier for pioneering medical research.</h4>
          <p className={styles.sectionDescription}>
            At ResearchSat, we provide a variety of mission types tailored to your research needs, ensuring the right balance of time and environment to glean the insights your experiments require.
          </p>
        </div>

        <div className={styles.missionsList}>
          {/* Atmospheric Missions */}
          <div className={styles.missionItem}>
            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>Atmospheric Missions - Duration: 9 seconds</h2>
              <h6 className={styles.missionSubtitle}>Quick Insights in a Flash of Microgravity.</h6>
              <p className={styles.missionDescription}>
                For swift experiments that require just a glimpse of microgravity, our Atmospheric Missions are the optimal choice:
              </p>
              <ul className={styles.missionFeatures}>
                <MissionType
                  type="Experience a brief but powerful 9-second window of microgravity, ideal for preliminary tests and observations."
                />
                <MissionType
                  type="Cost-effective and efficient, allowing for rapid iteration and adjustments based on results."
                />
                <MissionType
                  type="Perfect for projects looking to test the feasibility of a longer-duration mission."
                />
              </ul>
              <p className={styles.missionApplications}>
                <strong className={styles.applicationTitle}>Potential Applications:</strong> Introductory microgravity experiments, validation of research equipment for space, quick data generation for early-stage projects.
              </p>
              <Link to="/contact" className={styles.learnMoreButton}>Learn More</Link>
            </div>
            <div className={styles.missionImageContainer}>
              <img className={styles.missionImage} src={mission1Image} alt="Atmospheric Mission" />
            </div>
          </div>

          {/* Sub-Orbital Missions */}
          <div className={`${styles.missionItem} ${styles.reversed}`}>
            <div className={styles.missionImageContainer}>
              <img className={styles.missionImage} src={mission2Image} alt="Sub-Orbital Mission" />
            </div>
            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>Sub-Orbital Missions - Duration: 9 minutes</h2>
              <h6 className={styles.missionSubtitle}>Extended Microgravity for Deeper Insights.</h6>
              <p className={styles.missionDescription}>
                When your research requires more time in microgravity but not a full orbital deployment, our Sub-Orbital Missions provide the perfect middle ground:
              </p>
              <ul className={styles.missionFeatures}>
                <MissionType
                  type="Enjoy approximately 9 minutes of high-quality microgravity, allowing for more complex experimental procedures."
                />
                <MissionType
                  type="Balanced cost-to-data ratio, providing substantial research value without the expense of orbital missions."
                />
                <MissionType
                  type="Rapid turnaround from launch to recovery, with experiments typically returned the same day."
                />
              </ul>
              <p className={styles.missionApplications}>
                <strong className={styles.applicationTitle}>Potential Applications:</strong> Protein crystallization, cell culture experiments, fluid dynamics studies, pharmaceutical research requiring extended microgravity exposure.
              </p>
              <Link to="/contact" className={styles.learnMoreButton}>Learn More</Link>
            </div>
          </div>

          {/* Orbital Missions */}
          <div className={styles.missionItem}>
            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>Orbital Missions - Duration: 9 weeks</h2>
              <h6 className={styles.missionSubtitle}>Long-Duration Research in Earth Orbit.</h6>
              <p className={styles.missionDescription}>
                For research that requires extended periods in microgravity, our Orbital Missions offer unprecedented opportunities:
              </p>
              <ul className={styles.missionFeatures}>
                <MissionType
                  type="Experience approximately 9 weeks of continuous microgravity, enabling long-term studies and observations."
                />
                <MissionType
                  type="Ideal for experiments requiring multiple generations of cell growth or extended crystallization periods."
                />
                <MissionType
                  type="Opportunity for iterative experiments with potential for in-flight adjustments based on preliminary data."
                />
              </ul>
              <p className={styles.missionApplications}>
                <strong className={styles.applicationTitle}>Potential Applications:</strong> Long-term cell culture studies, multi-generational microbial research, extended protein crystallization, comprehensive drug development studies.
              </p>
              <Link to="/contact" className={styles.learnMoreButton}>Learn More</Link>
            </div>
            <div className={styles.missionImageContainer}>
              <img className={styles.missionImage} src={mission3Image} alt="Orbital Mission" />
            </div>
          </div>

          {/* ISS Missions */}
          <div className={`${styles.missionItem} ${styles.reversed}`}>
            <div className={styles.missionImageContainer}>
              <img className={styles.missionImage} src={mission4Image} alt="ISS Mission" />
            </div>
            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>ISS Missions - Duration: 9 months</h2>
              <h6 className={styles.missionSubtitle}>Premium Research Environment with Human Interaction.</h6>
              <p className={styles.missionDescription}>
                For the most demanding research requiring both extended microgravity and potential astronaut interaction, our ISS Missions represent the gold standard:
              </p>
              <ul className={styles.missionFeatures}>
                <MissionType
                  type="Up to 9 months of premium microgravity environment on the International Space Station."
                />
                <MissionType
                  type="Potential for astronaut interaction with experiments, allowing for complex procedures and adjustments."
                />
                <MissionType
                  type="Access to the ISS's sophisticated research infrastructure and support systems."
                />
              </ul>
              <p className={styles.missionApplications}>
                <strong className={styles.applicationTitle}>Potential Applications:</strong> Complex biological research requiring human intervention, long-term pharmaceutical studies, advanced materials science, experiments benefiting from the ISS's unique research capabilities.
              </p>
              <Link to="/contact" className={styles.learnMoreButton}>Learn More</Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.callToAction}>
          <h2 className={styles.ctaTitle}>Ready to Take Your Research to Space?</h2>
          <p className={styles.ctaDescription}>
            Contact us today to discuss which mission type best suits your research objectives and how we can customize our solutions to meet your specific needs.
          </p>
          <CalButton
            className={styles.ctaButton}
            calLink="researchsat-2023/30min"
            namespace="30min"
            config={{ layout: "month_view" }}
          >
            Schedule a Consultation
          </CalButton>
        </div>
      </div>
    </section>
  );
};

export default MissionTypesSection;
