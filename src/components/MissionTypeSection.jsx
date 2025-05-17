import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/MissionTypeSection.module.css';

const MissionTypeSection = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  applications,
  image,
  imagePosition = 'right',
  contactLink = '/contact'
}) => {
  return (
    <section className={`${styles.missionSection} ${imagePosition === 'left' ? styles.imageLeft : ''}`}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h2 className={styles.missionTitle}>{title}</h2>
          <h6 className={styles.missionSubtitle}>{subtitle}</h6>
          
          <p className={styles.missionDescription}>
            {description}
          </p>
          
          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <i className={styles.checkIcon}></i>
                <div className={styles.featureText}>{feature}</div>
              </li>
            ))}
          </ul>
          
          {applications && (
            <p className={styles.applicationsText}>
              <strong className={styles.applicationsTitle}>Potential Applications:</strong> {applications}
            </p>
          )}
          
          <Link to={contactLink} className={styles.learnMoreButton}>
            Learn More
          </Link>
        </div>
        
        <div className={styles.imageContainer}>
          <img 
            src={image} 
            alt={title} 
            className={styles.missionImage} 
          />
        </div>
      </div>
    </section>
  );
};

export default MissionTypeSection;
