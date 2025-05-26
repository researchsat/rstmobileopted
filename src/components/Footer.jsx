import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Footer.module.css';
import logoImage from '../assets/images/ResearchSatLogo.png';
import facebookIcon from '../assets/images/social-new/facebook.svg';
import twitterIcon from '../assets/images/social-new/twitter.svg';
import instagramIcon from '../assets/images/social-new/instagram.svg';
import linkedinIcon from '../assets/images/social-new/linkedin.svg';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription for:', email);
    // Reset form
    setEmail('');
    // Show success message (in a real app)
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top row with logo */}
        <div className={styles.footerTop}>
          <img src={logoImage} alt="ResearchSat Logo" className={styles.footerLogo} />
        </div>

        {/* Bottom row with 4 columns */}
        <div className={styles.footerContent}>
          {/* Column 1: Address and Contact */}
          <div className={styles.footerColumn}>
            <div className={styles.footerAddress}>
              <p className={styles.footerText}>9 Light Square,</p>
              <p className={styles.footerText}>Adelaide, SA 5000</p>
            </div>
            <p className={styles.footerContact}>info@researchsat.space</p>
            <p className={styles.footerContact}>+61 124.459.8900</p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.footerColumn}>
            <Link to="/" className={styles.footerLink}>Home</Link>
            <Link to="/about" className={styles.footerLink}>About</Link>
            <Link to="/missions" className={styles.footerLink}>Mission</Link>
            <Link to="/terms-conditions" className={styles.footerLink}>Terms & Conditions</Link>
          </div>

          {/* Column 3: More Links */}
          <div className={styles.footerColumn}>
            <Link to="/news" className={styles.footerLink}>News</Link>
            <Link to="/careers" className={styles.footerLink}>Careers</Link>
            <Link to="/contact" className={styles.footerLink}>Contact</Link>
            <Link to="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
          </div>

          {/* Column 4: More Links */}
          <div className={styles.footerColumn}>
            <Link to="/payloads" className={styles.footerLink}>Payloads</Link>
            <Link to="/past-missions" className={styles.footerLink}>Past Missions</Link>
            <Link to="/copyright" className={styles.footerLink}>Copyright</Link>
            <Link to="/cookies-policy" className={styles.footerLink}>Cookies Policy</Link>
          </div>

          {/* Column 5: Newsletter */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Subscribe to our newsletter</h3>
            <p className={styles.footerText}>Stay updated on our latest missions &</p>
            <p className={styles.footerText}>advancements</p>

            <p className={styles.emailLabel}>Email ID</p>
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter Email ID"
                className={styles.newsletterInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footerDivider}></div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            Copyright © {new Date().getFullYear()} ResearchSat - All rights reserved
          </div>
          <div className={styles.socialContainer}>
            <div className={styles.socialText}>Reach us</div>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/researchsat/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src={facebookIcon} alt="Facebook" className={styles.facebookIcon} />
              </a>
              <a href="https://twitter.com/researchsat" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src={twitterIcon} alt="Twitter" className={styles.twitterIcon} />
              </a>
              <a href="https://www.instagram.com/researchsat/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src={instagramIcon} alt="Instagram" className={styles.instagramIcon} />
              </a>
              <a href="https://www.linkedin.com/company/researchsat/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src={linkedinIcon} alt="LinkedIn" className={styles.linkedinIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
