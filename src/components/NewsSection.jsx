import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/NewsSection.module.css';
import avatarImg from '../assets/images/news/avatar-square.svg';
import arrowIcon from '../assets/images/news/arrow-icon.svg';
import chevronLeft from '../assets/images/news/chevron-left.svg';
import chevronRight from '../assets/images/news/chevron-right.svg';
import NewsLightbox from './NewsLightbox';

const NewsSection = () => {
  const newsCardsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Calculate the maximum scroll value and update scroll indicators
  const updateScrollIndicators = () => {
    if (newsCardsRef.current) {
      const container = newsCardsRef.current;
      const maxScrollValue = container.scrollWidth - container.clientWidth;

      // Show/hide scroll arrows based on scroll position
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(container.scrollLeft < maxScrollValue - 20);

      // Calculate active card index based on scroll position
      const cardWidth = 305; // Width of a card
      const gap = 16; // Gap between cards
      const index = Math.round(container.scrollLeft / (cardWidth + gap));
      setActiveIndex(index);
    }
  };

  // Initialize scroll indicators on component mount
  useEffect(() => {
    updateScrollIndicators();

    // Add resize event listener to recalculate on window resize
    window.addEventListener('resize', updateScrollIndicators);
    return () => {
      window.removeEventListener('resize', updateScrollIndicators);
    };
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const container = newsCardsRef.current;
    if (container) {
      // Throttle function to improve scroll performance
      let isScrolling = false;
      const handleScroll = () => {
        if (!isScrolling) {
          isScrolling = true;
          window.requestAnimationFrame(() => {
            updateScrollIndicators();
            isScrolling = false;
          });
        }
      };

      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Handle mouse down event for dragging
  const handleMouseDown = (e) => {
    if (!newsCardsRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - newsCardsRef.current.offsetLeft);
    setScrollLeft(newsCardsRef.current.scrollLeft);
    newsCardsRef.current.style.cursor = 'grabbing';
    newsCardsRef.current.style.userSelect = 'none';
  };

  // Handle mouse move event for dragging
  const handleMouseMove = (e) => {
    if (!isDragging || !newsCardsRef.current) return;

    const x = e.pageX - newsCardsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    newsCardsRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up event for dragging
  const handleMouseUp = () => {
    setIsDragging(false);
    if (newsCardsRef.current) {
      newsCardsRef.current.style.cursor = 'grab';
      newsCardsRef.current.style.removeProperty('user-select');
    }
  };

  // Handle mouse leave event for dragging
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (newsCardsRef.current) {
        newsCardsRef.current.style.cursor = 'grab';
        newsCardsRef.current.style.removeProperty('user-select');
      }
    }
  };

  // Handle touch start event for dragging on mobile
  const handleTouchStart = (e) => {
    if (!newsCardsRef.current) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - newsCardsRef.current.offsetLeft);
    setScrollLeft(newsCardsRef.current.scrollLeft);
  };

  // Handle touch move event for dragging on mobile
  const handleTouchMove = (e) => {
    if (!isDragging || !newsCardsRef.current) return;

    const x = e.touches[0].pageX - newsCardsRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    newsCardsRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch end event for dragging on mobile
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Scroll to a specific card
  const scrollToCard = (index) => {
    if (!newsCardsRef.current) return;

    const cardWidth = 305; // Width of a card
    const gap = 16; // Gap between cards
    const scrollAmount = index * (cardWidth + gap);

    newsCardsRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });

    setActiveIndex(index);
  };

  // Scroll to the next card
  const scrollToNextCard = () => {
    if (!newsCardsRef.current) return;

    const cardWidth = 305; // Width of a card
    const gap = 16; // Gap between cards
    const container = newsCardsRef.current;
    const totalCards = newsCards.length;

    // Calculate the next index, ensuring it doesn't exceed the total number of cards
    const nextIndex = Math.min(activeIndex + 1, totalCards - 1);

    // Scroll to the next card
    container.scrollTo({
      left: nextIndex * (cardWidth + gap),
      behavior: 'smooth'
    });

    setActiveIndex(nextIndex);
  };

  // Scroll to the previous card
  const scrollToPrevCard = () => {
    if (!newsCardsRef.current) return;

    const cardWidth = 305; // Width of a card
    const gap = 16; // Gap between cards
    const container = newsCardsRef.current;

    // Calculate the previous index, ensuring it doesn't go below 0
    const prevIndex = Math.max(activeIndex - 1, 0);

    // Scroll to the previous card
    container.scrollTo({
      left: prevIndex * (cardWidth + gap),
      behavior: 'smooth'
    });

    setActiveIndex(prevIndex);
  };

  // Open lightbox with the selected card
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    // Restore body scrolling when lightbox is closed
    document.body.style.overflow = 'auto';
  };

  // News card data
  const newsCards = [
    {
      id: 1,
      category: 'Partnership',
      title: 'Cryogenics Alliance: ResearchSat × Onnes Cryogenics',
      date: '26 Mar 2025',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000)',
      content: "ResearchSat announced a strategic partnership with Dutch‑Australian cryogenic pioneer Onnes Cryogenics to integrate advanced zero‑boil‑off cooling into forthcoming bioreactor satellites, enabling temperature‑sensitive pharma workflows in orbit.",
      additionalContent: "The accord was celebrated during a South‑Australian trade mission to Hyderabad, marking a significant step forward in our mission to advance space biology research capabilities."
    },
    {
      id: 2,
      category: 'Media',
      title: 'Lot Fourteen Feature on Microgravity Breakthroughs',
      date: '21 Apr 2025',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000)',
      content: "Adelaide's Lot Fourteen innovation precinct profiled ResearchSat's expansion in South Australia, emphasising plans to scale bacteria‑based experiments and orbital manufacturing after earlier sub‑orbital successes.",
      additionalContent: "The feature highlights our growing presence in the South Australian space ecosystem and our contributions to advancing microgravity research capabilities."
    },
    {
      id: 3,
      category: 'Partnership',
      title: 'Edge-AI MoU with AICRAFT',
      date: '17 Apr 2025',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000)',
      content: "A Memorandum of Understanding with edge‑computing firm AICRAFT will embed real‑time on‑orbit analytics into biological payloads, reducing downlink bandwidth and accelerating experiment iteration cycles.",
      additionalContent: "This collaboration represents a significant advancement in our data processing capabilities, allowing for more efficient and responsive space-based experiments."
    },
    {
      id: 4,
      category: 'Collaboration',
      title: 'Strategic Collaboration: Cambrian Executive Partnership',
      date: '15 Apr 2025',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1000)',
      content: "ResearchSat has entered into a strategic executive partnership with Cambrian Bio to explore microgravity-enabled drug discovery pathways for longevity therapeutics.",
      additionalContent: "This collaboration combines our expertise in space-based research platforms with Cambrian's pioneering work in longevity science, opening new frontiers in pharmaceutical development."
    },
    {
      id: 5,
      category: 'Article',
      title: 'Thought Leadership Series — Space Bioreactors',
      date: '08 Mar 2025',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000)',
      content: "In a long‑form article, ResearchSat detailed its roadmap for in‑space tissue engineering, drug discovery, and food‑tech applications of its proprietary ADI‑Lab platform.",
      additionalContent: "The article explores how our innovative approach to space bioreactors is creating new possibilities across multiple industries, from pharmaceuticals to sustainable food production."
    },
    {
      id: 6,
      category: 'Research',
      title: 'Expert Insights: Regenerative Medicine Post',
      date: '19 Mar 2025',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=1000)',
      content: "A widely‑shared LinkedIn post explored how microgravity modulates stem‑cell pathways, positioning space bioprocessing as a cornerstone for next‑gen therapies.",
      additionalContent: "Our research team's insights into the unique cellular behaviors observed in microgravity environments are helping to advance the field of regenerative medicine and opening new therapeutic possibilities."
    },
    {
      id: 7,
      category: 'Interview',
      title: 'In-Depth Founder Interview in Biostache',
      date: '24 Feb 2025',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000)',
      content: "Biostache magazine featured an extensive interview with ResearchSat's founders, discussing the journey from concept to orbital deployment and future visions for space-based biotechnology.",
      additionalContent: "The interview provides insights into our founding story, the challenges we've overcome, and our ambitious plans to revolutionize biological research through microgravity experimentation."
    },
    {
      id: 8,
      category: 'Recognition',
      title: 'Industry Recognition: "Startups to Watch 2025" Listing',
      date: 'Apr 2025',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000)',
      content: "SpaceConnect Online listed ResearchSat among Australia's five most innovative space ventures, citing AI‑driven feedback loops and scalable bioreactor design.",
      additionalContent: "This recognition highlights our position at the forefront of space innovation and acknowledges our contributions to advancing Australia's capabilities in the global space economy."
    }
  ];

  return (
    <section className={`${styles.newsSection} parallax-section`}>
      <div className={`${styles.container} parallax-content`}>
        {/* Header */}
        <div className={styles.newsLabel}>_News</div>
        <h2 className={styles.newsTitle}>Here's what's new with us</h2>

        {/* View All Button */}
        <Link to="/news" className={styles.viewAllButton}>
          View All
        </Link>

        {/* News Content */}
        <div className={styles.newsContent}>
          {/* Featured Article */}
          <div className={styles.featuredArticle}>
            <div className={styles.authorImage}>
              <img src={avatarImg} alt="John Kelly" />
            </div>
            <h3 className={styles.authorName}>ResearchSat Team</h3>
            <p className={styles.articleExcerpt}>
              Unlocking the Future of Drug Discovery in Microgravity! By sending experiments into microgravity,
              we're achieving exceptional crystal quality that's hard to replicate on Earth...
            </p>
            <Link to="/news/article/featured-1" className={styles.readMoreLink}>
              Read More
            </Link>
          </div>

          {/* News Cards */}
          <div className={styles.newsCardsContainer}>
            {/* Left Navigation Arrow */}
            <button
              className={`${styles.navArrow} ${styles.leftArrow} ${showLeftArrow ? styles.visible : ''}`}
              onClick={scrollToPrevCard}
              aria-label="Previous cards"
            >
              <img src={chevronLeft} alt="Previous" />
            </button>

            {/* Scrollable Cards Container */}
            <div
              className={styles.newsCards}
              ref={newsCardsRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {newsCards.map((card, index) => (
                <div
                  key={card.id}
                  className={styles.newsCard}
                  style={{ backgroundImage: card.backgroundImage }}
                  onClick={(e) => {
                    e.preventDefault();
                    openLightbox(index);
                  }}
                >
                  <img src={arrowIcon} alt="" className={styles.cardIcon} />
                  <div className={styles.cardDetails}>
                    <div className={styles.cardCategory}>{card.category}</div>
                    <h4 className={styles.cardTitle}>{card.title}</h4>
                    <div className={styles.cardDate}>{card.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Navigation Arrow */}
            <button
              className={`${styles.navArrow} ${styles.rightArrow} ${showRightArrow ? styles.visible : ''}`}
              onClick={scrollToNextCard}
              aria-label="Next cards"
            >
              <img src={chevronRight} alt="Next" />
            </button>

            {/* Scroll Indicators */}
            <div className={styles.scrollIndicators}>
              {newsCards.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.scrollDot} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => scrollToCard(index)}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* News Lightbox */}
      <NewsLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        newsCards={newsCards}
        initialIndex={lightboxIndex}
      />
    </section>
  );
};

export default NewsSection;
