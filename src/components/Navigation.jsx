import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Navigation.module.css';
import logoImage from '../assets/images/new-logo.svg';
import boltIcon from '../assets/images/bolt-icon.svg';

// Import icons for dropdown menu
import homeIcon from '../assets/images/icon-home.svg';
import servicesIcon from '../assets/images/icon-services.svg';
import aboutIcon from '../assets/images/icon-about.svg';
import missionIcon from '../assets/images/icon-mission.svg';
import payloadsIcon from '../assets/images/payloads-icon.svg';
import newsIcon from '../assets/images/news-icon.svg';
import careersIcon from '../assets/images/career-icon.svg';
import contactsIcon from '../assets/images/contacts-icon.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  // Handle navbar visibility and collapse on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if scrolled past threshold
      const scrolled = currentScrollPos > 60;
      setIsScrolled(scrolled);

      // Show/hide based on scroll direction with a threshold
      // Only hide when scrolling down and past the threshold
      if (currentScrollPos < 60) {
        setIsVisible(true);
      } else if (currentScrollPos > prevScrollPos + 10) {
        // Hide when scrolling down more than 10px
        setIsVisible(false);
      } else if (prevScrollPos > currentScrollPos + 10) {
        // Show when scrolling up more than 10px
        setIsVisible(true);
      }

      // Update previous scroll position with a small delay to avoid flickering
      setTimeout(() => {
        setPrevScrollPos(currentScrollPos);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // Mobile detection useEffect
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.topNavCollapse : ''} ${!isVisible ? styles.navHidden : ''}`}>
      <div className={styles.frame1000006514}>
        {/* Logo */}
        <Link className={styles.logoContainer} to="/">
          <img className={styles.logoImage} src={logoImage} alt="ResearchSat Logo" />
        </Link>

        {/* Navigation Links */}
        <div className={styles.navLinksContainer}>
          <div className={styles.navLinksGroup}>
            <Link className={styles.navLinkHome} to="/" onClick={() => window.scrollTo(0, 0)}>
              <span className={styles.navLinkHomeText}>Home</span>
            </Link>
            <Link className={styles.navLinkServices} to="/about">
              <span className={styles.navLinkServicesText}>About</span>
            </Link>
          </div>

          <div className={styles.menuContainer} onClick={toggleMenu} ref={menuRef}>
            <button className={styles.menuButton} type="button">
              <img className={styles.menuIcon} src={boltIcon} alt="Menu" />
              <span className={styles.menuText}>Menu</span>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownColumns}>
                  {/* Column 1 */}
                  <div className={styles.dropdownColumn}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      <img src={homeIcon} alt="Home" width="16" height="16" />
                      Home
                    </Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                      <img src={aboutIcon} alt="About" width="16" height="16" />
                      About
                    </Link>
                    <Link to="/features" onClick={() => setIsMenuOpen(false)}>
                      <img src={servicesIcon} alt="Features" width="16" height="16" />
                      Features
                    </Link>
                    <Link to="/offerings" onClick={() => setIsMenuOpen(false)}>
                      <img src={servicesIcon} alt="Offerings" width="16" height="16" />
                      Our Offerings
                    </Link>
                  </div>

                  {/* Column 2 */}
                  <div className={styles.dropdownColumn}>
                    <Link to="/missions" onClick={() => setIsMenuOpen(false)}>
                      <img src={missionIcon} alt="Mission" width="16" height="16" />
                      Mission
                    </Link>
                    <Link to="/payloads" onClick={() => setIsMenuOpen(false)}>
                      <img src={payloadsIcon} alt="Payloads" width="16" height="16" />
                      Payloads
                    </Link>
                  </div>

                  {/* Column 3 */}
                  <div className={styles.dropdownColumn}>
                    <Link to="/news" onClick={() => setIsMenuOpen(false)}>
                      <img src={newsIcon} alt="News" width="16" height="16" />
                      News
                    </Link>
                    <Link to="/careers" onClick={() => setIsMenuOpen(false)}>
                      <img src={careersIcon} alt="Careers" width="16" height="16" />
                      Careers
                    </Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      <img src={contactsIcon} alt="Contact" width="16" height="16" />
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link className={styles.contactButton} to="/book-mission">
            <span className={styles.contactText}>{isMobile ? 'Book' : 'Book Mission'}</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={styles.mobileToggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileNavMenu"
          aria-controls="mobileNavMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={styles.togglerIcon}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="collapse navbar-collapse" id="mobileNavMenu">
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList}>
            <li>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/offerings">Our Offerings</Link>
            </li>
            <li>
              <Link to="/missions">Mission</Link>
            </li>
            <li>
              <Link to="/payloads">Payloads</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/book-mission">{isMobile ? 'Book' : 'Book Mission'}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
