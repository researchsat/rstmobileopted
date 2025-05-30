import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '../styles/pages/OfferingsPage.module.css';
import heroBackground from '../assets/images/about/hero-background.png';

const OfferingsPage = () => {
  useEffect(() => {
    document.title = 'Our Offerings | ResearchSat';
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      id: 'microgravity-research',
      icon: '🔬',
      title: 'Microgravity Research',
      description: 'Conduct experiments in our orbital laboratories to discover new molecular structures impossible on Earth.',
      features: [
        'Zero-gravity environment',
        'Advanced laboratory equipment',
        'Real-time data transmission',
        'Expert mission support'
      ]
    },
    {
      id: 'gene-therapy',
      icon: '🧬',
      title: 'Gene Therapy',
      description: 'Develop advanced gene therapies with enhanced efficacy through space-based protein crystallization.',
      features: [
        'Protein crystallization',
        'Enhanced purity levels',
        'Accelerated development',
        'Regulatory compliance'
      ]
    },
    {
      id: 'novel-pharmaceuticals',
      icon: '💊',
      title: 'Novel Pharmaceuticals',
      description: 'Create pharmaceuticals with higher purity and unique properties leveraging the space environment.',
      features: [
        'Higher purity compounds',
        'Unique molecular structures',
        'Reduced manufacturing time',
        'Quality assurance protocols'
      ]
    },
    {
      id: 'orbital-manufacturing',
      icon: '🚀',
      title: 'Orbital Manufacturing',
      description: 'Scale production of biotech innovations in our dedicated orbital manufacturing facilities.',
      features: [
        'Scalable production',
        'Dedicated facilities',
        'Quality control systems',
        'Cost-effective solutions'
      ]
    },
    {
      id: 'regulatory-compliance',
      icon: '🛡️',
      title: 'Regulatory Compliance',
      description: 'Our products meet all Earth-based regulatory requirements while pioneering space standards.',
      features: [
        'FDA compliance',
        'International standards',
        'Documentation support',
        'Regulatory consulting'
      ]
    },
    {
      id: 'rapid-development',
      icon: '⚡',
      title: 'Rapid Development',
      description: 'Accelerate R&D cycles with our proprietary space-to-Earth development pipeline.',
      features: [
        'Accelerated timelines',
        'Proprietary processes',
        'End-to-end support',
        'Technology transfer'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Offerings | ResearchSat</title>
        <meta name="description" content="Discover our revolutionary space biotech features and cutting-edge technology that leverages the unique properties of space for biotech innovations." />
        <meta name="keywords" content="space biotech, microgravity research, gene therapy, pharmaceuticals, orbital manufacturing, space technology" />
      </Helmet>

      <div className={styles.offeringsPage}>
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
              <div className={styles.offeringsLabel}>_Our Offerings</div>
              <h1 className={styles.heroTitle}>
                Revolutionary Space Biotech Features
              </h1>
            </div>
          </div>

          {/* Bottom Content */}
          <div className={styles.bottomContainer}>
            <div className={styles.descriptionContainer}>
              <p className={styles.descriptionText}>
                Our cutting-edge technology leverages the unique properties of space to create biotech innovations that transform healthcare and materials science.
              </p>
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  background: 'linear-gradient(180deg, #BBDED0 0%, #87C2AA 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '120%',
                  letterSpacing: '0.25px',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  ...explore our capabilities
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className={styles.offeringsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Capabilities</h2>
              <p className={styles.sectionSubtitle}>
                Transforming healthcare and materials science through space-based innovations
              </p>
            </div>

            <div className={styles.offeringsGrid}>
              {offerings.map((offering) => (
                <div key={offering.id} className={styles.offeringCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.offeringIcon}>{offering.icon}</div>
                    <h3 className={styles.offeringTitle}>{offering.title}</h3>
                  </div>
                  <p className={styles.offeringDescription}>{offering.description}</p>
                  <div className={styles.featuresList}>
                    {offering.features.map((feature, index) => (
                      <div key={index} className={styles.featureItem}>
                        <span className={styles.featureIcon}>✓</span>
                        <span className={styles.featureText}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Launch Your Research?</h2>
              <p className={styles.ctaDescription}>
                Partner with us to leverage the unique advantages of space for your biotech innovations.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/book-mission" className={styles.primaryButton}>
                  Book Mission
                </a>
                <a href="/contact" className={styles.secondaryButton}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OfferingsPage;
