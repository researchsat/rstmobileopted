import React, { useState } from 'react';
import styles from '../styles/components/PayloadSectionImageLeft.module.css';
import PayloadLightbox from './PayloadLightbox';

const PayloadSectionImageLeft = ({ 
  image, 
  title, 
  date, 
  description, 
  readMoreLink,
  features = [],
  applications = '',
  subtitle = ''
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (e) => {
    e.preventDefault();
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={title} 
          className={styles.sectionImage} 
        />
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <h3 className={styles.sectionTitle}>{title}</h3>
          {date && <div className={styles.sectionDate}>{date}</div>}
        </div>
        
        <div className={styles.descriptionContainer}>
          <p className={styles.sectionDescription}>{description}</p>
          <a href="#" onClick={openLightbox} className={styles.readMoreLink}>
            Read More
          </a>
        </div>
      </div>

      <PayloadLightbox 
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        title={title}
        subtitle={subtitle}
        image={image}
        features={features}
        applications={applications}
      />
    </section>
  );
};

export default PayloadSectionImageLeft;
