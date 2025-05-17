import React from 'react';
import styles from '../styles/components/SpaceSection.module.css';

// Import partner logo images directly with correct filenames
import logo1 from '../assets/images/partners/SMA.png';
import logo2 from '../assets/images/partners/sasic.png';
import logo3 from '../assets/images/partners/agnikul.png';
import logo4 from '../assets/images/partners/Hex.svg';
import logo5 from '../assets/images/partners/Asro.png';
import logo6 from '../assets/images/partners/ssc.png';
import logo7 from '../assets/images/partners/unisa.png';
import logo8 from '../assets/images/partners/state.png';
import logo9 from '../assets/images/partners/onnes.png';
import logo10 from '../assets/images/partners/iCC.png';
import logo11 from '../assets/images/partners/adluni.svg';
import logo12 from '../assets/images/partners/OrbitalParadigm.png';
import logo13 from '../assets/images/partners/aicraft.png';
import logo14 from '../assets/images/partners/cmex.png';
import logo15 from '../assets/images/partners/badge.png';
import logo16 from '../assets/images/partners/sandc.png';

const SpaceSection = () => {
  // Create two identical sets of logos for a seamless loop
  const logoSet = [
    logo1, logo2, logo3, logo4, logo5,
    logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16
  ];

  // Duplicate the entire set to create a seamless loop
  const allLogos = [...logoSet, ...logoSet];

  return (
    <section className={styles.spaceSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <div className={styles.microbiologyText}>_Microbiology</div>
          <h2 className={styles.spaceText}>
            <span className={styles.spaceHighlight}>Space</span> provides a unique environment that challenges the fluid dynamics affecting the living cell dynamics.
          </h2>
        </div>

        {/* Right Content */}
        <div className={styles.rightContent}>
          <h3 className={styles.partnerTitle}>
            And we are your partner for end-to-end Space Biology Research
          </h3>
          <p className={styles.description}>
            From tailor-made satellite payloads to a range of space mission types to provide a seamless, end-to-end Space Research Solutions
          </p>
        </div>

        {/* Partner Logos */}
        <div className={styles.partnerLogosContainer}>
          <div className={styles.partnerLogos}>
            {allLogos.map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                <img
                  src={logo}
                  alt={`Partner Logo ${index % 10 + 1}`}
                  className={styles.partnerLogo}
                  width={120}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
