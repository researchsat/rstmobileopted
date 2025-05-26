import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import SectionDivider from '../components/SectionDivider';
import ScheduleMeetingSection from '../components/ScheduleMeetingSection';
import BookMission from '../components/BookMission';
import PastMissionLightbox from '../components/PastMissionLightbox';
import styles from '../styles/pages/PastMissionsPage.module.css';

// Import images
import heroBackground from '../assets/images/features/spacemissionResearch.png';
import mission1Image from '../assets/images/mission_1.jpg';
import mission2Image from '../assets/images/mission_2.jpg';
import mission3Image from '../assets/images/mission_3.jpg';

const PastMissionsPage = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    document.title = 'Past Missions | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  // Mission data for lightboxes
  const missionData = {
    1: {
      id: 1,
      title: "Atmospheric Space Mission Launch",
      subtitle: "UDAAN Yeast Experiment",
      date: "February 2022 | Adelaide",
      image: mission1Image,
      overview: "Our first atmospheric mission successfully demonstrated ResearchSat's capability to deliver functional experimental systems in space environments. The UDAAN payload carried yeast experiments to an altitude of 25km, providing valuable insights into microgravity effects on biological systems.",
      launchDetails: [
        "Launched in February 2022",
        "ResearchSat payload: UDAAN [Yeast Experiment]",
        "Launch provider: UP&UP - High Altitude Balloon",
        "Launch site: Mount Barker, SA"
      ],
      missionSpecs: [
        "Flight Duration: Approx 60 secs of microgravity",
        "Flight Altitude: max altitude is 25 km",
        "Microgravity level: Free fall",
        "Environment: -20°C & 0.103 atm"
      ],
      results: [
        "SUCCESSFUL LAUNCH",
        "Flow Rate Experiment: Observed decreased flow rate",
        "Yeast Experiment: yeast undergoes random budding rather than bipolar budding",
        "Increased cell clumping observed"
      ],
      significance: "This mission validated our payload design approaches and established our capability to execute space-based biological research."
    },
    2: {
      id: 2,
      title: "Suborbital Space Mission Launch 01",
      subtitle: "ADI-Alpha Advanced Research",
      date: "November 2022 | Esrange Space Center, Sweden",
      image: mission2Image,
      overview: "Our breakthrough suborbital mission achieved 6 minutes of high-quality microgravity at 300km altitude. The ADI-Alpha payload demonstrated advanced experimental capabilities including double emulsion formation and significant biological discoveries.",
      launchDetails: [
        "Mission S1X-3/M15",
        "ResearchSat payload: ADI-Alpha",
        "Launch provider: Swedish Space Corporation (SSC)",
        "Launch site: Esrange Space Center, Sweden"
      ],
      missionSpecs: [
        "Flight Duration: 6 minutes of microgravity",
        "Flight Altitude: 300 km",
        "Microgravity level: 10^-6 g",
        "Environment: -20°C & 0.103 atm"
      ],
      results: [
        "SUCCESSFUL LAUNCH",
        "Observed double emulsion formation",
        "Yeast grown 4x times with decreased cell size",
        "100% cell viability maintained",
        "Flow rate experiments showed decreased flow rate"
      ],
      significance: "This mission provided crucial experience that directly informs our current development programs and demonstrated our ability to achieve complex experimental objectives in space."
    },
    3: {
      id: 3,
      title: "Suborbital Space Mission Launch 02",
      subtitle: "ADI-Beta Electronics & Cell Bank",
      date: "February 2023 | Esrange Space Center, Sweden",
      image: mission3Image,
      overview: "Our most recent suborbital mission showcased advanced electronics payload capabilities and demonstrated our cell bank technology. Multiple microorganisms were successfully transported to space, validating our biological preservation systems.",
      launchDetails: [
        "Mission S1X-4/M16",
        "ResearchSat payload: ADI-electronica (Beta)",
        "Launch provider: Swedish Space Corporation (SSC)",
        "Launch site: Esrange Space Center, Sweden"
      ],
      missionSpecs: [
        "Flight Duration: 6 minutes of microgravity",
        "Flight Altitude: 300 km",
        "Microgravity level: 10^-6 g",
        "Environment: -20°C & 0.103 atm"
      ],
      results: [
        "SUCCESSFUL LAUNCH",
        "Custom Electronics Payload performed flawlessly",
        "Multiple microbes (bacteria, yeast, fungi) carried to space",
        "Cell viability maintained throughout mission",
        "Demonstrated cellbank capability for future missions"
      ],
      significance: "This mission established our electronics capabilities and validated our cell bank technology, paving the way for more complex biological research missions."
    }
  };

  const openMissionLightbox = (missionId) => {
    setSelectedMission(missionData[missionId]);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedMission(null);
    document.body.style.overflow = 'auto';
  };

  // Structured data for SEO
  const pastMissionsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ResearchSat Past Missions",
    "description": "Explore ResearchSat's proven track record with detailed mission histories, from atmospheric balloon launches to advanced suborbital research missions.",
    "url": "https://researchsat.space/past-missions"
  };

  return (
    <>
      <SEO
        title="Past Missions - Mission Gallery | ResearchSat"
        description="Explore ResearchSat's successful space missions including atmospheric balloon launches and suborbital research missions. Detailed mission reports and results from our proven track record."
        keywords={['past space missions', 'mission gallery', 'space research history', 'suborbital missions', 'atmospheric missions', 'space experiments']}
        structuredData={pastMissionsStructuredData}
      />

      <div className={styles.pastMissionsPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          {/* Hero Background */}
          <img
            src={heroBackground}
            alt="Space missions background"
            className={styles.heroBackground}
          />

          {/* Gradient Overlay */}
          <div className={styles.gradientOverlay}></div>

          {/* Hero Content */}
          <div className={styles.contentContainer}>
            <div className={styles.heroContent}>
              <div className={styles.pastMissionsLabel}>_Past Missions</div>
              <h1 className={styles.heroTitle}>
                Our Proven Track Record in Space
              </h1>
            </div>
          </div>

          {/* Bottom Content */}
          <div className={styles.bottomContainer}>
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionText}>
                Explore our successful space missions that have validated our technology and demonstrated our capability to deliver groundbreaking research in space environments.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className={styles.secondSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>
              Proven Success in Space Environments
            </h2>

            <div className={styles.contentContainer}>
              <div className={styles.descriptionText}>
                <span className={styles.grayText}>
                  At <span className={styles.redText}>ResearchSat</span>, we have successfully executed multiple space missions,
                  demonstrating our ability to deliver functional experimental systems in the demanding conditions of space flight.
                  <br /><br />
                </span>
                <span className={styles.lightText}>
                  Discover the details of our groundbreaking missions and their scientific achievements.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <SectionDivider />

        {/* Mission Types */}
        <div className={styles.missionTypesWrapper}>
          <div className={styles.missionTypesHeader}>
            <div className={styles.trustWallLabel}>_Mission History</div>
            <h2 className={styles.sectionTitle}>Our Past Missions</h2>
          </div>

          {/* Mission 1: Atmospheric Launch */}
          <div className={styles.missionSection}>
            <div className={styles.sectionContainer}>
              <div className={styles.missionContent}>
                <div className={styles.missionImageContainer}>
                  <img src={mission1Image} alt="Atmospheric Mission" className={styles.missionImage} />
                </div>
                <div className={styles.missionTextContent}>
                  <h2 className={styles.missionTitle}>Atmospheric Space Mission Launch</h2>
                  <h6 className={styles.missionSubtitle}>UDAAN Yeast Experiment - February 2022</h6>

                  <p className={styles.missionDescription}>
                    Our inaugural atmospheric mission successfully demonstrated ResearchSat's capability to deliver functional experimental systems in space environments. The UDAAN payload carried yeast experiments to 25km altitude, providing valuable insights into microgravity effects on biological systems and validating our payload design approaches.
                  </p>

                  <div className={styles.missionHighlights}>
                    <div className={styles.highlight}>
                      <span className={styles.highlightLabel}>Duration:</span>
                      <span className={styles.highlightValue}>60 seconds microgravity</span>
                    </div>
                    <div className={styles.highlight}>
                      <span className={styles.highlightLabel}>Altitude:</span>
                      <span className={styles.highlightValue}>25 km</span>
                    </div>
                    <div className={styles.highlight}>
                      <span className={styles.highlightLabel}>Status:</span>
                      <span className={styles.highlightValue}>Successful Launch</span>
                    </div>
                  </div>

                  <button
                    className={styles.learnMoreButton}
                    onClick={() => openMissionLightbox(1)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mission 2: Suborbital Launch 01 */}
          <div className={styles.missionSection}>
            <div className={styles.sectionContainer}>
              <div className={styles.missionContent}>
                <div className={styles.missionTextContent}>
                  <h2 className={styles.missionTitle}>Suborbital Space Mission Launch 01</h2>
                  <h6 className={styles.missionSubtitle}>ADI-Alpha Advanced Research - November 2022</h6>

                  <p className={styles.missionDescription}>
                    Our breakthrough suborbital mission achieved 6 minutes of high-quality microgravity at 300km altitude. The ADI-Alpha payload demonstrated advanced experimental capabilities including double emulsion formation and significant biological discoveries, providing crucial experience for our current development programs.
                  </p>

                  <div className={styles.missionHighlights}>
                    <div className={styles.highlight}>
                      <span className={styles.highlightLabel}>Duration:</span>
                      <span className={styles.highlightValue}>6 minutes microgravity</span>
                    </div>
                    <div className={styles.highlight}>
                      <span className={styles.highlightLabel}>Altitude:</span>
                      <span className={styles.highlightValue}>300 km</span>
                    </div>
                    <div className={styles.highlight}>
                      <span className={styles.highlightLabel}>Achievement:</span>
                      <span className={styles.highlightValue}>4x Yeast Growth</span>
                    </div>
                  </div>

                  <button
                    className={styles.learnMoreButton}
                    onClick={() => openMissionLightbox(2)}
                  >
                    Learn More
                  </button>
                </div>
                <div className={styles.missionImageContainer}>
                  <img src={mission2Image} alt="Suborbital Mission 01" className={styles.missionImage} />
                </div>
              </div>
            </div>
          </div>

          {/* Mission 3: Suborbital Launch 02 */}
          <div className={styles.missionSection}>
            <div className={styles.sectionContainer}>
              <div className={styles.missionContent}>
                <div className={styles.missionImageContainer}>
                  <img src={mission3Image} alt="Suborbital Mission 02" className={styles.missionImage} />
                </div>
                <div className={styles.missionTextContent}>
                  <h2 className={styles.missionTitle}>Suborbital Space Mission Launch 02</h2>
                  <h6 className={styles.missionSubtitle}>ADI-Beta Electronics & Cell Bank - February 2023</h6>

                  <p className={styles.missionDescription}>
                    Our most recent suborbital mission showcased advanced electronics payload capabilities and demonstrated our cell bank technology. Multiple microorganisms were successfully transported to space, validating our biological preservation systems and establishing our electronics capabilities for future missions.
                  </p>

                  <div className={styles.missionHighlights}>
                    <div className={styles.highlight}>
                      <span className={styles.highlightLabel}>Duration:</span>
                      <span className={styles.highlightValue}>6 minutes microgravity</span>
                    </div>
                    <div className={styles.highlight}>
                      <span className={styles.highlightLabel}>Payload:</span>
                      <span className={styles.highlightValue}>Custom Electronics</span>
                    </div>
                    <div className={styles.highlight}>
                      <span className={styles.highlightLabel}>Biology:</span>
                      <span className={styles.highlightValue}>Multiple Microbes</span>
                    </div>
                  </div>

                  <button
                    className={styles.learnMoreButton}
                    onClick={() => openMissionLightbox(3)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Add margin above footer */}
          <div className={styles.footerMargin}></div>
        </div>

        {/* Schedule Meeting Section */}
        <ScheduleMeetingSection />

        {/* Book a Mission Section */}
        <BookMission />
      </div>

      {/* Mission Lightbox */}
      <PastMissionLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        missionData={selectedMission}
      />
    </>
  );
};

export default PastMissionsPage;
