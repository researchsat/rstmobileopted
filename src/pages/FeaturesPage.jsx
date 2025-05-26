import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/FeaturesPage.module.css';
import SEO from '../components/SEO';
import SectionDivider from '../components/SectionDivider';
import CalButton from '../components/CalButton';
import MissionTimeline from '../components/MissionTimeline';
import StepLightbox from '../components/StepLightbox';

// Import hero background
import heroBackground from '../assets/images/hero/hero-background.png';

const FeaturesPage = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    document.title = 'Features | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  // Detailed step data for lightboxes
  const stepData = {
    1: {
      number: "01",
      icon: "🔬",
      title: "Mission Mandate",
      subtitle: "Transform your research vision into a mission-ready framework",
      image: "/src/assets/images/features/missionplanning.svg",
      overview: "Our mission mandate phase is where your scientific vision transforms into a concrete, executable space mission plan. We work closely with your research team to understand your objectives, refine your experimental design, and establish clear success metrics that will guide every subsequent phase of your mission.",
      keyActivities: [
        "Comprehensive research objective analysis and refinement",
        "Experimental design optimization for space environment",
        "Success metrics definition and measurement protocols",
        "Risk assessment and mitigation strategy development",
        "Preliminary mission architecture design",
        "Stakeholder alignment and expectation management"
      ],
      deliverables: [
        "Mission Requirements Document (MRD)",
        "Scientific Objectives Matrix",
        "Experimental Protocol Specifications",
        "Risk Assessment Report",
        "Preliminary Mission Timeline"
      ],
      duration: "2-4 weeks",
      dependencies: "Research proposal and initial consultation"
    },
    2: {
      number: "02",
      icon: "✅",
      title: "Regulatory Approval",
      subtitle: "Navigate complex space regulations with expert guidance",
      image: "/src/assets/images/features/spaceregulation.jpg",
      overview: "Space missions operate within a complex regulatory framework involving multiple agencies and international agreements. Our regulatory team handles all compliance requirements, ensuring your mission meets safety protocols and authorization standards without delays or complications.",
      keyActivities: [
        "Regulatory landscape analysis and compliance mapping",
        "Safety documentation preparation and submission",
        "International space law compliance verification",
        "Launch provider coordination and approval",
        "Export control and technology transfer clearances",
        "Insurance and liability documentation"
      ],
      deliverables: [
        "Regulatory Compliance Matrix",
        "Safety Case Documentation",
        "Launch Authorization Permits",
        "Export Control Clearances",
        "Insurance Coverage Certificates"
      ],
      duration: "4-8 weeks",
      dependencies: "Completed Mission Requirements Document"
    },
    3: {
      number: "03",
      icon: "🛰️",
      title: "Satellite Payload Design & Build",
      subtitle: "Custom-engineered hardware for your specific research needs",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1000",
      overview: "Our engineering team designs and manufactures precision payloads tailored to your research requirements. From concept to flight-ready hardware, we ensure your experiments can operate reliably in the harsh environment of space while delivering the data quality you need.",
      keyActivities: [
        "Detailed payload design and engineering specifications",
        "Component selection and qualification testing",
        "Thermal, structural, and electrical system integration",
        "Environmental testing and space qualification",
        "Quality assurance and flight readiness verification",
        "Ground support equipment development"
      ],
      deliverables: [
        "Flight-Ready Payload Hardware",
        "Engineering Design Documentation",
        "Test Reports and Qualification Certificates",
        "Operating Procedures Manual",
        "Ground Support Equipment"
      ],
      duration: "12-20 weeks",
      dependencies: "Approved regulatory documentation and funding"
    },
    4: {
      number: "04",
      icon: "📅",
      title: "Launch Scheduling",
      subtitle: "Secure optimal launch windows aligned with your timeline",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1000",
      overview: "Coordinating with leading launch providers, we secure launch opportunities that align with your mission timeline and budget. Our established relationships with multiple launch companies ensure flexibility and competitive pricing for your mission.",
      keyActivities: [
        "Launch provider evaluation and selection",
        "Orbital mechanics analysis and window optimization",
        "Payload integration scheduling and coordination",
        "Launch contract negotiation and execution",
        "Pre-launch testing and verification protocols",
        "Contingency planning and backup options"
      ],
      deliverables: [
        "Confirmed Launch Manifest Slot",
        "Launch Services Agreement",
        "Orbital Deployment Plan",
        "Pre-Launch Test Schedule",
        "Contingency Response Procedures"
      ],
      duration: "6-12 weeks",
      dependencies: "Flight-ready payload and regulatory approvals"
    },
    5: {
      number: "05",
      icon: "🚀",
      title: "Rocket Launch",
      subtitle: "Professional mission execution and deployment oversight",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1000",
      overview: "Launch day represents the culmination of months of preparation. Our experienced team manages every aspect of the launch process, from final payload integration to orbital deployment verification, ensuring your research reaches space safely and on schedule.",
      keyActivities: [
        "Final payload integration and systems checkout",
        "Launch readiness review and go/no-go decisions",
        "Real-time launch monitoring and telemetry analysis",
        "Orbital insertion verification and tracking",
        "Initial system activation and health checks",
        "Post-launch anomaly investigation if required"
      ],
      deliverables: [
        "Successful Orbital Deployment",
        "Launch Telemetry Data Package",
        "Initial System Status Reports",
        "Orbital Parameters Confirmation",
        "Mission Activation Certification"
      ],
      duration: "1-2 days",
      dependencies: "Completed pre-launch testing and weather clearance"
    },
    6: {
      number: "06",
      icon: "📡",
      title: "Experiment Operations & Data Collection",
      subtitle: "24/7 mission control and continuous data streaming",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000",
      overview: "Once in orbit, our mission operations team provides round-the-clock monitoring and control of your experiment. Real-time data streaming keeps you connected to your research while our operators ensure optimal system performance throughout the mission duration.",
      keyActivities: [
        "Continuous system health monitoring and diagnostics",
        "Experimental protocol execution and optimization",
        "Real-time data collection and quality verification",
        "Anomaly detection and corrective action implementation",
        "Mission timeline management and schedule optimization",
        "Regular status reporting and stakeholder communication"
      ],
      deliverables: [
        "Continuous Experimental Data Stream",
        "Daily Mission Status Reports",
        "System Health and Performance Logs",
        "Anomaly Reports and Resolution Documentation",
        "Raw Data Archives and Backup Systems"
      ],
      duration: "Mission-dependent (weeks to months)",
      dependencies: "Successful launch and system activation"
    },
    7: {
      number: "07",
      icon: "📊",
      title: "Post-Mission Analysis",
      subtitle: "Comprehensive data processing and scientific interpretation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
      overview: "After mission completion, our scientific team works alongside your researchers to process, analyze, and interpret the collected data. We provide comprehensive analysis reports and preliminary findings that form the foundation for your research publications.",
      keyActivities: [
        "Raw data processing and quality assessment",
        "Statistical analysis and trend identification",
        "Comparative analysis with ground-based controls",
        "Scientific interpretation and hypothesis validation",
        "Publication-ready data visualization and graphics",
        "Peer review preparation and manuscript support"
      ],
      deliverables: [
        "Processed Data Packages",
        "Comprehensive Analysis Reports",
        "Statistical Summary Documents",
        "Publication-Ready Figures and Graphics",
        "Scientific Interpretation Summary"
      ],
      duration: "4-8 weeks",
      dependencies: "Completed mission data collection"
    },
    8: {
      number: "08",
      icon: "🏆",
      title: "Project Outcomes",
      subtitle: "Publication-ready results and mission success celebration",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000",
      overview: "The final phase celebrates your mission's success with comprehensive deliverables that support your research goals. From publication-ready manuscripts to physical sample returns, we ensure you have everything needed to advance your scientific objectives.",
      keyActivities: [
        "Final report compilation and quality review",
        "Publication manuscript preparation and editing",
        "Sample processing and laboratory delivery (if applicable)",
        "Mission success documentation and certification",
        "Lessons learned analysis and future recommendations",
        "Stakeholder presentation and dissemination support"
      ],
      deliverables: [
        "Final Mission Report",
        "Publication-Ready Manuscripts",
        "Processed Samples (when applicable)",
        "Mission Success Certification",
        "Future Mission Recommendations"
      ],
      duration: "2-4 weeks",
      dependencies: "Completed data analysis and interpretation"
    }
  };

  const openStepLightbox = (stepNumber) => {
    setSelectedStep(stepData[stepNumber]);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedStep(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <SEO
        title="Features - Space Biology Research Solutions | ResearchSat"
        description="Discover ResearchSat's comprehensive turnkey solutions for space biology research. Custom payload development, diverse mission profiles, and integrated logistics for microgravity experiments."
        keywords={['space biology features', 'custom payloads', 'microgravity research', 'satellite missions', 'space research solutions']}
      />

      <div className={styles.featuresPage}>
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
              <div className={styles.featuresLabel}>_Features</div>
              <h1 className={styles.heroTitle}>
                Your Turnkey Partner for Space Biology Innovation
              </h1>
            </div>
          </div>

          {/* Bottom Content */}
          <div className={styles.bottomContainer}>
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionText}>
                ResearchSat transforms your scientific vision into reality with our end-to-end space research platform. We don't just launch experiments—we make discoveries happen.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.introSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.introContent}>
              <h2 className={styles.sectionTitle}>The Complete Journey: From Concept to Cosmos</h2>
              <div className={styles.introGrid}>
                <div className={styles.introCard}>
                  <h3 className={styles.introCardTitle}>Your Role is Simple: Propose Your Research</h3>
                  <p className={styles.introCardDescription}>
                    Focus on what you do best—the science. While you develop groundbreaking research proposals, we handle everything else.
                  </p>
                </div>
                <div className={styles.introCard}>
                  <h3 className={styles.introCardTitle}>Our Mission</h3>
                  <p className={styles.introCardDescription}>
                    Our mission is to democratize access to microgravity, enabling researchers and industries to explore uncharted territories in life sciences and pharmaceuticals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Timeline */}
        <section className={styles.timelineSection}>
          <div className={styles.sectionContainer}>
            <MissionTimeline />
          </div>
        </section>

        {/* 8-Step Mission Framework */}
        <section className={styles.missionFrameworkSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our 8-Step Mission Framework</h2>
              <p className={styles.sectionDescription}>
                From your initial research proposal to publication-ready results, we guide your project through every phase of space-based research.
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {/* Phase 1 */}
              <div className={styles.stepCard} onClick={() => openStepLightbox(1)}>
                <div className={styles.stepImage}>
                  <img
                    src="/src/assets/images/features/missionplanning.svg"
                    alt="Mission planning and research proposal"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNumber}>01</div>
                  <h3 className={styles.stepTitle}>🔬 Mission Mandate</h3>
                  <p className={styles.stepDescription}>
                    Transform your research proposal into a mission-ready scientific framework. Our experts work with you to refine objectives, define success metrics, and establish experimental parameters that will deliver meaningful results.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className={styles.stepCard} onClick={() => openStepLightbox(2)}>
                <div className={styles.stepImage}>
                  <img
                    src="/src/assets/images/features/spaceregulation.jpg"
                    alt="Regulatory approval and compliance"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNumber}>02</div>
                  <h3 className={styles.stepTitle}>✅ Regulatory Approval</h3>
                  <p className={styles.stepDescription}>
                    Navigate the complex world of space agencies and regulatory bodies effortlessly. We manage all compliance requirements, safety protocols, and authorization processes—so you never have to worry about red tape.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className={styles.stepCard} onClick={() => openStepLightbox(3)}>
                <div className={styles.stepImage}>
                  <img
                    src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=1000"
                    alt="Satellite payload design and manufacturing"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNumber}>03</div>
                  <h3 className={styles.stepTitle}>🛰️ Satellite Payload Design & Build</h3>
                  <p className={styles.stepDescription}>
                    Our in-house engineering team designs and manufactures custom payloads tailored to your specific research needs. From concept sketches to flight-ready hardware, we deliver precision-engineered solutions.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className={styles.stepCard} onClick={() => openStepLightbox(4)}>
                <div className={styles.stepImage}>
                  <img
                    src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1000"
                    alt="Rocket launch scheduling"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNumber}>04</div>
                  <h3 className={styles.stepTitle}>📅 Scheduling Rocket Launch</h3>
                  <p className={styles.stepDescription}>
                    Access to space shouldn't be complicated. We coordinate with leading launch providers to secure optimal launch windows that align with your mission timeline and budget requirements.
                  </p>
                </div>
              </div>

              {/* Phase 5 */}
              <div className={styles.stepCard} onClick={() => openStepLightbox(5)}>
                <div className={styles.stepImage}>
                  <img
                    src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000"
                    alt="Rocket launch"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNumber}>05</div>
                  <h3 className={styles.stepTitle}>🚀 Rocket Launch</h3>
                  <p className={styles.stepDescription}>
                    Watch your research take flight. Our experienced team manages every aspect of the launch process, ensuring your payload reaches its designated orbit safely and on schedule.
                  </p>
                </div>
              </div>

              {/* Phase 6 */}
              <div className={styles.stepCard} onClick={() => openStepLightbox(6)}>
                <div className={styles.stepImage}>
                  <img
                    src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1000"
                    alt="Mission control and data collection"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNumber}>06</div>
                  <h3 className={styles.stepTitle}>📡 Experiment Operations & Data Collection</h3>
                  <p className={styles.stepDescription}>
                    Real-time mission control and data streaming keep you connected to your experiment 24/7. Our operations team monitors system health, executes experimental protocols, and ensures continuous data collection.
                  </p>
                </div>
              </div>

              {/* Phase 7 */}
              <div className={styles.stepCard} onClick={() => openStepLightbox(7)}>
                <div className={styles.stepImage}>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000"
                    alt="Data analysis and research"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNumber}>07</div>
                  <h3 className={styles.stepTitle}>📊 Post-Mission Analysis</h3>
                  <p className={styles.stepDescription}>
                    Receive comprehensive data packages and preliminary analysis reports. Our scientists work alongside your team to interpret results and identify key findings that advance your research.
                  </p>
                </div>
              </div>

              {/* Phase 8 */}
              <div className={styles.stepCard} onClick={() => openStepLightbox(8)}>
                <div className={styles.stepImage}>
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000"
                    alt="Project outcomes and results"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepNumber}>08</div>
                  <h3 className={styles.stepTitle}>🏆 Project Outcomes</h3>
                  <p className={styles.stepDescription}>
                    Celebrate success with publication-ready results, detailed mission reports, and samples (when applicable) delivered directly to your laboratory.
                  </p>
                </div>
              </div>
            </div><br></br>
            <div className={styles.taglineSection}>
                <p className={styles.tagline}>
                  <em>ResearchSat: We plan, develop and execute scientific experiments in space.</em>
                </p>
              </div>
          </div>
        </section>

        {/* Why Choose ResearchSat Section */}
        <section className={styles.whyChooseSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.whyChooseLayout}>
              {/* Left Column: Image */}
              <div className={styles.whyChooseImageColumn}>
                <div className={styles.whyChooseImage}>
                  <img
                    src="/src/assets/images/features/spacemissionResearch.png"
                    alt="ResearchSat space mission research"
                    className={styles.whyChooseImg}
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className={styles.whyChooseContentColumn}>
                <div className={styles.whyChooseHeader}>
                  <h2 className={styles.whyChooseTitle}>
                    Take the First Step<br />
                    Toward Space Discovery
                  </h2>
                </div>

                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>2+</div>
                    <div className={styles.statLabel}>Successful Missions</div>
                    <div className={styles.statDescription}>
                      We've helped researchers worldwide execute groundbreaking experiments in space.
                    </div>
                  </div>

                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>98%</div>
                    <div className={styles.statLabel}>Success Rate</div>
                    <div className={styles.statDescription}>
                      Our meticulous planning and execution processes ensure reliable research outcomes.
                    </div>
                  </div>

                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>5-12</div>
                    <div className={styles.statLabel}>Months to Launch</div>
                    <div className={styles.statDescription}>
                      From concept approval to orbit in as little as 5 months, depending on mission complexity.
                    </div>
                  </div>

                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>24/7</div>
                    <div className={styles.statLabel}>Mission Support</div>
                    <div className={styles.statDescription}>
                      Continuous monitoring and data collection throughout your experiment's duration.
                    </div>
                  </div>
                </div>

                <div className={styles.whyChooseFooter}>
                  <p className={styles.whyChooseTagline}>
                    <strong>ResearchSat:</strong> We plan, develop and execute scientific experiments in space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <SectionDivider />

        {/* Ready to Launch Section */}
        <section className={styles.readyToLaunchSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.readyToLaunchContent}>
              <h2 className={styles.sectionTitle}>Ready to Launch Your Research?</h2>
              <p className={styles.readyToLaunchDescription}>
                <strong>Your next breakthrough is just one proposal away.</strong>
              </p>
              <p className={styles.readyToLaunchText}>
                Contact our mission planning team to discuss how we can transform your research vision into space-based reality. Whether you're investigating materials science, biological systems, Earth observation, or fundamental physics, ResearchSat has the expertise and infrastructure to make it happen.
              </p>

              <div className={styles.ctaButtons}>
                <CalButton
                  className={styles.primaryButton}
                  calLink="researchsat-2023/30min"
                  namespace="30min"
                  config={{ layout: "month_view" }}
                >
                  Schedule a Consultation
                </CalButton>
                <Link to="/missions" className={styles.secondaryButton}>
                  View Mission Gallery
                </Link>
              </div>


            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className={styles.collaborationSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.collaborationContent}>
              <h2 className={styles.sectionTitle}>Collaborate with ResearchSat</h2>
              <p className={styles.collaborationDescription}>
                Join a growing network of researchers and organizations pushing the frontiers of science. Whether you're in academia, pharmaceuticals, or biotechnology, ResearchSat provides the tools and expertise to take your research to new heights.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <strong>Location:</strong> Innovation & Collaboration Centre, University of South Australia, North Terrace, Adelaide SA 5000
                </div>
                <div className={styles.contactItem}>
                  <strong>Contact:</strong> +61 4525 94883
                </div>
                <div className={styles.contactItem}>
                  <strong>Email:</strong> <a href="mailto:info@researchsat.space">info@researchsat.space</a>
                </div>
              </div>

              <div className={styles.ctaSection}>
                <p className={styles.ctaText}>
                  Embark on your journey to space-based research with ResearchSat—where innovation meets the final frontier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Add margin above footer */}
        <div className={styles.footerMargin}></div>
      </div>

      {/* Step Lightbox */}
      <StepLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        stepData={selectedStep}
      />
    </>
  );
};

export default FeaturesPage;
