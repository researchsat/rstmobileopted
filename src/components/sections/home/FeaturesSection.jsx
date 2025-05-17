import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/FeaturesSection.module.css';

const FeaturesSection = () => {
  // Slider data
  const sliderData = [
    {
      id: 1,
      icon: "/src/assets/images/features/objects.svg",
      title: "Microgravity platform",
      description: "A weightless environment is necessary for conducting cutting edge research on biological systems.",
      buttonText: "See All"
    },
    {
      id: 2,
      icon: "/src/assets/images/features/objects0.svg",
      title: "Automated experiments",
      description: "Advanced automation technology is necessary to ensure that experiments are conducted remotely and with precision.",
      buttonText: "Learn More"
    },
    {
      id: 3,
      icon: "/src/assets/images/features/objects1.svg",
      title: "Customizable platform",
      description: "The ability to customize the satellite platform to meet the specific needs of each client requirements for a successful research.",
      buttonText: "Explore Options"
    },
    {
      id: 4,
      icon: "/src/assets/images/features/objects2.svg",
      title: "Comprehensive logistics support",
      description: "Conducting experiments in space requires comprehensive logistics support including launch services, transportation and integrations.",
      buttonText: "Contact Us"
    }
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Hardware label texts that will continuously roll
  const hardwareLabels = [
    "Space hardware for experiments",
    "Affordable satellite platforms",
    "Modular platforms"
  ];

  // State for current hardware label
  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Auto-rotate hardware labels with 600ms transition delay
  useEffect(() => {
    const labelInterval = setInterval(() => {
      setCurrentLabelIndex((prev) => (prev === hardwareLabels.length - 1 ? 0 : prev + 1));
    }, 3600); // Rotate every 3.6 seconds (3000ms + 600ms transition)

    return () => clearInterval(labelInterval);
  }, []);

  // Function to go to next slide
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
        setIsAnimating(false);
      }, 500);
    }
  };

  // Calculate indicator position
  const indicatorPosition = `${(currentSlide / (sliderData.length - 1)) * 100}%`;

  return (
    <section className={`${styles.featuresSection} parallax-section`}>
      <div className={`${styles.container} parallax-content`}>
        {/* Header */}
        <div className={styles.capabilitiesLabel}>_Capabilities</div>
        <h2 className={styles.featuresTitle}>Our Features</h2>

        {/* Feature Slider */}
        <div className={styles.featureSlider}>
          <div className={`${styles.featureCard} ${isAnimating ? styles.slideOut : ''}`}>
            <div className={styles.featureContent}>
              <img
                src={sliderData[currentSlide].icon}
                alt=""
                className={styles.objectsIcon}
              />
              <div className={styles.featureTextContainer}>
                <h3 className={styles.featureTitle}>{sliderData[currentSlide].title}</h3>
                <p className={styles.featureDescription}>
                  {sliderData[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Slider Indicator */}
          <div className={styles.sliderIndicator}>
            <div className={styles.sliderTrack}>
              <div
                className={styles.sliderProgress}
                style={{ width: indicatorPosition }}
              ></div>
            </div>
          </div>
        </div>

        {/* Dynamic Button */}
        <Link to="/features" className={`${styles.seeAllButton} ${isAnimating ? styles.buttonFade : ''}`}>
          {sliderData[currentSlide].buttonText || "See All"}
        </Link>

        {/* Feature Image */}
        <div className={styles.imageContainer}>
          <img
            src="/src/assets/images/features/image-18690.png"
            alt="Microgravity platform"
            className={styles.featureImage}
          />

          {/* Hardware Label */}
          <div className={styles.hardwareLabel}>
            <img src="/src/assets/images/features/bolt.svg" alt="" className={styles.boltIcon} />
            <div className={styles.labelTextContainer}>
              {hardwareLabels.map((label, index) => (
                <div
                  key={`label-${index}`}
                  className={`${styles.labelText} ${index === currentLabelIndex ? styles.activeLabel : styles.inactiveLabel}`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
