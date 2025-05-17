import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import styles from '../styles/components/Contact.module.css';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('form');

  useEffect(() => {
    // Initialize Cal.com inline embed if it exists and calendar tab is active
    if (activeTab === 'calendar' && window.Cal && document.getElementById('my-cal-inline')) {
      window.Cal.inline({
        elementOrSelector: '#my-cal-inline',
        calLink: 'researchsat-2023/30min',
        config: {
          layout: 'month_view',
          hideEventTypeDetails: false,
          cssVarsPerTheme: {
            light: {
              'cal-brand': '#cf1414'
            }
          }
        }
      });
    }
  }, [activeTab]);

  return (
    <div id="contact" className="form-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Contact Us</h2>
            <p className="p-heading">Have questions about our space biology research solutions? We're here to help!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <ul className="list-unstyled li-space-lg">
                <li className={styles.addressItem}>
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Address:</strong><br />
                    ICC, University of South Australia,<br />
                    North Terrace, Adelaide SA 5000
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <i className="fas fa-phone"></i>
                  <div>
                    <strong>Phone:</strong><br />
                    <a className="turquoise" href="tel:+61452594883">+61 4525 94883</a>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <i className="fas fa-envelope"></i>
                  <div>
                    <strong>Email:</strong><br />
                    <a className="turquoise" href="mailto:info@researchsat.space">info@researchsat.space</a>
                  </div>
                </li>
              </ul>

              <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/researchsat/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/company/researchsat/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/researchsat" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.contactTabs}>
              <div className={styles.tabsHeader}>
                <button
                  className={`${styles.tabButton} ${activeTab === 'form' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('form')}
                >
                  <i className="fas fa-envelope"></i> Contact Form
                </button>
                <button
                  className={`${styles.tabButton} ${activeTab === 'calendar' ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab('calendar')}
                >
                  <i className="fas fa-calendar-alt"></i> Schedule a Call
                </button>
              </div>

              <div className={styles.tabsContent}>
                {activeTab === 'form' ? (
                  <ContactForm />
                ) : (
                  <div className={styles.calendarContainer} id="my-cal-inline"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
