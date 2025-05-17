import React from 'react';
import styles from '../styles/components/AboutTeamSection.module.css';

// Import team member images
import adeelImage from '../assets/images/about/team/adeel.png';
import nevileImage from '../assets/images/about/team/nevile.png';
import sakiImage from '../assets/images/about/team/saki.jpg';
import shrushtiImage from '../assets/images/about/team/shrusthi.png';
import raviImage from '../assets/images/about/team/Ravi.jpg';
import jibinImage from '../assets/images/about/team/jibin.png';
import sureshImage from '../assets/images/about/team/suresh.png';
import tannuImage from '../assets/images/about/team/tannu.jpg';

const AboutTeamSection = () => {
  // Team member data based on ResearchSat website
  const teamMembers = [
    {
      id: 1,
      name: 'RaviTeja Duggineni',
      title: 'Founder and CEO',
      image: raviImage,
      linkedin: 'https://www.linkedin.com/in/raviteja-duggineni/'
    },
    {
      id: 2,
      name: 'Jibin Jeffrey Dhanaraj',
      title: 'Co-Founder and CTO',
      image: jibinImage,
      linkedin: 'https://www.linkedin.com/in/jibin-dhanaraj/'
    },
    {
      id: 3,
      name: 'Shrushti Patil',
      title: 'Space Microbiologist',
      image: shrushtiImage,
      linkedin: 'https://www.linkedin.com/in/shrushti-patil-947b90157/'
    },
    {
      id: 4,
      name: 'Saki Jameson',
      title: 'Taxation & Financial Advisor',
      image: sakiImage,
      linkedin: 'https://www.linkedin.com/in/saki-jameson-aipa-afa-66b00512/'
    },
    {
      id: 5,
      name: 'Neville Calvert •',
      title: 'Corporate Advisor',
      image: nevileImage,
      linkedin: 'https://www.linkedin.com/in/nevillecalvertcorporatefinance/'
    },
    {
      id: 6,
      name: 'Dr. Adeel NASIR',
      title: 'Space biologist Advisor',
      image: adeelImage,
      linkedin: 'https://www.linkedin.com/in/nasiradeel/'
    },
    {
      id: 7,
      name: 'Suresh Poosala',
      title: 'Drug formulation expert',
      image: sureshImage,
      linkedin: 'https://www.linkedin.com/in/sureshpoosala/'
    },
    {
      id: 8,
      name: 'Tannu Agarwal',
      title: 'Marketing and Communications Officer',
      image: tannuImage,
      linkedin: 'https://www.linkedin.com/in/tannuagarwal/'
    },
  ];

  return (
    <section className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>Meet the Team</h2>
      <p className={styles.sectionSubtitle}>
        Meet the team who are exploring the unique characteristics of microgravity to develop the applications that aid life-sciences advancements
      </p>

      {/* Team Members Grid */}
      <div className={styles.carouselContainer}>
        <div className={styles.teamGrid}>
          {teamMembers.slice(0, 4).map(member => (
            <a
              key={member.id}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${member.image})`
              }}
            >
              <div className={styles.cardDetails}>
                <div className={styles.cardHeading}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>{member.title}</div>
                    <div className={styles.cardName}>{member.name}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Second Row of Team Members */}
      <div className={styles.carouselContainer} style={{ marginTop: '20px' }}>
        <div className={styles.teamGrid}>
          {teamMembers.slice(4, 8).map(member => (
            <a
              key={member.id}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${member.image})`
              }}
            >
              <div className={styles.cardDetails}>
                <div className={styles.cardHeading}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>{member.title}</div>
                    <div className={styles.cardName}>{member.name}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
