import React, { useEffect } from 'react';
import styles from '../styles/pages/ContactPage.module.css';
import ContactHeroSection from '../components/ContactHeroSection';
import ContactSecondSection from '../components/ContactSecondSection';
import ContactFormSection from '../components/ContactFormSection';
import ContactPartnershipsSection from '../components/ContactPartnershipsSection';
import ContactLastSection from '../components/ContactLastSection';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <ContactHeroSection />

      {/* Second Section */}
      <ContactSecondSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Partnerships Section */}
      <ContactPartnershipsSection />

      {/* Contact Last Section */}
      <ContactLastSection />

      {/* Add margin above footer */}
      <div className={styles.footerMargin}></div>
    </div>
  );
};

export default ContactPage;
